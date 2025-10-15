import researchIdeas from '../data/researchData';
import recommendations from '../data/recommendationsData';
import certifications from '../data/certificationsData';
import { designSkills, designProjects } from '../data/designData';

class RAGService {
  constructor() {
    this.knowledgeBase = this.buildKnowledgeBase();
    this.searchIndex = this.buildSearchIndex();
  }

  // Build knowledge base from your existing JSON files
  buildKnowledgeBase() {
    return {
      personal: {
        name: "Syed Syab Ahmad",
        title: "AI Engineer & Full-Stack Developer | Architectural Designer",
        location: "University of Swat, Pakistan",
        email: "syedsyabahmadshah@gmail.com",
        website: "https://syab.link",
        linkedin: "https://www.linkedin.com/in/syedsyab/",
        github: "https://github.com/syabahmad",
        bio: "Passionate AI Engineer and Full-Stack Developer with expertise in Machine Learning, Deep Learning, and modern web technologies.",
        tagline: "Building intelligent solutions that transform ideas into reality"
      },

      skills: {
        programming: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "R", "PHP"],
        aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
        web: ["React", "Next.js", "Vue.js", "Node.js", "Express.js", "HTML5", "CSS3", "TailwindCSS"],
        databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
        tools: ["Git", "GitHub", "VS Code", "Docker", "Linux", "Jupyter", "Figma", "Power BI"],
        cloud: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
        design: ["Revit", "AutoCAD", "SketchUp", "ArchiCAD", "Rhino", "3ds Max", "BIM", "Architectural Design", "3D Modeling", "Technical Drafting"]
      },

      designSkills: {
        revit: {
          name: "Revit",
          level: "Intermediate",
          description: "Building Information Modeling (BIM) for architectural design, 3D modeling, family creation, and construction documentation"
        },
        autocad: {
          name: "AutoCAD",
          level: "Advanced",
          description: "Precision 2D drafting, floor plans, sections, elevations, and technical drawings"
        },
        sketchup: {
          name: "SketchUp",
          level: "Intermediate",
          description: "Quick 3D modeling and visualization for conceptual design, rendering, and site planning"
        }
      },

      designProjects: designProjects.slice(0, 6).map(project => ({
        title: project.title,
        category: project.category,
        software: project.software,
        description: project.description,
        date: project.date
      })),

      projects: [
        {
          title: "PodcastMaker",
          category: "Generative AI",
          description: "Created a generative AI application that transforms written scenarios into full podcast scripts and audio. Inspired by tools like NotebookLM.",
          technologies: ["Python", "OpenAI API", "gTTS/TTS", "Streamlit", "LLMs"],
          duration: "March 2025",
          status: "Completed"
        },
        {
          title: "CamWatch",
          category: "Computer Vision",
          description: "Developed an AI-powered school surveillance system using YOLOv8 for real-time weapon detection. Integrated SmolVLM-500 with LLaMA.cpp.",
          technologies: ["YOLOv8", "Python", "OpenCV", "SmolVLM-500", "LLaMA.cpp", "Flask", "MySQL"],
          duration: "April 2025",
          status: "Completed",
          githubUrl: "https://github.com/SyabAhmad/CamWatch"
        },
        {
          title: "CVChat",
          category: "NLP & AI",
          description: "Built an intelligent resume analysis platform using Django and NLP. Enables users to upload CVs and interact through chatbot interface.",
          technologies: ["Django", "Python", "PostgreSQL", "Sentence Transformers", "REST API"],
          duration: "May 2025",
          status: "Completed",
          githubUrl: "https://github.com/SyabAhmad/CvChat"
        }
      ],

      experience: [
        {
          role: "Student Ambassador",
          company: "BLACKBOX.AI",
          period: "Nov 2024 - Present",
          type: "current",
          description: "Represent BLACKBOX.AI as a Student Ambassador, fostering AI education and community engagement."
        },
        {
          role: "Python Developer",
          company: "Suvastu Tech",
          period: "Oct 2024 - Jan 2025",
          type: "recent",
          description: "Developed RAG system for e-commerce platform and designed custom ETL pipeline using Python."
        },
        {
          role: "Machine Learning Intern",
          company: "SkillBuild",
          period: "Aug 2024 - Sep 2024",
          type: "recent",
          description: "Contributed to ML projects involving Pandas, NumPy, Scikit-Learn, and Python."
        },
        {
          role: "Chief Operating Officer",
          company: "AI3",
          period: "Apr 2024 - Jul 2024",
          type: "leadership",
          description: "Oversaw operations and generative AI development, managing cross-functional teams."
        }
      ],

      research: researchIdeas, // Use your existing research data
      recommendations: recommendations, // Use your existing recommendations data
      certifications: certifications, // Use your existing certifications data

      achievements: {
        certifications: `${certifications.length}+ Professional Certifications`,
        research: `${researchIdeas.length}+ Research Ideas and Innovations`,
        projects: "15+ Completed Projects",
        experience: "24/7 Innovation and Development"
      },

      education: {
        institution: "University of Swat",
        field: "Computer Science & AI Engineering",
        status: "Currently pursuing",
        focus: ["Artificial Intelligence", "Machine Learning", "Software Development"]
      }
    };
  }

  // Build search index for quick lookup
  buildSearchIndex() {
    const index = new Map();
    
    // Index personal information
    this.addToIndex(index, 'personal', this.knowledgeBase.personal, ['name', 'title', 'bio', 'location', 'tagline']);
    
    // Index skills
    Object.entries(this.knowledgeBase.skills).forEach(([category, skills]) => {
      skills.forEach(skill => {
        this.addToIndex(index, 'skill', { name: skill, category, type: category });
      });
    });

    // Index design skills
    Object.entries(this.knowledgeBase.designSkills).forEach(([key, skill]) => {
      this.addToIndex(index, 'design-skill', skill, ['name', 'description', 'level']);
    });

    // Index design projects
    this.knowledgeBase.designProjects.forEach(project => {
      this.addToIndex(index, 'design-project', project, ['title', 'description', 'category', 'software']);
    });

    // Index projects
    this.knowledgeBase.projects.forEach(project => {
      this.addToIndex(index, 'project', project, ['title', 'description', 'category', 'technologies']);
    });

    // Index experience
    this.knowledgeBase.experience.forEach(exp => {
      this.addToIndex(index, 'experience', exp, ['role', 'company', 'description']);
    });

    // Index research from your data
    this.knowledgeBase.research.forEach(research => {
      this.addToIndex(index, 'research', research, ['title', 'description', 'domain', 'techniques']);
    });

    // Index certifications from your data
    this.knowledgeBase.certifications.forEach(cert => {
      this.addToIndex(index, 'certification', cert, ['title', 'issuer', 'skills']);
    });

    // Index recommendations from your data
    this.knowledgeBase.recommendations.forEach(rec => {
      this.addToIndex(index, 'recommendation', rec, ['recommender', 'designation', 'text']);
    });

    return index;
  }

  addToIndex(index, type, item, searchFields = []) {
    const keywords = [];
    
    searchFields.forEach(field => {
      if (item[field]) {
        if (Array.isArray(item[field])) {
          keywords.push(...item[field].map(v => v.toString().toLowerCase()));
        } else {
          keywords.push(...item[field].toString().toLowerCase().split(/\s+/));
        }
      }
    });

    keywords.forEach(keyword => {
      if (keyword.length > 2) { // Only index meaningful keywords
        if (!index.has(keyword)) {
          index.set(keyword, []);
        }
        index.get(keyword).push({ type, item, score: 1 });
      }
    });
  }

  // Enhanced search with better scoring
  search(query) {
    const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length > 2);
    const results = new Map();
    
    queryWords.forEach(word => {
      // Exact matches get higher score
      if (this.searchIndex.has(word)) {
        this.searchIndex.get(word).forEach(result => {
          const key = `${result.type}_${JSON.stringify(result.item)}`;
          results.set(key, { 
            ...result, 
            score: (results.get(key)?.score || 0) + 3 
          });
        });
      }
      
      // Partial matches get lower score
      for (const [keyword, items] of this.searchIndex) {
        if (keyword.includes(word) || word.includes(keyword)) {
          items.forEach(result => {
            const key = `${result.type}_${JSON.stringify(result.item)}`;
            results.set(key, { 
              ...result, 
              score: (results.get(key)?.score || 0) + 1 
            });
          });
        }
      }
    });

    return Array.from(results.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 15); // Return top 15 results
  }

  // Get relevant context for AI
  getRelevantContext(query) {
    const searchResults = this.search(query);
    let context = "Here's relevant information from Syab's portfolio:\n\n";

    const groupedResults = {};
    searchResults.forEach(result => {
      if (!groupedResults[result.type]) {
        groupedResults[result.type] = [];
      }
      groupedResults[result.type].push(result.item);
    });

    // Personal info
    if (groupedResults.personal) {
      const personal = groupedResults.personal[0];
      context += `PERSONAL: ${personal.name} - ${personal.title} based in ${personal.location}. ${personal.bio}\n\n`;
    }

    // Skills
    if (groupedResults.skill) {
      const skills = [...new Set(groupedResults.skill.slice(0, 8).map(s => s.name))];
      context += `RELEVANT SKILLS: ${skills.join(', ')}\n\n`;
    }

    // Design Skills
    if (groupedResults['design-skill']) {
      const designSkills = groupedResults['design-skill'].slice(0, 3);
      context += `DESIGN & MODELING SKILLS:\n`;
      designSkills.forEach(skill => {
        context += `• ${skill.name} (${skill.level}): ${skill.description}\n`;
      });
      context += '\n';
    }

    // Design Projects
    if (groupedResults['design-project']) {
      const designProjects = groupedResults['design-project'].slice(0, 3);
      context += `DESIGN PROJECTS:\n`;
      designProjects.forEach(project => {
        context += `• ${project.title}: ${project.description}\n  Software: ${project.software.join(', ')}\n`;
      });
      context += '\n';
    }

    // Projects
    if (groupedResults.project) {
      const projects = groupedResults.project.slice(0, 3);
      context += `RELEVANT PROJECTS:\n`;
      projects.forEach(project => {
        context += `• ${project.title} (${project.category}): ${project.description}\n  Tech: ${project.technologies.join(', ')}\n`;
      });
      context += '\n';
    }

    // Experience
    if (groupedResults.experience) {
      const experiences = groupedResults.experience.slice(0, 3);
      context += `RELEVANT EXPERIENCE:\n`;
      experiences.forEach(exp => {
        context += `• ${exp.role} at ${exp.company} (${exp.period}): ${exp.description}\n`;
      });
      context += '\n';
    }

    // Research
    if (groupedResults.research) {
      const research = groupedResults.research.slice(0, 2);
      context += `RELEVANT RESEARCH:\n`;
      research.forEach(r => {
        context += `• ${r.title} (${r.domain}): ${r.description}\n  Techniques: ${r.techniques.join(', ')}\n`;
      });
      context += '\n';
    }

    // Certifications
    if (groupedResults.certification) {
      const certs = groupedResults.certification.slice(0, 3);
      context += `RELEVANT CERTIFICATIONS:\n`;
      certs.forEach(cert => {
        context += `• ${cert.title} - ${cert.issuer} (${cert.issuedDate})\n`;
      });
      context += '\n';
    }

    // Recommendations
    if (groupedResults.recommendation) {
      const recs = groupedResults.recommendation.slice(0, 2);
      context += `RECOMMENDATIONS:\n`;
      recs.forEach(rec => {
        context += `• From ${rec.recommender} (${rec.designation}): "${rec.text.substring(0, 150)}..."\n`;
      });
      context += '\n';
    }

    return context;
  }

  // Quick answers for common queries - REMOVED, let AI handle everything!
  getQuickAnswer(query) {
    // NO MORE PRE-MADE ANSWERS
    // Let Groq AI generate natural, dynamic responses for everything
    return { hasQuickAnswer: false };
  }

  // Get statistics
  getStats() {
    return {
      certifications: this.knowledgeBase.certifications.length,
      research: this.knowledgeBase.research.length,
      projects: this.knowledgeBase.projects.length,
      designProjects: this.knowledgeBase.designProjects.length,
      recommendations: this.knowledgeBase.recommendations.length,
      skills: Object.values(this.knowledgeBase.skills).flat().length
    };
  }
}

export default new RAGService();