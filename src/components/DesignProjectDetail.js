import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { designProjects } from "../data/designData";
import { ChevronRight, Calendar, Tag, Box, ArrowLeft } from "lucide-react";

const DesignProjectDetail = () => {
  const { projectId } = useParams();
  const project = designProjects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/design/projects" replace />;
  }

  const categoryColors = {
    revit: "from-blue-500 to-indigo-500",
    autocad: "from-amber-500 to-orange-500",
    sketchup: "from-emerald-500 to-teal-500",
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/20 dark:from-slate-900 dark:via-amber-900/5 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link
            to="/design"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            Design & Architecture
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            to="/design/projects"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            Projects
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 dark:text-gray-300 truncate max-w-[200px]">
            {project.title}
          </span>
        </div>

        {/* Project Header */}
        <motion.header
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[project.category] || "from-amber-500 to-orange-500"}`}
            >
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {project.software.map((sw) => (
              <span
                key={sw}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium"
              >
                <Box className="w-3.5 h-3.5 text-amber-500" />
                {sw}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.section
          className="mb-10 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700/50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/1200x600?text=Project+View";
            }}
          />
        </motion.section>

        {/* Project Overview */}
        <motion.section
          className="mb-10 bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </motion.section>

        {/* Specifications */}
        {project.details && (
          <motion.section
            className="mb-10 bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(project.details).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-700/50"
                >
                  <strong className="text-amber-600 dark:text-amber-400 text-sm block mb-1 font-semibold">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </strong>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {Array.isArray(value) ? value.join(", ") : value}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Project Gallery */}
        <motion.section
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(project.images && project.images.length > 0
              ? project.images
              : [project.image]
            ).map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`${project.title} view ${index + 1}`}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600?text=Project+View+${
                      index + 1
                    }`;
                  }}
                />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tags */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5 text-amber-500" />
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-lg text-amber-700 dark:text-amber-400 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/design/projects"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 transition-all hover:shadow-lg"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignProjectDetail;
