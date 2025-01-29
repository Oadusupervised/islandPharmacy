import { useContext } from "react";
import cartContext from "../context/CartContext";
import {Link} from "react-router-dom"

function CartContainer() {
  const { cartItems, removeItem } = useContext(cartContext);

  // 1. conectarlo al context -> useContext, cartContext
  // 2. mostrar el listado de productos ->
  // 3. Mostrar de forma condicional un mensaje cuando el carrito esté vacío
  // 4. Control para eliminar items del carrito

  return (

    cartItems.length > 0 ? (
    <div>
      <h1>Tu carrito</h1>
      {cartItems.map((item) => (
        <>
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Unidades: {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
          <hr />
        </>
      ))}
    </div>
    ) :
    <div>
      <h1>No hay productos actualmente</h1>
      <Link to="/products" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Ver Productos</Link>
    </div>
    
  );
}

export default CartContainer;
