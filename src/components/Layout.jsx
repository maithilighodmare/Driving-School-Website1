import React from 'react';
import Navbar from './Navbar';  // Import the Navbar component
import { Outlet } from 'react-router-dom';  // Used to render the active page component

const Layout = () => {
  return (
    <div>
      <Navbar />  {/* Navbar will be displayed on all pages */}
      <main>
        <Outlet />  {/* The content of the active route/page will be rendered here */}
      </main>
    </div>
  );
};

export default Layout;
