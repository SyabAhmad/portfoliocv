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

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-200 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span className="text-sm font-medium text-rose-700 font-handwriting">Privacy-First Innovation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 font-heading mb-6">
              MenteE
            </h1>

            <p className="text-lg md:text-xl text-stone-500 mb-8 max-w-2xl font-handwriting leading-relaxed">
              Building <strong className="text-stone-700">secure, privacy-first</strong> digital solutions that prioritize user control and data protection.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="https://docs-box-liart.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 font-bold rounded-lg font-heading">
                <Shield className="w-4 h-4" /> Try DocxBox <ExternalLink size={14} />
              </a>
              <a href="https://recru-ai-lime.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-300 text-stone-600 font-bold rounded-lg font-heading">
                <Rocket className="w-4 h-4" /> RecruAI Beta
              </a>
            </div>

            <div className="flex items-center gap-8">
              {[
                { value: "2+", label: "Products" },
                { value: "3+", label: "Team Members" },
                { value: "Est. 2023", label: "Founded" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-stone-900 font-heading">{s.value}</div>
                  <div className="text-xs text-stone-400 font-handwriting">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between flex-wrap gap-3">
            <p className="text-amber-800 font-medium font-handwriting">
              Visit the official MenteE website{" "}
              <a href="https://menteeai.org" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-amber-900">here</a>
            </p>
            <a href="https://menteeai.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-amber-700 hover:text-amber-900">
              menteeai.org <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { icon: <Target className="w-5 h-5" />, title: "Our Mission", text: "To democratize privacy and security by creating intuitive, enterprise-grade applications that put users in complete control of their digital assets." },
            { icon: <Lightbulb className="w-5 h-5" />, title: "Our Vision", text: "To become the global standard for privacy-first digital solutions, empowering individuals and organizations to protect their most sensitive information." },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-stone-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-stone-100 rounded-lg text-stone-500">{item.icon}</div>
                <h2 className="text-lg font-bold text-stone-900 font-heading">{item.title}</h2>
              </div>
              <p className="text-stone-500 leading-relaxed text-sm font-handwriting">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-stone-900 font-heading mb-2">Our Products</h2>
            <p className="text-stone-500 font-handwriting">Solutions built with privacy and security at their core.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {products.filter(p => !p.isHidden).map((product, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-stone-50 border border-stone-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-stone-900 rounded-lg text-stone-200">{product.icon}</div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-handwriting ${product.isBeta ? "bg-rose-50 text-rose-700 border border-rose-200" : product.isComingSoon ? "bg-stone-100 text-stone-500 border border-stone-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-1 font-heading">{product.name}</h3>
                <p className="text-stone-500 text-xs font-handwriting mb-3">{product.category}</p>

                {product.isComingSoon ? (
                  <div className="text-center py-6">
                    <p className="text-stone-400 text-sm font-handwriting">Details revealed soon</p>
                  </div>
                ) : (
                  <>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 font-handwriting">{product.description}</p>

                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 font-handwriting">Key Features</h4>
                      <ul className="space-y-1.5">
                        {product.features.slice(0, 3).map((f, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-stone-600 text-sm font-handwriting">
                            <span className="text-stone-400 mt-0.5">✓</span>{f.split(":")[0]}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a href={product.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 w-full rounded-lg font-bold text-sm font-heading ${product.isBeta ? "bg-rose-700 text-white" : "bg-stone-900 text-stone-50"}`}>
                      {product.isBeta ? <><Rocket className="w-4 h-4" /> Join Beta</> : <><ExternalLink size={14} /> Visit Website</>}
                    </a>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-stone-400" />
              <h2 className="text-3xl font-bold text-stone-900 font-heading">Our Team</h2>
            </div>
            <p className="text-stone-500 font-handwriting">Passionate individuals building the future of secure digital solutions.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {team.map((member, index) => {
              if (member.isPrivate) {
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-stone-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-stone-100 flex items-center justify-center text-2xl opacity-60">🔐</div>
                    <h3 className="text-lg font-bold text-stone-400 mb-1 font-heading">{member.name}</h3>
                    <p className="text-stone-400 text-xs mb-3 font-handwriting">Sleeping Partner · Private · Identity Protected</p>
                    <div className="w-full max-w-xs mx-auto px-4 py-3 bg-stone-50 rounded-lg border border-stone-100 mb-3">
                      <p className="text-xs text-stone-400 font-mono tracking-wider">████████████████████████████</p>
                    </div>
                    <p className="text-xs text-stone-400 font-handwriting">Strategic investor focused on long-term growth.</p>
                  </motion.div>
                );
              }

              return (
                <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-stone-900 flex items-center justify-center text-stone-200 font-bold font-heading text-sm">{member.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 font-heading">{member.name}</h3>
                      <p className="text-stone-500 text-sm font-handwriting">{member.role}</p>
                    </div>
                  </div>

                  <div className="px-3 py-2 bg-stone-50 rounded-lg mb-3">
                    <p className="text-xs text-stone-600 font-medium font-handwriting">{member.expertise}</p>
                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed mb-4 font-handwriting">{member.description}</p>

                  {member.skills && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-stone-100 rounded-full text-xs text-stone-600 font-handwriting">{skill}</span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-3 border-t border-stone-100">
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-stone-50 text-stone-400"><Github size={14} /></a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-stone-50 text-stone-400"><Linkedin size={14} /></a>
                    <a href={`mailto:${member.social.email}`} className="p-2 rounded-lg bg-stone-50 text-stone-400"><Mail size={14} /></a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-stone-900 font-heading mb-2">Our Journey</h2>
            <p className="text-stone-500 font-handwriting">Key milestones in MenteE's mission.</p>
          </motion.div>

          <div className="space-y-4">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-stone-50 border border-stone-100 rounded-xl p-5">
                <span className="inline-block px-2.5 py-0.5 bg-stone-100 rounded-full text-stone-500 text-xs font-handwriting mb-2">{m.year}</span>
                <h3 className="text-lg font-bold text-stone-900 mb-1 font-heading">{m.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-handwriting">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-stone-900 font-heading mb-4">Get in Touch</h2>
            <p className="text-stone-500 mb-8 font-handwriting">Interested in our products or want to learn more about privacy-first solutions?</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://docs-box-liart.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 font-bold rounded-lg font-heading">
                Try DocxBox <ExternalLink size={14} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-300 text-stone-600 font-bold rounded-lg font-heading">
                Contact Us <Mail size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default MenteE;
