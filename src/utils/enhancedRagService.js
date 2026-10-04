/**
 * Enhanced RAG Service
 * Advanced retrieval with TF-IDF semantic search, fuzzy matching, and conversation memory
 * Extends unifiedDataService without breaking existing functionality
 */

import unifiedData from "./unifiedDataService";

// TF-IDF Vectorizer class for semantic search
class TFIDFVectorizer {
  constructor() {
    this.vocabulary = new Map();
    this.idf = new Map();
    this.documents = [];
    this.isTrained = false;
  }

  // Preprocess text for TF-IDF
  preprocess(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 2)
      .filter((word) => !this.isStopWord(word));
  }

  // Basic stop words
  isStopWord(word) {
    const stopWords = new Set([
      "the",
      "and",
      "or",
      "but",
      "in",
      "on",
      "at",
      "to",
      "for",
      "of",
      "with",
      "by",
      "an",
      "a",
      "is",
      "are",
      "was",
      "were",
      "be",
      "been",
      "being",
      "have",
      "has",
      "had",
      "do",
      "does",
      "did",
      "will",
      "would",
      "could",
      "should",
      "may",
      "might",
      "must",
      "can",
      "this",
      "that",
      "these",
      "those",
      "i",
      "you",
      "he",
      "she",
      "it",
      "we",
      "they",
      "me",
      "him",
      "her",
      "us",
      "them",
      "my",
      "your",
      "his",
      "its",
      "our",
      "their",
      "what",
      "which",
      "who",
      "when",
      "where",
      "why",
      "how",
    ]);
    return stopWords.has(word);
  }

  // Fit TF-IDF on documents
  fit(documents) {
    this.documents = documents;
    const docCount = documents.length;

    // Build vocabulary and document frequencies
    documents.forEach((doc, docIndex) => {
      const words = this.preprocess(doc);
      const wordCount = new Map();

      words.forEach((word) => {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
      });

      wordCount.forEach((count, word) => {
        if (!this.vocabulary.has(word)) {
          this.vocabulary.set(word, { df: 0, docs: [] });
        }
        const vocabEntry = this.vocabulary.get(word);
        vocabEntry.df += 1;
        vocabEntry.docs.push({ docIndex, tf: count });
      });
    });

    // Calculate IDF
    this.vocabulary.forEach((data, word) => {
      this.idf.set(word, Math.log(docCount / data.df));
    });

    this.isTrained = true;
  }

  // Transform query to TF-IDF vector
  transform(query) {
    if (!this.isTrained) return new Map();

    const words = this.preprocess(query);
    const vector = new Map();

    words.forEach((word) => {
      if (this.vocabulary.has(word)) {
        const tf = words.filter((w) => w === word).length;
        const idf = this.idf.get(word);
        vector.set(word, tf * idf);
      }
    });

    return vector;
  }

  // Calculate cosine similarity
  cosineSimilarity(vec1, vec2) {
    const commonWords = new Set([...vec1.keys(), ...vec2.keys()]);
    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;

    commonWords.forEach((word) => {
      const val1 = vec1.get(word) || 0;
      const val2 = vec2.get(word) || 0;
      dotProduct += val1 * val2;
      norm1 += val1 * val1;
      norm2 += val2 * val2;
    });

    if (norm1 === 0 || norm2 === 0) return 0;
    return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
  }
}

// Fuzzy string matching utility
class FuzzyMatcher {
  static levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  }

  static similarity(str1, str2) {
    const maxLen = Math.max(str1.length, str2.length);
    if (maxLen === 0) return 1;
    const distance = this.levenshteinDistance(
      str1.toLowerCase(),
      str2.toLowerCase()
    );
    return 1 - distance / maxLen;
  }

  static findBestMatches(query, candidates, threshold = 0.6) {
    return candidates
      .map((candidate) => ({
        text: candidate,
        score: this.similarity(query, candidate),
      }))
      .filter((match) => match.score >= threshold)
      .sort((a, b) => b.score - a.score);
  }
}

// Conversation memory manager (session-based)
class ConversationMemory {
  constructor() {
    this.storageKey = "menteE_session_memory";
    this.maxMessages = 50;
    this.sessionId = this.getSessionId();
    this.loadMemory();
  }

  getSessionId() {
    // Create or get session ID that lasts for browser session
    let sessionId = sessionStorage.getItem("menteE_session_id");
    if (!sessionId) {
      sessionId =
        Date.now().toString() + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem("menteE_session_id", sessionId);
    }
    return sessionId;
  }

  loadMemory() {
    try {
      const stored = sessionStorage.getItem(this.storageKey);
      this.messages = stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.warn("Failed to load conversation memory:", error);
      this.messages = [];
    }
  }

  saveMemory() {
    try {
      // Keep only recent messages
      if (this.messages.length > this.maxMessages) {
        this.messages = this.messages.slice(-this.maxMessages);
      }
      sessionStorage.setItem(this.storageKey, JSON.stringify(this.messages));
    } catch (error) {
      console.warn("Failed to save conversation memory:", error);
    }
  }

  addMessage(role, content, metadata = {}) {
    const message = {
      id: Date.now(),
      role,
      content,
      timestamp: new Date().toISOString(),
      ...metadata,
    };
    this.messages.push(message);
    this.saveMemory();
    return message;
  }

  getRecentContext(maxMessages = 10) {
    return this.messages.slice(-maxMessages);
  }

  getConversationSummary() {
    if (this.messages.length === 0) return "";

    const recent = this.getRecentContext(5);
    const topics = this.extractTopics(recent);
    return `Recent conversation topics: ${topics.join(", ")}. `;
  }

  extractTopics(messages) {
    const topics = new Set();
    const topicKeywords = {
      skills: ["skill", "programming", "python", "javascript", "ai", "ml"],
      projects: ["project", "work", "built", "portfolio", "app"],
      experience: ["experience", "job", "work", "career", "company"],
      education: ["education", "university", "degree", "study"],
      contact: ["contact", "email", "reach", "hire"],
    };

    messages.forEach((msg) => {
      const content = msg.content.toLowerCase();
      Object.entries(topicKeywords).forEach(([topic, keywords]) => {
        if (keywords.some((keyword) => content.includes(keyword))) {
          topics.add(topic);
        }
      });
    });

    return Array.from(topics);
  }

  clearMemory() {
    this.messages = [];
    this.saveMemory();
  }
}

// Query cache for performance
class QueryCache {
  constructor() {
    this.cache = new Map();
    this.maxSize = 100;
    this.ttl = 30 * 60 * 1000; // 30 minutes
  }

  get(key) {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() - entry.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  set(key, data) {
    if (this.cache.size >= this.maxSize) {
      // Remove oldest entry
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  clear() {
    this.cache.clear();
  }
}

// Enhanced RAG Service
class EnhancedRAGService {
  constructor() {
    this.vectorizer = new TFIDFVectorizer();
    this.fuzzyMatcher = FuzzyMatcher;
    this.memory = new ConversationMemory();
    this.cache = new QueryCache();
    this.contextChunks = [];
    this.isInitialized = false;
  }

  // Initialize the enhanced RAG system
  async initialize() {
    if (this.isInitialized) return;

    try {
      // Prepare documents for TF-IDF training
      const documents = this.prepareDocuments();
      this.vectorizer.fit(documents);

      // Create context chunks for better retrieval
      this.contextChunks = this.createContextChunks();

      this.isInitialized = true;
      console.log("✅ Enhanced RAG system initialized");
    } catch (error) {
      console.warn("⚠️ Failed to initialize enhanced RAG:", error);
      // Fall back to basic functionality
    }
  }

  // Prepare documents for TF-IDF training
  prepareDocuments() {
    const documents = [];

    // Add base context
    documents.push(unifiedData._getBaseContext());

    // Add specialized contexts
    documents.push(unifiedData._getEducationContext());
    documents.push(unifiedData._getResearchContext());
    documents.push(unifiedData._getRecommendationsContext());
    documents.push(unifiedData._getCertificationsContext());
    documents.push(unifiedData._getProjectsContext());
    documents.push(unifiedData._getDesignProjectsContext());
    documents.push(unifiedData._getCompanyContext());

    // Add individual project descriptions
    if (unifiedData.projects) {
      unifiedData.projects.forEach((project) => {
        documents.push(`${project.name}: ${project.description}`);
      });
    }

    // Add research ideas
    if (unifiedData.research) {
      unifiedData.research.forEach((research) => {
        documents.push(`${research.title}: ${research.description}`);
      });
    }

    return documents.filter((doc) => doc && doc.trim().length > 0);
  }

  // Create context chunks for retrieval
  createContextChunks() {
    const chunks = [];

    // Base information chunks
    chunks.push({
      id: "personal",
      content: unifiedData._getBaseContext(),
      type: "personal",
      keywords: ["syab", "ahmad", "personal", "bio", "background"],
    });

    chunks.push({
      id: "education",
      content: unifiedData._getEducationContext(),
      type: "education",
      keywords: ["education", "university", "degree", "study", "graduate"],
    });

    chunks.push({
      id: "research",
      content: unifiedData._getResearchContext(),
      type: "research",
      keywords: ["research", "idea", "publication", "innovation"],
    });

    chunks.push({
      id: "recommendations",
      content: unifiedData._getRecommendationsContext(),
      type: "recommendations",
      keywords: ["recommend", "reference", "testimonial", "endorsement"],
    });

    chunks.push({
      id: "certifications",
      content: unifiedData._getCertificationsContext(),
      type: "certifications",
      keywords: ["certification", "certificate", "credential", "course"],
    });

    chunks.push({
      id: "projects",
      content: unifiedData._getProjectsContext(),
      type: "projects",
      keywords: ["project", "portfolio", "work", "built", "application"],
    });

    chunks.push({
      id: "design",
      content: unifiedData._getDesignProjectsContext(),
      type: "design",
      keywords: ["design", "architecture", "revit", "autocad", "3d"],
    });

    chunks.push({
      id: "company",
      content: unifiedData._getCompanyContext(),
      type: "company",
      keywords: ["company", "founder", "startup", "mentee", "recruai"],
    });

    return chunks;
  }

  // Enhanced context retrieval with semantic search
  async getEnhancedContext(query, options = {}) {
    await this.initialize();

    // Check cache first
    const cacheKey = `context_${query}_${JSON.stringify(options)}`;
    const cached = this.cache.get(cacheKey);
    if (cached) return cached;

    let context = "";

    // Get conversation context
    const conversationContext = this.memory.getConversationSummary();
    if (conversationContext) {
      context += `CONVERSATION CONTEXT: ${conversationContext}\n\n`;
    }

    // Use enhanced retrieval if available
    if (this.isInitialized) {
      const relevantChunks = this.findRelevantChunks(query, options);
      relevantChunks.forEach((chunk) => {
        context += `${chunk.content}\n\n`;
      });
    } else {
      // Fall back to basic unified data service
      context += unifiedData.getContextForAI(query);
    }

    // Cache the result
    this.cache.set(cacheKey, context);
    return context;
  }

  // Find relevant context chunks using hybrid approach
  findRelevantChunks(query, options = {}) {
    const { maxChunks = 3, minScore = 0.1 } = options;
    const queryLower = query.toLowerCase();

    // Score chunks using multiple methods
    const scoredChunks = this.contextChunks.map((chunk) => {
      let score = 0;

      // Keyword matching (40% weight)
      const keywordMatches = chunk.keywords.filter((keyword) =>
        queryLower.includes(keyword)
      ).length;
      score += (keywordMatches / chunk.keywords.length) * 0.4;

      // Fuzzy matching on content (30% weight)
      const fuzzyMatches = this.fuzzyMatcher.findBestMatches(
        queryLower,
        chunk.content.split(" ").slice(0, 50), // Sample first 50 words
        0.7
      );
      score += (fuzzyMatches.length > 0 ? fuzzyMatches[0].score : 0) * 0.3;

      // TF-IDF semantic similarity (30% weight)
      if (this.vectorizer.isTrained) {
        const queryVector = this.vectorizer.transform(query);
        const chunkVector = this.vectorizer.transform(chunk.content);
        const semanticScore = this.vectorizer.cosineSimilarity(
          queryVector,
          chunkVector
        );
        score += semanticScore * 0.3;
      }

      return { ...chunk, score };
    });

    // Return top chunks above minimum score
    return scoredChunks
      .filter((chunk) => chunk.score >= minScore)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxChunks);
  }

  // Enhanced quick answer detection with strict validation
  getEnhancedQuickAnswer(query) {
    // First try the basic quick answer
    const basicAnswer = unifiedData.getQuickAnswer(query);
    if (basicAnswer.hasAnswer) {
      return basicAnswer;
    }

    // Enhanced pattern matching with strict validation
    const q = query.toLowerCase();

    // Contact information - validated
    if (
      (q.includes("contact") ||
        q.includes("hire") ||
        q.includes("reach") ||
        q.includes("email")) &&
      (q.includes("syab") || q.includes("you") || q.includes("him"))
    ) {
      return {
        hasAnswer: true,
        answer: `Sure! You can reach Syab at:\n📧 ${unifiedData.context.personal.email}\n🌐 ${unifiedData.context.personal.website}\n💼 LinkedIn: ${unifiedData.context.personal.linkedin}\n\nFeel free to connect!`,
      };
    }

    // CV/Resume requests - validated
    if (
      q.includes("cv") ||
      q.includes("resume") ||
      (q.includes("download") && q.includes("resume"))
    ) {
      return {
        hasAnswer: true,
        answer: `You can download Syab's CV here: ${unifiedData.context.personal["cv link"]}`,
      };
    }

    // Project-specific queries - STRICT validation against actual data
    if (
      q.includes("project") ||
      q.includes("worked on") ||
      q.includes("built")
    ) {
      // Check if asking about specific projects
      const projectNames =
        unifiedData.projects?.map((p) => p.title.toLowerCase()) || [];
      const mentionedProjects = projectNames.filter(
        (name) =>
          q.includes(name) ||
          name.includes(
            q.replace(/what.*about|tell.*about|project/i, "").trim()
          )
      );

      if (mentionedProjects.length > 0) {
        // Valid project mentioned - return from actual data
        const project = unifiedData.projects.find((p) =>
          mentionedProjects.includes(p.title.toLowerCase())
        );
        if (project) {
          return {
            hasAnswer: true,
            answer: `${project.title} is ${project.description.substring(
              0,
              100
            )}... Tech: ${project.techStack || project.techStack}`,
          };
        }
      } else if (
        q.includes("recent") ||
        q.includes("latest") ||
        q.includes("last")
      ) {
        // Recent projects - return actual recent ones
        const recentProjects = unifiedData.projects?.slice(0, 2) || [];
        if (recentProjects.length > 0) {
          return {
            hasAnswer: true,
            answer: `Recent projects include ${recentProjects
              .map((p) => p.title)
              .join(" and ")}. ${recentProjects[0].description.substring(
              0,
              80
            )}...`,
          };
        }
      } else {
        // General project question - list actual projects
        const projectCount = unifiedData.projects?.length || 0;
        const featured =
          unifiedData.projects
            ?.slice(0, 3)
            .map((p) => p.title)
            .join(", ") || "";
        return {
          hasAnswer: true,
          answer: `Syab has worked on ${projectCount} projects including ${featured}. What specific project interests you?`,
        };
      }
    }

    // Skills and job suitability queries - allow AI reasoning for preferences/suitability
    if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("tech") ||
      q.includes("experience") ||
      q.includes("prefer") ||
      q.includes("suitable") ||
      q.includes("good for") ||
      q.includes("developer") ||
      q.includes("job") ||
      q.includes("position") ||
      q.includes("backend") ||
      q.includes("python")
    ) {
      // Check if specific skills are mentioned
      const skills = unifiedData.context?.skills?.categories || {};
      const allSkills = Object.values(skills).flat();
      const mentionedSkills = allSkills.filter((skill) =>
        q.toLowerCase().includes(skill.toLowerCase())
      );

      // For Python/backend specifically - direct validation
      if (
        q.includes("python") &&
        (q.includes("backend") ||
          q.includes("developer") ||
          q.includes("prefer"))
      ) {
        return {
          hasAnswer: true,
          answer: `Yes, Syab is well-suited for Python backend development. He has extensive Python experience with frameworks like Django, Flask, and FastAPI, and has built multiple backend systems including Laboratory Management System and CakeBacker.`,
        };
      }

      // For general job/skill suitability or preferences - allow AI to reason
      if (
        mentionedSkills.length > 0 ||
        q.includes("python") ||
        q.includes("backend") ||
        q.includes("developer") ||
        q.includes("job") ||
        q.includes("prefer") ||
        q.includes("suitable") ||
        q.includes("experience")
      ) {
        // Let AI reason based on context for suitability/preference questions
        return {
          hasAnswer: false, // Let AI handle with full context
          context: this.getEnhancedContext(query),
        };
      }

      // General skills overview
      return {
        hasAnswer: true,
        answer: `Syab specializes in ${Object.keys(skills).join(
          ", "
        )}. His key technologies include Python, React, Node.js, and various AI/ML frameworks.`,
      };
    }

    return {
      hasAnswer: false,
      context: this.getEnhancedContext(query),
    };
  }

  // Add message to conversation memory
  addToMemory(role, content, metadata = {}) {
    return this.memory.addMessage(role, content, metadata);
  }

  // Get conversation context
  getConversationContext(maxMessages = 5) {
    return this.memory.getRecentContext(maxMessages);
  }

  // Clear conversation memory
  clearMemory() {
    this.memory.clearMemory();
    this.cache.clear();
  }

  // Get enhanced stats
  getEnhancedStats() {
    const basicStats = unifiedData.getStats();
    return {
      ...basicStats,
      conversationMessages: this.memory.messages.length,
      cacheSize: this.cache.cache.size,
      isEnhanced: this.isInitialized,
    };
  }
}

// Export singleton instance
const enhancedRAG = new EnhancedRAGService();
export default enhancedRAG;

// Export individual classes for testing
export { TFIDFVectorizer, FuzzyMatcher, ConversationMemory, QueryCache };
