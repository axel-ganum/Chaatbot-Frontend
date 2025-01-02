import React from "react";

const Menu = ({ menu, agregarProducto }) => {
  return (
    <div className="p-4 border-t">
      {menu.map((producto, index) => (
        <button
          key={index}
          className="block w-full text-left px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 mb-2"
          onClick={() => agregarProducto(producto)}
        >
          {producto.nombre} - ${producto.precio}
        </button>
      ))}
    </div>
  );
};

export default Menu;

