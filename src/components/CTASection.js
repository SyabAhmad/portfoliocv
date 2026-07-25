import React from "react";
import { Link } from "react-router-dom";

const CTASection = ({ heading, subheading, calText = "Book a Free Call", contactText = "Send a Message" }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-50 font-heading mb-4">
          {heading}
        </h2>
        <p className="text-stone-400 mb-8 font-handwriting text-lg">
          {subheading}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://calendly.com/syedsyab/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-stone-900 font-bold rounded-lg text-lg font-heading shadow-lg inline-block"
          >
            {calText}
          </a>
          <Link
            to="/contact"
            className="px-8 py-3.5 border-2 border-stone-600 text-stone-300 font-bold rounded-lg text-lg font-heading inline-block"
          >
            {contactText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
