import React from "react";
import { Link } from "react-router-dom";

function ItemDetail(props) {
  const { price, title, description, text, img, id } = props;

  return (
    <div className="item-detail-container bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-300">
      {/* Imagen del producto */}
      <div className="item-image-container sm:w-1/3 flex justify-center items-center mb-4 sm:mb-0">
        <img
          src={img || "https://via.placeholder.com/300"}
          alt="Product"
          className="rounded-lg object-cover max-w-full max-h-48"
        />
      </div>

      {/* Detalles del producto */}
      <div className="item-info-container sm:w-2/3 sm:pl-6 flex flex-col justify-between">
        {/* Título y descripción breve */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{text}</p>
        </div>

        {/* Precio */}
        <div className="price-container my-4">
          <p className="text-3xl font-bold text-green-500">${price}</p>
        </div>

        {/* Descripción completa */}
        <p className="text-gray-700 text-sm mb-4">{description}</p>

        {/* Botón "Ver Más" */}
        <div>
          <Link
            to={`/item/${id}`}
            className="inline-block bg-blue-600 text-white font-medium text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
