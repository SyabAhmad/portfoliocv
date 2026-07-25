import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronDown, FaChevronUp, FaExpand, FaCompress } from "react-icons/fa";

const recRotations = [-1.5, 1, -0.8, 1.2, -0.5, 0.8];
const recPins = ["bg-rose-700", "bg-slate-500", "bg-stone-1000", "bg-rose-700", "bg-slate-600", "bg-gray-600"];

const Recommendations = ({ recommendations, maxItems = 6 }) => {
 const [showAll, setShowAll] = useState(false);
 const [expandedCard, setExpandedCard] = useState(null);

 const recommendationsToShow = showAll ? recommendations : recommendations.slice(0, maxItems);

 return (
 <>
 <div className="space-y-6">
 <AnimatePresence>
 {recommendationsToShow.map((rec, index) => {
 const rot = recRotations[index % recRotations.length];
 const pinColor = recPins[index % recPins.length];
 const isExpanded = expandedCard === index;

 return (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20, rotate: rot }}
 animate={{ opacity: 1, y: 0, rotate: rot }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ delay: index * 0.06, duration: 0.5 }}
 whileHover={{ scale: 1.02, rotate: 0 }}
 className="relative"
 style={{ transform: `rotate(${rot}deg)` }}
 >
 {/* Tape */}
 <div
 className="absolute -top-2.5 left-[15%] w-16 h-5 bg-stone-200 rounded-sm shadow-sm z-10"
 style={{ transform: `rotate(${-rot * 1.5}deg)` }}
 />
 {/* Pin */}
 <div className={`absolute -top-1.5 right-[12%] w-3 h-3 ${pinColor} rounded-full shadow border border-stone-900/20 z-10`} />

 <div className="relative bg-stone-50 rounded-sm border border-stone-200 shadow-lg transition-all duration-300 overflow-hidden">
 <div className="p-5 md:p-6">
 {/* Header: Avatar + Info */}
 <div className="flex items-start gap-3 mb-4">
 {/* Avatar */}
 <div className={`relative flex-shrink-0 w-12 h-12 rounded-full ${rec.avatarColor} flex items-center justify-center shadow-md`}>
 <span className="text-white font-bold text-sm font-handwriting">
 {rec.initials}
 </span>
 </div>

 {/* Name & Designation */}
 <div className="flex-1 min-w-0">
 <h4 className="text-stone-900 font-bold text-base truncate font-handwriting">
 {rec.recommender}
 </h4>
 <p className="text-stone-600 text-sm font-handwriting leading-snug">
 {rec.designation}
 </p>
 <p className="text-stone-500 text-xs font-handwriting mt-0.5">
 {rec.date}
 </p>
 </div>

 {/* Expand button */}
 <button
 onClick={() => setExpandedCard(isExpanded ? null : index)}
 className="flex-shrink-0 p-1.5 rounded-lg text-stone-400 hover:text-stone-600 hover:text-stone-900 hover:bg-stone-100 hover:bg-stone-200 transition-all duration-300"
 >
 {isExpanded ? <FaCompress className="w-3.5 h-3.5" /> : <FaExpand className="w-3.5 h-3.5" />}
 </button>
 </div>

 {/* Quote */}
 <div className="relative pl-5 border-l-2 border-stone-300">
 <FaQuoteLeft className="absolute -left-2.5 -top-1 w-4 h-4 text-stone-400/40" />
 <motion.p
 className={`text-stone-600 leading-relaxed text-sm font-handwriting ${isExpanded ? "" : "line-clamp-3"}`}
 layout
 >
 {rec.text}
 </motion.p>
 </div>

 {/* Footer */}
 <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between">
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 border border-stone-300 rounded-full text-stone-600 text-xs font-handwriting">
 <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
 {rec.connection}
 </span>
 </div>
 </div>
 </div>
 </motion.div>
 );
 })}
 </AnimatePresence>
 </div>

 {/* View More Button */}
 {recommendations.length > maxItems && (
 <motion.div
 className="text-center mt-8"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.5 }}
 >
 <motion.button
 onClick={() => setShowAll(!showAll)}
 whileHover={{ scale: 1.05 }}
 className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-100 border border-stone-300 text-stone-600 font-semibold rounded-full hover:bg-gray-300 hover:bg-stone-200 transition-all duration-300 font-handwriting text-sm"
 >
 {showAll ? (
 <>
 <FaChevronUp className="w-3.5 h-3.5" />
 Show Less
 </>
 ) : (
 <>
 <FaChevronDown className="w-3.5 h-3.5" />
 View All ({recommendations.length - maxItems} more)
 </>
 )}
 </motion.button>
 </motion.div>
 )}
 </>
 );
};

export default Recommendations;
