import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/research", label: "Research" },
    { path: "/mentee", label: "MenteE" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent"
          >
            Syed Syab
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm transition-all ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Design Link - Simple */}
            <Link
              to="/design"
              className={`px-3 py-2 rounded-lg text-sm transition-all ${
                location.pathname.startsWith("/design")
                  ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              }`}
            >
              Design
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            {/* Social Icons */}
            <a
              href="https://github.com/syabahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/syedsyab/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <FaLinkedin size={16} />
            </a>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/design"
              className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                location.pathname.startsWith("/design")
                  ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Design & Architecture
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
