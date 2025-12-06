import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [designDropdown, setDesignDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/research", label: "Research" },
    { path: "/mentee", label: "MenteE" }, // Now just a normal link
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            Syed Syab Ahmad
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-600 dark:text-cyan-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Design & Architecture Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDesignDropdown(true)}
              onMouseLeave={() => setDesignDropdown(false)}
            >
              <button
                className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${
                  location.pathname.startsWith("/design")
                    ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-600 dark:text-cyan-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
              >
                Design & Architecture
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {designDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-2 z-50">
                  <Link
                    to="/design"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                    onClick={() => setDesignDropdown(false)}
                  >
                    Overview
                  </Link>
                  <div className="h-px bg-gray-200 dark:bg-gray-800 my-1"></div>
                  <Link
                    to="/design/revit"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                    onClick={() => setDesignDropdown(false)}
                  >
                    Architectural Modeling (Revit)
                  </Link>
                  <Link
                    to="/design/autocad"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                    onClick={() => setDesignDropdown(false)}
                  >
                    2D Drafting (AutoCAD)
                  </Link>
                  <Link
                    to="/design/sketchup"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                    onClick={() => setDesignDropdown(false)}
                  >
                    3D Visualization (SketchUp)
                  </Link>
                  <div className="h-px bg-gray-200 dark:bg-gray-800 my-1"></div>
                  <Link
                    to="/design/projects"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                    onClick={() => setDesignDropdown(false)}
                  >
                    Sample Projects
                  </Link>
                </div>
              )}
            </div>

            {/* Let's Connect Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all"
            >
              Let's Connect
            </Link>
          </div>

          {/* Theme Toggle - Always Visible */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all mr-2"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-600 dark:text-cyan-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Design Section */}
            <div className="mt-2">
              <Link
                to="/design"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Design & Architecture
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/design/revit"
                  className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Revit
                </Link>
                <Link
                  to="/design/autocad"
                  className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  AutoCAD
                </Link>
                <Link
                  to="/design/sketchup"
                  className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SketchUp
                </Link>
                <Link
                  to="/design/projects"
                  className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  All Projects
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
