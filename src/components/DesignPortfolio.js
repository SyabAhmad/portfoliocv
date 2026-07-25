import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { designProjects, designSkills, designCertifications } from "../data/designData";
import { ExternalLink, Award, Layers, Box, PencilRuler, ChevronRight } from "lucide-react";

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
    <div className="min-h-screen bg-stone-50 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 border border-stone-200 rounded-full text-stone-600 text-sm font-handwriting mb-6">
            <PencilRuler className="w-4 h-4" />
            Architecture & Design
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 font-heading mb-4">
            Design & Architecture
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl font-handwriting leading-relaxed mb-8">
            Bridging technology with architectural design through BIM, 3D modeling & precision drafting.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/design/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 font-bold rounded-lg font-heading">
              View Projects <ExternalLink size={14} />
            </Link>
            <a href="#certifications" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone-300 text-stone-600 font-bold rounded-lg font-heading">
              <Award className="w-4 h-4" /> Certifications
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Revit", count: "7 Projects", icon: <Box className="w-4 h-4" /> },
            { label: "AutoCAD", count: "5 Projects", icon: <PencilRuler className="w-4 h-4" /> },
            { label: "SketchUp", count: "6 Projects", icon: <Layers className="w-4 h-4" /> },
            { label: "Certified", count: "2 Credentials", icon: <Award className="w-4 h-4" /> },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white border border-stone-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2 text-stone-400">{s.icon}<span className="text-xs font-medium text-stone-400 uppercase tracking-wider font-handwriting">{s.label}</span></div>
              <div className="text-2xl font-bold text-stone-900 font-heading">{s.count}</div>
            </motion.div>
          ))}
        </div>

        {/* About */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-stone-900 font-heading mb-4">My Design Journey</h2>
          <p className="text-stone-500 leading-relaxed font-handwriting">
            Alongside my expertise in software development and AI, I've expanded my skillset into architectural design and Building Information Modeling (BIM). This unique combination allows me to approach projects with both technical precision and creative vision.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 font-heading mb-6">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Object.values(designSkills).map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-stone-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-stone-900 rounded-lg text-stone-200">{skillIcons[skill.name] || <Layers className="w-5 h-5" />}</div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-heading">{skill.name}</h3>
                    <p className="text-xs text-stone-400 font-handwriting">{skill.category}</p>
                  </div>
                </div>
                <span className="inline-block px-2.5 py-0.5 bg-stone-100 text-stone-600 rounded-full text-xs font-medium font-handwriting mb-3">{skill.level}</span>
                <p className="text-stone-500 text-sm leading-relaxed mb-4 font-handwriting">{skill.description}</p>
                <ul className="space-y-2 mb-4">
                  {skill.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-600 font-handwriting">
                      <span className="text-stone-400">✓</span>{feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/design/${skill.name.toLowerCase()}`} className="text-sm text-stone-600 font-bold font-heading">
                  Explore Projects →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-stone-900 font-heading">Recent Projects</h2>
            <Link to="/design/projects" className="text-sm text-stone-500 font-handwriting">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recentProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = "/default.webp"; }} />
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    {project.software.map((sw) => (
                      <span key={sw} className="px-2 py-0.5 bg-white/90 text-stone-700 text-[10px] font-bold rounded-full font-handwriting">{sw}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-stone-900 mb-1 font-heading">{project.title}</h3>
                  <p className="text-xs text-stone-400 mb-2 font-handwriting">{new Date(project.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
                  <p className="text-sm text-stone-500 mb-3 line-clamp-2 font-handwriting">{project.description}</p>
                  <Link to={`/design/project/${project.id}`} className="text-sm text-stone-600 font-bold font-heading">View Details →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div id="certifications" className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 font-heading mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {designCertifications.map((cert, index) => (
              <motion.div key={cert.credentialId} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-stone-200 rounded-xl p-5 flex items-start gap-4">
                <div className="p-2.5 bg-stone-100 rounded-lg flex-shrink-0"><Award className="w-5 h-5 text-stone-500" /></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-base font-bold text-stone-900 font-heading">{cert.name}</h3>
                    <span className="text-xs text-stone-400 flex-shrink-0 ml-2 font-handwriting">{cert.date}</span>
                  </div>
                  <p className="text-sm text-stone-600 font-handwriting mb-1">{cert.issuer}</p>
                  <p className="text-xs text-stone-400 mb-2 font-handwriting">{cert.focus}</p>
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-stone-500 font-bold font-heading">View →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-stone-900 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-50 font-heading mb-3">Interested in Collaboration?</h2>
          <p className="text-stone-400 mb-6 font-handwriting">Let's discuss how I can contribute to your architectural or design project.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-900 font-bold rounded-lg font-heading">
            Get in Touch
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DesignPortfolio;
