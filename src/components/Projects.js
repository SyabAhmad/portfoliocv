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
  const [selectedBroadSkill, setSelectedBroadSkill] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const FEATURED_TITLES = ["StitchPoint", "Req2Ops", "AI Voice Agent", "RunAI (MenteE)", "Viddeo Enhancing Project", "CamWatch"];

  const BROAD_SKILL_CATEGORIES = ["Web Development", "Backend Engineering", "AI Development", "Computer Vision", "Application Development", "DevOps"];

  const getBroadSkills = (project) => {
    const broadSkills = new Set();
    const skills = (project.skills || "").split(", ").map(s => s.trim());
    const category = project.category || "";

    if (category === "Web Development" ||
        skills.some(s => ["React", "React.js", "ReactJS", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Frontend Development", "UI/UX", "UI/UX Design", "SEO", "E-commerce", "Web Development"].includes(s))) {
      broadSkills.add("Web Development");
    }
    if (skills.some(s => ["Node.js", "Express.js", "Python", "Django", "Flask", "FastAPI", "Backend Development", "API Development", "REST API", "Spring Boot", "Java", "PHP", "Laravel", "PostgreSQL", "MySQL", "MongoDB", "Database Design", "Supabase", "Firebase", "Microservices", "Distributed Systems", "API Design", "Backend Engineering"].includes(s))) {
      broadSkills.add("Backend Engineering");
    }
    if (category === "AI & Machine Learning" ||
        skills.some(s => ["Machine Learning", "Deep Learning", "Natural Language Processing", "NLP", "Generative AI", "LLMs", "AI Integration", "Prompt Engineering", "Data Science", "Data Analysis", "Time Series Analysis", "Algorithm Implementation", "Data Visualization", "Analytics", "AI Development"].includes(s))) {
      broadSkills.add("AI Development");
    }
    if (skills.some(s => ["Computer Vision", "OpenCV", "Object Detection", "YOLO", "Image Processing"].includes(s))) {
      broadSkills.add("Computer Vision");
    }
    if (category === "Mobile App Development" ||
        skills.some(s => ["Mobile App Development", "Mobile Development", "Android Development", "Android", "Kotlin", "iOS", "React Native", "Application Development", "Developer Tools", "Extension Development"].includes(s))) {
      broadSkills.add("Application Development");
    }
    if (skills.some(s => ["Docker", "Cloud", "CI/CD", "GitHub Actions", "DevOps", "AWS", "Azure", "GCP"].includes(s))) {
      broadSkills.add("DevOps");
    }
    return Array.from(broadSkills);
  };

  const validProjects = Array.isArray(projects) ? projects : [];

  const typeFilteredProjects = validProjects.filter((project) => {
    if (activeTab === "client-demos") {
      return project.projectType === "client-demo";
    }
    return true;
  });

  const categories = [
    "All",
    ...new Set(typeFilteredProjects.map((project) => project.category).filter(Boolean)),
  ];

  const allBroadSkills = typeFilteredProjects.flatMap(p => getBroadSkills(p));
  const uniqueBroadSkills = ["All", ...new Set(allBroadSkills)];

  const filteredProjects = typeFilteredProjects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const broadSkillMatch = selectedBroadSkill === "All" || getBroadSkills(project).includes(selectedBroadSkill);
    return categoryMatch && broadSkillMatch;
  });

  const projectsToShow = showAllProjects ? filteredProjects : filteredProjects.slice(0, 7);

  // Featured carousel projects
  const featuredProjects = FEATURED_TITLES
    .map(title => validProjects.find(p => p.title === title))
    .filter(Boolean);

  const currentFeatured = featuredProjects[featuredIndex] || featuredProjects[0];

  // Grid projects: exclude featured titles from the grid
  const featuredTitlesSet = new Set(FEATURED_TITLES);
  const gridProjects = projectsToShow.filter(p => !featuredTitlesSet.has(p.title));

  // Auto-rotate featured carousel
  useEffect(() => {
    if (featuredProjects.length <= 1) return;
    const timer = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextFeatured = useCallback(() => {
    setFeaturedIndex(prev => (prev + 1) % featuredProjects.length);
  }, [featuredProjects.length]);

  const prevFeatured = useCallback(() => {
    setFeaturedIndex(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  }, [featuredProjects.length]);

  const toggleProjectExpansion = (index) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedBroadSkill("All");
    setShowAllProjects(false);
  };

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects - Syed Syab Ahmad",
    description: "Portfolio of AI, machine learning, and web development projects by Syed Syab Ahmad.",
    url: "https://syab.tech/projects",
    author: { "@type": "Person", name: "Syed Syab Ahmad" },
    hasPart: validProjects.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      applicationCategory: project.category,
      operatingSystem: "Web",
      author: { "@type": "Person", name: "Syed Syab Ahmad" },
    })),
  };

  if (validProjects.length === 0) {
    return (
      <>
        <SEO
          title="Projects - Syed Syab Ahmad"
          description="Explore AI, machine learning, and web development projects by Syed Syab Ahmad."
          keywords="AI projects, machine learning projects, web development portfolio"
          url="https://syab.tech/projects"
          structuredData={projectsStructuredData}
        />
        <div className="min-h-screen p-8 pt-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 font-bebas">Projects</h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50 rounded-xl p-8">
              <p className="text-gray-600 dark:text-gray-300 text-lg">Projects are being loaded...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Projects - Syed Syab Ahmad"
        description="Explore AI, machine learning, and web development projects by Syed Syab Ahmad including healthcare AI systems, malaria detection, heart disease prediction, RAG pipelines, LLM integration, and innovative web solutions."
        keywords="AI projects portfolio, machine learning projects, web development portfolio, healthcare AI, malaria detection, heart disease prediction, Python projects, React projects, Django projects, Flask projects, TensorFlow projects, PyTorch projects, LLM integration, RAG pipelines, Streamlit apps, Docker deployment, Cloud projects"
        url="https://syab.tech/projects"
        structuredData={projectsStructuredData}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-bebas tracking-wide mb-3">
              PROJECTS
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl">
              A collection of work spanning AI, full-stack development, and creative technology.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => { setActiveTab("all"); setSelectedCategory("All"); setSelectedBroadSkill("All"); setShowAllProjects(false); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <FaFolderOpen size={14} />
              All
            </button>
            <button
              onClick={() => { setActiveTab("client-demos"); setSelectedCategory("All"); setSelectedBroadSkill("All"); setShowAllProjects(false); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "client-demos"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <FaBriefcase size={14} />
              Client Demos
              <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {validProjects.filter((p) => p.projectType === "client-demo").length}
              </span>
            </button>
          </div>

          {/* Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => { setSelectedCategory(category); setShowAllProjects(false); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-400 dark:text-gray-500 mb-8">
            Showing <span className="font-semibold text-gray-700 dark:text-gray-300">{filteredProjects.length}</span> projects
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 dark:text-gray-500 text-lg mb-4">No projects found with the selected filters.</p>
              <button onClick={resetFilters} className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:scale-105 transition-all duration-300">
                View All Projects
              </button>
            </div>
          ) : (
            <>
              {/* Featured Carousel */}
              {featuredProjects.length > 0 && (
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Featured Projects</h2>
                    <div className="flex gap-2">
                      <button onClick={prevFeatured} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                        <FaChevronLeft size={14} />
                      </button>
                      <button onClick={nextFeatured} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                        <FaChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={featuredIndex}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                    >
                      <a
                        href={currentFeatured.liveUrl || currentFeatured.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50"
                      >
                        <div className="relative h-64 sm:h-80 lg:h-[28rem] overflow-hidden">
                          <img
                            src={currentFeatured.image || "/default.png"}
                            alt={currentFeatured.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => { e.target.src = "/default.png"; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          {currentFeatured.projectType === "client-demo" && (
                            <div className="absolute top-4 left-4 z-10">
                              <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/90 text-gray-900 backdrop-blur-sm">CLIENT DEMO</span>
                            </div>
                          )}

                          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {currentFeatured.category && (
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                                  {currentFeatured.category}
                                </span>
                              )}
                              <span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                Featured
                              </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 font-bebas tracking-wide">
                              {currentFeatured.title}
                            </h2>
                            <p className="text-gray-200 text-sm sm:text-base max-w-2xl mb-4 line-clamp-2">
                              {currentFeatured.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {currentFeatured.techStack && currentFeatured.techStack.split(", ").slice(0, 6).map((tech, idx) => (
                                <span key={idx} className="px-2.5 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-md border border-white/10">
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-3">
                              {currentFeatured.liveUrl && (
                                <span className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-100 transition-all duration-300">
                                  <FaExternalLinkAlt size={12} />
                                  Live Demo
                                </span>
                              )}
                              {currentFeatured.githubUrl && (
                                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                  <FaGithub size={14} />
                                  Code
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  </AnimatePresence>

                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {featuredProjects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFeaturedIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === featuredIndex
                            ? "bg-gray-900 dark:bg-white w-6"
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Grid - 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <AnimatePresence>
                  {gridProjects.map((project, index) => {
                    const isExpanded = expandedProjects.has(index);
                    const shouldTruncate = project.description.length > 120;

                    return (
                      <motion.div
                        key={`${project.title}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className="relative h-full rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/20">
                          {/* Image Section */}
                          <div className="relative h-48 sm:h-52 overflow-hidden">
                            {project.image ? (
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => { e.target.src = "/default.png"; }}
                              />
                            ) : (
                              <img
                                src="/default.png"
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-all duration-300 shadow-lg"
                                  >
                                    <FaExternalLinkAlt size={16} />
                                  </a>
                                )}
                                {project.githubUrl && (
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 hover:scale-110 transition-all duration-300 shadow-lg"
                                  >
                                    <FaGithub size={16} />
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Badges */}
                            <div className="absolute top-3 left-3 flex gap-2">
                              {project.projectType === "client-demo" && (
                                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-white/90 text-gray-900 backdrop-blur-sm">DEMO</span>
                              )}
                            </div>

                            {/* Category Badge */}
                            <div className="absolute bottom-3 left-3">
                              {project.category && (
                                <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium rounded-full border border-white/10">
                                  {project.category}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-5">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                {project.title}
                              </h3>
                              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium whitespace-nowrap ml-2 mt-1">
                                {project.duration}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">
                              {shouldTruncate && !isExpanded
                                ? `${project.description.substring(0, 120)}...`
                                : project.description}
                            </p>
                            {shouldTruncate && (
                              <button
                                onClick={() => toggleProjectExpansion(index)}
                                className="text-emerald-600 dark:text-emerald-400 text-xs font-medium hover:underline mb-3"
                              >
                                {isExpanded ? "Show less" : "Read more"}
                              </button>
                            )}

                            {/* Expanded Content */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  {project.keyFeatures && (
                                    <div className="mb-3">
                                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Features</span>
                                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{project.keyFeatures}</p>
                                    </div>
                                  )}
                                  {project.techStack && (
                                    <div className="mb-3">
                                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Tech Stack</span>
                                      <div className="flex flex-wrap gap-1 mt-1.5">
                                        {project.techStack.split(", ").map((tech, idx) => (
                                          <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-[10px] rounded-md">
                                            {tech.trim()}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-1">
                              {project.skills && project.skills.split(", ").slice(0, 3).map((skill, idx) => (
                                <span key={idx} className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] rounded-full font-medium">
                                  {skill.trim()}
                                </span>
                              ))}
                              {project.skills && project.skills.split(", ").length > 3 && (
                                <span className="px-2 py-0.5 text-gray-400 dark:text-gray-500 text-[10px]">
                                  +{project.skills.split(", ").length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </>
          )}

          {/* View More */}
          {filteredProjects.length > 7 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {showAllProjects ? (
                  <>Show Less <FaChevronUp size={14} /></>
                ) : (
                  <>View All {filteredProjects.length} Projects <FaChevronDown size={14} /></>
                )}
              </button>
            </div>
          )}

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Projects", value: validProjects.length, color: "text-gray-900 dark:text-white" },
              { label: "Client Demos", value: validProjects.filter((p) => p.projectType === "client-demo").length, color: "text-gray-600 dark:text-gray-400" },
              { label: "AI & ML", value: validProjects.filter((p) => p.category === "AI & Machine Learning").length, color: "text-emerald-600 dark:text-emerald-400" },
              { label: "Web Dev", value: validProjects.filter((p) => p.category === "Web Development").length, color: "text-blue-600 dark:text-blue-400" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1 font-bebas`}>{stat.value}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
