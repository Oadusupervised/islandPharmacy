import React from 'react'
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    return (
        <section className="py-2 container mx-auto">
        <div className="mb-4 shadow-sm px-2 py-1 flex bg-gray-900 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
          <Typography variant="h6" color="white" className="text-xs">
          🌴 Welcome to Punta Cana's Premier Pharmacy! 🌟 Open 24/7 for all your health and wellness needs. Fast service, friendly staff, and the care you deserve. Visit us today!
          </Typography>
          <Button  onClick={() =>navigate('/products')} color="white" size="sm">
            check out
          </Button>
          <IconButton color="white" variant="text">
            <XMarkIcon className="text-white w-3 h-3 stroke-2" />
          </IconButton>
        </div>
      </section>
    );
}

export default Banner



