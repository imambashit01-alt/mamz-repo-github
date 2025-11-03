import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../contexts/AuthContext';
import { decodeGoogleCredential } from '../utils/auth';

const LoginModal = ({ isOpen, onClose }) => {
  const { user, login, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const googleLogin = useGoogleLogin({
    clientId: '747625177326-ap18e4qf72g6d76197edhjt4j4s1lo30.apps.googleusercontent.com',
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      try {
        // Fetch user info from Google
        const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const userInfo = await response.json();

        // Decode JWT credential if available
        const userData = decodeGoogleCredential(tokenResponse.credential) || {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture,
          email_verified: userInfo.verified_email,
          method: 'Google OAuth',
          createdAt: new Date().toISOString()
        };

        login(userData);
        alert('✓ Successfully signed in with Google!\nWelcome to MAMZ');
        onClose();
      } catch (error) {
        console.error('Google sign-in error:', error);
        alert('✗ Google sign-in failed. Please try again.');
      }
      setLoading(false);
    },
    onError: () => {
      console.error('Google login failed');
      alert('✗ Google sign-in failed. Please try again.');
      setLoading(false);
    },
  });

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleLogin();
  };



  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-mamz-black dark:text-mamz-white">
                {user ? 'My Profile' : 'Login to MAMZ'}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-500 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>

            {user ? (
              // User Profile View
              <div className="user-profile">
                <div className="flex items-center space-x-4 mb-4">
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="w-16 h-16 rounded-full"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold">{user.name}</h3>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <strong>{user.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email:</span>
                    <strong>{user.email}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Login Method:</span>
                    <strong>{user.method}</strong>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    onClose();
                    alert('✓ Logged out successfully');
                  }}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              // Login/Register Forms
              <>
                <div className="mb-6">
                  <button
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors mb-4"
                  >
                    <img
                      src="https://developers.google.com/identity/images/g-logo.png"
                      alt="Google"
                      className="w-5 h-5 mr-3"
                    />
                    {loading ? 'Signing in...' : 'Continue with Google'}
                  </button>
                  <div className="flex items-center mb-4">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>
                </div>

                <div className="text-center text-gray-600 dark:text-gray-400">
                  <p>Only Google OAuth login is available.</p>
                  <p className="text-sm mt-2">Email/password authentication has been removed.</p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
