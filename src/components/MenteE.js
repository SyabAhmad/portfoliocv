import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  ChevronRight,
  Rocket,
  MapPin,
  Calendar,
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
      icon: <Shield className="w-7 h-7" />,
      gradient: "from-blue-500 to-indigo-500",
      isComingSoon: false,
    },
    {
      name: "vidAI",
      category: "AI Video Enhancement Platform",
      description: "---",
      features: ["---", "---", "---"],
      tech: "---",
      status: "Coming Soon",
      link: null,
      icon: <Smartphone className="w-7 h-7" />,
      gradient: "from-amber-500 to-orange-500",
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
      icon: <Cloud className="w-7 h-7" />,
      gradient: "from-amber-500 to-yellow-500",
      isComingSoon: false,
      isHidden: false,
      isBeta: true,
    },
  ];

  const team = [
    {
      name: "Syed Syab Ahmad",
      role: "Founder & CTO",
      expertise: "AI Engineering, Mobile Security, Full-Stack Development",
      description:
        "Passionate about building secure, privacy-first applications that empower users while maintaining enterprise-grade security standards.",
      social: {
        github: "https://github.com/SyabAhmad",
        linkedin: "https://linkedin.com/in/syedsyab",
        email: "syedsyabahmadshah@gmail.com",
      },
      gradient: "from-amber-500 to-orange-500",
    },
    {
      name: "Sania Shakeel",
      role: "Backend Engineer",
      expertise: "Python Developer & Data Scientist",
      description:
        "Python Developer & Data Scientist • ML & Data Science Expert • Transforming data into meaningful insights • Specialized in scalable backend solutions",
      skills: ["Python", "Data Science", "Backend", "PostgreSQL"],
      social: {
        github: "https://github.com/sania040",
        linkedin: "https://linkedin.com/in/saniashakeel",
        email: "sania@mentee.com",
      },
      icon: "👩‍💻",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "MenteE",
      role: "Sleeping Partner",
      expertise: "Private Account",
      description:
        "Strategic investor and sleeping partner • Focused on long-term growth and capital allocation • Identity kept private for security",
      isPrivate: true,
      skills: ["Investment", "Strategy", "Capital"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "private@mentee.com",
      },
      icon: "🔐",
      gradient: "from-gray-500 to-slate-500",
    },
    {
      name: "Hamza Rustam",
      role: "ML/AI Engineer",
      expertise: "Data Analyst & ML Engineer",
      description:
        "Data Analyst & ML Engineer • Python, Pandas, NumPy, Matplotlib • Data Cleaning, Visualization & Machine Learning • Building intelligent solutions",
      skills: ["Python", "ML", "Data Analysis", "Scikit-Learn"],
      social: {
        github: "https://github.com/hamza-rustam",
        linkedin: "https://linkedin.com/in/hamza-rustam",
        email: "hamza@mentee.com",
      },
      icon: "🤖",
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  const milestones = [
    {
      year: "Feb 1, 2023",
      title: "Company Foundation",
      description:
        "MenteE was established with a mission to create privacy-first, secure digital solutions for the modern world.",
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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/20 to-gray-100 dark:from-slate-900 dark:via-amber-900/5 dark:to-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 dark:from-teal-500/10 dark:to-emerald-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-6xl mx-auto relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border border-amber-200 dark:border-amber-500/30 rounded-full text-amber-700 dark:text-amber-400 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                Privacy-First Innovation
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900 dark:text-white">Welcome to</span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                  MenteE
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Building secure, privacy-first digital solutions that prioritize
                <span className="text-amber-600 dark:text-amber-400 font-medium"> user control</span> and
                <span className="text-amber-600 dark:text-amber-400 font-medium"> data protection</span>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
                <a
                  href="https://docs-box-liart.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5"
                >
                  <Shield className="w-4 h-4" />
                  Try DocxBox
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://recru-ai-lime.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-amber-300 dark:hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5"
                >
                  <Rocket className="w-4 h-4 text-teal-500" />
                  RecruAI Beta
                </a>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-5 py-3.5 text-gray-600 dark:text-gray-400 font-medium rounded-xl hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  View All
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-10">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    2<span className="text-amber-500">+</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Products</div>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-slate-700" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    3<span className="text-amber-500">+</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Team Members</div>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-slate-700" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Est.<span className="text-amber-500"> 2023</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Founded</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Main card */}
                <motion.div
                  className="w-80 bg-white dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 shadow-2xl p-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl text-white">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">DocxBox</h3>
                      <p className="text-xs text-amber-600 dark:text-amber-400">Document Manager</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      AES-256 Encryption
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      OAuth 2.0 Auth
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      Offline-First
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">75% Secure</p>
                </motion.div>

                {/* Floating badge 1 */}
                <motion.div
                  className="absolute -top-6 -right-8 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700"
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-teal-500" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">RecruAI Beta</span>
                  </div>
                </motion.div>

                {/* Floating badge 2 */}
                <motion.div
                  className="absolute -bottom-4 -left-10 px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg"
                  animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-white" />
                    <span className="text-xs font-semibold text-white">Privacy-First</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 p-6 md:p-8 hover:shadow-amber-500/5 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-50 dark:bg-amber-500/10 rounded-xl">
                <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-amber-600 dark:text-amber-400">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              To democratize privacy and security by creating intuitive,
              enterprise-grade applications that put users in complete control
              of their digital assets.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 p-6 md:p-8 hover:shadow-amber-500/5 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-orange-50 dark:bg-orange-500/10 rounded-xl">
                <Lightbulb className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-xl font-bold text-orange-600 dark:text-orange-400">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              To become the global standard for privacy-first digital
              solutions, empowering individuals and organizations to protect
              their most sensitive information.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Innovative solutions designed with privacy, security, and user
              experience at their core
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 shadow-md hover:shadow-amber-500/10 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${product.gradient} text-white`}
                    >
                      {product.icon}
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        product.isComingSoon
                          ? "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30"
                          : product.isBeta
                          ? "bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-500/30"
                          : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-amber-600 dark:text-amber-400 text-xs font-medium mb-4">
                    {product.isHidden ? "---" : product.category}
                  </p>

                  {product.isHidden ? (
                    <div className="text-center py-8">
                      <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 mb-4">
                        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 rounded" />
                        <span className="text-xl">
                          {product.isComingSoon ? "🚧" : "⚡"}
                        </span>
                        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 rounded" />
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        Details will be revealed soon
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-xs"
                            >
                              <ChevronRight
                                size={14}
                                className="text-amber-500 mt-0.5 flex-shrink-0"
                              />
                              {feature.split(":")[0]}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {product.isBeta ? (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 text-sm w-full"
                        >
                          <Rocket className="w-4 h-4" />
                          Join Beta
                        </a>
                      ) : (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 text-sm w-full`}
                        >
                          Visit Website <ExternalLink size={14} />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/30">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="p-2.5 bg-amber-50 dark:bg-amber-500/10 rounded-xl">
                <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                Our Team
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate individuals dedicated to building the future of secure
              digital solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-500 hover:shadow-amber-500/10"
                whileHover={{ y: member.isPrivate ? 0 : -4 }}
              >
                {member.isPrivate ? (
                  <>
                    {/* Sleeping Partner Card */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,113,108,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(120,113,108,0.08),transparent_70%)]" />
                    {/* Lock pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M20 12a4 4 0 00-4 4v2h-2v12h12V18h-2v-2a4 4 0 00-4-4zm0 2a2 2 0 012 2v2h-4v-2a2 2 0 012-2zm-6 6h12v10H14V20z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
                    
                    <div className="relative p-6 flex flex-col items-center text-center">
                      {/* Lock Icon */}
                      <div className="relative mb-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-3xl opacity-60 shadow-inner">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-400 dark:text-gray-500 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-600 text-xs mb-4">
                        Sleeping Partner • Private Account • Identity Protected
                      </p>

                      {/* Encrypted message */}
                      <div className="w-full max-w-xs px-4 py-3 bg-gray-100 dark:bg-slate-800/80 rounded-xl border border-gray-200 dark:border-slate-700 mb-4">
                        <p className="text-xs text-gray-400 dark:text-gray-500 font-mono tracking-wider">
                          ████████████████████████████████
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 font-mono tracking-wider mt-1">
                          ████████████████████████████████
                        </p>
                      </div>

                      <p className="text-xs text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed">
                        Strategic investor focused on long-term growth. Identity kept private for security.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Regular Team Member Card */}
                    <div className={`h-1 bg-gradient-to-r ${member.gradient}`} />
                    <div className="p-6">
                      {/* Avatar & Info */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`relative w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl shadow-lg`}>
                          {member.icon
                            ? member.icon
                            : member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                            {member.name}
                          </h3>
                          <p className="text-amber-600 dark:text-amber-400 text-sm font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Expertise */}
                      <div className="px-3 py-2 bg-amber-50 dark:bg-amber-500/10 rounded-lg mb-4">
                        <p className="text-xs text-amber-700 dark:text-amber-300 font-medium leading-relaxed">
                          {member.expertise}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-4">
                        {member.description}
                      </p>

                      {/* Skills */}
                      {member.skills && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {member.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-xs text-gray-600 dark:text-gray-400 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Social Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800">
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          Connect
                        </span>
                        <div className="flex gap-2">
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 text-gray-500 dark:text-gray-400"
                          >
                            <Github size={16} />
                          </a>
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 text-gray-500 dark:text-gray-400"
                          >
                            <Linkedin size={16} />
                          </a>
                          <a
                            href={`mailto:${member.social.email}`}
                            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 text-gray-500 dark:text-gray-400"
                          >
                            <Mail size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Key milestones in MenteE's mission to revolutionize digital
              privacy and security
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-orange-500 to-transparent opacity-30" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-12 md:pl-16"
                >
                  <div
                    className={`absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-br ${
                      index === 0
                        ? "from-amber-500 to-orange-500"
                        : "from-orange-400 to-amber-400"
                    } ring-4 ring-white dark:ring-slate-900 z-10`}
                  />
                  <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 p-5 hover:shadow-amber-500/5 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-full text-amber-700 dark:text-amber-400 text-xs font-medium">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Interested in our products or want to learn more about privacy-first
            solutions?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://docs-box-liart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
            >
              Try DocxBox <ExternalLink size={18} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
            >
              Contact Us <Mail size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MenteE;
