import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function removeItem(id) {

    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  function addItem({ price, id, title, img, quantity }) {
    const copyCartItems = [...cartItems];


    copyCartItems.push({
      id: id,
      title: title,
      img: img,
      quantity: quantity,
      price: price,
    });
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
        countItemsInCart,
        addItem,
        removeItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
