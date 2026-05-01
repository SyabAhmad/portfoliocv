import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronDown, FaChevronUp, FaLinkedin, FaExpand, FaCompress } from 'react-icons/fa';

const Recommendations = ({ recommendations, maxItems = 6 }) => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const recommendationsToShow = showAll ? recommendations : recommendations.slice(0, maxItems);

  return (
    <>
      <div className="space-y-6">
        <AnimatePresence>
          {recommendationsToShow.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="group relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 shadow-lg hover:shadow-amber-500/10 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Amber top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 md:p-8">
                  {/* Header: Avatar + Info */}
                  <div className="flex items-start gap-4 mb-5">
                    {/* Avatar */}
                    <motion.div
                      className={`relative flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${rec.avatarColor} flex items-center justify-center shadow-lg ring-2 ring-white dark:ring-slate-800`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-white font-bold text-lg">
                        {rec.initials}
                      </span>
                      {/* Online indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900" />
                    </motion.div>

                    {/* Name & Designation */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-900 dark:text-white font-bold text-lg truncate">
                        {rec.recommender}
                      </h4>
                      <p className="text-amber-600 dark:text-amber-400 text-sm font-medium leading-snug">
                        {rec.designation}
                      </p>
                      <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">
                        {rec.date}
                      </p>
                    </div>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="flex-shrink-0 p-2 rounded-lg text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all duration-300"
                    >
                      {expandedCard === index ? (
                        <FaCompress className="w-4 h-4" />
                      ) : (
                        <FaExpand className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Quote */}
                  <div className="relative pl-6 border-l-2 border-amber-300 dark:border-amber-500/30">
                    <FaQuoteLeft className="absolute -left-3 -top-2 w-5 h-5 text-amber-400/30" />
                    <motion.p
                      className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
                        expandedCard === index ? '' : 'line-clamp-3'
                      }`}
                      layout
                    >
                      {rec.text}
                    </motion.p>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      {rec.connection}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      {recommendations.length > maxItems && (
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 border border-amber-300 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 font-semibold rounded-xl hover:from-amber-500/20 hover:to-orange-500/20 dark:hover:from-amber-500/30 dark:hover:to-orange-500/30 hover:border-amber-400 dark:hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
          >
            {showAll ? (
              <>
                <FaChevronUp className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Show Less
              </>
            ) : (
              <>
                <FaChevronDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
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
