import React, { useState } from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 0,
    role: "Full Stack Web Developer & ML/AI Engineer",
    company: "Freelance",
    period: "Nov 2023 - Present",
    description: "Building Next GEN AI, working for clients on web development and AI projects using modern technologies.",
    current: true,
  },
  {
    id: 1,
    role: "Student Ambassador",
    company: "BLACKBOX.AI",
    period: "Nov 2024 - Present",
    description: "Represent BLACKBOX.AI as a Student Ambassador, fostering AI education, community engagement, and promoting innovative solutions.",
    current: true,
  },
  {
    id: 2,
    role: "Python Developer",
    company: "Suvastu Tech",
    period: "Oct 2024 - Jan 2025",
    description: "Developed a Retrieval-Augmented Generation (RAG) system for an e-commerce platform, and designed a custom ETL pipeline using Python, enabling scalable data processes.",
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "SkillBuild",
    period: "Aug 2024 - Sep 2024",
    description: "Contributed to ML projects involving Pandas, NumPy, Scikit-Learn, and Python. Enhanced model performance and deployed solutions remotely.",
  },
  {
    id: 4,
    role: "Chief Operating Officer",
    company: "AI3",
    period: "Apr 2024 - Jul 2024",
    description: "Promoted to COO after demonstrating strong technical and leadership skills as Software Engineer. Oversaw operations and generative AI development, managing projects and cross-functional teams to deliver cutting-edge AI solutions.",
    badge: "/certificates/Internships/CodeAlpha/Offer Letter/offer letter code alpha.jpg",
  },
  {
    id: 5,
    role: "Software Engineer",
    company: "AI3",
    period: "Nov 2023 - Apr 2024",
    description: "Started as a Software Engineer building AI-driven applications including article generators, text-to-speech tools, and improved blog content with generative AI technologies. Promoted to COO within 5 months based on performance.",
    badge: "/certificates/Internships/CodeAlpha/Offer Letter/offer letter code alpha.jpg",
  },
  {
    id: 6,
    role: "Machine Learning Intern",
    company: "InternCareer",
    period: "Nov 2023 - Dec 2023",
    description: "Worked remotely on ML tasks including data preprocessing, model building, and evaluation.",
  },
  {
    id: 7,
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    period: "Sep 2023 - Nov 2023",
    description: "Implemented ML pipelines with Python and contributed to multiple AI projects.",
    badge: "/certificates/Internships/CodeAlpha/Offer Letter/offer letter code alpha.jpg",
  },
  {
    id: 8,
    role: "Data Science Intern",
    company: "CodSoft",
    period: "Sep 2023 - Oct 2023",
    description: "Worked on data analysis using Pandas, NumPy, and Linear Regression. Improved model accuracy with feature engineering.",
    badge: "/certificates/Internships/CodSoft/Completion Certificate/Certificate.png",
  },
  {
    id: 9,
    role: "Frontend Web Developer",
    company: "Interns Pakistan",
    period: "Aug 2023 - Sep 2023",
    description: "Developed responsive front-end applications using HTML, CSS, and React.js.",
    badge: "/certificates/Internships/Interns.pk/Certificate (5) conv 1.png",
  },
  {
    id: 10,
    role: "Web Developer",
    company: "LetsGrowMore",
    period: "Jul 2023 - Sep 2023",
    description: "Contributed to web development projects using JavaScript, HTML, CSS, and React.js.",
    badge: "/certificates/Internships/Lets Grow More/Syed Syab Ahmad Shah (2) conv 1.png",
  },
  {
    id: 11,
    role: "Web Developer",
    company: "iNeuron.ai",
    period: "Jun 2023 - Aug 2023",
    description: "Developed web applications with React.js, Tailwind CSS, and JavaScript.",
    badge: "/certificates/Internships/iNeuron/Completion Certificate conv 1.png",
  },
  {
    id: 12,
    role: "Data Science and Business Analytics Intern",
    company: "The Sparks Foundation",
    period: "May 2023 - Jul 2023",
    description: "Worked on data visualization and business analytics using various data science tools.",
    badge: "/certificates/Internships/The Spark Foundation/Completion Certificat/Certificate of Completion.png",
  },
  {
    id: 13,
    role: "Junior Java Developer",
    company: "Freelance",
    period: "Dec 2022 - Jul 2023",
    description: "Built Android apps and contributed to Java-based projects, including design and testing.",
  },
];

const Experience = () => {
  const [filter, setFilter] = useState("all");

  const filtered = experienceData.filter((exp) => {
    if (filter === "current") return exp.current;
    if (filter === "internship") return exp.role.toLowerCase().includes("intern");
    return true;
  });

  const currentRoles = experienceData.filter(e => e.current);
  const totalYears = "2+";

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <p className="text-sm font-medium text-stone-400 mb-3 font-handwriting tracking-widest uppercase">
            Career
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 font-heading mb-3">
            Experience.
          </h1>
          <p className="text-stone-500 text-lg max-w-xl font-handwriting">
            {experienceData.length} roles across {totalYears} years — freelance, full-time, and internships.
          </p>
        </motion.div>

        {/* Current Roles Highlight */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 mb-8">
          <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4 font-handwriting">
            Currently
          </p>
          <div className="space-y-4">
            {currentRoles.map((exp, i) => (
              <div key={exp.id} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-heading">{exp.role}</h3>
                  <p className="text-stone-500 text-sm font-handwriting">{exp.company} · {exp.period}</p>
                  <p className="text-stone-500 text-sm font-handwriting mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: "all", label: "All Roles" },
            { key: "current", label: "Current" },
            { key: "internship", label: "Internships" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-handwriting ${
                filter === tab.key
                  ? "bg-stone-900 text-stone-50"
                  : "bg-white border border-stone-200 text-stone-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {filtered.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                <div className="sm:w-36 flex-shrink-0">
                  <span className="text-xs text-stone-400 font-handwriting">{exp.period}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-lg font-bold text-stone-900 font-heading">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-bold rounded-full font-handwriting">
                        Current
                      </span>
                    )}
                    {exp.badge && (
                      <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-xs rounded-full font-handwriting">
                        Certified
                      </span>
                    )}
                  </div>
                  <p className="text-stone-600 font-semibold text-sm font-handwriting mb-1">
                    {exp.company}
                  </p>
                  <p className="text-stone-500 text-sm font-handwriting leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
