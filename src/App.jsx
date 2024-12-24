import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Layout from './components/Layout'; // Import Layout
import Home from './components/Home';
import Login from './components/Loginpg';
import Signup from './components/Signup';

import WhatsAppButton from "./components/WhatsAppButton"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes using the Layout */}
        <Route path="/" element={<Layout />}>
          {/* These routes will use the Layout */}
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Route>
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
