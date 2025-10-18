import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import certifications from '../data/certificationsData';
import SEO from './SEO';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all certificates with images
  const certificatesWithImages = certifications.filter(cert => cert.badge);

  // Get unique categories
  const categories = ['All', ...new Set(certificatesWithImages.map(cert => cert.category).filter(Boolean))];

  // Filter certificates
  const filteredCertificates = certificatesWithImages.filter(cert => {
    const matchesCategory = filter === 'All' || cert.category === filter;
    const matchesSearch = !searchQuery || 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Certificate Gallery - Syed Syab Ahmad",
    "description": "Browse through my collection of professional certifications, courses, and achievements in AI, Machine Learning, Web Development, and more.",
    "url": "https://syab.link/gallery",
    "author": {
      "@type": "Person",
      "name": "Syed Syab Ahmad"
    }
  };

  return (
    <>
      <SEO 
        title="Certificate Gallery - Syed Syab Ahmad"
        description="Explore my comprehensive collection of professional certifications and achievements in AI, Machine Learning, Full Stack Development, and various technologies."
        keywords="certificates gallery, professional certifications, AI certificates, web development certifications, machine learning courses, tech achievements"
        url="https://syab.link/gallery"
        structuredData={galleryStructuredData}
      />

      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Certificate Gallery
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A visual collection of my professional achievements and certifications
            </motion.p>
            <motion.div 
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-cyan-400 font-semibold">{filteredCertificates.length}</span>
              <span className="text-gray-400"> {filteredCertificates.length === 1 ? 'Certificate' : 'Certificates'}</span>
            </motion.div>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search certificates by name or issuer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
                <svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          {filteredCertificates.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.credentialId || index}
                  className="break-inside-avoid mb-4 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(cert)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={cert.badge}
                        alt={cert.title}
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback */}
                      <div className="hidden w-full aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center p-4">
                        <span className="text-center text-sm font-semibold text-white">
                          {cert.issuer}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white">
                          <p className="text-sm font-semibold mb-1 line-clamp-2">{cert.title}</p>
                          <p className="text-xs text-cyan-400">{cert.issuer}</p>
                        </div>
                      </div>
                    </div>

                    {/* Info Bar */}
                    <div className="p-3 bg-gray-800/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold text-white line-clamp-1">{cert.title}</h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-400">{cert.issuer}</p>
                        {cert.category && (
                          <span className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-300">
                            {cert.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-block p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400 text-lg">No certificates found</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filter</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal for Full View */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-6xl w-full max-h-[90vh] overflow-auto bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex flex-col lg:flex-row">
                  {/* Image Side */}
                  <div className="lg:w-2/3 p-6 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <img
                      src={selectedImage.badge}
                      alt={selectedImage.title}
                      className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                    />
                  </div>

                  {/* Details Side */}
                  <div className="lg:w-1/3 p-6 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {selectedImage.title}
                        </h2>
                        <p className="text-cyan-400 font-semibold text-lg">
                          {selectedImage.issuer}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {selectedImage.issuedDate && (
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500 uppercase">Issued Date</p>
                              <p className="text-gray-300">{selectedImage.issuedDate}</p>
                            </div>
                          </div>
                        )}

                        {selectedImage.credentialId && (
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500 uppercase">Credential ID</p>
                              <p className="text-gray-300 text-sm font-mono break-all">{selectedImage.credentialId}</p>
                            </div>
                          </div>
                        )}

                        {selectedImage.category && (
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500 uppercase">Category</p>
                              <span className="inline-block mt-1 px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-sm text-cyan-300 font-medium">
                                {selectedImage.category}
                              </span>
                            </div>
                          </div>
                        )}

                        {selectedImage.skills && (
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500 uppercase mb-2">Skills Demonstrated</p>
                              <div className="flex flex-wrap gap-2">
                                {selectedImage.skills.split(',').map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 bg-slate-800 border border-slate-600 rounded text-xs text-gray-300"
                                  >
                                    {skill.trim()}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {selectedImage.credentialUrl && selectedImage.credentialUrl !== '#' && (
                        <a
                          href={selectedImage.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 text-center"
                        >
                          View Credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;
