import React, { useState, useEffect, useCallback } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "./SEO";

let projects = [];
try {
  projects = require("../data/projectsData").default || [];
} catch (error) {
  console.warn("Projects data not found, using fallback data");
  projects = [];
}

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const validProjects = Array.isArray(projects) ? projects : [];

  const typeFilteredProjects = validProjects.filter((project) => {
    if (selectedType === "client") return project.projectType === "client-demo";
    if (selectedType === "personal") return project.projectType !== "client-demo" && project.projectType !== "portfolio";
    if (selectedType === "portfolio-sites") return project.projectType === "portfolio";
    return true;
  });

  const categories = ["All", ...new Set(typeFilteredProjects.map((p) => p.category).filter(Boolean))];

  const filteredProjects = typeFilteredProjects.filter((project) => {
    return selectedCategory === "All" || project.category === selectedCategory;
  });

  const projectsToShow = showAllProjects ? filteredProjects : filteredProjects.slice(0, 18);

  const clientDemos = validProjects.filter(p => p.projectType === "client-demo");
  const aiProjects = validProjects.filter(p => p.category === "AI & Machine Learning");
  const webProjects = validProjects.filter(p => p.category === "Web Development");

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects - Syed Syab Ahmad",
    description: "Portfolio of AI, machine learning, and web development projects by Syed Syab Ahmad.",
    url: "https://syab.tech/projects",
    author: { "@type": "Person", name: "Syed Syab Ahmad" },
    hasPart: validProjects.map((project) => ({ "@type": "SoftwareApplication", name: project.title, description: project.description, applicationCategory: project.category, operatingSystem: "Web", author: { "@type": "Person", name: "Syed Syab Ahmad" } })),
  };

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <SEO title="Projects - Syed Syab Ahmad" description="Explore AI, machine learning, and web development projects." keywords="AI projects portfolio" url="https://syab.tech/projects" structuredData={projectsStructuredData} />

      <div className="min-h-screen bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <p className="text-sm font-medium text-stone-400 mb-3 font-handwriting tracking-widest uppercase">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 font-heading mb-3">
              Things I've built.
            </h1>
            <p className="text-stone-500 text-lg max-w-xl font-handwriting">
              {validProjects.length} projects across AI, web development, and mobile — client work, personal products, and open source.
            </p>
          </motion.div>

          {/* Stats Strip */}
          <div className="flex flex-wrap gap-8 mb-10 pb-8 border-b border-stone-200">
            {[
              { value: validProjects.length, label: "Total Projects" },
              { value: clientDemos.length, label: "Client Demos" },
              { value: aiProjects.length, label: "AI & ML" },
              { value: webProjects.length, label: "Web Dev" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-stone-900 font-heading">{stat.value}</div>
                <div className="text-xs text-stone-400 font-handwriting">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Type Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All Projects" },
                { key: "client", label: "Client Work", count: clientDemos.length },
                { key: "personal", label: "Personal Projects" },
                { key: "portfolio-sites", label: "Portfolio Sites" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => { setSelectedType(tab.key); setSelectedCategory("All"); setShowAllProjects(false); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium font-handwriting ${
                    selectedType === tab.key
                      ? "bg-stone-900 text-stone-50"
                      : "bg-white border border-stone-200 text-stone-500"
                  }`}
                >
                  {tab.label}
                  {tab.count !== undefined && <span className="ml-1.5 text-xs opacity-60">({tab.count})</span>}
                </button>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => { setSelectedCategory(category); setShowAllProjects(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium font-handwriting ${
                    selectedCategory === category
                      ? "bg-stone-800 text-stone-50"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-400 text-lg mb-4 font-handwriting">No projects found.</p>
              <button onClick={() => { setSelectedType("all"); setSelectedCategory("All"); }} className="px-6 py-2.5 bg-stone-900 text-stone-50 font-medium rounded-lg font-handwriting">
                View All
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {projectsToShow.map((project, index) => (
                  <motion.div
                    key={`${project.title}-${index}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => setSelectedProject(project)}
                    className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-stone-900 font-heading truncate">
                            {project.title}
                          </h3>
                          {project.projectType === "client-demo" && (
                            <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded-full font-handwriting flex-shrink-0">
                              CLIENT
                            </span>
                          )}
                          {project.projectType === "portfolio" && (
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full font-handwriting flex-shrink-0">
                              PORTFOLIO
                            </span>
                          )}
                        </div>
                        <p className="text-stone-500 text-sm font-handwriting leading-relaxed mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack && project.techStack.split(", ").slice(0, 5).map((tech, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                              {tech.trim()}
                            </span>
                          ))}
                          {project.techStack && project.techStack.split(", ").length > 5 && (
                            <span className="px-2.5 py-1 bg-stone-100 text-stone-400 text-xs rounded-full font-handwriting">
                              +{project.techStack.split(", ").length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-xs text-stone-400 font-handwriting">{project.duration}</span>
                        <span className="text-stone-300">→</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View More */}
              {filteredProjects.length > 18 && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="px-8 py-3 bg-white border border-stone-200 text-stone-600 font-semibold rounded-lg font-handwriting"
                  >
                    {showAllProjects ? "Show Less" : `View All ${filteredProjects.length} Projects`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-stone-100">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {selectedProject.category && (
                        <span className="px-2.5 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                          {selectedProject.category}
                        </span>
                      )}
                      {selectedProject.projectType === "client-demo" && (
                        <span className="px-2.5 py-0.5 bg-green-50 text-green-700 text-xs rounded-full font-handwriting">
                          Client Work
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-heading">
                      {selectedProject.title}
                    </h2>
                    <p className="text-stone-400 text-sm font-handwriting mt-1">{selectedProject.duration}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center flex-shrink-0"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {/* Image */}
                {selectedProject.image && selectedProject.image !== "" && (
                  <div className="rounded-lg overflow-hidden border border-stone-100">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-48 sm:h-64 object-cover"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                )}

                {/* Description */}
                <div>
                  <p className="text-stone-600 font-handwriting leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.keyFeatures && (
                  <div className="bg-stone-50 border border-stone-100 rounded-lg p-4">
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 font-handwriting">Key Features</h4>
                    <p className="text-stone-600 text-sm font-handwriting leading-relaxed">{selectedProject.keyFeatures}</p>
                  </div>
                )}

                {/* Tech Stack */}
                {selectedProject.techStack && (
                  <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 font-handwriting">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.split(", ").map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {selectedProject.skills && (
                  <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 font-handwriting">Skills Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.skills.split(", ").map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Links */}
              <div className="p-6 border-t border-stone-100 flex flex-wrap gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-50 font-bold rounded-lg font-handwriting text-sm"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-stone-300 text-stone-600 font-bold rounded-lg font-handwriting text-sm"
                  >
                    <FaGithub size={14} /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
