import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import the i18n configuration
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-stone-50">
          <Navbar />
          <div className="flex justify-end p-4">
            <label className="mr-2">{t('select_language')}:</label>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="border p-1"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="ta">தமிழ்</option>
              <option value="mr">मराठी</option>
              <option value="te">తెలుగు</option>
              <option value="bn">বাংলা</option>
            </select>
          </div>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={
                // <ProtectedRoute>
                  <Profile />
                // </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
