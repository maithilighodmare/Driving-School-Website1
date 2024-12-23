import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Courses from './components/Courses';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto my-10">
        <BookingForm />
      </div>
      <Courses />
    </div>
  );
}

export default App;
