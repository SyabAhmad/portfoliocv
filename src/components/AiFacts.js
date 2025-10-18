import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiOpenai, SiGoogle } from 'react-icons/si';

const AiFacts = () => {
  const [expandedId, setExpandedId] = useState(null);

  const facts = [
    {
      id: 1,
      title: "ChatGPT",
      icon: SiOpenai,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      image: "/certificates/facts/Chatgpt talk about syab.png",
      description: "What OpenAI's ChatGPT says about me"
    },
    {
      id: 2,
      title: "Google AI",
      icon: SiGoogle,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      image: "/certificates/facts/google talk about Syab.jpg",
      description: "What Google's AI Search thinks about me"
    },
    {
      id: 3,
      title: "Perplexity",
      icon: SiOpenai,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      image: "/certificates/facts/Perplexity talk about syab.png",
      description: "What Perplexity AI says about me"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="mb-12">
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-3">
            What AI Thinks About Me
          </h2>
          <p className="text-gray-400 text-sm max-w-3xl mx-auto">
            ChatGPT, Google AI Search, and Perplexity's perspective on my skills and profile
          </p>
        </div>

        {/* Facts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {facts.map((fact) => {
            const IconComponent = fact.icon;
            const isExpanded = expandedId === fact.id;

            return (
              <motion.div
                key={fact.id}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className={`relative h-full flex flex-col bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border ${fact.borderColor} hover:border-opacity-100 cursor-pointer`}
                  onClick={() => setExpandedId(isExpanded ? null : fact.id)}
                  whileHover={{ y: -4 }}
                >
                  {/* Top Accent */}
                  <div className={`h-1 bg-gradient-to-r ${fact.color}`}></div>

                  {/* Icon Area */}
                  <div className={`p-6 ${fact.bgColor} border-b border-slate-700/50 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${fact.color} flex items-center justify-center`}>
                        <IconComponent className="text-xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{fact.title}</h3>
                        <p className="text-xs text-gray-400">{fact.description}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-400 group-hover:text-cyan-400 transition-colors"
                    >
                      <FaChevronDown />
                    </motion.div>
                  </div>

                  {/* Image - Collapsed Preview */}
                  <div className={`relative overflow-hidden transition-all duration-300 ${isExpanded ? 'h-full' : 'h-48'}`}>
                    <img
                      src={fact.image}
                      alt={`${fact.title} about Syab`}
                      className={`w-full h-full object-cover transition-all duration-300 ${isExpanded ? 'scale-100' : 'scale-95'}`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  </div>

                  {/* Expanded Info */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`p-4 border-t border-slate-700/50 ${fact.bgColor}`}
                    >
                      <p className="text-xs text-gray-300 text-center font-medium">
                        Click to view full image
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Fun Note */}
        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-center">
          <p className="text-yellow-200 text-sm">
            ✨ Haha! Pretty cool to see what different AI models think about my profile and skills!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiFacts;
