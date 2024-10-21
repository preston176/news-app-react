// src/assets/Components/Profile.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        <p className="text-lg mb-2">Email: {currentUser.email}</p>
      </div>
    </div>
  );
};

export default Profile;
