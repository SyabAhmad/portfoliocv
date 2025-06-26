import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaDiscord, FaWhatsapp, FaTelegram, FaSnapchat, FaMedium, FaDribbble, FaBehance, FaStackOverflow, FaKaggle, FaResearchgate, FaLink, FaUser, FaCode, FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef, SiHuggingface, SiOrcid, SiFiverr, SiCodepen, SiCodewars } from 'react-icons/si';
import certifications from '../data/certificationsData';
import recommendations from '../data/recommendationsData';
import SEO from './SEO';

const volunteering = [
  {
    title: "Volunteering",
    organization: "Punjab Information Technology Board (PITB)",
    role: "Marketing Team",
    duration: "May 2024 · 1 mo",
    category: "Education"
  }
];

const About = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);
  const [showAllSocialLinks, setShowAllSocialLinks] = useState(false);

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/syedsyab/', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/syabahmad', color: 'hover:text-gray-300' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/SyabSays', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/syedsyab', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/syed.syab', color: 'hover:text-blue-600' },
    { name: 'Discord', icon: FaDiscord, url: 'https://discordapp.com/users/syabahmad', color: 'hover:text-indigo-400' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/923460561173', color: 'hover:text-green-400' },
    { name: 'Telegram', icon: FaTelegram, url: 'https://t.me/syedsyab', color: 'hover:text-blue-500' },
    { name: 'Snapchat', icon: FaSnapchat, url: 'https://www.snapchat.com/add/syed.syab', color: 'hover:text-yellow-400' },
    { name: 'Medium', icon: FaMedium, url: 'https://medium.com/@syedsyab', color: 'hover:text-green-400' },
    { name: 'Dribbble', icon: FaDribbble, url: 'https://dribbble.com/Syab_Ahmad', color: 'hover:text-pink-400' },
    { name: 'Behance', icon: FaBehance, url: 'https://www.behance.net/syabahmad', color: 'hover:text-blue-500' },
    { name: 'Stack Overflow', icon: FaStackOverflow, url: 'https://stackoverflow.com/users/20266067/syed-syab-ahmad-shah', color: 'hover:text-orange-500' },
    { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/syab_ahmad/', color: 'hover:text-yellow-500' },
    { name: 'HackerRank', icon: SiHackerrank, url: 'https://www.hackerrank.com/profile/syabblogger', color: 'hover:text-green-400' },
    { name: 'CodeChef', icon: SiCodechef, url: 'https://www.codechef.com/users/syedsyabb', color: 'hover:text-orange-600' },
    { name: 'Kaggle', icon: FaKaggle, url: 'https://www.kaggle.com/syabahmad', color: 'hover:text-cyan-400' },
    { name: 'ResearchGate', icon: FaResearchgate, url: 'https://www.researchgate.net/profile/Syed-Syab-Ahmad', color: 'hover:text-teal-400' },
    { name: 'Personal Link', icon: FaLink, url: 'https://syab.link/', color: 'hover:text-blue-300' },
    { name: 'Read.cv', icon: FaUser, url: 'https://read.cv/syedsyab', color: 'hover:text-purple-400' },
    { name: 'GulfTalent', icon: FaBriefcase, url: 'https://www.gulftalent.com/people/syed-syab-ahmad-shah-11988245', color: 'hover:text-blue-500' },
    { name: 'Hugging Face', icon: SiHuggingface, url: 'https://huggingface.co/SyedSyab', color: 'hover:text-yellow-600' },
    { name: 'ORCID', icon: SiOrcid, url: 'https://orcid.org/0009-0003-9183-582X', color: 'hover:text-green-500' },
    { name: 'Fiverr', icon: SiFiverr, url: 'https://www.fiverr.com/syabahmad?msockid=14c21eb90f7369dc2b930b850e766880', color: 'hover:text-green-600' },
    { name: 'CodePen', icon: SiCodepen, url: 'https://codepen.io/SyabAhmad', color: 'hover:text-white' },
    { name: 'About.me', icon: FaUser, url: 'https://about.me/syedsyab', color: 'hover:text-blue-400' },
    { name: 'Archinect', icon: FaCode, url: 'https://archinect.com/syab', color: 'hover:text-red-400' },
    { name: 'CodeWars', icon: SiCodewars, url: 'https://www.codewars.com/users/SyabAhmad', color: 'hover:text-red-500' },
  ];

  // Limit items shown initially
  const socialLinksToShow = showAllSocialLinks ? socialLinks : socialLinks.slice(0, 12);
  const certificationsToShow = showAllCertifications ? certifications : certifications.slice(0, 8);
  const recommendationsToShow = showAllRecommendations ? recommendations : recommendations.slice(0, 6);

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Syab Ahmad",
    "jobTitle": "AI Engineer & Full-Stack Developer",
    "description": "Passionate AI Engineer and Full-Stack Developer with expertise in Machine Learning, Deep Learning, and modern web technologies. Currently pursuing studies at University of Swat.",
    "url": "https://syab.link/about",
    "image": "https://syab.link/images/profile.jpg",
    "alumniOf": "University of Swat",
    "hasCredential": certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert.title,
      "credentialCategory": "certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": cert.issuer
      }
    })),
    "knowsAbout": [
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
      "Computer Vision"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/syedsyab/",
      "https://github.com/syabahmad",
      "https://twitter.com/SyabSays",
      "https://medium.com/@syedsyab",
      "https://www.kaggle.com/syabahmad",
      "https://www.researchgate.net/profile/Syed-Syab-Ahmad",
      "https://huggingface.co/SyedSyab"
    ]
  };

  return (
    <>
      <SEO 
        title="About - Syed Syab Ahmad"
        description="Learn about Syed Syab Ahmad, an AI Engineer and Full-Stack Developer with 50+ certifications, expertise in Machine Learning, and passion for building intelligent solutions."
        keywords="About Syed Syab Ahmad, AI Engineer biography, Machine Learning expert, Full Stack Developer Pakistan, University of Swat, AI certifications, programming skills"
        url="https://syab.link/about"
        structuredData={aboutStructuredData}
      />
      
      <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto space-y-16">
          {/* Introduction Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-8 max-w-5xl mx-auto">
              
              {/* Header with Image and Name */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl shadow-cyan-500/20 relative">
                    <img 
                      src="dp.jpeg"
                      // src="https://media.licdn.com/dms/image/v2/D4D35AQEUv9FG-864tQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1736244636675?e=1749502800&v=beta&t=kumK-AXqzTK0RBF8vFYM1RbBoFC3Dl73PPZ5-foH4aQ"
                      alt="Syed Syab Ahmad"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.classList.remove('hidden');
                      }}
                    />
                    <div 
                      className="w-full h-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white hidden absolute top-0 left-0"
                    >
                      SSA
                    </div>
                  </div>
                  {/* Animated ring around image */}
                  <div className="absolute inset-0 w-40 h-40 lg:w-48 lg:h-48 mx-auto rounded-full border-2 border-cyan-400/30 animate-ping"></div>
                  {/* Status indicator */}
                  <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-800 shadow-lg">
                    <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    Syed Syab Ahmad
                  </h1>
                  <h2 className="text-xl lg:text-2xl text-emerald-400 font-semibold mb-4">
                    AI Engineer & Full-Stack Developer
                  </h2>
                  
                  {/* Location and University */}
                  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-4 text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm">Pakistan</span>
                    </div>
                    <div className="hidden lg:block w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm">University of Swat</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a
                      href="/contact"
                      className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-cyan-400 hover:to-purple-400 hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
                    >
                      Get In Touch
                    </a>
                    <a
                      href="/projects"
                      className="px-6 py-2.5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="text-gray-300 text-lg leading-relaxed mb-8 space-y-4 max-w-4xl mx-auto">
                <p>
                  Welcome to my digital portfolio! I'm a passionate AI Engineer and Full-Stack Developer with expertise in 
                  Machine Learning, Deep Learning, and modern web technologies. Currently pursuing my studies at the 
                  University of Swat, I'm dedicated to building innovative solutions that bridge the gap between 
                  artificial intelligence and real-world applications.
                </p>
                <p>
                  My journey spans from developing healthcare AI systems for disease prediction to creating 
                  sophisticated RAG systems and generative AI applications. I thrive on solving complex problems 
                  and am constantly exploring the frontiers of technology to make a meaningful impact.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Connect with me across platforms
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-3">
                  {socialLinksToShow.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 p-3 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-gray-600/50 group relative`}
                        title={social.name}
                      >
                        <IconComponent className="text-xl" />
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
                
                {socialLinks.length > 12 && (
                  <button
                    onClick={() => setShowAllSocialLinks(!showAllSocialLinks)}
                    className="mt-4 flex items-center justify-center mx-auto px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                  >
                    {showAllSocialLinks ? (
                      <>
                        <FaChevronUp className="mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <FaChevronDown className="mr-2" />
                        View More ({socialLinks.length - 12} more)
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                  <div className="text-gray-300 text-sm">Research Ideas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">10+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12">
              Certifications
            </h2>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
              {certificationsToShow.map((cert, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-500/50"
                >
                  <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2 mb-4">
                    {cert.title}
                  </h3>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p><span className="text-cyan-400 font-medium">Issuer:</span> {cert.issuer}</p>
                    <p><span className="text-cyan-400 font-medium">Issued:</span> {cert.issuedDate}</p>
                    {cert.credentialId && (
                      <p><span className="text-cyan-400 font-medium">Credential ID:</span> {cert.credentialId}</p>
                    )}
                    {cert.skills && (
                      <p><span className="text-cyan-400 font-medium">Skills:</span> {cert.skills}</p>
                    )}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Show credential
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            {certifications.length > 8 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllCertifications(!showAllCertifications)}
                  className="flex items-center justify-center mx-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  {showAllCertifications ? (
                    <>
                      <FaChevronUp className="mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown className="mr-2" />
                      View All Certifications ({certifications.length - 8} more)
                    </>
                  )}
                </button>
              </div>
            )}
          </section>

          {/* Recommendations Section */}
          <section>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-12">
              Recommendations
            </h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
              {recommendationsToShow.map((rec, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/50"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      {rec.recommender}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {rec.designation} • {rec.connection}
                    </p>
                    <p className="text-xs text-emerald-400 mt-1">{rec.date}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{rec.text}</p>
                </div>
              ))}
            </div>
            
            {recommendations.length > 6 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                  className="flex items-center justify-center mx-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
                >
                  {showAllRecommendations ? (
                    <>
                      <FaChevronUp className="mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown className="mr-2" />
                      View All Recommendations ({recommendations.length - 6} more)
                    </>
                  )}
                </button>
              </div>
            )}
          </section>

          {/* Volunteering Section */}
          <section>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
              Volunteering
            </h2>
            <div className="columns-1 sm:columns-2 gap-6">
              {volunteering.map((vol, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/20 hover:border-purple-500/50"
                >
                  <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2 mb-4">
                    {vol.title}
                  </h3>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p><span className="text-purple-400 font-medium">Organization:</span> {vol.organization}</p>
                    <p><span className="text-purple-400 font-medium">Role:</span> {vol.role}</p>
                    <p><span className="text-purple-400 font-medium">Duration:</span> {vol.duration}</p>
                    {vol.category && (
                      <p><span className="text-purple-400 font-medium">Category:</span> {vol.category}</p>
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