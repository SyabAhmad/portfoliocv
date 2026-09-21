import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "./SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found — Syed Syab Ahmad"
        description="You landed somewhere weird. That's okay — I built this page on purpose so you'd have a reason to hire me."
        keywords="404 page not found, syab.tech, hire developer"
        url="https://syab.tech/404"
      />

      <div className="min-h-screen bg-stone-50 pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-8xl sm:text-9xl font-bold text-stone-900 font-heading mb-4 select-none"
          >
            4<span className="text-stone-300">0</span>4
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-stone-900 font-heading mb-4"
          >
            The page you want doesn't exist.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-stone-500 font-handwriting text-lg leading-relaxed mb-8 max-w-lg mx-auto"
          >
            Honestly? This page might be more useful than the one you were looking for. Because{" "}
            <strong className="text-stone-700">you</strong> just discovered something —{" "}
            I build real software and I'm looking for problems to solve. So if you're still here, you might actually have one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-stone-900 text-stone-50 rounded-xl p-6 sm:p-8 mb-8 text-left"
          >
            <p className="text-sm font-medium text-stone-400 font-handwriting tracking-widest uppercase mb-3">
              What to do now
            </p>
            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  text: (
                    <span>
                      <strong className="text-stone-300">Have a project?</strong> Book a call or send me a message — I respond fast, I ship faster.
                    </span>
                  ),
                },
                {
                  step: "2",
                  text: (
                    <span>
                      <strong className="text-stone-300">Want to see my work?</strong> Head to the Projects page — 37+ things I've shipped to production.
                    </span>
                  ),
                },
                {
                  step: "3",
                  text: (
                    <span>
                      <strong className="text-stone-300">Curious about my engineering notes?</strong> Check the Blogs — real failures, real results.
                    </span>
                  ),
                },
                {
                  step: "4",
                  text: (
                    <span>
                      <strong className="text-stone-300">Just got lost?</strong> That's fair. The home page is <Link to="/" className="underline hover:text-stone-300">right here</Link>.
                    </span>
                  ),
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-stone-800 rounded-full flex items-center justify-center text-sm font-bold font-heading">
                    {item.step}
                  </span>
                  <p className="text-stone-300 font-handwriting text-sm leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/"
              className="px-6 py-3 bg-stone-900 text-stone-50 font-bold rounded-lg text-sm font-heading hover:bg-stone-700 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-stone-300 text-stone-600 font-bold rounded-lg text-sm font-heading hover:border-stone-500 hover:text-stone-900 transition-colors"
            >
              Hire Me →
            </Link>
            <Link
              to="/blogs"
              className="px-6 py-3 border-2 border-stone-200 text-stone-500 font-bold rounded-lg text-sm font-heading hover:border-stone-400 hover:text-stone-700 transition-colors"
            >
              Read Notes →
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 text-xs text-stone-400 font-handwriting"
          >
            If you typed a URL directly and think it should exist, DM Syed Syab Ahmad on LinkedIn or{" "}
            <a href="https://github.com/syabahmad" target="_blank" rel="noopener noreferrer" className="underline">
              GitHub
            </a>{" "}
            — I check both more than I check my email.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
