import { jwtDecode } from 'jwt-decode';

export const decodeGoogleCredential = (credential) => {
  try {
    const decoded = jwtDecode(credential);
    return {
      id: decoded.sub,
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      email_verified: decoded.email_verified,
      method: 'Google OAuth',
      createdAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error decoding Google credential:', error);
    return null;
  }
};

export const saveUserToStorage = (user) => {
  if (user) {
    localStorage.setItem('mamz-user', JSON.stringify(user));
  } else {
    localStorage.removeItem('mamz-user');
  }
};

export const getUserFromStorage = () => {
  try {
    const user = localStorage.getItem('mamz-user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting user from storage:', error);
    return null;
  }
};

export const clearUserStorage = () => {
  localStorage.removeItem('mamz-user');
};
