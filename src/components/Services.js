import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import CTASection from "./CTASection";

const packages = [
  {
    name: "Starter",
    price: "$2,500",
    period: "one-time",
    description: "Professional website for your business — fast, clean, and live in 3 days.",
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
    description: "Full-stack web app with AI capabilities — the package most clients choose.",
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
    description: "Complex systems, multi-platform AI, and ongoing engineering partnership.",
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
    title: "Full-Stack Web Applications",
    description: "From React frontends to Python backends — complete web products that scale.",
    capabilities: ["React / Next.js", "FastAPI / Django / Flask", "PostgreSQL / MongoDB", "Cloud Deployment", "CI/CD Pipelines"],
  },
  {
    title: "AI & Machine Learning Solutions",
    description: "Real AI systems — RAG pipelines, computer vision, NLP, LLM integrations, custom ML models.",
    capabilities: ["LLM Integration (Groq, OpenAI)", "RAG Pipelines", "Computer Vision (YOLOv8)", "NLP & Text Analysis", "Custom Model Training"],
  },
  {
    title: "Mobile Applications",
    description: "Native Android apps with enterprise-grade security, offline-first architecture, modern UI.",
    capabilities: ["Android (Kotlin/Java)", "Jetpack Compose", "Firebase Backend", "End-to-End Encryption", "Offline-First Design"],
  },
  {
    title: "Data Engineering & Pipelines",
    description: "ETL pipelines, data preprocessing, vector databases, analytics infrastructure.",
    capabilities: ["ETL Pipeline Design", "Data Preprocessing", "Vector Search", "Python (Pandas/NumPy)", "Automated Data Ops"],
  },
  {
    title: "Generative AI & Automation",
    description: "AI agents, voice assistants, document automation, workflow tools that eliminate manual work.",
    capabilities: ["AI Voice Agents", "Document AI", "Workflow Automation", "Chatbots & Assistants", "Prompt Engineering"],
  },
  {
    title: "Design & Architecture",
    description: "BIM modeling, CAD drafting, 3D visualization — Revit, AutoCAD, SketchUp.",
    capabilities: ["Revit BIM Modeling", "AutoCAD Drafting", "SketchUp 3D Viz", "Floor Plans & Sections", "Presentation Renders"],
  },
];

const problems = [
  {
    problem: "Manual document translation is slow and expensive.",
    solution: "Automated DOCX translation pipeline using LLMs — preserves structure, images, formatting. 668/668 blocks translated, zero data loss.",
    result: "90%+ cost reduction. Entire documents in minutes.",
    tech: "Python, Groq API, python-docx",
  },
  {
    problem: "Recruitment process is slow and misses top candidates.",
    solution: "RecruAI — AI-powered recruitment toolkit automating screening, interview questions, resume scoring.",
    result: "70% faster screening, 40% better candidate match.",
    tech: "React, Supabase, Groq API, NLP",
  },
  {
    problem: "Team wastes hours on repetitive data entry and cleaning.",
    solution: "Automated data preprocessing pipelines — import, clean, validate, export in minutes.",
    result: "80% reduction in prep time. Reproducible and auditable.",
    tech: "Python, Pandas, Scikit-Learn",
  },
  {
    problem: "E-commerce has no AI — guessing what customers want.",
    solution: "Intelligent e-commerce with AI search, personalized recommendations, automated inventory.",
    result: "35% higher conversion, 50% fewer manual tasks.",
    tech: "React, Node.js, MongoDB, Stripe",
  },
  {
    problem: "No automated monitoring — security depends on human eyes.",
    solution: "CamWatch — AI surveillance detecting threats in real-time with vision-language descriptions.",
    result: "Instant detection, 24/7 monitoring, zero false alarm fatigue.",
    tech: "YOLOv8, SmolVLM-500, Python",
  },
  {
    problem: "Documents scattered, unsearchable, hard to share securely.",
    solution: "DocxBox — privacy-first document manager with E2E encryption, passwordless auth, cloud backup.",
    result: "Zero-knowledge encryption. SOC 2-aligned. GDPR-ready.",
    tech: "Kotlin, Jetpack Compose, Firebase",
  },
];

const processSteps = [
  { number: "01", title: "Discover", description: "We sit down, understand your business, your customers, and your goals. No assumptions." },
  { number: "02", title: "Plan", description: "I map out the architecture, tech stack, and timeline. You approve before code is written." },
  { number: "03", title: "Build", description: "Clean code, proper architecture, regular updates. You see progress in real time." },
  { number: "04", title: "Launch & Support", description: "Deployment, testing, ongoing support. I don't disappear after delivery." },
];

const Services = () => {
  return (
    <>
      <SEO
        title="Services - Syed Syab Ahmad | AI Engineer & Full-Stack Developer"
        description="I build AI-powered web applications, ML systems, mobile apps, and data pipelines. From Starter to Enterprise — choose the package that fits your business."
        keywords="hire AI engineer, full-stack developer for hire, ML development service, web application development, AI consulting"
        url="https://syab.tech/services"
      />

      <div className="min-h-screen bg-stone-50 pt-20">

        {/* Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-medium text-stone-400 mb-4 font-handwriting tracking-widest uppercase">
                Services & Pricing
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 font-heading mb-6">
                I build what your<br />business needs.
              </h1>
              <p className="text-lg text-stone-500 max-w-2xl mx-auto font-handwriting leading-relaxed">
                AI Engineer, Full-Stack Developer, and Problem Solver — I turn complex business challenges into working software.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-3xl font-bold text-stone-900 font-heading mb-2">
                What I Build
              </h2>
              <p className="text-stone-500 font-handwriting">
                Every service is a real capability — I've built these systems, not just read about them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-stone-200 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-stone-900 font-heading mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-handwriting leading-relaxed mb-4">
                    {svc.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.capabilities.map((cap, j) => (
                      <span key={j} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                        {cap}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems I Solve */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="text-3xl font-bold text-stone-900 font-heading mb-2">
                Problems I've Solved
              </h2>
              <p className="text-stone-500 font-handwriting">
                Real business challenges, addressed with working software.
              </p>
            </motion.div>

            <div className="space-y-5">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-stone-50 border border-stone-200 rounded-xl p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1 font-handwriting">Problem</p>
                      <p className="text-stone-700 text-sm font-handwriting leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1 font-handwriting">What I Built</p>
                      <p className="text-stone-700 text-sm font-handwriting leading-relaxed">{item.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1 font-handwriting">Result</p>
                      <p className="text-stone-900 text-sm font-bold font-heading mb-2">{item.result}</p>
                      <p className="text-stone-400 text-xs font-handwriting">{item.tech}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-900 font-heading mb-2">
                Choose Your Package
              </h2>
              <p className="text-stone-500 font-handwriting">
                Transparent pricing, no hidden fees.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-xl border p-6 sm:p-8 ${
                    pkg.highlighted
                      ? "bg-stone-900 border-stone-900 text-white"
                      : "bg-white border-stone-200"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="inline-block px-3 py-1 bg-amber-400 text-stone-900 text-xs font-bold rounded-full font-heading mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className={`text-xl font-bold font-heading mb-1 ${pkg.highlighted ? "text-white" : "text-stone-900"}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-3xl font-bold font-heading ${pkg.highlighted ? "text-white" : "text-stone-900"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm font-handwriting ${pkg.highlighted ? "text-stone-400" : "text-stone-500"}`}>
                      {pkg.period}
                    </span>
                  </div>
                  <p className={`text-sm font-handwriting mb-6 ${pkg.highlighted ? "text-stone-300" : "text-stone-500"}`}>
                    {pkg.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-handwriting">
                        <span className={`mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-amber-400" : "text-stone-400"}`}>✓</span>
                        <span className={pkg.highlighted ? "text-stone-200" : "text-stone-600"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`block w-full py-3 px-6 rounded-lg font-bold font-heading text-sm text-center ${
                      pkg.highlighted
                        ? "bg-white text-stone-900"
                        : "bg-stone-900 text-white"
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-900 font-heading mb-2">
                How It Works
              </h2>
              <p className="text-stone-500 font-handwriting">
                Simple, transparent, fast.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-stone-200 font-heading mb-3">{step.number}</div>
                  <h4 className="text-lg font-bold text-stone-900 font-heading mb-2">{step.title}</h4>
                  <p className="text-stone-500 text-sm font-handwriting leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          heading="Ready to get started?"
          subheading="Pick a package or send a message — I'll respond within 24 hours."
        />

      </div>
    </>
  );
};

export default Services;
