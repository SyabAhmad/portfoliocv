import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const InteractiveCTA = () => {
  const [showCTA, setShowCTA] = useState(false);
  const [currentCTA, setCurrentCTA] = useState(null);
  const [gifLoaded, setGifLoaded] = useState(false);
  const navigate = useNavigate();

  const ctaData = [
    {
      id: 1,
      gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWY3aDI0cmRlOHVmZnhsZTZiZDI0YjlxNmQxNm50Y253b3RmMHRweSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GaqnjVbSLs2uA/giphy.gif",
      title: "Let's Work Together! 🚀",
      message: "Ready to bring your ideas to life?",
      buttons: [
        {
          label: "Contact Us Now",
          action: "navigate",
          path: "/contact",
          color: "bg-red-500 hover:bg-red-600",
        },
        {
          label: "View Projects",
          action: "navigate",
          path: "/projects",
          color: "bg-blue-500 hover:bg-blue-600",
        },
      ],
    },
    {
      id: 2,
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXhoY3A3YzhsMGpndzU4anA0bmF5dGVvZWNmbnU2OTNyM2E5bms0YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yzrfj9cXQcraNSCSNj/giphy.gif",
      title: "What Are You Up To? 🤔",
      message: "Explore my work and skills",
      buttons: [
        {
          label: "About Me",
          action: "navigate",
          path: "/about",
          color: "bg-purple-500 hover:bg-purple-600",
        },
        {
          label: "My Projects",
          action: "navigate",
          path: "/projects",
          color: "bg-blue-500 hover:bg-blue-600",
        },
        {
          label: "Research",
          action: "navigate",
          path: "/research",
          color: "bg-green-500 hover:bg-green-600",
        },
      ],
    },
    {
      id: 3,
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXhoY3A3YzhsMGpndzU4anA0bmF5dGVvZWNmbnU2OTNyM2E5bms0YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7hr4aMSYxOmKsIzHer/giphy.gif",
      title: "Want to Chat? 💬",
      message: "Let's have a lovely conversation!",
      buttons: [
        {
          label: "Email Me Now",
          action: "email",
          value: "mailto:syab.ahmad@gmail.com",
          color: "bg-pink-500 hover:bg-pink-600",
        },
        {
          label: "Start Chat",
          action: "navigate",
          path: "/contact",
          color: "bg-indigo-500 hover:bg-indigo-600",
        },
      ],
    },
  ];

  useEffect(() => {
    const randomDelay = Math.random() * 30000 + 20000; // 20-50 seconds
    const timer = setTimeout(() => {
      const randomCTA = ctaData[Math.floor(Math.random() * ctaData.length)];
      setCurrentCTA(randomCTA);
      setShowCTA(true);
      setGifLoaded(false); // Reset loading state

      // Auto-hide after 8 seconds
      const hideTimer = setTimeout(() => {
        setShowCTA(false);
      }, 8000);

      return () => clearTimeout(hideTimer);
    }, randomDelay);

    return () => clearTimeout(timer);
  }, []);

  const handleAction = (button) => {
    if (button.action === "navigate") {
      navigate(button.path);
      setShowCTA(false);
    } else if (button.action === "email") {
      window.location.href = button.value;
      setShowCTA(false);
    }
  };

  return (
    <AnimatePresence>
      {showCTA && currentCTA && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            {/* GIF Section */}
            <div className="relative h-48 bg-black overflow-hidden flex items-center justify-center">
              {!gifLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-white text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2"></div>
                    <p className="text-xs">Loading...</p>
                  </div>
                </div>
              )}
              <img
                src={currentCTA.gif}
                alt="CTA"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  gifLoaded ? "opacity-100" : "opacity-50"
                }`}
                onLoad={() => {
                  console.log("✅ GIF loaded:", currentCTA.gif);
                  setGifLoaded(true);
                }}
                onError={(e) => {
                  console.error("❌ GIF failed to load:", currentCTA.gif);
                  setGifLoaded(true); // Still show even if failed
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="flex items-center justify-center w-full h-full text-6xl">🎬</div>';
                }}
              />
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              {/* Close Button */}
              <button
                onClick={() => setShowCTA(false)}
                className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">
                {currentCTA.title}
              </h3>

              {/* Message */}
              <p className="text-slate-300 text-sm">{currentCTA.message}</p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                {currentCTA.buttons.map((button, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleAction(button)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all duration-300 ${button.color}`}
                  >
                    {button.label}
                  </motion.button>
                ))}
              </div>

              {/* Progress Bar */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveCTA;
