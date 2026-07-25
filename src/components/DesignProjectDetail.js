import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { designProjects } from "../data/designData";
import { ChevronRight, Calendar, Box, ArrowLeft } from "lucide-react";

const DesignProjectDetail = () => {
  const { projectId } = useParams();
  const project = designProjects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/design/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-stone-400 font-handwriting">
          <Link to="/design" className="text-stone-500">Design & Architecture</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/design/projects" className="text-stone-500">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-900 truncate max-w-[200px]">{project.title}</span>
        </div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">{project.category}</span>
            <span className="flex items-center gap-1.5 text-sm text-stone-400 font-handwriting">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(project.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 font-heading mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.software.map((sw) => (
              <span key={sw} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 rounded-full text-sm text-stone-600 font-handwriting">
                <Box className="w-3.5 h-3.5 text-stone-400" />{sw}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10 rounded-xl overflow-hidden border border-stone-200">
          <img src={project.thumbnail} alt={project.title} className="w-full h-auto object-cover" onError={(e) => { e.target.src = "/default.webp"; }} />
        </motion.div>

        {/* Overview */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-stone-900 font-heading mb-4">Project Overview</h2>
          <p className="text-stone-500 leading-relaxed font-handwriting">{project.description}</p>
        </motion.div>

        {/* Specifications */}
        {project.details && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-stone-900 font-heading mb-6">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(project.details).map(([key, value]) => (
                <div key={key} className="bg-stone-50 rounded-lg p-4 border border-stone-100">
                  <strong className="text-stone-400 text-xs uppercase tracking-wider block mb-1 font-handwriting">{key}</strong>
                  <span className="text-stone-700 text-sm font-handwriting">{Array.isArray(value) ? value.join(", ") : value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gallery */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 font-heading mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(project.images && project.images.length > 0 ? project.images : [project.image]).map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-stone-200">
                <img src={image} alt={`${project.title} view ${index + 1}`} className="w-full h-auto object-cover" onError={(e) => { e.target.src = "/default.webp"; }} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 font-heading mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-full text-stone-600 text-sm font-handwriting">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Back */}
        <div className="text-center">
          <Link to="/design/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-stone-50 font-bold rounded-lg font-heading">
            <ArrowLeft size={16} /> Back to All Projects
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DesignProjectDetail;
