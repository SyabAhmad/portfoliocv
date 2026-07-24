import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaTools } from "react-icons/fa";

const rotations = [-3, 2, -1.5, 3, -2, 1.5, -2.5];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600", "bg-stone-600", "bg-rose-900"];

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <FaCode />,
      skills: ["Python", "JavaScript", "TypeScript", "HTML5/CSS3", "SQL", "Java"],
    },
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Figma"],
    },
    {
      title: "Backend & APIs",
      icon: <FaServer />,
      skills: ["Node.js", "Flask", "FastAPI", "Django", "PostgreSQL", "MySQL"],
    },
    {
      title: "AI & Machine Learning",
      icon: <FaTools />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "LangChain"],
    },
    {
      title: "Generative AI & LLMs",
      icon: <FaTools />,
      skills: ["OpenAI API", "LLaMA", "RAG Pipelines", "Prompt Engineering", "AI Agents", "Vector DBs"],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: ["AWS", "Vercel", "Docker", "Git", "Linux", "Firebase"],
    },
    {
      title: "Data Science",
      icon: <FaTools />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Tableau"],
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-stone-100 mb-12 font-handwriting"
        style={{ transform: "rotate(-1deg)" }}
      >
        Technical Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
        {skillCategories.map((category, catIndex) => {
          const rot = rotations[catIndex % rotations.length];
          const pinColor = pinColors[catIndex % pinColors.length];

          return (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30, rotate: rot }}
              whileInView={{ opacity: 1, y: 0, rotate: rot }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.04, rotate: 0 }}
              className="relative bg-stone-100 dark:bg-stone-800 rounded-sm shadow-xl shadow-black/30 p-5 border border-stone-200 dark:border-stone-700"
              style={{ transform: `rotate(${rot}deg)` }}
            >
              {/* Tape strip */}
              <div
                className="absolute -top-2.5 left-[20%] w-16 h-5 bg-stone-400/40 rounded-sm shadow-sm"
                style={{ transform: `rotate(${-rot * 1.5}deg)` }}
              />

              {/* Pushpin */}
              <div className={`absolute -top-1.5 right-[15%] w-3 h-3 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-1.5 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400">
                  {category.icon}
                </div>
                <h3 className="text-stone-900 dark:text-stone-100 font-bold text-sm font-handwriting">
                  {category.title}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-xs text-stone-700 dark:text-stone-300 font-handwriting"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <p className="text-stone-500 text-sm font-handwriting" style={{ transform: "rotate(1deg)" }}>
          {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills across {skillCategories.length} categories
        </p>
      </motion.div>
    </div>
  );
};

export default Skills;
