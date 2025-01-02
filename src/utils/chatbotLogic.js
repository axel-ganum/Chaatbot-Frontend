export const fetchStatus = async (userMessage, addMessage, setIsloading) => {
   if (!userMessage.trim()) return;

   addMessage(userMessage, "user");
   setIsloading(true);

   try {
    const response = await fetch("http://localhost:3000/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({pregunta: userMessage}),
    });
       const data = await response.json();

       if (data.status==='error') {
        addMessage(data.mensaje, "bot");
       } else {
        addMessage(data.mensaje, "bot");
       }
        
       
   } catch (error) {
         console.log("Error al obtener el estado;",error);
         addMessage("Lo siento, hubo un proble al obtener el estado.", "bot")
   } finally {
    setIsloading(false)
   }

}