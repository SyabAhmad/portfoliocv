import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaTelegram,
} from "react-icons/fa";
import SEO from "./SEO";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
} else {
  console.warn("⚠️ REACT_APP_EMAILJS_PUBLIC_KEY not set in environment variables");
}

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const cvDownloadUrl =
    "https://raw.githubusercontent.com/SyabAhmad/portfoliocv/master/public/Syed%20Syab%20Ahmad.pdf";

  const handleCVDownload = () => {
    window.open(cvDownloadUrl, "_blank");
  };

  const checkRateLimit = () => {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    const maxSubmissions = 3;
    let submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    submissions = submissions.filter((time) => now - time < windowMs);
    if (submissions.length >= maxSubmissions) {
      const oldest = submissions[0];
      const waitMinutes = Math.ceil((windowMs - (now - oldest)) / 60000);
      return { allowed: false, waitMinutes };
    }
    submissions.push(now);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
    return { allowed: true };
  };

  const sanitizeInput = (str) => {
    if (!str || typeof str !== "string") return "";
    return str.trim().replace(/[<>]/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      alert("Contact form is not configured. Please try again later.");
      console.error("EmailJS environment variables are missing");
      return;
    }
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      alert(`Too many messages sent. Please wait ${rateCheck.waitMinutes} minute(s) before trying again.`);
      return;
    }
    setIsSending(true);
    const f = formRef.current;
    const senderName = sanitizeInput(f.from_name?.value);
    const senderEmail = sanitizeInput(f.reply_to?.value);
    const senderMessage = sanitizeInput(f.message?.value);
    const params = {
      name: senderName,
      email: senderEmail,
      title: "New Contact Form Message",
      message: senderMessage,
    };
    if (!params.name || !params.email || !params.message) {
      alert("Please fill in all fields.");
      setIsSending(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(params.email)) {
      alert("Please enter a valid email address.");
      setIsSending(false);
      return;
    }
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
      alert("Message sent — thank you!");
      f.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      const status = err?.status ?? err?.response?.status ?? "unknown";
      const text = err?.text ?? err?.message ?? JSON.stringify(err);
      alert(`Failed to send message: ${status} ${text}`);
    } finally {
      setIsSending(false);
    }
  };

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Syed Syab Ahmad",
    description:
      "Get in touch with Syed Syab Ahmad for AI and machine learning projects, collaborations, or job opportunities.",
    url: "https://syab.tech/contact",
    mainEntity: {
      "@type": "Person",
      name: "Syed Syab Ahmad",
      email: "syedsyabahmadshah@gmail.com",
      secondaryEmail: "engr.syab@gmail.com",
      telephone: "+966546211818",
      url: "https://syab.tech",
    },
  };

  return (
    <>
      <SEO
        title="Contact - Syed Syab Ahmad"
        description="Get in touch with Syed Syab Ahmad for AI and machine learning projects, collaborations, freelance work, or job opportunities."
        keywords="contact Syed Syab Ahmad, hire AI engineer, hire freelance developer"
        url="https://syab.tech/contact"
        structuredData={contactStructuredData}
      />

      <div className="min-h-screen bg-stone-900 dark:bg-gray-950 flex flex-col items-center py-12 px-4 sm:px-6 mt-8 transition-colors duration-300">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-stone-100 mb-10 font-handwriting"
          style={{ transform: "rotate(-1deg)" }}
        >
          Get In Touch
        </motion.h2>

        {/* Main contact card - two flyer layout */}
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 lg:gap-4 items-start">
          {/* Left flyer - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-[3] w-full relative"
            style={{ transform: "rotate(-2deg)" }}
          >
            {/* Tape */}
            <div className="absolute -top-3 left-[20%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm shadow-sm" />
            <div className="absolute -top-3 right-[25%] w-16 h-5 bg-stone-400/40 rotate-[3deg] rounded-sm shadow-sm" />
            {/* Pin */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

            <div className="bg-stone-100 dark:bg-stone-800 rounded-sm shadow-2xl shadow-black/40 p-6 sm:p-8 border border-stone-200 dark:border-stone-700">
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-handwriting mb-5">
                Send me a message ✉️
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-stone-600 dark:text-stone-300 mb-1 font-handwriting">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    className="w-full px-4 py-2.5 bg-stone-200/50 dark:bg-stone-700/50 text-stone-900 dark:text-stone-100 placeholder-stone-400 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-stone-500 focus:outline-none shadow-sm transition-colors duration-300 font-handwriting"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-stone-600 dark:text-stone-300 mb-1 font-handwriting">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    id="email"
                    className="w-full px-4 py-2.5 bg-stone-200/50 dark:bg-stone-700/50 text-stone-900 dark:text-stone-100 placeholder-stone-400 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-stone-500 focus:outline-none shadow-sm transition-colors duration-300 font-handwriting"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-stone-600 dark:text-stone-300 mb-1 font-handwriting">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2.5 bg-stone-200/50 dark:bg-stone-700/50 text-stone-900 dark:text-stone-100 placeholder-stone-400 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-stone-500 focus:outline-none shadow-sm transition-colors duration-300 font-handwriting resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 px-4 rounded-lg text-lg font-bold text-stone-100 bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-300 shadow-lg transition-all duration-300 font-handwriting cursor-pointer"
                >
                  {isSending ? "Sending..." : "Send Message 📨"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right flyer - Social Links & CV */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-[2] w-full relative"
            style={{ transform: "rotate(2deg)" }}
          >
            {/* Tape */}
            <div className="absolute -top-3 left-[30%] w-16 h-5 bg-stone-400/40 rotate-[4deg] rounded-sm shadow-sm" />
            {/* Pin */}
            <div className="absolute -top-2 right-[20%] w-3 h-3 bg-slate-500 rounded-full shadow border border-slate-700 z-10" />

            <div className="bg-stone-100 dark:bg-stone-800 rounded-sm shadow-2xl shadow-black/40 p-6 sm:p-8 border border-stone-200 dark:border-stone-700">
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-handwriting mb-4">
                Let's connect 🤝
              </h3>

              {/* Direct Contact */}
              <div className="mb-5">
                <p className="text-stone-500 text-xs font-handwriting mb-2 uppercase tracking-wider">
                  Direct Contact
                </p>
                <a
                  href="mailto:syedsyabahmadshah@gmail.com"
                  className="text-stone-700 dark:text-stone-300 hover:text-stone-500 dark:hover:text-stone-100 transition-colors text-sm block mb-1 font-handwriting"
                >
                  syedsyabahmadshah@gmail.com
                </a>
                <a
                  href="mailto:engr.syab@gmail.com"
                  className="text-stone-700 dark:text-stone-300 hover:text-stone-500 dark:hover:text-stone-100 transition-colors text-sm block mb-1 font-handwriting"
                >
                  engr.syab@gmail.com
                </a>
                <p className="text-stone-600 dark:text-stone-300 text-sm font-handwriting">
                  🇸🇦 +966 546 211 818
                </p>
              </div>

              {/* Social Links */}
              <p className="text-stone-500 text-xs font-handwriting mb-3 uppercase tracking-wider">
                Socials
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/syedsyab/", label: "LinkedIn" },
                  { icon: <FaGithub />, href: "https://github.com/syabahmad", label: "GitHub" },
                  { icon: <FaEnvelope />, href: "mailto:syedsyabahmadshah@gmail.com", label: "Email" },
                  { icon: <FaTelegram />, href: "https://t.me/syedsyab", label: "Telegram" },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                    href: "https://x.com/syabsays",
                    label: "X",
                  },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="p-2.5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-lg text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-400 transition-all duration-300"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>

              {/* CV Download */}
              <div className="bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-lg p-4 text-center">
                <p className="text-stone-500 text-xs font-handwriting mb-2">
                  Get my resume
                </p>
                <motion.button
                  onClick={handleCVDownload}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 mx-auto bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold py-2.5 px-5 rounded-full hover:shadow-lg transition-all duration-300 font-handwriting text-sm cursor-pointer"
                >
                  <FaDownload />
                  Download CV
                </motion.button>
                <p className="text-[10px] text-stone-500 mt-2 font-handwriting">PDF · Updated recently</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Calendly Flyer */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl mt-8 relative"
          style={{ transform: "rotate(1deg)" }}
        >
          {/* Tape */}
          <div className="absolute -top-3 left-1/3 w-20 h-6 bg-stone-400/40 rotate-[-3deg] rounded-sm shadow-sm" />
          {/* Pin */}
          <div className="absolute -top-2 right-1/3 w-3 h-3 bg-stone-500 rounded-full shadow border border-stone-700 z-10" />

          <div className="bg-stone-100 dark:bg-stone-800 rounded-sm shadow-2xl shadow-black/40 p-6 md:p-8 border border-stone-200 dark:border-stone-700">
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-5 font-handwriting text-center">
              Book a 15-min Call 📞
            </h3>
            <CalendlyWidget />
          </div>
        </motion.div>
      </div>
    </>
  );
};

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
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

export default Contact;
