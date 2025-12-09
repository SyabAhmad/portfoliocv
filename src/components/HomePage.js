import React, { useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Skills from "./SKill";
import Contact from "./Contacts";
import SEO from "./SEO";

const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Resistance effect: move opposite to cursor
    x.set(distanceX * -0.2);
    y.set(distanceY * -0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const techSayings = useMemo(
    () => [
      "Code is poetry written in logic",
      "AI is the new electricity",
      "Machine Learning transforms data into wisdom",
      "Innovation distinguishes leaders from followers",
      "The future belongs to those who code it",
      "Deep Learning, Deeper Insights",
      "Algorithms are the recipes for digital magic",
      "Data is the oil of the 21st century",
      "Building tomorrow's solutions today",
      "Where creativity meets technology",
    ],
    []
  );

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const current = techSayings[currentIndex];

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % techSayings.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typingSpeed, techSayings]);

  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Syed Syab Ahmad Portfolio",
    url: "https://syab.link",
    description:
      "AI Engineer and Full-Stack Developer portfolio showcasing machine learning projects, web development skills, and research work.",
    author: {
      "@type": "Person",
      name: "Syed Syab Ahmad",
      jobTitle: "AI Engineer & Full-Stack Developer",
      url: "https://syab.link",
      sameAs: [
        "https://www.linkedin.com/in/syedsyab/",
        "https://github.com/syabahmad",
      ],
    },
  };

  return (
    <>
      {/* use structured data in SEO so it's not unused */}
      <SEO
        title="Home - Syed Syab Ahmad"
        description="AI Engineer & Innovator — building intelligent solutions"
        url="https://syab.link/"
        structuredData={homePageStructuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-300">
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
          {/* Animated Decorative Background Elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/30 rounded-full filter blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-400/25 rounded-full filter blur-3xl pointer-events-none"
          />
          {/* Additional floating elements */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-400/25 rounded-full filter blur-3xl pointer-events-none"
          />
          {/* Corner accents */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              linear: true,
            }}
            className="absolute -bottom-40 -right-40 w-80 h-80 border border-cyan-400/20 rounded-full pointer-events-none"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              linear: true,
            }}
            className="absolute lg:-top-40 lg:-left-40 top-0 left-0 w-80 h-80 border border-purple-400/20 rounded-full pointer-events-none"
          />

          {/* Hero Section - Split Layout */}
          <header className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen pt-20 py-16 lg:py-20 px-4 lg:px-8 gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 lg:flex-[2] max-w-3xl lg:pr-16 mb-12 lg:mb-0 text-center lg:text-left order-2 lg:order-1 mt-10"
            >
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute top-20 left-10 w-16 h-16 border-2 border-cyan-400/30 rounded-full hidden lg:block"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-40 left-20 w-8 h-8 bg-purple-400/20 rounded-full hidden lg:block"
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                  Full Stack Web Developer & AI Engineer
                </h1>
              </motion.div>

              {/* Recruiai Beta Launch Banner */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-200 to-pink-100 dark:from-yellow-700 dark:to-pink-800 border border-yellow-300 dark:border-yellow-600 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full mb-6 shadow-sm"
              >
                <span className="text-sm font-semibold">🚀 Recruiai Beta</span>
                <a
                  href="/mentee"
                  className="ml-2 px-3 py-1 rounded-full bg-yellow-500 text-white text-xs font-bold hover:bg-yellow-600 transition-all"
                >
                  Join Beta
                </a>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-gray-600 dark:text-gray-300 font-light"
              >
                Building intelligent solutions that transform ideas into reality
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg mb-8 md:mb-10 text-gray-500 dark:text-gray-400 max-w-2xl"
              >
                Specializing in Machine Learning, Full-Stack Development, and
                cutting-edge AI technologies
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center lg:items-start"
              >
                <motion.a
                  href="/projects"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 188, 212, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-cyan-600 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400 font-semibold rounded-full hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
                >
                  Let's Connect
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Cards */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="flex-1 lg:flex-[1] max-w-sm lg:max-w-md relative flex justify-center lg:justify-end order-1 lg:order-2"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Background decorative elements */}
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 25, repeat: Infinity, linear: true }}
                className="absolute lg:-top-10 lg:-right-10 top-0 right-0 w-32 h-32 border-2 border-cyan-400/20 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-400/10 rounded-full"
              />

              <motion.div
                style={{ x: springX, y: springY }}
                className="relative flex items-center justify-center"
              >
                {/* Soft glow behind */}
                <motion.div
                  animate={{ opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -right-10 top-8 w-80 md:w-96 h-80 md:h-96 rounded-2xl bg-pink-100/50 blur-3xl -z-10"
                />

                {/* Back decorative card */}
                <motion.div
                  animate={{ rotate: [-3, -6, -3] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-6 top-8 w-64 md:w-72 h-80 md:h-96 rounded-2xl bg-pink-50/60 dark:bg-pink-900/20 border-2 border-pink-300/60 shadow-lg z-0 transform -rotate-3"
                />

                {/* Main (top) card with profile image */}
                <motion.div
                  initial={{ rotate: 1 }}
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-20 w-64 md:w-72 h-80 md:h-96 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl shadow-cyan-500/20 border border-cyan-400/30 overflow-hidden transform rotate-1 mt-14"
                >
                  <img
                    src="dp.jpeg"
                    alt="Syed Syab Ahmad"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 text-2xl font-bold text-white bg-gradient-to-br from-cyan-600/20 to-purple-600/10 hidden">
                    SSA
                  </div>

                  {/* Top-right badge (palette) */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-4 right-4 bg-white w-11 h-11 rounded-lg flex items-center justify-center shadow-md z-30"
                  >
                    🎨
                  </motion.div>

                  {/* Bottom-left badge (sparkle) */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-4 left-4 bg-white w-11 h-11 rounded-lg flex items-center justify-center shadow-md z-30"
                  >
                    ✨
                  </motion.div>
                </motion.div>

                {/* Graduation Cap with enhanced animation */}
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [12, 20, 12] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute lg:-top-8 lg:right-4 top-20 right-4 text-6xl filter drop-shadow-lg z-20 pointer-events-none"
                >
                  🎓
                </motion.div>

                {/* Open to Work Badge with enhanced animation */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-2 -right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-white dark:border-slate-900 z-20 flex items-center gap-1 shadow-lg whitespace-nowrap pointer-events-none backdrop-blur-sm"
                >
                  <span className="animate-spin">🚀</span> Open to Work
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="relative">
            {/* Tech Sayings Section */}
            <section className="py-16 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-2xl p-8 mb-8">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
                      Tech Philosophy
                    </span>
                  </div>
                  <div className="h-20 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent min-h-[1.2em] flex items-center">
                      "{currentText}
                      <span className="animate-pulse text-cyan-600 dark:text-cyan-400 ml-1">
                        |
                      </span>
                      "
                    </h2>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    Exploring the intersection of innovation, technology, and
                    human potential through every line of code
                  </p>
                </div>

                {/* Tech Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                      50+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Certifications
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                      20+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Research Ideas
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      10+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Projects
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-teal-500/20 hover:border-teal-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                      Recruiai
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      Company Foundation (Est. 2025)
                    </div>
                    <a
                      href="/projects/recruiai"
                      className="inline-block px-3 py-1 text-xs bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-all"
                    >
                      Join Beta
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="skills" className="py-16">
              <Skills />
            </section>

            <section id="contact" className="py-16">
              <Contact />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
