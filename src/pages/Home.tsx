import React from 'react';
import Carousel from '../components/Carousel';
import { MapPin, Clock, Ticket } from 'lucide-react';
import Museum from './Museum';
import VirtualTour from './VirtualTour';


const Home = () => {
  return (
    <div className="flex flex-col">
      <Carousel />
      
      {/* Promotional Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">
            Discover India's Rich Cultural Heritage
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <MapPin className="h-12 w-12 text-orange-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Many Historical Sites</h3>
              <p className="text-gray-600">Explore thousands of years of history through our carefully preserved monuments and museums.</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-orange-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI enabled Tour Planning</h3>
              <p className="text-gray-600">AI Anna will guide you to help you discover the stories behind sightseeing places.</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <Ticket className="h-12 w-12 text-orange-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book your tickets instantly through Archaeological Survey of India's official portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Museums */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">
            Featured Museums
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://www.holidify.com/images/cmsuploads/compressed/800px-India_national_museum_01_20180323100830.jpg" 
                alt="National Museum"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">National Museum, Delhi</h3>
                <p className="text-gray-600">Home to thousands of rare artifacts spanning over 5,000 years of cultural heritage.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://miro.medium.com/v2/resize:fit:864/1*gHx_YkInvMk9aKfvLBpf1Q.jpeg" 
                alt="Indian Museum"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Indian Museum, Kolkata</h3>
                <p className="text-gray-600">The largest and oldest museum in India, featuring rare collections of antiques, armor, and ornaments.</p>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section className="py-16 px-4 bg-stone-100">
      <div className="max-w-7xl mx-auto">
 
  <Museum/> 
  <VirtualTour/>


  </div>
  </section>
    </div>
    
  );
};

export default Home;