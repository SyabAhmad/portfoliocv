import React, { useState, useEffect } from 'react';
import Skills from './SKill';
import Experience from './Experience';
import Contact from './Contacts';

const HomePage = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const techSayings = [
    "Code is poetry written in logic",
    "AI is the new electricity",
    "Machine Learning transforms data into wisdom",
    "Innovation distinguishes leaders from followers",
    "The future belongs to those who code it",
    "Deep Learning, Deeper Insights",
    "Algorithms are the recipes for digital magic",
    "Data is the oil of the 21st century",
    "Building tomorrow's solutions today",
    "Where creativity meets technology"
  ];

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
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % techSayings.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typingSpeed, techSayings]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full opacity-70 filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full opacity-70 filter blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full opacity-50 filter blur-2xl" />

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI Engineer & Innovator
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 font-light">
            Building intelligent solutions that transform ideas into reality
          </p>
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            Specializing in Machine Learning, Full-Stack Development, and cutting-edge AI technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-cyan-400 hover:to-purple-400 hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative">
        {/* Tech Sayings Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-8 mb-8">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
                  Tech Philosophy
                </span>
              </div>
              <div className="h-20 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent min-h-[1.2em] flex items-center">
                  "{currentText}
                  <span className="animate-pulse text-cyan-400 ml-1">|</span>"
                </h2>
              </div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Exploring the intersection of innovation, technology, and human potential through every line of code
              </p>
            </div>

            {/* Tech Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Certifications</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm">Research Ideas</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Projects</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:-translate-y-2 hover:shadow-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Innovation</div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <Skills />
        </section>
{/* 
        <section id="experience" className="py-16">
          <Experience />
        </section> */}

        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
