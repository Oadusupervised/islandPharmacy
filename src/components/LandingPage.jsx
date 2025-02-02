import React from "react";
import { Link, Outlet } from "react-router-dom";
import MapEmbed from "./MapEmbed";

function LandingPage() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-white text-center py-32 px-4 md:px-8">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Bienvenido a IslandPharmacy</h1>
          <p className="text-xl md:text-2xl mb-8">Tu salud y bienestar son nuestra prioridad. Encuentra medicamentos de calidad a precios accesibles.</p>
          <Link
            to="/products"
            className="inline-block px-6 py-3 text-lg font-semibold text-blue-700 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Ver Productos
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/200"
                alt="Producto 1"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Paracetamol 500mg</h3>
              <p className="text-gray-600 mb-4">Alivio rápido para dolores comunes y fiebre.</p>
              <p className="text-lg font-bold text-blue-600">$2.99</p>
              <Link to="/products" className="text-blue-700 mt-4 inline-block text-sm hover:text-blue-500">Ver más</Link>
            </div>

            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/200"
                alt="Producto 2"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Ibuprofeno 400mg</h3>
              <p className="text-gray-600 mb-4">Antiinflamatorio, analgésico y febril.</p>
              <p className="text-lg font-bold text-blue-600">$4.99</p>
              <Link to="/products" className="text-blue-700 mt-4 inline-block text-sm hover:text-blue-500">Ver más</Link>
            </div>

            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/200"
                alt="Producto 3"
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Aspirina 100mg</h3>
              <p className="text-gray-600 mb-4">Ideal para aliviar dolores moderados y prevenir problemas cardíacos.</p>
              <p className="text-lg font-bold text-blue-600">$1.99</p>
              <Link to="/products" className="text-blue-700 mt-4 inline-block text-sm hover:text-blue-500">Ver más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Sobre Nosotros</h2>
          <p className="text-lg text-gray-700 mb-8">
            En IslandPharmacy nos dedicamos a ofrecerte los mejores productos farmacéuticos a precios justos. Nos importa tu salud y trabajamos con los mejores proveedores para asegurar la calidad de nuestros productos.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Más sobre nosotros
          </Link>
        </div>
      </section>
      <MapEmbed />

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <p>&copy; 2025 IslandPharmacy. Todos los derechos reservados.</p>
          <div className="mt-4">
            <Link to="/privacy" className="text-white hover:text-gray-300 mx-4">Política de Privacidad</Link>
            <Link to="/terms" className="text-white hover:text-gray-300 mx-4">Términos y Condiciones</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;
