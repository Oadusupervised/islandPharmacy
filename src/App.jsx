import React from 'react';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavbarDefaultNav from './components/NavbarDefault';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div>
     <BrowserRouter>

      <NavbarDefaultNav />

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoria" element={<ItemListContainer />} />
      </Routes>
    
     </BrowserRouter>
    </div>
  )
}

export default App
