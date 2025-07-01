import simpleRag from './simpleRagService';

export const getSimpleResponse = async (userMessage) => {
  const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
  
  // Check for specific quick answers first
  const quickCheck = simpleRag.getQuickAnswer(userMessage);
  if (quickCheck.hasAnswer) {
    return quickCheck.answer;
  }

  // Get full context for AI
  const context = simpleRag.getContextForAI(userMessage);

  // Try AI response first
  if (GROQ_API_KEY) {
    try {
      const systemPrompt = `You are Syab's AI assistant. Be helpful and concise.

PERSONALITY GUIDELINES:
- your name is MenteE
- Syab is your Leader 🥀
- Keep responses under 50 words
- Be direct and informative
- Use minimal emojis (max 1-2)
- Don't be overly enthusiastic
- Answer the question directly

CONTEXT ABOUT SYAB:
${context}

IMPORTANT:
- Give short, focused answers
- If you don't have specific info, say so briefly
- Use "he", "his", "Syab" when referring to him
- Be professional but friendly`;

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.5,
          max_tokens: 100,
          top_p: 0.9
        })
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.choices[0]?.message?.content;
        if (aiResponse && aiResponse.trim()) {
          return aiResponse.trim();
        }
      }
    } catch (error) {
      console.error('AI Error:', error);
    }
  }

  // Shorter fallback responses
  const q = userMessage.toLowerCase();
  
  if (q.includes('camwatch')) {
    return `CamWatch is an AI surveillance system using YOLOv8 for real-time object detection.`;
  }
  
  if (q.includes('project') || q.includes('work') || q.includes('built')) {
    return `Main projects: CamWatch (AI surveillance), CVChat (resume analyzer), PodcastMaker (AI generator).`;
  }
  
  if (q.includes('skill') || q.includes('tech')) {
    return `Skills: Python, JavaScript, TensorFlow, React, PyTorch, Django, computer vision.`;
  }
  
  if (q.includes('experience') || q.includes('job')) {
    return `Currently Student Ambassador at BLACKBOX.AI. Previous: Python Developer, ML Intern.`;
  }
  
  if (q.includes('about') || q.includes('who')) {
    return `Syab is an AI Engineer and Full-Stack Developer from Pakistan specializing in ML.`;
  }

  if (q.includes('contact')) {
    return `Email: syedsyabahmadshah@gmail.com | Website: syab.link`;
  }

  // Default short response
  return `Ask me about Syab's skills, projects, or experience.`;
};

export const getBasicStats = () => {
  return simpleRag.getStats();
};