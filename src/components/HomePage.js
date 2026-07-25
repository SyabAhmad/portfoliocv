import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import CTASection from "./CTASection";

let allProjects = [];
try {
  allProjects = require("../data/projectsData").default || [];
} catch (error) {
  allProjects = [];
}

const FEATURED_TITLES = ["Req2Ops", "StitchPoint", "AI Voice Agent"];
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
                "37+ projects shipped",
                "5 client demos live in production",
                "Available now",
              ].map((item, i) => (
                <span key={i} className="text-sm text-stone-500 font-handwriting">
                  {item}
                </span>
              ))}
            </motion.div>
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
                Why me
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 font-heading leading-tight mb-8">
                You have a business problem.<br />
                I have the technical skills to solve it.
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "You need an AI feature but don't know where to start.",
                  answer: "I'll figure out what's actually possible, build the prototype, and get it into production. No buzzwords — just working AI that saves you time or makes you money.",
                },
                {
                  question: "You have a web app idea but no developer.",
                  answer: "From landing pages to full-stack SaaS platforms — I build the frontend, backend, database, and deploy it. You get a product, not a pile of code.",
                },
                {
                  question: "Your manual processes are eating your team's time.",
                  answer: "I build automation systems — AI agents, data pipelines, chatbots — that handle the repetitive work so your team can focus on what matters.",
                },
                {
                  question: "You've hired developers before and it didn't work out.",
                  answer: "I communicate clearly, hit deadlines, and show my work. Every project gets a live demo you can see and test before you pay.",
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
                Selected Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading">
                Projects that shipped.
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
                The tools I use daily.
              </h2>
              <p className="text-stone-500 font-handwriting max-w-xl">
                Not a list of everything I've touched. These are the tools I reach for when building real products.
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
