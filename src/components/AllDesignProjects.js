import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { designProjects } from "../data/designData";
import { ChevronRight, ExternalLink, Filter } from "lucide-react";

const AllDesignProjects = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const categories = useMemo(
    () => ["all", ...new Set(designProjects.map((p) => p.category))],
    []
  );

  const filteredProjects = useMemo(() => {
    let data = designProjects;
    if (filter !== "all") {
      data = data.filter((p) => p.category === filter);
    }
    return data.sort((a, b) => {
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      return a.title.localeCompare(b.title);
    });
  }, [filter, sortBy]);

  const categoryLabels = {
    all: "All Projects",
    revit: "Revit",
    autocad: "AutoCAD",
    sketchup: "SketchUp",
  };

  const categoryColors = {
    revit: "from-blue-500 to-indigo-500",
    autocad: "from-amber-500 to-orange-500",
    sketchup: "from-emerald-500 to-teal-500",
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/20 dark:from-slate-900 dark:via-amber-900/5 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link
            to="/design"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            Design & Architecture
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>All Projects</span>
        </div>

        {/* Hero Section */}
        <motion.section
          className="relative mb-10 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200 dark:border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.04),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left: Title & Subtitle */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-gray-900 dark:text-white">Sample </span>
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
                  Complete portfolio of architectural and design work across Revit, AutoCAD & SketchUp
                </p>
              </div>

              {/* Right: Quick Stats */}
              <div className="flex items-center gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {designProjects.length}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">Total</div>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-slate-700" />
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {designProjects.filter(p => p.category === "revit").length}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {designProjects.filter(p => p.category === "autocad").length}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {designProjects.filter(p => p.category === "sketchup").length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                    : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30"
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 overflow-hidden hover:shadow-amber-500/10 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${categoryColors[project.category] || "from-amber-500 to-orange-500"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x260?text=Design+Project";
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
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium text-white bg-gradient-to-r ${categoryColors[project.category] || "from-amber-500 to-orange-500"} flex-shrink-0 ml-2`}>
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                    {new Date(project.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[11px] text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-[11px] text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/design/project/${project.id}`}
                    className="inline-flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 font-semibold transition-colors group/link"
                  >
                    View Project
                    <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 dark:text-gray-500 text-lg">
              No projects found for this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDesignProjects;
