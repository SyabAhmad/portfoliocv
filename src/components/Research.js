import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SEO from './SEO';

// Import with error handling
let researchIdeas = [];
try {
  researchIdeas = require('../data/researchData').default || [];
} catch (error) {
  console.warn('Research data not found, using empty array');
  researchIdeas = [];
}

const Research = () => {
  const [showAllResearch, setShowAllResearch] = useState(false);

  const getResearchStatus = (title) => {
    const lowerTitle = title.toLowerCase();
    
    // Set specific projects to "Worked On"
    if ((lowerTitle.includes('malaria') || 
        lowerTitle.includes('heart') || 
        lowerTitle.includes('lung')) || 
        ((lowerTitle.includes('ai') && lowerTitle.includes('summarization')) ||
        lowerTitle.includes('data cleaning'))) {
      return 'Worked On';
    }
    
    // All others to "Planning"
    return 'Planning';
  };

  // Ensure researchIdeas is an array
  const validResearchIdeas = Array.isArray(researchIdeas) ? researchIdeas : [];
  const researchToShow = showAllResearch ? validResearchIdeas : validResearchIdeas.slice(0, 6);

  // If no research data, show a message
  if (validResearchIdeas.length === 0) {
    return (
      <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-12">
            Research & Ideas
          </h1>
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <p className="text-gray-300 text-lg">Research data is being loaded...</p>
          </div>
        </div>
      </div>
    );
  }

  const researchStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Research & Ideas - Syed Syab Ahmad",
    "description": "Explore AI and machine learning research projects including healthcare AI, malaria detection, heart disease prediction, and innovative technology solutions.",
    "url": "https://syab.link/research",
    "author": {
      "@type": "Person",
      "name": "Syed Syab Ahmad"
    },
    "hasPart": validResearchIdeas.map(research => ({
      "@type": "ResearchProject",
      "name": research.title,
      "description": research.description,
      "about": research.domain,
      "keywords": research.techniques.join(", ")
    }))
  };

  return (
    <>
      <SEO 
        title="Research & Ideas - Syed Syab Ahmad"
        description="Explore cutting-edge AI and machine learning research projects including healthcare AI systems, malaria detection, heart disease prediction, and innovative technology solutions by Syed Syab Ahmad."
        keywords="AI research, machine learning projects, healthcare AI, malaria detection, heart disease prediction, computer vision, NLP, deep learning research, Pakistan AI researcher"
        url="https://syab.link/research"
        structuredData={researchStructuredData}
      />
      
      <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-12">
            Research & Ideas
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchToShow.map((research, index) => {
              const status = getResearchStatus(research.title);
              
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/50"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      status === 'Worked On' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                    {research.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {research.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="text-emerald-400 font-medium">Domain:</span>
                      <span className="text-gray-300 ml-2">{research.domain}</span>
                    </div>
                    
                    <div className="text-sm">
                      <span className="text-emerald-400 font-medium">Techniques:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {(research.techniques || []).map((technique, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30"
                          >
                            {technique}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="text-emerald-400 font-medium">Impact:</span>
                      <span className="text-gray-300 ml-2">{research.expectedImpact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          {validResearchIdeas.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllResearch(!showAllResearch)}
                className="flex items-center justify-center mx-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                {showAllResearch ? (
                  <>
                    <FaChevronUp className="mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <FaChevronDown className="mr-2" />
                    View All Research ({validResearchIdeas.length - 6} more)
                  </>
                )}
              </button>
            </div>
          )}

          {/* Research Stats */}
          <div className="mt-16 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Research Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  {validResearchIdeas.filter(r => getResearchStatus(r.title) === 'Worked On').length}
                </div>
                <div className="text-gray-300 text-sm">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {validResearchIdeas.filter(r => getResearchStatus(r.title) === 'Planning').length}
                </div>
                <div className="text-gray-300 text-sm">In Planning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{validResearchIdeas.length}</div>
                <div className="text-gray-300 text-sm">Total Ideas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {[...new Set(validResearchIdeas.map(r => r.domain))].length}
                </div>
                <div className="text-gray-300 text-sm">Research Domains</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;