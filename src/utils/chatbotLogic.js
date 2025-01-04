export const fetchStatus = async (userMessage, addMessage, setIsLoading, setMenu) => {
  if (!userMessage.trim()) return;
    setIsLoading(true);
  try {
    const response = await fetch("http://localhost:3000/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pregunta: userMessage }),
    });

    const data = await response.json();

    if (data.status === "error") {
      addMessage(data.mensaje, "bot");
    } else {
      addMessage(data.mensaje, "bot");

      
      if (data.status === "menu" && data.menu) {
        setMenu(data.menu); 
      }
    }
  } catch (error) {
    console.log("Error al obtener el estado;", error);
    addMessage("Lo siento, hubo un problema al obtener el estado.", "bot");
  } finally {
    setIsLoading(false);
  }
};
