import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Banner({ initialMessage, initialButtonText, onClose }) {
  const navigate = useNavigate();
  const [isBannerVisible, setIsBannerVisible] = useState(true); // Estado para controlar la visibilidad del banner

  // Solo usamos las props, no hay estado local aquí.
  const handleClose = () => {
    setIsBannerVisible(false); // Llamamos a la función pasada por el padre para ocultar el banner
    if (onClose) onClose();
  };

  return (
    isBannerVisible && (  // Usamos isVisible que viene de las props para mostrar u ocultar el banner
      <section className="py-2 container mx-auto">
        <div className="mb-4 shadow-sm px-2 py-1 flex bg-gray-900 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
          <Typography variant="h6" color="white" className="text-xs">
              {initialMessage ? initialMessage : "🌴 Welcome to Punta Cana's Premier Pharmacy! 🌟 Open 24/7 for all your health and wellness needs. Fast service, friendly staff, and the care you deserve."}
          </Typography>
          <Button
            onClick={() => {
              navigate('/products')
              handleClose();
            }}
            color="white"
            size="sm"
          >
            {initialButtonText ? initialButtonText : "Shop Now"}
          </Button>
          <IconButton
            color="white"
            variant="text"
            onClick={handleClose}
          >
            <XMarkIcon className="text-white w-3 h-3 stroke-2" />
          </IconButton>
        </div>
      </section>
    )
  );
}

export default Banner;
