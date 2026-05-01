import React from "react";
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/30 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 border-t border-gray-200 dark:border-gray-700/50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Compact Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Syed Syab Ahmad
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
              AI Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Quick Links - Inline */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Home</a>
            <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">About</a>
            <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Projects</a>
            <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/syedsyab/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="https://github.com/syabahmad" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="mailto:syedsyabahmadshah@gmail.com" className="p-2 text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700/50 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="text-gray-400 dark:text-gray-500 text-xs">
            © {new Date().getFullYear()} Syed Syab Ahmad. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <span>Built with</span>
            <FaHeart className="text-red-500" size={10} />
            <span>by MenteE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
