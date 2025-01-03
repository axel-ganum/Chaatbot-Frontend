import React from "react";
import { useState, useEffect } from "react";

const Menu = ({ agregarProducto, onClose}) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu");
        const data = await response.json();
        setMenu(data);
      } catch (error) {
         console.error("Error al cargar el menú", error)
      }
    }

     fetchMenu();
  },[]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
    {menu.map((producto, index) => (
      <div
        key={index}
        className="p-4 mb-2 bg-white rounded-lg text-left shadow"
      >
        <strong>{producto.nombre}</strong> - ${producto.precio}
        <p className="text-sm text-gray-600">{producto.descripcion}</p>
        <button
          onClick={() => agregarProducto(producto)}
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Añadir al Pedido
        </button>
      </div>
    ))}
    </div>
  );
}

 export default Menu;



