import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { designSkills, designProjects } from "../data/designData";
import { ChevronRight, CheckCircle2, Calendar, ArrowLeft } from "lucide-react";

const RevitPortfolio = () => {
  const revitProjects = designProjects.filter((p) => p.category === "revit");
  const skillInfo = designSkills.revit;
  const accentGradient = "from-blue-500 to-indigo-500";

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 dark:from-slate-900 dark:via-blue-900/5 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/design" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Design & Architecture
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 dark:text-gray-300">Revit</span>
        </div>

        {/* Hero Section */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
            {skillInfo.name} - {skillInfo.category}
          </h1>
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
            {skillInfo.level}
          </span>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {skillInfo.description}
          </p>
        </motion.section>

        {/* Capabilities */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillInfo.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3 bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
          {revitProjects.length > 0 ? (
            <div className="space-y-8">
              {revitProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="group grid md:grid-cols-[350px_1fr] gap-6 bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 overflow-hidden hover:shadow-blue-500/10 transition-all duration-500"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative overflow-hidden h-56 md:h-auto">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Revit+Project";
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${accentGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  </div>

                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        {new Date(project.date).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {project.details && (
                        <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 mb-4 border border-gray-100 dark:border-slate-700/50">
                          {Object.entries(project.details).map(([key, value]) => (
                            <div key={key} className="mb-1.5 last:mb-0">
                              <strong className="text-blue-600 dark:text-blue-400 text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                              <span className="text-gray-600 dark:text-gray-300 text-sm ml-2">
                                {Array.isArray(value) ? value.join(", ") : value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-md text-blue-700 dark:text-blue-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      <Link
                        to={`/design/project/${project.id}`}
                        className="ml-auto inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold transition-colors group/link"
                      >
                        View Full Project
                        <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 italic py-12">
              Projects coming soon...
            </p>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default RevitPortfolio;
