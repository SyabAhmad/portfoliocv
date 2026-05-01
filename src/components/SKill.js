import React, { useState } from "react";
import { FaCode, FaServer, FaCloud, FaTools } from "react-icons/fa";

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <FaCode />,
      color: "amber",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 70 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 55 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <FaCode />,
      color: "blue",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 82 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 85 },
        { name: "Figma", level: 75 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <FaServer />,
      color: "emerald",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 88 },
        { name: "FastAPI", level: 82 },
        { name: "Django", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 88 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <FaTools />,
      color: "purple",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 95 },
        { name: "OpenCV", level: 80 },
        { name: "Hugging Face", level: 85 },
        { name: "LangChain", level: 80 },
      ],
    },
    {
      title: "Generative AI & LLMs",
      icon: <FaTools />,
      color: "pink",
      skills: [
        { name: "OpenAI API", level: 88 },
        { name: "LLaMA / Local LLMs", level: 60 },
        { name: "RAG Pipelines", level: 82 },
        { name: "Prompt Engineering", level: 90 },
        { name: "AI Agents", level: 85 },
        { name: "Vector Databases", level: 78 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      color: "orange",
      skills: [
        { name: "AWS EC2", level: 85 },
        { name: "Vercel", level: 88 },
        { name: "Docker", level: 78 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 85 },
        { name: "Firebase", level: 82 },
      ],
    },
    {
      title: "Data Science",
      icon: <FaTools />,
      color: "teal",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 92 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 80 },
        { name: "Jupyter", level: 92 },
        { name: "Tableau", level: 70 },
      ],
    },
  ];

  const getColorClasses = (color, isLight = false) => {
    const colors = {
      amber: isLight
        ? "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30"
        : "border-amber-500/50 text-amber-600 dark:text-amber-400",
      blue: isLight
        ? "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30"
        : "border-blue-500/50 text-blue-600 dark:text-blue-400",
      emerald: isLight
        ? "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30"
        : "border-emerald-500/50 text-emerald-600 dark:text-emerald-400",
      purple: isLight
        ? "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/30"
        : "border-purple-500/50 text-purple-600 dark:text-purple-400",
      orange: isLight
        ? "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-500/30"
        : "border-orange-500/50 text-orange-600 dark:text-orange-400",
      teal: isLight
        ? "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-500/20 dark:text-teal-300 dark:border-teal-500/30"
        : "border-teal-500/50 text-teal-600 dark:text-teal-400",
    };
    return colors[color] || colors.amber;
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-8">
        Technical Skills
      </h2>

      {/* Compact Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skillCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-4 md:p-5 hover:border-amber-500/50 transition-all duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className={`p-2 rounded-lg ${getColorClasses(category.color, true)}`}>
                {category.icon}
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-sm md:text-base">
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-2 md:space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group cursor-pointer"
                  onMouseEnter={() => setExpandedSkill(`${catIndex}-${skillIndex}`)}
                  onMouseLeave={() => setExpandedSkill(null)}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 dark:text-gray-300 text-xs md:text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className={`text-xs font-medium ${getColorClasses(category.color)}`}>
                      {expandedSkill === `${catIndex}-${skillIndex}` ? skill.level : ''}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 md:h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${
                        category.color === 'amber' ? 'from-amber-400 to-orange-500' :
                        category.color === 'blue' ? 'from-blue-400 to-blue-600' :
                        category.color === 'emerald' ? 'from-emerald-400 to-emerald-600' :
                        category.color === 'purple' ? 'from-purple-400 to-purple-600' :
                        category.color === 'orange' ? 'from-orange-400 to-orange-600' :
                        'from-teal-400 to-teal-600'
                      }`}
                      style={{ width: expandedSkill === `${catIndex}-${skillIndex}` ? `${skill.level}%` : `${skill.level * 0.15}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary - Compact */}
      <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="text-center bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-lg p-3 md:p-4 border border-gray-200 dark:border-gray-700/50"
          >
            <div className={`text-xl md:text-2xl font-bold ${getColorClasses(category.color)}`}>
              {category.skills.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs mt-1">
              {category.title.split(' ')[0]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
