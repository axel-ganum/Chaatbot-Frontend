import React from "react";

const Menu = ({ agregarProducto, onClose, menu }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        X
      </button>

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
};

export default Menu;





