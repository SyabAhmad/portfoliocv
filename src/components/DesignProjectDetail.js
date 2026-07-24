import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { designProjects } from "../data/designData";
import { ChevronRight, Calendar, Tag, Box, ArrowLeft } from "lucide-react";

const cardRotations = [-1.5, 1, -0.8, 1.2, -0.5];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600"];

const DesignProjectDetail = () => {
  const { projectId } = useParams();
  const project = designProjects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/design/projects" replace />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-stone-500 font-handwriting">
          <Link to="/design" className="hover:text-stone-300 transition-colors">Design & Architecture</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/design/projects" className="hover:text-stone-300 transition-colors">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-300 truncate max-w-[200px]">{project.title}</span>
        </div>

        {/* Project Header - Flyer */}
        <motion.header className="mb-10" initial={{ opacity: 0, y: 20, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: -1 }} style={{ transform: "rotate(-1deg)" }}>
          <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/40 p-6 md:p-8">
            <div className="absolute -top-3 left-[10%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm z-10" />
            <div className="absolute -top-3 right-[15%] w-16 h-5 bg-stone-400/40 rotate-[3deg] rounded-sm z-10" />
            <div className="absolute -top-2 left-[40%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-stone-200 bg-stone-800 font-handwriting">{project.category}</span>
              <span className="flex items-center gap-1.5 text-sm text-stone-500 font-handwriting">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(project.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4 font-handwriting">{project.title}</h1>

            <div className="flex flex-wrap gap-2">
              {project.software.map((sw) => (
                <span key={sw} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-sm text-stone-600 dark:text-stone-300 font-medium font-handwriting">
                  <Box className="w-3.5 h-3.5 text-stone-500" />{sw}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.section className="mb-10 rounded-sm overflow-hidden border border-stone-200 dark:border-stone-700 shadow-xl shadow-black/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <img src={project.thumbnail} alt={project.title} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" onError={(e) => { e.target.src = "/default.webp"; }} />
        </motion.section>

        {/* Project Overview - Flyer */}
        <motion.section className="mb-10 relative" initial={{ opacity: 0, y: 20, rotate: 0.5 }} animate={{ opacity: 1, y: 0, rotate: 0.5 }} transition={{ delay: 0.2 }} style={{ transform: "rotate(0.5deg)" }}>
          <div className="absolute -top-2.5 left-[12%] w-14 h-5 bg-stone-400/40 rotate-[-3deg] rounded-sm z-10" />
          <div className="absolute -top-1.5 right-[10%] w-2.5 h-2.5 bg-slate-500 rounded-full shadow border border-black/20 z-10" />
          <div className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm p-6 md:p-8 shadow-lg">
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4 font-handwriting">Project Overview</h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-handwriting">{project.description}</p>
          </div>
        </motion.section>

        {/* Specifications - Flyer */}
        {project.details && (
          <motion.section className="mb-10 relative" initial={{ opacity: 0, y: 20, rotate: -0.5 }} animate={{ opacity: 1, y: 0, rotate: -0.5 }} transition={{ delay: 0.3 }} style={{ transform: "rotate(-0.5deg)" }}>
            <div className="absolute -top-2.5 left-[15%] w-12 h-4 bg-stone-400/40 rotate-[-4deg] rounded-sm z-10" />
            <div className="absolute -top-1.5 right-[12%] w-2.5 h-2.5 bg-rose-800 rounded-full shadow border border-black/20 z-10" />
            <div className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm p-6 md:p-8 shadow-lg">
              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-6 font-handwriting">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(project.details).map(([key, value], i) => {
                  const rot = cardRotations[i % cardRotations.length];
                  return (
                    <motion.div key={key} whileHover={{ scale: 1.02, rotate: 0 }} className="bg-stone-200/50 dark:bg-stone-700/30 rounded-sm p-4 border border-stone-300/50 dark:border-stone-600/30" style={{ transform: `rotate(${rot}deg)` }}>
                      <strong className="text-stone-600 dark:text-stone-300 text-sm block mb-1 font-semibold font-handwriting">{key.charAt(0).toUpperCase() + key.slice(1)}</strong>
                      <span className="text-stone-600 dark:text-stone-400 text-sm font-handwriting">{Array.isArray(value) ? value.join(", ") : value}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}

        {/* Project Gallery - Flyer cards */}
        <motion.section className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-6 font-handwriting">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(project.images && project.images.length > 0 ? project.images : [project.image]).map((image, index) => {
              const rot = cardRotations[index % cardRotations.length];
              const pinColor = pinColors[index % pinColors.length];
              return (
                <motion.div key={index} whileHover={{ scale: 1.02, rotate: 0 }} className="relative" style={{ transform: `rotate(${rot}deg)` }}>
                  <div className="absolute -top-2.5 left-[12%] w-12 h-4 bg-stone-400/40 rotate-[-3deg] rounded-sm z-10" />
                  <div className={`absolute -top-1.5 right-[10%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />
                  <div className="rounded-sm overflow-hidden border border-stone-200 dark:border-stone-700 shadow-lg">
                    <img src={image} alt={`${project.title} view ${index + 1}`} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" onError={(e) => { e.target.src = "/default.webp"; }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Tags - Flyer */}
        <motion.section className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2 font-handwriting">
            <Tag className="w-5 h-5 text-stone-500" />Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-stone-600 dark:text-stone-300 text-sm font-medium font-handwriting">{tag}</span>
            ))}
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/design/projects" className="inline-flex items-center gap-2 px-7 py-3 bg-stone-800 dark:bg-stone-200 border border-stone-700 dark:border-stone-300 text-stone-200 dark:text-stone-900 font-semibold rounded-full hover:bg-stone-700 dark:hover:bg-stone-300 transition-all hover:shadow-lg font-handwriting">
              <ArrowLeft size={16} /> Back to All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignProjectDetail;
