import React from "react";
import { motion } from "framer-motion";
import { SiOpenai, SiGoogle } from "react-icons/si";

const AiFacts = () => {
  const aiFacts = [
    {
      id: 1,
      title: "ChatGPT",
      icon: SiOpenai,
      color: "from-gray-800 to-gray-600",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      image: "/certificates/facts/Chatgpt talk about syab.png",
      description: "What OpenAI's ChatGPT says about me",
      url: "https://chatgpt.com/?q=Tell%20me%20about%20Syed%20Syab%20Ahmad%20and%20his%20experience",
    },
    {
      id: 2,
      title: "Google AI",
      icon: SiGoogle,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      image: "/certificates/facts/google talk about Syab.jpg",
      description: "What Google's AI Search thinks about me",
      url: "https://gemini.google.com/app?q=Tell%20me%20about%20Syed%20Syab%20Ahmad%20and%20his%20experience",
    },
    {
      id: 3,
      title: "Perplexity",
      icon: SiOpenai,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      image: "/certificates/facts/Perplexity talk about syab.png",
      description: "What Perplexity AI says about me",
      url: "https://www.perplexity.ai/search?q=Tell%20me%20about%20Syed%20Syab%20Ahmad%20and%20his%20experience",
    },
  ];

  const githubAchievements = [
    {
      id: 1,
      title: "Pull Shark",
      icon: SiOpenai,
      color: "from-gray-500 to-red-500",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      image: "/certificates/facts/PULL SHARK.png",
      description: "GitHub Pull Shark achievement",
    },
    {
      id: 2,
      title: "Quickdraw",
      icon: SiGoogle,
      color: "from-yellow-500 to-gray-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      image: "/certificates/facts/QUICKDRAW.png",
      description: "GitHub Quickdraw achievement",
    },
    {
      id: 3,
      title: "YOLO",
      icon: SiOpenai,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      image: "/certificates/facts/YOLO.png",
      description: "GitHub YOLO achievement",
    },
  ];

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
    <section className="mb-8 md:mb-12">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-xl p-6 md:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            What AI Thinks About Me
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm max-w-3xl mx-auto">
            ChatGPT, Google AI Search, and Perplexity's perspective on my skills
          </p>
        </div>
        {/* AI Facts Grid - Compact */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {aiFacts.map((fact) => {
            const IconComponent = fact.icon;

            return (
              <motion.a
                key={fact.id}
                href={fact.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group block"
              >
                <motion.div
                  className={`relative h-full flex flex-col bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${fact.borderColor} hover:border-opacity-100`}
                  whileHover={{ y: -2 }}
                >
                  {/* Top Accent */}
                  <div className={`h-1 bg-${fact.color}`}></div>

                  {/* Icon Area */}
                  <div
                    className={`p-4 md:p-6 ${fact.bgColor} border-b border-gray-200 dark:border-gray-700/50`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${fact.color} flex items-center justify-center`}
                      >
                        <IconComponent className="text-lg md:text-xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                          {fact.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {fact.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image - Compact */}
                  <div className="relative overflow-hidden h-48 md:h-64">
                    <img
                      src={fact.image}
                      alt={`${fact.title} about Syab`}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                    ></div>

                    {/* Hover CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white text-sm font-semibold rounded-full shadow-lg">
                        Ask {fact.title} →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>
        {/* Fun Note */}
        <div className="mt-4 md:mt-6 p-3 bg-gray-500/10 border border-gray-500/30 rounded-lg text-center mb-6 md:mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">
            ✨ Pretty cool to see what different AI models think about my profile!
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 text-center">
            GitHub Achievements
          </h3>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 md:gap-6 justify-center px-4">
              {githubAchievements.map((achievement) => {
                const IconComponent = achievement.icon;

                return (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    className="group flex-shrink-0 w-64 md:w-80"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className={`relative h-full flex flex-col bg-white/50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${achievement.borderColor} hover:border-opacity-100`}
                      whileHover={{ y: -2 }}
                    >
                      {/* Top Accent */}
                      <div
                        className={`h-1 bg-${achievement.color}`}
                      ></div>

                      {/* Icon Area */}
                      <div
                        className={`p-4 ${achievement.bgColor} border-b border-gray-200 dark:border-gray-700/50`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg ${achievement.color} flex items-center justify-center`}
                          >
                            <IconComponent className="text-lg text-white" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image - Compact */}
                      <div className="relative overflow-hidden h-48 md:h-64">
                        <img
                          src={achievement.image}
                          alt={`${achievement.title} achievement`}
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                        ></div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Fun Note */}
        <div className="mt-4 p-3 bg-gray-500/10 border border-gray-500/30 rounded-lg text-center">
          <p className="text-gray-700 dark:text-gray-300 text-xs">✨ My GitHub Badges!</p>
        </div>
      </div>
    </section>
  );
};

export default AiFacts;
