import React from 'react';
import projects from '../data/projectsData';

const Projects = () => {
  return (
    <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12">
          Projects
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="break-inside-avoid mb-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-500/50"
            >
              <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2 mb-4">
                {project.title}
              </h3>
              <div className="text-gray-300 text-sm space-y-2">
                <p><span className="text-cyan-400 font-medium">Duration:</span> {project.duration}</p>
                <p className="mt-3">{project.description}</p>
                {project.keyFeatures && (
                  <p><span className="text-cyan-400 font-medium">Key Features:</span> {project.keyFeatures}</p>
                )}
                {project.techStack && (
                  <p><span className="text-cyan-400 font-medium">Tech Stack:</span> {project.techStack}</p>
                )}
                <p><span className="text-cyan-400 font-medium">Skills:</span> {project.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;