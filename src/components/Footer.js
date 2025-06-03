import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Research', href: '/research' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  const professionalLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/syedsyab/' },
    { name: 'GitHub', href: 'https://github.com/syabahmad' },
    { name: 'Read.cv', href: 'https://read.cv/syedsyab' },
    { name: 'GulfTalent', href: 'https://www.gulftalent.com/people/syed-syab-ahmad-shah-11988245' },
    { name: 'ORCID', href: 'https://orcid.org/0009-0003-9183-582X' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-gray-700/50">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Syed Syab Ahmad
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI Engineer & Full-Stack Developer passionate about building intelligent solutions that transform ideas into reality.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>📍</span>
              <span>Open to Work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Professional</h4>
            <ul className="space-y-2">
              {professionalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:syedsyabahmadshah@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm block"
              >
                📧 syedsyabahmadshah@gmail.com
              </a>
              <a 
                href="https://syab.link/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm block"
              >
                🔗 syab.link
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Syed Syab Ahmad. All rights reserved.
            </div>
            
            {/* Tech Stack */}
            <div className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Built with</span>
              <FaHeart className="text-red-400 animate-pulse" />
              <span>by Syed Syab aka MenteE's Leader 🥀</span>
            </div>
            
            {/* Quick Actions */}
            <div className="flex space-x-4">
              <a 
                href="/contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
              >
                Hire Me
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=YOUR_CV_FILE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-500 text-xs">
            <span>🚀 Open to opportunities</span>
            <span>•</span>
            <span>🌟 Available for freelance</span>
            <span>•</span>
            <span>💡 Always learning</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;