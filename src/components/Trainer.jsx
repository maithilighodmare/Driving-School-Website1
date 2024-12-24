import React from "react";

const Trainer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Learn Driving Skills with Expert Trainers</h1>
        <p style={styles.description}>
          Our skilled driving instructors are committed to helping you become a confident driver. With flexible schedules and personalized training plans, we ensure that your learning experience is efficient and enjoyable.
        </p>
        <ul style={styles.features}>
          <li>Certified Driving Trainers</li>
          <li>Flexible & Customized Courses</li>
          <li>Affordable Training Packages</li>
          <li>Lifetime Access to Online Resources</li>
        </ul>
        <button style={styles.button}>Join for Free Trial</button>
      </div>
      <div style={styles.imageSection}>
        <img
          src="/assets/Trainer.jpg"
          alt="Driving Trainer"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Space between content and image
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    gap: "20px", // Add space between content and image
  },
  content: {
    maxWidth: "50%", // Left half with text content
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#666",
  },
  features: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#ff5722",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  imageSection: {
    display: "flex",
    justifyContent: "center", // Center the image horizontally
    alignItems: "center", // Center the image vertically
    width: "50%", // Ensure this section takes up only the right half
    height: "100%", // Make sure it takes the full height
  },
  image: {
    width: "80%",
    height: "auto", 
    maxHeight: "450px", 
    borderRadius: "10px",
  },
};

export default Trainer;
