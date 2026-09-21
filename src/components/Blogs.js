import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "./SEO";
import blogs from "../data/blogsData";

const Blogs = () => {
  return (
    <>
      <SEO
        title="Blogs - Syed Syab Ahmad"
        description="Notes on AI, RAG systems, multilingual embeddings, and shipping MVPs fast. By Syed Syab Ahmad."
        keywords="Syed Syab Ahmad blog, AI blog, RAG systems, MVP development, machine learning notes"
        url="https://syab.tech/blogs"
      />

      <div className="min-h-screen bg-stone-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <p className="text-sm font-medium text-stone-400 mb-3 font-handwriting tracking-widest uppercase">
              Engineering Notes
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 font-heading mb-3">
              Notes.
            </h1>
            <p className="text-stone-500 text-lg max-w-xl font-handwriting">
              Real problems, experiments, failures, and lessons from building AI/ML and production software. {blogs.length} notes so far.
            </p>
          </motion.div>

          <div className="space-y-4">
            {blogs.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 hover:border-stone-300 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs text-stone-400 font-handwriting">{post.date}</span>
                  <span className="text-xs text-stone-300">·</span>
                  <span className="text-xs text-stone-400 font-handwriting">{post.readTime}</span>
                  {post.project && (
                    <>
                      <span className="text-xs text-stone-300">·</span>
                      <span className="text-xs font-semibold text-stone-600 font-handwriting">{post.project}</span>
                    </>
                  )}
                  {post.type && (
                    <>
                      <span className="text-xs text-stone-300">·</span>
                      <span className="text-xs text-stone-400 font-handwriting">{post.type}</span>
                    </>
                  )}
                </div>
                <Link to={`/blogs/${post.slug}`}>
                  <h2 className="text-xl font-bold text-stone-900 font-heading mb-1 hover:text-stone-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-stone-500 text-sm font-handwriting leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="text-sm font-bold text-stone-900 font-heading"
                  >
                    Read →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
