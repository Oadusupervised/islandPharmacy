import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);


  function getTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });

    return totalPrice;
  }

  function removeItem(id) {

    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  function addItem({ price, id, title, img, quantity }) {
    const copyCartItems = [...cartItems];
    const existingItemIndex = copyCartItems.findIndex(item => item.id === id);
  
    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, sumamos la cantidad
      copyCartItems[existingItemIndex].quantity += quantity;
    } else {
      // Si el producto no está en el carrito, lo agregamos
      copyCartItems.push({
        id,
        title,
        img,
        quantity,
        price,
      });
    }
  
    setCartItems(copyCartItems);
  }
  

  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        setCartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
