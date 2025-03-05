import React from "react";

interface Museum {
  name: string;
  image: string;
  url: string;
}

const museums: Museum[] = [
  {
    name: "The Indian Museum, Kolkata",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Indian_Museum%2C_Courtyard%2C_Kolkata%2C_India.jpg",
    url: "https://artsandculture.google.com/streetview/indian-museum-kolkata/0QEiXKSIoMFGWA?sv_lng=88.35099613560875&sv_lat=22.557664589392218&sv_h=147.308&sv_p=0&sv_pid=0IBcI_BmQY6tULJpUSU7Hw&sv_z=1"
  },
  {
    name: "National Museum, Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/India_national_museum_01.jpg",
    url: "https://artsandculture.google.com/streetview/national-museum-delhi/WwHAh-RXTpHWrA?sv_lng=77.21958027536833&sv_lat=28.611645088582176&sv_h=130&sv_p=0&sv_pid=7S6ZCNxUuMmtyiPKaJU-pQ&sv_z=1"
  },
  {
    name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai",
    image: "https://csmvs.in/wp-content/uploads/2022/01/IMG_3153-Pano-1920x633.jpg",
    url: "https://artsandculture.google.com/streetview/csmvs-entrance/owFFO8EDWSr9lQ?sv_lng=72.8325344218485&sv_lat=18.926786279180302&sv_h=17.06865260929841&sv_p=10.848124403218918&sv_pid=Hxvkdghw75bz-PAZJD1fIg&sv_z=1"
  },
  {
    name: "Salar Jung Museum, Hyderabad",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/salar-jung-museum-hyderabad-secunderabad-telangana-14-musthead-hero?qlt=82&ts=1726653045999",
    url: "https://artsandculture.google.com/streetview/salar-jung-museum/0wHXZeNRZXDTpQ?sv_lng=78.48000719158&sv_lat=17.370992563805764&sv_h=219.33770883054902&sv_p=0&sv_pid=O-CHZ1TTFMp5eEAoPPJ2Dw&sv_z=1"
  },
  {
    name: "Victoria Memorial, Kolkata",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/victoria-memorial-kolkata-wb-2-attr-hero?qlt=82&ts=1726644062097",
    url: "https://artsandculture.google.com/streetview/victoria-memorial-hall-interiors/BQE5g-IaSXafSQ?sv_lng=88.34254023952565&sv_lat=22.544765489620595&sv_h=-10.66&sv_p=0&sv_pid=ej3BuGLHcp_C-HbK0k1zqw&sv_z=1"
  },
  {
    name: "Ajanta Caves, Maharashtra",
    image: "https://aurangabadtourism.in/images/places-to-visit/header/ajanta-caves-aurangabad-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    url: "https://artsandculture.google.com/streetview/ajanta-caves/pQH62KxODVTBaw"
  },

];

const VirtualTour: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Experience the Virtual Tour</h1>
      <div className="grid grid-cols-3 gap-4">
        {museums.map((museum, index) => (
          <div 
            key={index} 
            className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
            onClick={() => window.open(museum.url, "_blank")}
          >
            <img 
              src={museum.image} 
              alt={museum.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-2 bg-gray-100 text-center font-semibold">
              {museum.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualTour;
