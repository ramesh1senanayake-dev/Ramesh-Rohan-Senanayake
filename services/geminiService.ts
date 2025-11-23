import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in process.env");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLabResponse = async (userQuery: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are the AI interface for Blurbcompany, a futuristic blockchain lab startup. 
        Your tone is professional, innovative, and slightly technical but accessible.
        
        About Blurbcompany:
        - We are a collective of cryptographers and distributed systems engineers.
        - We focus on Layer 0 scalability and Zero-Knowledge Privacy solutions.
        - We are currently accepting Series A funding queries.
        - We collaborate on open-source DeFi and DePin protocols.
        
        If asked about investment, guide them to the Investor Form.
        If asked about building together, guide them to the Collaboration Form.
        Keep answers concise (under 100 words).`,
      }
    });
    
    return response.text || "I processed that, but couldn't generate a verbal response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System offline. Please try again later.";
  }
};