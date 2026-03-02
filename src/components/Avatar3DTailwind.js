import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Brain, Mic, Volume2 } from "lucide-react";

/**
 * Enhanced 3D Avatar with Tailwind CSS
 * Beautiful, modern design with smooth animations
 */
const Avatar3DTailwind = ({
  isListening = false,
  isSpeaking = false,
  emotion = "neutral",
  compact = false,
  showIndicators = true,
}) => {
  const [eyeBlink, setEyeBlink] = useState(false);
  const [mouthState, setMouthState] = useState(0);

  const avatarSizes = compact
    ? {
        outerPulseOne: 170,
        outerPulseTwo: 210,
        glow: 150,
        glowOffset: -8,
        shell: "w-36 h-36",
        eyesGap: "gap-6",
        eyesMargin: "mb-3",
        mouthSmile: "w-10 h-5",
        mouthNeutral: "w-8 h-0.5",
        mouthOpen: "w-6 h-8",
        mouthHalf: "w-6 h-4",
        mouthClosed: "w-5 h-1",
        sparkleSize: "w-3 h-3",
        statusIconWrap: "p-2",
        statusIcon: "w-4 h-4",
      }
    : {
        outerPulseOne: 200,
        outerPulseTwo: 240,
        glow: 160,
        glowOffset: -10,
        shell: "w-40 h-40",
        eyesGap: "gap-6",
        eyesMargin: "mb-3",
        mouthSmile: "w-10 h-5",
        mouthNeutral: "w-8 h-0.5",
        mouthOpen: "w-6 h-8",
        mouthHalf: "w-6 h-4",
        mouthClosed: "w-5 h-1",
        sparkleSize: "w-3 h-3",
        statusIconWrap: "p-2",
        statusIcon: "w-4 h-4",
      };

  // Eye blink animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 150);
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Mouth animation when speaking
  useEffect(() => {
    if (isSpeaking) {
      const mouthInterval = setInterval(() => {
        setMouthState((prev) => (prev + 1) % 4);
      }, 150);
      return () => clearInterval(mouthInterval);
    }
  }, [isSpeaking]);

  const getMouthShape = () => {
    if (!isSpeaking) {
      return emotion === "happy" ? "smile" : "neutral";
    }
    return ["open", "half", "closed", "half"][mouthState];
  };

  return (
    <div
      className={`relative flex flex-col items-center ${compact ? "gap-2 p-2" : "gap-4 p-6"}`}
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`absolute rounded-full ${
            isListening
              ? "bg-blue-500/10"
              : isSpeaking
                ? "bg-purple-500/10"
                : "bg-slate-600/10"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${avatarSizes.outerPulseOne}px`,
            height: `${avatarSizes.outerPulseOne}px`,
          }}
        />
        <motion.div
          className={`absolute rounded-full ${
            isListening
              ? "bg-blue-500/5"
              : isSpeaking
                ? "bg-purple-500/5"
                : "bg-slate-600/5"
          }`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${avatarSizes.outerPulseTwo}px`,
            height: `${avatarSizes.outerPulseTwo}px`,
          }}
        />
      </div>

      {/* Main Avatar Container */}
      <motion.div
        className="relative z-10"
        animate={{
          y: isSpeaking ? [0, -10, 0] : [0, -5, 0],
        }}
        transition={{
          duration: isSpeaking ? 0.5 : 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Outer Glow Ring */}
        <motion.div
          className={`absolute inset-0 rounded-full blur-2xl ${
            isListening
              ? "bg-gradient-to-br from-blue-500 to-cyan-500"
              : isSpeaking
                ? "bg-gradient-to-br from-purple-500 to-pink-500"
                : "bg-gradient-to-br from-slate-600 to-slate-700"
          }`}
          animate={{
            scale: isListening || isSpeaking ? [1, 1.15, 1] : 1,
            opacity: isListening || isSpeaking ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${avatarSizes.glow}px`,
            height: `${avatarSizes.glow}px`,
            margin: `${avatarSizes.glowOffset}px`,
          }}
        />

        {/* Main Avatar Circle */}
        <div
          className={`relative ${avatarSizes.shell} rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1 shadow-2xl`}
        >
          <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Eyes */}
            <div
              className={`flex ${avatarSizes.eyesGap} ${avatarSizes.eyesMargin} relative z-10`}
            >
              {/* Left Eye */}
              <motion.div
                className="relative"
                animate={{
                  x: isListening ? [0, -3, 3, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: isListening ? Infinity : 0,
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-white shadow-lg transition-all duration-150 ${
                    eyeBlink ? "scale-y-10" : "scale-100"
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </motion.div>

              {/* Right Eye */}
              <motion.div
                className="relative"
                animate={{
                  x: isListening ? [0, -3, 3, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: isListening ? Infinity : 0,
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-white shadow-lg transition-all duration-150 ${
                    eyeBlink ? "scale-y-10" : "scale-100"
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </motion.div>
            </div>

            {/* Mouth */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {getMouthShape() === "smile" && (
                  <motion.div
                    key="smile"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className={`${avatarSizes.mouthSmile} border-b-2 border-white rounded-b-full`}
                  />
                )}
                {getMouthShape() === "neutral" && (
                  <motion.div
                    key="neutral"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className={`${avatarSizes.mouthNeutral} bg-white rounded-full`}
                  />
                )}
                {getMouthShape() === "open" && (
                  <motion.div
                    key="open"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className={`${avatarSizes.mouthOpen} bg-slate-800 rounded-full border-2 border-white`}
                  />
                )}
                {getMouthShape() === "half" && (
                  <motion.div
                    key="half"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className={`${avatarSizes.mouthHalf} bg-slate-800 rounded-full border-2 border-white`}
                  />
                )}
                {getMouthShape() === "closed" && (
                  <motion.div
                    key="closed"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className={`${avatarSizes.mouthClosed} bg-white rounded-full`}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Decorative Sparkles */}
            {(isListening || isSpeaking) && (
              <>
                <motion.div
                  className="absolute top-8 right-8"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0,
                  }}
                >
                  <Sparkles
                    className={`${avatarSizes.sparkleSize} text-yellow-400`}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 left-8"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  <Zap className={`${avatarSizes.sparkleSize} text-cyan-400`} />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-4"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                >
                  <Brain
                    className={`${avatarSizes.sparkleSize} text-purple-400`}
                  />
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* Status Icon Overlay */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {isListening && (
            <div
              className={`bg-blue-500 rounded-full ${avatarSizes.statusIconWrap} shadow-lg`}
            >
              <Mic className={`${avatarSizes.statusIcon} text-white`} />
            </div>
          )}
          {isSpeaking && (
            <div
              className={`bg-purple-500 rounded-full ${avatarSizes.statusIconWrap} shadow-lg`}
            >
              <Volume2 className={`${avatarSizes.statusIcon} text-white`} />
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Audio Visualization Bars */}
      {showIndicators && isSpeaking && (
        <div
          className={`flex gap-1 items-center justify-center ${compact ? "h-10 mt-2" : "h-16 mt-4"}`}
        >
          {[...Array(compact ? 10 : 15)].map((_, i) => (
            <motion.div
              key={i}
              className={`${compact ? "w-[3px]" : "w-1"} bg-gradient-to-t from-purple-500 to-pink-500 rounded-full`}
              animate={{
                height: [
                  compact ? 8 : 10,
                  Math.random() * (compact ? 26 : 50) + 10,
                  compact ? 8 : 10,
                ],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Listening Wave Animation */}
      {showIndicators && isListening && (
        <div
          className={`flex gap-1 items-center justify-center ${compact ? "h-10 mt-2" : "h-16 mt-4"}`}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`${compact ? "w-1.5 h-1.5" : "w-2 h-2"} bg-blue-500 rounded-full`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Status Text */}
      {showIndicators && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isListening && (
              <motion.div
                key="listening"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`inline-flex items-center gap-2 ${compact ? "px-3 py-1.5" : "px-4 py-2"} bg-blue-500/20 border border-blue-500/40 rounded-full backdrop-blur-sm`}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span
                  className={`${compact ? "text-xs" : "text-sm"} text-blue-400 font-medium`}
                >
                  Listening...
                </span>
              </motion.div>
            )}
            {isSpeaking && (
              <motion.div
                key="speaking"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`inline-flex items-center gap-2 ${compact ? "px-3 py-1.5" : "px-4 py-2"} bg-purple-500/20 border border-purple-500/40 rounded-full backdrop-blur-sm`}
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span
                  className={`${compact ? "text-xs" : "text-sm"} text-purple-400 font-medium`}
                >
                  Speaking...
                </span>
              </motion.div>
            )}
            {!isListening && !isSpeaking && (
              <motion.div
                key="ready"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`inline-flex items-center gap-2 ${compact ? "px-3 py-1.5" : "px-4 py-2"} bg-slate-700/20 border border-slate-600/40 rounded-full backdrop-blur-sm`}
              >
                <div className="w-2 h-2 bg-slate-400 rounded-full" />
                <span
                  className={`${compact ? "text-xs" : "text-sm"} text-slate-400 font-medium`}
                >
                  Ready to chat
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default Avatar3DTailwind;
