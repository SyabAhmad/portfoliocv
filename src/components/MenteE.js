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
} from "lucide-react";

const MenteE = () => {
  const products = [
    {
      name: "DocxBox",
      category: "Privacy-First Document Management",
      description: "A revolutionary Android document manager that implements enterprise-grade security without compromising user experience. End-to-end encryption, passwordless auth, offline-first.",
      features: ["End-to-End AES-256 Encryption", "Passwordless OAuth 2.0 Auth", "Encrypted Google Drive Backup", "Offline-First Architecture", "OWASP-Compliant Design"],
      tech: "Kotlin, Jetpack Compose, Firebase Auth, Room DB, Google Drive API",
      status: "Available Now",
      link: "https://docs-box-liart.vercel.app/",
      icon: <Shield className="w-6 h-6" />,
      isComingSoon: false,
      isBeta: false,
      isHidden: false,
    },
    {
      name: "vidAI",
      category: "AI Video Enhancement",
      description: "---",
      features: ["---"],
      tech: "---",
      status: "Coming Soon",
      link: null,
      icon: <Smartphone className="w-6 h-6" />,
      isComingSoon: true,
      isHidden: true,
      isBeta: false,
    },
    {
      name: "RecruAI",
      category: "AI Recruitment Solutions",
      description: "AI-powered recruitment toolkit. Automated candidate screening, smart interview scheduling, and deep candidate insights for faster hiring decisions.",
      features: ["AI-Powered Candidate Screening", "Smart Interview Scheduling", "Automated Candidate Insights"],
      tech: "Python (Flask), PostgreSQL, React.js, NLP, Predictive Analytics",
      status: "Beta Launch",
      link: "https://recru-ai-lime.vercel.app",
      icon: <Cloud className="w-6 h-6" />,
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
      description: "Passionate about building secure, privacy-first applications that empower users while maintaining enterprise-grade security standards.",
      social: { github: "https://github.com/SyabAhmad", linkedin: "https://linkedin.com/in/syedsyab", email: "syedsyabahmadshah@gmail.com" },
      icon: "SSA",
    },
    {
      name: "Sania Shakeel",
      role: "Backend Engineer",
      expertise: "Python Developer & Data Scientist",
      description: "ML & Data Science Expert. Transforming data into meaningful insights. Specialized in scalable backend solutions.",
      skills: ["Python", "Data Science", "Backend", "PostgreSQL"],
      social: { github: "https://github.com/sania040", linkedin: "https://linkedin.com/in/saniashakeel", email: "sania@mentee.com" },
      icon: "SS",
    },
    {
      name: "MenteE",
      role: "Sleeping Partner",
      expertise: "Private Account",
      description: "Strategic investor focused on long-term growth and capital allocation. Identity kept private for security.",
      isPrivate: true,
      skills: ["Investment", "Strategy", "Capital"],
      social: { github: "#", linkedin: "#", email: "#" },
      icon: "🔐",
    },
    {
      name: "Hamza Rustam",
      role: "ML/AI Engineer",
      expertise: "Data Analyst & ML Engineer",
      description: "Python, Pandas, NumPy, Matplotlib. Data Cleaning, Visualization & Machine Learning. Building intelligent solutions.",
      skills: ["Python", "ML", "Data Analysis", "Scikit-Learn"],
      social: { github: "https://github.com/hamza-rustam", linkedin: "https://linkedin.com/in/hamza-rustam", email: "hamza@mentee.com" },
      icon: "HR",
    },
  ];

  const milestones = [
    { year: "Feb 2023", title: "Company Foundation", description: "MenteE was established with a mission to create privacy-first, secure digital solutions for the modern world." },
    { year: "May 2025", title: "DocxBox Launch", description: "Launched our flagship product, DocxBox, establishing MenteE as a leader in secure mobile document management." },
    { year: "Nov 2025", title: "Product Expansion", description: "Expanding our product line with additional privacy-focused applications and services." },
    { year: "Dec 2025", title: "RecruAI Beta Launch", description: "Launched RecruAI Beta bringing AI-powered recruitment solutions to organizations." },
  ];

  const cardRotations = [-2, 1.5, -1];
  const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500"];

  return (
    <div className="min-h-screen bg-stone-900 dark:bg-gray-950 text-stone-100 transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-4 overflow-hidden">
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

        {/* Floating orbs */}
        <motion.div className="absolute top-20 right-10 w-72 h-72 bg-rose-900/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 left-10 w-56 h-56 bg-slate-700/10 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

        <div className="max-w-6xl mx-auto relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <motion.div className="text-center lg:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              {/* Badge */}
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 border border-stone-700 rounded-full text-stone-400 text-sm font-handwriting mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
                </span>
                Privacy-First Innovation
              </motion.div>

              {/* Main Heading - big flyer style */}
              <motion.div className="relative inline-block mb-6" style={{ transform: "rotate(-1deg)" }}>
                <div className="absolute -top-3 left-[10%] w-24 h-6 bg-stone-400/40 rotate-[-6deg] rounded-sm" />
                <div className="absolute -top-2 right-[15%] w-16 h-5 bg-stone-400/30 rotate-[4deg] rounded-sm" />
                <div className="absolute -top-1.5 left-[30%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-handwriting tracking-wide text-stone-100">
                  MenteE
                </h1>
              </motion.div>

              <p className="text-lg md:text-xl text-stone-400 mb-8 max-w-xl mx-auto lg:mx-0 font-handwriting">
                Building <span className="text-stone-200 font-bold">secure, privacy-first</span> digital solutions that prioritize user control and data protection.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
                <motion.a href="https://docs-box-liart.vercel.app/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, rotate: 1 }} className="group inline-flex items-center gap-2 px-7 py-3.5 bg-stone-800 text-stone-100 font-bold rounded-full hover:bg-stone-700 transition-all duration-300 hover:shadow-xl font-handwriting">
                  <Shield className="w-4 h-4" /> Try DocxBox <ExternalLink size={16} />
                </motion.a>
                <motion.a href="https://recru-ai-lime.vercel.app/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, rotate: -1 }} className="group inline-flex items-center gap-2 px-7 py-3.5 border-2 border-stone-500 text-stone-300 font-bold rounded-full hover:bg-stone-800 transition-all duration-300 font-handwriting">
                  <Rocket className="w-4 h-4" /> RecruAI Beta
                </motion.a>
                <Link to="/projects" className="inline-flex items-center gap-1 text-stone-500 font-handwriting hover:text-stone-300 transition-colors">
                  View All <ChevronRight size={16} />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-10">
                {[
                  { value: "2+", label: "Products" },
                  { value: "3+", label: "Team Members" },
                  { value: "Est. 2023", label: "Founded" },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="w-px h-10 bg-stone-700" />}
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-stone-100 font-handwriting">{s.value}</div>
                      <div className="text-xs text-stone-500 mt-1 font-handwriting">{s.label}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual - stacked flyers */}
            <motion.div className="hidden lg:flex items-center justify-center" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
              <div className="relative">
                {/* Back flyer */}
                <motion.div className="absolute -top-4 -right-8 w-72 bg-stone-800 border border-stone-700 rounded-sm shadow-xl p-5" style={{ transform: "rotate(3deg)" }} animate={{ y: [0, -8, 0], rotate: [3, 4, 3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="absolute -top-2 left-[20%] w-12 h-4 bg-stone-400/40 rotate-[-3deg] rounded-sm" />
                  <div className="absolute -top-1.5 right-[15%] w-2 h-2 bg-slate-500 rounded-full shadow" />
                  <div className="flex items-center gap-2 mb-3">
                    <Rocket className="w-4 h-4 text-rose-400" />
                    <span className="text-xs font-bold text-stone-200 font-handwriting">RecruAI Beta</span>
                  </div>
                  <p className="text-[10px] text-stone-500 font-handwriting">AI-powered recruitment. Coming soon.</p>
                </motion.div>

                {/* Main flyer */}
                <motion.div className="relative w-80 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-2xl shadow-black/40 p-6" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="absolute -top-3 left-[15%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm shadow-sm" />
                  <div className="absolute -top-2 right-[20%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-stone-800 rounded-lg text-stone-200">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 dark:text-stone-100 font-handwriting">DocxBox</h3>
                      <p className="text-xs text-stone-500 font-handwriting">Document Manager</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {["AES-256 Encryption", "OAuth 2.0 Auth", "Offline-First"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400 font-handwriting">
                        <div className="w-1.5 h-1.5 bg-rose-600 rounded-full" />{f}
                      </div>
                    ))}
                  </div>
                  <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-stone-800 dark:bg-stone-200 rounded-full" />
                  </div>
                  <p className="text-xs text-stone-500 mt-2 font-handwriting">75% Secure</p>
                </motion.div>

                {/* Bottom sticker */}
                <motion.div className="absolute -bottom-4 -left-10 px-4 py-2 bg-rose-800 text-stone-100 rounded-full shadow-lg font-handwriting text-xs font-bold" animate={{ y: [0, -6, 0], rotate: [-5, -3, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                  <Zap className="w-3 h-3 inline mr-1" /> Privacy-First
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Flyer cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { icon: <Target className="w-6 h-6" />, title: "Our Mission", text: "To democratize privacy and security by creating intuitive, enterprise-grade applications that put users in complete control of their digital assets.", rotate: -1.5, pin: "bg-rose-800" },
            { icon: <Lightbulb className="w-6 h-6" />, title: "Our Vision", text: "To become the global standard for privacy-first digital solutions, empowering individuals and organizations to protect their most sensitive information.", rotate: 1, pin: "bg-slate-500" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30, rotate: item.rotate }} whileInView={{ opacity: 1, y: 0, rotate: item.rotate }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ scale: 1.03, rotate: 0 }} className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 p-6 md:p-8 rounded-sm shadow-xl shadow-black/30" style={{ transform: `rotate(${item.rotate}deg)` }}>
              <div className="absolute -top-2.5 left-[20%] w-14 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm" />
              <div className={`absolute -top-1.5 right-[15%] w-2.5 h-2.5 ${item.pin} rounded-full shadow border border-black/20 z-10`} />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-stone-200 dark:bg-stone-700 rounded-lg text-stone-500">{item.icon}</div>
                <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-handwriting">{item.title}</h2>
              </div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm font-handwriting">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products - Flyer cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-stone-100 font-handwriting" style={{ transform: "rotate(-0.5deg)" }}>Our Products</h2>
            <p className="text-stone-500 max-w-2xl mx-auto font-handwriting">Innovative solutions designed with privacy, security, and user experience at their core</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {products.filter(p => !p.isHidden).map((product, index) => {
              const rot = cardRotations[index % cardRotations.length];
              const pinColor = pinColors[index % pinColors.length];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ scale: 1.03, rotate: 0 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                  <div className="absolute -top-2.5 left-[15%] w-14 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm z-10" />
                  <div className={`absolute -top-1.5 right-[12%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                  <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/30 p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 bg-stone-800 dark:bg-stone-200 rounded-lg text-stone-200 dark:text-stone-800">{product.icon}</div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-handwriting ${product.isBeta ? "bg-rose-800/20 text-rose-300 border border-rose-700/30" : product.isComingSoon ? "bg-stone-200 dark:bg-stone-700 text-stone-500 border border-stone-300 dark:border-stone-600" : "bg-green-900/20 text-green-400 border border-green-700/30"}`}>
                        {product.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-1 font-handwriting">{product.name}</h3>
                    <p className="text-stone-500 text-xs font-handwriting mb-3">{product.category}</p>

                    {product.isComingSoon ? (
                      <div className="text-center py-8">
                        <p className="text-stone-500 text-sm font-handwriting">Details revealed soon</p>
                      </div>
                    ) : (
                      <>
                        <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed mb-4 font-handwriting">{product.description}</p>

                        <div className="mb-4">
                          <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2 font-handwriting">Key Features</h4>
                          <ul className="space-y-1.5">
                            {product.features.slice(0, 3).map((f, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-stone-600 dark:text-stone-400 text-xs font-handwriting">
                                <ChevronRight size={12} className="text-stone-500 mt-0.5 flex-shrink-0" />{f.split(":")[0]}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a href={product.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 w-full rounded-full font-bold text-sm transition-all duration-300 font-handwriting ${product.isBeta ? "bg-rose-800 text-stone-100 hover:bg-rose-700" : "bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-300"}`}>
                          {product.isBeta ? <><Rocket className="w-4 h-4" /> Join Beta</> : <><ExternalLink size={14} /> Visit Website</>}
                        </a>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team - Flyer cards */}
      <section className="py-16 px-4 bg-stone-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users className="w-6 h-6 text-stone-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-stone-100 font-handwriting">Our Team</h2>
            </div>
            <p className="text-stone-500 max-w-2xl mx-auto font-handwriting">Passionate individuals building the future of secure digital solutions</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {team.map((member, index) => {
              const rot = cardRotations[index % cardRotations.length];
              const pinColor = pinColors[index % pinColors.length];

              if (member.isPrivate) {
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                    <div className="absolute -top-2.5 left-[15%] w-14 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm z-10" />
                    <div className={`absolute -top-1.5 right-[12%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />
                    <div className="relative bg-stone-800 border border-stone-700 rounded-sm shadow-xl p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-700 flex items-center justify-center text-2xl opacity-60">🔐</div>
                      <h3 className="text-lg font-bold text-stone-400 mb-1 font-handwriting">{member.name}</h3>
                      <p className="text-stone-600 text-xs mb-3 font-handwriting">Sleeping Partner · Private · Identity Protected</p>
                      <div className="w-full max-w-xs mx-auto px-4 py-3 bg-stone-900 rounded-lg border border-stone-700 mb-3">
                        <p className="text-xs text-stone-600 font-mono tracking-wider">████████████████████████████</p>
                      </div>
                      <p className="text-xs text-stone-600 font-handwriting">Strategic investor focused on long-term growth.</p>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.02, rotate: 0 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                  <div className="absolute -top-2.5 left-[15%] w-14 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm z-10" />
                  <div className={`absolute -top-1.5 right-[12%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                  <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/30 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-stone-800 dark:bg-stone-200 flex items-center justify-center text-stone-200 dark:text-stone-800 font-bold font-handwriting text-lg shadow-lg">{member.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-handwriting">{member.name}</h3>
                        <p className="text-stone-500 text-sm font-handwriting">{member.role}</p>
                      </div>
                    </div>

                    <div className="px-3 py-2 bg-stone-200 dark:bg-stone-700 rounded-lg mb-3">
                      <p className="text-xs text-stone-600 dark:text-stone-300 font-medium font-handwriting">{member.expertise}</p>
                    </div>

                    <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed mb-4 font-handwriting">{member.description}</p>

                    {member.skills && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.skills.map((skill, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-[10px] text-stone-600 dark:text-stone-300 font-handwriting">{skill}</span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-stone-200 dark:border-stone-700">
                      <span className="text-xs text-stone-500 font-handwriting">Connect</span>
                      <div className="flex gap-2">
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-all"><Github size={14} /></a>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-all"><Linkedin size={14} /></a>
                        <a href={`mailto:${member.social.email}`} className="p-2 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-all"><Mail size={14} /></a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-stone-100 font-handwriting" style={{ transform: "rotate(-0.5deg)" }}>Our Journey</h2>
            <p className="text-stone-500 font-handwriting">Key milestones in MenteE's mission to revolutionize digital privacy</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-stone-700 opacity-40" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20, rotate: cardRotations[i % cardRotations.length] }} whileInView={{ opacity: 1, x: 0, rotate: cardRotations[i % cardRotations.length] }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.02, rotate: 0 }} className="relative pl-12 md:pl-16" style={{ transform: `rotate(${cardRotations[i % cardRotations.length]}deg)` }}>
                  <div className={`absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full ${i === 0 ? "bg-rose-800" : "bg-stone-500"} ring-4 ring-stone-900 z-10`} />
                  <div className="absolute -top-2.5 left-[15%] w-12 h-4 bg-stone-400/40 rotate-[-3deg] rounded-sm z-10" />
                  <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm p-5 shadow-lg">
                    <span className="inline-block px-2.5 py-0.5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-stone-600 dark:text-stone-300 text-xs font-handwriting mb-2">{m.year}</span>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">{m.title}</h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed font-handwriting">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Big flyer */}
      <section className="py-16 px-4">
        <motion.div className="max-w-3xl mx-auto text-center relative" initial={{ opacity: 0, y: 30, rotate: -1 }} whileInView={{ opacity: 1, y: 0, rotate: -1 }} viewport={{ once: true }} style={{ transform: "rotate(-1deg)" }}>
          <div className="absolute -top-3 left-[20%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm shadow-sm z-10" />
          <div className="absolute -top-3 right-[20%] w-16 h-5 bg-stone-400/40 rotate-[3deg] rounded-sm shadow-sm z-10" />
          <div className="absolute -top-2 left-[45%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

          <div className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-2xl shadow-black/40 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100 font-handwriting">Get in Touch</h2>
            <p className="text-stone-500 mb-8 font-handwriting">Interested in our products or want to learn more about privacy-first solutions?</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <motion.a href="https://docs-box-liart.vercel.app/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold rounded-full hover:shadow-lg transition-all duration-300 font-handwriting">
                Try DocxBox <ExternalLink size={16} />
              </motion.a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-400 text-stone-300 font-bold rounded-full hover:bg-stone-800 transition-all duration-300 font-handwriting">
                Contact Us <Mail size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MenteE;
