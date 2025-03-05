
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
// import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
    {/* <AuthProvider> */}
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-stone-50">
          <Navbar />
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
      
    {/* </AuthProvider> */}
    <script src="https://widget.flowxo.com/embed.js" data-fxo-widget="eyJ0aGVtZSI6IiM0NzE0ZTAiLCJ3ZWIiOnsiYm90SWQiOiI2NzMyZTM0YWNkMzJmMDAwNTZjNzczM2YiLCJ0aGVtZSI6IiM0NzE0ZTAiLCJsYWJlbCI6IlRyYXZlbEhlbHBlciAtIE11c2V1bU1hdGUifX0=" async defer></script>
    </>
  );
}

export default App;