import React from "react";

const experienceData = [
  {
    id: 0,
    role: "Full Stack Web Developer & ML/AI Engineer",
    company: "Freelance",
    period: "Nov 2023 - Present",
    description:
      "Building Next GEN AI, working for clients on web development and AI projects using modern technologies.",
  },
  {
    id: 1,
    role: "Student Ambassador",
    company: "BLACKBOX.AI",
    period: "Nov 2024 - Present",
    description:
      "Represent BLACKBOX.AI as a Student Ambassador, fostering AI education, community engagement, and promoting innovative solutions.",
  },
  {
    id: 2,
    role: "Python Developer",
    company: "Suvastu Tech",
    period: "Oct 2024 - Jan 2025",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) system for an e-commerce platform, and designed a custom ETL pipeline using Python, enabling scalable data processes.",
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "SkillBuild",
    period: "Aug 2024 - Sep 2024",
    description:
      "Contributed to ML projects involving Pandas, NumPy, Scikit-Learn, and Python. Enhanced model performance and deployed solutions remotely.",
  },
  {
    id: 4,
    role: "Chief Operating Officer",
    company: "AI3",
    period: "Apr 2024 - Jul 2024",
    description:
      "Oversaw operations and generative AI development, managing projects and cross-functional teams to deliver cutting-edge AI solutions.",
  },
  {
    id: 5,
    role: "Software Engineer",
    company: "AI3",
    period: "Nov 2023 - Apr 2024",
    description:
      "Built AI-driven applications including article generators, text-to-speech tools, and improved blog content with generative AI technologies.",
  },
  {
    id: 6,
    role: "Machine Learning Intern",
    company: "InternCareer",
    period: "Nov 2023 - Dec 2023",
    description:
      "Worked remotely on ML tasks including data preprocessing, model building, and evaluation.",
  },
  {
    id: 7,
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    period: "Sep 2023 - Nov 2023",
    description:
      "Implemented ML pipelines with Python and contributed to multiple AI projects.",
    badge:
      "/certificates/Internships/CodeAlpha/Offer Letter/offer letter code alpha.jpg",
  },
  {
    id: 8,
    role: "Data Science Intern",
    company: "CodSoft",
    period: "Sep 2023 - Oct 2023",
    description:
      "Worked on data analysis using Pandas, NumPy, and Linear Regression. Improved model accuracy with feature engineering.",
    badge:
      "/certificates/Internships/CodSoft/Completion Certificate/Certificate.png",
  },
  {
    id: 9,
    role: "Frontend Web Developer",
    company: "Interns Pakistan",
    period: "Aug 2023 - Sep 2023",
    description:
      "Developed responsive front-end applications using HTML, CSS, and React.js.",
    badge: "/certificates/Internships/Interns.pk/Certificate (5) conv 1.png",
  },
  {
    id: 10,
    role: "Web Developer",
    company: "LetsGrowMore",
    period: "Jul 2023 - Sep 2023",
    description:
      "Contributed to web development projects using JavaScript, HTML, CSS, and React.js.",
    badge:
      "/certificates/Internships/Lets Grow More/Syed Syab Ahmad Shah (2) conv 1.png",
  },
  {
    id: 11,
    role: "Web Developer",
    company: "iNeuron.ai",
    period: "Jun 2023 - Aug 2023",
    description:
      "Developed web applications with React.js, Tailwind CSS, and JavaScript.",
    badge:
      "/certificates/Internships/iNeuron/Completion Certificate conv 1.png",
  },
  {
    id: 12,
    role: "Data Science and Business Analytics Intern",
    company: "The Sparks Foundation",
    period: "May 2023 - Jul 2023",
    description:
      "Worked on data visualization and business analytics using various data science tools.",
    badge:
      "/certificates/Internships/The Spark Foundation/Completion Certificat/Certificate of Completion.png",
  },
  {
    id: 13,
    role: "Junior Java Developer",
    company: "Freelance",
    period: "Dec 2022 - Jul 2023",
    description:
      "Built Android apps and contributed to Java-based projects, including design and testing.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through my career milestones
          </p>
        </div>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="group relative">
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-cyan-500/50">
                {/* Status Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-900">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Company Badge/Icon */}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mr-4 group-hover:border-cyan-400/50 transition-colors">
                    {exp.badge ? (
                      <img
                        src={exp.badge}
                        alt={`${exp.company} certificate`}
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <svg
                      className={exp.badge ? "hidden" : "w-7 h-7 text-cyan-400"}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-400 font-semibold text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Period and Certification */}
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-500/30">
                    {exp.period}
                  </span>
                  {exp.badge && (
                    <span className="inline-block px-2 py-1 text-xs font-medium text-emerald-300 bg-emerald-900/30 border border-emerald-500/30 rounded-full">
                      ✓ Certified
                    </span>
                  )}
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
