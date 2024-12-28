import React from "react";
import Button from "./Button";

function Item(props) {
  const { price, title, text, img, id } = props;

  return (
    <div 
      className="
        flex flex-col
        bg-white 
        border border-gray-200 
        rounded-lg 
        shadow-md 
        dark:bg-gray-800 
        dark:border-gray-700
        p-6 
        hover:scale-105 
        transition-transform 
        duration-300 
        ease-in-out
      "
    >
      <img 
        src={img} 
        alt="product img" 
        className="rounded-t-lg w-full h-48 object-cover" 
      />
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400">{text}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            ${price}
          </p>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Item;
