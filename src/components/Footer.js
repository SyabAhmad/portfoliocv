import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white relative">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Left: Copyright + Book a Call */}
          <div className="flex flex-col gap-5">
            <p className="font-handwriting text-sm tracking-wide text-stone-400">
              © {new Date().getFullYear()} Syed Syab Ahmad
            </p>
            <a
              href="https://calendly.com/syedsyab/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-stone-950 font-bold rounded-full text-sm font-handwriting w-fit hover:bg-stone-200 transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Center: Nav Links */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-handwriting text-sm text-stone-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col gap-3 text-right md:text-right">
            <a
              href="mailto:syedsyabahmadshah@gmail.com"
              className="font-handwriting text-sm text-stone-400 hover:text-white transition-colors"
            >
              syedsyabahmadshah@gmail.com
            </a>
            <div className="font-handwriting text-sm text-stone-400">
              <p>Riyadh, Saudi Arabia</p>
            </div>
            <div className="flex items-center justify-end gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/syedsyab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-white transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/syabahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-white transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:syedsyabahmadshah@gmail.com"
                className="text-stone-500 hover:text-white transition-colors"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-stone-800/60" />
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Huge Name */}
          <div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] font-heading tracking-tight">
              Syed Syab
            </h1>
            <p className="text-xs sm:text-sm font-handwriting tracking-[0.3em] uppercase text-stone-500 mt-3">
              AI Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Availability */}
          <div className="md:text-right flex-shrink-0">
            <p className="text-xs font-handwriting text-stone-500 tracking-wider uppercase mb-1">
              Available
            </p>
            <p className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Sun — Thu
            </p>
            <p className="text-lg font-bold font-heading text-white">
              9am — 6pm
            </p>
            <p className="text-xs font-handwriting text-stone-500 mt-1">
              Arabia Standard Time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
