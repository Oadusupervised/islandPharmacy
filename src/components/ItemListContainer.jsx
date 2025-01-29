import ItemList from "./ItemList";
import getAsyncData,{getAsyncItemsByCategory} from "../data/database";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Nuestros productos");
  const categoria = useParams().categoria;

  useEffect(() => {
  
    const respuestaPromise = categoria === undefined
      ? getAsyncData()  // Obtener todos los productos
      : getAsyncItemsByCategory(categoria);  // Obtener productos por categoría
    
    respuestaPromise
      .then((respuesta) => {
        setProducts(respuesta);  // Establecer los productos
        setTitulo(categoria === undefined ? "Nuestros productos" : categoria);  // Establecer el título
      })
      .catch((error) => alert(error));  // Manejar el error
  }, [categoria]);  // El useEffect se ejecuta cuando cambia la categoría
  

  
  return (
   <div>
      <ItemList  products={products} titulo={titulo} />
  </div>
  );
}

export default ItemListContainer;
