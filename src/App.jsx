import React from 'react';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavbarDefaultNav from './components/NavbarDefault';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
function App() {

  return (
    <div>
 
  <CartContextProvider>
     <BrowserRouter>

      <Routes>
        <Route path="/" element={<NavbarDefaultNav />}>
          <Route path="/products" element={<ItemListContainer/>} />
          <Route path="/category/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />

        </Route>

        
      </Routes>
    
     </BrowserRouter>
  </CartContextProvider>
    </div>
  )
}

export default App
