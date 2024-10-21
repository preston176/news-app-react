// src/assets/Components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5 px-4">
        {/* Render current page's content */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
