import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesignDropdownOpen, setIsDesignDropdownOpen] = useState(false);
  const [isMobileDesignOpen, setIsMobileDesignOpen] = useState(false);
  const designDropdownRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const primaryLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/research", label: "Research" },
    { path: "/experience", label: "Experience" },
    { path: "/gallery", label: "Gallery" },
  ];

  useEffect(() => {
    if (!isDesignDropdownOpen) return;
    const handleClickOutside = (event) => {
      if (
        designDropdownRef.current &&
        !designDropdownRef.current.contains(event.target)
      ) {
        setIsDesignDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesignDropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-sm border-b border-gray-700/50 shadow-2xl">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 truncate max-w-[180px] md:max-w-none"
          >
            Syed Syab Ahmad
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex xl:space-x-8 lg:space-x-4 items-center text-sm xl:text-base">
            {primaryLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}

            <div className="relative" ref={designDropdownRef}>
              <button
                type="button"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                aria-haspopup="true"
                aria-expanded={isDesignDropdownOpen}
                onClick={() => setIsDesignDropdownOpen((prev) => !prev)}
              >
                Design & Architecture
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDesignDropdownOpen ? "rotate-180" : ""
                  }`}
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
              {isDesignDropdownOpen && (
                <div className="absolute left-0 mt-3 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl py-3 text-left">
                  <Link
                    to="/design"
                    onClick={() => setIsDesignDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/70 transition text-left"
                  >
                    Overview
                  </Link>
                  <div className="h-px bg-slate-700 my-1" />
                  <Link
                    to="/design/revit"
                    onClick={() => setIsDesignDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/70 transition text-left"
                  >
                    Architectural Modeling (Revit)
                  </Link>
                  <Link
                    to="/design/autocad"
                    onClick={() => setIsDesignDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/70 transition text-left"
                  >
                    2D Drafting (AutoCAD)
                  </Link>
                  <Link
                    to="/design/sketchup"
                    onClick={() => setIsDesignDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/70 transition text-left"
                  >
                    3D Visualization (SketchUp)
                  </Link>
                  <div className="h-px bg-slate-700 my-1" />
                  <Link
                    to="/design/projects"
                    onClick={() => setIsDesignDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/70 transition text-left"
                  >
                    Sample Projects
                  </Link>
                  <Link
                    to="/design#certifications"
                    onClick={() => setIsDesignDropdownOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/70 transition text-left"
                  >
                    Certifications
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/mentee"
              className="relative inline-flex items-center text-base lg:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 drop-shadow-lg focus:outline-none whitespace-nowrap"
              title="About MenteE"
            >
              MenteE™
              <span className="ml-1 lg:ml-2 animate-pulse" aria-hidden>
                ✦
              </span>
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 mr-4"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-4 py-2 lg:px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm lg:text-base"
            >
              Let's Connect
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 mr-2"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex flex-col space-y-3">
              {primaryLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/mentee"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                MenteE™
              </Link>

              <div className="border border-slate-700/70 rounded-lg overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/70 transition"
                  onClick={() => setIsMobileDesignOpen((prev) => !prev)}
                  aria-expanded={isMobileDesignOpen}
                >
                  <span className="font-medium">Design & Architecture</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isMobileDesignOpen ? "rotate-180" : ""
                    }`}
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
                {isMobileDesignOpen && (
                  <div className="bg-slate-900/80">
                    <Link
                      to="/design"
                      className="block px-6 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/70 transition"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileDesignOpen(false);
                      }}
                    >
                      Overview
                    </Link>
                    <Link
                      to="/design/revit"
                      className="block px-6 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/70 transition"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileDesignOpen(false);
                      }}
                    >
                      Architectural Modeling (Revit)
                    </Link>
                    <Link
                      to="/design/autocad"
                      className="block px-6 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/70 transition"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileDesignOpen(false);
                      }}
                    >
                      2D Drafting (AutoCAD)
                    </Link>
                    <Link
                      to="/design/sketchup"
                      className="block px-6 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/70 transition"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileDesignOpen(false);
                      }}
                    >
                      3D Visualization (SketchUp)
                    </Link>
                    <Link
                      to="/design/projects"
                      className="block px-6 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/70 transition"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileDesignOpen(false);
                      }}
                    >
                      Sample Projects
                    </Link>
                    <Link
                      to="/design#certifications"
                      className="block px-6 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800/70 transition"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileDesignOpen(false);
                      }}
                    >
                      Certifications
                    </Link>
                  </div>
                )}
              </div>

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
