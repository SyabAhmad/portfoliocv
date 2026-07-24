import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { Mic, Volume2, CalendarDays, Video, MessageCircle } from "lucide-react";

const CalendlyWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url="https://calendly.com/syedsyab/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ff9200"
      style={{ minWidth: "280px", height: "420px" }}
    />
  );
};

const CallPage = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (d) =>
    d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

  return (
    <>
      <SEO
        title="Book a Call - Syed Syab Ahmad"
        description="Schedule a 15-minute call with Syed Syab Ahmad. Book a slot via Calendly."
        url="https://syab.tech/call"
      />

      <div className="relative min-h-screen bg-stone-900 dark:bg-gray-950 flex flex-col items-center justify-center py-12 px-4 overflow-hidden transition-colors duration-300">
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

        {/* Subtle orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-900/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-800/10 rounded-full blur-3xl" />

        {/* Page heading - flyer style */}
        <motion.div
          className="relative z-10 text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.6 }}
          style={{ transform: "rotate(-1deg)" }}
        >
          {/* Tape */}
          <div className="absolute -top-3 left-[20%] w-16 h-5 bg-stone-400/40 rotate-[-5deg] rounded-sm" />
          <div className="absolute -top-2 right-[25%] w-12 h-4 bg-stone-400/30 rotate-[3deg] rounded-sm" />
          <div className="absolute -top-1.5 left-[40%] w-2.5 h-2.5 bg-rose-800 rounded-full shadow border border-rose-950 z-10" />

          <div className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/30 px-8 py-5 inline-block">
            <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-handwriting">
              Let's Talk
            </h1>
            <p className="text-stone-500 mt-1 text-sm font-handwriting">
              Tap a slot below to book a 15-min call
            </p>
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative mx-auto w-[340px] md:w-[380px]">
            {/* Outer glow */}
            <div className="absolute -inset-1 from-stone-500/10 via-transparent to-stone-500/10 rounded-[3rem] blur-xl" />

            {/* Phone body */}
            <div className="relative bg-stone-900 rounded-[3rem] border-[3px] border-stone-700 shadow-2xl shadow-black/60 overflow-hidden">
              {/* Side buttons */}
              <div className="absolute -right-[3px] top-20 w-[3px] h-8 bg-stone-600 rounded-r" />
              <div className="absolute -right-[3px] top-32 w-[3px] h-12 bg-stone-600 rounded-r" />
              <div className="absolute -left-[3px] top-28 w-[3px] h-10 bg-stone-600 rounded-l" />

              {/* Screen */}
              <div className="relative m-1 rounded-[2.5rem] bg-stone-950 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[120px] h-[30px] bg-stone-900 rounded-b-2xl flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-800 border-2 border-stone-700" />
                  <div className="w-12 h-1.5 rounded-full bg-stone-800 ml-2" />
                </div>

                {/* Screen content */}
                <div className="pt-8 pb-4 px-4 min-h-[650px] flex flex-col">
                  {/* Status bar */}
                  <div className="flex items-center justify-between text-stone-400 text-xs font-medium px-1 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span>{formatTime(time)}</span>
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider text-stone-600">Portfolio</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                      </svg>
                      <svg className="w-5 h-3" viewBox="0 0 24 14" fill="currentColor">
                        <rect x="1" y="1" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="3" y="3" width="14" height="8" rx="1" fill="currentColor" />
                        <rect x="21" y="5" width="2" height="4" rx="0.5" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Call header - avatar area */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative mb-3">
                      <motion.div className="absolute inset-0 rounded-full bg-rose-900/20" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
                      <motion.div className="absolute inset-0 rounded-full bg-rose-900/10" animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-stone-600/60 shadow-lg shadow-black/30">
                        <img
                          src="dp.jpeg"
                          alt="Syed Syab"
                          className="w-full h-full object-cover grayscale"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextElementSibling.classList.remove("hidden");
                          }}
                        />
                        <div className="absolute inset-0 w-full h-full bg-stone-800 flex items-center justify-center text-stone-200 text-2xl font-bold hidden font-handwriting">S</div>
                      </div>
                    </div>
                    <h2 className="text-stone-100 text-lg font-semibold font-handwriting">Syed Syab</h2>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-400/80 text-xs font-handwriting">Available</span>
                    </div>
                  </div>

                  {/* Call action icons row */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    {[
                      { icon: <Mic size={16} />, label: "Mute" },
                      { icon: <Video size={16} />, label: "Video" },
                      { icon: <Volume2 size={16} />, label: "Speaker" },
                      { icon: <MessageCircle size={16} />, label: "Chat" },
                    ].map((a, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-full bg-stone-800/80 flex items-center justify-center text-stone-400 hover:bg-stone-700/80 transition-colors cursor-pointer">{a.icon}</div>
                        <span className="text-[10px] text-stone-600 font-handwriting">{a.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1 h-px bg-stone-800" />
                    <div className="flex items-center gap-1.5 text-stone-500 text-xs font-handwriting">
                      <CalendarDays size={12} />
                      <span>Schedule a call</span>
                    </div>
                    <div className="flex-1 h-px bg-stone-800" />
                  </div>

                  {/* Calendly widget */}
                  <div className="flex-1 rounded-2xl overflow-hidden bg-stone-900/50 border border-stone-800/50">
                    <CalendlyWidget />
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center mt-4">
                    <div className="w-28 h-1 rounded-full bg-stone-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          className="relative z-10 text-stone-500 text-xs mt-6 text-center max-w-xs font-handwriting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Pick a time that works for you. No commitment — just a friendly chat.
        </motion.p>
      </div>
    </>
  );
};

export default CallPage;
