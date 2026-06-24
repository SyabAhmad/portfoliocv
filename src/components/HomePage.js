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
    [],
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
    url: "https://syab.tech",
    description:
      "AI Engineer and Full-Stack Developer portfolio showcasing machine learning projects, web development skills, and research work.",
    author: {
      "@type": "Person",
      name: "Syed Syab Ahmad",
      jobTitle: "AI Engineer & Full-Stack Developer",
      url: "https://syab.tech",
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
        title="Home - Syed Syab Ahmad - Hire AI Engineer & Full-Stack Developer"
        description="AI Engineer & Full-Stack Developer building intelligent solutions. Available for hire and open to any opportunity worldwide. Specializing in Python, Machine Learning, Deep Learning, React, Django, TensorFlow. Remote work or relocation. Riyadh based. Visa sponsorship available."
        keywords="Hire AI engineer, Full-stack developer for hire, Machine learning specialist, Python developer for hire, Freelance AI developer, Remote AI engineer, Python expert, React developer, Django developer, Flask developer, JavaScript specialist, Web development services, AI project development, Machine learning services, Deep learning services, Job opportunities, Career opportunities, Skilled developer, Worldwide remote, Saudi Arabia, Pakistan, Available worldwide, Visa sponsorship, Work sponsorship"
        url="https://syab.tech/"
        structuredData={homePageStructuredData}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-300">
        <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
          {/* Plus pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

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
            className="absolute top-0 left-0 w-96 h-96 bg-gray-400/30 rounded-full filter blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none"
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
            className="absolute bottom-0 right-0 w-96 h-96 bg-gray-400/30 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"
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
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-gray-400/25 rounded-full filter blur-3xl pointer-events-none"
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
            className="absolute -bottom-40 -right-40 w-80 h-80 border border-gray-400/20 rounded-full pointer-events-none"
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
            className="absolute lg:-top-40 lg:-left-40 top-0 left-0 w-80 h-80 border border-gray-400/20 rounded-full pointer-events-none"
          />

          {/* Hero Section - Split Layout */}
          <header className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen pt-14 pb-6 px-4 lg:px-8 gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 lg:flex-[2] max-w-xl lg:max-w-2xl lg:pr-16 mb-12 lg:mb-0 text-center lg:text-left order-2 lg:order-1 mt-10"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-gray-900 dark:text-white leading-none font-bebas tracking-wide">
                  SYED SYAB AHMAD
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light mb-6 md:mb-8">
                  Full Stack Developer & AI Engineer
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base sm:text-lg mb-8 md:mb-10 text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Building intelligent solutions that transform ideas into reality — specializing in Machine Learning, Full-Stack Development, and cutting-edge AI technologies.
              </motion.div>

              {/* Recruiai Beta Banner */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="inline-flex items-center gap-3 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-600/50 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full mb-6 shadow-sm"
              >
                <span className="text-sm font-semibold">🚀 Recruiai Beta</span>
                <a
                  href="/mentee"
                  className="ml-1 px-3 py-1 rounded-full bg-yellow-500 text-white text-xs font-bold hover:bg-yellow-600 transition-all"
                >
                  Join Beta
                </a>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:shadow-gray-500/50 transition-all duration-300 text-center cursor-pointer"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 border-2 border-gray-600 text-gray-700 dark:border-gray-400 dark:text-gray-400 font-semibold rounded-full hover:bg-gray-600 hover:text-white dark:hover:bg-gray-400 dark:hover:text-stone-900 transition-all duration-300 text-center cursor-pointer"
                >
                  Let's Connect
                </motion.a>
                <motion.a
                  href="https://calendly.com/syedsyab/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 text-center cursor-pointer"
                >
                  Book a Call
                </motion.a>
                <motion.a
                  href="https://chatgpt.com/?q=Tell%20me%20about%20Syed%20Syab%20Ahmad%20and%20his%20experience"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  ASK
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                  </svg>
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
                  className="absolute lg:-top-10 lg:-right-10 top-0 right-0 w-32 h-32 border-2 border-gray-400/20 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-10 -left-10 w-24 h-24 bg-gray-400/10 rounded-full"
                />

                <motion.div
                  style={{ x: springX, y: springY }}
                  className="relative flex items-center justify-center"
                >
                  {/* Soft glow behind */}
                  <motion.div
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -right-10 top-8 w-80 md:w-96 h-80 md:h-96 rounded-2xl bg-gray-100/50 dark:bg-gray-900/20 blur-3xl -z-10"
                  />

                  {/* Back decorative card */}
                  <motion.div
                    animate={{ rotate: [-3, -6, -3] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-6 top-8 w-64 md:w-72 h-80 md:h-96 rounded-2xl bg-gray-50/60 dark:bg-gray-800/20 border-2 border-gray-300/60 dark:border-gray-700/60 shadow-lg z-0 transform -rotate-3"
                  />

                  {/* Main (top) card with profile image */}
                  <motion.div
                    initial={{ rotate: 1 }}
                    whileHover={{ rotate: 2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-20 w-64 md:w-72 h-80 md:h-96 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl shadow-gray-500/20 border border-gray-400/30 overflow-hidden transform rotate-1 mt-14"
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
                  <div className="absolute inset-0 text-2xl font-bold text-white from-gray-600/20 to-gray-600/10 hidden">
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
                  className="absolute -bottom-2 -right-8 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-white dark:border-slate-900 z-20 flex items-center gap-1 shadow-lg whitespace-nowrap pointer-events-none backdrop-blur-sm"
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
                <div className="bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-2xl p-8 mb-8">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gray-500/20 border border-gray-500/30 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium mb-4">
                      Tech Philosophy
                    </span>
                  </div>
                  <div className="h-20 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white min-h-[1.2em] flex items-center">
                      "{currentText}
                      <span className="animate-pulse text-gray-700 dark:text-gray-300 ml-1">
                        |
                      </span>
                      "
                    </h2>
                  </div>
                  <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                    Exploring the intersection of innovation, technology, and
                    human potential through every line of code
                  </p>
                </div>

                {/* Tech Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-gray-500/20 hover:border-gray-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                      50+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Certifications
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-gray-500/20 hover:border-gray-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                      20+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Research Ideas
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                      10+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Projects
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-teal-500/20 hover:border-teal-500/50 transition-all duration-300">
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
