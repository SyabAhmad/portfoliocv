import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX, 
  X, Settings, Minimize2, Maximize2, Sparkles, Trash2, AlertTriangle 
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
          const greeting = await getGroqChatResponse("Introduce yourself as MenteE (Syab's AI voice assistant but dont explictly say this, say this only when asked for) in so short words");
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
    console.log('🎤 Starting to listen...');

    voiceService.startListening(
      (transcript) => {
        // Success - got speech
        console.log('✅ Transcript received:', transcript);
        setIsListening(false);
        setCurrentMessage('');
        
        if (transcript.trim()) {
          addMessage('user', transcript);
          handleUserMessage(transcript);
        } else {
          setError('No speech detected. Please try again.');
        }
      },
      (error) => {
        // Error handling
        console.error('❌ Speech recognition error:', error);
        setIsListening(false);
        setCurrentMessage('');
        
        if (error === 'no-speech') {
          setError('No speech detected. Please try again.');
        } else if (error === 'not-allowed' || error === 'not-supported') {
          setError('Microphone access denied. Please allow microphone access in your browser settings.');
        } else if (error === 'audio-capture') {
          setError('Cannot access microphone. Please check your device and browser settings.');
        } else if (error === 'aborted') {
          // User stopped listening, don't show error
          return;
        } else {
          setError(`Speech error: ${error}. Please try again.`);
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
    ).catch((error) => {
      console.error('Unable to play speech:', error);
      setIsSpeaking(false);
    });
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

  const statusBadge = (() => {
    if (error) {
      return {
        label: 'Action needed',
        icon: AlertTriangle,
        classes: 'bg-red-500/15 border border-red-400/30 text-red-200 shadow-[0_0_20px_rgba(239,68,68,0.15)]'
      };
    }

    if (isListening) {
      return {
        label: 'Listening',
        icon: Mic,
        classes: 'bg-blue-500/15 border border-blue-400/40 text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.18)]'
      };
    }

    if (isSpeaking) {
      return {
        label: 'Responding',
        icon: Volume2,
        classes: 'bg-purple-500/15 border border-purple-400/40 text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.18)]'
      };
    }

    return {
      label: 'Ready to chat',
      icon: Sparkles,
      classes: 'bg-emerald-500/10 border border-emerald-400/30 text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.15)]'
    };
  })();

  const StatusIcon = statusBadge.icon;

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
            whileTap={{ scale: 0.92 }}
            className="fixed bottom-20 right-8 h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-[0_25px_45px_-30px_rgba(59,130,246,0.7)] flex items-center justify-center z-[999] transition-all duration-300"
          >
            <Phone size={28} />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-white/25"
              animate={{ opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-7 h-18 w-18 rounded-full bg-blue-500/40 blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.75, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Voice Assistant Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-2 right-2 left-2 sm:bottom-5 sm:right-5 sm:left-auto w-auto sm:w-[420px] bg-transparent z-[1000] flex flex-col overflow-visible ${
              isMinimized ? 'max-h-[60px]' : 'max-h-[90vh] sm:max-h-[85vh]'
            }`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* Floating Controls */}
            <div className="relative flex justify-end items-center gap-2 pb-3 pr-3">
              <div className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full backdrop-blur bg-slate-900/70 border border-white/10 ${statusBadge.classes}`}>
                <StatusIcon size={14} />
                <span>{statusBadge.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="group relative overflow-hidden rounded-xl bg-slate-900/70 px-3 py-2 text-slate-200 border border-slate-700/60 transition-all duration-200"
                  title={isMinimized ? 'Maximize' : 'Minimize'}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2 text-sm font-medium">
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                    <span>{isMinimized ? 'Expand' : 'Compact'}</span>
                  </div>
                </button>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="group relative overflow-hidden rounded-xl bg-slate-900/70 px-3 py-2 text-slate-200 border border-slate-700/60 transition-all duration-200"
                  title="Settings"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2 text-sm font-medium">
                    <Settings size={16} />
                    <span>Settings</span>
                  </div>
                </button>
                <button
                  onClick={handleClose}
                  className="group relative overflow-hidden rounded-xl bg-red-500/20 px-3 py-2 text-red-100 border border-red-500/30 transition-all duration-200"
                  title="Close"
                >
                  <div className="absolute inset-0 bg-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2 text-sm font-medium">
                    <X size={16} />
                    <span>End</span>
                  </div>
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Settings Panel */}
                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      className="relative bg-slate-950/60 px-6 py-5 border border-slate-800/60 rounded-[24px] mb-4 backdrop-blur"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-slate-900/30 to-purple-500/10 opacity-60" />
                      <div className="relative">
                        <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">Voice Settings</h4>
                        
                        <label className="flex items-center gap-2 text-slate-300 text-sm mb-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.autoListen}
                          onChange={(e) => setSettings({...settings, autoListen: e.target.checked})}
                          className="accent-indigo-500 h-4 w-4"
                        />
                          Auto-listen after response
                        </label>

                        <div className="grid grid-cols-1 gap-4">
                          <label className="block text-slate-300 text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Speech Rate</span>
                              <span className="text-indigo-300 font-medium">{settings.speechRate.toFixed(1)}x</span>
                            </div>
                            <div className="relative h-2 rounded-full bg-slate-800">
                              <div
                                className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                style={{ width: `${((settings.speechRate - 0.5) / 1.5) * 100}%` }}
                              />
                              <input
                                type="range"
                                min="0.5"
                                max="2"
                                step="0.1"
                                value={settings.speechRate}
                                onChange={(e) => setSettings({...settings, speechRate: parseFloat(e.target.value)})}
                                className="w-full accent-indigo-500 absolute inset-0 opacity-0 cursor-pointer"
                              />
                            </div>
                          </label>

                          <label className="block text-slate-300 text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Speech Pitch</span>
                              <span className="text-indigo-300 font-medium">{settings.speechPitch.toFixed(1)}x</span>
                            </div>
                            <div className="relative h-2 rounded-full bg-slate-800">
                              <div
                                className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                                style={{ width: `${((settings.speechPitch - 0.5) / 1.5) * 100}%` }}
                              />
                              <input
                                type="range"
                                min="0.5"
                                max="2"
                                step="0.1"
                                value={settings.speechPitch}
                                onChange={(e) => setSettings({...settings, speechPitch: parseFloat(e.target.value)})}
                                className="w-full accent-indigo-500 absolute inset-0 opacity-0 cursor-pointer"
                              />
                            </div>
                          </label>

                          <label className="block text-slate-300 text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Volume</span>
                              <span className="text-indigo-300 font-medium">{(settings.speechVolume * 100).toFixed(0)}%</span>
                            </div>
                            <div className="relative h-2 rounded-full bg-slate-800">
                              <div
                                className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-sky-400"
                                style={{ width: `${settings.speechVolume * 100}%` }}
                              />
                              <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={settings.speechVolume}
                                onChange={(e) => setSettings({...settings, speechVolume: parseFloat(e.target.value)})}
                                className="w-full accent-indigo-500 absolute inset-0 opacity-0 cursor-pointer"
                              />
                            </div>
                          </label>
                        </div>

                        <button 
                          onClick={clearConversation} 
                          className="mt-5 w-full px-4 py-2.5 bg-red-500/10 border border-red-500/30 text-red-200 rounded-xl hover:bg-red-500/20 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <Trash2 size={16} />
                          Clear Conversation
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Avatar */}
                <div className="relative flex justify-center items-center py-6">
                  <div className="absolute inset-0 px-10">
                    <div className="h-full w-full rounded-[3rem] bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-transparent blur-3xl opacity-60" />
                  </div>
                  <Avatar3DTailwind
                    isListening={isListening}
                    isSpeaking={isSpeaking}
                    emotion={error ? 'neutral' : 'happy'}
                  />
                  <motion.div
                    className="absolute top-6 right-8 flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/60 border border-slate-700/50 rounded-xl px-3 py-1 backdrop-blur"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {isMuted ? 'Muted' : isSpeaking ? 'Speaking' : isListening ? 'Listening' : 'Idle'}
                  </motion.div>
                </div>

                {/* Current Status */}
                <div className="px-6 py-3 min-h-[40px] text-center">
                  {currentMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-flex items-center gap-2 text-slate-200 text-sm font-medium bg-slate-800/70 border border-slate-700/60 px-4 py-2 rounded-full"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
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
                <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 flex flex-col gap-6 max-h-[320px] scrollbar-thin scrollbar-thumb-blue-500/40 scrollbar-track-transparent">
                  {conversationHistory.map((msg) => (
                    <motion.div
                      key={msg.id}
                      className={`max-w-[85%] flex flex-col gap-2 ${
                        msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'
                      }`}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className={`relative px-5 py-4 rounded-[28px] text-base leading-relaxed tracking-[0.01em] backdrop-blur-lg ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white shadow-[0_20px_40px_-28px_rgba(99,102,241,0.75)] rounded-br-2xl'
                          : 'bg-white/6 text-slate-100 shadow-[0_18px_32px_-28px_rgba(15,23,42,0.65)] border border-white/10 rounded-bl-2xl'
                      }`}>
                        <div className="absolute inset-0 rounded-[28px] border border-white/10 opacity-50" />
                        <div className="relative whitespace-pre-line">
                          {msg.content}
                        </div>
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
                <div className="px-6 py-5 bg-slate-900/85 border-t border-slate-800/60 flex gap-5 justify-center items-center">
                  <motion.button
                    className={`relative w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                      isListening
                        ? 'bg-gradient-to-br from-rose-500 to-red-500 text-white shadow-[0_25px_35px_-25px_rgba(244,63,94,0.8)] animate-[pulse_1.5s_ease-in-out_infinite]'
                        : 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-[0_25px_35px_-25px_rgba(99,102,241,0.75)]'
                    }`}
                    onClick={isListening ? stopListening : startListening}
                    disabled={isSpeaking}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isListening ? <MicOff size={28} /> : <Mic size={28} />}
                    <span>{isListening ? 'Stop' : 'Talk'}</span>
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      animate={{ opacity: [0.6, 0.2, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.button>

                  <motion.button
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border ${
                      isMuted
                        ? 'bg-red-500/15 border-red-400/40 text-red-200 shadow-[0_20px_30px_-25px_rgba(248,113,113,0.7)]'
                        : 'bg-slate-800/70 border-slate-700/60 text-slate-100 hover:bg-slate-700/70'
                    }`}
                    onClick={toggleMute}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </motion.button>

                  {isSpeaking && (
                    <motion.button
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-500 text-white shadow-[0_25px_35px_-25px_rgba(244,114,182,0.7)] flex flex-col items-center justify-center gap-0.5 text-xs font-semibold border border-white/10"
                      onClick={stopSpeaking}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PhoneOff size={22} />
                      <span>End</span>
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
