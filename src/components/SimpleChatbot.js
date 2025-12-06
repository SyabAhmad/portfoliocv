import React, { useState, useEffect } from "react";
import { X, Send, Bot, Sparkles } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSimpleResponse } from "../utils/simpleGroqService";

const SimpleChatbot = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentResponse, setCurrentResponse] = useState(null);
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [promoShown, setPromoShown] = useState(false); // Track if promo was already shown
  const location = useLocation();
  const navigate = useNavigate();

  // Get current page name
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/contact") return "Contact";
    if (path === "/about") return "About";
    if (path === "/skills") return "Skills";
    if (path === "/projects") return "Projects";
    return "Portfolio";
  };

  // Show promo popup after 2 minutes - ONLY ONCE
  useEffect(() => {
    if (!promoShown) {
      const timer = setTimeout(() => {
        setShowPromoPopup(true);
        setPromoShown(true); // Mark as shown so it won't show again
      }, 120000); // 2 minutes = 120,000 milliseconds

      return () => clearTimeout(timer);
    }
  }, [promoShown]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const currentInput = inputValue;
    const currentPage = getCurrentPage();
    setInputValue("");
    setIsTyping(true);

    // Hide promo popup when user starts using the AI
    setShowPromoPopup(false);

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
        answer:
          "Something went wrong. Try asking about skills, projects, or experience.",
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
  };

  const closePromoPopup = () => {
    setShowPromoPopup(false);
    // Don't reset promoShown - keep it true so it won't show again
  };

  const handlePromoClick = () => {
    setShowPromoPopup(false);
    // Navigate to MenteE page
    navigate("/mentee");
  };

  return (
    <>
      {/* Bottom Input - Mobile Responsive */}
      <div className="fixed bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 z-40">
        <div className="max-w-4xl mx-auto flex space-x-2 sm:space-x-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Ask about Syab's ${getCurrentPage().toLowerCase()} info...`}
            className="flex-1 border-2 border-gray-300 rounded-full px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200 font-medium shadow-lg"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-medium flex items-center space-x-1 sm:space-x-2"
          >
            <Send size={14} className="sm:hidden" />
            <Send size={16} className="hidden sm:block" />
            <span className="text-xs sm:text-sm">
              {isTyping ? "..." : "Ask"}
            </span>
          </button>
        </div>
      </div>

      {/* Promo Popup - Mobile Responsive */}
      {showPromoPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 w-full max-w-sm animate-in zoom-in-95 duration-500">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bot size={16} className="sm:hidden text-white" />
                  <Bot size={20} className="hidden sm:block text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 flex items-center gap-1 text-sm sm:text-base">
                    MenteE's AI 🥀 (Voice Mode now live!)
                    <Sparkles size={12} className="sm:hidden text-purple-500" />
                    <Sparkles
                      size={14}
                      className="hidden sm:block text-purple-500"
                    />
                  </h3>
                  <p className="text-xs text-gray-500">
                    Your AI assistant is ready!
                  </p>
                </div>
              </div>
              <button
                onClick={closePromoPopup}
                className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={14} className="sm:hidden" />
                <X size={16} className="hidden sm:block" />
              </button>
            </div>

            {/* Product Showcase */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-blue-800 text-sm">DocxBox</h4>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Now Live!
                  </span>
                </div>
                <p className="text-blue-700 text-xs mb-3">
                  🔒 Privacy-first Android document manager with
                  enterprise-grade security
                </p>
                <a
                  href="https://docxbox.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-center py-2 rounded-lg font-medium text-xs transition-all duration-200 hover:scale-105"
                >
                  Try DocxBox Free
                </a>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-orange-800 text-sm">cvAI</h4>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    In Development
                  </span>
                </div>
                <p className="text-orange-700 text-xs mb-3">
                  🤖 AI-powered resume analysis platform for smarter hiring
                </p>
                <button
                  onClick={handlePromoClick}
                  className="block w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-center py-2 rounded-lg font-medium text-xs transition-all duration-200 hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3">
              Ask anything about the portfolio
            </p>
          </div>
        </div>
      )}

      {/* Simple Response Panel - Mobile Responsive */}
      {currentResponse && (
        <div className="fixed top-2 left-2 right-2 sm:top-4 sm:right-4 sm:left-auto z-50 w-auto sm:w-96 max-h-[70vh] sm:max-h-[80vh] animate-in slide-in-from-right duration-300">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden h-full flex flex-col">
            {/* Header with close button - Fixed */}
            <div className="bg-gray-50 px-3 py-2 sm:px-4 sm:py-3 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2 text-sm sm:text-base">
                MenteE's AI🥀
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {currentResponse.page}
                </span>
              </h3>
              <button
                onClick={closePanel}
                className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <X size={14} className="sm:hidden" />
                <X size={16} className="hidden sm:block" />
              </button>
            </div>

            {/* Response Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {currentResponse.answer}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Light Overlay for Promo Popup */}
      {showPromoPopup && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={closePromoPopup}
        />
      )}

      {/* Light Overlay for Response Panel */}
      {currentResponse && (
        <div className="fixed inset-0 bg-black/10 z-40" onClick={closePanel} />
      )}
    </>
  );
};

export default SimpleChatbot;
