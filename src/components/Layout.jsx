import React, { useEffect } from 'react';
import Navbar from './Navbar';  // Import the Navbar component
import { Outlet, useLocation } from 'react-router-dom';  // Used to render the active page component

const Layout = () => {
  const location = useLocation();  // Get the current location (route)

  useEffect(() => {
    // Update the document title based on the current path
    if (location.pathname === "/") {
      document.title = "Home - DDS";
    } else if (location.pathname === "/login") {
      document.title = "Login - Your App Name";
    } else if (location.pathname === "/signup") {
      document.title = "Signup - Your App Name";
    } else {
      document.title = "Your App Name";  // Default title
    }
  }, [location]);  // Runs whenever the location changes

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
