import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, Bot, User, Sparkles, Zap, Database, Trash2, MoreVertical } from 'lucide-react';
import { getGroqChatResponse, getRAGStats } from '../utils/groqService';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Syab's AI assistant 🤖. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced markdown renderer
  const renderMarkdown = (text) => {
    if (typeof text !== 'string') return text;

    // Convert markdown to HTML-like JSX
    let formattedText = text
      // Bold text **text** or __text__
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.*?)__/g, '<strong>$1</strong>')
      
      // Italic text *text* or _text_
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      
      // Code blocks `code`
      .replace(/`(.*?)`/g, '<code>$1</code>')
      
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      
      // Lists
      .replace(/^\• (.*$)/gim, '<li>• $1</li>')
      .replace(/^- (.*$)/gim, '<li>• $1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
      
      // Line breaks
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');

    // Split by HTML tags and render accordingly
    const parts = formattedText.split(/(<[^>]+>|<\/[^>]+>)/);
    const elements = [];
    let currentElement = '';
    let tagStack = [];

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      
      if (part.startsWith('<') && part.endsWith('>')) {
        if (part.startsWith('</')) {
          // Closing tag
          const tagName = part.slice(2, -1);
          if (tagStack[tagStack.length - 1] === tagName) {
            tagStack.pop();
            switch (tagName) {
              case 'strong':
                elements.push(<strong key={i} className="font-bold text-green-600">{currentElement}</strong>);
                break;
              case 'em':
                elements.push(<em key={i} className="italic text-blue-600">{currentElement}</em>);
                break;
              case 'code':
                elements.push(<code key={i} className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-xs font-mono">{currentElement}</code>);
                break;
              case 'h1':
                elements.push(<h1 key={i} className="text-lg font-bold text-gray-800 mt-2 mb-1">{currentElement}</h1>);
                break;
              case 'h2':
                elements.push(<h2 key={i} className="text-base font-bold text-gray-700 mt-2 mb-1">{currentElement}</h2>);
                break;
              case 'h3':
                elements.push(<h3 key={i} className="text-sm font-bold text-gray-600 mt-1 mb-1">{currentElement}</h3>);
                break;
              case 'li':
                elements.push(<div key={i} className="ml-4 text-gray-700">{currentElement}</div>);
                break;
              default:
                elements.push(currentElement);
            }
            currentElement = '';
          }
        } else {
          // Opening tag
          const tagName = part.slice(1, -1);
          if (tagName === 'br') {
            elements.push(<br key={i} />);
          } else {
            tagStack.push(tagName);
          }
        }
      } else {
        currentElement += part;
      }
    }
    
    if (currentElement) {
      elements.push(<span key="final">{currentElement}</span>);
    }

    return <div className="space-y-1">{elements}</div>;
  };

  const getAIResponse = async (userMessage) => {
    setIsTyping(true);
    
    try {
      const response = await getGroqChatResponse(userMessage);
      setIsTyping(false);
      return response;
    } catch (error) {
      setIsTyping(false);
      console.error('Chat error:', error);
      return "I'm having some technical difficulties. Please try again! 🛠️";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    try {
      const aiResponse = await getAIResponse(currentInput);
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 2,
        type: 'bot',
        content: "I'm having some issues. Please try again or contact Syab directly! 😅",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Clear chat function
  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: "Chat cleared! 🧹 What would you like to know about Syab?",
        timestamp: new Date()
      }
    ]);
    setShowMenu(false);
  };

  // Show stats
  const showStats = () => {
    const stats = getRAGStats();
    const statsMessage = {
      id: Date.now(),
      type: 'system',
      content: `📊 **Portfolio Stats**:\n\n🎓 ${stats.certifications} Certifications\n🔬 ${stats.research} Research Ideas\n💼 ${stats.projects} Projects\n⭐ ${stats.recommendations} Recommendations\n🛠️ ${stats.skills} Skills`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, statsMessage]);
    setShowMenu(false);
  };

  // Shorter quick questions
  const quickQuestions = [
    "Main skills?",
    "Recent projects?",
    "Certifications?",
    "Experience?",
    "Contact info?",
    "CamWatch project?",
    "Research ideas?",
    "Recommendations?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-ping opacity-20"></div>
            
            {/* Floating particles */}
            <div className="absolute -top-3 -left-2 text-yellow-300 animate-bounce text-lg">✨</div>
            <div className="absolute -bottom-2 -right-3 text-blue-300 animate-bounce text-sm" style={{ animationDelay: '0.5s' }}>💫</div>
            <div className="absolute -top-1 -right-4 text-green-300 animate-pulse text-xs">🚀</div>
            
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce font-bold">
              AI
            </div>
            
            <MessageCircle size={28} className="relative z-10" />
            
            <div className="absolute bottom-full right-0 mb-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-purple-500/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                  Chat with Syab
                </span>
              </div>
              <div className="text-xs text-gray-300 mt-1">Smart Portfolio Assistant</div>
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[420px] h-[650px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-purple-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-4 text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-2 left-4 text-2xl animate-pulse">🌟</div>
              <div className="absolute top-3 right-8 text-lg animate-bounce">💎</div>
              <div className="absolute bottom-2 left-8 text-sm animate-pulse">✨</div>
              <div className="absolute bottom-3 right-4 text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>🚀</div>
            </div>
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                    <Bot size={24} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">MenteE AI🥀</h3>
                  <p className="text-sm text-purple-100 flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>{isTyping ? "typing..." : "online"}</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="hover:bg-white/20 p-2 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <MoreVertical size={20} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 w-44 z-20 backdrop-blur-sm">
                      <button
                        onClick={showStats}
                        className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 flex items-center space-x-3 transition-all"
                      >
                        <Database size={16} className="text-blue-500" />
                        <span className="font-medium">Portfolio Stats</span>
                      </button>
                      <button
                        onClick={clearChat}
                        className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 flex items-center space-x-3 transition-all"
                      >
                        <Trash2 size={16} />
                        <span className="font-medium">Clear Chat</span>
                      </button>
                    </div>
                  )}
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors backdrop-blur-sm"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Questions Bar */}
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
            <div className="text-xs text-gray-600 mb-3 flex items-center font-medium">
              <Sparkles size={12} className="mr-2 text-purple-500" />
              Quick questions:
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {quickQuestions.slice(0, 4).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="flex-shrink-0 text-xs bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 border border-purple-200 hover:border-purple-300 text-purple-700 px-3 py-2 rounded-full transition-all transform hover:scale-105 font-medium"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 relative"
            style={{
              background: `
                linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%),
                radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%),
                radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 70%),
                radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)
              `,
              backgroundSize: '100% 100%, 200px 200px, 200px 200px, 200px 200px'
            }}
          >
            {/* Floating background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 text-purple-200 text-4xl animate-pulse opacity-30">🌈</div>
              <div className="absolute top-40 right-8 text-pink-200 text-3xl animate-bounce opacity-20" style={{ animationDelay: '1s' }}>💫</div>
              <div className="absolute bottom-32 left-6 text-blue-200 text-2xl animate-pulse opacity-25" style={{ animationDelay: '2s' }}>⭐</div>
              <div className="absolute bottom-64 right-12 text-indigo-200 text-xl animate-bounce opacity-30" style={{ animationDelay: '1.5s' }}>✨</div>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-3 relative z-10`}
              >
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  {/* Message bubble */}
                  <div className={`relative px-4 py-3 rounded-2xl shadow-lg transform transition-all hover:scale-[1.02] ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-md shadow-purple-200'
                      : message.type === 'system'
                      ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 border border-orange-200 rounded-bl-md shadow-orange-100'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-gray-100'
                  }`}>
                    
                    {/* Message content */}
                    <div className="text-sm leading-relaxed">
                      {renderMarkdown(message.content)}
                    </div>
                    
                    {/* Timestamp */}
                    <div className={`text-xs mt-2 flex items-center justify-end space-x-1 ${
                      message.type === 'user' 
                        ? 'text-purple-100' 
                        : message.type === 'system'
                        ? 'text-orange-600'
                        : 'text-gray-400'
                    }`}>
                      <span>{message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}</span>
                      {message.type === 'user' && (
                        <span className="ml-1 text-purple-200">✓✓</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Message tail */}
                  <div className={`w-0 h-0 ${
                    message.type === 'user'
                      ? 'float-right border-l-[12px] border-l-pink-500 border-t-[12px] border-t-transparent'
                      : message.type === 'system'
                      ? 'float-left border-r-[12px] border-r-orange-100 border-t-[12px] border-t-transparent'
                      : 'float-left border-r-[12px] border-r-white border-t-[12px] border-t-transparent'
                  }`}></div>
                </div>
                
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white order-1 ml-3' 
                    : message.type === 'system'
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white order-2 mr-3'
                    : 'bg-gradient-to-r from-gray-600 to-gray-800 text-white order-2 mr-3'
                }`}>
                  {message.type === 'user' ? <User size={16} /> : 
                   message.type === 'system' ? <Database size={16} /> : <Bot size={16} />}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start mb-3 relative z-10">
                <div className="max-w-[80%] order-1">
                  <div className="bg-white border border-gray-200 px-4 py-4 rounded-2xl rounded-bl-md shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">Let me think...</span>
                    </div>
                  </div>
                  <div className="w-0 h-0 float-left border-r-[12px] border-r-white border-t-[12px] border-t-transparent"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white flex items-center justify-center flex-shrink-0 order-2 mr-3 shadow-lg">
                  <Bot size={16} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Fixed Input Section */}
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-purple-100">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="w-full resize-none border-2 border-purple-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm max-h-24 bg-white text-gray-800 placeholder-gray-500"
                  disabled={isTyping}
                  rows="1"
                  style={{ minHeight: '48px' }}
                />
              </div>
              
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-2xl transition-all duration-200 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-purple-300"
              >
                {isTyping ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
            
            {/* Status bar */}
            <div className="text-xs text-gray-500 mt-3 text-center flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Fact: our Leader own Google's first Index Page</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Click outside to close menu */}
      {showMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
};

export default AIChatbot;