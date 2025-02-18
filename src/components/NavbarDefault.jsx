import islandPharmacyFlatLogo from '../assets/islandPharmacyFlatLogo.svg'
import { Link , Outlet, useLocation} from 'react-router-dom'
import Banner from './Banner';
import MapEmbed from './MapEmbed';
import CartWidget from './CartWidget'


function NavbarDefaultNav() {
  const location = useLocation(); // Obtener la ruta actual
  // Función para verificar si el enlace es el actual
  const isActive = (path) => {
    // Si la ruta empieza con la ruta del enlace o si la ruta es exacta
    return location.pathname === path &&('text-blue-700 bg-blue-100') 
  };
  const content = <>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={islandPharmacyFlatLogo} className="h-8" alt="IslandPharmacy Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IslandPharmacy</span>
    </Link>

    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
      hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 
      dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg 
        bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 
        md:bg-transparent dark:bg-gray-900 dark:border-gray-700">
        
        <li>
          <Link
            to="/"
            className={`block py-2 px-3 rounded md:border-0 md:p-0 
              dark:text-white md:dark:hover:text-blue-500 
              hover:bg-gray-200 dark:hover:bg-gray-700 
              ${isActive('/') ? 'bg-blue-100 dark:bg-blue-700' : ''}`}
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link
            to="/products"
            className={`block py-2 px-3 rounded md:border-0 md:p-0 
              dark:text-white md:dark:hover:text-blue-500 
              hover:bg-gray-200 dark:hover:bg-gray-700 
              ${isActive('/products') ? 'bg-blue-100 dark:bg-blue-700' : ''}`}
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            to="/category/Cuidado personal"
            className={`block py-2 px-3 rounded md:border-0 md:p-0 
              dark:text-white md:dark:hover:text-blue-500 
              hover:bg-gray-200 dark:hover:bg-gray-700 
              ${isActive('/category/Cuidado%20personal') ? 'bg-blue-100 dark:bg-blue-700' : ''}`}
          >
            Cuidado Personal
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="flex items-center px-3 py-2 text-gray-900 hover:bg-gray-200 md:hover:bg-transparent 
            md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 
            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <CartWidget />
          </Link>
        </li>
      </ul>
    </div>
  </div>
</>;

  return (

    <main>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        {content}
      </nav>
      <Banner 
        initialMessage="🌴 Welcome to Punta Cana's Premier Pharmacy! 🌟 Open 24/7 for all your health and wellness needs. Fast service, friendly staff, and the care you deserve."
        initialButtonText="Shop Now"
        onClose={() => console.log('Banner has been closed.')}
      />
    </main>
      

  )
}

export default NavbarDefaultNav;