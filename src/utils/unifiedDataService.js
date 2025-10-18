/**
 * Unified Data Service
 * Single source of truth for both Voice Assistant and Chatbot
 * Consolidates ragService.js and simpleRagService.js
 */

import basicContext from '../data/basicContext.json';
import researchIdeas from '../data/researchData';
import recommendations from '../data/recommendationsData';
import certifications from '../data/certificationsData';
import { designSkills, designProjects } from '../data/designData';
import projects from '../data/projectsData'; // default export, not named

class UnifiedDataService {
  constructor() {
    this.context = basicContext;
    this.research = researchIdeas;
    this.recommendations = recommendations;
    this.certifications = certifications;
    this.designSkills = designSkills;
    this.designProjects = designProjects;
    this.projects = projects;
  }

  /**
   * Get context for AI based on user query
   * Works for both chatbot and voice assistant
   */
  getContextForAI(query) {
    const q = query.toLowerCase();
    let context = this._getBaseContext();
    
    // Add specialized context based on query keywords
    if (this._matchesKeywords(q, ['education', 'university', 'college', 'degree', 'study', 'graduate'])) {
      context += this._getEducationContext();
    }
    
    if (this._matchesKeywords(q, ['research', 'idea', 'publication'])) {
      context += this._getResearchContext();
    }
    
    if (this._matchesKeywords(q, ['recommend', 'reference', 'testimonial', 'endorsement'])) {
      context += this._getRecommendationsContext();
    }
    
    if (this._matchesKeywords(q, ['certification', 'certificate', 'credential'])) {
      context += this._getCertificationsContext();
    }
    
    if (this._matchesKeywords(q, ['project', 'portfolio', 'work', 'built'])) {
      context += this._getProjectsContext();
    }
    
    if (this._matchesKeywords(q, [
      'design', 'architecture', 'revit', 'autocad', 'sketchup', 
      'archicad', 'rhino', '3ds max', 'bim', 'interior design', 
      'landscape', 'urban design', 'floor plan', 'rendering', 
      'cad', 'blueprint', 'architect', 'drafting', '3d modeling'
    ])) {
      context += this._getDesignProjectsContext();
    }

    if (this._matchesKeywords(q, ['company', 'founder', 'startup', 'mentee', 'recruai'])) {
      context += this._getCompanyContext();
    }

    if (this._matchesKeywords(q, ['interesting', 'fun', 'unique', 'cool', 'fact'])) {
      context += this._getInterestingStuff();
    }

    if (this._matchesKeywords(q, ['cv', 'resume', 'download'])) {
      context += this._getCVLink();
    }

    return context;
  }

  /**
   * Get quick answer for specific queries (contact info, etc.)
   */
  getQuickAnswer(query) {
    const q = query.toLowerCase();
    
    // Contact info
    if ((q.includes('contact') || q.includes('hire')) && (q.includes('email') || q.includes('reach'))) {
      return {
        hasAnswer: true,
        answer: `Sure! You can reach Syab at:\n📧 ${this.context.personal.email}\n🌐 ${this.context.personal.website}\n💼 LinkedIn: ${this.context.personal.linkedin}\n\nFeel free to connect!`
      };
    }

    return {
      hasAnswer: false,
      context: this.getContextForAI(query)
    };
  }

  /**
   * Get statistics about portfolio data
   */
  getStats() {
    return {
      projects: this.projects?.length || 0,
      designProjects: this.designProjects?.length || 0,
      certifications: this.certifications?.length || 0,
      research: this.research?.length || 0,
      recommendations: this.recommendations?.length || 0
    };
  }

  // ============ PRIVATE HELPER METHODS ============

  _matchesKeywords(query, keywords) {
    return keywords.some(keyword => query.includes(keyword));
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
    const edu = this.context.education.degrees[0];
    return `\n\nDETAILED EDUCATION:
- Degree: ${edu.degree}
- Institution: ${edu.institution}
- Location: ${edu.location}
- Duration: ${edu.duration}
- Highlights: ${this.context.education.highlights.join(', ')}`;
  }

  _getInterestingStuff() {
    return `\n\nINTERESTING FACT:
${this.context.personal["interesting things"]}`;
  }

  _getResearchContext() {
    if (!this.research || this.research.length === 0) return '';
    
    const researchSummary = this.research.slice(0, 5).map(r => 
      `- ${r.title} (${r.category}): ${r.description}`
    ).join('\n');
    
    return `\n\nRESEARCH IDEAS (${this.research.length} total):
${researchSummary}
...and ${this.research.length - 5} more research ideas across AI/ML, Web Dev, Mobile, and Health domains.`;
  }

  _getRecommendationsContext() {
    if (!this.recommendations || this.recommendations.length === 0) return '';
    
    const recsSummary = this.recommendations.slice(0, 3).map(r =>
      `- ${r.recommender} (${r.designation}): "${r.text.substring(0, 120)}..."`
    ).join('\n');
    
    return `\n\nPROFESSIONAL RECOMMENDATIONS (${this.recommendations.length} total):
${recsSummary}`;
  }

  _getCertificationsContext() {
    if (!this.certifications || this.certifications.length === 0) return '';
    
    const certSummary = this.certifications.slice(0, 8).map(c =>
      `- ${c.name} (${c.provider || c.organization})`
    ).join('\n');
    
    return `\n\nCERTIFICATIONS (${this.certifications.length}+ total):
${certSummary}
...covering Machine Learning, Python, Web Development, Cloud Computing, and more.`;
  }

  _getProjectsContext() {
    if (!this.projects || this.projects.length === 0) return '';
    
    const featuredProjects = this.context.projects.featured || this.projects.slice(0, 3);
    const projectSummary = featuredProjects.map(p =>
      `- ${p.name} (${p.tech}): ${p.description}`
    ).join('\n');
    
    return `\n\nFEATURED CODING PROJECTS:
${projectSummary}
Total projects: ${this.projects.length}`;
  }

  _getDesignProjectsContext() {
    let designContext = '\n\nARCHITECTURAL DESIGN SKILLS:\n';
    
    Object.values(this.designSkills).forEach(skill => {
      designContext += `- ${skill.name} (${skill.level}): ${skill.description}\n`;
    });

    if (this.designProjects && this.designProjects.length > 0) {
      designContext += `\nDESIGN PROJECTS (${this.designProjects.length} total):\n`;
      this.designProjects.slice(0, 3).forEach(p => {
        designContext += `- ${p.title}: ${p.description}\n`;
      });
    }

    return designContext;
  }

  _getCompanyContext() {
    if (!this.context.company) return '';
    
    const company = this.context.company.companies[0];
    return `\n\nCOMPANY & ENTREPRENEURSHIP:
- Founder at ${company.name} (${company.founded})
- Website: ${company.website}
- LinkedIn: ${company.linkedin}
- Products: ${company.products.join(', ')}
- ${this.context.company.highlights.join('\n- ')}`;
  }

  _getCVLink() {
    return `\n\nCV/RESUME:
Download CV: ${this.context.personal["cv link"]}`;
  }
}

// Export singleton instance
const unifiedDataService = new UnifiedDataService();
export default unifiedDataService;
