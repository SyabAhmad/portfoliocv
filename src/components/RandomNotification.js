import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RandomNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [gifLoaded, setGifLoaded] = useState(false);

  const messages = [
    "� Meow!",
    "📜 Scroll more to see amazing work!",
    "🐱 Purrfect projects below!",
    "✨ Check out my creations!",
    "😺 Meow! More content ahead!",
    "🚀 Scroll to see the magic!",
    "🎨 Beautiful designs waiting!",
    "💻 Awesome code ahead!",
    "📱 Mobile magic below!",
    "🌟 Stars below - literally!",
    "😻 Meow for more!",
    "⬇️ Keep scrolling, friend!",
  ];

  const gifUrl =
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d3ljdmtuM3poMXNoamdkM2oyN3o5NXlncXFoM3o4cXJ6a3BiYTR2OCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/pzvUEkOeAViy7VS7B6/giphy.gif";

  useEffect(() => {
    // First notification appears after 3 seconds, then every 30-50 seconds
    const firstDelay = 3000; // 3 seconds

    const timer = setTimeout(() => {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];
      console.log("📢 Showing notification:", randomMessage);
      setCurrentMessage(randomMessage);
      setShowNotification(true);
      setGifLoaded(false);

      // Auto-hide after 8 seconds
      const hideTimer = setTimeout(() => {
        console.log("📢 Hiding notification");
        setShowNotification(false);
      }, 8000);

      return () => clearTimeout(hideTimer);
    }, firstDelay);

    return () => {
      console.log("🧹 Notification cleanup");
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-20 right-8 z-50 max-w-xs"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg border border-purple-400 overflow-hidden">
            <div className="px-5 py-4 flex items-center justify-between gap-4">
              {/* Sticker GIF - Always visible */}
              <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={gifUrl}
                  alt="Sticker"
                  className="w-full h-full object-contain"
                  loading="eager"
                  onLoad={() => {
                    console.log("✅ Sticker loaded");
                    setGifLoaded(true);
                  }}
                  onError={(e) => {
                    console.error("❌ Sticker failed to load:", gifUrl);
                    e.target.parentElement.innerHTML =
                      '<span class="text-3xl">😸</span>';
                  }}
                />
              </div>

              {/* Message Text */}
              <p className="text-white font-bold text-sm leading-relaxed flex-1 min-w-0">
                {currentMessage}
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowNotification(false)}
                className="flex-shrink-0 bg-white/20 hover:bg-white/30 text-white rounded-full w-7 h-7 flex items-center justify-center transition-all duration-200"
              >
                ✕
              </button>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 8, ease: "linear" }}
              className="h-0.5 bg-white/60"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RandomNotification;
