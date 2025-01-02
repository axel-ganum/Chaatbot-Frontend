import React, { useState } from "react";
import { fetchStatus } from "../utils/chatbotLogic.js";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const addMessage = (text, sender = "bot") => {
    setMessages((prev) => [...prev, { text, sender }]);
  };


  const handleUserInput = async () => {
    if (!userMessage.trim()) 

    addMessage(userMessage, "user"); 
    setIsLoading(true); 

    
    await fetchStatus(userMessage, addMessage, setIsLoading);

 
    setUserMessage(""); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-[400px] h-[600px] bg-white rounded-lg shadow-lg flex flex-col relative">
      <div className="flex-1 overflow-y-auto p-4">
        {Array.isArray(messages) && messages.map((message, index) => (
          <div key={index} className={`py-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
            <p className={`px-4 py-2 max-w-max inline-block ${message.sender === "user" ? "bg-blue-500 text-white ml-auto rounded-full" : "bg-gray-300 mr-auto rounded-full"}`}>
              {message.text}
            </p>
          </div>
        ))}
        {isLoading && (
          <div className="text-center">
            <p className="text-gray-500">...</p>
          </div>
        )}
      </div>
  
      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleUserInput}
          className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
  
  
  );
};

export default ChatBot;






