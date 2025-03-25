import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-orange-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end space-x-4 mb-6">
          <button onClick={() => changeLanguage('en')} className="px-3 py-1 bg-gray-700 text-white rounded">English</button>
          <button onClick={() => changeLanguage('hi')} className="px-3 py-1 bg-gray-700 text-white rounded">हिन्दी</button>
          <button onClick={() => changeLanguage('ta')} className="px-3 py-1 bg-gray-700 text-white rounded">தமிழ்</button>
          <button onClick={() => changeLanguage('mr')} className="px-3 py-1 bg-gray-700 text-white rounded">मराठी</button>
          <button onClick={() => changeLanguage('te')} className="px-3 py-1 bg-gray-700 text-white rounded">తెలుగు</button>
          <button onClick={() => changeLanguage('bn')} className="px-3 py-1 bg-gray-700 text-white rounded">বাংলা</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('about_museum_mate')}</h3>
            <p className="text-orange-100">{t('about_description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-orange-100 hover:text-white transition">{t('home')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-100 hover:text-white transition">{t('contact')}</Link>
              </li>
              <li>
                <a href="https://asi.nic.in" target="_blank" rel="noopener noreferrer"
                   className="text-orange-100 hover:text-white transition">{t('book_tickets')}</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact_info')}</h3>
            <ul className="space-y-2 text-orange-100">
              <li>{t('phone')}: +91 6393116313</li>
              <li>{t('email')}: ukgprojects@gmail.com</li>
              <li>Lovely Professional University, Phagwara, Punjab, 144401</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('follow_us')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-100 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-orange-100 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-orange-100 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-orange-100 hover:text-white transition">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-orange-800 text-center text-orange-100">
          <p>&copy; {new Date().getFullYear()} MuseumMate. {t('all_rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
