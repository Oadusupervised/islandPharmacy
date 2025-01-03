import React from 'react'

function MapEmbed() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
      Visit Us at Island Pharmacy in Bávaro, Dominican Republic!
    </h2>
    
    <div className="w-full h-96 mb-6 rounded-lg shadow-lg overflow-hidden">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.5613686655847!2d-68.41909362475454!3d18.683669164171807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8edcafd6d838d%3A0x32c7f4fd72ce844a!2sFarmacia%20The%20Island%20Pharmacy%20Delivery%2024%20horas!5e0!3m2!1sen!2sdo!4v1735867752958!5m2!1sen!2sdo"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
    <p className="text-center text-lg text-gray-700">
      🌍 Visit Island Pharmacy in Bávaro, Dominican Republic. We are open 24/7 for all your needs!
    </p>
    
    <div className="flex justify-center mt-8">
      <a
        href="https://www.google.com/maps/dir//Farmacia+The+Island+Pharmacy+Delivery+24+horas,+Calle+Aruba,+Plaza+Ducassi,+Local+DS1+El+Cortecito,+Punta+Cana+23301/@18.6836692,-68.4190936,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8ea8edcafd6d838d:0x32c7f4fd72ce844a!2m2!1d-68.4165187!2d18.6836641?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-200"
      >
        Get Directions
      </a>
    </div>
  </div>
  )
}

export default MapEmbed
