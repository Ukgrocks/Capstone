import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const { isAuthenticated } = useAuth();

  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        setAuthenticated(true);
    } else if (token === null) {
        setAuthenticated(false);
    }
  });
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
    // const login = () => {
    //     setAuthenticated(true);
    // };

  

  return <>{children}</>;
};

export default ProtectedRoute;