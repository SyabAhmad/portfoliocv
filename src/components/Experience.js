import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaCalendarAlt, FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

const experienceData = [
  {
    id: 0,
    role: "Full Stack Web Developer & ML/AI Engineer",
    company: "Freelance",
    period: "Nov 2023 - Present",
    description:
      "Building Next GEN AI, working for clients on web development and AI projects using modern technologies.",
    current: true,
  },
  {
    id: 1,
    role: "Student Ambassador",
    company: "BLACKBOX.AI",
    period: "Nov 2024 - Present",
    description:
      "Represent BLACKBOX.AI as a Student Ambassador, fostering AI education, community engagement, and promoting innovative solutions.",
    current: true,
  },
  {
    id: 2,
    role: "Python Developer",
    company: "Suvastu Tech",
    period: "Oct 2024 - Jan 2025",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) system for an e-commerce platform, and designed a custom ETL pipeline using Python, enabling scalable data processes.",
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "SkillBuild",
    period: "Aug 2024 - Sep 2024",
    description:
      "Contributed to ML projects involving Pandas, NumPy, Scikit-Learn, and Python. Enhanced model performance and deployed solutions remotely.",
  },
  {
    id: 4,
    role: "Chief Operating Officer",
    company: "AI3",
    period: "Apr 2024 - Jul 2024",
    description:
      "Oversaw operations and generative AI development, managing projects and cross-functional teams to deliver cutting-edge AI solutions.",
  },
  {
    id: 5,
    role: "Software Engineer",
    company: "AI3",
    period: "Nov 2023 - Apr 2024",
    description:
      "Built AI-driven applications including article generators, text-to-speech tools, and improved blog content with generative AI technologies.",
  },
  {
    id: 6,
    role: "Machine Learning Intern",
    company: "InternCareer",
    period: "Nov 2023 - Dec 2023",
    description:
      "Worked remotely on ML tasks including data preprocessing, model building, and evaluation.",
  },
  {
    id: 7,
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    period: "Sep 2023 - Nov 2023",
    description:
      "Implemented ML pipelines with Python and contributed to multiple AI projects.",
    badge:
      "/certificates/Internships/CodeAlpha/Offer Letter/offer letter code alpha.jpg",
  },
  {
    id: 8,
    role: "Data Science Intern",
    company: "CodSoft",
    period: "Sep 2023 - Oct 2023",
    description:
      "Worked on data analysis using Pandas, NumPy, and Linear Regression. Improved model accuracy with feature engineering.",
    badge:
      "/certificates/Internships/CodSoft/Completion Certificate/Certificate.png",
  },
  {
    id: 9,
    role: "Frontend Web Developer",
    company: "Interns Pakistan",
    period: "Aug 2023 - Sep 2023",
    description:
      "Developed responsive front-end applications using HTML, CSS, and React.js.",
    badge: "/certificates/Internships/Interns.pk/Certificate (5) conv 1.png",
  },
  {
    id: 10,
    role: "Web Developer",
    company: "LetsGrowMore",
    period: "Jul 2023 - Sep 2023",
    description:
      "Contributed to web development projects using JavaScript, HTML, CSS, and React.js.",
    badge:
      "/certificates/Internships/Lets Grow More/Syed Syab Ahmad Shah (2) conv 1.png",
  },
  {
    id: 11,
    role: "Web Developer",
    company: "iNeuron.ai",
    period: "Jun 2023 - Aug 2023",
    description:
      "Developed web applications with React.js, Tailwind CSS, and JavaScript.",
    badge:
      "/certificates/Internships/iNeuron/Completion Certificate conv 1.png",
  },
  {
    id: 12,
    role: "Data Science and Business Analytics Intern",
    company: "The Sparks Foundation",
    period: "May 2023 - Jul 2023",
    description:
      "Worked on data visualization and business analytics using various data science tools.",
    badge:
      "/certificates/Internships/The Spark Foundation/Completion Certificat/Certificate of Completion.png",
  },
  {
    id: 13,
    role: "Junior Java Developer",
    company: "Freelance",
    period: "Dec 2022 - Jul 2023",
    description:
      "Built Android apps and contributed to Java-based projects, including design and testing.",
  },
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = experienceData.filter((exp) => {
    if (filter === "current") return exp.current;
    if (filter === "internship") return exp.role.toLowerCase().includes("intern");
    return true;
  });

  const companyColors = {
    Freelance: "from-amber-500 to-orange-500",
    "BLACKBOX.AI": "from-orange-500 to-red-500",
    "Suvastu Tech": "from-emerald-500 to-teal-500",
    SkillBuild: "from-blue-500 to-indigo-500",
    AI3: "from-purple-500 to-pink-500",
    InternCareer: "from-cyan-500 to-blue-500",
    CodeAlpha: "from-rose-500 to-pink-500",
    CodSoft: "from-indigo-500 to-purple-500",
    "Interns Pakistan": "from-teal-500 to-emerald-500",
    LetsGrowMore: "from-amber-500 to-yellow-500",
    "iNeuron.ai": "from-sky-500 to-blue-500",
    "The Sparks Foundation": "from-orange-500 to-amber-500",
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-100 dark:from-slate-900 dark:via-amber-900/5 dark:to-slate-900 relative transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {experienceData.length} roles spanning full-time, freelance &
            internships
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { key: "all", label: "All" },
            { key: "current", label: "Current" },
            { key: "internship", label: "Internships" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === tab.key
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-orange-500 to-transparent opacity-30" />

          <div className="space-y-6">
            <AnimatePresence>
              {filtered.map((exp, index) => {
                const color =
                  companyColors[exp.company] || "from-amber-500 to-orange-500";
                const isExpanded = expandedId === exp.id;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-br ${color} ring-4 ring-white dark:ring-slate-900 z-10 ${
                        exp.current ? "animate-pulse" : ""
                      }`}
                    />

                    {/* Card */}
                    <motion.div
                      className="group bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 shadow-md hover:shadow-amber-500/10 transition-all duration-500 overflow-hidden"
                      whileHover={{ y: -2 }}
                    >
                      {/* Top gradient accent */}
                      <div
                        className={`h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="p-5 md:p-6">
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {exp.role}
                              </h3>
                              {exp.current && (
                                <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 flex-wrap text-sm">
                              <span
                                className={`font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
                              >
                                {exp.company}
                              </span>
                              <span className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
                                <FaCalendarAlt className="w-3 h-3" />
                                {exp.period}
                              </span>
                            </div>
                          </div>

                          {/* Expand button */}
                          <button
                            onClick={() =>
                              setExpandedId(isExpanded ? null : exp.id)
                            }
                            className="flex-shrink-0 p-2 rounded-lg text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all duration-300"
                          >
                            {isExpanded ? (
                              <FaChevronUp className="w-4 h-4" />
                            ) : (
                              <FaChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Description (compact) */}
                        <p
                          className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-3 ${
                            isExpanded ? "" : "line-clamp-2"
                          }`}
                        >
                          {exp.description}
                        </p>

                        {/* Expanded details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800"
                            >
                              {exp.badge && (
                                <div className="flex items-center gap-2">
                                  <FaBriefcase className="w-4 h-4 text-amber-500" />
                                  <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                                    Certificate available
                                  </span>
                                </div>
                              )}
                              <div className="mt-3 flex gap-2 flex-wrap">
                                <span className="px-3 py-1 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-full text-amber-700 dark:text-amber-400 text-xs font-medium">
                                  {exp.period}
                                </span>
                                {exp.badge && (
                                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                                    Certified
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
