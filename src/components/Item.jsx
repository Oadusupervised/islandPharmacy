import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function Item(props) {
  const { price, title, text, img, id } = props;

  return (
    <div 
      className="
        flex flex-col 
        bg-white 
        border border-gray-200 
        rounded-2xl 
        shadow-lg 
        dark:bg-gray-800 
        dark:border-gray-700 
        p-6 
        hover:shadow-2xl 
        hover:scale-105 
        transition-transform 
        duration-300 
        ease-in-out
      "
    >
      <img 
        src={img} 
        alt="product img" 
        className="rounded-t-2xl w-full h-56 object-cover" 
      />
      <div className="p-5 flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {text}
        </p>
        <div className="flex justify-between items-center mt-5">
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Button 
            className="
              bg-gradient-to-r from-blue-500 to-indigo-600
              hover:from-blue-600 hover:to-indigo-700
              text-white 
              font-semibold 
              py-2 
              px-5 
              rounded-lg 
              shadow-md 
              transition-all 
              duration-300 
            "
          >
            <Link to={`/item/${id}`} className="flex items-center gap-2">
              <span>Ver Más</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Item;
