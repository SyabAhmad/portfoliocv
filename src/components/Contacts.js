import React, { useRef, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaTelegram,
} from "react-icons/fa";
import SEO from "./SEO";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with env variable (set in Vercel dashboard)
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
} else {
  console.warn(
    "⚠️ REACT_APP_EMAILJS_PUBLIC_KEY not set in environment variables",
  );
}

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  // CV is served from the repo public folder: update the file in the repo and push to refresh the download
  const cvDownloadUrl =
    "https://raw.githubusercontent.com/SyabAhmad/portfoliocv/master/public/Syed%20Syab%20Ahmad.pdf";

  const handleCVDownload = () => {
    window.open(cvDownloadUrl, "_blank");
  };

  // Rate limiting: max 3 submissions per 15 minutes
  const checkRateLimit = () => {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxSubmissions = 3;

    let submissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]",
    );
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

  // Input sanitization
  const sanitizeInput = (str) => {
    if (!str || typeof str !== "string") return "";
    return str.trim().replace(/[<>]/g, "");
  };

  // EmailJS setup from environment variables
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Check env vars are configured
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      alert("Contact form is not configured. Please try again later.");
      console.error("EmailJS environment variables are missing");
      return;
    }

    // Rate limit check
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      alert(
        `Too many messages sent. Please wait ${rateCheck.waitMinutes} minute(s) before trying again.`,
      );
      return;
    }

    setIsSending(true);

    // Collect and sanitize fields from the form
    const f = formRef.current;
    const params = {
      from_name: sanitizeInput(f.from_name?.value),
      reply_to: sanitizeInput(f.reply_to?.value),
      message: sanitizeInput(f.message?.value),
    };

    // Basic validation
    if (!params.from_name || !params.reply_to || !params.message) {
      alert("Please fill in all fields.");
      setIsSending(false);
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(params.reply_to)) {
      alert("Please enter a valid email address.");
      setIsSending(false);
      return;
    }

    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
      );
      console.log("EmailJS success:", res);
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
        description="Get in touch with Syed Syab Ahmad for AI and machine learning projects, collaborations, freelance work, or job opportunities. Available for hire and remote work worldwide. Riyadh based, open to any / relocate anywhere. Work visa sponsorship available."
        keywords="contact Syed Syab Ahmad, hire AI engineer, hire freelance developer, machine learning consultant, AI project collaboration, Saudi Arabia developer contact, Freelance contact, Job opportunity contact, Available for hire, Remote job opportunities, Worldwide remote work, Work visa sponsorship, Sponsorship available, Contract work, AI consulting, Technical collaboration, Pakistan developer, International opportunities, Global hiring"
        url="https://syab.tech/contact"
        structuredData={contactStructuredData}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex flex-col items-center justify-center py-12 px-6 mt-16 transition-colors duration-300">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 drop-shadow">
          Get In Touch
        </h2>
        <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-3xl shadow-2xl w-full max-w-4xl p-10 flex flex-col md:flex-row gap-8 transition-colors duration-300">
          {/* Contact Form */}
          <div className="flex-1">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-sm transition-colors duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-sm transition-colors duration-300"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-sm transition-colors duration-300"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex justify-center py-3 px-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Social Links and CV Download */}
          <div className="flex-1 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-600 pt-8 md:pt-0 md:pl-8 transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg text-center">
              Let's connect and collaborate!
            </p>

            {/* Quick Contact Info */}
            <div className="mb-6 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                Direct Contact:
              </p>
              <a
                href="mailto:syedsyabahmadshah@gmail.com"
                className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-300 block mb-1"
              >
                syedsyabahmadshah@gmail.com
              </a>
              <a
                href="mailto:engr.syab@gmail.com"
                className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-300 block mb-1"
              >
                engr.syab@gmail.com
              </a>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                🇸🇦 546211818
              </p>
            </div>

            {/* Social Media Links */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Connect with me:
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/in/syedsyab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 dark:text-cyan-400 text-2xl hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-300 p-2 bg-gray-100 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/30 hover:border-cyan-400/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/syabahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 dark:text-cyan-400 text-2xl hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-300 p-2 bg-gray-100 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/30 hover:border-cyan-400/50"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:syedsyabahmadshah@gmail.com"
                className="text-cyan-600 dark:text-cyan-400 text-2xl hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-300 p-2 bg-gray-100 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/30 hover:border-cyan-400/50"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://t.me/syedsyab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-2xl hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 p-2 bg-gray-100 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/30 hover:border-blue-400/50"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
            </div>

            {/* CV Download Button */}
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                Get my resume:
              </p>
              <button
                onClick={handleCVDownload}
                className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <FaDownload className="mr-2" />
                Download My CV
              </button>
              <p className="text-xs text-gray-500 mt-2">
                PDF format • Updated recently
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
