import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCatAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [catData, setCatData] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // List of funny messages the cat can say
  const catMessages = [
    "Meow! 😸",
    "You're doing great! 🐱",
    "Keep coding! 💻",
    "Purr-fect work! ✨",
    "Meow meow! 🎉",
    "Nice to see you! 👋",
    "Keep scrolling! 📜",
    "Hello there! 😻",
    "Paw-some portfolio! 👏",
  ];

  // Available GIFs from public/gifs folder (user will add these)
  const availableGifs = [
    "/gifs/cat1.gif",
    "/gifs/cat2.gif",
    "/gifs/cat3.gif",
    "/gifs/cat4.gif",
    "/gifs/cat5.gif",
  ];

  // Sticker GIF
  const stickerGif =
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d3ljdmtuM3poMXNoamdkM2oyN3o5NXlncXFoM3o4cXJ6a3BiYTR2OCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/pzvUEkOeAViy7VS7B6/giphy.gif";

  // Trigger random cat appearance
  useEffect(() => {
    const showCat = () => {
      // Random GIF
      const randomGif =
        availableGifs[Math.floor(Math.random() * availableGifs.length)];

      // Random message
      const randomMessage =
        catMessages[Math.floor(Math.random() * catMessages.length)];

      // Random position (not too close to edges)
      const randomX = Math.random() * (window.innerWidth - 150);
      const randomY = Math.random() * (window.innerHeight - 200);

      setCatData({
        gif: randomGif,
        message: randomMessage,
      });

      setPosition({ x: randomX, y: randomY });
      setIsVisible(true);

      // Auto disappear after 5 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return hideTimer;
    };

    // Show cat every 15-25 seconds
    const randomDelay = 15000 + Math.random() * 10000;
    const appearTimer = setInterval(showCat, randomDelay);

    // Optional: Show cat immediately on first load (comment out to disable)
    const initialTimer = setTimeout(showCat, 3000);

    return () => {
      clearInterval(appearTimer);
      clearTimeout(initialTimer);
    };
  }, []);

  // Handle cat movement (optional floating movement)
  useEffect(() => {
    if (!isVisible || !catData) return;

    const moveTimer = setTimeout(() => {
      const newX = position.x + (Math.random() - 0.5) * 100;
      const newY = position.y + (Math.random() - 0.5) * 100;

      setPosition({
        x: Math.max(0, Math.min(newX, window.innerWidth - 150)),
        y: Math.max(0, Math.min(newY, window.innerHeight - 200)),
      });
    }, 2000);

    return () => clearTimeout(moveTimer);
  }, [isVisible, catData, position]);

  return (
    <AnimatePresence>
      {isVisible && catData && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {/* Cat Container */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="relative"
          >
            {/* Cat GIF */}
            <div className="relative">
              <motion.img
                src={stickerGif}
                alt="Floating Cat Sticker"
                className="w-32 h-32 object-cover rounded-lg shadow-2xl"
                loading="eager"
                onError={(e) => {
                  // Fallback if GIF doesn't exist
                  console.error("Sticker failed to load:", stickerGif);
                  e.target.style.display = "none";
                }}
              />

              {/* Fallback emoji if GIF fails */}
              <motion.div
                className="w-32 h-32 flex items-center justify-center text-6xl bg-gradient-to-br from-orange-300 to-yellow-300 rounded-lg shadow-2xl"
                initial={{ display: "none" }}
              >
                🐱
              </motion.div>
            </div>

            {/* Message bubble */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-cyan-400 whitespace-nowrap"
            >
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {catData.message}
              </p>

              {/* Message tail */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-gray-800 border-b-2 border-r-2 border-cyan-400 rotate-45"></div>
            </motion.div>

            {/* Floating particles (optional sparkles) */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 100,
                  y: (Math.random() - 0.5) * 100,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
                style={{
                  left: `${Math.random() * 100}px`,
                  top: `${Math.random() * 100}px`,
                }}
              />
            ))}
          </motion.div>

          {/* Click to dismiss */}
          <motion.button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs font-bold hover:bg-red-600 transition"
            title="Close"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCatAnimation;
