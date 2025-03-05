import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About MuseumMate</h3>
            <p className="text-orange-100">
              Discover India's rich cultural heritage through our extensive network of museums and historical sites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-orange-100 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-100 hover:text-white transition">Contact</Link>
              </li>
              <li>
                <a href="https://asi.nic.in" target="_blank" rel="noopener noreferrer" 
                   className="text-orange-100 hover:text-white transition">Book Tickets</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-orange-100">
              <li>Phone: +91 11 2436 8389</li>
              <li>Email: info@museummate.gov.in</li>
              <li>24 Tilak Marg, New Delhi</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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
          <p>&copy; {new Date().getFullYear()} MuseumMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;