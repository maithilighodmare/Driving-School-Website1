import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
        <video autoPlay loop muted className="background-video">
    <source src="/assets/video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      <div className="home-overlay">
        <div className="home-content">
          <h1>Welcome to Deshmukh Driving School</h1>
          <p>Start your driving journey with hands-on training and expert guidance.</p>

          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
