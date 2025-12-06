import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CertificationBadges Component
 * Displays small certificate/badge previews in a grid
 * Can be used on About page, Projects page, or anywhere needed
 */
const CertificationBadges = ({ certifications, maxItems = 12, showCategory = true }) => {
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [hoveredBadge, setHoveredBadge] = useState(null);

  // Filter only certifications that have badges
  const certificationsWithBadges = certifications
    .filter(cert => cert.badge)
    .slice(0, maxItems);

  if (certificationsWithBadges.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>No certificate badges to display</p>
      </div>
    );
  }

  return (
    <>
      {/* Badge Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 py-8">
        {certificationsWithBadges.map((cert, index) => (
          <motion.div
            key={cert.credentialId || index}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onMouseEnter={() => setHoveredBadge(index)}
            onMouseLeave={() => setHoveredBadge(null)}
            onClick={() => setSelectedBadge(cert)}
          >
            {/* Badge Image */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 p-1">
              <img
                src={cert.badge}
                alt={cert.title}
                className="w-full h-full object-cover rounded-md hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback for missing images */}
              <div className="hidden w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center rounded-md">
                <span className="text-center text-xs font-semibold text-white px-2">
                  {cert.issuer}
                </span>
              </div>

              {/* Hover Overlay */}
              {hoveredBadge === index && (
                <motion.div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-md flex flex-col items-center justify-center p-2 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-xs font-semibold text-white mb-1 line-clamp-2">
                    {cert.title}
                  </p>
                  <p className="text-xs text-cyan-400 mb-1">{cert.issuer}</p>
                  {showCategory && cert.category && (
                    <span className="inline-block px-2 py-0.5 bg-cyan-500/30 border border-cyan-500/50 rounded-full text-xs text-cyan-200">
                      {cert.category}
                    </span>
                  )}
                </motion.div>
              )}

              {/* Date Badge */}
              <div className="absolute top-1 right-1 bg-slate-900/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs text-gray-300 border border-slate-700/50">
                {cert.issuedDate.split('·')[0].trim().split(' ').slice(-1)[0]}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Full View */}
      {selectedBadge && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBadge(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4 border-b border-slate-700/50">
              <button
                onClick={() => setSelectedBadge(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={selectedBadge.badge}
                  alt={selectedBadge.title}
                  className="w-full h-auto rounded-lg border border-slate-600"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {selectedBadge.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-1">
                    {selectedBadge.issuer}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {selectedBadge.issuedDate}
                  </p>

                  {selectedBadge.category && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-sm text-cyan-300 font-medium">
                        {selectedBadge.category}
                      </span>
                    </div>
                  )}

                  {selectedBadge.skills && (
                    <div>
                      <p className="text-gray-400 text-xs font-semibold mb-2">
                        SKILLS DEMONSTRATED
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedBadge.skills.split(',').map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-800 border border-slate-600 rounded text-xs text-gray-300"
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {selectedBadge.credentialId && (
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                    <p className="text-sm text-gray-300 font-mono break-all">
                      {selectedBadge.credentialId}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CertificationBadges;
