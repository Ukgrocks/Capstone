import React from "react";
import { useTranslation } from 'react-i18next';

interface Museum {
  nameKey: string;
  image: string;
  url: string;
}

const museums: Museum[] = [
  {
    nameKey: "indian_museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Indian_Museum%2C_Courtyard%2C_Kolkata%2C_India.jpg",
    url: "https://artsandculture.google.com/streetview/indian-museum-kolkata/0QEiXKSIoMFGWA"
  },
  {
    nameKey: "national_museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/India_national_museum_01.jpg",
    url: "https://artsandculture.google.com/streetview/national-museum-delhi/WwHAh-RXTpHWrA"
  },
  {
    nameKey: "csmvs_mumbai",
    image: "https://csmvs.in/wp-content/uploads/2022/01/IMG_3153-Pano-1920x633.jpg",
    url: "https://artsandculture.google.com/streetview/csmvs-entrance/owFFO8EDWSr9lQ"
  },
  {
    nameKey: "salar_jung",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/salar-jung-museum-hyderabad-secunderabad-telangana-14-musthead-hero?qlt=82&ts=1726653045999",
    url: "https://artsandculture.google.com/streetview/salar-jung-museum/0wHXZeNRZXDTpQ"
  },
  {
    nameKey: "victoria_memorial",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/victoria-memorial-kolkata-wb-2-attr-hero?qlt=82&ts=1726644062097",
    url: "https://artsandculture.google.com/streetview/victoria-memorial-hall-interiors/BQE5g-IaSXafSQ"
  },
  {
    nameKey: "ajanta_caves",
    image: "https://aurangabadtourism.in/images/places-to-visit/header/ajanta-caves-aurangabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    url: "https://artsandculture.google.com/streetview/ajanta-caves/pQH62KxODVTBaw"
  }
];

const VirtualTour: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">{t('experience')}</h1>
      <div className="grid grid-cols-3 gap-4">
        {museums.map((museum, index) => (
          <div 
            key={index} 
            className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
            onClick={() => window.open(museum.url, "_blank")}
          >
            <img 
              src={museum.image} 
              alt={t(museum.nameKey)} 
              className="w-full h-48 object-cover"
            />
            <div className="p-2 bg-gray-100 text-center font-semibold">
              {t(museum.nameKey)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualTour;
