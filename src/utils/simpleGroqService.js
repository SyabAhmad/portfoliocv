import unifiedData from "./unifiedDataService";

export const getSimpleResponse = async (userMessage) => {
  const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

  // Check for specific quick answers first
  const quickCheck = unifiedData.getQuickAnswer(userMessage);
  if (quickCheck.hasAnswer) {
    return quickCheck.answer;
  }

  // Get full context for AI
  const context = unifiedData.getContextForAI(userMessage);

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
- do not always greet, unless the user says hi, hello, salam, hola, etc.
- Be professional but friendly`;

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userMessage },
            ],
            temperature: 0.5,
            max_tokens: 200,
            top_p: 0.9,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.choices[0]?.message?.content;
        if (aiResponse && aiResponse.trim()) {
          return aiResponse.trim();
        }
      }
    } catch (error) {
      console.error("AI Error:", error);
    }
  }

  // Shorter fallback responses
  const q = userMessage.toLowerCase();

  if (q.includes("camwatch")) {
    return `CamWatch is an AI surveillance system using YOLOv8 for real-time object detection.`;
  }

  if (q.includes("project") || q.includes("work") || q.includes("built")) {
    return `Main projects: CamWatch (AI surveillance), CVChat (resume analyzer), PodcastMaker (AI generator).`;
  }

  if (q.includes("skill") || q.includes("tech")) {
    return `Skills: Python, JavaScript, TensorFlow, React, PyTorch, Django, computer vision.`;
  }

  if (q.includes("experience") || q.includes("job")) {
    return `Currently Student Ambassador at BLACKBOX.AI. Previous: Python Developer, ML Intern.`;
  }

  if (q.includes("about") || q.includes("who")) {
    return `Syab is an AI Engineer and Full-Stack Developer from Saudi Arabia specializing in ML.`;
  }

  if (q.includes("contact")) {
    return `Email: syedsyabahmadshah@gmail.com | Website: syab.tech`;
  }

  // Default short response
  return `Ask me about Syab's skills, projects, or experience.`;
};

export const getBasicStats = () => {
  return unifiedData.getStats();
};
