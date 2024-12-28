import React from "react";
import "../styles/Services.css"; // Import the CSS file

const services = [
  {
    title: "License",
    description: "Get your driver's license with ease. Our expert instructors guide you through the entire process.",
    icon: "🔑",
  },
  {
    title: "Maintenance",
    description: "Regular vehicle maintenance to keep your car running smoothly. Offering checks and services.",
    icon: "🔧",
  },
  {
    title: "Driving Classes (Day/Night)",
    description: " Choose between 2-Wheel and 4-Wheel   and daytime and nighttime driving lessons. Gain confidence in all conditions.",
    icon: "🚗",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container mx-auto text-center">
        <h2 className="services-title">Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
