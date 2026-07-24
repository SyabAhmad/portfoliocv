import React, { useState, useEffect, useCallback } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaGithub,
  FaExternalLinkAlt,
  FaBriefcase,
  FaFolderOpen,
  FaChevronLeft,
  FaChevronRight,
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

const cardRotations = [-3, 2.5, -1.8, 3.2, -2, 1.5, -2.8, 2.2, -1.2, 3.5, -2.5, 1.8];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600", "bg-stone-600", "bg-rose-900", "bg-slate-700"];
const tapeRotations = [-8, 6, -4, 7, -5, 3, -6, 5];

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBroadSkill, setSelectedBroadSkill] = useState("All");
  const [activeTab, setActiveTab] = useState("all");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const FEATURED_TITLES = ["StitchPoint", "Req2Ops", "AI Voice Agent", "RunAI (MenteE)", "Viddeo Enhancing Project", "CamWatch"];

  const getBroadSkills = (project) => {
    const broadSkills = new Set();
    const skills = (project.skills || "").split(", ").map(s => s.trim());
    const category = project.category || "";
    if (category === "Web Development" || skills.some(s => ["React", "React.js", "ReactJS", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Frontend Development", "UI/UX", "UI/UX Design", "SEO", "E-commerce", "Web Development"].includes(s))) broadSkills.add("Web Development");
    if (skills.some(s => ["Node.js", "Express.js", "Python", "Django", "Flask", "FastAPI", "Backend Development", "API Development", "REST API", "Spring Boot", "Java", "PHP", "Laravel", "PostgreSQL", "MySQL", "MongoDB", "Database Design", "Supabase", "Firebase", "Microservices", "Distributed Systems", "API Design", "Backend Engineering"].includes(s))) broadSkills.add("Backend Engineering");
    if (category === "AI & Machine Learning" || skills.some(s => ["Machine Learning", "Deep Learning", "Natural Language Processing", "NLP", "Generative AI", "LLMs", "AI Integration", "Prompt Engineering", "Data Science", "Data Analysis", "Time Series Analysis", "Algorithm Implementation", "Data Visualization", "Analytics", "AI Development"].includes(s))) broadSkills.add("AI Development");
    if (skills.some(s => ["Computer Vision", "OpenCV", "Object Detection", "YOLO", "Image Processing"].includes(s))) broadSkills.add("Computer Vision");
    if (category === "Mobile App Development" || skills.some(s => ["Mobile App Development", "Mobile Development", "Android Development", "Android", "Kotlin", "iOS", "React Native", "Application Development", "Developer Tools", "Extension Development"].includes(s))) broadSkills.add("Application Development");
    if (skills.some(s => ["Docker", "Cloud", "CI/CD", "GitHub Actions", "DevOps", "AWS", "Azure", "GCP"].includes(s))) broadSkills.add("DevOps");
    return Array.from(broadSkills);
  };

  const validProjects = Array.isArray(projects) ? projects : [];

  const typeFilteredProjects = validProjects.filter((project) => {
    if (activeTab === "client-demos") return project.projectType === "client-demo";
    if (activeTab === "inspirations") return project.projectType === "portfolio";
    return true;
  });

  const categories = ["All", ...new Set(typeFilteredProjects.map((p) => p.category).filter(Boolean))];

  const filteredProjects = typeFilteredProjects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const broadSkillMatch = selectedBroadSkill === "All" || getBroadSkills(project).includes(selectedBroadSkill);
    return categoryMatch && broadSkillMatch;
  });

  const projectsToShow = showAllProjects ? filteredProjects : filteredProjects.slice(0, 12);

  const featuredProjects = FEATURED_TITLES.map(title => validProjects.find(p => p.title === title)).filter(Boolean);
  const currentFeatured = featuredProjects[featuredIndex] || featuredProjects[0];
  const featuredTitlesSet = new Set(FEATURED_TITLES);
  const gridProjects = projectsToShow.filter(p => !featuredTitlesSet.has(p.title));

  useEffect(() => {
    if (featuredProjects.length <= 1) return;
    const timer = setInterval(() => setFeaturedIndex(prev => (prev + 1) % featuredProjects.length), 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextFeatured = useCallback(() => setFeaturedIndex(prev => (prev + 1) % featuredProjects.length), [featuredProjects.length]);
  const prevFeatured = useCallback(() => setFeaturedIndex(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length), [featuredProjects.length]);

  const resetFilters = () => { setSelectedCategory("All"); setSelectedBroadSkill("All"); setShowAllProjects(false); };

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects - Syed Syab Ahmad",
    description: "Portfolio of AI, machine learning, and web development projects by Syed Syab Ahmad.",
    url: "https://syab.tech/projects",
    author: { "@type": "Person", name: "Syed Syab Ahmad" },
    hasPart: validProjects.map((project) => ({ "@type": "SoftwareApplication", name: project.title, description: project.description, applicationCategory: project.category, operatingSystem: "Web", author: { "@type": "Person", name: "Syed Syab Ahmad" } })),
  };

  // Close modal on escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (validProjects.length === 0) {
    return (
      <>
        <SEO title="Projects - Syed Syab Ahmad" description="Explore AI, machine learning, and web development projects." keywords="AI projects" url="https://syab.tech/projects" structuredData={projectsStructuredData} />
        <div className="min-h-screen p-8 pt-24 bg-stone-900 transition-colors duration-300">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold text-stone-100 mb-12 font-handwriting">Projects</h2>
            <div className="bg-stone-800 border border-stone-700 rounded-sm p-8">
              <p className="text-stone-400 text-lg">Projects are being loaded...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  const TabButton = ({ active, onClick, icon: Icon, label, count }) => (
    <button onClick={onClick} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-handwriting ${active ? "bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 shadow-lg" : "bg-stone-800/50 text-stone-400 hover:bg-stone-700 hover:text-stone-300"}`}>
      <Icon size={14} />{label}
      {count !== undefined && <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-stone-700 text-stone-300">{count}</span>}
    </button>
  );

  return (
    <>
      <SEO title="Projects - Syed Syab Ahmad" description="Explore AI, machine learning, and web development projects." keywords="AI projects portfolio" url="https://syab.tech/projects" structuredData={projectsStructuredData} />

      <div className="min-h-screen bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="mb-10">
            <motion.h1 initial={{ opacity: 0, y: 20, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: -1 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-100 font-handwriting tracking-wide mb-3" style={{ transform: "rotate(-1deg)" }}>
              Projects
            </motion.h1>
            <p className="text-stone-500 text-lg max-w-xl font-handwriting">Click any project to see the details.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <TabButton active={activeTab === "all"} onClick={() => { setActiveTab("all"); setSelectedCategory("All"); setShowAllProjects(false); }} icon={FaFolderOpen} label="All" />
            <TabButton active={activeTab === "client-demos"} onClick={() => { setActiveTab("client-demos"); setSelectedCategory("All"); setShowAllProjects(false); }} icon={FaBriefcase} label="Client Demos" count={validProjects.filter(p => p.projectType === "client-demo").length} />
            <TabButton active={activeTab === "inspirations"} onClick={() => { setActiveTab("inspirations"); setSelectedCategory("All"); setShowAllProjects(false); }} icon={FaFolderOpen} label="Inspirations" count={validProjects.filter(p => p.projectType === "portfolio").length} />
          </div>

          {/* Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button key={category} onClick={() => { setSelectedCategory(category); setShowAllProjects(false); }} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 font-handwriting ${selectedCategory === category ? "bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 shadow-md" : "bg-stone-800/50 text-stone-400 hover:bg-stone-700 hover:text-stone-300"}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-stone-500 mb-8 font-handwriting">
            Showing <span className="font-semibold text-stone-300">{filteredProjects.length}</span> projects
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-500 text-lg mb-4 font-handwriting">No projects found.</p>
              <button onClick={resetFilters} className="px-6 py-2.5 bg-stone-800 text-stone-100 font-medium rounded-full hover:scale-105 transition-all duration-300 font-handwriting">View All</button>
            </div>
          ) : (
            <>
              {/* Featured Carousel */}
              {featuredProjects.length > 0 && (
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider font-handwriting">Featured Projects</h2>
                    <div className="flex gap-2">
                      <button onClick={prevFeatured} className="p-2 rounded-full bg-stone-800 text-stone-400 hover:bg-stone-700 transition-all"><FaChevronLeft size={14} /></button>
                      <button onClick={nextFeatured} className="p-2 rounded-full bg-stone-800 text-stone-400 hover:bg-stone-700 transition-all"><FaChevronRight size={14} /></button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={featuredIndex} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
                      <button onClick={() => setSelectedProject(currentFeatured)} className="w-full text-left cursor-pointer">
                        <div className="relative group rounded-sm overflow-hidden bg-stone-800 border border-stone-700">
                          <div className="relative h-64 sm:h-80 lg:h-[28rem] overflow-hidden">
                            <img src={currentFeatured.image || "/default.webp"} alt={currentFeatured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" onError={(e) => { e.target.src = "/default.webp"; }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
                            {currentFeatured.projectType === "client-demo" && <div className="absolute top-4 left-4 z-10"><span className="px-3 py-1 text-xs font-bold rounded-full bg-stone-800/90 text-stone-200 font-handwriting">CLIENT DEMO</span></div>}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {currentFeatured.category && <span className="px-3 py-1 bg-stone-400/20 text-stone-200 text-xs rounded-full border border-stone-400/20 font-handwriting">{currentFeatured.category}</span>}
                                <span className="px-3 py-1 bg-rose-800/80 text-stone-100 text-xs rounded-full font-handwriting">Featured</span>
                              </div>
                              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-100 mb-2 font-handwriting">{currentFeatured.title}</h2>
                              <p className="text-stone-300 text-sm sm:text-base max-w-2xl mb-4 line-clamp-2">{currentFeatured.description}</p>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {currentFeatured.techStack && currentFeatured.techStack.split(", ").slice(0, 6).map((tech, idx) => (
                                  <span key={idx} className="px-2.5 py-1 bg-stone-400/10 text-stone-200 text-xs rounded-full border border-stone-400/10 font-handwriting">{tech.trim()}</span>
                                ))}
                              </div>
                              <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-800 text-stone-100 text-sm font-semibold rounded-full font-handwriting">Click to view details →</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-center gap-2 mt-4">
                    {featuredProjects.map((_, idx) => (
                      <button key={idx} onClick={() => setFeaturedIndex(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === featuredIndex ? "bg-stone-300 w-6" : "bg-stone-600 hover:bg-stone-500"}`} />
                    ))}
                  </div>
                </div>
              )}

              {/* Project Name Flyers Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                {gridProjects.map((project, index) => {
                  const rot = cardRotations[index % cardRotations.length];
                  const pinColor = pinColors[index % pinColors.length];
                  const tapeRot = tapeRotations[index % tapeRotations.length];

                  return (
                    <motion.button
                      key={`${project.title}-${index}`}
                      initial={{ opacity: 0, scale: 0.8, rotate: rot }}
                      whileInView={{ opacity: 1, scale: 1, rotate: rot }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="relative cursor-pointer group"
                      style={{ transform: `rotate(${rot}deg)` }}
                    >
                      {/* Tape */}
                      <div className="absolute -top-2 left-[20%] w-12 h-4 bg-stone-400/40 rounded-sm shadow-sm z-10" style={{ transform: `rotate(${tapeRot}deg)` }} />
                      {/* Pin */}
                      <div className={`absolute -top-1.5 right-[15%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                      <div className="relative bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-lg p-4 sm:p-5 text-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/30 group-hover:border-stone-400 dark:group-hover:border-stone-500">
                        {project.projectType === "client-demo" && (
                          <span className="absolute top-2 left-2 px-1.5 py-0.5 text-[8px] font-bold rounded-full bg-stone-800 text-stone-200 font-handwriting">DEMO</span>
                        )}
                        <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 font-handwriting leading-tight mb-2 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[9px] text-stone-400 font-handwriting">{project.duration}</span>
                        <div className="mt-2 text-[10px] text-rose-700 dark:text-rose-400 font-bold font-handwriting opacity-0 group-hover:opacity-100 transition-opacity">
                          click me →
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </>
          )}

          {/* View More */}
          {filteredProjects.length > 12 && (
            <div className="text-center mt-12">
              <motion.button onClick={() => setShowAllProjects(!showAllProjects)} whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-8 py-3 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-semibold rounded-full hover:shadow-lg transition-all duration-300 font-handwriting">
                {showAllProjects ? <>Show Less <FaChevronUp size={14} /></> : <>View All {filteredProjects.length} Projects <FaChevronDown size={14} /></>}
              </motion.button>
            </div>
          )}

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Projects", value: validProjects.length, color: "text-stone-100", rotate: -1.5 },
              { label: "Client Demos", value: validProjects.filter((p) => p.projectType === "client-demo").length, color: "text-stone-400", rotate: 1 },
              { label: "AI & ML", value: validProjects.filter((p) => p.category === "AI & Machine Learning").length, color: "text-rose-400", rotate: -0.5 },
              { label: "Web Dev", value: validProjects.filter((p) => p.category === "Web Development").length, color: "text-slate-400", rotate: 1.5 },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20, rotate: stat.rotate }} whileInView={{ opacity: 1, y: 0, rotate: stat.rotate }} viewport={{ once: true }} whileHover={{ scale: 1.05, rotate: 0 }} className="text-center p-5 rounded-sm bg-stone-800 border border-stone-700 relative" style={{ transform: `rotate(${stat.rotate}deg)` }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-rose-800 rounded-full shadow-sm border border-rose-950 z-10" />
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1 font-handwriting`}>{stat.value}</div>
                <div className="text-xs text-stone-500 font-medium uppercase tracking-wider font-handwriting">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            {/* Backdrop */}
            <div className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm" />

            {/* Big flyer - no scroll, everything fits */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: -5, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, rotate: -1, scale: 1 }}
              exit={{ opacity: 0, y: 60, rotate: 5, scale: 0.85 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 180, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[90vh] sm:h-[85vh] bg-stone-100 dark:bg-stone-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-stone-200 dark:border-stone-700 overflow-hidden flex flex-col"
              style={{ transform: "rotate(-1deg)" }}
            >
              {/* Tape strips */}
              <div className="absolute -top-3 left-[10%] w-28 h-6 bg-stone-400/40 rotate-[-6deg] rounded-sm shadow-sm z-20" />
              <div className="absolute -top-3 right-[12%] w-24 h-5 bg-stone-400/40 rotate-[4deg] rounded-sm shadow-sm z-20" />
              <div className="absolute -top-2 left-[50%] w-16 h-5 bg-stone-400/30 rotate-[1deg] rounded-sm shadow-sm z-20" />

              {/* Pins */}
              <div className="absolute -top-2 left-[25%] w-4 h-4 bg-rose-800 rounded-full shadow-md border border-rose-950 z-20" />
              <div className="absolute -top-1.5 right-[30%] w-3 h-3 bg-slate-500 rounded-full shadow border border-slate-700 z-20" />

              {/* Content layout - split on desktop, stacked on mobile */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

                {/* Left side - Image + Title flyer */}
                <div className="md:w-[45%] relative flex flex-col">
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 md:flex-1 overflow-hidden">
                    {selectedProject.image && selectedProject.image !== "" ? (
                      <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" onError={(e) => { e.target.src = "/default.webp"; }} />
                    ) : (
                      <div className="w-full h-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center">
                        <span className="text-5xl font-handwriting text-stone-400">{selectedProject.title?.[0]}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-100 dark:from-stone-800 via-stone-100/20 dark:via-stone-800/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-100 dark:md:to-stone-800" />
                  </div>

                  {/* Title overlay */}
                  <div className="p-4 md:p-5 md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-gradient-to-t md:from-stone-100 dark:md:from-stone-800 md:to-transparent">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {selectedProject.category && <span className="px-2.5 py-0.5 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 text-[10px] rounded-full font-handwriting border border-stone-300 dark:border-stone-600">{selectedProject.category}</span>}
                      {selectedProject.projectType === "client-demo" && <span className="px-2.5 py-0.5 bg-stone-800 text-stone-200 text-[10px] rounded-full font-handwriting">DEMO</span>}
                      {selectedProject.projectType === "portfolio" && <span className="px-2.5 py-0.5 bg-rose-800 text-stone-200 text-[10px] rounded-full font-handwriting">PORTFOLIO</span>}
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 font-handwriting leading-tight">{selectedProject.title}</h2>
                    <p className="text-stone-500 text-xs font-handwriting mt-1">{selectedProject.duration}</p>
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="md:w-[55%] flex flex-col overflow-y-auto p-4 md:p-5 gap-3 md:gap-4">
                  {/* Close button - inline at top of right panel */}
                  <div className="flex justify-end -mt-1 md:-mt-2 mb-1">
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-600 flex items-center justify-center shadow-md cursor-pointer transition-colors"
                    >
                      <FaTimes size={13} />
                    </motion.button>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed font-handwriting">{selectedProject.description}</p>

                  {/* Key Features - sub flyer */}
                  {selectedProject.keyFeatures && (
                    <div className="relative bg-stone-200/60 dark:bg-stone-700/30 rounded-sm p-3 border border-stone-300/50 dark:border-stone-600/30">
                      <div className="absolute -top-2 left-[20%] w-10 h-4 bg-stone-400/30 rotate-[-4deg] rounded-sm" />
                      <div className="absolute -top-1 right-[15%] w-2 h-2 bg-stone-500 rounded-full shadow-sm" />
                      <h4 className="text-[10px] font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5 font-handwriting">Key Features</h4>
                      <p className="text-stone-600 dark:text-stone-400 text-[11px] sm:text-xs font-handwriting leading-relaxed">{selectedProject.keyFeatures}</p>
                    </div>
                  )}

                  {/* Tech Stack + Skills side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.techStack && (
                      <div>
                        <h4 className="text-[10px] font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5 font-handwriting">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedProject.techStack.split(", ").map((tech, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 text-[10px] rounded-full font-handwriting border border-stone-300/40 dark:border-stone-600/30">{tech.trim()}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProject.skills && (
                      <div>
                        <h4 className="text-[10px] font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-1.5 font-handwriting">Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedProject.skills.split(", ").map((skill, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 text-[10px] rounded-full font-handwriting border border-stone-300/40 dark:border-stone-600/30">{skill.trim()}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Links - pinned at bottom */}
                  <div className="mt-auto pt-3 border-t border-stone-300 dark:border-stone-600 flex flex-wrap gap-2">
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold rounded-full hover:shadow-lg transition-all duration-300 font-handwriting text-xs">
                        <FaExternalLinkAlt size={11} /> Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 border-2 border-stone-400 text-stone-600 dark:text-stone-300 font-bold rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 font-handwriting text-xs">
                        <FaGithub size={12} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
