import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

// This is the part you were likely missing:
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Now you can export the session
export const chatSession = model.startChat({
  history: [
    // Your history objects go here
  ],
});