import ItemList from "./ItemList";
import getAsyncData from "../data/getAsyncData";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Nuestros productos");
  const categoria = useParams().categoria;
  console.log("%cRender de ItemListContainer", "color: yellow");
  console.log(products);

  useEffect(() => {
    const respuestaPromise = getAsyncData();
    console.log(respuestaPromise);
    respuestaPromise
      .then((respuesta) => {
        if (categoria) {
          return setProducts(
            respuesta.filter((item) => item.category === categoria),
          setTitulo(categoria)
          );
        } else {
          return setProducts(respuesta),
          setTitulo("Nuestros productos")
        }
      })
      .catch((error) => alert(error));
  }, [categoria]);

  return (
   <div>
      <ItemList  products={products} titulo={titulo} />
  </div>
  );
}

export default ItemListContainer;
