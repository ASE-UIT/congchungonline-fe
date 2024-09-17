import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { sendMessageToGemini } from "../services/chatService";

const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [showChatbox, setShowChatbox] = useState(false);

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSubmit = async () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { type: "user", content: newMessage }]);

            const geminiResponse = await sendMessageToGemini(newMessage);

            setMessages([
                ...messages,
                { type: "user", content: newMessage },
                { type: "bot", content: geminiResponse },
            ]);
            setNewMessage("");
        }
    };

    const handleClose = () => {
        setShowChatbox(false);
    };

    const handleOpen = () => {
        setShowChatbox(true);
    };

    return (
        <>
            <Button
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    padding: 0,
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                }}
                onClick={handleOpen}
            ></Button>
            {showChatbox && (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        right: 16,
                        backgroundColor: "white",
                        borderRadius: 2,
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        padding: 2,
                        width: "300px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mb: 1,
                        }}
                    >
                        <Button onClick={handleClose} sx={{ p: 0 }}>
                            <CloseIcon />
                        </Button>
                    </Box>
                    <Typography variant="h6" align="center" mb={2}>
                        Chatbot
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        {messages.map((message, index) => (
                            <Box
                                key={index}
                                sx={{
                                    backgroundColor:
                                        message.type === "user"
                                            ? "#e0e0e0"
                                            : "#f0f0f0",
                                    padding: 1,
                                    borderRadius: 4,
                                    maxWidth: "80%",
                                    alignSelf:
                                        message.type === "user"
                                            ? "flex-end"
                                            : "flex-start",
                                }}
                            >
                                <Typography variant="body1">
                                    {message.content}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                        <TextField
                            fullWidth
                            value={newMessage}
                            onChange={handleInputChange}
                            placeholder="Nhập tin nhắn..."
                        />
                        <Button variant="contained" onClick={handleSubmit}>
                            Gửi
                        </Button>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Chatbox;
