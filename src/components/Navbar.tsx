import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Building2, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <nav className="bg-orange-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8" />
              <span className="font-bold text-xl">MuseumMate</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-200 transition">{t('home')}</Link>
            <a href="https://asi.paygov.org.in/asi-webapp/#/ticketbooking" target="_blank" rel="noopener noreferrer" 
               className="hover:text-orange-200 transition">{t('book_tickets')}</a>
            <Link to="/contact" className="hover:text-orange-200 transition">{t('contact')}</Link>
            {isAuthenticated ? (
              <Link to="/profile" className="flex items-center space-x-1 hover:text-orange-200 transition">
                <User className="h-5 w-5" />
                <span>{t('profile')}</span>
              </Link>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-orange-200 transition">
                <User className="h-5 w-5" />
                <span>{t('login')}</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-orange-600 rounded">{t('home')}</Link>
            <a href="https://asi.paygov.org.in/asi-webapp/#/ticketbooking" target="_blank" rel="noopener noreferrer" 
               className="block px-3 py-2 hover:bg-orange-600 rounded">{t('book_tickets')}</a>
            <Link to="/contact" className="block px-3 py-2 hover:bg-orange-600 rounded">{t('contact')}</Link>
            {isAuthenticated ? (
              <Link to="/profile" className="block px-3 py-2 hover:bg-orange-600 rounded">{t('profile')}</Link>
            ) : (
              <Link to="/login" className="block px-3 py-2 hover:bg-orange-600 rounded">{t('login')}</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
