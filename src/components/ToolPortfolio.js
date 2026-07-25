import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { designSkills, designProjects } from "../data/designData";
import { ChevronRight, Calendar } from "lucide-react";

const ToolPortfolio = ({ tool }) => {
  const toolKey = tool.toLowerCase();
  const projects = designProjects.filter((p) => p.category === toolKey);
  const skillInfo = designSkills[toolKey];

  if (!skillInfo) return null;

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-stone-400 font-handwriting">
          <Link to="/design" className="text-stone-500">Design & Architecture</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-900">{skillInfo.name}</span>
        </div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 font-heading mb-3">
            {skillInfo.name} — {skillInfo.category}
          </h1>
          <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm font-medium font-handwriting mb-4">{skillInfo.level}</span>
          <p className="text-stone-500 text-lg max-w-2xl font-handwriting">{skillInfo.description}</p>
        </motion.div>

        {/* Capabilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 font-heading mb-6">Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillInfo.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white border border-stone-200 rounded-lg p-4">
                <span className="text-stone-400">✓</span>
                <span className="text-stone-600 text-sm font-medium font-handwriting">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-2xl font-bold text-stone-900 font-heading mb-6">Projects</h2>
          {projects.length > 0 ? (
            <div className="space-y-5">
              {projects.map((project, index) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <div className="grid md:grid-cols-[320px_1fr] gap-6 bg-white border border-stone-200 rounded-xl overflow-hidden">
                    <div className="relative h-56 md:h-auto">
                      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = "/default.webp"; }} />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2 font-heading">{project.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-stone-400 mb-3 font-handwriting">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(project.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </div>
                        <p className="text-stone-500 text-sm mb-4 leading-relaxed font-handwriting">{project.description}</p>
                        {project.details && (
                          <div className="bg-stone-50 rounded-lg p-4 mb-4 border border-stone-100">
                            {Object.entries(project.details).map(([key, value]) => (
                              <div key={key} className="mb-1.5 last:mb-0">
                                <strong className="text-stone-400 text-xs uppercase tracking-wider font-handwriting">{key}:</strong>
                                <span className="text-stone-600 text-sm ml-2 font-handwriting">{Array.isArray(value) ? value.join(", ") : value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-stone-100 rounded-full text-stone-600 text-xs font-handwriting">{tag}</span>
                        ))}
                        <Link to={`/design/project/${project.id}`} className="ml-auto text-sm text-stone-600 font-bold font-heading">View Full Project →</Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-400 py-12 font-handwriting">Projects coming soon...</p>
          )}
        </div>

      </div>
    </div>
  );
};

export const RevitPortfolio = () => <ToolPortfolio tool="Revit" />;
export const AutoCADPortfolio = () => <ToolPortfolio tool="AutoCAD" />;
export const SketchUpPortfolio = () => <ToolPortfolio tool="SketchUp" />;
