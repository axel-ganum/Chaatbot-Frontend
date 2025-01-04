import React, { useState } from "react";

const Menu = ({ menu, agregarProducto, onClose, addMessage }) => {
    const [cantidades, setCantidades] = useState(
        menu.reduce((acc, producto) => {
            acc[producto.nombre] = 1;  
            return acc;
        }, {})
    );

    const handleCantidadChange = (producto, value) => {
        setCantidades((prev) => ({
            ...prev,
            [producto.nombre]: value,
        }));
    };

    return (
        <div className="p-4 border-t relative">
            <button
                onClick={onClose}
                className="absolute top-0 right-0 p-2 text-red-500"
            >
                ❌
            </button>
            {menu.map((producto, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg mb-2">
                    <strong>{producto.nombre}</strong> - ${producto.precio}
                    <p>{producto.descripcion}</p>

                    <input
                        type="number"
                        value={cantidades[producto.nombre] || 1}
                        onChange={(e) => handleCantidadChange(producto, Number(e.target.value))}
                        className="w-16 p-1 border rounded-lg mt-2"
                    />

                    <button
                        onClick={() => {
        
                            agregarProducto(producto, cantidades[producto.nombre], addMessage);
                        }}
                        className="ml-2 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Añadir al Pedido
                    </button>
                </div>
            ))}
        </div>
    );
};


export default Menu


