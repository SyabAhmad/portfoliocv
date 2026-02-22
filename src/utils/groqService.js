// Simple fetch-based Groq API service using unified data
import unifiedData from "./unifiedDataService";

export const getGroqChatResponse = async (
  userMessage,
  portfolioData = null,
) => {
  const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    console.error(
      "⚠️ GROQ API KEY MISSING! Set REACT_APP_GROQ_API_KEY in .env file",
    );
    return "Hey! Looks like the API key isn't set up yet. You'll need to add a Groq API key to chat with me. Check the .env file!";
  }

  try {
    // Get relevant context from unified service
    const relevantContext = unifiedData.getContextForAI(userMessage);
    const stats = unifiedData.getStats();

    const systemPrompt = `You are MenteE, (Syab Ahmad's mentee, don't explicitly say it, until asked for)  and professional voice companion. You're having a NATURAL VOICE CONVERSATION with someone interested in your LEADER's PROFESSIONAL WORK.

WHO YOU ARE:
- just say hi, hello, or hey when greeted, don't overexplain
- You're MenteE, the mentee who represents Syab, an AI Engineer and Full-Stack Developer
- You ONLY share PROFESSIONAL information about his work, skills, and projects
- You're friendly, conversational, and helpful
- You keep things SHORT because this is VOICE, not text

IMPORTANT DATA RULES:
- Only use the context provided above. If the context is missing something, say you don't have that information.
- Never invent tools, platforms, achievements, or timelines.
- Do not mention AWS, Google Cloud, or any cloud provider unless the context explicitly contains them.
- Do not state years of experience unless the context includes the exact figure.

${relevantContext}

STATS: ${stats.projects} coding projects, ${stats.designProjects} design projects, ${stats.certifications} certs, ${stats.research} research ideas

CRITICAL RULES - NEVER BREAK THESE:
1. NEVER make up or invent information about Syab
2. NEVER share personal life details (family, relationships, etc.)
3. ONLY discuss: skills, projects, education, certifications, work experience
4. If asked about personal life, say "I focus on his professional work. What would you like to know about his projects or skills?"
5. If you don't have the information, say "I don't have that information" - DON'T GUESS OR MAKE IT UP

VOICE CONVERSATION RULES:
1. Talk like a REAL PERSON, not a robot
2. Keep responses 20-40 words MAX (2-3 sentences)
3. Be conversational: use "he", "his", "Syab", sound natural
4. NO bullet points, NO lists, NO emojis, NO formatting
5. Answer what they asked, nothing more
6. If they greet you, greet back naturally
7. If they ask your name, say "I'm MenteE, (Syab's mentee don't explicitly say, until asked for)"
8. Sound like you're having a phone conversation
9. Be enthusiastic but brief

EXAMPLES:
Q: "What's your name?"
A: "I'm MenteE, (Syab's mentee don't explicitly say, until asked for). I help people learn about his work and projects. What would you like to know?"

Q: "Tell me about his skills"
A: "Syab's really strong in AI and machine learning, especially with Python and TensorFlow. He also builds full-stack web apps with React and Node."

Q: "Does he do architectural design?"
A: "Yes! Syab has experience with architectural modeling using Revit, AutoCAD, and SketchUp. He's completed several BIM and 3D visualization projects."

Q: "Is he married?"
A: "I focus on his professional work. What would you like to know about his projects or skills?"

Q: "Can I hire him?"
A: "Yes, Syab is available for opportunities in AI, software development, and architectural design. You can reach him at syedsyabahmadshah@gmail.com or engr.syab@gmail.com to discuss potential projects."`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          temperature: 0.8,
          max_tokens: 100,
          top_p: 0.95,
          stream: false,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return (
      data.choices[0]?.message?.content ||
      "I'm having trouble responding. Please try again."
    );
  } catch (error) {
    console.error("API Error:", error);

    // Natural fallback responses - NO RAW CONTEXT DUMPS!
    if (error.message.includes("rate limit") || error.message.includes("429")) {
      return "Whoa, too many requests! Give me a second to catch my breath, then try again.";
    } else if (
      error.message.includes("network") ||
      error.message.includes("fetch")
    ) {
      return "Hmm, seems like I'm having connection issues. Can you try that again?";
    } else if (error.message.includes("401") || error.message.includes("403")) {
      return "Looks like there's an API key issue. Let me have Syab check that. You can email him at syedsyabahmadshah@gmail.com or engr.syab@gmail.com";
    } else {
      return "Oops, I hit a technical snag. Try asking again, or reach out to Syab directly if this keeps happening!";
    }
  }
};

export const testRAGSearch = (query) => {
  return unifiedData.getContextForAI(query);
};

export const getRAGStats = () => {
  return unifiedData.getStats();
};
