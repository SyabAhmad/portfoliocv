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
        description="Schedule a 15-minute call with Syed Syab Ahmad. Book a slot via Calendly for AI, engineering, or collaboration discussions."
        url="https://syab.tech/call"
      />

      <div className="relative min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col items-center justify-center py-12 px-4 overflow-hidden transition-colors duration-300">
        {/* Subtle background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 dark:bg-amber-400/5 rounded-full blur-3xl" />
        </div>

        {/* Page heading */}
        <motion.div
          className="relative z-10 text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
            Tap a slot below to book a 15-min call
          </p>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Phone frame */}
          <div className="relative mx-auto w-[340px] md:w-[380px]">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-amber-500/20 via-transparent to-orange-500/20 rounded-[3rem] blur-xl" />

            {/* Phone body */}
            <div className="relative bg-gray-900 rounded-[3rem] border-[3px] border-gray-700 shadow-2xl shadow-black/50 overflow-hidden">
              {/* Side buttons */}
              <div className="absolute -right-[3px] top-20 w-[3px] h-8 bg-gray-600 rounded-r" />
              <div className="absolute -right-[3px] top-32 w-[3px] h-12 bg-gray-600 rounded-r" />
              <div className="absolute -left-[3px] top-28 w-[3px] h-10 bg-gray-600 rounded-l" />

              {/* Screen */}
              <div className="relative m-1 rounded-[2.5rem] bg-gray-950 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[120px] h-[30px] bg-gray-900 rounded-b-2xl flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border-2 border-gray-700" />
                  <div className="w-12 h-1.5 rounded-full bg-gray-800 ml-2" />
                </div>

                {/* Screen content */}
                <div className="pt-8 pb-4 px-4 min-h-[650px] flex flex-col">
                  {/* Status bar */}
                  <div className="flex items-center justify-between text-white/70 text-xs font-medium px-1 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span>{formatTime(time)}</span>
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-green-400">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider text-white/50">Sara 🎀 Theme</span>
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
                    {/* Avatar with pulsing rings */}
                    <div className="relative mb-3">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-amber-400/20"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-amber-400/10"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-amber-500/60 shadow-lg shadow-amber-500/20">
                        <img
                          src="dp.jpeg"
                          alt="Syed Syab"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextElementSibling.classList.remove("hidden");
                          }}
                        />
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold hidden">
                          S
                        </div>
                      </div>
                    </div>
                    <h2 className="text-white text-lg font-semibold">Syed Syab</h2>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400/80 text-xs">Available</span>
                    </div>
                  </div>

                  {/* Call action icons row */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700/80 transition-colors cursor-pointer">
                        <Mic size={16} />
                      </div>
                      <span className="text-[10px] text-gray-500">Mute</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700/80 transition-colors cursor-pointer">
                        <Video size={16} />
                      </div>
                      <span className="text-[10px] text-gray-500">Video</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700/80 transition-colors cursor-pointer">
                        <Volume2 size={16} />
                      </div>
                      <span className="text-[10px] text-gray-500">Speaker</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700/80 transition-colors cursor-pointer">
                        <MessageCircle size={16} />
                      </div>
                      <span className="text-[10px] text-gray-500">Chat</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1 h-px bg-gray-800" />
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <CalendarDays size={12} />
                      <span>Schedule a call</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-800" />
                  </div>

                  {/* Calendly widget */}
                  <div className="flex-1 rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800/50">
                    <CalendlyWidget />
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center mt-4">
                    <div className="w-28 h-1 rounded-full bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          className="relative z-10 text-gray-500 dark:text-gray-400 text-xs mt-6 text-center max-w-xs"
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
