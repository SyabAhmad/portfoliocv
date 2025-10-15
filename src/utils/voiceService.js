/**
 * Voice Service for Speech Recognition and Text-to-Speech
 * Uses browser's native Web Speech API (100% free!)
 */

class VoiceService {
  constructor() {
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    this.isListening = false;
    this.currentUtterance = null;
    this.voices = [];
    this.currentAudio = null;
    this.groqApiKey = process.env.REACT_APP_GROQ_API_KEY || null;
    this.groqVoiceName = process.env.REACT_APP_GROQ_TTS_VOICE || 'Aaliyah-PlayAI';
    this.groqTtsEnabled = Boolean(this.groqApiKey);
    
    this.initRecognition();
    this.loadVoices();
  }

  /**
   * Initialize Speech Recognition
   */
  initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      console.warn('Speech Recognition not supported in this browser');
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.lang = 'en-US';
    this.recognition.maxAlternatives = 1;
  }

  /**
   * Load available voices
   */
  loadVoices() {
    const loadVoicesWhenReady = () => {
      this.voices = this.synthesis.getVoices();
      if (this.voices.length === 0) {
        setTimeout(loadVoicesWhenReady, 100);
      }
    };

    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = loadVoicesWhenReady;
    }
    
    loadVoicesWhenReady();
  }

  /**
   * Get the best female voice available
   */
  getBestVoice() {
    // Prefer English female voices
    const femaleVoices = this.voices.filter(voice => 
      voice.lang.startsWith('en') && 
      (voice.name.toLowerCase().includes('female') || 
       voice.name.toLowerCase().includes('woman') ||
       voice.name.toLowerCase().includes('samantha') ||
       voice.name.toLowerCase().includes('karen') ||
       voice.name.toLowerCase().includes('victoria') ||
       voice.name.toLowerCase().includes('zira'))
    );

    if (femaleVoices.length > 0) {
      return femaleVoices[0];
    }

    // Fallback to any English voice
    const englishVoices = this.voices.filter(voice => voice.lang.startsWith('en'));
    return englishVoices[0] || this.voices[0];
  }

  /**
   * Start listening for voice input
   * @param {Function} onResult - Callback with transcribed text
   * @param {Function} onError - Callback for errors
   */
  startListening(onResult, onError) {
    if (!this.recognition) {
      onError?.('not-supported');
      return;
    }

    if (this.isListening) {
      this.stopListening();
    }

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      this.isListening = false;
      onResult?.(transcript);
    };

    this.recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      this.isListening = false;
      onError?.(event.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    try {
      this.recognition.start();
      this.isListening = true;
      console.log('✅ Speech recognition started successfully');
    } catch (error) {
      console.error('Error starting recognition:', error);
      this.isListening = false;
      onError?.('audio-capture');
    }
  }

  /**
   * Stop listening
   */
  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
        console.log('🛑 Speech recognition stopped');
      } catch (error) {
        console.error('Error stopping recognition:', error);
      }
      this.isListening = false;
    }
  }

  /**
   * Speak text using text-to-speech
   * @param {string} text - Text to speak
   * @param {Function} onStart - Callback when speech starts
   * @param {Function} onEnd - Callback when speech ends
   * @param {Object} options - Speech options (rate, pitch, volume)
   */
  async speak(text, onStart, onEnd, options = {}) {
    // Try Groq TTS if API key is available
    if (this.groqTtsEnabled) {
      try {
        await this.speakWithGroq(text, onStart, onEnd, options);
        return;
      } catch (error) {
        console.warn('⚠️ Groq TTS failed, falling back to Web Speech API:', error);
        // Fall through to Web Speech API
      }
    }

    // Use Web Speech API as fallback
    return this.speakWithWebSpeech(text, onStart, onEnd, options);
  }

  speakWithWebSpeech(text, onStart, onEnd, options) {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice
      const voice = this.getBestVoice();
      if (voice) {
        utterance.voice = voice;
      }

      // Set options
      utterance.rate = options.rate || 1.0;
      utterance.pitch = options.pitch || 1.0;
      utterance.volume = options.volume || 1.0;
      utterance.lang = options.lang || 'en-US';

      utterance.onstart = () => {
        onStart?.();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        onEnd?.();
        resolve();
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        this.currentUtterance = null;
        onEnd?.();
        resolve();
      };

      this.currentUtterance = utterance;
      this.synthesis.speak(utterance);
    });
  }

  async speakWithGroq(text, onStart, onEnd, options) {
    if (!this.groqApiKey) {
      throw new Error('Groq API key not configured');
    }

    const voiceName = options.voiceName || this.groqVoiceName;
    console.log('🎤 Groq TTS: Speaking with voice:', voiceName);

    try {
      // Call Groq TTS API
      const response = await fetch('https://api.groq.com/openai/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.groqApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'playai-tts',
          voice: voiceName,
          input: text,
          response_format: 'mp3',
          speed: options.rate || 1.0,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Groq TTS API error:', response.status, errorText);
        throw new Error(`Groq TTS API error: ${response.status} ${response.statusText}`);
      }

      // Get audio blob directly
      const audioBlob = await response.blob();
      console.log('✅ Groq TTS audio received, size:', audioBlob.size);
      const audioUrl = URL.createObjectURL(audioBlob);

      // Play audio
      const audio = new Audio(audioUrl);
      
      audio.onplay = () => {
        this.currentAudio = audio;
        onStart?.();
      };

      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        this.currentAudio = null;
        this.currentUtterance = null;
        onEnd?.();
      };

      audio.onerror = (error) => {
        console.error('Audio playback error:', error);
        URL.revokeObjectURL(audioUrl);
        this.currentAudio = null;
        this.currentUtterance = null;
        onEnd?.();
      };

      this.currentUtterance = audio;
      this.currentAudio = audio;
      await audio.play();

    } catch (error) {
      console.error('Groq TTS error:', error);
      throw error;
    }
  }

  // Helper: Convert volume (0-1) to dB (-96 to +16)
  volumeToDb(volume) {
    if (volume <= 0) return -96;
    if (volume >= 1) return 0;
    return 20 * Math.log10(volume);
  }

  // Helper: Convert base64 to Blob
  base64ToBlob(base64, mimeType) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }

  /**
   * Stop speaking
   */
  stopSpeaking() {
    if (this.groqTtsEnabled && this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }

    if (!this.groqTtsEnabled && this.synthesis.speaking) {
      this.synthesis.cancel();
    }

    this.currentUtterance = null;
  }

  /**
   * Check if currently speaking
   */
  isSpeaking() {
    if (this.googleTtsEnabled) {
      return Boolean(this.currentAudio);
    }

    return this.synthesis.speaking;
  }

  /**
   * Check if speech recognition is supported
   */
  isRecognitionSupported() {
    return !!this.recognition;
  }

  /**
   * Check microphone permission status
   */
  async checkMicrophonePermission() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      return { granted: true };
    } catch (error) {
      console.error('Microphone permission error:', error);
      return { granted: false, error: error.name };
    }
  }

  /**
   * Check if text-to-speech is supported
   */
  isSynthesisSupported() {
    return this.groqTtsEnabled || !!this.synthesis;
  }

  /**
   * Get all available voices
   */
  getAvailableVoices() {
    return this.voices;
  }

  /**
   * Pause speech
   */
  pauseSpeech() {
    if (this.groqTtsEnabled && this.currentAudio && !this.currentAudio.paused) {
      this.currentAudio.pause();
      return;
    }

    if (this.synthesis.speaking && !this.synthesis.paused) {
      this.synthesis.pause();
    }
  }

  /**
   * Resume speech
   */
  resumeSpeech() {
    if (this.groqTtsEnabled && this.currentAudio && this.currentAudio.paused) {
      this.currentAudio.play();
      return;
    }

    if (this.synthesis.paused) {
      this.synthesis.resume();
    }
  }
}

// Export singleton instance
const voiceService = new VoiceService();
export default voiceService;
