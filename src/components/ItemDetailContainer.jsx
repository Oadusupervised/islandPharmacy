import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import for accessing URL parameters
import { getAsyncItemById } from "../data/database";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const id = useParams().id; // Extract the 'id' parameter from the URL

  useEffect(() => {
    async function getProduct() {
      id && 
      (async () => {
        try {
          const data = await getAsyncItemById((id));
          setProduct(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching item:", error);
          // You can also display an error message to the user here
        }
      })() || console.warn("No item ID provided in the URL");
    };
    getProduct();
  }, [id]);

  if (product) return <ItemDetail {...product} />;
    else return <Loader />;
}



export default ItemDetailContainer;
