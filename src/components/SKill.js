import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = {
    "Programming Languages": [
      { name: "Python", level: 95, color: "from-blue-400 to-yellow-400" },
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", level: 70, color: "from-blue-500 to-blue-700" }, // Reduced from 85
      { name: "Java", level: 55, color: "from-red-500 to-orange-500" }, // Reduced from 80
      { name: "C++", level: 50, color: "from-blue-600 to-purple-600" }, // Reduced from 75
      { name: "SQL", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "R", level: 50, color: "from-blue-400 to-blue-600" },
      { name: "PHP", level: 55, color: "from-purple-500 to-indigo-500" } // Reduced from 75
    ],
    "Machine Learning & AI": [
      { name: "TensorFlow", level: 90, color: "from-orange-400 to-orange-600" },
      { name: "PyTorch", level: 85, color: "from-red-500 to-orange-500" },
      { name: "Scikit-learn", level: 95, color: "from-orange-400 to-red-400" },
      { name: "Keras", level: 88, color: "from-red-400 to-red-600" },
      { name: "OpenCV", level: 80, color: "from-green-400 to-blue-400" },
      { name: "LlaMa", level: 60, color: "from-green-100 to-blue-400" },
      { name: "Pandas", level: 95, color: "from-blue-400 to-purple-400" },
      { name: "NumPy", level: 92, color: "from-blue-500 to-cyan-500" },
      { name: "Matplotlib", level: 85, color: "from-green-400 to-teal-400" },
      { name: "Seaborn", level: 80, color: "from-teal-400 to-blue-400" },
      { name: "Hugging Face", level: 85, color: "from-yellow-400 to-orange-400" },
      { name: "LangChain", level: 80, color: "from-green-500 to-emerald-500" },
      { name: "OpenAI API", level: 88, color: "from-purple-400 to-pink-400" }
    ],
    "Web Development": [
      { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
      { name: "Node.js", level: 85, color: "from-green-500 to-green-700" },
          { name: "Next.js", level: 82, color: "from-gray-800 to-black" },
      { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
      { name: "CSS3", level: 90, color: "from-blue-500 to-purple-500" },
      { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-teal-500" },
      { name: "Bootstrap", level: 85, color: "from-purple-500 to-indigo-600" }
      // Removed Vue.js and Angular
    ],
    "Databases & Cloud": [
      { name: "MySQL", level: 88, color: "from-blue-600 to-blue-800" },
      { name: "PostgreSQL", level: 80, color: "from-blue-700 to-indigo-700" },
      { name: "Firebase", level: 82, color: "from-yellow-500 to-orange-500" },
      { name: "Docker", level: 78, color: "from-blue-400 to-cyan-500" }
      // Removed MongoDB, AWS, Google Cloud, Redis
    ],
    "Tools & Technologies": [
      { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
      { name: "Linux", level: 85, color: "from-yellow-400 to-orange-400" },
      { name: "Jupyter", level: 92, color: "from-orange-500 to-red-500" },
      { name: "VS Code", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Figma", level: 75, color: "from-purple-400 to-pink-400" },
      { name: "Photoshop", level: 80, color: "from-blue-600 to-purple-600" },
      { name: "Tableau", level: 70, color: "from-blue-500 to-teal-500" }
      // Removed Postman
    ]
  };

  const categories = ['All', ...Object.keys(skillsData)];

  const getFilteredSkills = () => {
    if (activeCategory === 'All') {
      const allSkills = Object.entries(skillsData).reduce((acc, [category, skills]) => {
        return [...acc, ...skills.map(skill => ({ ...skill, category }))];
      }, []);
      return showAllSkills ? allSkills : allSkills.slice(0, 12);
    } else {
      const categorySkills = skillsData[activeCategory] || [];
      return showAllSkills ? categorySkills : categorySkills.slice(0, 8);
    }
  };

  const filteredSkills = getFilteredSkills();
  const totalSkills = activeCategory === 'All' 
    ? Object.values(skillsData).reduce((acc, skills) => acc + skills.length, 0)
    : skillsData[activeCategory]?.length || 0;

  const shouldShowViewMore = activeCategory === 'All' 
    ? totalSkills > 12 
    : (skillsData[activeCategory]?.length || 0) > 8;

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12">
        Technical Skills
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setShowAllSkills(false); // Reset view more when switching categories
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
              <span className="text-cyan-400 text-sm font-medium">{skill.level}%</span>
            </div>
            
            {/* Category Badge (only show when viewing all) */}
            {activeCategory === 'All' && skill.category && (
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                  {skill.category}
                </span>
              </div>
            )}
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            
            {/* Skill Level Text */}
            <div className="mt-2 text-xs text-gray-400">
              {skill.level >= 90 ? 'Expert' : 
               skill.level >= 80 ? 'Advanced' : 
               skill.level >= 70 ? 'Intermediate' : 
               'Beginner'}
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {shouldShowViewMore && (
        <div className="text-center">
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="flex items-center justify-center mx-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
          >
            {showAllSkills ? (
              <>
                <FaChevronUp className="mr-2" />
                Show Less
              </>
            ) : (
              <>
                <FaChevronDown className="mr-2" />
                View All Skills ({totalSkills - (activeCategory === 'All' ? 12 : 8)} more)
              </>
            )}
          </button>
        </div>
      )}

      {/* Skills Summary */}
      <div className="mt-12 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{skills.length}</div>
              <div className="text-gray-300 text-sm">{category.replace(' & ', ' &\n')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
