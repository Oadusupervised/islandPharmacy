import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Banner({ initialMessage, initialButtonText, onClose }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true); // Controla si el banner se muestra o no
  const [message, setMessage] = useState(initialMessage || "🌴 Welcome to Punta Cana's Premier Pharmacy! 🌟 Open 24/7 for all your health and wellness needs. Fast service, friendly staff, and the care you deserve.");
  const [buttonText, setButtonText] = useState(initialButtonText || "Check Out");

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    isVisible && (
      <section className="py-2 container mx-auto">
        <div className="mb-4 shadow-sm px-2 py-1 flex bg-gray-900 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
          <Typography variant="h6" color="white" className="text-xs">
            {message}
          </Typography>
          <Button
            onClick={() => navigate('/products')}
            color="white"
            size="sm"
          >
            {buttonText}
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
