import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getSimpleResponse } from "../utils/simpleGroqService";

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentResponse, setCurrentResponse] = useState(null);
  const inputRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/contact") return "Contact";
    if (path === "/about") return "About";
    if (path === "/services") return "Services";
    if (path === "/projects") return "Projects";
    return "Portfolio";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const currentInput = inputValue;
    const currentPage = getCurrentPage();
    setInputValue("");
    setIsTyping(true);

    try {
      const contextualInput = `[User is on ${currentPage} page] ${currentInput}`;
      const aiResponse = await getSimpleResponse(contextualInput);

      setCurrentResponse({
        id: Date.now(),
        question: currentInput,
        answer: aiResponse,
        timestamp: new Date(),
        page: currentPage,
      });
    } catch (error) {
      setCurrentResponse({
        id: Date.now(),
        question: currentInput,
        answer: "Something went wrong. Try asking about skills, projects, or experience.",
        timestamp: new Date(),
        page: currentPage,
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const closePanel = () => {
    setCurrentResponse(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop: Moon button / expanded input */}
      <div className="fixed right-5 bottom-5 z-40 hidden sm:block">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Collapsed: Moon button */
            <motion.button
              key="moon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-12 h-12 bg-stone-900 hover:bg-stone-800 rounded-full flex items-center justify-center shadow-xl transition-colors"
            >
              <span className="text-xl">🌙</span>
            </motion.button>
          ) : (
            /* Expanded: Search bar */
            <motion.div
              key="bar"
              initial={{ width: 48, opacity: 0, borderRadius: 9999 }}
              animate={{ width: 320, opacity: 1, borderRadius: 16 }}
              exit={{ width: 48, opacity: 0, borderRadius: 9999 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white border border-stone-200 shadow-2xl flex items-center gap-2 px-2 py-1.5 overflow-hidden"
            >
              {/* Moon icon */}
              <button
                onClick={() => { setIsOpen(false); setCurrentResponse(null); }}
                className="w-8 h-8 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
              >
                <span className="text-sm">🌙</span>
              </button>

              {/* Input */}
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 text-sm text-stone-800 placeholder-stone-400 focus:outline-none bg-transparent font-handwriting min-w-0"
                disabled={isTyping}
              />

              {/* Send button - only shows when typing */}
              <AnimatePresence>
                {inputValue.trim() && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    onClick={handleSendMessage}
                    disabled={isTyping}
                    className="w-8 h-8 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-full flex items-center justify-center flex-shrink-0 transition-colors shadow-sm"
                  >
                    {isTyping ? (
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: Same moon button / expanded input */}
      <div className="fixed right-4 bottom-4 z-40 sm:hidden">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="moon-mobile"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-11 h-11 bg-stone-900 hover:bg-stone-800 rounded-full flex items-center justify-center shadow-xl"
            >
              <span className="text-lg">🌙</span>
            </motion.button>
          ) : (
            <motion.div
              key="bar-mobile"
              initial={{ width: 44, opacity: 0, borderRadius: 9999 }}
              animate={{ width: "calc(100vw - 80px)", opacity: 1, borderRadius: 16 }}
              exit={{ width: 44, opacity: 0, borderRadius: 9999 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white border border-stone-200 shadow-2xl flex items-center gap-2 px-2 py-1.5 overflow-hidden"
            >
              <button
                onClick={() => { setIsOpen(false); setCurrentResponse(null); }}
                className="w-8 h-8 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <span className="text-sm">🌙</span>
              </button>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 text-sm text-stone-800 placeholder-stone-400 focus:outline-none bg-transparent font-handwriting min-w-0"
                disabled={isTyping}
              />
              <AnimatePresence>
                {inputValue.trim() && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={handleSendMessage}
                    disabled={isTyping}
                    className="w-8 h-8 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
                  >
                    {isTyping ? (
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={12} />
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Response Panel */}
      {currentResponse && (
        <>
          <div className="fixed top-4 right-4 z-50 w-80 sm:w-96 max-h-[80vh] animate-in slide-in-from-right duration-300">
            <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden h-full flex flex-col">
              <div className="bg-stone-50 px-4 py-3 border-b border-stone-200 flex justify-between items-center flex-shrink-0">
                <h3 className="font-bold text-stone-800 flex items-center gap-2 text-sm font-heading">
                  <span className="text-base">🌙</span>
                  AI Assistant
                  <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-handwriting">
                    {currentResponse.page}
                  </span>
                </h3>
                <button
                  onClick={closePanel}
                  className="text-stone-400 hover:text-stone-600 p-1 hover:bg-stone-100 rounded-lg transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
                <p className="text-xs text-purple-600 font-handwriting">
                  <span className="font-semibold">You asked:</span> "{currentResponse.question}"
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="text-sm text-stone-700 leading-relaxed whitespace-pre-line font-handwriting">
                  {currentResponse.answer}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-black/10 z-40" onClick={closePanel} />
        </>
      )}
    </>
  );
};

export default SimpleChatbot;
