import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Skills from "./SKill";
import Contact from "./Contacts";
import SEO from "./SEO";

const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [activeImage, setActiveImage] = useState("me");

  const techSayings = useMemo(
    () => [
      "I build software that solves real business problems",
      "AI is the new electricity — I wire your business",
      "Machine Learning turns your data into decisions",
      "Innovation distinguishes leaders from followers",
      "Code that delivers, not just compiles",
      "Deep Learning, Deeper Business Impact",
      "Data is the oil — I build the refinery",
      "Building tomorrow's solutions for today's challenges",
      "Where your business goals meet technical execution",
      "I don't just write code — I deliver working software",
    ],
    [],
  );

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

  const stickers = [
    { text: "AI", color: "bg-slate-700", rotate: -12, top: "8%", left: "5%" },
    { text: "ML", color: "bg-stone-600", rotate: 8, top: "15%", right: "8%" },
    { text: "Python", color: "bg-stone-500", rotate: -6, bottom: "25%", left: "3%" },
    { text: "React", color: "bg-slate-600", rotate: 14, top: "45%", right: "4%" },
    { text: "Open Source", color: "bg-stone-700", rotate: -10, bottom: "12%", right: "6%" },
    { text: "Full Stack", color: "bg-rose-900", rotate: 5, top: "60%", left: "2%" },
  ];

  return (
    <>
      <SEO
        title="Hire Syed Syab Ahmad | AI Engineer & Full-Stack Developer"
        description="I build AI-powered web applications, ML systems, mobile apps, and data pipelines. Hire me for your next project — delivered software, not just promises."
        keywords="hire AI engineer, hire full-stack developer, ML development service, web application development, AI consultant"
        url="https://syab.tech/"
        structuredData={homePageStructuredData}
      />

      <div className="min-h-screen bg-stone-900 dark:bg-gray-950 overflow-hidden relative transition-colors duration-300">
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Scattered sticker tags */}
        {stickers.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 200 }}
            className={`absolute ${s.color} text-stone-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 pointer-events-none select-none hidden md:block border border-stone-500/30`}
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
              transform: `rotate(${s.rotate}deg)`,
            }}
          >
            {s.text}
          </motion.div>
        ))}

        {/* Hero Section - Split Layout with Flyer Aesthetic */}
        <header className="relative min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-4">
            {/* Left Side - Text Flyer */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: -2.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 lg:flex-[3] max-w-2xl relative"
              style={{ transform: "rotate(-2.5deg)" }}
            >
              {/* Main pinned flyer card */}
              <div className="relative bg-stone-100 dark:bg-stone-800 rounded-sm shadow-2xl shadow-black/40 p-6 sm:p-8 lg:p-10">
                {/* Tape strips */}
                <div className="absolute -top-3 left-[15%] w-20 h-6 bg-stone-400/40 rotate-[-8deg] rounded-sm shadow-sm" />
                <div className="absolute -top-3 right-[15%] w-20 h-6 bg-stone-400/40 rotate-[5deg] rounded-sm shadow-sm" />

                {/* Pin */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 dark:text-stone-100 leading-none font-handwriting tracking-wide mb-3">
                  Syed Syab Ahmad
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-stone-500 dark:text-stone-400 font-handwriting mb-5">
                  Full Stack Developer & AI Engineer
                </p>
<p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-lg">
                  I build AI-powered software that solves real business problems — from web applications and ML pipelines to mobile apps and data systems. Hire me and get working software, not just promises.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-handwriting text-lg cursor-pointer"
                  >
                    View Services
                  </motion.a>
                  <motion.a
                    href="/projects"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 border-2 border-stone-500 text-stone-300 font-bold rounded-full hover:bg-stone-700 hover:text-white dark:hover:bg-stone-400 dark:hover:text-stone-900 transition-all duration-300 font-handwriting text-lg cursor-pointer"
                  >
                    See Projects
                  </motion.a>
                  <motion.a
                    href="https://calendly.com/syedsyab/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-rose-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-handwriting text-lg cursor-pointer"
                  >
                    Book a Call
                  </motion.a>
                </div>
              </div>

              {/* Scattered mini stickers below the card */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-4 left-8 bg-slate-700 text-stone-300 text-[10px] font-bold px-3 py-1 rounded-full shadow-md font-handwriting hidden sm:block border border-slate-500/30"
                style={{ transform: "rotate(6deg)" }}
              >
                React ⚛️
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-3 left-36 bg-stone-600 text-stone-200 text-[10px] font-bold px-3 py-1 rounded-full shadow-md font-handwriting hidden sm:block border border-stone-500/30"
                style={{ transform: "rotate(-4deg)" }}
              >
                Python 🐍
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image Flyers */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="flex-1 lg:flex-[2] max-w-sm lg:max-w-md relative flex justify-center"
            >
              {/* Back flyer (offset, rotated) */}
              <motion.div
                animate={{ rotate: [-5, -4, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -right-2 sm:right-2 w-48 sm:w-56 h-64 sm:h-72 rounded-sm bg-stone-200 dark:bg-stone-800 shadow-xl shadow-black/30 overflow-hidden border border-stone-300 dark:border-stone-700 z-0"
                style={{ transform: "rotate(-5deg)" }}
              >
                {/* Tape */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5 bg-stone-400/40 rotate-3 rounded-sm shadow-sm" />
                <img
                  src={activeImage === "me" ? "dp.jpeg" : "me.png"}
                  alt="Syed Syab Ahmad"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </motion.div>

              {/* Front flyer (main photo) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10"
                style={{ transform: "rotate(3deg)" }}
              >
                {/* Tape on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-stone-400/40 rotate-2 rounded-sm shadow-sm z-10" />

                <div className="relative w-56 sm:w-64 h-72 sm:h-80 rounded-sm bg-stone-100 dark:bg-stone-800 shadow-2xl shadow-black/40 overflow-hidden border border-stone-300 dark:border-stone-700">
                  <img
                    src={activeImage === "me" ? "me.png" : "dp.jpeg"}
                    alt="Syed Syab Ahmad"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />

                  {/* Polaroid bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-stone-100 dark:bg-stone-800 px-3 py-2">
                    <p className="text-center font-handwriting text-stone-600 dark:text-stone-300 text-sm">
                      That's me
                    </p>
                  </div>

                  {/* Dot switch */}
                  <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    <button
                      onClick={() => setActiveImage("me")}
                      className={`w-3 h-3 rounded-full transition-all border border-stone-400 ${
                        activeImage === "me" ? "bg-stone-800 dark:bg-stone-100 scale-125" : "bg-stone-500 dark:bg-stone-600"
                      }`}
                    />
                    <button
                      onClick={() => setActiveImage("dp")}
                      className={`w-3 h-3 rounded-full transition-all border border-stone-400 ${
                        activeImage === "dp" ? "bg-stone-800 dark:bg-stone-100 scale-125" : "bg-stone-500 dark:bg-stone-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Open to Work sticker */}
                <motion.div
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-6 sm:-right-8 bg-rose-800 text-stone-100 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 font-handwriting whitespace-nowrap pointer-events-none"
                  style={{ transform: "rotate(-8deg)" }}
                >
                  Open to Work
                </motion.div>

                {/* Graduation sticker */}
                <motion.div
                  animate={{ y: [-3, 3, -3], rotate: [10, 15, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -left-4 text-4xl pointer-events-none z-20 grayscale opacity-80"
                >
                  🎓
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-handwriting text-stone-500 text-sm text-center"
            >
              scroll down ↓
            </motion.div>
          </motion.div>
        </header>

        {/* Main Content */}
        <main className="relative z-10">
          {/* Tech Sayings - Pinned Note */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-stone-100 dark:bg-stone-800 rounded-sm shadow-xl shadow-black/30 p-6 sm:p-8 mb-8"
                style={{ transform: "rotate(1deg)" }}
              >
                {/* Tape */}
                <div className="absolute -top-3 left-1/3 w-16 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm" />
                {/* Pin */}
                <div className="absolute -top-2 right-1/3 w-3 h-3 bg-slate-500 rounded-full shadow border border-slate-700 z-10" />

                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-stone-600 dark:text-stone-300 text-xs font-bold font-handwriting mb-4">
                    Tech Philosophy
                  </span>
                  <div className="h-16 flex items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 min-h-[1.2em] flex items-center font-handwriting">
                      "{currentText}
                      <span className="animate-pulse text-stone-500 dark:text-stone-400 ml-1">|</span>"
                    </h2>
                  </div>
                  <p className="text-stone-500 dark:text-stone-400 mt-3 text-sm font-handwriting">
                    Exploring the intersection of innovation, technology, and human potential
                  </p>
                </div>
              </motion.div>

              {/* Stats Row - Scattered flyers */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { label: "Certifications", value: "50+", color: "text-stone-300", rotate: -2, emoji: "🏅" },
                  { label: "Research Ideas", value: "20+", color: "text-slate-400", rotate: 1.5, emoji: "🔬" },
                  { label: "Projects", value: "10+", color: "text-rose-400", rotate: -1, emoji: "🚀" },
                  { label: "Recruiai", value: "Est. 2025", color: "text-stone-400", rotate: 2, emoji: "💡" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, rotate: stat.rotate }}
                    whileInView={{ opacity: 1, y: 0, rotate: stat.rotate }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    className="bg-stone-100 dark:bg-stone-800 rounded-sm shadow-lg shadow-black/20 p-4 sm:p-5 border border-stone-200 dark:border-stone-700 relative"
                  >
                    {/* Mini pin */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-rose-800 rounded-full shadow-sm border border-rose-950 z-10" />
                    <div className="text-2xl mb-1 grayscale opacity-80">{stat.emoji}</div>
                    <div className={`text-2xl sm:text-3xl font-bold ${stat.color} font-handwriting`}>
                      {stat.value}
                    </div>
                    <div className="text-stone-500 text-xs font-handwriting">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="py-12">
            <Skills />
          </section>

          <section id="contact" className="py-12">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
