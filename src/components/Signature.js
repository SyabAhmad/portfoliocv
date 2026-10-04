import React from "react";
import { motion } from "framer-motion";

const Signature = () => {
  return (
    <motion.section
      className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-stone-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Moon - crescent in the sky */}
      <motion.div
        className="absolute top-16 right-16 w-40 h-40 rounded-full bg-white shadow-[0_0_80px_30px_rgba(255,255,255,0.3)]"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Crescent cutout */}
        <div className="absolute -left-8 top-6 w-32 h-32 rounded-full bg-stone-950" />
      </motion.div>

      {/* Tree with branches, no leaves - left side */}
      <motion.div
        className="absolute bottom-0 left-12 w-48 opacity-20"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 200 400" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          {/* Trunk */}
          <line x1="100" y1="400" x2="100" y2="200" />
          {/* Branches - no leaves */}
          <line x1="100" y1="320" x2="60" y2="260" />
          <line x1="100" y1="320" x2="140" y2="260" />
          <line x1="100" y1="260" x2="50" y2="200" />
          <line x1="100" y1="260" x2="150" y2="200" />
          <line x1="100" y1="200" x2="40" y2="140" />
          <line x1="100" y1="200" x2="160" y2="140" />
          <line x1="100" y1="200" x2="100" y2="120" />
          <line x1="100" y1="140" x2="30" y2="80" />
          <line x1="100" y1="140" x2="170" y2="80" />
          <line x1="100" y1="120" x2="100" y2="40" />
          {/* Twigs */}
          <line x1="60" y1="260" x2="40" y2="240" />
          <line x1="140" y1="260" x2="160" y2="240" />
          <line x1="50" y1="200" x2="30" y2="180" />
          <line x1="150" y1="200" x2="170" y2="180" />
          <line x1="40" y1="140" x2="20" y2="120" />
          <line x1="160" y1="140" x2="180" y2="120" />
        </svg>
      </motion.div>

      {/* Subtle ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Decorative line top */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "300px" }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-stone-400 rotate-45" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-stone-400 to-transparent" />
        </motion.div>

        {/* Main name */}
        <motion.h2
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white"
          initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
          whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
        >
          <span>👀</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-stone-400 font-light tracking-[0.4em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Building digital experiences that matter
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-stone-400"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </motion.div>

        {/* Decorative line bottom */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-8"
          initial={{ width: 0 }}
          whileInView={{ width: "300px" }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-stone-400 rotate-45" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-stone-400 to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Signature;