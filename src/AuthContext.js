import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuthenticationState = JSON.parse(localStorage.getItem('isAuthenticated'));
    if (storedAuthenticationState) {
      setIsAuthenticated(true);
    }
  }, []);

  const logOutUser = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    logOutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

