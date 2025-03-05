import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sites = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1600',
    description: 'Symbol of eternal love and one of the World\'s Seven Wonders'
  },
  {
    id: 2,
    name: 'Ajanta Caves',
    location: 'Aurangabad, Maharashtra',
    image: 'https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Ancient Buddhist cave monuments dating from the 2nd century BCE'
  },
  {
    id: 3,
    name: 'Konark Sun Temple',
    location: 'Puri, Odisha',
    image: 'https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Magnificent 13th-century temple dedicated to the Sun God'
  },
  {
    id: 4,
    name: 'Pradhanmantri Sangrahalya',
    location: 'New Delhi',
    image: 'https://volzero.com/img/article/102428_banner.jpg',
    description: 'Contribution by all prime ministers to India, in rich history of 75 years'
  },
  {
    id: 5,
    name: 'Chatrapati Shivaji Vastu Sangrahalya',
    location: 'Mumbai,Maharastra',
    image: 'https://toucanslandmarks.s3.amazonaws.com/media/com_scatalog/images/listings/o/2020080603083123631.jpg',
    description: 'A place to learn All about Indian History ranging from Ancient to Early Modern era'
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Slider {...settings}>
        {sites.map((site) => (
          <div key={site.id} className="relative h-[600px]">
            <img
              src={site.image}
              alt={site.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">{site.name}</h2>
              <p className="text-xl mb-2">{site.location}</p>
              <p className="text-lg">{site.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;