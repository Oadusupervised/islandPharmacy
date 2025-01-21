import React from "react";
import { useState } from "react";

function ItemCount(props) {
  
  let [quantity, setQuantity] = useState(1);

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (quantity < props.max) {    
      setQuantity(quantity + 1);    
    }    
    if (quantity === props.max) {
      alert("Se ha alcanzado el stock máximo");
    }
  };
  

  return (
    <div className="flex items-center">
      <button
          onClick={handleAdd}
          className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
      >
        +
      </button>
      <span className="px-4">{quantity}</span>
      <button
        onClick={handleSubtract}
        className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
      >
        -
      </button>
    </div>
  );
}

export default ItemCount;
