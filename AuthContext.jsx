import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserFromStorage, saveUserToStorage, clearUserStorage } from '../utils/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage on mount
    const savedUser = getUserFromStorage();
    setUser(savedUser);
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    saveUserToStorage(userData);
  };

  const logout = () => {
    setUser(null);
    clearUserStorage();
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
