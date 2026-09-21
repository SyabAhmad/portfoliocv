import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "./SEO";
import blogs from "../data/blogsData";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 pb-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-stone-900 font-heading mb-3">Post not found.</h1>
        <p className="text-stone-500 font-handwriting mb-6">That slug doesn't match any blog post.</p>
        <Link to="/blogs" className="text-stone-900 font-bold font-heading">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const related = (post.related || [])
    .map((slug) => blogs.find((b) => b.slug === slug))
    .filter(Boolean)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={`${post.title} - Syed Syab Ahmad`}
        description={post.excerpt}
        keywords={`${post.tags.join(", ")}, Syed Syab Ahmad blog`}
        url={`https://syab.tech/blogs/${post.slug}`}
      />

      <div className="min-h-screen bg-stone-50 pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blogs" className="text-sm text-stone-400 font-handwriting hover:text-stone-700 transition-colors">
              ← All Blogs
            </Link>
            <div className="flex flex-wrap items-center gap-2 mt-4 mb-3">
              <span className="text-xs text-stone-400 font-handwriting">{post.date}</span>
              <span className="text-xs text-stone-300">·</span>
              <span className="text-xs text-stone-400 font-handwriting">{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 font-heading leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full font-handwriting">
                  {tag}
                </span>
              ))}
            </div>

            {(post.project || post.stack || post.category || post.type || post.status) && (
              <div className="bg-stone-50 border border-stone-100 rounded-lg p-4 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Project", value: post.project },
                  { label: "Stack", value: post.stack },
                  { label: "Category", value: post.category },
                  { label: "Type", value: post.type },
                  { label: "Status", value: post.status },
                  { label: "Published", value: post.date },
                ].filter((m) => m.value).map((m, i) => (
                  <div key={i}>
                    <span className="text-[11px] text-stone-400 font-handwriting uppercase tracking-wider">{m.label}</span>
                    <p className="text-stone-700 text-sm font-handwriting">{m.value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10"
          >
            {post.content.map((para, i) => (
              <p key={i} className="text-stone-600 font-handwriting leading-relaxed mb-5 last:mb-0">
                {para}
              </p>
            ))}
          </motion.article>

          {related.length > 0 && (
            <div className="mt-10">
              <p className="text-sm font-medium text-stone-400 mb-4 font-handwriting tracking-widest uppercase">
                Related Notes
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blogs/${r.slug}`}
                    className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-300 transition-colors"
                  >
                    <p className="text-xs text-stone-400 font-handwriting mb-1">{r.date} · {r.readTime}</p>
                    <h3 className="text-base font-bold text-stone-900 font-heading">{r.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
