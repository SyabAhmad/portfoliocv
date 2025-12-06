import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaCalendarAlt,
  FaFilter,
} from "react-icons/fa";
import SEO from "./SEO";

// Import with error handling
let projects = [];
try {
  projects = require("../data/projectsData").default || [];
} catch (error) {
  console.warn("Projects data not found, using fallback data");
  // Fallback projects data
  projects = [
    {
      title: "AI-Powered Malaria Detection System",
      duration: "3 months",
      description:
        "Developed a deep learning model using CNN and transfer learning to detect malaria parasites in blood smear images with 95% accuracy.",
      keyFeatures:
        "Real-time detection, Web-based interface, Image preprocessing pipeline, Model deployment",
      techStack: "Python, TensorFlow, OpenCV, Flask, HTML/CSS, JavaScript",
      skills: "Computer Vision, Deep Learning, Web Development",
      category: "Healthcare AI",
      status: "Completed",
      githubUrl: "https://github.com/syabahmad/malaria-detection",
      liveUrl: "https://malaria-detection-demo.netlify.app",
    },
    {
      title: "Heart Disease Prediction System",
      duration: "2 months",
      description:
        "Created an ensemble machine learning model to predict heart disease risk with improved accuracy over traditional methods.",
      keyFeatures:
        "Multiple ML algorithms, Feature engineering, Interactive dashboard, Risk assessment",
      techStack: "Python, Scikit-learn, Pandas, Streamlit, Plotly",
      skills: "Machine Learning, Data Analysis, Web Apps",
      category: "Healthcare AI",
      status: "Completed",
      githubUrl: "https://github.com/syabahmad/heart-disease-prediction",
    },
    {
      title: "Portfolio Website",
      duration: "1 month",
      description:
        "Built a responsive portfolio website showcasing projects, skills, and professional experience.",
      keyFeatures:
        "Responsive design, SEO optimized, Interactive animations, Dark theme",
      techStack: "React, Tailwind CSS, JavaScript, Netlify",
      skills: "Frontend Development, UI/UX Design, SEO",
      category: "Web Development",
      status: "Completed",
      liveUrl: "https://syab.link",
    },
    {
      title: "E-commerce Analytics Dashboard",
      duration: "2 months",
      description:
        "Built a comprehensive analytics dashboard for e-commerce businesses to track sales, customer behavior, and inventory management.",
      keyFeatures:
        "Real-time analytics, Interactive charts, Sales forecasting, Customer segmentation",
      techStack: "React, Node.js, MongoDB, Chart.js, Express.js",
      skills: "Full Stack Development, Data Visualization, Analytics",
      category: "Web Development",
      status: "Completed",
      githubUrl: "https://github.com/syabahmad/ecommerce-dashboard",
    },
    {
      title: "Natural Language Processing Chatbot",
      duration: "2.5 months",
      description:
        "Developed an intelligent chatbot using NLP techniques and transformer models for customer service automation.",
      keyFeatures:
        "Intent recognition, Contextual responses, Multi-language support, Learning capabilities",
      techStack: "Python, Transformers, FastAPI, React, PostgreSQL",
      skills: "Natural Language Processing, Deep Learning, API Development",
      category: "AI & NLP",
      status: "Completed",
      githubUrl: "https://github.com/syabahmad/nlp-chatbot",
    },
    {
      title: "Stock Price Prediction Model",
      duration: "1.5 months",
      description:
        "Created a machine learning model to predict stock prices using historical data and technical indicators.",
      keyFeatures:
        "LSTM neural networks, Technical analysis, Real-time predictions, Risk assessment",
      techStack: "Python, TensorFlow, Pandas, NumPy, Streamlit",
      skills: "Time Series Analysis, Deep Learning, Financial Modeling",
      category: "Finance AI",
      status: "Completed",
      githubUrl: "https://github.com/syabahmad/stock-prediction",
    },
  ];
}

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  // Ensure projects is an array
  const validProjects = Array.isArray(projects) ? projects : [];

  // Get unique categories and skills
  const categories = [
    "All",
    ...new Set(
      validProjects.map((project) => project.category).filter(Boolean)
    ),
  ];

  // Extract all skills from projects
  const allSkills = validProjects.reduce((acc, project) => {
    if (project.skills) {
      const projectSkills = project.skills
        .split(", ")
        .map((skill) => skill.trim());
      return [...acc, ...projectSkills];
    }
    return acc;
  }, []);
  const uniqueSkills = ["All", ...new Set(allSkills)];

  // Filter projects by category and skill
  const filteredProjects = validProjects.filter((project) => {
    const categoryMatch =
      selectedCategory === "All" || project.category === selectedCategory;
    const skillMatch =
      selectedSkill === "All" ||
      (project.skills && project.skills.includes(selectedSkill));
    return categoryMatch && skillMatch;
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
    setSelectedSkill("All");
    setShowAllProjects(false);
  };

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects - Syed Syab Ahmad",
    description:
      "Portfolio of AI, machine learning, and web development projects by Syed Syab Ahmad.",
    url: "https://syab.link/projects",
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
          url="https://syab.link/projects"
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
        description="Explore AI, machine learning, and web development projects by Syed Syab Ahmad including healthcare AI systems, malaria detection, heart disease prediction, and innovative web solutions."
        keywords="AI projects, machine learning projects, web development portfolio, healthcare AI, malaria detection, heart disease prediction, Python projects, React projects, TensorFlow projects"
        url="https://syab.link/projects"
        structuredData={projectsStructuredData}
      />

      <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent mb-12">
            Projects
          </h2>

          {/* Filter Section */}
          <div className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 mb-8 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4">
              <FaFilter className="text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Filter Projects
              </h3>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <label className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2 block">
                Category:
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowAllProjects(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                        : "bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-300/50 dark:border-gray-600/50 hover:border-cyan-600/50 dark:hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Filter */}
            <div className="mb-4">
              <label className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2 block">
                Skills:
              </label>
              <div className="flex flex-wrap gap-2">
                {uniqueSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      setSelectedSkill(skill);
                      setShowAllProjects(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedSkill === skill
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-300/50 dark:border-gray-600/50 hover:border-purple-600/50 dark:hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Filters & Results Count */}
            <div className="flex justify-between items-center">
              <button
                onClick={resetFilters}
                className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors duration-300"
              >
                Reset Filters
              </button>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                Showing {filteredProjects.length} of {validProjects.length}{" "}
                projects
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
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                >
                  View All Projects
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsToShow.map((project, index) => {
                const isExpanded = expandedProjects.has(index);
                const shouldTruncate = project.description.length > 150;

                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-600/50 dark:hover:border-cyan-500/50 h-fit"
                  >
                    {/* Project Image */}
                    {project.image && (
                      <div className="mb-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg border border-gray-300/50 dark:border-gray-600/50"
                        />
                      </div>
                    )}

                    {/* Project Header */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2 flex-1">
                        {project.title}
                      </h3>
                      {project.status && (
                        <span
                          className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${
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
                        <FaCalendarAlt className="mr-2 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                          Duration:
                        </span>
                        <span className="ml-2">{project.duration}</span>
                      </div>

                      {/* Category & Skills */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.category && (
                          <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full border border-purple-300 dark:border-purple-500/30">
                            {project.category}
                          </span>
                        )}
                        {project.skills &&
                          project.skills.split(", ").map((skill, idx) => (
                            <span
                              key={idx}
                              className="inline-block px-2 py-1 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs rounded-full border border-cyan-300 dark:border-cyan-500/30"
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
                            className="mt-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 text-xs flex items-center transition-colors duration-300"
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
                              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                                Key Features:
                              </span>
                              <p className="mt-1">{project.keyFeatures}</p>
                            </div>
                          )}

                          {project.techStack && (
                            <div>
                              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
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
                            className="flex items-center px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 text-xs rounded-lg border border-cyan-600/30 dark:border-cyan-500/30 transition-all duration-300"
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
                className="flex items-center justify-center mx-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                  {validProjects.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Total Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
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
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {categories.length - 1}
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
