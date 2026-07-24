import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certifications from "../data/certificationsData";
import projects from "../data/projectsData";
import SEO from "./SEO";

const cardRotations = [-2, 1.5, -1, 2, -1.5, 0.8, -0.5, 1.8];
const pinColors = ["bg-rose-800", "bg-slate-500", "bg-stone-500", "bg-rose-700", "bg-slate-600", "bg-stone-600"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const certificatesWithImages = certifications.filter((cert) => cert.badge);

  const projectImages = projects
    .map((project) => ({ title: project.title, issuer: "Project", issuedDate: project.duration, badge: project.image || null, category: "Project", description: project.description, techStack: project.techStack, githubUrl: project.githubUrl }))
    .filter((project) => project.badge);

  const aiFactsImages = [
    { title: "ChatGPT About Syab", issuer: "OpenAI ChatGPT", issuedDate: "2024", badge: "/certificates/facts/Chatgpt talk about syab.png", category: "AI Facts" },
    { title: "Google AI About Syab", issuer: "Google AI Search", issuedDate: "2024", badge: "/certificates/facts/google talk about Syab.jpg", category: "AI Facts" },
    { title: "Perplexity About Syab", issuer: "Perplexity AI", issuedDate: "2024", badge: "/certificates/facts/Perplexity talk about syab.png", category: "AI Facts" },
    { title: "Pull Shark Achievement", issuer: "GitHub", issuedDate: "2024", badge: "/certificates/facts/PULL SHARK.png", category: "GitHub Achievements" },
    { title: "Quickdraw Achievement", issuer: "GitHub", issuedDate: "2024", badge: "/certificates/facts/QUICKDRAW.png", category: "GitHub Achievements" },
    { title: "YOLO Achievement", issuer: "GitHub", issuedDate: "2024", badge: "/certificates/facts/YOLO.png", category: "GitHub Achievements" },
  ];

  const designImages = [
    { title: "400m Home Design", issuer: "AutoCAD Project", issuedDate: "2024", badge: "/autocad/400m home 1.png", category: "AutoCAD" },
    { title: "1300ft Home Design", issuer: "AutoCAD Project", issuedDate: "2024", badge: "/autocad/1300feethome 1.png", category: "AutoCAD" },
    { title: "1700ft Home Design", issuer: "AutoCAD Project", issuedDate: "2024", badge: "/autocad/1700feethome 1.png", category: "AutoCAD" },
    { title: "Call Center Design", issuer: "AutoCAD Project", issuedDate: "2024", badge: "/autocad/callcenter 1.png", category: "AutoCAD" },
    { title: "Clinic Design", issuer: "AutoCAD Project", issuedDate: "2024", badge: "/autocad/Clinic 1.png", category: "AutoCAD" },
    { title: "1 Bedroom House", issuer: "Revit Project", issuedDate: "2024", badge: "/revit/1bedroomhouse 1.png", category: "Revit" },
    { title: "3 Floors House", issuer: "Revit Project", issuedDate: "2024", badge: "/revit/3floorshouse 1.png", category: "Revit" },
    { title: "6x2 Gang Design", issuer: "Revit Project", issuedDate: "2024", badge: "/revit/6x2 gang 1.png", category: "Revit" },
    { title: "Desk with Drawers", issuer: "Revit Project", issuedDate: "2024", badge: "/revit/desk_with_drawers.png", category: "Revit" },
    { title: "Dumbbell Design", issuer: "Revit Project", issuedDate: "2024", badge: "/revit/dumbbell.png", category: "Revit" },
    { title: "Family Panel", issuer: "Revit Project", issuedDate: "2024", badge: "/revit/family panel 1.png", category: "Revit" },
    { title: "Clinic Design", issuer: "SketchUp Project", issuedDate: "2024", badge: "/sketchup/clinic 1.png", category: "SketchUp" },
    { title: "CPU Design", issuer: "SketchUp Project", issuedDate: "2024", badge: "/sketchup/cpu 1.png", category: "SketchUp" },
    { title: "Daraz Store Design", issuer: "SketchUp Project", issuedDate: "2024", badge: "/sketchup/daraz 1.png", category: "SketchUp" },
    { title: "Door Design", issuer: "SketchUp Project", issuedDate: "2024", badge: "/sketchup/door 1.png", category: "SketchUp" },
    { title: "House Design", issuer: "SketchUp Project", issuedDate: "2024", badge: "/sketchup/house 1.png", category: "SketchUp" },
    { title: "Screen Design", issuer: "SketchUp Project", issuedDate: "2024", badge: "/sketchup/screen 1.png", category: "SketchUp" },
  ];

  const allImages = [...certificatesWithImages, ...projectImages, ...aiFactsImages, ...designImages];
  const categories = ["All", ...new Set(allImages.map((item) => item.category).filter(Boolean))];

  const filteredImages = allImages.filter((item) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === "Escape") setSelectedImage(null); };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImage]);

  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Certificate Gallery - Syed Syab Ahmad",
    description: "Browse through my collection of professional certifications and achievements.",
    url: "https://syab.tech/gallery",
    author: { "@type": "Person", name: "Syed Syab Ahmad" },
  };

  return (
    <>
      <SEO
        title="Certificate Gallery - Syed Syab Ahmad"
        description="Explore my comprehensive collection of 50+ professional certifications in AI, Machine Learning, Python, React, and more."
        keywords="certificates gallery, professional certifications, AI certificates"
        url="https://syab.tech/gallery"
        structuredData={galleryStructuredData}
      />

      <div className="min-h-screen pt-24 pb-16 bg-stone-900 dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header - Flyer */}
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: -20, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: -1 }} style={{ transform: "rotate(-1deg)" }} className="inline-block relative">
              <div className="absolute -top-3 left-[5%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm" />
              <div className="absolute -top-2 right-[8%] w-14 h-5 bg-stone-400/30 rotate-[3deg] rounded-sm" />
              <div className="absolute -top-1.5 left-[30%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />
              <h1 className="text-5xl md:text-6xl font-bold text-stone-100 mb-4 font-handwriting px-8 py-4">Certificate Gallery</h1>
            </motion.div>
            <motion.p className="text-xl text-stone-400 max-w-3xl mx-auto font-handwriting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              A visual collection of my professional achievements and certifications
            </motion.p>
            <motion.div className="mt-4 inline-block px-4 py-2 bg-stone-800 border border-stone-700 rounded-full" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
              <span className="text-stone-300 font-bold font-handwriting">{filteredImages.length}</span>
              <span className="text-stone-500 font-handwriting"> {filteredImages.length === 1 ? "Item" : "Items"}</span>
            </motion.div>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input type="text" placeholder="Search certificates..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-6 py-3 bg-stone-800 border border-stone-700 rounded-full text-stone-200 placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-500/20 transition-all font-handwriting" />
                <svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-handwriting ${filter === category ? "bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 shadow-lg" : "bg-stone-800/50 text-stone-400 hover:bg-stone-700 hover:text-stone-300"}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid - Flyer cards */}
          {filteredImages.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filteredImages.map((cert, index) => {
                const rot = cardRotations[index % cardRotations.length];
                const pinColor = pinColors[index % pinColors.length];
                return (
                  <motion.div key={cert.credentialId || index} className="break-inside-avoid mb-4 group cursor-pointer relative" initial={{ opacity: 0, scale: 0.9, rotate: rot }} animate={{ opacity: 1, scale: 1, rotate: rot }} transition={{ delay: index * 0.03 }} whileHover={{ scale: 1.03, rotate: 0 }} onClick={() => setSelectedImage(cert)} style={{ transform: `rotate(${rot}deg)` }}>
                    <div className="absolute -top-2 left-[12%] w-10 h-4 bg-stone-400/40 rotate-[-3deg] rounded-sm z-10" />
                    <div className={`absolute -top-1.5 right-[10%] w-2 h-2 ${pinColor} rounded-full shadow border border-black/20 z-10`} />

                    <div className="relative overflow-hidden rounded-sm bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-stone-500 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
                      <div className="relative overflow-hidden flex items-center justify-center">
                        <img src={cert.badge} alt={cert.title} className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" loading="lazy" onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
                        <div className="hidden w-full aspect-video bg-stone-200 dark:bg-stone-700 flex items-center justify-center p-4">
                          <span className="text-center text-sm font-semibold text-stone-500 font-handwriting">{cert.issuer}</span>
                        </div>
                        <div className="absolute inset-0 bg-stone-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div className="text-stone-200">
                            <p className="text-sm font-semibold mb-1 line-clamp-2 font-handwriting">{cert.title}</p>
                            <p className="text-xs text-stone-400 font-handwriting">{cert.issuer}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-stone-200/50 dark:bg-stone-700/50">
                        <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 line-clamp-1 font-handwriting mb-1">{cert.title}</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-stone-500 font-handwriting">{cert.issuer}</p>
                          {cert.category && <span className="px-2 py-0.5 bg-stone-300/30 dark:bg-stone-600/30 border border-stone-400/30 dark:border-stone-500/30 rounded-full text-[10px] text-stone-500 font-handwriting">{cert.category}</span>}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-block p-6 bg-stone-800 rounded-sm border border-stone-700">
                <p className="text-stone-500 text-lg font-handwriting">No certificates found</p>
                <p className="text-stone-600 text-sm mt-2 font-handwriting">Try adjusting your search or filter</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal - Flyer style */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div className="fixed inset-0 bg-stone-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="relative max-w-6xl w-full max-h-[90vh] overflow-auto bg-stone-100 dark:bg-stone-800 rounded-sm border border-stone-200 dark:border-stone-700 shadow-2xl shadow-black/60" onClick={(e) => e.stopPropagation()} initial={{ scale: 0.9, opacity: 0, rotate: -2 }} animate={{ scale: 1, opacity: 1, rotate: -1 }} exit={{ scale: 0.9, opacity: 0 }} style={{ transform: "rotate(-1deg)" }}>
                {/* Tape */}
                <div className="absolute -top-3 left-[10%] w-20 h-6 bg-stone-400/40 rotate-[-5deg] rounded-sm z-10" />
                <div className="absolute -top-3 right-[15%] w-16 h-5 bg-stone-400/40 rotate-[3deg] rounded-sm z-10" />
                <div className="absolute -top-2 left-[45%] w-3 h-3 bg-rose-800 rounded-full shadow-md border border-rose-950 z-10" />

                {/* Close */}
                <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-20 w-9 h-9 bg-stone-800 dark:bg-stone-200 text-stone-200 dark:text-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/3 p-6 flex items-center justify-center bg-stone-200/50 dark:bg-stone-700/30">
                    <img src={selectedImage.badge} alt={selectedImage.title} className="max-w-full max-h-[70vh] object-contain rounded-sm shadow-2xl" />
                  </div>
                  <div className="lg:w-1/3 p-6 overflow-y-auto">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">{selectedImage.title}</h2>
                        <p className="text-stone-500 font-semibold text-lg font-handwriting">{selectedImage.issuer}</p>
                      </div>
                      <div className="space-y-3">
                        {selectedImage.issuedDate && (
                          <div className="flex items-start">
                            <div className="w-5 h-5 text-stone-500 mr-3 mt-0.5 flex-shrink-0 font-handwriting">📅</div>
                            <div><p className="text-xs text-stone-500 uppercase font-handwriting">Issued Date</p><p className="text-stone-600 dark:text-stone-300 font-handwriting">{selectedImage.issuedDate}</p></div>
                          </div>
                        )}
                        {selectedImage.credentialId && (
                          <div className="flex items-start">
                            <div className="w-5 h-5 text-stone-500 mr-3 mt-0.5 flex-shrink-0 font-handwriting">🏷</div>
                            <div><p className="text-xs text-stone-500 uppercase font-handwriting">Credential ID</p><p className="text-stone-600 dark:text-stone-300 text-sm font-mono break-all">{selectedImage.credentialId}</p></div>
                          </div>
                        )}
                        {selectedImage.category && (
                          <div className="flex items-start">
                            <div className="w-5 h-5 text-stone-500 mr-3 mt-0.5 flex-shrink-0 font-handwriting">📂</div>
                            <div><p className="text-xs text-stone-500 uppercase font-handwriting">Category</p><span className="inline-block mt-1 px-3 py-1 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-full text-sm text-stone-600 dark:text-stone-300 font-medium font-handwriting">{selectedImage.category}</span></div>
                          </div>
                        )}
                        {selectedImage.skills && (
                          <div className="flex items-start">
                            <div className="w-5 h-5 text-stone-500 mr-3 mt-0.5 flex-shrink-0 font-handwriting">✓</div>
                            <div>
                              <p className="text-xs text-stone-500 uppercase mb-2 font-handwriting">Skills Demonstrated</p>
                              <div className="flex flex-wrap gap-2">{selectedImage.skills.split(",").map((skill, idx) => (<span key={idx} className="px-2 py-1 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded text-xs text-stone-600 dark:text-stone-300 font-handwriting">{skill.trim()}</span>))}</div>
                            </div>
                          </div>
                        )}
                      </div>
                      {selectedImage.credentialUrl && selectedImage.credentialUrl !== "#" && (
                        <a href={selectedImage.credentialUrl} target="_blank" rel="noopener noreferrer" className="block w-full mt-6 px-6 py-3 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 font-bold rounded-full hover:shadow-lg transition-all duration-300 text-center font-handwriting">View Credential</a>
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
