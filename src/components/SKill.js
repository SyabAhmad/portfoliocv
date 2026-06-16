import React from "react";
import { FaCode, FaServer, FaCloud, FaTools } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <FaCode />,
      skills: [
        "Python", "JavaScript", "TypeScript", "HTML5/CSS3", "SQL", "Java"
      ],
    },
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        "React", "Next.js", "Tailwind CSS", "Bootstrap", "Figma"
      ],
    },
    {
      title: "Backend & APIs",
      icon: <FaServer />,
      skills: [
        "Node.js", "Flask", "FastAPI", "Django", "PostgreSQL", "MySQL"
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <FaTools />,
      skills: [
        "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "LangChain"
      ],
    },
    {
      title: "Generative AI & LLMs",
      icon: <FaTools />,
      skills: [
        "OpenAI API", "LLaMA", "RAG Pipelines", "Prompt Engineering", "AI Agents", "Vector DBs"
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: [
        "AWS", "Vercel", "Docker", "Git", "Linux", "Firebase"
      ],
    },
    {
      title: "Data Science",
      icon: <FaTools />,
      skills: [
        "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Tableau"
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Technical Skills
      </h2>

      <div className="max-w-5xl mx-auto space-y-6">
        {skillCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="border border-gray-200 dark:border-gray-700/50 rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {category.icon}
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-base">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills across {skillCategories.length} categories
        </p>
      </div>
    </div>
  );
};

export default Skills;
