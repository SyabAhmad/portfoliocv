import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaRocket, FaShieldAlt, FaChartLine, FaCogs, FaBrain, FaGlobe, FaMobileAlt, FaDatabase, FaCloud, FaBolt, FaPuzzlePiece, FaUsers, FaBriefcase, FaCheckCircle } from "react-icons/fa";
import SEO from "./SEO";

const rotations = [-2, 1.5, -1, 2.5, -1.8, 1.2, -2.2];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600", "bg-stone-600", "bg-rose-900"];

const packages = [
  {
    name: "Starter",
    price: "$2,500",
    period: "one-time",
    description: "Perfect for establishing your digital presence with a professional website.",
    features: [
      "Responsive Business Website",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Mobile-First Design",
      "1 Round Revisions",
      "3-Day Delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$5,900",
    period: "one-time",
    description: "Full-stack web application with AI capabilities and data integration.",
    features: [
      "Custom Full-Stack Web App",
      "AI/ML Integration",
      "Database Design & Setup",
      "User Authentication",
      "Admin Dashboard",
      "API Development",
      "Up to 15 Pages",
      "3 Rounds Revisions",
      "7-Day Delivery",
      "30-Day Support",
    ],
    cta: "Start Project",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$12,000+",
    period: "one-time",
    description: "Complex systems, multi-platform AI solutions, and ongoing engineering partnership.",
    features: [
      "Custom AI/ML Pipeline",
      "Multi-Service Architecture",
      "Cloud Deployment & DevOps",
      "Ongoing Maintenance",
      "Priority Support",
      "Scalable Infrastructure",
      "Up to 30 Pages / Features",
      "Unlimited Revisions",
      "14-Day Delivery",
      "90-Day Support",
      "Monthly Retainer Option",
    ],
    cta: "Book Consultation",
    highlighted: false,
  },
];

const services = [
  {
    icon: <FaGlobe />,
    title: "I BUILD THIS",
    subtitle: "Full-Stack Web Applications",
    description: "From React frontends to Python backends, I engineer complete web products that actually work — not just layouts, but systems that scale.",
    capabilities: ["React / Next.js", "FastAPI / Django / Flask", "PostgreSQL / MongoDB", "Cloud Deployment", "CI/CD Pipelines"],
  },
  {
    icon: <FaBrain />,
    title: "I BUILD THIS",
    subtitle: "AI & Machine Learning Solutions",
    description: "Real AI systems — not demos. RAG pipelines, computer vision, NLP, LLM integrations, and custom ML models trained on your data.",
    capabilities: ["LLM Integration (Groq, OpenAI)", "RAG Pipelines", "Computer Vision (YOLOv8)", "NLP & Text Analysis", "Custom Model Training"],
  },
  {
    icon: <FaMobileAlt />,
    title: "I BUILD THIS",
    subtitle: "Mobile Applications",
    description: "Native Android apps with enterprise-grade security, offline-first architecture, and modern UI — built with Kotlin and Jetpack Compose.",
    capabilities: ["Android (Kotlin/Java)", "Jetpack Compose", "Firebase Backend", "End-to-End Encryption", "Offline-First Design"],
  },
  {
    icon: <FaDatabase />,
    title: "I BUILD THIS",
    subtitle: "Data Engineering & Pipelines",
    description: "ETL pipelines, data preprocessing, vector databases, and analytics infrastructure that turns raw data into actionable business intelligence.",
    capabilities: ["ETL Pipeline Design", "Data Preprocessing", "Vector Search (Pinecone/Qdrant)", "Python (Pandas/NumPy)", "Automated Data Ops"],
  },
  {
    icon: <FaBolt />,
    title: "I BUILD THIS",
    subtitle: "Generative AI & Automation",
    description: "AI agents, voice assistants, document automation, and workflow tools that eliminate manual work and accelerate your team.",
    capabilities: ["AI Voice Agents (Retell)", "Document AI (DOCX/PDF)", "Workflow Automation", "Chatbots & Assistants", "Prompt Engineering"],
  },
  {
    icon: <FaPuzzlePiece />,
    title: "I BUILD THIS",
    subtitle: "Design & Architecture Services",
    description: "BIM modeling, CAD drafting, and 3D visualization for architecture, interior design, and product concepts — Revit, AutoCAD, SketchUp.",
    capabilities: ["Revit BIM Modeling", "AutoCAD Drafting", "SketchUp 3D Viz", "Floor Plans & Sections", "Client Presentation Renders"],
  },
];

const problems = [
  {
    problem: "Manual document translation is slow, expensive, and error-prone for your multilingual business.",
    solution: " I BUILT an automated DOCX translation pipeline that translates Chinese research papers and technical documents into English using LLMs — preserving structure, images, and formatting. 668/668 blocks translated, zero data loss.",
    result: "90%+ cost reduction vs. manual translation. Batch process entire documents in minutes.",
    tech: "Python, Groq API, python-docx, LangChain",
  },
  {
    problem: "Your recruitment process is slow, manual, and misses top candidates.",
    solution: " I BUILT RecruAI — an AI-powered recruitment toolkit that automates candidate screening, generates interview questions, scores resumes, and schedules interviews. Built for teams that hire at scale.",
    result: "70% faster screening, 40% better candidate match rate.",
    tech: "React, Supabase, Groq API, NLP",
  },
  {
    problem: "Your team wastes hours on repetitive data entry, cleaning, and validation.",
    solution: " I BUILT automated data preprocessing pipelines that import, clean, validate, and export data — handling what used to take days in minutes.",
    result: "80% reduction in prep time. Reproducible, auditable, and versioned.",
    tech: "Python, Pandas, Scikit-Learn, PyPI",
  },
  {
    problem: "Your e-commerce platform has no AI — you're guessing what customers want.",
    solution: " I BUILT intelligent e-commerce systems with AI-powered search, personalized recommendations, and automated inventory management — not just storefronts, but smart business engines.",
    result: "35% higher conversion, 50% fewer manual inventory tasks.",
    tech: "React, Node.js, MongoDB, Stripe, AI APIs",
  },
  {
    problem: "Your school or facility has no automated monitoring — security depends on human eyes.",
    solution: " I BUILT CamWatch — an AI-powered surveillance system that detects weapons in real-time using YOLOv8 and generates natural language descriptions of camera feeds using vision-language models.",
    result: "Instant threat detection, 24/7 automated monitoring, zero false alarm fatigue.",
    tech: "YOLOv8, SmolVLM-500, LLaMA.cpp, Python",
  },
  {
    problem: "Your documents are scattered, unsearchable, and hard to share securely.",
    solution: " I BUILT DocxBox — a privacy-first document manager with end-to-end encryption, passwordless auth, and encrypted cloud backup. Enterprise-grade security without the complexity.",
    result: "Zero-knowledge encryption. SOC 2–aligned design. GDPR-ready architecture.",
    tech: "Kotlin, Jetpack Compose, Firebase, AES-256",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We sit down, understand your business, your customers, and your goals. No assumptions — just discovery.",
  },
  {
    number: "02",
    title: "Plan",
    description: "I map out the architecture, tech stack, and timeline. You approve before a single line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    description: "I engineer the solution — clean code, proper architecture, and regular updates so you can see progress in real time.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Deployment, testing, and ongoing support. I don't disappear after delivery — your success is my reputation.",
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <SEO
        title="Services - Syed Syab Ahmad | AI Engineer & Full-Stack Developer"
        description="I build AI-powered web applications, ML systems, mobile apps, and data pipelines. From Starter to Enterprise — choose the package that fits your business."
        keywords="hire AI engineer, full-stack developer for hire, ML development service, web application development, AI consulting"
        url="https://syab.tech/services"
      />

      <div className="min-h-screen bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-100 mb-6 font-handwriting"
              style={{ transform: "rotate(-1deg)" }}
            >
              I Build What Your Business Needs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg sm:text-xl text-stone-400 max-w-3xl mx-auto font-handwriting"
            >
              AI Engineer, Full-Stack Developer, and Problem Solver — I turn complex business challenges into working software that delivers real results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              <a href="#services" className="px-8 py-3 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-handwriting text-lg cursor-pointer">
                See What I Build
              </a>
              <a href="#problems" className="px-8 py-3 border-2 border-stone-500 text-stone-300 font-bold rounded-full hover:bg-stone-700 hover:text-white transition-all duration-300 font-handwriting text-lg cursor-pointer">
                Problems I Solve
              </a>
              <a href="#pricing" className="px-8 py-3 bg-rose-800 text-stone-100 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-handwriting text-lg cursor-pointer">
                Choose a Package
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-stone-100 mb-3 font-handwriting"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              I BUILD THIS
            </motion.h2>
            <p className="text-center text-stone-500 max-w-2xl mx-auto mb-12 font-handwriting">
              Every service below is a real capability — I've built these systems, not just read about them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => {
                const rot = rotations[i % rotations.length];
                const pin = pinColors[i % pinColors.length];
                const isExpanded = expandedService === i;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, rotate: rot }}
                    whileInView={{ opacity: 1, y: 0, rotate: rot }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    whileHover={{ scale: 1.03, rotate: 0 }}
                    className="relative bg-stone-100 dark:bg-stone-800 rounded-sm border border-stone-200 dark:border-stone-700 shadow-xl shadow-black/30 p-6 cursor-pointer"
                    style={{ transform: `rotate(${rot}deg)` }}
                    onClick={() => setExpandedService(isExpanded ? null : i)}
                  >
                    <div className="absolute -top-2.5 left-[15%] w-14 h-5 bg-stone-400/40 rounded-sm shadow-sm" style={{ transform: `rotate(${-rot * 1.5}deg)` }} />
                    <div className={`absolute -top-1.5 right-[15%] w-3 h-3 ${pin} rounded-full shadow border border-black/20 z-10`} />

                    <div className="text-3xl mb-3 text-stone-500">{svc.icon}</div>
                    <h3 className="text-sm font-bold text-rose-700 dark:text-rose-400 font-handwriting mb-1">{svc.title}</h3>
                    <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">{svc.subtitle}</h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed font-handwriting mb-3">{svc.description}</p>

                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="pt-3 border-t border-stone-200 dark:border-stone-700">
                        <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 font-handwriting">Capabilities</p>
                        <div className="flex flex-wrap gap-1.5">
                          {svc.capabilities.map((cap, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-[10px] text-stone-600 dark:text-stone-300 font-handwriting">{cap}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-1 text-xs text-stone-500 font-handwriting">
                      {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                      {isExpanded ? " Click to collapse" : " Click to expand"}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problems I Solve */}
        <section id="problems" className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-800/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-stone-100 mb-3 font-handwriting"
              style={{ transform: "rotate(0.5deg)" }}
            >
              I SOLVED THIS BUSINESS PROBLEM
            </motion.h2>
            <p className="text-center text-stone-500 max-w-2xl mx-auto mb-12 font-handwriting">
              Every project below is a real business challenge I've addressed with working software.
            </p>

            <div className="space-y-6">
              {problems.map((item, i) => {
                const rot = rotations[i % rotations.length];
                const pin = pinColors[i % pinColors.length];
                const isExpanded = expandedProblem === i;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, rotate: rot }}
                    whileInView={{ opacity: 1, y: 0, rotate: rot }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="relative bg-stone-100 dark:bg-stone-800 rounded-sm border border-stone-200 dark:border-stone-700 shadow-lg p-6 md:p-8"
                    style={{ transform: `rotate(${rot}deg)` }}
                  >
                    <div className="absolute -top-2.5 left-[12%] w-14 h-5 bg-stone-400/40 rounded-sm shadow-sm" style={{ transform: `rotate(${-rot * 1.5}deg)` }} />
                    <div className={`absolute -top-1.5 right-[12%] w-3 h-3 ${pin} rounded-full shadow border border-black/20 z-10`} />

                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-red-600 dark:text-red-400 mb-2 font-handwriting flex items-center gap-2">
                          <FaChevronDown size={10} /> Business Problem
                        </h4>
                        <p className="text-stone-700 dark:text-stone-300 font-handwriting text-sm leading-relaxed">{item.problem}</p>
                      </div>
                    </div>

                    <div className="border-l-2 border-stone-300 dark:border-stone-600 pl-4 mb-4">
                      <h4 className="text-sm font-bold text-green-600 dark:text-green-400 mb-2 font-handwriting flex items-center gap-2">
                        <FaCheckCircle size={10} /> What I Built & Solved
                      </h4>
                      <p className="text-stone-700 dark:text-stone-300 font-handwriting text-sm leading-relaxed">{item.solution}</p>
                    </div>

                    <div className="bg-stone-200 dark:bg-stone-700 rounded-sm p-3 border border-stone-300 dark:border-stone-600">
                      <p className="text-xs font-bold text-stone-600 dark:text-stone-300 mb-1 font-handwriting">Result</p>
                      <p className="text-stone-800 dark:text-stone-200 font-handwriting text-sm">{item.result}</p>
                      <p className="text-[10px] text-stone-500 mt-2 font-mono font-handwriting">{item.tech}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-stone-100 mb-3 font-handwriting"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              Choose Your Package
            </motion.h2>
            <p className="text-center text-stone-500 max-w-2xl mx-auto mb-12 font-handwriting">
              Transparent pricing, no hidden fees. Pick the plan that matches your project scope.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {packages.map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, rotate: rotations[i % rotations.length] }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.04, rotate: 0 }}
                  className={`relative rounded-sm border shadow-xl p-6 md:p-8 ${
                    pkg.highlighted
                      ? "bg-stone-800 border-rose-600 border-2"
                      : "bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700"
                  }`}
                  style={pkg.highlighted ? {} : { transform: `rotate(${rotations[i % rotations.length]}deg)` }}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-rose-600 text-white text-xs font-bold rounded-full font-handwriting">
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-1 font-handwriting">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-3xl md:text-4xl font-bold font-handwriting ${pkg.highlighted ? "text-stone-100" : "text-stone-900 dark:text-stone-100"}`}>{pkg.price}</span>
                    <span className={`text-sm font-handwriting ${pkg.highlighted ? "text-stone-400" : "text-stone-500"}`}>{pkg.period}</span>
                  </div>
                  <p className={`text-sm font-handwriting mb-6 ${pkg.highlighted ? "text-stone-400" : "text-stone-600 dark:text-stone-400"}`}>{pkg.description}</p>

                  <ul className="space-y-2.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-handwriting">
                        <FaCheckCircle className={`mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-rose-400" : "text-stone-500"}`} size={14} />
                        <span className={pkg.highlighted ? "text-stone-300" : "text-stone-700 dark:text-stone-300"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-full font-bold font-handwriting text-sm transition-all duration-300 cursor-pointer ${
                      pkg.highlighted
                        ? "bg-rose-600 text-white shadow-lg hover:bg-rose-700"
                        : "bg-stone-800 text-stone-100 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-900"
                    }`}
                  >
                    {pkg.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-800/30">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-stone-100 mb-12 font-handwriting"
              style={{ transform: "rotate(0.5deg)" }}
            >
              How I Work
            </motion.h2>

            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-stone-700 opacity-40" />

              <div className="space-y-8 md:space-y-12">
                {processSteps.map((step, i) => {
                  const rot = rotations[i % rotations.length];
                  const pin = pinColors[i % pinColors.length];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30, rotate: rot }}
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      className="relative pl-16 md:pl-20"
                      style={{ transform: `rotate(${rot}deg)` }}
                    >
                      <div className={`absolute left-4 md:left-6 top-8 w-5 h-5 rounded-full ${pin} ring-4 ring-stone-900 z-10`} />

                      <div className="relative bg-stone-100 dark:bg-stone-800 rounded-sm border border-stone-200 dark:border-stone-700 shadow-lg p-5 md:p-6" style={{ transform: `rotate(${-rot}deg)` }}>
                        <div className="absolute -top-2.5 left-[12%] w-14 h-5 bg-stone-400/40 rounded-sm shadow-sm" style={{ transform: `rotate(${rot * 2}deg)` }} />
                        <div className={`absolute -top-1.5 right-[10%] w-2.5 h-2.5 ${pin} rounded-full shadow border border-black/20 z-10`} />

                        <span className="text-xs font-bold text-stone-400 font-handwriting mb-2 block">STEP {step.number}</span>
                        <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">{step.title}</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed font-handwriting">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              className="relative bg-stone-100 dark:bg-stone-800 rounded-sm shadow-2xl shadow-black/40 p-8 md:p-12 border border-stone-200 dark:border-stone-700"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="absolute -top-3 left-[20%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm shadow-sm" />
              <div className="absolute -top-3 right-[20%] w-16 h-5 bg-stone-400/40 rotate-[3deg] rounded-sm shadow-sm" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4 font-handwriting">
                Ready to Get Started?
              </h2>
              <p className="text-stone-600 dark:text-stone-300 text-sm mb-8 font-handwriting max-w-lg mx-auto">
                Pick a package below or send me a message — I'll respond within 24 hours with a tailored proposal.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/contact" className="px-8 py-3 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-handwriting cursor-pointer flex items-center gap-2">
                  <FaShieldAlt size={16} /> Hire Me
                </a>
                <a href="https://calendly.com/syedsyab/new-meeting" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-rose-800 text-stone-100 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-handwriting cursor-pointer flex items-center gap-2">
                  <FaBriefcase size={16} /> Book a Call
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;