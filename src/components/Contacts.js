import React, { useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaTelegram } from 'react-icons/fa';
import SEO from './SEO';
import emailjs from '@emailjs/browser';

// initialize EmailJS client (public key) — optional if you pass key to send/sendForm
emailjs.init('Bwe4JKCqvjzm4RNGz');

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  // CV is served from the repo public folder: update the file in the repo and push to refresh the download
  const cvDownloadUrl = "https://raw.githubusercontent.com/SyabAhmad/portfoliocv/master/public/Syed%20Syab%20Ahmad.pdf";
  
  const handleCVDownload = () => {
    window.open(cvDownloadUrl, '_blank');
  };

  // EmailJS setup:
  // - Service ID: service_rlac4th
  // - Template ID: template_contact (create this in EmailJS dashboard or change to your template id)
  // - Public (user) key: Bwe4JKCqvjzm4RNGz
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);

    // collect fields from the form (must match template variables in EmailJS)
    const f = formRef.current;
    const params = {
      from_name: f.from_name?.value || '',
      reply_to: f.reply_to?.value || '',
      message: f.message?.value || ''
    };

    try {
      // DEBUG: use emailjs.send (easier to debug). Replace 'template_wczi6ir' with exact template id from dashboard.
      const res = await emailjs.send('service_rlac4th', 'template_wczi6ir', params);
      console.log('EmailJS success:', res);
      alert('Message sent — thank you!');
      f.reset();
    } catch (err) {
      // show full error for debugging
      console.error('EmailJS error:', err);
      const status = err?.status ?? (err?.response?.status) ?? 'unknown';
      const text = err?.text ?? err?.message ?? JSON.stringify(err);
      alert(`Failed to send message: ${status} ${text}`);
    } finally {
      setIsSending(false);
    }
  };

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Syed Syab Ahmad",
    "description": "Get in touch with Syed Syab Ahmad for AI and machine learning projects, collaborations, or job opportunities.",
    "url": "https://syab.link/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Syed Syab Ahmad",
      "email": "syedsyabahmadshah@gmail.com",
      "url": "https://syab.link"
    }
  };

  return (
    <>
      <SEO 
        title="Contact - Syed Syab Ahmad"
        description="Get in touch with Syed Syab Ahmad for AI and machine learning projects, collaborations, freelance work, or job opportunities. Available for hire."
        keywords="contact Syed Syab Ahmad, hire AI engineer, machine learning consultant, freelance developer, AI project collaboration, Pakistan developer contact"
        url="https://syab.link/contact"
        structuredData={contactStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center py-12 px-6 mt-16">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 drop-shadow">
          Get In Touch
        </h2>
        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl w-full max-w-4xl p-10 flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-sm"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex justify-center py-3 px-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social Links and CV Download */}
          <div className="flex-1 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-600 pt-8 md:pt-0 md:pl-8">
            <p className="text-gray-300 mb-6 text-lg text-center">
              Let's connect and collaborate!
            </p>
            
            {/* Quick Contact Info */}
            <div className="mb-6 text-center">
              <p className="text-gray-400 text-sm mb-2">Direct Contact:</p>
              <a 
                href="mailto:syabblogger@gmail.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 block mb-1"
              >
                syedsyabahmadshah@gmail.com
              </a>

            </div>

            {/* Social Media Links */}
            <p className="text-gray-300 mb-4 text-sm">
              Connect with me:
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/in/syedsyab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-2xl hover:text-cyan-300 transition-colors duration-300 p-2 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-cyan-400/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/syabahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-2xl hover:text-cyan-300 transition-colors duration-300 p-2 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-cyan-400/50"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:syedsyabahmadshah@gmail.com"
                className="text-cyan-400 text-2xl hover:text-cyan-300 transition-colors duration-300 p-2 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-cyan-400/50"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://t.me/syedsyab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-2xl hover:text-blue-300 transition-colors duration-300 p-2 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-blue-400/50"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
            </div>

            {/* CV Download Button */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-3">Get my resume:</p>
              <button 
                onClick={handleCVDownload}
                className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <FaDownload className="mr-2" />
                Download My CV
              </button>
              <p className="text-xs text-gray-500 mt-2">PDF format • Updated recently</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;