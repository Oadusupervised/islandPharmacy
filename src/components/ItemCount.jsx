import React from "react";

function ItemCount({ quantity, handleAdd, handleSubstract }) {
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
        onClick={handleSubstract}
        className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none"
      >
        -
      </button>
    </div>
  );
}

export default ItemCount;
