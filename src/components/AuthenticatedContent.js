import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function AuthenticatedContent({ children }) {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAuthenticationState = JSON.parse(localStorage.getItem('isAuthenticated'));
    if (storedAuthenticationState) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [setIsAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or any loading message
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default AuthenticatedContent;
