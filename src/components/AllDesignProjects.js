import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { designProjects } from "../data/designData";
import { ChevronRight, Filter } from "lucide-react";

const cardRotations = [-2, 1.5, -1, 2, -1.5, 0.8, -0.5, 1.8, -1.2];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600", "bg-stone-600"];

const AllDesignProjects = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const categories = useMemo(() => ["all", ...new Set(designProjects.map((p) => p.category))], []);

  const filteredProjects = useMemo(() => {
    let data = filter !== "all" ? designProjects.filter((p) => p.category === filter) : designProjects;
    return data.sort((a, b) => sortBy === "date" ? new Date(b.date) - new Date(a.date) : a.title.localeCompare(b.title));
  }, [filter, sortBy]);

  const categoryLabels = { all: "All Projects", revit: "Revit", autocad: "AutoCAD", sketchup: "SketchUp" };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-8 flex items-center gap-2 text-sm text-stone-500 font-handwriting">
          <Link to="/design" className="hover:text-stone-300 transition-colors">Design & Architecture</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-300">All Projects</span>
        </div>

        {/* Hero - Flyer */}
        <motion.section className="relative mb-10" initial={{ opacity: 0, y: 20, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: -1 }} style={{ transform: "rotate(-1deg)" }}>
          <div className="absolute -top-3 left-[8%] w-24 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm z-10" />
          <div className="absolute -top-3 right-[10%] w-20 h-5 bg-stone-400/40 rotate-[4deg] rounded-sm z-10" />
          <div className="absolute -top-2 left-[40%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

          <div className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/40 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 font-handwriting text-stone-900 dark:text-stone-100">Sample Projects</h1>
                <p className="text-stone-500 text-sm max-w-md font-handwriting">Complete portfolio of architectural and design work across Revit, AutoCAD & SketchUp</p>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-100 font-handwriting">{designProjects.length}</div>
                  <div className="text-xs text-stone-500 font-handwriting">Total</div>
                </div>
                <div className="w-px h-8 bg-stone-700" />
                <div className="flex items-center gap-3">
                  {[{ cat: "revit", color: "bg-stone-400" }, { cat: "autocad", color: "bg-stone-600" }, { cat: "sketchup", color: "bg-stone-500" }].map((c) => (
                    <div key={c.cat} className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${c.color}`} />
                      <span className="text-xs text-stone-500 font-handwriting">{designProjects.filter(p => p.category === c.cat).length}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-stone-500" />
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-handwriting ${filter === cat ? "bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 shadow-lg" : "bg-stone-800/50 text-stone-400 hover:bg-stone-700 hover:text-stone-300"}`}>
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 bg-stone-800 text-stone-300 border border-stone-700 rounded-full text-sm focus:outline-none font-handwriting">
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>

        {/* Projects Grid - Flyer cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const rot = cardRotations[index % cardRotations.length];
              const pinColor = pinColors[index % pinColors.length];
              return (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9, rotate: rot }} animate={{ opacity: 1, scale: 1, rotate: rot }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} whileHover={{ scale: 1.03, rotate: 0 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                  <div className="absolute -top-2.5 left-[12%] w-12 h-4 bg-stone-400/40 rotate-[-4deg] rounded-sm z-10" />
                  <div className={`absolute -top-1.5 right-[10%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                  <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm overflow-hidden shadow-xl shadow-black/30 h-full">
                    <div className="relative overflow-hidden">
                      <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" onError={(e) => { e.target.src = "/default.webp"; }} />
                      <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap justify-end">
                        {project.software.map((sw) => (
                          <span key={sw} className="px-2 py-0.5 bg-stone-900/80 backdrop-blur text-stone-200 text-[10px] font-bold rounded-full border border-stone-400/20 font-handwriting">{sw}</span>
                        ))}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 line-clamp-1 font-handwriting">{project.title}</h3>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium text-stone-200 bg-stone-800 flex-shrink-0 ml-2 font-handwriting">{project.category}</span>
                      </div>
                      <p className="text-xs text-stone-500 mb-3 font-handwriting">
                        {new Date(project.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 line-clamp-2 font-handwriting">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-[11px] text-stone-600 dark:text-stone-300 font-handwriting">{tag}</span>
                        ))}
                        {project.tags.length > 3 && <span className="px-2 py-0.5 text-[11px] text-stone-500 font-handwriting">+{project.tags.length - 3}</span>}
                      </div>
                      <Link to={`/design/project/${project.id}`} className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-200 font-bold transition-colors font-handwriting">
                        View Project <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-500 text-lg font-handwriting">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDesignProjects;
