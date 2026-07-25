import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaPhone } from "react-icons/fa";

const Navbar = () => {
 const location = useLocation();
 const [isOpen, setIsOpen] = useState(false);
 const { theme, toggleTheme } = useTheme();

 const navItems = [
 { path: "/", label: "Home" },
 { path: "/about", label: "About" },
 { path: "/services", label: "Services" },
 { path: "/projects", label: "Projects" },
 { path: "/experience", label: "Experience" },
 { path: "/mentee", label: "MenteE" },
 { path: "/contact", label: "Contact" },
 { path: "/call", label: "Call" },
 ];

 return (
 <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-lg border-b border-stone-200 transition-colors duration-300">
 <div className="container mx-auto px-4 md:px-8">
 <div className="flex items-center justify-between h-16">
 {/* Logo/Brand */}
 <Link
 to="/"
 className="text-xl font-bold text-stone-900 font-bebas"
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
 ? "bg-stone-100 text-stone-900"
 : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
 }`}
 >
 {item.label}
 </Link>
 ))}

 {/* Design Link */}
 <Link
 to="/design"
 className={`px-3 py-2 rounded-lg text-sm transition-all ${
 location.pathname.startsWith("/design")
 ? "bg-stone-100 text-stone-900"
 : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
 }`}
 >
 Design
 </Link>

 {/* Call Button */}
 <Link
 to="/call"
 className={`px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-1.5 ${
 location.pathname === "/call"
 ? "bg-stone-100 text-green-600"
 : "text-green-600 hover:text-green-700 hover:bg-green-50"
 }`}
 >
 <FaPhone size={12} className="rotate-90" />
 <span>Call</span>
 </Link>

 {/* Theme Toggle - commented out, not working right now */}
 {/*
 <button
 onClick={toggleTheme}
 className="ml-2 p-2 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-all"
 aria-label="Toggle Theme"
 >
 {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
 </button>
 */}

 {/* Social Icons */}
 <a
 href="https://github.com/syabahmad"
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
 >
 <FaGithub size={16} />
 </a>
 <a
 href="https://www.linkedin.com/in/syedsyab/"
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 text-stone-400 hover:text-stone-900 transition-colors"
 >
 <FaLinkedin size={16} />
 </a>

 {/* Contact Button */}
 <Link
 to="/contact"
 className="ml-2 px-4 py-2 bg-stone-900 text-stone-50 text-sm font-medium rounded-lg hover:bg-gray-800 transition-all"
 >
 Hire Me
 </Link>
 </div>

 {/* Mobile Menu Button */}
 <div className="md:hidden flex items-center gap-2">
 {/* Theme Toggle - commented out, not working right now */}
 {/*
 <button
 onClick={toggleTheme}
 className="p-2 rounded-lg text-stone-400"
 aria-label="Toggle Theme"
 >
 {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
 </button>
 */}
 <button
 className="text-stone-600"
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
 <div className="md:hidden py-4 border-t border-stone-200">
 {navItems.map((item) => (
 <Link
 key={item.path}
 to={item.path}
 className={`block px-4 py-2 rounded-lg text-sm transition-all ${
 location.pathname === item.path
 ? "bg-stone-100 text-stone-900"
 : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
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
 ? "bg-stone-100 text-stone-900"
 : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
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
