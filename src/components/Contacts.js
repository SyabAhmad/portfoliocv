import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
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

      <div className="min-h-screen bg-stone-50 pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <p className="text-sm font-medium text-stone-400 mb-3 font-handwriting tracking-widest uppercase">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 font-heading mb-3">
              Let's work together.
            </h1>
            <p className="text-stone-500 text-lg max-w-xl font-handwriting">
              Have a project in mind? Need an AI engineer or full-stack developer? Let's talk.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-3">
              <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-stone-900 font-heading mb-6">
                  Send a message
                </h2>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-stone-600 mb-1.5 font-handwriting">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      className="w-full px-4 py-3 bg-stone-50 text-stone-900 placeholder-stone-400 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:outline-none font-handwriting"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-stone-600 mb-1.5 font-handwriting">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="reply_to"
                      id="email"
                      className="w-full px-4 py-3 bg-stone-50 text-stone-900 placeholder-stone-400 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:outline-none font-handwriting"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-stone-600 mb-1.5 font-handwriting">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-stone-50 text-stone-900 placeholder-stone-400 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:outline-none font-handwriting resize-none"
                      placeholder="Tell me about your project, timeline, and budget..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 px-4 rounded-lg text-lg font-bold text-stone-50 bg-stone-900 font-heading"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-6">

              {/* Direct Contact */}
              <div className="bg-white border border-stone-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-stone-900 font-heading mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a href="mailto:syedsyabahmadshah@gmail.com" className="flex items-center gap-3 text-stone-600 text-sm font-handwriting">
                    <FaEnvelope className="text-stone-400" size={14} />
                    syedsyabahmadshah@gmail.com
                  </a>
                  <a href="mailto:engr.syab@gmail.com" className="flex items-center gap-3 text-stone-600 text-sm font-handwriting">
                    <FaEnvelope className="text-stone-400" size={14} />
                    engr.syab@gmail.com
                  </a>
                  <p className="flex items-center gap-3 text-stone-600 text-sm font-handwriting">
                    <span className="text-stone-400">📱</span>
                    +966 546 211 818
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white border border-stone-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-stone-900 font-heading mb-4">
                  Find Me Online
                </h3>
                <div className="flex flex-wrap gap-2">
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
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-500"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* CV Download */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 text-center">
                <p className="text-stone-400 text-sm font-handwriting mb-3">
                  Get my resume
                </p>
                <button
                  onClick={handleCVDownload}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-stone-50 font-bold rounded-lg font-heading text-sm"
                >
                  <FaDownload />
                  Download CV
                </button>
                <p className="text-xs text-stone-400 mt-2 font-handwriting">PDF · Updated recently</p>
              </div>

            </motion.div>
          </div>

          {/* Book a Call */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 text-center">
              <h2 className="text-2xl font-bold text-stone-900 font-heading mb-2">
                Prefer to talk?
              </h2>
              <p className="text-stone-400 text-sm font-handwriting mb-6">
                Book a 15-minute call — free, no commitment.
              </p>
              <Link to="/call" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 font-bold rounded-lg font-heading">
                Book a Call →
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Contact;
