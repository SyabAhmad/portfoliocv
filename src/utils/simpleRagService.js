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
        answer: `Sure! You can reach Syab at:\n📧 ${this.context.personal.email}\n🌐 ${this.context.personal.website}\n💼 LinkedIn: ${this.context.personal.linkedin}\n\nFeel free to connect! 😊`
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
    
    // Build comprehensive context
    let context = `ABOUT SYAB:
${this.context.personal.name} is a ${this.context.personal.title} from ${this.context.personal.location}. ${this.context.personal.bio}

SKILLS & EXPERTISE:
- Programming: ${this.context.skills.categories.programming.join(', ')}
- AI/ML: ${this.context.skills.categories.ai_ml.join(', ')}
- Web Development: ${this.context.skills.categories.web.join(', ')}
- Tools: ${this.context.skills.categories.tools.join(', ')}

FEATURED PROJECTS:`;
    
    this.context.projects.featured.forEach(project => {
      context += `\n- ${project.name}: ${project.description}. Built with ${project.tech}`;
    });

    context += `\n\nEXPERIENCE:
Currently: ${this.context.experience.current}
Recent roles: ${this.context.experience.recent.join(', ')}
Highlights: ${this.context.experience.highlights.join(', ')}

ACHIEVEMENTS:
- ${this.context.achievements.certifications}+ certifications
- ${this.context.achievements.research_ideas}+ research ideas
- ${this.context.achievements.recommendations}+ recommendations
- ${this.context.achievements.notable.join(', ')}

INTERESTS: ${this.context.interests.join(', ')}`;

    return context;
  }

  getStats() {
    return this.context.achievements;
  }
}

export default new SimpleRAGService();