import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { designProjects } from '../data/designData';

const AllDesignProjects = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredProjects = designProjects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-gray-400">
          <Link to="/design" className="text-cyan-400 hover:text-cyan-300">Design & Architecture</Link>
          <span className="mx-2">/</span>
          <span>All Projects</span>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Sample Projects
          </h1>
          <p className="text-xl text-gray-300">
            Explore my complete portfolio of architectural and design work
          </p>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === 'revit' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setFilter('revit')}
            >
              Revit
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === 'autocad' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setFilter('autocad')}
            >
              AutoCAD
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === 'sketchup' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setFilter('sketchup')}
            >
              SketchUp
            </button>
          </div>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)} 
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-500"
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-103"
            >
              <div className="relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x260?text=Design+Project';
                  }}
                />
                <div className="absolute top-4 right-4 flex gap-1.5">
                  {project.software.map((sw) => (
                    <span key={sw} className="px-2.5 py-1 bg-gray-900/80 backdrop-blur text-white text-[11px] font-semibold rounded-full">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs mb-3">
                  {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-block px-2.5 py-1 text-[11px] font-semibold bg-cyan-900/30 text-cyan-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/design/project/${project.id}`} 
                  className="inline-block text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  View Project Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg italic">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDesignProjects;