import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Using react-icons for WhatsApp icon

const WhatsAppButton = () => {
  const phoneNumber = "11234567890"; // Replace with your WhatsApp number
  const defaultMessage = "Hello, I wanted the information about..."; // Replace with your default message
  const encodedMessage = encodeURIComponent(defaultMessage); // URL encode the message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
      <button style={styles.button}>
        <FaWhatsapp size={30} style={styles.icon} /> {/* WhatsApp Icon */}
      </button>
    </a>
  );
};

const styles = {
  link: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    transition: "transform 0.3s ease", 
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    backgroundColor: "#25D366", 
    border: "none",
    borderRadius: "50%",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
  },
  icon: {
    marginRight: "0",
  },
};

export default WhatsAppButton;
