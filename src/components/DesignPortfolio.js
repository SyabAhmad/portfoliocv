import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  designProjects,
  designSkills,
  designCertifications,
} from "../data/designData";
import {
  ExternalLink,
  ChevronRight,
  Award,
  Layers,
  Box,
  PencilRuler,
} from "lucide-react";

const cardRotations = [-1.5, 1, -0.8, 1.2, -0.5];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600"];

const DesignPortfolio = () => {
  const recentProjects = designProjects.slice(0, 3);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  const skillIcons = {
    Revit: <Box className="w-5 h-5" />,
    AutoCAD: <PencilRuler className="w-5 h-5" />,
    SketchUp: <Layers className="w-5 h-5" />,
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Hero Section - Big flyer */}
        <motion.section
          className="relative mb-16"
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.6 }}
          style={{ transform: "rotate(-1deg)" }}
        >
          {/* Tape */}
          <div className="absolute -top-3 left-[8%] w-28 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm shadow-sm z-10" />
          <div className="absolute -top-3 right-[10%] w-24 h-5 bg-stone-400/40 rotate-[4deg] rounded-sm shadow-sm z-10" />
          <div className="absolute -top-2 left-[45%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

          <div className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-2xl shadow-black/40 overflow-hidden">
            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left: Content */}
                <div className="text-center lg:text-left">
                  <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-stone-600 dark:text-stone-300 text-sm font-handwriting mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                    <PencilRuler className="w-4 h-4" />
                    Architecture & Design
                  </motion.div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight font-handwriting">
                    <span className="text-stone-900 dark:text-stone-100">Design &</span>
                    <br />
                    <span className="text-stone-900 dark:text-stone-100">Architecture</span>
                  </h1>

                  <p className="text-stone-600 dark:text-stone-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0 font-handwriting">
                    Bridging technology with architectural design through BIM, 3D modeling & precision drafting
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Link to="/design/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold rounded-full hover:shadow-lg transition-all font-handwriting">
                        <ExternalLink size={16} /> View Projects
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <a href="#certifications" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-400 text-stone-300 font-bold rounded-full hover:bg-stone-800 transition-all font-handwriting">
                        <Award className="w-4 h-4" /> Certifications
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Right: Stats - scattered flyers */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Box className="w-5 h-5" />, label: "Revit", count: "7", sub: "Projects", rotate: -1.5, pin: "bg-rose-800" },
                    { icon: <PencilRuler className="w-5 h-5" />, label: "AutoCAD", count: "5", sub: "Projects", rotate: 1, pin: "bg-slate-500" },
                    { icon: <Layers className="w-5 h-5" />, label: "SketchUp", count: "6", sub: "Projects", rotate: -0.8, pin: "bg-stone-500" },
                    { icon: <Award className="w-5 h-5" />, label: "Certified", count: "2", sub: "Credentials", rotate: 1.2, pin: "bg-rose-700" },
                  ].map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20, rotate: s.rotate }} animate={{ opacity: 1, y: 0, rotate: s.rotate }} transition={{ delay: 0.3 + i * 0.1 }} whileHover={{ scale: 1.05, rotate: 0 }} className="relative" style={{ transform: `rotate(${s.rotate}deg)` }}>
                      <div className="absolute -top-2 left-[20%] w-10 h-4 bg-stone-400/40 rotate-[-3deg] rounded-sm" />
                      <div className={`absolute -top-1.5 right-[15%] w-2 h-2 ${s.pin} rounded-full shadow border border-black/20 z-10`} />
                      <div className="p-5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-sm shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-stone-500">{s.icon}</div>
                          <span className="text-xs font-medium text-stone-500 uppercase tracking-wider font-handwriting">{s.label}</span>
                        </div>
                        <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-handwriting">{s.count}</div>
                        <div className="text-sm text-stone-500 font-handwriting">{s.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Design Journey - Flyer */}
        <motion.section className="mb-16 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30, rotate: 1 }} whileInView={{ opacity: 1, y: 0, rotate: 1 }} viewport={{ once: true }} style={{ transform: "rotate(1deg)" }}>
          <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/30 p-6 md:p-8">
            <div className="absolute -top-2.5 left-[15%] w-14 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm" />
            <div className="absolute -top-1.5 right-[12%] w-2.5 h-2.5 bg-slate-500 rounded-full shadow border border-black/20 z-10" />
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 font-handwriting">My Design Journey</h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-handwriting">
              Alongside my expertise in software development and AI, I've expanded my skillset into architectural design and Building Information Modeling (BIM). This unique combination allows me to approach projects with both technical precision and creative vision.
            </p>
          </div>
        </motion.section>

        {/* Skills Overview - Flyer cards */}
        <motion.section className="mb-16">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-100 mb-2 font-handwriting" style={{ transform: "rotate(-0.5deg)" }}>Core Competencies</h2>
            <p className="text-stone-500 text-sm font-handwriting">Architectural tools & software expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(designSkills).map((skill, index) => {
              const rot = cardRotations[index % cardRotations.length];
              const pinColor = pinColors[index % pinColors.length];
              return (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 30, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.03, rotate: 0 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                  <div className="absolute -top-2.5 left-[15%] w-14 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm z-10" />
                  <div className={`absolute -top-1.5 right-[12%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                  <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/30 p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-stone-800 dark:bg-stone-200 rounded-lg text-stone-200 dark:text-stone-800">
                        {skillIcons[skill.name] || <Layers className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-handwriting">{skill.name}</h3>
                        <p className="text-xs text-stone-500 font-handwriting">{skill.category}</p>
                      </div>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 bg-rose-800/20 border border-rose-700/30 rounded-full text-rose-300 text-xs font-medium font-handwriting mb-4">
                      {skill.level}
                    </span>

                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4 font-handwriting">{skill.description}</p>

                    <ul className="space-y-2 mb-5">
                      {skill.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 font-handwriting">
                          <ChevronRight className="w-3.5 h-3.5 text-stone-500 flex-shrink-0" />{feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={`/design/${skill.name.toLowerCase()}`} className="inline-flex items-center gap-1 text-sm text-stone-600 dark:text-stone-300 hover:text-stone-400 font-bold transition-colors group/link font-handwriting">
                      Explore Projects <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Recent Projects - Flyer cards */}
        <motion.section className="mb-16">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-100 mb-2 font-handwriting">Recent Projects</h2>
            <p className="text-stone-500 text-sm font-handwriting">Selected architectural and design work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => {
              const rot = cardRotations[index % cardRotations.length];
              const pinColor = pinColors[index % pinColors.length];
              return (
                <motion.div key={project.id} initial={{ opacity: 0, y: 30, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.03, rotate: 0 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                  <div className="absolute -top-2.5 left-[15%] w-14 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm z-10" />
                  <div className={`absolute -top-1.5 right-[12%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                  <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/30 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105" onError={(e) => { e.target.src = "/default.webp"; }} />
                      <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap justify-end">
                        {project.software.map((sw) => (
                          <span key={sw} className="px-2 py-0.5 bg-stone-900/80 backdrop-blur text-stone-200 text-[10px] font-bold rounded-full border border-stone-400/20 font-handwriting">{sw}</span>
                        ))}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-2 line-clamp-1 font-handwriting">{project.title}</h3>
                      <p className="text-xs text-stone-500 mb-3 font-handwriting">
                        {new Date(project.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 line-clamp-2 font-handwriting">{project.description}</p>
                      <Link to={`/design/project/${project.id}`} className="inline-flex items-center gap-1 text-sm text-stone-600 dark:text-stone-300 hover:text-stone-400 font-bold transition-colors group/link font-handwriting">
                        View Details <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div className="text-center mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/design/projects" className="inline-flex items-center gap-2 px-7 py-3 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 text-sm font-bold rounded-full hover:shadow-lg transition-all font-handwriting">
                View All Projects <ExternalLink size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Certifications - Flyer cards */}
        <motion.section id="certifications" className="mb-16 max-w-5xl mx-auto">
          <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-6 h-6 text-stone-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-stone-100 font-handwriting">Certifications</h2>
            </div>
            <p className="text-stone-500 text-sm font-handwriting">Formal credentials backing my architectural modeling expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {designCertifications.map((cert, index) => {
              const rot = cardRotations[index % cardRotations.length];
              const pinColor = pinColors[index % pinColors.length];
              return (
                <motion.div key={cert.credentialId} initial={{ opacity: 0, y: 20, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.02, rotate: 0 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                  <div className="absolute -top-2.5 left-[12%] w-12 h-4 bg-stone-400/40 rotate-[-3deg] rounded-sm z-10" />
                  <div className={`absolute -top-1.5 right-[10%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                  <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-lg p-5 flex items-start gap-4">
                    <div className="p-2.5 bg-stone-200 dark:bg-stone-700 rounded-lg flex-shrink-0">
                      <Award className="w-5 h-5 text-stone-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100 font-handwriting">{cert.name}</h3>
                        <span className="text-xs text-stone-500 flex-shrink-0 ml-2 font-handwriting">{cert.date}</span>
                      </div>
                      <p className="text-sm text-stone-600 dark:text-stone-300 font-medium mb-1 font-handwriting">{cert.issuer}</p>
                      <p className="text-xs text-stone-500 mb-3 font-handwriting">{cert.focus}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-stone-500 font-mono text-[10px]">{cert.credentialId}</span>
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-stone-600 dark:text-stone-300 hover:text-stone-400 font-bold transition-colors group/link font-handwriting">
                          View <ExternalLink size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* CTA - Big flyer */}
        <motion.section className="text-center" initial={{ opacity: 0, y: 30, rotate: -0.5 }} whileInView={{ opacity: 1, y: 0, rotate: -0.5 }} viewport={{ once: true }} style={{ transform: "rotate(-0.5deg)" }}>
          <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-2xl shadow-black/40 p-10 md:p-14">
            <div className="absolute -top-3 left-[20%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm" />
            <div className="absolute -top-3 right-[20%] w-16 h-5 bg-stone-400/40 rotate-[3deg] rounded-sm" />
            <div className="absolute -top-2 left-[45%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3 font-handwriting">Interested in Collaboration?</h2>
            <p className="text-stone-600 dark:text-stone-400 mb-6 max-w-lg mx-auto font-handwriting">Let's discuss how I can contribute to your architectural or design project</p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold rounded-full hover:shadow-lg transition-all font-handwriting">
                Get in Touch <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DesignPortfolio;
