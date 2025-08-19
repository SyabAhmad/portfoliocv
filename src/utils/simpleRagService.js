import basicContext from '../data/basicContext.json';

class SimpleRAGService {
  constructor() {
    this.context = basicContext;
  }

  getQuickAnswer(query) {
    const q = query.toLowerCase();
    
    // Only handle very specific contact requests
    if ((q.includes('contact') || q.includes('hire')) && (q.includes('email') || q.includes('reach'))) {
      return {
        hasAnswer: true,
        answer: `Sure! You can reach Syab at:\n📧 ${this.context.personal.email}\n🌐 ${this.context.personal.website}\n💼 LinkedIn: ${this.context.personal.linkedin}\n\nFeel free to connect!`
      };
    }

    // Let AI handle everything else
    return {
      hasAnswer: false,
      context: this.getContextForAI(query)
    };
  }

  getContextForAI(query) {
    const q = query.toLowerCase();
    let context = this._getBaseContext();
    
    // Add specialized context based on query
    if (q.includes('education') || q.includes('university') || q.includes('college') || q.includes('degree') || q.includes('study') || q.includes('graduate')) {
      context += this._getEducationContext();
    }
    
    if (q.includes('research') || q.includes('idea') || q.includes('publication')) {
      context += this._getResearchContext();
    }
    
    if (q.includes('recommend') || q.includes('reference') || q.includes('testimonial') || q.includes('endorsement')) {
      context += this._getRecommendationsContext();
    }
    
    if (q.includes('certification') || q.includes('certificate') || q.includes('credential')) {
      context += this._getCertificationsContext();
    }
    
    if (q.includes('project') || q.includes('portfolio') || q.includes('work')) {
      context += this._getProjectsContext();
    }

    if (q.includes('interesting') || q.includes('fun') || q.includes('unique') || q.includes('cool') || q.includes('fact')) {
      context += this._getInterestingStuff();
    }

    if (q.includes('cv') || q.includes('resume') || q.includes('download') || q.includes('download CV') || q.includes('CV link'))  {
      context += this._getCVLink();
    }

    return context;
  }
  
  _getBaseContext() {
    return `ABOUT SYAB:
${this.context.personal.name} is a ${this.context.personal.title} from ${this.context.personal.location}. ${this.context.personal.bio}

EDUCATION:
- BS in Software Engineering from University of Swat (2020-2024)
- Currently pursuing NEBOSH Certification in Occupational Health and Safety

SKILLS & EXPERTISE:
- Programming: ${this.context.skills.categories.programming.join(', ')}
- AI/ML: ${this.context.skills.categories.ai_ml.join(', ')}
- Web Development: ${this.context.skills.categories.web.join(', ')}
- Tools: ${this.context.skills.categories.tools.join(', ')}

EXPERIENCE:
Currently: ${this.context.experience.current}
Recent roles: ${this.context.experience.recent.join(', ')}
Highlights: ${this.context.experience.highlights.join(', ')}

ACHIEVEMENTS SUMMARY:
- ${this.context.achievements.certifications.count}+ certifications in various domains
- ${this.context.achievements.research_ideas.count}+ research ideas across multiple fields
- ${this.context.achievements.recommendations.count}+ professional recommendations
- ${this.context.achievements.notable.join(', ')}

INTERESTS: ${this.context.interests.join(', ')}`;
  }

  _getEducationContext() {
    return `\n\nDETAILED EDUCATION:
- Degree: ${this.context.education.degrees[0].degree}
- Institution: ${this.context.education.degrees[0].institution}
- Location: ${this.context.education.degrees[0].location}
- Duration: ${this.context.education.degrees[0].duration}
- Status: ${this.context.education.degrees[0].completed ? 'Completed' : 'Ongoing'}

ONGOING EDUCATION:
- Program: ${this.context.education.ongoing[0].program}
- Institution: ${this.context.education.ongoing[0].institution}
- Field: ${this.context.education.ongoing[0].field}
- Started: ${this.context.education.ongoing[0].started}

EDUCATIONAL HIGHLIGHTS:
- ${this.context.education.highlights.join('\n- ')}`;
  }

  _getInterestingStuff() {
    // Fixed method to correctly access the "interesting things" property
    return `\n\nINTERESTING FACTS:
- ${this.context.personal["interesting things"]}`;
  }

  _getResearchContext() {
    let researchContext = `\n\nRESEARCH IDEAS (focused on ${this.context.achievements.research_ideas.domains.join(', ')}):\n`;
    
    // Add featured research ideas
    this.context.achievements.research_ideas.featured.forEach(idea => {
      researchContext += `\n- ${idea.title} (${idea.domain}): Using ${idea.techniques.join(', ')}. Impact: ${idea.impact}`;
    });
    
    return researchContext;
  }

  _getRecommendationsContext() {
    let recommendationsContext = `\n\nPROFESSIONAL RECOMMENDATIONS:\n`;
    
    // Add notable recommendations
    this.context.achievements.recommendations.notable.forEach(rec => {
      recommendationsContext += `\n- ${rec.recommender} (${rec.designation}): "${rec.highlight}"`;
    });
    
    return recommendationsContext;
  }

  _getCertificationsContext() {
    let certContext = `\n\nCERTIFICATIONS:\n`;
    certContext += `AI/ML: ${this.context.achievements.certifications.categories.ai_ml.slice(0, 3).map(cert => cert.title).join(', ')}\n`;
    certContext += `Programming: ${this.context.achievements.certifications.categories.programming.slice(0, 3).map(cert => cert.title).join(', ')}\n`;
    certContext += `Recent: ${this.context.achievements.certifications.recent.map(cert => cert.title).join(', ')}`;
    
    return certContext;
  }

  _getProjectsContext() {
    let projectsContext = `\n\nFEATURED PROJECTS:\n`;
    
    this.context.projects.featured.forEach(project => {
      projectsContext += `\n- ${project.name}: ${project.description}. Built with ${project.tech}`;
    });
    
    return projectsContext;
  }

  _getCVLink(){
    return this.context.personal["cv link"];
  }

  getStats() {
    return {
      education: {
        degree: "BS in Software Engineering",
        institution: "University of Swat",
        ongoing: "NEBOSH Certification"
      },
      certifications: this.context.achievements.certifications.count,
      research_ideas: this.context.achievements.research_ideas.count,
      recommendations: this.context.achievements.recommendations.count,
      notable: this.context.achievements.notable
    };
  }
}

export default new SimpleRAGService();