import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

const DesignPortfolio = () => {
  const recentProjects = designProjects.slice(0, 3);
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

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
      transition: { staggerChildren: 0.08 },
    },
  };

  const skillIcons = {
    Revit: <Box className="w-5 h-5" />,
    AutoCAD: <PencilRuler className="w-5 h-5" />,
    SketchUp: <Layers className="w-5 h-5" />,
  };

  const skillGradients = {
    Revit: "from-blue-500 to-indigo-500",
    AutoCAD: "from-amber-500 to-orange-500",
    SketchUp: "from-emerald-500 to-teal-500",
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/20 dark:from-slate-900 dark:via-amber-900/5 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Hero Section */}
        <motion.section
          className="relative mb-16 rounded-3xl overflow-hidden bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.05),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative p-8 md:p-14 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-full text-amber-700 dark:text-amber-400 text-sm font-medium mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <PencilRuler className="w-4 h-4" />
                  Architecture & Design
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                  <span className="text-gray-900 dark:text-white">Design &</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                    Architecture
                  </span>
                </h1>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                  Bridging technology with architectural design through BIM, 3D modeling & precision drafting
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <Link
                    to="/design/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
                  >
                    <ExternalLink size={16} />
                    View Projects
                  </Link>
                  <a
                    href="#certifications"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 transition-all"
                  >
                    <Award className="w-4 h-4" />
                    Certifications
                  </a>
                </div>
              </div>

              {/* Right: Stats & Skills */}
              <div className="grid grid-cols-2 gap-4">
                {/* Stat Cards */}
                <motion.div
                  className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-2xl border border-blue-200/50 dark:border-blue-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Revit</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">7</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                </motion.div>

                <motion.div
                  className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 rounded-2xl border border-amber-200/50 dark:border-amber-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <PencilRuler className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">AutoCAD</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">5</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                </motion.div>

                <motion.div
                  className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 rounded-2xl border border-emerald-200/50 dark:border-emerald-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">SketchUp</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">6</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                </motion.div>

                <motion.div
                  className="p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-500/10 dark:to-slate-500/10 rounded-2xl border border-gray-200/50 dark:border-gray-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Certified</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">2</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Credentials</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Design Journey */}
        <motion.section
          className="mb-16 max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Design Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Alongside my expertise in software development and AI, I've expanded
              my skillset into architectural design and Building Information
              Modeling (BIM). This unique combination allows me to approach
              projects with both technical precision and creative vision.
            </p>
          </div>
        </motion.section>

        {/* Skills Overview */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2">
              Core Competencies
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Architectural tools & software expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(designSkills).map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="group bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 p-6 hover:shadow-amber-500/10 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${skillGradients[skill.name] || "from-amber-500 to-orange-500"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${skillGradients[skill.name] || "from-amber-500 to-orange-500"} text-white`}
                  >
                    {skillIcons[skill.name] || <Layers className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </p>
                  </div>
                </div>

                <span className="inline-block px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-4">
                  {skill.level}
                </span>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {skill.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/design/${skill.name.toLowerCase()}`}
                  className="inline-flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-semibold transition-colors group/link"
                >
                  Explore Projects
                  <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Projects */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2">
              Recent Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Selected architectural and design work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 overflow-hidden hover:shadow-amber-500/10 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x260?text=Project+Image";
                    }}
                  />
                  <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap justify-end">
                    {project.software.map((sw) => (
                      <span
                        key={sw}
                        className="px-2 py-0.5 bg-white/90 dark:bg-slate-900/80 backdrop-blur text-gray-700 dark:text-gray-300 text-[10px] font-semibold rounded-full border border-gray-200 dark:border-slate-700"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {new Date(project.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    to={`/design/project/${project.id}`}
                    className="inline-flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-semibold transition-colors group/link"
                  >
                    View Details
                    <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link
              to="/design/projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              View All Projects
              <ExternalLink size={14} />
            </Link>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className="mb-16 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                Certifications
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Formal credentials backing my architectural modeling expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {designCertifications.map((cert) => (
              <motion.div
                key={cert.credentialId}
                variants={fadeInUp}
                className="group bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 p-5 hover:shadow-amber-500/10 transition-all duration-500 flex items-start gap-4"
                whileHover={{ y: -2 }}
              >
                <div className="p-2.5 bg-amber-50 dark:bg-amber-500/10 rounded-xl flex-shrink-0">
                  <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0 ml-2">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {cert.focus}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 dark:text-gray-500 font-mono">
                      {cert.credentialId}
                    </span>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-semibold transition-colors group/link"
                    >
                      View Credential
                      <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Interested in Collaboration?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
              Let's discuss how I can contribute to your architectural or design
              project
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Get in Touch
              <ChevronRight size={16} />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DesignPortfolio;
