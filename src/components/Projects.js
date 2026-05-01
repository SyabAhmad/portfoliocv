import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaCalendarAlt,
  FaFilter,
  FaBriefcase,
  FaFolderOpen,
} from "react-icons/fa";
import SEO from "./SEO";

// Import with error handling
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
  const [activeTab, setActiveTab] = useState("all"); // "all" or "client-demos"

  // Broad skill categories for simplified filtering
  const BROAD_SKILL_CATEGORIES = ["Web Development", "Backend Engineering", "AI Development", "Computer Vision", "Application Development", "DevOps"];

  // Map project skills to broad categories
  const getBroadSkills = (project) => {
    const broadSkills = new Set();
    const skills = (project.skills || "").split(", ").map(s => s.trim());
    const category = project.category || "";

    // Web Development
    if (category === "Web Development" ||
        skills.some(s => ["React", "React.js", "ReactJS", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Frontend Development", "UI/UX", "UI/UX Design", "SEO", "E-commerce", "Web Development"].includes(s))) {
      broadSkills.add("Web Development");
    }

    // Backend Engineering
    if (skills.some(s => ["Node.js", "Express.js", "Python", "Django", "Flask", "FastAPI", "Backend Development", "API Development", "REST API", "Spring Boot", "Java", "PHP", "Laravel", "PostgreSQL", "MySQL", "MongoDB", "Database Design", "Supabase", "Firebase", "Microservices", "Distributed Systems", "API Design", "Backend Engineering"].includes(s))) {
      broadSkills.add("Backend Engineering");
    }

    // AI Development
    if (category === "AI & Machine Learning" ||
        skills.some(s => ["Machine Learning", "Deep Learning", "Natural Language Processing", "NLP", "Generative AI", "LLMs", "AI Integration", "Prompt Engineering", "Data Science", "Data Analysis", "Time Series Analysis", "Algorithm Implementation", "Data Visualization", "Analytics", "AI Development"].includes(s))) {
      broadSkills.add("AI Development");
    }

    // Computer Vision
    if (skills.some(s => ["Computer Vision", "OpenCV", "Object Detection", "YOLO", "Image Processing"].includes(s))) {
      broadSkills.add("Computer Vision");
    }

    // Application Development
    if (category === "Mobile App Development" ||
        skills.some(s => ["Mobile App Development", "Mobile Development", "Android Development", "Android", "Kotlin", "iOS", "React Native", "Application Development", "Developer Tools", "Extension Development"].includes(s))) {
      broadSkills.add("Application Development");
    }

    // DevOps
    if (skills.some(s => ["Docker", "Cloud", "CI/CD", "GitHub Actions", "DevOps", "AWS", "Azure", "GCP"].includes(s))) {
      broadSkills.add("DevOps");
    }

    return Array.from(broadSkills);
  };

  // Ensure projects is an array
  const validProjects = Array.isArray(projects) ? projects : [];

  // Filter by project type based on active tab
  const typeFilteredProjects = validProjects.filter((project) => {
    if (activeTab === "client-demos") {
      return project.projectType === "client-demo";
    }
    return true; // "all" tab shows everything
  });

  // Get unique categories and skills (from type-filtered projects)
  const categories = [
    "All",
    ...new Set(
      typeFilteredProjects.map((project) => project.category).filter(Boolean)
    ),
  ];

  // Extract broad skill categories from projects
  const allBroadSkills = typeFilteredProjects.flatMap(p => getBroadSkills(p));
  const uniqueBroadSkills = ["All", ...new Set(allBroadSkills)];

  // Filter projects by category and broad skill
  const filteredProjects = typeFilteredProjects.filter((project) => {
    const categoryMatch =
      selectedCategory === "All" || project.category === selectedCategory;
    const broadSkillMatch =
      selectedBroadSkill === "All" ||
      getBroadSkills(project).includes(selectedBroadSkill);
    return categoryMatch && broadSkillMatch;
  });

  // Limit projects shown initially
  const projectsToShow = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);

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
    description:
      "Portfolio of AI, machine learning, and web development projects by Syed Syab Ahmad.",
    url: "https://syab.tech/projects",
    author: {
      "@type": "Person",
      name: "Syed Syab Ahmad",
    },
    hasPart: validProjects.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      applicationCategory: project.category,
      operatingSystem: "Web",
      author: {
        "@type": "Person",
        name: "Syed Syab Ahmad",
      },
    })),
  };

  // If no projects data, show loading message
  if (validProjects.length === 0) {
    return (
      <>
        <SEO
          title="Projects - Syed Syab Ahmad"
          description="Explore AI, machine learning, and web development projects by Syed Syab Ahmad including healthcare AI systems, prediction models, and innovative solutions."
          keywords="AI projects, machine learning projects, web development portfolio, healthcare AI, Python projects, React projects"
          url="https://syab.tech/projects"
          structuredData={projectsStructuredData}
        />
        <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent mb-12">
              Projects
            </h2>
            <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-8 transition-colors duration-300">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Projects are being loaded...
              </p>
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
        description="Explore AI, machine learning, and web development projects by Syed Syab Ahmad including healthcare AI systems, malaria detection, heart disease prediction, RAG pipelines, LLM integration, and innovative web solutions. View my portfolio and technical expertise."
        keywords="AI projects portfolio, machine learning projects, web development portfolio, healthcare AI, malaria detection, heart disease prediction, Python projects, React projects, Django projects, Flask projects, TensorFlow projects, PyTorch projects, LLM integration, RAG pipelines, Streamlit apps, Docker deployment, Cloud projects, Project showcase, Technical portfolio, Software projects, Hire for projects, Freelance portfolio, Software solutions, AI portfolio, Developer portfolio, Full-stack projects, API projects, Real-world applications"
        url="https://syab.tech/projects"
        structuredData={projectsStructuredData}
      />

      <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/30 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 transition-colors duration-300">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-8">
            Projects
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-1.5 inline-flex gap-1">
              <button
                onClick={() => {
                  setActiveTab("all");
                  setSelectedCategory("All");
                  setSelectedBroadSkill("All");
                  setShowAllProjects(false);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                }`}
              >
                <FaFolderOpen />
                All Projects
              </button>
              <button
                onClick={() => {
                  setActiveTab("client-demos");
                  setSelectedCategory("All");
                  setSelectedBroadSkill("All");
                  setShowAllProjects(false);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === "client-demos"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                }`}
              >
                <FaBriefcase />
                Client Demos
                <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300">
                  {validProjects.filter((p) => p.projectType === "client-demo").length}
                </span>
              </button>
            </div>
          </div>

          {/* Filter Section */}
          <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 mb-8 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <FaFilter className="text-amber-600 dark:text-amber-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Filter Projects
                </h3>
              </div>

              {/* Compact Filter Pills */}
              <div className="flex flex-wrap gap-2 flex-1">
                {/* Category Pills */}
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowAllProjects(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                        : "bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-300/50 dark:border-gray-600/50 hover:border-amber-500/50 dark:hover:border-amber-400/50 hover:text-amber-600 dark:hover:text-amber-400"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Filter - Compact Row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                Skills:
              </span>
              {uniqueBroadSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => {
                    setSelectedBroadSkill(skill);
                    setShowAllProjects(false);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedBroadSkill === skill
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            {/* Reset Filters & Results Count */}
            <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700/50">
              <button
                onClick={resetFilters}
                className="text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 text-xs transition-colors duration-300"
              >
                Reset Filters
              </button>
              <div className="text-gray-500 dark:text-gray-400 text-xs">
                Showing <span className="font-semibold text-amber-600 dark:text-amber-400">{filteredProjects.length}</span> of {typeFilteredProjects.length} projects
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-8 transition-colors duration-300">
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                  No projects found with the selected filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300"
                >
                  View All Projects
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectsToShow.map((project, index) => {
                const isExpanded = expandedProjects.has(index);
                const shouldTruncate = project.description.length > 150;

                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-600/50 dark:hover:border-amber-500/50 h-fit relative overflow-hidden"
                  >
                    {/* Demo Badge */}
                    {project.projectType === "client-demo" && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg">
                          DEMO
                        </span>
                      </div>
                    )}

                    {/* Project Image */}
                    {project.image && (
                      <div className="mb-4 overflow-hidden rounded-lg border border-gray-300/50 dark:border-gray-600/50">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Project Header */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white pb-2 flex-1 pr-2">
                        {project.title}
                        {project.projectType === "client-demo" && (
                          <span className="ml-2 text-xs font-normal text-amber-600 dark:text-amber-400">
                            (Demo Version)
                          </span>
                        )}
                      </h3>
                      {project.status && (
                        <span
                          className={`ml-3 px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                            project.status === "Completed"
                              ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-500/30"
                              : project.status === "In Progress"
                              ? "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-500/30"
                              : "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="text-gray-600 dark:text-gray-300 text-sm space-y-3">
                      {/* Duration */}
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <FaCalendarAlt className="mr-2 text-amber-600 dark:text-amber-400" />
                        <span className="text-amber-600 dark:text-amber-400 font-medium">
                          Duration:
                        </span>
                        <span className="ml-2">{project.duration}</span>
                      </div>

                      {/* Category & Skills */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.category && (
                          <span className="inline-block px-2 py-1 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs rounded-full border border-amber-300 dark:border-amber-500/30">
                            {project.category}
                          </span>
                        )}
                        {project.skills &&
                          project.skills.split(", ").map((skill, idx) => (
                            <span
                              key={idx}
                              className="inline-block px-2 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs rounded-full border border-emerald-300 dark:border-emerald-500/30"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                      </div>

                      {/* Description */}
                      <div>
                        <p className="leading-relaxed">
                          {shouldTruncate && !isExpanded
                            ? `${project.description.substring(0, 150)}...`
                            : project.description}
                        </p>

                        {shouldTruncate && (
                          <button
                            onClick={() => toggleProjectExpansion(index)}
                            className="mt-2 text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 text-xs flex items-center transition-colors duration-300"
                          >
                            {isExpanded ? (
                              <>
                                <FaChevronUp className="mr-1" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <FaChevronDown className="mr-1" />
                                Read More
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="space-y-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                          {project.keyFeatures && (
                            <div>
                              <span className="text-amber-600 dark:text-amber-400 font-medium">
                                Key Features:
                              </span>
                              <p className="mt-1">{project.keyFeatures}</p>
                            </div>
                          )}

                          {project.techStack && (
                            <div>
                              <span className="text-amber-600 dark:text-amber-400 font-medium">
                                Tech Stack:
                              </span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {project.techStack
                                  .split(", ")
                                  .map((tech, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-1 bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs rounded border border-gray-300/30 dark:border-gray-600/30"
                                    >
                                      {tech.trim()}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Project Links */}
                      <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xs rounded-lg transition-all duration-300"
                          >
                            <FaGithub className="mr-2" />
                            Code
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 text-xs rounded-lg border border-amber-600/30 dark:border-amber-500/30 transition-all duration-300"
                          >
                            <FaExternalLinkAlt className="mr-2" />
                            Live Demo
                          </a>
                        )}

                        {!project.githubUrl && !project.liveUrl && (
                          <div className="flex items-center px-3 py-2 bg-gray-200/30 dark:bg-gray-700/30 text-gray-400 dark:text-gray-500 text-xs rounded-lg">
                            <FaCode className="mr-2" />
                            Private Project
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* View More Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="flex items-center justify-center mx-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                {showAllProjects ? (
                  <>
                    <FaChevronUp className="mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <FaChevronDown className="mr-2" />
                    View All Projects ({filteredProjects.length - 6} more)
                  </>
                )}
              </button>
            </div>
          )}

          {/* Projects Stats */}
          <div className="mt-16 bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Projects Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  {validProjects.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Total Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {validProjects.filter((p) => p.projectType === "client-demo").length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Client Demos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  {validProjects.filter((p) => p.status === "Completed").length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                  {
                    validProjects.filter((p) => p.status === "In Progress")
                      .length
                  }
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  In Progress
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600 dark:text-slate-400 mb-2">
                  {categories.filter((c) => c !== "All").length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
