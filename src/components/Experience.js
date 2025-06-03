import React from 'react';

const experienceData = [
  {
    id: 1,
    role: 'Student Ambassador',
    company: 'BLACKBOX.AI',
    period: 'Nov 2024 - Present',
    description: 'Represent BLACKBOX.AI as a Student Ambassador, fostering AI education, community engagement, and promoting innovative solutions.',
    logo: 'https://via.placeholder.com/50/000000/FFFFFF?text=BB'
  },
  {
    id: 2,
    role: 'Python Developer',
    company: 'Suvastu Tech',
    period: 'Oct 2024 - Jan 2025',
    description: 'Developed a Retrieval-Augmented Generation (RAG) system for an e-commerce platform, and designed a custom ETL pipeline using Python, enabling scalable data processes.',
    logo: 'https://via.placeholder.com/50/32CD32/FFFFFF?text=ST'
  },
  {
    id: 3,
    role: 'Machine Learning Intern',
    company: 'SkillBuild',
    period: 'Aug 2024 - Sep 2024',
    description: 'Contributed to ML projects involving Pandas, NumPy, Scikit-Learn, and Python. Enhanced model performance and deployed solutions remotely.',
    logo: 'https://via.placeholder.com/50/4682B4/FFFFFF?text=SB'
  },
  {
    id: 4,
    role: 'Chief Operating Officer',
    company: 'AI3',
    period: 'Apr 2024 - Jul 2024',
    description: 'Oversaw operations and generative AI development, managing projects and cross-functional teams to deliver cutting-edge AI solutions.',
    logo: 'https://via.placeholder.com/50/7B68EE/FFFFFF?text=AI3'
  },
  {
    id: 5,
    role: 'Software Engineer',
    company: 'AI3',
    period: 'Nov 2023 - Apr 2024',
    description: 'Built AI-driven applications including article generators, text-to-speech tools, and improved blog content with generative AI technologies.',
    logo: 'https://via.placeholder.com/50/7B68EE/FFFFFF?text=AI3'
  },
  {
    id: 6,
    role: 'Machine Learning Intern',
    company: 'InternCareer',
    period: 'Nov 2023 - Dec 2023',
    description: 'Worked remotely on ML tasks including data preprocessing, model building, and evaluation.',
    logo: 'https://via.placeholder.com/50/FF8C00/FFFFFF?text=IC'
  },
  {
    id: 7,
    role: 'Machine Learning Intern',
    company: 'CodeAlpha',
    period: 'Sep 2023 - Nov 2023',
    description: 'Implemented ML pipelines with Python and contributed to multiple AI projects.',
    logo: 'https://via.placeholder.com/50/9932CC/FFFFFF?text=CA'
  },
  {
    id: 8,
    role: 'Data Science Intern',
    company: 'CodSoft',
    period: 'Sep 2023 - Oct 2023',
    description: 'Worked on data analysis using Pandas, NumPy, and Linear Regression. Improved model accuracy with feature engineering.',
    logo: 'https://via.placeholder.com/50/FFD700/FFFFFF?text=CS'
  },
  {
    id: 9,
    role: 'Frontend Web Developer',
    company: 'Interns Pakistan',
    period: 'Aug 2023 - Sep 2023',
    description: 'Developed responsive front-end applications using HTML, CSS, and React.js.',
    logo: 'https://via.placeholder.com/50/00BFFF/FFFFFF?text=IP'
  },
  {
    id: 10,
    role: 'Web Developer',
    company: 'LetsGrowMore',
    period: 'Jul 2023 - Sep 2023',
    description: 'Contributed to web development projects using JavaScript, HTML, CSS, and React.js.',
    logo: 'https://via.placeholder.com/50/4B0082/FFFFFF?text=LGM'
  },
  {
    id: 11,
    role: 'Web Developer',
    company: 'iNeuron.ai',
    period: 'Jun 2023 - Aug 2023',
    description: 'Developed web applications with React.js, Tailwind CSS, and JavaScript.',
    logo: 'https://via.placeholder.com/50/FF4500/FFFFFF?text=iN'
  },
  {
    id: 12,
    role: 'Data Science and Business Analytics Intern',
    company: 'The Sparks Foundation',
    period: 'May 2023 - Jul 2023',
    description: 'Worked on data visualization and business analytics using various data science tools.',
    logo: 'https://via.placeholder.com/50/DAA520/FFFFFF?text=TSF'
  },
  {
    id: 13,
    role: 'Junior Java Developer',
    company: 'Freelance',
    period: 'Dec 2022 - Jul 2023',
    description: 'Built Android apps and contributed to Java-based projects, including design and testing.',
    logo: 'https://via.placeholder.com/50/2F4F4F/FFFFFF?text=FJ'
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen p-8 pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-16">
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute h-full border-l-4 border-cyan-500/30 left-1/2 transform -translate-x-1/2"></div>

          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } md:items-center w-full`}
            >
              <div className="hidden md:block w-1/2"></div>
              {/* Timeline dot */}
              <div className="hidden md:block relative">
                <div className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-slate-900 shadow-lg shadow-cyan-500/20"></div>
              </div>
              {/* Experience Card */}
              <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/50 md:mx-6">
                <div className="flex items-center mb-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 rounded-full mr-4 shadow-md border-2 border-cyan-500/30"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-cyan-400 mb-3 italic">{exp.period}</p>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
