
import { GoogleGenAI } from "@google/genai";
import { AISearchResponse } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

/**
 * Gets a quick fact about a topic using Google Search grounding.
 */
export const getAIFact = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Proporciona un dato histórico fascinante y corto (máximo 2 párrafos) sobre este tema de los mundiales de fútbol: ${topic}. Asegúrate de que sea inspirador y preciso.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return response.text || 'No se pudo obtener la información en este momento.';
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocurrió un error al consultar a la IA sobre este dato.";
  }
};

/**
 * Performs a deep search for World Cup statistics and history using Google Search grounding.
 */
export const searchWorldCupData = async (query: string): Promise<AISearchResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Actúa como un experto historiador y analista de datos de la Copa Mundial de la FIFA. Responde a la siguiente consulta con datos precisos, estadísticas detalladas y contexto histórico: "${query}". Si es posible, presenta los datos de forma estructurada.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || 'No se encontraron resultados específicos.';
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      text,
      sources,
    };
  } catch (error) {
    console.error("Deep Search Error:", error);
    throw error;
  }
};
