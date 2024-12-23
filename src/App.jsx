import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Courses from './components/Courses';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <div className="container mx-auto my-10">
        <BookingForm />
      </div>
      <Courses />
    </div>
  );
}

export default App;
