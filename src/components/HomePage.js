import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import CTASection from "./CTASection";
import MoneyAnimation from "./MoneyAnimation";

let allProjects = [];
try {
  allProjects = require("../data/projectsData").default || [];
} catch (error) {
  allProjects = [];
}

const FEATURED_TITLES = ["MenteE Embed Models", "Req2Ops", "StitchPoint", "AI Voice Agent", "KSA Jobs 24"];
const featuredProjects = FEATURED_TITLES.map(title => allProjects.find(p => p.title === title)).filter(Boolean);

const HomePage = () => {
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Syed Syab Ahmad - AI Engineer & Full-Stack Developer",
    url: "https://syab.tech",
    description:
      "AI Engineer and Full-Stack Developer building production software for businesses worldwide.",
    author: {
      "@type": "Person",
      name: "Syed Syab Ahmad",
      jobTitle: "AI Engineer & Full-Stack Developer",
      url: "https://syab.tech",
      sameAs: [
        "https://www.linkedin.com/in/syedsyab/",
        "https://github.com/syabahmad",
      ],
    },
  };

  return (
    <>
      <SEO
        title="Hire Syed Syab Ahmad | AI Engineer & Full-Stack Developer"
        description="I build AI-powered web applications, ML systems, mobile apps, and data pipelines. Hire me for your next project — delivered software, not just promises."
        keywords="hire AI engineer, hire full-stack developer, ML development service, web application development, AI consultant"
        url="https://syab.tech/"
        structuredData={homePageStructuredData}
      />

      <div className="min-h-screen bg-stone-50">

        {/* Hero */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="me.png"
                  alt="Syed Syab Ahmad"
                  className="w-12 h-12 rounded-lg object-cover border border-stone-200 shadow-sm"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <p className="text-sm font-medium text-stone-400 font-handwriting tracking-widest uppercase">
                  Syed Syab Ahmad
                </p>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-stone-900 leading-[0.95] font-heading mb-8">
                I don't just write code.<br />
                <span className="text-stone-400">I ship products.</span>
              </h1>

              <p className="text-lg sm:text-xl text-stone-500 max-w-2xl leading-relaxed mb-10 font-handwriting">
                I help businesses save time and make money with AI. Whether you need a web app, an automation system, or an AI feature — I build it, deploy it, and it works. Based in Riyadh, delivering worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://calendly.com/syedsyab/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-stone-900 text-stone-50 font-bold rounded-lg text-lg font-heading shadow-lg inline-block"
                >
                  Let's Talk →
                </a>
                <a
                  href="/projects"
                  className="px-8 py-4 border-2 border-stone-300 text-stone-600 font-bold rounded-lg text-lg font-heading inline-block"
                >
                  See What I've Built
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How I Make You Money */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-start justify-between gap-8 mb-4">
                <div>
                  <p className="text-sm font-medium text-stone-400 mb-4 font-handwriting tracking-widest uppercase">
                    What I Do
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading mb-4">
                    Here's how I turn<br />
                    ideas into revenue.
                  </h2>
                </div>
                <MoneyAnimation />
              </div>
              <p className="text-stone-500 font-handwriting max-w-xl">
                I don't just build software — I build things that make you money. Every project starts with one question: how does this generate revenue or cut costs?
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Build a SaaS product",
                  description: "You have an idea. I build the product users pay for. Full-stack, from database to dashboard to payment integration. You own it.",
                  icon: "◻",
                  tag: "Revenue",
                },
                {
                  title: "Automate your operations",
                  description: "Your team spends hours on repetitive tasks. I build AI agents and pipelines that do it in seconds. Cut costs, scale faster.",
                  icon: "↻",
                  tag: "Cost Savings",
                },
                {
                  title: "Add AI to your product",
                  description: "LLMs, embeddings, recommendation engines — make your existing product 10x smarter. No rebuild needed.",
                  icon: "◈",
                  tag: "Competitive Edge",
                },
                {
                  title: "Deploy conversational AI",
                  description: "Customer support, internal copilots, voice interfaces — trained on your data, working 24/7, no hire needed.",
                  icon: "◎",
                  tag: "Scale",
                },
                {
                  title: "Data pipelines & analytics",
                  description: "Your data is scattered everywhere. I build systems that ingest, process, and surface insights your team can act on.",
                  icon: "▣",
                  tag: "Decisions",
                },
                {
                  title: "Ship a web app or MVP",
                  description: "Landing page, full-stack app, or MVP to validate your idea. Fast, clean, deployed. Stop planning, start shipping.",
                  icon: "△",
                  tag: "Speed",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-stone-50 border border-stone-200 rounded-lg p-6 hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl text-stone-400">{item.icon}</span>
                    <span className="text-[10px] font-bold text-stone-400 font-handwriting uppercase tracking-wider">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 font-handwriting text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Strip */}
        <section className="border-y border-stone-200 bg-white py-6">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-x-12 gap-y-4"
            >
              {[
                { value: "37+", label: "Projects Shipped" },
                { value: "5", label: "Client Demos in Production" },
                { value: "0", label: "Equity Required" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <span className="text-lg font-bold text-stone-900 font-heading">{item.value}</span>
                  <span className="text-xs text-stone-400 font-handwriting ml-1.5">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <p className="text-xs font-medium text-stone-400 font-handwriting tracking-widest uppercase">
                Trusted by founders & teams building
              </p>
            </motion.div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee-left">
              {[...["MenteE AI", "DocxBox", "RecruAI", "Req2Ops", "StitchPoint", "MenteE AI", "DocxBox", "RecruAI", "Req2Ops", "StitchPoint"]].map((name, i) => (
                <span key={i} className="flex-shrink-0 text-lg sm:text-xl font-bold text-stone-900/20 font-heading mx-8 sm:mx-12">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem I Solve */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-stone-400 mb-4 font-handwriting tracking-widest uppercase">
                Why Founders Hire Me
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 font-heading leading-tight mb-8">
                You need a technical co-founder<br />
                without giving up equity.
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "You have a business idea but can't code.",
                  answer: "I'll turn your idea into a working product. You describe what you want, I build it. No technical jargon, no excuses — just a product your customers can use.",
                },
                {
                  question: "Your competitors are moving faster than you.",
                  answer: "I ship fast. MVPs in weeks, not months. You'll have a working product to test your market before your competitors even finish their sprint planning.",
                },
                {
                  question: "You're burning money on manual work.",
                  answer: "I build automation systems that replace repetitive tasks. AI agents, data pipelines, chatbots — your team focuses on growth, the software handles the rest.",
                },
                {
                  question: "You've been burned by developers before.",
                  answer: "I show my work every step. Live demos, regular updates, working software you can see and test. No disappearing, no excuses, no 'it works on my machine'.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8"
                >
                  <p className="text-stone-900 font-bold font-heading text-lg mb-2">
                    {item.question}
                  </p>
                  <p className="text-stone-500 font-handwriting leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-sm font-medium text-stone-400 mb-4 font-handwriting tracking-widest uppercase">
                Proof of Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading">
                Real projects. Real results.
              </h2>
            </motion.div>

            <div className="space-y-8">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 pb-8 border-b border-stone-100 last:border-0"
                >
                  <div className="sm:w-48 flex-shrink-0">
                    <span className="text-xs font-medium text-stone-400 font-handwriting tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-900 font-heading mb-1">
                      {project.title}
                    </h3>
                    <p className="text-stone-500 font-handwriting leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack && project.techStack.split(", ").slice(0, 4).map((tag, j) => (
                        <span key={j} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-stone-400 font-handwriting flex-shrink-0"
                    >
                      View →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/projects"
                className="text-stone-900 font-bold font-heading inline-block"
              >
                See all {allProjects.length} projects →
              </a>
            </div>
          </div>
        </section>

        {/* The Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-sm font-medium text-stone-400 mb-4 font-handwriting tracking-widest uppercase">
                Tech Stack
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading mb-4">
                The tools that ship products.
              </h2>
              <p className="text-stone-500 font-handwriting max-w-xl">
                Not a resume list. These are the tools I reach for when building real products that make money.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Python", "JavaScript", "TypeScript", "React",
                "Next.js", "Node.js", "FastAPI", "Django",
                "PostgreSQL", "MongoDB", "TensorFlow", "PyTorch",
                "Docker", "AWS", "Vercel", "Git",
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-center"
                >
                  <span className="text-sm font-medium text-stone-700 font-handwriting">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MenteE Open Source Research */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-sm font-medium text-stone-400 mb-4 font-handwriting tracking-widest uppercase">
                Open Source
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading mb-4">
                My team builds AI from scratch.
              </h2>
              <p className="text-stone-500 font-handwriting max-w-xl">
                MenteE is our open-source research lab. We train embedding models from zero — no pretrained weights, no shortcuts. Everything is public, reproducible, and honest.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* mentee-embed card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-stone-200 rounded-lg p-8"
              >
                <p className="text-xs font-medium text-stone-400 font-handwriting tracking-wider uppercase mb-3">
                  Research Lab
                </p>
                <h3 className="text-xl font-bold text-stone-900 font-heading mb-3">
                  mentee-embed
                </h3>
                <p className="text-stone-500 font-handwriting text-sm leading-relaxed mb-6">
                  A compact multilingual embedding model trained from scratch for Arabic, English, and Urdu retrieval. ~41M parameters, 384-dimensional outputs. Built to study how far modern training recipes can be compressed when nothing is inherited from pretrained giants.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "PyTorch", "Transformers", "Apache 2.0"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MenteE-s/mentee-embeddings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-900 font-heading hover:text-stone-600 transition-colors"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://huggingface.co/MenteE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-900 font-heading hover:text-stone-600 transition-colors"
                  >
                    Hugging Face →
                  </a>
                </div>
              </motion.div>

              {/* Why it matters */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-stone-200 rounded-lg p-8"
              >
                <p className="text-xs font-medium text-stone-400 font-handwriting tracking-wider uppercase mb-3">
                  Why It Matters
                </p>
                <h3 className="text-xl font-bold text-stone-900 font-heading mb-3">
                  Real research, not marketing.
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Two-stage training", text: "MLM first, then contrastive — a cheap bootstrap that prevents representation collapse." },
                    { label: "Low-resource first", text: "Urdu and Arabic treated as first-class languages, not afterthoughts bolted onto English." },
                    { label: "Fully reproducible", text: "Every step from data to evaluation is open-sourced. Failures documented alongside wins." },
                    { label: "Consumer hardware", text: "Trained on a single consumer GPU. No cluster needed to reproduce our results." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-stone-300 mt-0.5">—</span>
                      <div>
                        <p className="text-sm font-bold text-stone-900 font-heading">{item.label}</p>
                        <p className="text-xs text-stone-500 font-handwriting leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="https://menteeai.org/research"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-900 font-heading hover:text-stone-600 transition-colors"
                  >
                    Read the research →
                  </a>
                </div>
              </motion.div>

              {/* Publication card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-stone-200 rounded-lg p-8"
              >
                <p className="text-xs font-medium text-stone-400 font-handwriting tracking-wider uppercase mb-3">
                  Publication
                </p>
                <h3 className="text-lg font-bold text-stone-900 font-heading mb-3 leading-snug">
                  mentee-embed: Training Competitive Multilingual Text Embeddings from Scratch
                </h3>
                <p className="text-stone-500 font-handwriting text-sm leading-relaxed mb-4">
                  41M-parameter trilingual embedding model for Arabic, English, and Urdu — trained entirely from scratch. Achieves avg MRR@10 of 0.585, beating all-MiniLM-L6-v2 (0.396). Published on Zenodo under CC-BY 4.0.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Arabic", "English", "Urdu", "Knowledge Distillation", "From Scratch"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://doi.org/10.5281/zenodo.22087139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-900 font-heading hover:text-stone-600 transition-colors"
                  >
                    Zenodo (DOI) →
                  </a>
                  <a
                    href="https://github.com/MenteE-s/mentee-embeddings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-900 font-heading hover:text-stone-600 transition-colors"
                  >
                    Code →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          heading="Got a project in mind?"
          subheading="Whether it's an AI system, a web app, or something you're not sure is even possible — let's talk. First call is free."
        />

      </div>
    </>
  );
};

export default HomePage;
