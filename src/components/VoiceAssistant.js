import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  X,
  Minimize2,
  Maximize2,
  Sparkles,
} from "lucide-react";
import voiceService from "../utils/voiceService";
import { getGroqChatResponse } from "../utils/groqService";

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
  const [currentMessage, setCurrentMessage] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);
  const [error, setError] = useState(null);

  const messageEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Auto-scroll to latest message only when user is near the bottom
  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const distanceFromBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;
    const shouldAutoScroll = distanceFromBottom < 120;

    if (shouldAutoScroll) {
      messageEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [conversationHistory]);

  // Dynamic AI greeting - let Groq generate it
  useEffect(() => {
    if (isOpen && conversationHistory.length === 0) {
      const generateGreeting = async () => {
        try {
          const greeting = await getGroqChatResponse(
            "Introduce yourself as MenteE (Syab's AI voice assistant but dont explictly say this, say this only when asked for) in so short words",
          );
          addMessage("assistant", greeting);
          if (!isMuted) {
            setTimeout(() => speakMessage(greeting), 500);
          }
        } catch (err) {
          const fallback =
            "Hey! I'm Syab's AI assistant. What would you like to know?";
          addMessage("assistant", fallback);
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

    setConversationHistory((prev) => [...prev, message]);
  };

  const startListening = () => {
    if (!voiceService.isRecognitionSupported()) {
      setError(
        "Speech recognition is not supported. Please use Chrome or Edge.",
      );
      return;
    }

    setError(null);
    setIsListening(true);
    setCurrentMessage("Listening...");
    voiceService.startListening(
      (transcript) => {
        setIsListening(false);
        setCurrentMessage("");

        if (transcript.trim()) {
          addMessage("user", transcript);
          handleUserMessage(transcript);
        } else {
          setError("No speech detected. Please try again.");
        }
      },
      (recognitionError) => {
        setIsListening(false);
        setCurrentMessage("");

        if (
          recognitionError === "no-speech" ||
          recognitionError === "aborted"
        ) {
          return;
        }

        if (
          recognitionError === "not-allowed" ||
          recognitionError === "not-supported"
        ) {
          setError("Microphone access denied. Please allow microphone access.");
        } else if (recognitionError === "audio-capture") {
          setError("Cannot access microphone. Please check your settings.");
        } else {
          console.warn("Unexpected recognition error:", recognitionError);
        }
      },
    );
  };

  const stopListening = () => {
    voiceService.stopListening();
    setIsListening(false);
    setCurrentMessage("");
    setError(null);
  };

  const handleUserMessage = async (message) => {
    try {
      setError(null);
      setCurrentMessage("Thinking...");

      const response = await getGroqChatResponse(message);

      setCurrentMessage("");
      addMessage("assistant", response);

      if (!isMuted) {
        speakMessage(response);
      }
    } catch (err) {
      console.error("Error getting AI response:", err);
      setCurrentMessage("");
      setError("Failed to get response. Please try again.");
    }
  };

  const speakMessage = (text) => {
    if (!voiceService.isSynthesisSupported()) {
      console.warn("Text-to-speech not supported");
      return;
    }

    setIsSpeaking(true);

    voiceService
      .speak(
        text,
        () => {
          setIsSpeaking(true);
        },
        () => {
          setIsSpeaking(false);

          if (isOpen && !isMinimized && !isMuted) {
            setTimeout(() => {
              startListening();
            }, 800);
          }
        },
        {
          rate: 1.0,
          pitch: 1.0,
          volume: 1.0,
        },
      )
      .catch((speakError) => {
        console.error("Unable to play speech:", speakError);
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

  const handleClose = () => {
    stopListening();
    stopSpeaking();
    setIsOpen(false);
    setConversationHistory([]);
    setError(null);
  };

  const statusBadge = (() => {
    if (isListening) {
      return {
        label: "Listening",
        icon: Mic,
        classes:
          "bg-cyan-400/15 border border-cyan-300/40 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.2)]",
      };
    }

    if (isSpeaking) {
      return {
        label: "Speaking",
        icon: Volume2,
        classes:
          "bg-amber-400/15 border border-amber-300/40 text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.2)]",
      };
    }

    return {
      label: "Ready",
      icon: Sparkles,
      classes:
        "bg-emerald-400/15 border border-emerald-300/40 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    };
  })();

  const StatusIcon = statusBadge.icon;
  const lastMessage = conversationHistory[conversationHistory.length - 1];

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-20 right-6 z-[999] h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 text-white shadow-[0_24px_50px_-28px_rgba(20,184,166,0.75)] flex items-center justify-center"
            aria-label="Open voice call assistant"
          >
            <Phone size={24} />
            <motion.span
              className="absolute inset-0 rounded-3xl border border-white/30"
              animate={{ opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <motion.span
              className="absolute -inset-2 -z-10 rounded-[2rem] bg-cyan-400/40 blur-xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.75, 0.4] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[999] bg-slate-950/45 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            <motion.div
              className={`fixed z-[1000] left-3 right-3 sm:left-auto sm:right-6 sm:w-[360px] overflow-hidden rounded-[1.6rem] border border-slate-700/70 bg-slate-950/85 backdrop-blur-2xl shadow-[0_35px_70px_-35px_rgba(15,23,42,0.95)] flex flex-col ${
                isMinimized
                  ? "bottom-3 h-[84px]"
                  : "top-3 bottom-3 sm:top-6 sm:bottom-6"
              }`}
              initial={{ opacity: 0, scale: 0.92, y: 36 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 36 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
            >
              <div className="pointer-events-none absolute -top-20 right-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-8 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative shrink-0 flex items-center justify-between border-b border-slate-700/60 px-4 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white flex items-center justify-center shadow-lg shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-100 truncate">
                      Live Voice Call
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      MenteE Assistant
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div
                    className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur ${statusBadge.classes}`}
                  >
                    <StatusIcon size={13} />
                    <span>{statusBadge.label}</span>
                  </div>

                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="rounded-xl bg-slate-800/75 border border-slate-700/70 p-2 text-slate-200 transition-colors hover:bg-slate-700/80"
                    title={isMinimized ? "Expand" : "Minimize"}
                  >
                    {isMinimized ? (
                      <Maximize2 size={17} />
                    ) : (
                      <Minimize2 size={17} />
                    )}
                  </button>
                  <button
                    onClick={handleClose}
                    className="rounded-xl bg-rose-500/15 border border-rose-400/40 p-2 text-rose-100 transition-colors hover:bg-rose-500/25"
                    title="Close call"
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>

              {isMinimized ? (
                <div className="relative flex items-center justify-between gap-4 px-4 py-2.5">
                  <div className="min-w-0">
                    <p className="text-sm text-slate-200 truncate">
                      {lastMessage
                        ? lastMessage.content
                        : "Assistant is ready for your next question."}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {isMuted ? "Muted mode on" : "Microphone ready"}
                    </p>
                  </div>

                  <button
                    onClick={isListening ? stopListening : startListening}
                    disabled={isSpeaking}
                    className={`h-11 w-11 rounded-2xl flex items-center justify-center border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      isListening
                        ? "bg-rose-500/20 border-rose-400/40 text-rose-100"
                        : "bg-cyan-500/20 border-cyan-400/40 text-cyan-100"
                    }`}
                  >
                    {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                  </button>
                </div>
              ) : (
                <>
                  {/* Compact inline avatar status bar */}
                  <div className="shrink-0 px-4 pt-2.5 pb-1.5">
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/70 px-3 py-2.5">
                      {/* Mini animated face */}
                      <div className="relative shrink-0">
                        <motion.div
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-0.5 shadow-md"
                          animate={{
                            scale: isListening || isSpeaking ? [1, 1.06, 1] : 1,
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="w-full h-full rounded-[10px] bg-slate-900 flex flex-col items-center justify-center gap-0.5">
                            <div className="flex gap-1">
                              <div className="w-1 h-1 rounded-full bg-white" />
                              <div className="w-1 h-1 rounded-full bg-white" />
                            </div>
                            <div
                              className={`bg-white rounded-full transition-all duration-150 ${isSpeaking ? "w-2.5 h-1" : "w-2 h-0.5"}`}
                            />
                          </div>
                        </motion.div>
                        {(isListening || isSpeaking) && (
                          <motion.div
                            className={`absolute inset-0 rounded-xl ${isListening ? "bg-cyan-400/25" : "bg-purple-400/25"}`}
                            animate={{ opacity: [0, 0.8, 0] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                          />
                        )}
                      </div>

                      {/* Status text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-100">
                          MenteE AI
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">
                          {isMuted
                            ? "Muted"
                            : isSpeaking
                              ? "Speaking..."
                              : isListening
                                ? "Listening to you..."
                                : "Waiting for your voice"}
                        </p>
                      </div>

                      {/* Live visualizer */}
                      <div className="flex gap-0.5 items-end h-5 shrink-0">
                        {isSpeaking &&
                          [...Array(7)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-0.5 bg-purple-400 rounded-full"
                              animate={{
                                height: [
                                  2,
                                  i % 3 === 0 ? 14 : i % 3 === 1 ? 10 : 6,
                                  2,
                                ],
                              }}
                              transition={{
                                duration: 0.45,
                                repeat: Infinity,
                                delay: i * 0.07,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        {isListening &&
                          [...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                              animate={{
                                scale: [0.7, 1.4, 0.7],
                                opacity: [0.4, 1, 0.4],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.18,
                              }}
                            />
                          ))}
                        {!isSpeaking && !isListening && (
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>

                  {(currentMessage || error) && (
                    <div className="shrink-0 px-4 pb-1 text-center">
                      {currentMessage && !error && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="inline-flex items-center gap-2 text-slate-200 text-sm font-medium bg-slate-800/80 border border-slate-700/70 px-4 py-2 rounded-full"
                        >
                          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                          <span>{currentMessage}</span>
                        </motion.div>
                      )}

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-2 text-rose-100 text-sm font-medium bg-rose-500/15 border border-rose-400/40 px-4 py-2 rounded-full"
                        >
                          <span>Alert:</span>
                          <span>{error}</span>
                        </motion.div>
                      )}
                    </div>
                  )}

                  <div
                    ref={messagesContainerRef}
                    className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-3 flex flex-col gap-4"
                    style={{
                      WebkitOverflowScrolling: "touch",
                      overscrollBehavior: "contain",
                    }}
                  >
                    {conversationHistory.map((msg) => (
                      <motion.div
                        key={msg.id}
                        className={`max-w-[88%] flex flex-col gap-1 ${
                          msg.role === "user"
                            ? "self-end items-end"
                            : "self-start items-start"
                        }`}
                        initial={{
                          opacity: 0,
                          x: msg.role === "user" ? 16 : -16,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div
                          className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed border ${
                            msg.role === "user"
                              ? "bg-gradient-to-br from-cyan-500 to-teal-500 border-cyan-300/25 text-white rounded-br-xl shadow-[0_18px_35px_-24px_rgba(20,184,166,0.8)]"
                              : "bg-slate-800/75 border-slate-700/70 text-slate-100 rounded-bl-xl"
                          }`}
                        >
                          <div className="whitespace-pre-line">
                            {msg.content}
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-500 px-1">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </motion.div>
                    ))}
                    <div ref={messageEndRef} />
                  </div>

                  <div className="shrink-0 border-t border-slate-700/60 bg-slate-950/60 px-4 py-3">
                    <div className="flex items-center justify-between gap-4">
                      <motion.button
                        onClick={toggleMute}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`h-12 w-12 rounded-xl border flex items-center justify-center transition-colors ${
                          isMuted
                            ? "bg-rose-500/20 border-rose-400/45 text-rose-100"
                            : "bg-slate-800/80 border-slate-700/70 text-slate-100 hover:bg-slate-700/80"
                        }`}
                        title={isMuted ? "Unmute assistant" : "Mute assistant"}
                      >
                        {isMuted ? (
                          <VolumeX size={22} />
                        ) : (
                          <Volume2 size={22} />
                        )}
                      </motion.button>

                      <motion.button
                        onClick={isListening ? stopListening : startListening}
                        disabled={isSpeaking}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.94 }}
                        className={`h-16 w-16 rounded-2xl border flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                          isListening
                            ? "bg-gradient-to-br from-rose-500 to-red-500 border-rose-300/40 text-white shadow-[0_20px_35px_-24px_rgba(244,63,94,0.8)]"
                            : "bg-gradient-to-br from-cyan-500 to-emerald-500 border-cyan-300/35 text-white shadow-[0_20px_35px_-24px_rgba(16,185,129,0.75)]"
                        }`}
                        title={
                          isListening ? "Stop listening" : "Start listening"
                        }
                      >
                        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                        <span>{isListening ? "Stop" : "Talk"}</span>
                      </motion.button>

                      <motion.button
                        onClick={stopSpeaking}
                        disabled={!isSpeaking}
                        whileHover={{ scale: isSpeaking ? 1.04 : 1 }}
                        whileTap={{ scale: isSpeaking ? 0.94 : 1 }}
                        className={`h-12 w-12 rounded-xl border flex items-center justify-center transition-colors ${
                          isSpeaking
                            ? "bg-amber-500/20 border-amber-300/45 text-amber-100"
                            : "bg-slate-800/60 border-slate-700/60 text-slate-500 cursor-not-allowed"
                        }`}
                        title="Stop voice output"
                      >
                        <PhoneOff size={18} />
                      </motion.button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAssistant;
