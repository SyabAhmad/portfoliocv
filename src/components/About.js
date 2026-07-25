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
import researchIdeas from "../data/researchData";
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

const About = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllSocialLinks, setShowAllSocialLinks] = useState(false);

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/syedsyab/" },
    { name: "GitHub", icon: FaGithub, url: "https://github.com/syabahmad" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/SyabSays" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/syedsyab" },
    { name: "Dribbble", icon: FaDribbble, url: "https://dribbble.com/syedsyab" },
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
    image: "https://syab.tech/me.png",
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

      <div className="min-h-screen bg-stone-50 pt-20">

        {/* Profile Header */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              <div className="relative flex-shrink-0">
                <img
                  src="me.png"
                  alt="Syed Syab Ahmad"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border border-stone-200 shadow-lg"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-stone-50" />
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 font-heading mb-2">
                  Syed Syab Ahmad
                </h1>
                <p className="text-lg text-stone-500 font-handwriting mb-4">
                  AI Engineer & Full-Stack Developer
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-handwriting">
                    <span className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
                    Riyadh, SA
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-handwriting">
                    <span className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
                    Open to Relocate
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-handwriting">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Available
                  </span>
                </div>

                <p className="text-stone-500 font-handwriting leading-relaxed max-w-2xl mb-6">
                  Passionate <strong className="text-stone-700">AI Engineer</strong> & <strong className="text-stone-700">Full-Stack Developer</strong> with expertise in Machine Learning, Deep Learning, and modern web technologies. Currently freelancing & exploring new domains — from AI to Web & creative tech. Building innovative solutions that bridge AI with real-world applications.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                  {[
                    { value: "50+", label: "Certifications" },
                    { value: "20+", label: "Research" },
                    { value: "37+", label: "Projects" },
                    { value: "Open", label: "To Work" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-stone-900 font-heading">{s.value}</div>
                      <div className="text-xs text-stone-400 font-handwriting">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href="/contact" className="px-6 py-2.5 bg-stone-900 text-stone-50 font-bold rounded-lg text-sm font-heading shadow-md">
                    Get In Touch
                  </a>
                  <a href="/projects" className="px-6 py-2.5 border-2 border-stone-300 text-stone-600 font-bold rounded-lg text-sm font-heading">
                    View Projects
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Links Marquee */}
        <section className="pb-12 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <p className="text-xs font-medium text-stone-400 font-handwriting tracking-widest uppercase">
              Find Me Online
            </p>
          </div>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

            {/* Row 1 - scrolls left */}
            <div className="flex mb-4 animate-marquee-left">
              {[...socialLinks, ...socialLinks, ...socialLinks].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={`row1-${i}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white border border-stone-200 rounded-xl mr-4 group"
                    title={social.name}
                  >
                    <Icon className="text-2xl text-stone-400 group-hover:text-stone-700 transition-colors" />
                    <span className="text-sm font-medium text-stone-600 font-handwriting whitespace-nowrap">{social.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Row 2 - scrolls right */}
            <div className="flex animate-marquee-right">
              {[...socialLinks, ...socialLinks, ...socialLinks].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={`row2-${i}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white border border-stone-200 rounded-xl mr-4 group"
                    title={social.name}
                  >
                    <Icon className="text-2xl text-stone-400 group-hover:text-stone-700 transition-colors" />
                    <span className="text-sm font-medium text-stone-600 font-handwriting whitespace-nowrap">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Facts */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <AiFacts />
          </div>
        </section>

        {/* Certification Badges */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900 font-heading mb-1">
                    Certifications
                  </h2>
                  <p className="text-stone-400 text-sm font-handwriting">
                    {certifications.length} certifications across various platforms
                  </p>
                </div>
              </div>
              <CertificationBadges certifications={certifications} maxItems={6} showCategory={true} />
            </div>
          </div>
        </section>

        {/* All Certifications */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-stone-900 font-heading">
                  All Certifications
                </h2>
                <button
                  onClick={() => setShowAllCertifications(!showAllCertifications)}
                  className="text-sm text-stone-500 font-handwriting flex items-center gap-1"
                >
                  {showAllCertifications ? (
                    <>Show Less <FaChevronUp size={12} /></>
                  ) : (
                    <>View All ({certifications.length}) <FaChevronDown size={12} /></>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certificationsToShow.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className="bg-stone-50 border border-stone-100 rounded-lg p-4"
                  >
                    <h3 className="text-sm font-bold text-stone-800 font-heading mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-stone-500 text-xs font-handwriting">
                      {cert.issuer}
                    </p>
                    {cert.category && (
                      <span className="inline-block mt-2 px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] rounded-full font-handwriting">
                        {cert.category}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-stone-900 font-heading mb-2">
                  Recommendations
                </h2>
                <p className="text-stone-400 text-sm font-handwriting">
                  What colleagues and mentors say about working with me
                </p>
              </div>
              <Recommendations recommendations={recommendations} maxItems={6} />
            </div>
          </div>
        </section>

        {/* Volunteering */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-stone-900 font-heading mb-6 text-center">
                Volunteering
              </h2>
              {volunteering.map((vol, i) => (
                <div key={i} className="bg-stone-50 border border-stone-100 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-stone-800 font-heading mb-3">
                    {vol.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-xs text-stone-400 font-handwriting uppercase tracking-wider">Organization</span>
                      <p className="text-stone-700 text-sm font-handwriting">{vol.organization}</p>
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 font-handwriting uppercase tracking-wider">Role</span>
                      <p className="text-stone-700 text-sm font-handwriting">{vol.role}</p>
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 font-handwriting uppercase tracking-wider">Duration</span>
                      <p className="text-stone-700 text-sm font-handwriting">{vol.duration}</p>
                    </div>
                    {vol.category && (
                      <div>
                        <span className="text-xs text-stone-400 font-handwriting uppercase tracking-wider">Category</span>
                        <p className="text-stone-700 text-sm font-handwriting">{vol.category}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Interests */}
        {researchIdeas && researchIdeas.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-stone-900 font-heading mb-2">
                    Research Interests
                  </h2>
                  <p className="text-stone-400 text-sm font-handwriting">
                    Areas I'm exploring and building in
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {researchIdeas.slice(0, 9).map((research, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="bg-stone-50 border border-stone-100 rounded-lg p-4"
                    >
                      <h3 className="text-sm font-bold text-stone-800 font-heading mb-1 leading-snug">
                        {research.title}
                      </h3>
                      <p className="text-stone-500 text-xs font-handwriting leading-relaxed mb-2">
                        {research.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {research.techniques && research.techniques.slice(0, 3).map((tech, j) => (
                          <span key={j} className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] rounded-full font-handwriting">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
};

export default About;
