import React, { useState, useEffect, useMemo } from 'react';
import Skills from './SKill';
import Contact from './Contacts';
import SEO from './SEO';

const HomePage = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const techSayings = useMemo(() => [
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
  ], []);


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
      } else if (isDeleting && currentText === '') {
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
    "name": "Syed Syab Ahmad Portfolio",
    "url": "https://syab.link",
    "description": "AI Engineer and Full-Stack Developer portfolio showcasing machine learning projects, web development skills, and research work.",
    "author": {
      "@type": "Person",
      "name": "Syed Syab Ahmad",
      "jobTitle": "AI Engineer & Full-Stack Developer",
      "url": "https://syab.link",
      "sameAs": [
        "https://www.linkedin.com/in/syedsyab/",
        "https://github.com/syabahmad"
      ]
    }
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


      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden relative">
        

        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full opacity-70 filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full opacity-70 filter blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full opacity-50 filter blur-2xl" />

          {/* Hero Section */}
          <header className="relative flex flex-col items-center justify-center h-screen text-center px-4">
            <div className="max-w-4xl mx-auto">
              {/* Profile Image */}
              <div className="mb-8 relative">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl shadow-cyan-500/20">
                  <img 
                    src="dp.jpeg"
                    alt="Syed Syab Ahmad"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-3xl font-bold hidden"
                  >
                    SSA
                  </div>
                </div>
                {/* Animated ring around profile */}
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              </div>

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

          {/* Main Content */}
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