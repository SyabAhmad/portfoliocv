import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { designProjects } from "../data/designData";
import { ChevronRight } from "lucide-react";

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
    <div className="min-h-screen bg-stone-50 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-stone-400 font-handwriting">
          <Link to="/design" className="text-stone-500">Design & Architecture</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-900">All Projects</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 font-heading mb-2">All Projects</h1>
            <p className="text-stone-500 text-sm font-handwriting">{designProjects.length} projects across Revit, AutoCAD & SketchUp</p>
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm text-stone-600 font-handwriting">
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-lg text-sm font-medium font-handwriting ${filter === cat ? "bg-stone-900 text-stone-50" : "bg-white border border-stone-200 text-stone-500"}`}>
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
              <Link to={`/design/project/${project.id}`} className="block bg-white border border-stone-200 rounded-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = "/default.webp"; }} />
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    {project.software.map((sw) => (
                      <span key={sw} className="px-2 py-0.5 bg-white/90 text-stone-700 text-[10px] font-bold rounded-full font-handwriting">{sw}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-base font-bold text-stone-900 line-clamp-1 font-heading">{project.title}</h3>
                    <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] rounded-full font-handwriting flex-shrink-0 ml-2">{project.category}</span>
                  </div>
                  <p className="text-xs text-stone-400 mb-2 font-handwriting">{new Date(project.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</p>
                  <p className="text-sm text-stone-500 mb-3 line-clamp-2 font-handwriting">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-stone-100 rounded-full text-[11px] text-stone-500 font-handwriting">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-400 text-lg font-handwriting">No projects found for this filter.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllDesignProjects;
