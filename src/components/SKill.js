import React from 'react';

// Update this list with your skills as needed.
const skillsList = [
    { name: 'ReactJS', level: 90, icon: '⚛️', description: 'Building dynamic user interfaces' },
    { name: 'JavaScript', level: 95, icon: '💻', description: 'Modern ES6+ programming' },
    { name: 'Python', level: 98, icon: '🐍', description: 'Data analysis, ML, automation' },
    { name: 'Tailwind CSS', level: 85, icon: '🎨', description: 'Utility-first CSS styling' },
    { name: 'Node.js', level: 85, icon: '🌐', description: 'Backend APIs and server-side scripting' },
    { name: 'Express.js', level: 80, icon: '🚀', description: 'Backend frameworks and RESTful APIs' },
    { name: 'SQL', level: 80, icon: '🗃️', description: 'Database design and querying' },
    { name: 'MongoDB', level: 75, icon: '🍃', description: 'NoSQL database management' },
    { name: 'Machine Learning', level: 90, icon: '🤖', description: 'Supervised and unsupervised learning' },
    { name: 'Deep Learning', level: 88, icon: '🧠', description: 'CNN, LSTM, advanced AI models' },
    { name: 'Data Science', level: 92, icon: '📊', description: 'Data cleaning, analysis, visualization' },
    { name: 'Pandas', level: 95, icon: '🐼', description: 'Data manipulation and analysis' },
    { name: 'NumPy', level: 90, icon: '🔢', description: 'Numerical computations' },
    { name: 'Scikit-learn', level: 90, icon: '📈', description: 'Classical machine learning' },
    { name: 'TensorFlow', level: 85, icon: '🔬', description: 'Building neural networks' },
    { name: 'OpenCV', level: 80, icon: '🎥', description: 'Computer vision tasks' },
    { name: 'Flask', level: 80, icon: '🌶️', description: 'Python web frameworks' },
    { name: 'Streamlit', level: 85, icon: '🖼️', description: 'Interactive data apps' },
    { name: 'Power BI', level: 85, icon: '📊', description: 'Data visualization and dashboards' },
    { name: 'Docker', level: 80, icon: '🐳', description: 'Containerization and deployment' },
    { name: 'Firebase', level: 75, icon: '🔥', description: 'Authentication and backend services' },
    { name: 'HTML5', level: 95, icon: '🌐', description: 'Web structure and semantics' },
    { name: 'CSS3', level: 90, icon: '🎨', description: 'Web styling' },
    { name: 'Android Development', level: 85, icon: '📱', description: 'Mobile app development' },
    { name: 'SQLAlchemy', level: 75, icon: '⚙️', description: 'ORM for Python' },
    { name: 'NLP', level: 85, icon: '🗣️', description: 'Natural Language Processing' },
    { name: 'Prompt Engineering', level: 80, icon: '📝', description: 'Crafting effective AI prompts' },
    { name: 'API Development', level: 85, icon: '🔌', description: 'REST and GraphQL APIs' },
    { name: 'Version Control', level: 95, icon: '🔧', description: 'Git and GitHub workflows' },
    { name: 'Agile Methodologies', level: 90, icon: '🏃‍♂️', description: 'Scrum, Kanban, project management' },
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 pt-16">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
                    My Tech Stack & Skills
                </h2>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
                    {skillsList.map((skill, index) => {
                        // Vary padding, text size, and opacity based on index.
                        let sizeClass = "";
                        let colSpanClass = "";
                        if (index % 3 === 0) {
                            sizeClass = "p-3 text-sm";
                        } else if (index % 3 === 1) {
                            sizeClass = "p-4 text-base";
                        } else {
                            sizeClass = "p-3 text-xs";
                        }
                        // Occasionally make a card span multiple columns.
                        if (index % 7 === 0) {
                            colSpanClass = "xl:col-span-2";
                        }
                        return (
                            <div
                                key={index}
                                className={`break-inside-avoid mb-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 ${sizeClass} rounded-xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/20 hover:border-purple-500/50 ${colSpanClass}`}
                            >
                                <div className="flex items-center mb-3">
                                    <span className="text-2xl mr-3">{skill.icon}</span>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-white text-sm">
                                            {skill.name}
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <p className="text-right text-xs text-purple-300">
                                    {skill.level}% Proficiency
                                </p>
                            </div>
                        );
                    })}
                </div>
                <p className="text-center text-gray-400 mt-8 text-sm">
                    ...and always eager to learn new technologies!
                </p>
            </div>
        </div>
    );
};

export default Skills;
