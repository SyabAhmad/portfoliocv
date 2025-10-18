import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Recommendations = ({ recommendations, maxItems = 6 }) => {
  const [showAll, setShowAll] = useState(false);

  const recommendationsToShow = showAll ? recommendations : recommendations.slice(0, maxItems);

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
    <>
      {/* Recommendations Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {recommendationsToShow.map((rec, index) => (
          <motion.div key={index} variants={itemVariants} className="group h-full">
            {/* Card Container */}
            <div className="relative h-full flex flex-col bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/40 hover:border-cyan-500/40">
              
              {/* Top Gradient Banner Area */}
              <div className="relative h-32 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 backdrop-blur-sm border-b border-slate-700/50 flex items-center justify-center">
                {/* Decorative Quote Icons */}
                <div className="absolute top-3 left-4 text-cyan-400/30">
                  <FaQuoteLeft className="text-2xl" />
                </div>
                <div className="absolute bottom-3 right-4 text-cyan-400/30">
                  <FaQuoteRight className="text-2xl" />
                </div>

                {/* Avatar - Overlapping bottom */}
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${rec.avatarColor} flex items-center justify-center flex-shrink-0 shadow-xl border-4 border-slate-900 font-bold text-white text-xl absolute bottom-0 translate-y-1/2`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {rec.initials}
                </motion.div>
              </div>

              {/* Content Area - Below Avatar */}
              <div className="flex-1 flex flex-col p-6 pt-14">
                
                {/* Recommender Info */}
                <div className="text-center mb-4">
                  <h4 className="text-white font-bold text-lg leading-tight">
                    {rec.recommender}
                  </h4>
                  <p className="text-cyan-400 text-sm font-medium mt-1">
                    {rec.designation}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Divider */}
                <div className="h-1 w-8 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4"></div>

                {/* Testimonial Text */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1 text-center mb-4 line-clamp-4">
                  "{rec.text}"
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-700/50 flex flex-col items-center gap-2">
                  <p className="text-slate-500 text-xs">
                    {rec.date}
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-300 text-xs font-medium">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Connected
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      {recommendations.length > maxItems && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center mx-auto px-7 py-3 bg-gradient-to-r from-cyan-500/25 to-purple-500/25 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:from-cyan-500/35 hover:to-purple-500/35 hover:border-cyan-500/70 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group"
          >
            {showAll ? (
              <>
                <FaChevronUp className="mr-2 group-hover:translate-y-0.5 transition-transform" />
                Show Less
              </>
            ) : (
              <>
                <FaChevronDown className="mr-2 group-hover:-translate-y-0.5 transition-transform" />
                View All ({recommendations.length - maxItems} more)
              </>
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Recommendations;
