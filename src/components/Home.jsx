import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Ready from './Ready';
import ScheduleDrivingLessons from './ScheduleDrivingLessons';
import Safety from './Safety';
import Footer from './Footer';
import ContactUs from './ConatactUs';
import Courses from './Courses';
import Services from './Services';
import Trainer from './Trainer';
import Gallery from './Gallery';
import Certifications from './Certifications';


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
          <Link to="/signup">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="additional-sections">
        <section className="section-wrapper">
          <Ready />
        </section>

          <ScheduleDrivingLessons />
       
        <section className="section-wrapper">
          <Safety />
        </section>
        
       
          <Services />
          <section className="section-wrapper">
        <Trainer />
        </section>
        <Courses/>
        
        <section className="section-wrapper">
        <Certifications />
        </section>
        
        <Gallery />
      
        <section className="section-wrapper">
        <ContactUs />
        </section>
        
        
          <Footer />
       
      </div>
    </div>
  );
};

export default Home;
