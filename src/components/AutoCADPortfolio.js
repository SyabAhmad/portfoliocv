import React from 'react';
import { Link } from 'react-router-dom';
import { designSkills, designProjects } from '../data/designData';

const AutoCADPortfolio = () => {
  const autocadProjects = designProjects.filter(p => p.category === 'autocad');
  const skillInfo = designSkills.autocad;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-gray-400">
          <Link to="/design" className="text-cyan-400 hover:text-cyan-300">Design & Architecture</Link>
          <span className="mx-2">/</span>
          <span>AutoCAD</span>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {skillInfo.name} - {skillInfo.category}
          </h1>
          <span className="inline-block px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full font-semibold">
            {skillInfo.level}
          </span>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            {skillInfo.description}
          </p>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillInfo.features.map((feature, index) => (
              <div key={index} className="flex items-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4">
                <span className="text-emerald-400 text-xl mr-3 font-bold">✓</span>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
          {autocadProjects.length > 0 ? (
            <div className="space-y-8">
              {autocadProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="grid md:grid-cols-[400px_1fr] gap-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=AutoCAD+Project';
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    {project.details && (
                      <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                        {Object.entries(project.details).map(([key, value]) => (
                          <div key={key} className="mb-2">
                            <strong className="text-cyan-400">{key}:</strong>
                            <span className="text-gray-300 ml-2">
                              {Array.isArray(value) ? value.join(', ') : value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="inline-block px-3 py-1 text-xs font-semibold bg-cyan-900/30 text-cyan-300 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/design/project/${project.id}`} 
                      className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      View Full Project →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 italic py-12">Projects coming soon...</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default AutoCADPortfolio;