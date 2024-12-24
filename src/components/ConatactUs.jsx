import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/ContactUs.css"; // Add styles for the UI

// Fix default marker icons for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Form Section */}
      <div className="form-container">
        <h2>Get In Touch With Us</h2>
        
        <form>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input  className=" ip" type="text" id="name" placeholder="i.e. James Cameron" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input className=" ip" type="email" id="email" placeholder="i.e. james@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input  className=" ip" type="text" id="subject" placeholder="i.e. I want to know about your service" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea  className=" ip" id="message" placeholder="Write your message here"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
       
        <MapContainer center={[21.1458, 79.0882]} zoom={10} className="leaflet-map">
        <TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
  attribution='Tiles &copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
/>

          <Marker position={[23.8103, 90.4125]}>
            <Popup>Head Office: 198, Akl House, Dhaka-1208</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactUs;
