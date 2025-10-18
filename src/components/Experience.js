import React from 'react';

const experienceData = [
  {
    id: 0,
    role: 'Full Stack Web Developer & ML/AI Engineer',
    company: 'Freelance',
    period: 'Nov 2023 - Present',
    description: 'Building Next GEN AI, working for clients on web development and AI projects using modern technologies.'
  },
  {
    id: 1,
    role: 'Student Ambassador',
    company: 'BLACKBOX.AI',
    period: 'Nov 2024 - Present',
    description: 'Represent BLACKBOX.AI as a Student Ambassador, fostering AI education, community engagement, and promoting innovative solutions.'
  },
  {
    id: 2,
    role: 'Python Developer',
    company: 'Suvastu Tech',
    period: 'Oct 2024 - Jan 2025',
    description: 'Developed a Retrieval-Augmented Generation (RAG) system for an e-commerce platform, and designed a custom ETL pipeline using Python, enabling scalable data processes.'
  },
  {
    id: 3,
    role: 'Machine Learning Intern',
    company: 'SkillBuild',
    period: 'Aug 2024 - Sep 2024',
    description: 'Contributed to ML projects involving Pandas, NumPy, Scikit-Learn, and Python. Enhanced model performance and deployed solutions remotely.'
  },
  {
    id: 4,
    role: 'Chief Operating Officer',
    company: 'AI3',
    period: 'Apr 2024 - Jul 2024',
    description: 'Oversaw operations and generative AI development, managing projects and cross-functional teams to deliver cutting-edge AI solutions.'
  },
  {
    id: 5,
    role: 'Software Engineer',
    company: 'AI3',
    period: 'Nov 2023 - Apr 2024',
    description: 'Built AI-driven applications including article generators, text-to-speech tools, and improved blog content with generative AI technologies.'
  },
  {
    id: 6,
    role: 'Machine Learning Intern',
    company: 'InternCareer',
    period: 'Nov 2023 - Dec 2023',
    description: 'Worked remotely on ML tasks including data preprocessing, model building, and evaluation.'
  },
  {
    id: 7,
    role: 'Machine Learning Intern',
    company: 'CodeAlpha',
    period: 'Sep 2023 - Nov 2023',
    description: 'Implemented ML pipelines with Python and contributed to multiple AI projects.',
    badge: '/certificates/Internships/CodeAlpha/Offer Letter/offer letter code alpha.jpg'
  },
  {
    id: 8,
    role: 'Data Science Intern',
    company: 'CodSoft',
    period: 'Sep 2023 - Oct 2023',
    description: 'Worked on data analysis using Pandas, NumPy, and Linear Regression. Improved model accuracy with feature engineering.',
    badge: '/certificates/Internships/CodSoft/Completion Certificate/Certificate.png'
  },
  {
    id: 9,
    role: 'Frontend Web Developer',
    company: 'Interns Pakistan',
    period: 'Aug 2023 - Sep 2023',
    description: 'Developed responsive front-end applications using HTML, CSS, and React.js.',
    badge: '/certificates/Internships/Interns.pk/Certificate (5) conv 1.png'
  },
  {
    id: 10,
    role: 'Web Developer',
    company: 'LetsGrowMore',
    period: 'Jul 2023 - Sep 2023',
    description: 'Contributed to web development projects using JavaScript, HTML, CSS, and React.js.',
    badge: '/certificates/Internships/Lets Grow More/Syed Syab Ahmad Shah (2) conv 1.png'
  },
  {
    id: 11,
    role: 'Web Developer',
    company: 'iNeuron.ai',
    period: 'Jun 2023 - Aug 2023',
    description: 'Developed web applications with React.js, Tailwind CSS, and JavaScript.',
    badge: '/certificates/Internships/iNeuron/Completion Certificate conv 1.png'
  },
  {
    id: 12,
    role: 'Data Science and Business Analytics Intern',
    company: 'The Sparks Foundation',
    period: 'May 2023 - Jul 2023',
    description: 'Worked on data visualization and business analytics using various data science tools.',
    badge: '/certificates/Internships/The Spark Foundation/Completion Certificat/Certificate of Completion.png'
  },
  {
    id: 13,
    role: 'Junior Java Developer',
    company: 'Freelance',
    period: 'Dec 2022 - Jul 2023',
    description: 'Built Android apps and contributed to Java-based projects, including design and testing.'
  }
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

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 h-full"></div>

          {experienceData.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mr-4">
                      {exp.badge ? (
                        <img 
                          src={exp.badge} 
                          alt={`${exp.company} certificate`}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <svg className={exp.badge ? "hidden" : "w-6 h-6 text-cyan-400"} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-emerald-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/30 rounded-full">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="inline-block px-2 py-1 text-xs font-medium text-emerald-300 bg-emerald-900/30 border border-emerald-500/30 rounded-full">
                        ✓ Certified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;