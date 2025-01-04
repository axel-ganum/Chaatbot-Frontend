export const agregarProducto = async (producto, cantidad, addMessage) => {
    try {
        if (cantidad <= 0) {
            addMessage("La cantidad debe ser al menos 1.", "bot");
            return;
        }

        addMessage(`Has pedido ${cantidad} ${producto.nombre}(s) a $${producto.precio} cada uno.`, "bot");

        const cliente = "Cliente1"; 

        const response = await fetch("http://localhost:3000/pedido", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cliente: cliente,
                productos: [{
                    nombre: producto.nombre,
                    cantidad: cantidad, 
                    precio: producto.precio
                }]
            })
        });

        const data = await response.json();
        if (response.ok) {
            addMessage(`${data.mensaje}`, "bot");
            addMessage(`Detalles del Pedido:\n- Cliente: ${data.Pedido.cliente}\n- Total: $${data.Pedido.total}`, "bot");
        } else {
            addMessage(`Error: ${data.error}`, "bot");
        }
    } catch (error) {
        addMessage("Error al conectar con el servidor.", "bot");
    }
};

