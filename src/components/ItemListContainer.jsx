import ItemList from "./ItemList";
import getAsyncData from "../data/getAsyncData";
import React, { useState, useEffect } from "react";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  console.log("%cRender de ItemListContainer", "color: yellow");
  console.log(products);

  useEffect(() => {
    const respuestaPromise = getAsyncData();
    console.log(respuestaPromise);
    respuestaPromise
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => alert(error));
  }, []);


  return (
    <div className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;
