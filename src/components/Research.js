import React from 'react';
import researchIdeas from '../data/researchData';

const Research = () => {
  const getResearchStatus = (title) => {
    const lowerTitle = title.toLowerCase();
    
    // Set specific projects to "Worked On"
    if (lowerTitle.includes('malaria') || 
        lowerTitle.includes('heart') || 
        lowerTitle.includes('lung') || 
        lowerTitle.includes('ai') && lowerTitle.includes('summarization') ||
        lowerTitle.includes('data cleaning')) {
      return 'Worked On';
    }
    
    // All others to "Planning"
    return 'Planning';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Completed':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Worked On':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'In Progress':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Planning':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getResearchIcon = (title) => {
    if (title.toLowerCase().includes('heart')) return '❤️';
    if (title.toLowerCase().includes('lung')) return '🫁';
    if (title.toLowerCase().includes('malaria')) return '🦠';
    if (title.toLowerCase().includes('rag') || title.toLowerCase().includes('retrieval')) return '🔍';
    if (title.toLowerCase().includes('generative ai')) return '🤖';
    if (title.toLowerCase().includes('feature engineering')) return '⚙️';
    if (title.toLowerCase().includes('data cleaning')) return '🧹';
    if (title.toLowerCase().includes('automated')) return '🔄';
    if (title.toLowerCase().includes('big data')) return '📊';
    if (title.toLowerCase().includes('multimodal')) return '🎯';
    if (title.toLowerCase().includes('image')) return '🖼️';
    if (title.toLowerCase().includes('explainable')) return '💡';
    if (title.toLowerCase().includes('compression')) return '📦';
    if (title.toLowerCase().includes('bias')) return '⚖️';
    if (title.toLowerCase().includes('federated')) return '🌐';
    if (title.toLowerCase().includes('ethical')) return '🛡️';
    if (title.toLowerCase().includes('transfer')) return '🔄';
    if (title.toLowerCase().includes('nlp')) return '💬';
    if (title.toLowerCase().includes('multilingual')) return '🗣️';
    if (title.toLowerCase().includes('hybrid')) return '🔗';
    if (title.toLowerCase().includes('summarization')) return '📄';
    return '🔬';
  };

  const getDomain = (title) => {
    if (title.toLowerCase().includes('heart') || title.toLowerCase().includes('lung') || title.toLowerCase().includes('malaria') || title.toLowerCase().includes('medical')) {
      return 'Healthcare AI';
    }
    if (title.toLowerCase().includes('rag') || title.toLowerCase().includes('generative') || title.toLowerCase().includes('nlp') || title.toLowerCase().includes('summarization')) {
      return 'Natural Language Processing';
    }
    if (title.toLowerCase().includes('image') || title.toLowerCase().includes('cnn')) {
      return 'Computer Vision';
    }
    if (title.toLowerCase().includes('data') || title.toLowerCase().includes('feature')) {
      return 'Data Science';
    }
    if (title.toLowerCase().includes('federated') || title.toLowerCase().includes('ethical')) {
      return 'AI Ethics & Security';
    }
    return 'Machine Learning';
  };

  return (
    <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto space-y-16">
        {/* Research Section */}
        <section>
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Research & Ideas
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Exploring cutting-edge research in AI, Machine Learning, and Healthcare through innovative projects and ideas.
          </p>
          
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
            {researchIdeas.map((research, index) => {
              const status = getResearchStatus(research.title);
              return (
                <div
                  key={index}
                  className="break-inside-avoid mb-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/50"
                >
                  {/* Research Icon and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{getResearchIcon(research.title)}</span>
                      <span className="text-xs text-gray-400 font-medium">{getDomain(research.title)}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>
                      {status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                    {research.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {research.description}
                  </p>

                  {/* Research Type Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-md border border-emerald-500/20">
                        {getDomain(research.title)}
                      </span>
                      {research.title.toLowerCase().includes('machine learning') && (
                        <span className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-md border border-cyan-500/20">
                          Machine Learning
                        </span>
                      )}
                      {research.title.toLowerCase().includes('deep learning') && (
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-md border border-purple-500/20">
                          Deep Learning
                        </span>
                      )}
                      {(research.title.toLowerCase().includes('cnn') || research.title.toLowerCase().includes('lstm')) && (
                        <span className="px-2 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded-md border border-yellow-500/20">
                          Neural Networks
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Research Progress Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      🎯 Research Focus
                    </span>
                    <button className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Research Stats */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Research Portfolio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {researchIdeas.length}
              </div>
              <div className="text-gray-300 text-sm">Research Ideas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {researchIdeas.filter(idea => getResearchStatus(idea.title) === 'Worked On').length}
              </div>
              <div className="text-gray-300 text-sm">Projects Worked On</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {researchIdeas.filter(idea => getResearchStatus(idea.title) === 'Planning').length}
              </div>
              <div className="text-gray-300 text-sm">In Planning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {researchIdeas.filter(idea => idea.title.toLowerCase().includes('medical') || idea.title.toLowerCase().includes('health') || idea.title.toLowerCase().includes('heart') || idea.title.toLowerCase().includes('lung') || idea.title.toLowerCase().includes('malaria')).length}
              </div>
              <div className="text-gray-300 text-sm">Healthcare Focus</div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section>
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            Key Research Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🏥</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Healthcare AI</h4>
              <p className="text-gray-300 text-sm text-center">
                Disease prediction, medical image analysis, and healthcare data processing using advanced AI techniques.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Generative AI</h4>
              <p className="text-gray-300 text-sm text-center">
                Document generation, RAG systems, and automated content creation using state-of-the-art models.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:-translate-y-2 hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h4 className="text-xl font-semibold text-white mb-3 text-center">Deep Learning</h4>
              <p className="text-gray-300 text-sm text-center">
                Neural network architectures, multimodal learning, and advanced model optimization techniques.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;