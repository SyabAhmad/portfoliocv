import React from "react";
import { motion } from "framer-motion";
import { SiOpenai, SiGoogle } from "react-icons/si";

const AiFacts = () => {
  const aiFacts = [
    {
      id: 1,
      title: "ChatGPT",
      icon: SiOpenai,
      image: "/certificates/facts/Chatgpt talk about syab.png",
      description: "What OpenAI's ChatGPT says about me",
      url: "https://chatgpt.com/?q=Tell%20me%20about%20Syed%20Syab%20Ahmad%20and%20his%20experience",
      rotate: -2,
      pin: "bg-rose-800",
    },
    {
      id: 2,
      title: "Google AI",
      icon: SiGoogle,
      image: "/certificates/facts/google talk about Syab.jpg",
      description: "What Google's AI Search thinks about me",
      url: "https://gemini.google.com/app?q=Tell%20me%20about%20Syed%20Syab%20Ahmad%20and%20his%20experience",
      rotate: 1.5,
      pin: "bg-slate-500",
    },
    {
      id: 3,
      title: "Perplexity",
      icon: SiOpenai,
      image: "/certificates/facts/Perplexity talk about syab.png",
      description: "What Perplexity AI says about me",
      url: "https://www.perplexity.ai/search?q=Tell%20me%20about%20Syed%20Syab%20Ahmad%20and%20his%20experience",
      rotate: -1,
      pin: "bg-stone-500",
    },
  ];

  const githubAchievements = [
    {
      id: 1,
      title: "Pull Shark",
      image: "/certificates/facts/PULL SHARK.png",
      description: "GitHub Pull Shark achievement",
      rotate: 1,
      pin: "bg-rose-700",
    },
    {
      id: 2,
      title: "Quickdraw",
      image: "/certificates/facts/QUICKDRAW.png",
      description: "GitHub Quickdraw achievement",
      rotate: -1.5,
      pin: "bg-slate-600",
    },
    {
      id: 3,
      title: "YOLO",
      image: "/certificates/facts/YOLO.png",
      description: "GitHub YOLO achievement",
      rotate: 2,
      pin: "bg-stone-600",
    },
  ];

  return (
    <section className="mb-8 md:mb-12">
      <div className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-sm shadow-xl shadow-black/30 p-6 md:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2 font-handwriting">
            What AI Thinks About Me
          </h2>
          <p className="text-stone-500 text-xs md:text-sm font-handwriting">
            ChatGPT, Google AI Search, and Perplexity's perspective on my skills
          </p>
        </div>

        {/* AI Facts Grid - Flyer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-6 md:mb-8">
          {aiFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <motion.a
                key={fact.id}
                href={fact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, rotate: fact.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: fact.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                className="group block relative"
                style={{ transform: `rotate(${fact.rotate}deg)` }}
              >
                {/* Tape */}
                <div className="absolute -top-2.5 left-[20%] w-14 h-5 bg-stone-400/40 rotate-[-4deg] rounded-sm shadow-sm z-10" />
                {/* Pin */}
                <div className={`absolute -top-1.5 right-[15%] w-3 h-3 ${fact.pin} rounded-full shadow border border-black/20 z-10`} />

                <div className="relative bg-stone-200 dark:bg-stone-700 rounded-sm overflow-hidden shadow-lg transition-all duration-300 border border-stone-300 dark:border-stone-600">
                  {/* Icon Area */}
                  <div className="p-4 flex items-center gap-3 border-b border-stone-300 dark:border-stone-600">
                    <div className="w-10 h-10 rounded-lg bg-stone-500 dark:bg-stone-600 flex items-center justify-center">
                      <Icon className="text-lg text-stone-100" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-handwriting">
                        {fact.title}
                      </h3>
                      <p className="text-xs text-stone-500 font-handwriting">
                        {fact.description}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden h-48 md:h-64">
                    <img
                      src={fact.image}
                      alt={`${fact.title} about Syab`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-stone-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-stone-100 text-stone-900 text-sm font-bold rounded-full shadow-lg font-handwriting">
                        Ask {fact.title} →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Fun Note */}
        <div className="mt-4 p-3 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-sm text-center mb-6 md:mb-8">
          <p className="text-stone-600 dark:text-stone-300 text-xs md:text-sm font-handwriting">
            Pretty cool to see what different AI models think about my profile
          </p>
        </div>

        {/* GitHub Achievements */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 md:mb-6 text-center font-handwriting">
            GitHub Achievements
          </h3>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-5 md:gap-6 justify-center px-4">
              {githubAchievements.map((ach) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 20, rotate: ach.rotate }}
                  whileInView={{ opacity: 1, y: 0, rotate: ach.rotate }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.04, rotate: 0 }}
                  className="flex-shrink-0 w-64 md:w-80 relative"
                  style={{ transform: `rotate(${ach.rotate}deg)` }}
                >
                  {/* Tape */}
                  <div className="absolute -top-2.5 left-[25%] w-14 h-5 bg-stone-400/40 rotate-[3deg] rounded-sm shadow-sm z-10" />
                  {/* Pin */}
                  <div className={`absolute -top-1.5 right-[15%] w-2.5 h-2.5 ${ach.pin} rounded-full shadow border border-black/20 z-10`} />

                  <div className="relative bg-stone-200 dark:bg-stone-700 rounded-sm overflow-hidden shadow-lg border border-stone-300 dark:border-stone-600">
                    <div className="p-4 flex items-center gap-3 border-b border-stone-300 dark:border-stone-600">
                      <div className="w-10 h-10 rounded-lg bg-stone-500 dark:bg-stone-600 flex items-center justify-center text-stone-100 font-bold font-handwriting">
                        {ach.title[0]}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 font-handwriting">
                          {ach.title}
                        </h4>
                        <p className="text-xs text-stone-500 font-handwriting">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden h-48 md:h-64">
                      <img
                        src={ach.image}
                        alt={`${ach.title} achievement`}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Note */}
        <div className="mt-4 p-3 bg-stone-200 dark:bg-stone-700 border border-stone-300 dark:border-stone-600 rounded-sm text-center">
          <p className="text-stone-600 dark:text-stone-300 text-xs font-handwriting">
            My GitHub Badges
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiFacts;
