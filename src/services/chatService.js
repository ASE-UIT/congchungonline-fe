import axios from "axios";

export const sendMessageToGemini = async (prompt) => {
    try {
        const response = await axios.post("http://localhost:3100/v1/chatbot", {
            prompt,
        });
        console.log(
            "response",
            response.data.message.candidates[0].content.parts[0].text
        );
        return response.data.message.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Error sending message to chatbot:", error);
        throw error;
    }
};
