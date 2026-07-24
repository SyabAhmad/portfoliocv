import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { designSkills, designProjects } from "../data/designData";
import { ChevronRight, CheckCircle2, Calendar } from "lucide-react";

const cardRotations = [-1.5, 1, -0.8, 1.2, -0.5];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600"];

const AutoCADPortfolio = () => {
  const autocadProjects = designProjects.filter((p) => p.category === "autocad");
  const skillInfo = designSkills.autocad;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="mb-8 flex items-center gap-2 text-sm text-stone-500 font-handwriting">
          <Link to="/design" className="hover:text-stone-300 transition-colors">Design & Architecture</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-300">AutoCAD</span>
        </div>

        <motion.section className="text-center mb-12" initial={{ opacity: 0, y: 30, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: -1 }} style={{ transform: "rotate(-1deg)" }}>
          <div className="relative inline-block">
            <div className="absolute -top-3 left-[10%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm" />
            <div className="absolute -top-2 right-[15%] w-14 h-5 bg-stone-400/30 rotate-[3deg] rounded-sm" />
            <div className="absolute -top-1.5 left-[35%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />
            <h1 className="text-4xl md:text-5xl font-bold text-stone-100 mb-4 font-handwriting">{skillInfo.name} - {skillInfo.category}</h1>
          </div>
          <span className="inline-block px-4 py-1.5 bg-rose-800/20 border border-rose-700/30 rounded-full text-rose-300 text-sm font-medium mb-4 font-handwriting">{skillInfo.level}</span>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto font-handwriting">{skillInfo.description}</p>
        </motion.section>

        <motion.section className="mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-stone-100 mb-6 font-handwriting">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillInfo.features.map((feature, index) => {
              const rot = cardRotations[index % cardRotations.length];
              const pinColor = pinColors[index % pinColors.length];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true }} whileHover={{ scale: 1.02, rotate: 0 }} className="relative flex items-center gap-3 bg-stone-100 dark:bg-stone-800 rounded-sm border border-stone-200 dark:border-stone-700 p-4 shadow-lg" style={{ transform: `rotate(${rot}deg)` }}>
                  <div className="absolute -top-2 left-[15%] w-10 h-4 bg-stone-400/40 rotate-[-3deg] rounded-sm" />
                  <div className={`absolute -top-1.5 right-[10%] w-2 h-2 ${pinColor} rounded-full shadow border border-black/20 z-10`} />
                  <CheckCircle2 className="w-5 h-5 text-stone-400 flex-shrink-0" />
                  <span className="text-stone-600 dark:text-stone-300 text-sm font-medium font-handwriting">{feature}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-stone-100 mb-8 font-handwriting">Projects</h2>
          {autocadProjects.length > 0 ? (
            <div className="space-y-6">
              {autocadProjects.map((project, index) => {
                const rot = cardRotations[index % cardRotations.length];
                const pinColor = pinColors[index % pinColors.length];
                return (
                  <motion.div key={project.id} initial={{ opacity: 0, y: 30, rotate: rot }} whileInView={{ opacity: 1, y: 0, rotate: rot }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.01, rotate: 0 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                    <div className="absolute -top-2.5 left-[5%] w-16 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm z-10" />
                    <div className={`absolute -top-1.5 right-[8%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />
                    <div className="group grid md:grid-cols-[350px_1fr] gap-6 bg-stone-100 dark:bg-stone-800 rounded-sm border border-stone-200 dark:border-stone-700 overflow-hidden shadow-xl shadow-black/30">
                      <div className="relative overflow-hidden h-56 md:h-auto">
                        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105" onError={(e) => { e.target.src = "/default.webp"; }} />
                      </div>
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">{project.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-stone-500 mb-4 font-handwriting">
                            <Calendar className="w-4 h-4" />
                            {new Date(project.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 text-sm mb-4 leading-relaxed font-handwriting">{project.description}</p>
                          {project.details && (
                            <div className="bg-stone-200/50 dark:bg-stone-700/30 rounded-sm p-4 mb-4 border border-stone-300/50 dark:border-stone-600/30">
                              {Object.entries(project.details).map(([key, value]) => (
                                <div key={key} className="mb-1.5 last:mb-0">
                                  <strong className="text-stone-500 text-sm font-handwriting">{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                                  <span className="text-stone-600 dark:text-stone-300 text-sm ml-2 font-handwriting">{Array.isArray(value) ? value.join(", ") : value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-stone-600 dark:text-stone-300 text-xs font-medium font-handwriting">{tag}</span>
                          ))}
                          <Link to={`/design/project/${project.id}`} className="ml-auto inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-200 font-bold transition-colors font-handwriting">
                            View Full Project <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-stone-500 italic py-12 font-handwriting">Projects coming soon...</p>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default AutoCADPortfolio;
