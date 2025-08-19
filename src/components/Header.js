import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenteEOpen, setIsMenteEOpen] = useState(false);
  // close modal on Escape key for better UX
  useEffect(() => {
    if (!isMenteEOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setIsMenteEOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isMenteEOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-sm border-b border-gray-700/50 shadow-2xl">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
            Syed Syab Ahmad
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Projects
            </Link>
            <Link
              to="/research"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Research
            </Link>
            <Link
              to="/experience"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Experience
            </Link>

            <button
              type="button"
              onClick={() => setIsMenteEOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isMenteEOpen}
              className="relative inline-flex items-center text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 via-green-400 to-blue-400 hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 drop-shadow-lg focus:outline-none"
              title="About MenteE"
            >
              MenteE™
              <span className="ml-2 animate-pulse" aria-hidden>✦</span>
            </button>
          </div>

          {/* MenteE Modal (centered, animated like promotional popup) */}
          {isMenteEOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mentee-title"
              onClick={() => setIsMenteEOpen(false)}
            >
              <div
                className="max-w-lg w-full mx-4"
                onClick={(e) => e.stopPropagation()}
                style={{
                  transform: 'translateY(0)',
                  transition: 'transform 180ms ease-out, opacity 180ms ease-out',
                }}
              >
                <div
                  className="w-full bg-gradient-to-br from-gray-900 to-slate-800 rounded-2xl border border-gray-700 p-6 text-white shadow-2xl transform scale-100"
                  style={{ animation: 'popIn 180ms ease-out' }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 id="mentee-title" className="text-2xl font-bold">MenteE — Startup (In Progress)</h3>
                    <button
                      onClick={() => setIsMenteEOpen(false)}
                      aria-label="Close"
                      className="text-gray-300 hover:text-white rounded-full p-1"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-gray-200 mb-4 leading-relaxed">
                    This is our startup and it's currently in progress. We're building an AI hiring product (RecruAI) — working to launch soon.
                  </p>

                  <p className="text-gray-200 mb-6">
                    For updates and company info, visit our LinkedIn. The website will be available soon.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://www.linkedin.com/company/mentee1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-black hover:opacity-95"
                    >
                      Visit LinkedIn
                    </a>
                    <button
                      onClick={() => setIsMenteEOpen(false)}
                      className="inline-block w-full sm:w-auto px-4 py-2 border border-gray-600 rounded-lg text-gray-200 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/research"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link
                to="/experience"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="/contact"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Connect
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;