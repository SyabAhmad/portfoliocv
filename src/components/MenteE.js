import React from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Users,
  Target,
  Lightbulb,
  Shield,
  Smartphone,
  Cloud,
  Zap,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
const MenteE = () => {
  const products = [
    {
      name: "DocxBox",
      category: "Privacy-First Document Management",
      description:
        "A revolutionary Android document manager that implements enterprise-grade security without compromising user experience. DocxBox encrypts every file end-to-end before storage and enables seamless offline-first workflow.",
      features: [
        "End-to-End AES-256 Encryption",
        "Passwordless OAuth 2.0 Authentication",
        "Encrypted Google Drive Backup",
        "Offline-First Architecture",
        "OWASP-Compliant Security Design",
      ],
      tech: "Kotlin, Jetpack Compose, Firebase Auth, Room Database, Google Drive API, Android Security Library",
      status: "Available Now",
      link: "https://docs-box-liart.vercel.app/",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      isComingSoon: false,
    },
    // {
    //   name: "cvAI",
    //   category: "AI-Powered Resume Analysis",
    //   description:
    //     "AI Recruitment Solutions focusing on fair, efficient candidate discovery and screening. RecruAI beta launched in Dec 2025 to onboard early partners and testers.",
    //   features: ["---", "---", "---"],
    //   tech: "---",
    //   status: "In Progress",
    //   link: null,
    //   icon: <Zap className="w-8 h-8 text-orange-500" />,
    //   isComingSoon: false,
    //   isInProgress: true,
    //   isHidden: true,
    // },
    {
      name: "vidAI",
      category: "AI Video Enhancement Platform",
      description: "---",
      features: ["---", "---", "---"],
      tech: "---",
      status: "Coming Soon",
      link: null,
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      isComingSoon: true,
      isHidden: true,
    },
    {
      name: "RecruAI",
      category: "AI Recruitment Solutions",
      description: "---",
      features: [
        "AI-Powered Candidate Screening: Automatically evaluates resumes and ranks candidates based on skills, experience, and role fit.",
        "Smart Interview Scheduling: Integrates with calendars to schedule interviews efficiently, reducing manual coordination.",
        "Automated Candidate Insights: Provides detailed summaries, strengths, and potential fit for recruiters to make faster decisions.",
      ],
      tech: "Python (Flask), PostgreSQL for data management,  React.js for responsive UI/UX, Natural Language Processing (NLP) models for resume parsing, candidate matching, predictive analytics",
      status: "Beta Launch",
      link: "https://recru-ai-lime.vercel.app",
      icon: <Cloud className="w-8 h-8 text-amber-500" />,
      isComingSoon: false,
      isHidden: false,
      isBeta: true,
    },
  ];

  const team = [
    {
      name: "Syed Syab Ahmad",
      role: "Founder & Chief Technology Officer",
      expertise: "AI Engineering, Mobile Security, Full-Stack Development",
      description:
        "Passionate about building secure, privacy-first applications that empower users while maintaining enterprise-grade security standards.",
      social: {
        github: "https://github.com/SyabAhmad",
        linkedin: "https://linkedin.com/in/syedsyab",
        email: "syedsyabahmadshah@gmail.com",
      },
    },
    {
      name: "Backend Lead",
      role: "Backend Engineer",
      expertise: "Python Developer & Data Scientist",
      description:
        "Python Developer & Data Scientist • ML & Data Science Expert • Transforming data into meaningful insights • Specialized in scalable backend solutions",
      skills: ["Python", "Data Science", "Backend", "PostgreSQL"],
      social: {
        github: "https://github.com/sania040",
        linkedin: "https://linkedin.com",
        email: "backend@mentee.com",
      },
      icon: "👩‍💻",
    },
    {
      name: "Design Lead",
      role: "Design Lead & Founder",
      expertise: "Graphics Designer & UI/UX Designer",
      description:
        "Graphics Designer & UI/UX Designer • Figma Expert • Adobe XD Proficient • Prototyping Specialist • Creating Innovative Designs for the Future",
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "design@mentee.com",
      },
      icon: "👩‍🎨",
    },
    {
      name: "ML Engineer",
      role: "ML/Data Engineer",
      expertise: "Data Analyst & ML Engineer",
      description:
        "Data Analyst & ML Engineer • Python, Pandas, NumPy, Matplotlib • Data Cleaning, Visualization & Machine Learning • Building intelligent solutions",
      skills: ["Python", "ML", "Data Analysis", "Scikit-Learn"],
      social: {
        github: "https://github.com/hamza-rustam",
        linkedin: "https://linkedin.com/in/hamza-rustam",
        email: "ml@mentee.com",
      },
      icon: "🤖",
    },
  ];

  const milestones = [
    {
      year: "Feb 1, 2023",
      title: "Company Foundation",
      description:
        "MenteE was established on February 1, 2023, with a mission to create privacy-first, secure digital solutions for the modern world.",
    },
    {
      year: "May 2025",
      title: "DocxBox Launch",
      description:
        "Launched our flagship product, DocxBox, establishing MenteE as a leader in secure mobile document management.",
    },
    {
      year: "Nov 2025",
      title: "Product Expansion",
      description:
        "Planning to expand our product line with additional privacy-focused applications and services.",
    },
    {
      year: "Dec 2025",
      title: "RecruAI Beta Launch",
      description:
        "This month we launched the RecruAI Beta bringing AI-powered recruitment solutions to organizations keen on responsible automation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-gray-900 dark:text-white transition-colors duration-300 mt-10">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden mt-13">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-200 dark:bg-cyan-500/20 rounded-full opacity-70 filter blur-3xl -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-500/20 rounded-full opacity-70 filter blur-3xl translate-x-1/3 translate-y-1/3 transition-colors duration-300 mt-10" />

        <div className="max-w-6xl mx-auto relative z-10 mt-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 dark:from-blue-500/20 dark:to-purple-500/20 dark:border-blue-500/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 transition-colors duration-300 ">
              🚀 Privacy-First Innovation
            </div>
            {/* RecruAI Beta Tag */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-200 to-pink-100 dark:from-yellow-700 dark:to-pink-800 border border-yellow-300 dark:border-yellow-600 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full mb-6 ml-4 shadow-sm">
              <span className="text-sm font-semibold">🚀 RecruAI Beta</span>
              <a
                href="https://recru-ai-lime.vercel.app/"
                className="ml-2 px-3 py-1 rounded-full bg-yellow-500 text-white text-xs font-bold hover:bg-yellow-600 transition-all"
              >
                Join Beta
              </a>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Welcome to MenteE
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Building secure, privacy-first digital solutions that prioritize
              user control and data protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs-box-liart.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Try DocxBox <ExternalLink size={18} />
              </a>
              <Link
                to="/projects"
                className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400 font-semibold rounded-full hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-slate-800/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-8 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To democratize privacy and security by creating intuitive,
                enterprise-grade applications that put users in complete control
                of their digital assets. We believe that strong security and
                exceptional user experience can coexist harmoniously.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-8 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become the global standard for privacy-first digital
                solutions, empowering individuals and organizations to protect
                their most sensitive information without sacrificing convenience
                or functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Innovative solutions designed with privacy, security, and user
              experience at their core
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                  product.isInProgress
                    ? "border-orange-200 dark:border-orange-500/30 hover:border-orange-500/50"
                    : product.isComingSoon
                      ? "border-yellow-200 dark:border-yellow-500/30 hover:border-yellow-500/50"
                      : "border-gray-200 dark:border-gray-700/50 hover:border-cyan-500/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {product.icon}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                    <p
                      className={`text-sm font-medium ${
                        product.isInProgress
                          ? "text-orange-600 dark:text-orange-400"
                          : product.isComingSoon
                            ? "text-yellow-600 dark:text-yellow-400"
                            : "text-cyan-600 dark:text-cyan-400"
                      }`}
                    >
                      {product.isHidden ? "---" : product.category}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.isInProgress
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400"
                        : product.isComingSoon
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                          : product.isBeta
                            ? "bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-400"
                            : "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {product.isHidden ? (
                  <div className="text-center py-8">
                    <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 mb-4">
                      <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <span className="text-2xl">
                        {product.isInProgress ? "⚡" : "🚧"}
                      </span>
                      <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                    <p
                      className={`font-medium text-sm ${
                        product.isInProgress
                          ? "text-orange-600 dark:text-orange-400"
                          : "text-yellow-600 dark:text-yellow-400"
                      }`}
                    >
                      {product.isInProgress ? "In Progress" : "Coming Soon"}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                      {product.isInProgress
                        ? "Currently being developed"
                        : "Details will be revealed"}
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <h4
                        className={`text-sm font-semibold mb-2 ${
                          product.isInProgress
                            ? "text-orange-600 dark:text-orange-400"
                            : product.isComingSoon
                              ? "text-yellow-600 dark:text-yellow-400"
                              : "text-cyan-600 dark:text-cyan-400"
                        }`}
                      >
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-xs"
                          >
                            <Zap
                              size={12}
                              className={`flex-shrink-0 ${
                                product.isInProgress
                                  ? "text-orange-600 dark:text-orange-400"
                                  : product.isComingSoon
                                    ? "text-yellow-600 dark:text-yellow-400"
                                    : "text-cyan-600 dark:text-cyan-400"
                              }`}
                            />
                            {feature}
                          </li>
                        ))}
                        {product.features.length > 3 && (
                          <li className="text-gray-500 dark:text-gray-400 text-xs">
                            +{product.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">
                        Technology
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                        {product.tech}
                      </p>
                    </div>

                    {product.isInProgress ? (
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 dark:from-orange-500/10 dark:to-red-500/10 dark:border-orange-500/20 rounded-lg p-3 text-center">
                        <span className="text-orange-600 dark:text-orange-400 font-medium text-sm">
                          ⚡ In Development
                        </span>
                      </div>
                    ) : product.isComingSoon ? (
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 dark:from-yellow-500/10 dark:to-orange-500/10 dark:border-yellow-500/20 rounded-lg p-3 text-center">
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium text-sm">
                          🚧 Coming Soon
                        </span>
                      </div>
                    ) : product.isBeta ? (
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 dark:from-teal-600/10 dark:to-cyan-600/10 dark:border-teal-500/20 rounded-lg p-3 text-center">
                        <span className="text-teal-700 dark:text-teal-400 font-medium text-sm">
                          🚀 Beta Launch
                        </span>
                        <div className="mt-2">
                          <a
                            href={product.link}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500 text-white rounded-full text-xs font-semibold hover:bg-teal-600 transition-all"
                          >
                            Join Beta
                          </a>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-sm w-full justify-center"
                      >
                        Visit Website <ExternalLink size={14} />
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-slate-800/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                Our Team
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate individuals dedicated to building the future of secure
              digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {member.icon
                      ? member.icon
                      : member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                      {member.expertise}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {member.description}
                </p>

                {member.skills && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github
                      size={16}
                      className="text-gray-900 dark:text-white"
                    />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Linkedin
                      size={16}
                      className="text-gray-900 dark:text-white"
                    />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Mail size={16} className="text-gray-900 dark:text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Key milestones in MenteE's mission to revolutionize digital
              privacy and security
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="md:w-40 flex-shrink-0">
                  <div
                    className={`px-4 py-2 rounded-lg font-bold text-center text-white ${
                      milestone.year.includes("Feb")
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                        : "bg-gradient-to-r from-cyan-500 to-purple-500"
                    }`}
                  >
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 transition-colors duration-300">
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      milestone.year.includes("Feb")
                        ? "text-yellow-600 dark:text-yellow-400"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/50 dark:to-purple-900/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Interested in our products or want to learn more about privacy-first
            solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs-box-liart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Try DocxBox <ExternalLink size={18} />
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400 font-semibold rounded-full hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Us <Mail size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenteE;
