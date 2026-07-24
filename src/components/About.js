import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaWhatsapp,
  FaTelegram,
  FaSnapchat,
  FaMedium,
  FaDribbble,
  FaBehance,
  FaStackOverflow,
  FaKaggle,
  FaResearchgate,
  FaLink,
  FaUser,
  FaCode,
  FaBriefcase,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
  SiHuggingface,
  SiOrcid,
  SiFiverr,
  SiCodepen,
  SiCodewars,
} from "react-icons/si";
import certifications from "../data/certificationsData";
import recommendations from "../data/recommendationsData";
import CertificationBadges from "./CertificationBadges";
import Recommendations from "./Recommendations";
import AiFacts from "./AiFacts";
import SEO from "./SEO";

const volunteering = [
  {
    title: "Volunteering",
    organization: "Punjab Information Technology Board (PITB)",
    role: "Marketing Team",
    duration: "May 2024 · 1 mo",
    category: "Education",
  },
];

const cardRotations = [-1.5, 1, -0.5, 1.5, -1, 0.8];
const pinStyles = [
  "bg-rose-800", "bg-slate-500", "bg-stone-500",
  "bg-rose-700", "bg-slate-600", "bg-stone-600",
];

const FlyerCard = ({ children, rotate = 0, pin = "bg-rose-800", className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate }}
    whileInView={{ opacity: 1, y: 0, rotate }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02, rotate: 0 }}
    className={`relative bg-stone-100 dark:bg-stone-800 rounded-sm shadow-xl shadow-black/30 p-6 sm:p-8 border border-stone-200 dark:border-stone-700 ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <div className="absolute -top-3 left-[20%] w-16 h-5 bg-stone-400/40 rotate-[-5deg] rounded-sm shadow-sm" />
    <div className="absolute -top-2 right-[15%] w-3 h-3 rounded-full shadow border border-black/20 z-10" style={{ backgroundColor: "var(--pin)" }} />
    <div className={`absolute -top-2 right-[15%] w-3 h-3 ${pin} rounded-full shadow border border-black/20 z-10`} />
    {children}
  </motion.div>
);

const About = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllSocialLinks, setShowAllSocialLinks] = useState(false);

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/syedsyab/" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/syabahmad" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/SyabSays" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/syedsyab" },
    { name: "Dribbble", icon: FaDribbble, url: "https://dribbble.com/Syab_Ahmad" },
    { name: "Behance", icon: FaBehance, url: "https://www.behance.net/syabahmad" },
    { name: "Stack Overflow", icon: FaStackOverflow, url: "https://stackoverflow.com/users/20266067/syed-syab-ahmad-shah" },
    { name: "LeetCode", icon: SiLeetcode, url: "https://leetcode.com/u/syab_ahmad/" },
    { name: "HackerRank", icon: SiHackerrank, url: "https://www.hackerrank.com/profile/syabblogger" },
    { name: "CodeChef", icon: SiCodechef, url: "https://www.codechef.com/users/syedsyabb" },
    { name: "Kaggle", icon: FaKaggle, url: "https://www.kaggle.com/syabahmad" },
    { name: "ResearchGate", icon: FaResearchgate, url: "https://www.researchgate.net/profile/Syed-Syab-Ahmad" },
    { name: "Personal Link", icon: FaLink, url: "https://syab.link/" },
    { name: "Read.cv", icon: FaUser, url: "https://read.cv/syedsyab" },
    { name: "GulfTalent", icon: FaBriefcase, url: "https://www.gulftalent.com/people/syed-syab-ahmad-shah-11988245" },
    { name: "Hugging Face", icon: SiHuggingface, url: "https://huggingface.co/SyedSyab" },
    { name: "ORCID", icon: SiOrcid, url: "https://orcid.org/0009-0003-9183-582X" },
    { name: "Fiverr", icon: SiFiverr, url: "https://www.fiverr.com/syabahmad" },
    { name: "CodePen", icon: SiCodepen, url: "https://codepen.io/SyabAhmad" },
    { name: "About.me", icon: FaUser, url: "https://about.me/syedsyab" },
    { name: "Archinect", icon: FaCode, url: "https://archinect.com/syab" },
    { name: "CodeWars", icon: SiCodewars, url: "https://www.codewars.com/users/SyabAhmad" },
  ];

  const socialLinksToShow = showAllSocialLinks ? socialLinks : socialLinks.slice(0, 12);
  const certificationsToShow = showAllCertifications ? certifications : certifications.slice(0, 8);

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syed Syab Ahmad",
    jobTitle: "AI Engineer & Full-Stack Developer",
    description: "Passionate AI Engineer and Full-Stack Developer with expertise in Machine Learning, Deep Learning, and modern web technologies.",
    url: "https://syab.tech/about",
    image: "https://syab.tech/dp.jpeg",
    alumniOf: "University of Swat",
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.title,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: cert.issuer },
    })),
    knowsAbout: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Full Stack Development", "Python Programming", "JavaScript", "React", "TensorFlow", "PyTorch", "Healthcare AI", "Computer Vision"],
    sameAs: ["https://www.linkedin.com/in/syedsyab/", "https://github.com/syabahmad", "https://twitter.com/SyabSays", "https://medium.com/@syedsyab", "https://www.kaggle.com/syabahmad", "https://www.researchgate.net/profile/Syed-Syab-Ahmad", "https://huggingface.co/SyedSyab"],
  };

  return (
    <>
      <SEO
        title="About - Syed Syab Ahmad"
        description="Meet Syed Syab Ahmad, an AI Engineer and Full-Stack Developer with 50+ certifications."
        keywords="About Syed Syab Ahmad, AI Engineer biography, Machine Learning expert"
        url="https://syab.link/about"
        structuredData={aboutStructuredData}
      />

      <div className="min-h-screen p-4 sm:p-8 pt-24 bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto space-y-10 md:space-y-14 max-w-6xl">

          {/* Hero Flyer - Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.7 }}
            className="relative bg-stone-100 dark:bg-stone-800 rounded-sm shadow-2xl shadow-black/40 p-6 sm:p-8 md:p-10 border border-stone-200 dark:border-stone-700"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            {/* Tape */}
            <div className="absolute -top-3 left-[15%] w-20 h-6 bg-stone-400/40 rotate-[-6deg] rounded-sm shadow-sm" />
            <div className="absolute -top-3 right-[20%] w-16 h-5 bg-stone-400/40 rotate-[4deg] rounded-sm shadow-sm" />
            {/* Pin */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-sm overflow-hidden border-2 border-stone-300 dark:border-stone-600 shadow-xl">
                  <img
                    src="dp.jpeg"
                    alt="Syed Syab Ahmad"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-600 rounded-full border-2 border-stone-100 dark:border-stone-800 shadow-lg">
                  <div className="w-full h-full bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Name & Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">
                  Syed Syab Ahmad
                </h1>
                <h2 className="text-base md:text-lg text-stone-500 dark:text-stone-400 font-handwriting mb-3">
                  AI Engineer & Full-Stack Developer
                </h2>

                {/* Location tags */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-full text-xs font-handwriting">
                    <span className="w-1.5 h-1.5 bg-stone-500 rounded-full" />
                    Riyadh, SA
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-full text-xs font-handwriting">
                    <span className="w-1.5 h-1.5 bg-stone-500 rounded-full" />
                    Open to Relocate
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-full text-xs font-handwriting">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                    Available
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <motion.a href="/contact" whileHover={{ scale: 1.05 }} className="px-5 py-2 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-handwriting">
                    Get In Touch
                  </motion.a>
                  <motion.a href="/projects" whileHover={{ scale: 1.05 }} className="px-5 py-2 border-2 border-stone-500 text-stone-300 font-bold rounded-full hover:bg-stone-700 hover:text-white transition-all duration-300 text-sm font-handwriting">
                    View Projects
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mt-6 max-w-3xl font-handwriting">
              Passionate <strong>AI Engineer</strong> & <strong>Full-Stack Developer</strong> with expertise in Machine Learning, Deep Learning, and modern web technologies. Currently freelancing & exploring new domains — from AI to Web & creative tech. Building innovative solutions that bridge AI with real-world applications.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 pt-5 border-t border-stone-200 dark:border-stone-700">
              {[
                { value: "50+", label: "Certifications", color: "text-stone-300" },
                { value: "20+", label: "Research", color: "text-slate-400" },
                { value: "10+", label: "Projects", color: "text-rose-400" },
                { value: "Open", label: "To Work", color: "text-green-400" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className={`text-lg md:text-xl font-bold ${s.color} font-handwriting`}>{s.value}</div>
                  <div className="text-xs text-stone-500 font-handwriting">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {socialLinksToShow.slice(0, 8).map((social, i) => {
                const Icon = social.icon;
                return (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 text-stone-500 hover:text-stone-300 transition-all duration-300 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg" title={social.name}>
                    <Icon className="text-lg" />
                  </a>
                );
              })}
              {socialLinks.length > 8 && (
                <button onClick={() => setShowAllSocialLinks(!showAllSocialLinks)} className="p-2 text-xs text-stone-400 hover:text-stone-200 font-handwriting">
                  +{socialLinks.length - 8} more
                </button>
              )}
            </div>
          </motion.div>

          {/* AI Facts */}
          <AiFacts />

          {/* Certificate Badges Flyer */}
          <FlyerCard rotate={1} pin="bg-slate-500">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">
                Certifications
              </h2>
              <p className="text-stone-500 text-xs md:text-sm font-handwriting">
                Featured certification badges — click any badge to view details
              </p>
              <a href="/gallery" className="inline-flex items-center gap-2 px-4 py-2 mt-3 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-stone-600 dark:text-stone-300 text-xs font-medium hover:bg-stone-300 dark:hover:bg-stone-600 transition-all duration-300 font-handwriting">
                View Full Gallery ({certifications.filter(c => c.badge).length})
              </a>
            </div>
            <CertificationBadges certifications={certifications} maxItems={6} showCategory={true} />
          </FlyerCard>

          {/* Certifications List - Scattered flyers */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center text-stone-100 mb-6 md:mb-8 font-handwriting"
              style={{ transform: "rotate(-1deg)" }}
            >
              All Certifications
            </motion.h2>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5">
              {certificationsToShow.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, rotate: cardRotations[i % cardRotations.length] }}
                  whileInView={{ opacity: 1, y: 0, rotate: cardRotations[i % cardRotations.length] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                  whileHover={{ scale: 1.03, rotate: 0 }}
                  className="break-inside-avoid mb-4 md:mb-5 relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-lg p-4 md:p-5 transition-all duration-300"
                  style={{ transform: `rotate(${cardRotations[i % cardRotations.length]}deg)` }}
                >
                  {/* Tape */}
                  <div className="absolute -top-2 left-[25%] w-12 h-4 bg-stone-400/40 rounded-sm" style={{ transform: `rotate(${-cardRotations[i % cardRotations.length] * 2}deg)` }} />
                  {/* Pin */}
                  <div className={`absolute -top-1.5 right-[15%] w-2.5 h-2.5 ${pinStyles[i % pinStyles.length]} rounded-full shadow border border-black/20 z-10`} />

                  <h3 className="text-sm md:text-base font-bold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-700 pb-2 mb-2 font-handwriting">
                    {cert.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-xs font-handwriting">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recommendations Flyer */}
          <FlyerCard rotate={-1} pin="bg-stone-600">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">
                Recommendations
              </h2>
              <p className="text-stone-500 text-xs md:text-sm font-handwriting">
                What colleagues and mentors say about working with me
              </p>
            </div>
            <Recommendations recommendations={recommendations} maxItems={6} />
          </FlyerCard>

          {/* Volunteering Flyer */}
          <FlyerCard rotate={1.5} pin="bg-rose-700">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-5 font-handwriting text-center">
              Volunteering
            </h2>
            {volunteering.map((vol, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-700 pb-2 font-handwriting">
                  {vol.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm font-handwriting">
                  <span className="font-bold text-stone-700 dark:text-stone-300">Organization:</span> {vol.organization}
                </p>
                <p className="text-stone-600 dark:text-stone-400 text-sm font-handwriting">
                  <span className="font-bold text-stone-700 dark:text-stone-300">Role:</span> {vol.role}
                </p>
                <p className="text-stone-600 dark:text-stone-400 text-sm font-handwriting">
                  <span className="font-bold text-stone-700 dark:text-stone-300">Duration:</span> {vol.duration}
                </p>
                {vol.category && (
                  <p className="text-stone-600 dark:text-stone-400 text-sm font-handwriting">
                    <span className="font-bold text-stone-700 dark:text-stone-300">Category:</span> {vol.category}
                  </p>
                )}
              </div>
            ))}
          </FlyerCard>

        </div>
      </div>
    </>
  );
};

export default About;
