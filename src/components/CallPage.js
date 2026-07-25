import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import CalendlyWidget from "./CalendlyWidget";

const CallPage = () => {
  return (
    <>
      <SEO
        title="Book a Call - Syed Syab Ahmad"
        description="Schedule a 15-minute call with Syed Syab Ahmad. Book a slot via Calendly."
        url="https://syab.tech/call"
      />

      <div className="min-h-screen bg-stone-50 pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <p className="text-sm font-medium text-stone-400 mb-3 font-handwriting tracking-widest uppercase">
              Book a Call
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 font-heading mb-4">
              Let's talk.
            </h1>
            <p className="text-stone-500 text-lg max-w-xl mx-auto font-handwriting">
              Pick a 15-minute slot. No commitment — just a friendly chat about your project.
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { title: "15 Minutes", desc: "Quick, focused conversation" },
              { title: "Free", desc: "No cost, no obligation" },
              { title: "24h Response", desc: "I reply within a day" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white border border-stone-200 rounded-xl p-5 text-center">
                <h3 className="text-lg font-bold text-stone-900 font-heading mb-1">{item.title}</h3>
                <p className="text-stone-500 text-sm font-handwriting">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Calendly */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-6">
              <CalendlyWidget />
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default CallPage;
