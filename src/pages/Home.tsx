import React from 'react';
import Carousel from '../components/Carousel';
import { MapPin, Clock, Ticket } from 'lucide-react';
import Museum from './Museum';
import VirtualTour from './VirtualTour';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <Carousel />

      {/* Promotional Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">
            {t('discover_heritage')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <MapPin className="h-12 w-12 text-orange-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('historical_sites_title')}</h3>
              <p className="text-gray-600">{t('historical_sites_desc')}</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-orange-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('ai_tour_title')}</h3>
              <p className="text-gray-600">{t('ai_tour_desc')}</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <Ticket className="h-12 w-12 text-orange-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('easy_booking_title')}</h3>
              <p className="text-gray-600">{t('easy_booking_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Museums */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-800">
            {t('featured_museums')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/800px-India_national_museum_01_20180323100830.jpg"
                alt="National Museum"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('national_museum_title')}</h3>
                <p className="text-gray-600">{t('national_museum_desc')}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://miro.medium.com/v2/resize:fit:864/1*gHx_YkInvMk9aKfvLBpf1Q.jpeg"
                alt="Indian Museum"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t('indian_museum_title')}</h3>
                <p className="text-gray-600">{t('indian_museum_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Museum and Virtual Tour Section */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <Museum />
          <VirtualTour />
        </div>
      </section>
    </div>
  );
};

export default Home;
