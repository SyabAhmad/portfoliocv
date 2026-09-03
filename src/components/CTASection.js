import React from "react";
import { Link } from "react-router-dom";

const CTASection = ({ heading, subheading, calText = "Book a Free Call", contactText = "Send a Message" }) => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-stone-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-heading mb-6 leading-tight">
          {heading}
        </h2>
        <p className="text-stone-400 font-handwriting text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://calendly.com/syedsyab/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-stone-900 font-bold rounded-full text-base font-heading shadow-lg inline-flex items-center justify-center gap-2 hover:bg-stone-200 transition-colors"
          >
            {calText}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 border border-stone-700 text-stone-300 font-bold rounded-full text-base font-heading inline-flex items-center justify-center hover:bg-stone-800/50 hover:border-stone-600 transition-colors"
          >
            {contactText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
