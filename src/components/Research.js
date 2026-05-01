import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaFlask, FaBullseye, FaCogs } from "react-icons/fa";
import SEO from "./SEO";

let researchIdeas = [];
try {
  researchIdeas = require("../data/researchData").default || [];
} catch (error) {
  console.warn("Research data not found, using empty array");
  researchIdeas = [];
}

const domainColors = {
  "Healthcare AI": "from-red-500 to-rose-500",
  "Medical Imaging": "from-blue-500 to-indigo-500",
  "Natural Language Processing": "from-purple-500 to-violet-500",
  "Data Science": "from-amber-500 to-orange-500",
  "Smart Cities": "from-emerald-500 to-teal-500",
  "Social Computing": "from-pink-500 to-rose-500",
  "Blockchain & Security": "from-cyan-500 to-blue-500",
  "Educational Technology": "from-yellow-500 to-amber-500",
  "Green Technology": "from-green-500 to-emerald-500",
  "AgriTech": "from-lime-500 to-green-500",
  "Cybersecurity": "from-slate-500 to-gray-600",
  "IoT & Smart Homes": "from-sky-500 to-blue-500",
  "FinTech": "from-indigo-500 to-purple-500",
  "Climate Science": "from-teal-500 to-cyan-500",
};

const getResearchStatus = (title) => {
  const lowerTitle = title.toLowerCase();
  if (
    lowerTitle.includes("malaria") ||
    lowerTitle.includes("heart") ||
    lowerTitle.includes("lung") ||
    (lowerTitle.includes("ai") && lowerTitle.includes("summarization")) ||
    lowerTitle.includes("data cleaning")
  ) {
    return "Worked On";
  }
  return "Planning";
};

const Research = () => {
  const [showAllResearch, setShowAllResearch] = useState(false);
  const [activeDomain, setActiveDomain] = useState("All");

  const validResearchIdeas = Array.isArray(researchIdeas) ? researchIdeas : [];

  const domains = useMemo(
    () => ["All", ...new Set(validResearchIdeas.map((r) => r.domain))],
    [validResearchIdeas]
  );

  const filtered = useMemo(() => {
    let data = validResearchIdeas;
    if (activeDomain !== "All") {
      data = data.filter((r) => r.domain === activeDomain);
    }
    return showAllResearch ? data : data.slice(0, 6);
  }, [validResearchIdeas, activeDomain, showAllResearch]);

  const stats = useMemo(() => {
    const workedOn = validResearchIdeas.filter(
      (r) => getResearchStatus(r.title) === "Worked On"
    ).length;
    return {
      total: validResearchIdeas.length,
      workedOn,
      planning: validResearchIdeas.length - workedOn,
      domains: new Set(validResearchIdeas.map((r) => r.domain)).size,
    };
  }, [validResearchIdeas]);

  const researchStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Research & Ideas - Syed Syab Ahmad",
    description:
      "Explore AI and machine learning research projects including healthcare AI, malaria detection, heart disease prediction, and innovative technology solutions.",
    url: "https://syab.tech/research",
    author: {
      "@type": "Person",
      name: "Syed Syab Ahmad",
    },
    hasPart: validResearchIdeas.map((research) => ({
      "@type": "ResearchProject",
      name: research.title,
      description: research.description,
      about: research.domain,
      keywords: research.techniques.join(", "),
    })),
  };

  if (validResearchIdeas.length === 0) {
    return (
      <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-100 dark:from-slate-900 dark:via-amber-900/5 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-12">
            Research & Ideas
          </h1>
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Research data is being loaded...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Research & Ideas - Syed Syab Ahmad"
        description="Explore cutting-edge AI and machine learning research projects including healthcare AI systems, malaria detection, heart disease prediction, CNN, LSTM, NLP, computer vision. Hire a research-focused AI engineer. Remote work worldwide."
        keywords="AI research, machine learning research projects, healthcare AI research, malaria detection AI, heart disease prediction, Computer vision research, NLP research, Deep learning research, CNN research, LSTM networks, Research papers, Academic projects, Innovation, Problem solving, Technical research, AI consulting, Research engineer, Data science research, Predictive modeling, Algorithm research, Intelligent systems research, Open source research"
        url="https://syab.tech/research"
        structuredData={researchStructuredData}
      />

      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-amber-50/30 to-gray-100 dark:from-slate-900 dark:via-amber-900/5 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3"
            >
              Research & Ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              {stats.total} research concepts across {stats.domains} domains
            </motion.p>
          </div>

          {/* Domain Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => {
                  setActiveDomain(domain);
                  setShowAllResearch(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeDomain === domain
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                    : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
                }`}
              >
                {domain}
              </button>
            ))}
          </div>

          {/* Research Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((research, index) => {
                const status = getResearchStatus(research.title);
                const gradient =
                  domainColors[research.domain] || "from-amber-500 to-orange-500";

                return (
                  <motion.div
                    key={research.title + index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="group relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 shadow-md hover:shadow-amber-500/10 transition-all duration-500 overflow-hidden"
                    whileHover={{ y: -4 }}
                  >
                    {/* Top gradient accent */}
                    <div
                      className={`h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="p-5">
                      {/* Status badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                            status === "Worked On"
                              ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30"
                              : "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30"
                          }`}
                        >
                          {status}
                        </span>
                        <span
                          className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                        {research.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3">
                        {research.description}
                      </p>

                      {/* Domain */}
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <FaBullseye className="w-3 h-3 text-amber-500" />
                        <span
                          className={`font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                        >
                          {research.domain}
                        </span>
                      </div>

                      {/* Techniques */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(research.techniques || []).slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs text-gray-600 dark:text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {(research.techniques || []).length > 3 && (
                          <span className="px-2 py-0.5 text-xs text-gray-400">
                            +{research.techniques.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Impact */}
                      <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex items-start gap-2">
                        <FaFlask className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                          {research.expectedImpact}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* View More Button */}
          {!showAllResearch && validResearchIdeas.length > 6 && (
            <div className="text-center mb-12">
              <button
                onClick={() => setShowAllResearch(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 border border-amber-300 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 font-semibold rounded-xl hover:from-amber-500/20 hover:to-orange-500/20 dark:hover:from-amber-500/30 dark:hover:to-orange-500/30 hover:border-amber-400 dark:hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
              >
                <FaChevronDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                View All Research ({validResearchIdeas.length - 6} more)
              </button>
            </div>
          )}

          {/* Stats Section */}
          <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-slate-700/50 shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Research Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Worked On",
                  value: stats.workedOn,
                  color: "text-emerald-600 dark:text-emerald-400",
                  bg: "bg-emerald-50 dark:bg-emerald-500/10",
                  border: "border-emerald-200 dark:border-emerald-500/30",
                },
                {
                  label: "In Planning",
                  value: stats.planning,
                  color: "text-amber-600 dark:text-amber-400",
                  bg: "bg-amber-50 dark:bg-amber-500/10",
                  border: "border-amber-200 dark:border-amber-500/30",
                },
                {
                  label: "Total Ideas",
                  value: stats.total,
                  color: "text-gray-900 dark:text-white",
                  bg: "bg-gray-50 dark:bg-slate-800",
                  border: "border-gray-200 dark:border-slate-700",
                },
                {
                  label: "Domains",
                  value: stats.domains,
                  color: "text-orange-600 dark:text-orange-400",
                  bg: "bg-orange-50 dark:bg-orange-500/10",
                  border: "border-orange-200 dark:border-orange-500/30",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`${stat.bg} ${stat.border} border rounded-xl p-4 text-center`}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
