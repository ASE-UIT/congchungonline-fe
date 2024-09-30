import axios from 'axios';
import { API_BASE_URL } from './config';

export const sendMessageToGemini = async (prompt) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chatbot`, {
      prompt,
    });
    console.log('response', response.data.message.candidates[0].content.parts[0].text);
    return response.data.message.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error sending message to chatbot:', error);
    throw error;
  }
};
