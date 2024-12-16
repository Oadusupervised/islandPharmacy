import islandPharmacyLogo from './assets/islandPharmacyFlatLogo.svg'
import './App.css'
import Button from "./components/Button";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
    
    <header>
      <div>
        <a href="/home" target="_blank">
          <img src={islandPharmacyLogo} className="logo" alt="Phamarcy logo" />
        </a>
      </div>
      <h1>Island Pharmacy</h1>
    </header>
      <nav> 
        {/* Navegación */}
         <ul className="navbar-links">
            <li>
              <Button >Inicio</Button>
              </li>
              <li>
              <Button>Productos</Button>
              </li>
              <li>
              <Button>Contacto</Button>
              </li>
              <li>
              <Button>Nosotros</Button>
            </li>
          </ul>
      </nav>


      <div id="ejemploentrega">
        {/* <Navbar/> -> <CartWidget /> --> 🛒(5) */}
        <ItemListContainer greeting="Los más vendidos!" />
      </div>
      <section>
        <ItemCount />
      </section>
    </>
  )
}

export default App
