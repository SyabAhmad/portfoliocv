import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
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

const About = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllSocialLinks, setShowAllSocialLinks] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/syedsyab/",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/syabahmad",
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/SyabSays",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/syedsyab",
      color: "hover:text-amber-400",
    },
    {
      name: "Dribbble",
      icon: FaDribbble,
      url: "https://dribbble.com/Syab_Ahmad",
      color: "hover:text-amber-400",
    },
    {
      name: "Behance",
      icon: FaBehance,
      url: "https://www.behance.net/syabahmad",
      color: "hover:text-blue-500",
    },
    {
      name: "Stack Overflow",
      icon: FaStackOverflow,
      url: "https://stackoverflow.com/users/20266067/syed-syab-ahmad-shah",
      color: "hover:text-orange-500",
    },
    {
      name: "LeetCode",
      icon: SiLeetcode,
      url: "https://leetcode.com/u/syab_ahmad/",
      color: "hover:text-yellow-500",
    },
    {
      name: "HackerRank",
      icon: SiHackerrank,
      url: "https://www.hackerrank.com/profile/syabblogger",
      color: "hover:text-green-400",
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      url: "https://www.codechef.com/users/syedsyabb",
      color: "hover:text-orange-600",
    },
    {
      name: "Kaggle",
      icon: FaKaggle,
      url: "https://www.kaggle.com/syabahmad",
      color: "hover:text-cyan-400",
    },
    {
      name: "ResearchGate",
      icon: FaResearchgate,
      url: "https://www.researchgate.net/profile/Syed-Syab-Ahmad",
      color: "hover:text-teal-400",
    },
    {
      name: "Personal Link",
      icon: FaLink,
      url: "https://syab.link/",
      color: "hover:text-blue-300",
    },
    {
      name: "Read.cv",
      icon: FaUser,
      url: "https://read.cv/syedsyab",
      color: "hover:text-purple-400",
    },
    {
      name: "GulfTalent",
      icon: FaBriefcase,
      url: "https://www.gulftalent.com/people/syed-syab-ahmad-shah-11988245",
      color: "hover:text-blue-500",
    },
    {
      name: "Hugging Face",
      icon: SiHuggingface,
      url: "https://huggingface.co/SyedSyab",
      color: "hover:text-yellow-600",
    },
    {
      name: "ORCID",
      icon: SiOrcid,
      url: "https://orcid.org/0009-0003-9183-582X",
      color: "hover:text-green-500",
    },
    {
      name: "Fiverr",
      icon: SiFiverr,
      url: "https://www.fiverr.com/syabahmad?msockid=14c21eb90f7369dc2b930b850e766880",
      color: "hover:text-green-600",
    },
    {
      name: "CodePen",
      icon: SiCodepen,
      url: "https://codepen.io/SyabAhmad",
      color: "hover:text-white",
    },
    {
      name: "About.me",
      icon: FaUser,
      url: "https://about.me/syedsyab",
      color: "hover:text-blue-400",
    },
    {
      name: "Archinect",
      icon: FaCode,
      url: "https://archinect.com/syab",
      color: "hover:text-red-400",
    },
    {
      name: "CodeWars",
      icon: SiCodewars,
      url: "https://www.codewars.com/users/SyabAhmad",
      color: "hover:text-red-500",
    },
  ];

  // Limit items shown initially
  const socialLinksToShow = showAllSocialLinks
    ? socialLinks
    : socialLinks.slice(0, 12);
  const certificationsToShow = showAllCertifications
    ? certifications
    : certifications.slice(0, 8);

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syed Syab Ahmad",
    jobTitle: "AI Engineer & Full-Stack Developer",
    description:
      "Passionate AI Engineer and Full-Stack Developer with expertise in Machine Learning, Deep Learning, and modern web technologies. Currently pursuing studies at University of Swat.",
    url: "https://syab.tech/about",
    image: "https://syab.tech/dp.jpeg",
    alumniOf: "University of Swat",
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.title,
      credentialCategory: "certificate",
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
      },
    })),
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Full Stack Development",
      "Python Programming",
      "JavaScript",
      "React",
      "TensorFlow",
      "PyTorch",
      "Healthcare AI",
      "Computer Vision",
    ],
    sameAs: [
      "https://www.linkedin.com/in/syedsyab/",
      "https://github.com/syabahmad",
      "https://twitter.com/SyabSays",
      "https://medium.com/@syedsyab",
      "https://www.kaggle.com/syabahmad",
      "https://www.researchgate.net/profile/Syed-Syab-Ahmad",
      "https://huggingface.co/SyedSyab",
    ],
  };

  return (
    <>
      <SEO
        title="About - Syed Syab Ahmad"
        description="Meet Syed Syab Ahmad, an AI Engineer and Full-Stack Developer with 50+ certifications. Specializing in Python, Machine Learning, Deep Learning, React, Django, Flask, and Web Development. Available for freelance work and job opportunities. Remote work worldwide. Visa sponsorship available."
        keywords="About Syed Syab Ahmad, AI Engineer biography, Machine Learning expert, Full Stack Developer Saudi Arabia, Python expert, JavaScript developer, React specialist, Django backend, Flask developer, Data scientist, ML engineer, Hire AI engineer, Freelance developer profile, Tech resume, AI specialist credentials, Machine learning portfolio, Deep learning engineer, Professional skills, Certifications, 50+ certifications, Job seeker, Career profile, Available for hire, Remote work, Worldwide remote, Visa sponsorship, Contract developer, AI consulting, Pakistan background"
        url="https://syab.link/about"
        structuredData={aboutStructuredData}
      />

      <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/30 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 transition-colors duration-300">
        <div className="container mx-auto space-y-12 md:space-y-16">
          {/* Introduction Section - Redesigned */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto transition-colors duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6 md:mb-8">
                {/* Profile Image - Compact */}
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 shadow-xl">
                    <img
                      src="dp.jpeg"
                      alt="Syed Syab Ahmad"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.classList.remove("hidden");
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-xl md:text-2xl font-bold text-white hidden absolute top-0 left-0">
                      SSA
                    </div>
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto rounded-full border-2 border-amber-400/30 animate-ping"></div>
                  {/* Status */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg">
                    <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Name, Title & Actions */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2">
                    Syed Syab Ahmad
                  </h1>
                  <h2 className="text-base md:text-lg lg:text-xl text-amber-600 dark:text-amber-400 font-semibold mb-3">
                    AI Engineer & Full-Stack Developer
                  </h2>

                  {/* Location Tags */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4 text-xs md:text-sm">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100/50 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 rounded-full">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                      Riyadh, SA
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-100/50 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 rounded-full">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                      Open to Relocate
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100/50 dark:bg-green-500/20 text-green-700 dark:text-green-300 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                      📱 546211818
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                    <a
                      href="/contact"
                      className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-amber-400 hover:to-orange-400 transition-all duration-300 text-sm"
                    >
                      Get In Touch
                    </a>
                    <a
                      href="/projects"
                      className="px-5 py-2 border-2 border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 font-semibold rounded-full hover:bg-amber-600 hover:text-white dark:hover:bg-amber-400 dark:hover:text-stone-900 transition-all duration-300 text-sm"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>

              {/* Description - Compact */}
              <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 space-y-2 max-w-3xl mx-auto">
                <p>
                  Passionate <strong>AI Engineer</strong> & <strong>Full-Stack Developer</strong> with expertise in Machine Learning, Deep Learning, and modern web technologies.
                </p>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  Currently freelancing & exploring new domains — from AI to Web & creative tech 😎. Building innovative solutions that bridge AI with real-world applications.
                </p>
              </div>

              {/* Quick Stats - Inline */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-4 border-t border-gray-200 dark:border-gray-700/50">
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-amber-600 dark:text-amber-400">50+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Certifications</div>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-orange-600 dark:text-orange-400">20+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Research</div>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400">10+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400">Open</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">To Work</div>
                </div>
              </div>

              {/* Social Links - Minimal */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {socialLinksToShow.slice(0, 8).map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-all duration-300 hover:bg-amber-100/50 dark:hover:bg-amber-500/20 rounded-lg"
                      title={social.name}
                    >
                      <IconComponent className="text-lg" />
                    </a>
                  );
                })}
                {socialLinks.length > 8 && (
                  <button
                    onClick={() => setShowAllSocialLinks(!showAllSocialLinks)}
                    className="p-2 text-xs text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    +{socialLinks.length - 8} more
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* AI Facts Section */}
          <AiFacts />

          {/* Certificate Badges Section */}
          <section>
            <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-2xl p-8 max-w-7xl mx-auto transition-colors duration-300">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2 md:mb-3">
                  Certifications
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
                  Featured certification badges - Click on any badge to view
                  details
                </p>
                <a
                  href="/gallery"
                    className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-600/30 dark:border-amber-500/30 rounded-full text-amber-600 dark:text-amber-400 text-xs md:text-sm font-medium hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  View Full Gallery (
                  {certifications.filter((cert) => cert.badge).length}{" "}
                  Certificates)
                </a>
              </div>
              <CertificationBadges
                certifications={certifications}
                maxItems={6}
                showCategory={true}
              />
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-6 md:mb-8">
              Certifications
            </h2>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
              {certificationsToShow.map((cert, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-4 md:mb-6 bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-lg p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-500/20 hover:border-amber-600/50 dark:hover:border-amber-500/50"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2 mb-3 md:mb-4">
                    {cert.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm space-y-1 md:space-y-2">
                    <p>
                      <span className="text-amber-600 dark:text-amber-400 font-medium">
                        Issuer:
                      </span>{" "}
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recommendations Section */}
          <section>
            <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-2xl p-6 md:p-8 max-w-7xl mx-auto transition-colors duration-300">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2 md:mb-3">
                  Recommendations
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
                  What colleagues and mentors say about working with me
                </p>
              </div>
              <Recommendations recommendations={recommendations} maxItems={6} />
            </div>
          </section>

          {/* Volunteering Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-6 md:mb-8">
              Volunteering
            </h2>
            <div className="columns-1 sm:columns-2 gap-4 md:gap-6">
              {volunteering.map((vol, index) => (
                <div
                  key={index}
                    className="break-inside-avoid mb-6 bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-amber-500/20 hover:border-amber-600/50 dark:hover:border-amber-500/50"
                >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2 mb-3">
                      {vol.title}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm space-y-1 md:space-y-2">
                      <p>
                        <span className="text-amber-600 dark:text-amber-400 font-medium">
                          Organization:
                        </span>{" "}
                        {vol.organization}
                      </p>
                      <p>
                        <span className="text-amber-600 dark:text-amber-400 font-medium">
                          Role:
                        </span>{" "}
                        {vol.role}
                      </p>
                      <p>
                        <span className="text-amber-600 dark:text-amber-400 font-medium">
                          Duration:
                        </span>{" "}
                        {vol.duration}
                      </p>
                      {vol.category && (
                        <p>
                          <span className="text-amber-600 dark:text-amber-400 font-medium">
                            Category:
                          </span>{" "}
                          {vol.category}
                        </p>
                      )}
                    </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;