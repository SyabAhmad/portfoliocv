import React from 'react';
import { Link } from 'react-router-dom';
import { designSkills, designProjects } from '../data/designData';

const DesignPortfolio = () => {
  const recentProjects = designProjects.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            🏗️ Design & Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between technology and architectural design
          </p>
        </section>

        {/* About Design Journey */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">My Design Journey</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Alongside my expertise in software development and AI, I've expanded my skillset 
            into architectural design and Building Information Modeling (BIM). This unique 
            combination allows me to approach projects with both technical precision and 
            creative vision.
          </p>
        </section>

        {/* Skills Overview */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(designSkills).map((skill) => (
              <div 
                key={skill.name} 
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-5 transform transition-all duration-300 hover:scale-103 hover:border-cyan-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="inline-block px-3 py-1 text-[11px] font-semibold bg-gray-700/50 text-gray-300 rounded-full">
                    {skill.category}
                  </span>
                  <span className="inline-block px-3 py-1 text-[11px] font-semibold bg-emerald-900/30 text-emerald-300 rounded-full">
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{skill.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {skill.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center">
                      <span className="text-emerald-400 mr-2 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/design/${skill.name.toLowerCase()}`} 
                  className="inline-block text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Explore {skill.name} Projects →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Projects */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-103"
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x260?text=Project+Image';
                  }}
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.software.map((sw) => (
                      <span key={sw} className="inline-block px-3 py-1 text-[11px] font-semibold bg-cyan-900/30 text-cyan-300 rounded-full">
                        {sw}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <Link 
                    to={`/design/project/${project.id}`} 
                    className="inline-block text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link 
              to="/design/projects" 
              className="inline-block px-7 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-103"
            >
              View All Projects
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Collaboration?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Let's discuss how I can contribute to your architectural or design project
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DesignPortfolio;