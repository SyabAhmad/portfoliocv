import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX, 
  X, Settings, Minimize2, Maximize2, Sparkles, Trash2 
} from 'lucide-react';
import Avatar3DTailwind from './Avatar3DTailwind';
import voiceService from '../utils/voiceService';
import { getGroqChatResponse } from '../utils/groqService';

/**
 * Voice AI Assistant Component
 * Full voice interaction with AI using speech recognition and synthesis
 */
const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [error, setError] = useState(null);
  
  // Settings
  const [settings, setSettings] = useState({
    autoListen: true,
    speechRate: 1.0,
    speechPitch: 1.0,
    speechVolume: 1.0,
  });

  const messageEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversationHistory]);

  // Dynamic AI greeting - let Groq generate it!
  useEffect(() => {
    if (isOpen && conversationHistory.length === 0) {
      // Generate a natural greeting from AI
      const generateGreeting = async () => {
        try {
          const greeting = await getGroqChatResponse("Introduce yourself as Syab's AI voice assistant");
          addMessage('assistant', greeting);
          if (!isMuted) {
            setTimeout(() => speakMessage(greeting), 500);
          }
        } catch (error) {
          // Fallback greeting if AI fails
          const fallback = "Hey! I'm Syab's AI assistant. What would you like to know?";
          addMessage('assistant', fallback);
          if (!isMuted) {
            speakMessage(fallback);
          }
        }
      };
      generateGreeting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const addMessage = (role, content) => {
    const message = {
      id: Date.now(),
      role,
      content,
      timestamp: new Date(),
    };
    setConversationHistory(prev => [...prev, message]);
  };

  const startListening = () => {
    if (!voiceService.isRecognitionSupported()) {
      setError('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    setError(null);
    setIsListening(true);
    setCurrentMessage('Listening...');

    voiceService.startListening(
      (transcript) => {
        // Success - got speech
        setIsListening(false);
        setCurrentMessage('');
        
        if (transcript.trim()) {
          addMessage('user', transcript);
          handleUserMessage(transcript);
        }
      },
      (error) => {
        // Error handling
        setIsListening(false);
        setCurrentMessage('');
        
        if (error === 'no-speech') {
          setError('No speech detected. Please try again.');
        } else if (error === 'not-allowed') {
          setError('Microphone access denied. Please allow microphone access.');
        } else {
          setError(`Speech recognition error: ${error}`);
        }
      }
    );
  };

  const stopListening = () => {
    voiceService.stopListening();
    setIsListening(false);
    setCurrentMessage('');
  };

  const handleUserMessage = async (message) => {
    try {
      setCurrentMessage('Thinking...');
      
      // Get AI response
      const response = await getGroqChatResponse(message);
      
      setCurrentMessage('');
      addMessage('assistant', response);

      // Speak the response if not muted
      if (!isMuted) {
        speakMessage(response);
      }
      
      // Auto-listen for next input if enabled
      if (settings.autoListen && !isMuted) {
        setTimeout(() => {
          if (!isSpeaking) {
            startListening();
          }
        }, 1000);
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      setCurrentMessage('');
      const errorMsg = 'Sorry, I had trouble processing that. Could you try again?';
      addMessage('assistant', errorMsg);
      
      if (!isMuted) {
        speakMessage(errorMsg);
      }
    }
  };

  const speakMessage = (text) => {
    if (!voiceService.isSynthesisSupported()) {
      console.warn('Text-to-speech not supported');
      return;
    }

    setIsSpeaking(true);
    
    voiceService.speak(
      text,
      () => {
        // On start
        setIsSpeaking(true);
      },
      () => {
        // On end
        setIsSpeaking(false);
        
        // Auto-listen after speaking if enabled
        if (settings.autoListen && isOpen && !isMinimized) {
          setTimeout(() => startListening(), 500);
        }
      },
      {
        rate: settings.speechRate,
        pitch: settings.speechPitch,
        volume: settings.speechVolume,
      }
    );
  };

  const stopSpeaking = () => {
    voiceService.stopSpeaking();
    setIsSpeaking(false);
  };

  const toggleMute = () => {
    if (!isMuted) {
      stopSpeaking();
    }
    setIsMuted(!isMuted);
  };

  const clearConversation = () => {
    setConversationHistory([]);
    const greeting = "Conversation cleared. How can I help you?";
    addMessage('assistant', greeting);
    
    if (!isMuted) {
      speakMessage(greeting);
    }
  };

  const handleClose = () => {
    stopListening();
    stopSpeaking();
    setIsOpen(false);
    setConversationHistory([]);
    setError(null);
  };

  return (
    <>
      {/* Floating call button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-20 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl flex items-center justify-center text-white z-[999] hover:shadow-blue-500/50 transition-all duration-300"
          >
            <Phone size={28} />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500 pointer-events-none"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Voice Assistant Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-2 right-2 left-2 sm:bottom-5 sm:right-5 sm:left-auto w-auto sm:w-[420px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl z-[1000] flex flex-col overflow-hidden border border-blue-500/30 ${
              isMinimized ? 'max-h-[60px]' : 'max-h-[90vh] sm:max-h-[85vh]'
            }`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* Header */}
            <div className="bg-slate-800/80 backdrop-blur-lg px-5 py-4 flex justify-between items-center border-b border-blue-500/20">
              <div className="flex items-center gap-3">
                <Sparkles size={20} className="text-blue-500" />
                <h3 className="text-white font-semibold text-base">AI Voice Assistant</h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-1.5 text-white hover:bg-blue-500/20 transition-all duration-200 hover:-translate-y-0.5"
                  title={isMinimized ? 'Maximize' : 'Minimize'}
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-1.5 text-white hover:bg-blue-500/20 transition-all duration-200 hover:-translate-y-0.5"
                  title="Settings"
                >
                  <Settings size={18} />
                </button>
                <button
                  onClick={handleClose}
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-1.5 text-white hover:bg-red-500/20 transition-all duration-200 hover:-translate-y-0.5"
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Settings Panel */}
                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      className="bg-slate-900/80 px-5 py-4 border-b border-blue-500/20 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <h4 className="text-white text-sm font-semibold mb-4">Voice Settings</h4>
                      
                      <label className="flex items-center gap-2 text-slate-400 text-sm mb-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.autoListen}
                          onChange={(e) => setSettings({...settings, autoListen: e.target.checked})}
                          className="accent-blue-500"
                        />
                        Auto-listen after response
                      </label>

                      <label className="block text-slate-400 text-sm mb-3">
                        <div className="flex justify-between mb-1">
                          <span>Speech Rate</span>
                          <span className="text-blue-400">{settings.speechRate.toFixed(1)}x</span>
                        </div>
                        <input
                          type="range"
                          min="0.5"
                          max="2"
                          step="0.1"
                          value={settings.speechRate}
                          onChange={(e) => setSettings({...settings, speechRate: parseFloat(e.target.value)})}
                          className="w-full accent-blue-500"
                        />
                      </label>

                      <label className="block text-slate-400 text-sm mb-3">
                        <div className="flex justify-between mb-1">
                          <span>Speech Pitch</span>
                          <span className="text-blue-400">{settings.speechPitch.toFixed(1)}x</span>
                        </div>
                        <input
                          type="range"
                          min="0.5"
                          max="2"
                          step="0.1"
                          value={settings.speechPitch}
                          onChange={(e) => setSettings({...settings, speechPitch: parseFloat(e.target.value)})}
                          className="w-full accent-blue-500"
                        />
                      </label>

                      <label className="block text-slate-400 text-sm mb-4">
                        <div className="flex justify-between mb-1">
                          <span>Volume</span>
                          <span className="text-blue-400">{(settings.speechVolume * 100).toFixed(0)}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={settings.speechVolume}
                          onChange={(e) => setSettings({...settings, speechVolume: parseFloat(e.target.value)})}
                          className="w-full accent-blue-500"
                        />
                      </label>

                      <button 
                        onClick={clearConversation} 
                        className="w-full px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <Trash2 size={16} />
                        Clear Conversation
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Avatar */}
                <div className="flex justify-center items-center py-5 bg-slate-900/50">
                  <Avatar3DTailwind
                    isListening={isListening}
                    isSpeaking={isSpeaking}
                    emotion={error ? 'neutral' : 'happy'}
                  />
                </div>

                {/* Current Status */}
                <div className="px-5 py-2 min-h-[40px] text-center">
                  {currentMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-slate-400 text-sm font-medium"
                    >
                      {currentMessage}
                    </motion.p>
                  )}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm font-medium"
                    >
                      ⚠️ {error}
                    </motion.p>
                  )}
                </div>

                {/* Conversation History */}
                <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 max-h-[300px] scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-slate-800/50">
                  {conversationHistory.map((msg) => (
                    <motion.div
                      key={msg.id}
                      className={`max-w-[80%] flex flex-col gap-1 ${
                        msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'
                      }`}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className={`px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-sm'
                          : 'bg-slate-800 text-slate-200 border border-blue-500/20 rounded-bl-sm'
                      }`}>
                        {msg.content}
                      </div>
                      <div className="text-xs text-slate-500 px-1">
                        {msg.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messageEndRef} />
                </div>

                {/* Controls */}
                <div className="px-5 py-5 bg-slate-900/80 border-t border-blue-500/20 flex gap-4 justify-center items-center">
                  <motion.button
                    className={`relative w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                      isListening
                        ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-500/40 animate-pulse'
                        : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/40'
                    }`}
                    onClick={isListening ? stopListening : startListening}
                    disabled={isSpeaking}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isListening ? <MicOff size={28} /> : <Mic size={28} />}
                    <span>{isListening ? 'Stop' : 'Talk'}</span>
                  </motion.button>

                  <motion.button
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isMuted
                        ? 'bg-red-500/20 border-2 border-red-500/40 text-red-400'
                        : 'bg-blue-500/10 border-2 border-blue-500/30 text-white hover:bg-blue-500/20'
                    }`}
                    onClick={toggleMute}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </motion.button>

                  {isSpeaking && (
                    <motion.button
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/40 flex flex-col items-center justify-center gap-0.5 text-xs font-semibold"
                      onClick={stopSpeaking}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PhoneOff size={24} />
                      <span>Stop</span>
                    </motion.button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAssistant;
