import React from 'react';
import ItemListContainer from "./components/ItemListContainer";
import NavbarDefaultNav from './components/NavbarDefault';

function App() {


  return (
    <div>

      <NavbarDefaultNav />
      <hr />
      <ItemListContainer greeting="Productos Trending" />

    </div>
  )
}

export default App
