import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaFlask, FaBullseye } from "react-icons/fa";
import SEO from "./SEO";

let researchIdeas = [];
try {
  researchIdeas = require("../data/researchData").default || [];
} catch (error) {
  console.warn("Research data not found, using empty array");
  researchIdeas = [];
}

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

const cardRotations = [-2, 1.5, -1, 2, -1.5, 0.8, -0.5, 1.8, -1.2, 0.6, -1.8, 1.2];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600", "bg-stone-600"];

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
    description: "Explore AI and machine learning research projects including healthcare AI, malaria detection, heart disease prediction, and innovative technology solutions.",
    url: "https://syab.tech/research",
    author: { "@type": "Person", name: "Syed Syab Ahmad" },
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
      <div className="min-h-screen p-8 pt-24 bg-stone-900 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-stone-100 mb-12 font-handwriting">Research & Ideas</h1>
          <div className="bg-stone-800 border border-stone-700 rounded-sm p-8">
            <p className="text-stone-400 text-lg">Research data is being loaded...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Research & Ideas - Syed Syab Ahmad"
        description="Explore cutting-edge AI and machine learning research projects including healthcare AI systems, malaria detection, heart disease prediction."
        keywords="AI research, machine learning research projects, healthcare AI research"
        url="https://syab.tech/research"
        structuredData={researchStructuredData}
      />

      <div className="min-h-screen pt-24 pb-16 bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              className="text-4xl md:text-5xl font-bold text-stone-100 mb-3 font-handwriting"
              style={{ transform: "rotate(-1deg)" }}
            >
              Research & Ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-stone-500 max-w-2xl mx-auto font-handwriting"
            >
              {stats.total} research concepts across {stats.domains} domains
            </motion.p>
          </div>

          {/* Domain Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => { setActiveDomain(domain); setShowAllResearch(false); }}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 font-handwriting ${
                  activeDomain === domain
                    ? "bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 shadow-lg"
                    : "bg-stone-800/50 text-stone-400 hover:bg-stone-700 hover:text-stone-300"
                }`}
              >
                {domain}
              </button>
            ))}
          </div>

          {/* Research Cards Grid - Flyer style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((research, index) => {
                const status = getResearchStatus(research.title);
                const rot = cardRotations[index % cardRotations.length];
                const pinColor = pinColors[index % pinColors.length];

                return (
                  <motion.div
                    key={research.title + index}
                    initial={{ opacity: 0, scale: 0.9, rotate: rot }}
                    animate={{ opacity: 1, scale: 1, rotate: rot }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.03, rotate: 0 }}
                    className="group relative"
                    style={{ transform: `rotate(${rot}deg)` }}
                  >
                    {/* Tape */}
                    <div className="absolute -top-2.5 left-[15%] w-14 h-5 bg-stone-400/40 rounded-sm shadow-sm z-10" style={{ transform: `rotate(${-rot * 2}deg)` }} />
                    {/* Pin */}
                    <div className={`absolute -top-1.5 right-[12%] w-2.5 h-2.5 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                    <div className="relative bg-stone-100 dark:bg-stone-800 rounded-sm border border-stone-200 dark:border-stone-700 shadow-lg transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-black/20">
                      <div className="p-5">
                        {/* Status + domain badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2.5 py-1 text-xs font-medium rounded-full font-handwriting ${
                            status === "Worked On"
                              ? "bg-rose-800/20 text-rose-300 border border-rose-700/30"
                              : "bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 border border-stone-300 dark:border-stone-600"
                          }`}>
                            {status}
                          </span>
                          <FaBullseye className="w-3 h-3 text-stone-500" />
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-3 leading-snug font-handwriting">
                          {research.title}
                        </h3>

                        {/* Description */}
                        <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed mb-4 line-clamp-3 font-handwriting">
                          {research.description}
                        </p>

                        {/* Domain */}
                        <div className="text-xs text-stone-500 mb-3 font-handwriting">
                          <span className="font-bold text-stone-600 dark:text-stone-300">{research.domain}</span>
                        </div>

                        {/* Techniques */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {(research.techniques || []).slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-[10px] text-stone-600 dark:text-stone-300 font-handwriting">
                              {tech}
                            </span>
                          ))}
                          {(research.techniques || []).length > 3 && (
                            <span className="px-2 py-0.5 text-[10px] text-stone-500 font-handwriting">+{research.techniques.length - 3}</span>
                          )}
                        </div>

                        {/* Impact */}
                        <div className="pt-3 border-t border-stone-200 dark:border-stone-700 flex items-start gap-2">
                          <FaFlask className="w-3 h-3 text-stone-500 mt-0.5 flex-shrink-0" />
                          <p className="text-[11px] text-stone-500 leading-snug font-handwriting">{research.expectedImpact}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* View More */}
          {!showAllResearch && validResearchIdeas.length > 6 && (
            <div className="text-center mb-12">
              <motion.button
                onClick={() => setShowAllResearch(true)}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-semibold rounded-full hover:shadow-lg transition-all duration-300 font-handwriting text-sm"
              >
                <FaChevronDown className="w-4 h-4" />
                View All ({validResearchIdeas.length - 6} more)
              </motion.button>
            </div>
          )}

          {/* Stats - Scattered flyers */}
          <div className="bg-stone-100 dark:bg-stone-800 rounded-sm border border-stone-200 dark:border-stone-700 shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-6 text-center font-handwriting">
              Research Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Worked On", value: stats.workedOn, color: "text-rose-400", rotate: -1.5 },
                { label: "In Planning", value: stats.planning, color: "text-stone-400", rotate: 1 },
                { label: "Total Ideas", value: stats.total, color: "text-stone-100", rotate: -0.5 },
                { label: "Domains", value: stats.domains, color: "text-slate-400", rotate: 1.5 },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15, rotate: stat.rotate }}
                  whileInView={{ opacity: 1, y: 0, rotate: stat.rotate }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className="bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-sm p-4 text-center relative"
                  style={{ transform: `rotate(${stat.rotate}deg)` }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-800 rounded-full shadow-sm border border-rose-950 z-10" />
                  <div className={`text-3xl font-bold ${stat.color} mb-1 font-handwriting`}>{stat.value}</div>
                  <div className="text-stone-500 text-xs font-medium font-handwriting">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
