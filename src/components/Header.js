import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-sm border-b border-gray-700/50 shadow-2xl">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
            Syab Syab Ahmad
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
          </div>

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