import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('/path-to-image.jpg')" }}>
      <div className="container mx-auto text-white text-center">
        <h2 className="text-4xl font-bold">Classroom Training</h2>
        <p className="mt-4 text-lg">We make learning to drive easy and stress-free.</p>
        <button className="mt-6 bg-green-500 px-6 py-3 rounded">How We Help</button>
      </div>
    </section>
  );
};

export default Hero;
