import React from 'react';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavbarDefaultNav from './components/NavbarDefault';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div>
     <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<NavbarDefaultNav/>}>
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/category/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Route>

        
      </Routes>
    
     </BrowserRouter>
    </div>
  )
}

export default App
