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
      onError?.(new Error('Speech recognition not supported'));
      return;
    }

    if (this.isListening) {
      this.stopListening();
    }

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult?.(transcript);
    };

    this.recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      onError?.(event.error);
      this.isListening = false;
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    try {
      this.recognition.start();
      this.isListening = true;
    } catch (error) {
      console.error('Error starting recognition:', error);
      onError?.(error);
    }
  }

  /**
   * Stop listening
   */
  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
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
  speak(text, onStart, onEnd, options = {}) {
    // Stop any ongoing speech
    this.stopSpeaking();

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

    // Set callbacks
    utterance.onstart = () => {
      onStart?.();
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      onEnd?.();
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      this.currentUtterance = null;
      onEnd?.();
    };

    this.currentUtterance = utterance;
    this.synthesis.speak(utterance);
  }

  /**
   * Stop speaking
   */
  stopSpeaking() {
    if (this.synthesis.speaking) {
      this.synthesis.cancel();
    }
    this.currentUtterance = null;
  }

  /**
   * Check if currently speaking
   */
  isSpeaking() {
    return this.synthesis.speaking;
  }

  /**
   * Check if speech recognition is supported
   */
  isRecognitionSupported() {
    return !!this.recognition;
  }

  /**
   * Check if text-to-speech is supported
   */
  isSynthesisSupported() {
    return !!this.synthesis;
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
    if (this.synthesis.speaking && !this.synthesis.paused) {
      this.synthesis.pause();
    }
  }

  /**
   * Resume speech
   */
  resumeSpeech() {
    if (this.synthesis.paused) {
      this.synthesis.resume();
    }
  }
}

// Export singleton instance
const voiceService = new VoiceService();
export default voiceService;
