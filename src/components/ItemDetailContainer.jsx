import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import for accessing URL parameters
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const id = useParams().id; // Extract the 'id' parameter from the URL

  useEffect(() => {
    async function getProduct() {
      if (id) { 
        try {
          const data = await getAsyncItemById(Number(id));
          setProduct(data); 
          console.log(data);
        } catch (error) {
          console.error("Error fetching item:", error); 
          // You can also display an error message to the user here
        }
      } else {
        console.warn("No item ID provided in the URL"); 
      }
    };
    getProduct();
  }, [id]);

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;
