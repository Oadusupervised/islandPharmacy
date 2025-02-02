import { useContext } from "react";
import cartContext from "../context/CartContext";
import {Link} from "react-router-dom"
import { createOrder } from "../data/database";
import { useState, useEffect } from "react";

function CartContainer() {
  const { cartItems,  setCartItems, removeItem, getTotalPrice } = useContext(cartContext);
  const [orderID, setOrderID] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [userData, setUserData] = useState({
    username: "",
    surname: "",  
    age: "",
  });

  useEffect(() => {
    console.log('Cart items changed:', cartItems);  // Para depuración
    console.log('Modal is open:', isModalOpen);  // Ver si el modal está abierto

    if (cartItems.length === 0) {
      setIsModalOpen(false); // Cerrar el modal si el carrito está vacío
    }
  }, [cartItems]); 
  



  function handleInputChange(evt) {
    const inputName = evt.target.name;
    const newUserData={...userData};
    newUserData[inputName] = evt.target.value;
    setUserData(newUserData);
    };
  async function handleCheckout(evt) {
    evt.preventDefault();

    const orderData = {
      buyer: {
        username: userData.username,
        surname: userData.surname,
        age: userData.age,
      },
      items: cartItems,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createOrder(orderData);

    // Mostrar en la interfaz
    // 1: State + rendering condicional
    // 2. Redireccionar -> Router: /orders/${id} -> useParams()
  // Guardar el ID de la orden y abrir el modal
    setOrderID(newOrderID);
    setIsModalOpen(true);
  }




  // 1. conectarlo al context -> useContext, cartContext
  // 2. mostrar el listado de productos ->
  // 3. Mostrar de forma condicional un mensaje cuando el carrito esté vacío
  // 4. Control para eliminar items del carrito

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Tu carrito</h1>
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">Precio: <strong>${item.price}</strong></p>
                <p className="text-gray-600">Unidades: {item.quantity}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
              <input
                value={userData.username}
                name="username"
                type="text"
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="surname" className="block text-sm font-semibold text-gray-700 mb-2">Apellido</label>
              <input
                value={userData.surname}
                name="surname"
                type="text"
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">Edad</label>
              <input
                value={userData.age}
                name="age"
                type="text"
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800">Total: ${getTotalPrice()}</p>
            <button
              disabled={!userData.username || !userData.surname || !userData.age}
              onClick={handleCheckout}
              className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              Finalizar Compra
            </button>
          </form>
        </div>
      ) : (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">No hay productos actualmente</h1>
          <Link
            to="/products"
            className="block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Ver Productos
          </Link>
        </div>
      )}
  
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-green-600">¡Compra exitosa! 🎉</h2>
            <p className="text-lg mt-2">Tu número de orden es: <strong>{orderID}</strong></p>
            <p className="mt-2 text-gray-600">Gracias por tu compra.</p>
            <button
              onClick={() => {
                setCartItems([]); // Vaciar el carrito
                setIsModalOpen(false); // Cerrar el modal
              }}
              className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
  

export default CartContainer;
