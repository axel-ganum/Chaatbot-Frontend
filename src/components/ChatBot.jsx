import React, { useState } from "react";
import { fetchStatus } from "../utils/chatbotLogic.js";
import Menu from "./Menu.jsx";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  

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

  const agregarProducto = (producto) => {
    addMessage(`Has añadido ${producto.nombre} al pedido.`, "bot");
    setShowMenu(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-[500px] h-[700px] bg-white rounded-lg shadow-lg flex flex-col relative">
      <div className="flex-1 overflow-y-auto p-4">
        {!showMenu ? (
          <>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`py-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`px-4 py-2 max-w-max inline-block ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white ml-auto rounded-full"
                      : "bg-gray-300 mr-auto rounded-full"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="text-center">
                <p className="text-gray-500">...</p>
              </div>
            )}
          </>
        ) : (
          <Menu agregarProducto={agregarProducto} onClose={() => setShowMenu(false)} />
        )}
      </div>
      <div className="p-2 bg-gray-100 border-t">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {showMenu ? "Ocultar Menú" : "Ver Menú"}
        </button>
      </div>

      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Escribí tu mensaje..."
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







