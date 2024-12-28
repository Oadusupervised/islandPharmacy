import islandPharmacyLogo from './assets/islandPharmacyFlatLogo.svg'
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavbarDefaultNav from './components/NavbarDefault';

function App() {


  return (
    <div>

      <NavbarDefaultNav />
      <ItemListContainer greeting="Productos" />
    </div>
  )
}

export default App
