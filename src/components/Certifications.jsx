import React from "react";

const Certifications = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Certifications </h1>
      <div style={styles.contentWrapper}>
        <div style={styles.content}>
          <h2 style={styles.subHeading}>Necessary Certifications</h2>
          <p style={styles.description}>
            To operate a certified and trustworthy driving school, specific certifications are required. These ensure that the school adheres to safety protocols and provides quality training.
          </p>
          <ul style={styles.certificationList}>
            <li style={styles.certificationItem}>
              <img
                src="/assets/certificate.jpg"
                alt="Instructor Certification"
                style={styles.certificationIcon}
              />
              <span style={styles.certificationText}>Instructor Certification</span>
            </li>
            <li style={styles.certificationItem}>
              <img
                src="/assets/certificate.jpg"
                alt="Vehicle Certification"
                style={styles.certificationIcon}
              />
              <span style={styles.certificationText}>Vehicle Fitness Certificate</span>
            </li>
            <li style={styles.certificationItem}>
              <img
                src="/assets/certificate.jpg"
                alt="Insurance"
                style={styles.certificationIcon}
              />
              <span style={styles.certificationText}>Insurance Coverage</span>
            </li>
            <li style={styles.certificationItem}>
              <img
                src="/assets/certificate.jpg"
                alt="Safety Compliance"
                style={styles.certificationIcon}
              />
              <span style={styles.certificationText}>Health & Safety Compliance</span>
            </li>
          </ul>
        </div>
        <div style={styles.imageSection}>
          <img
            src="/assets/certificate.jpg"
            alt="Certification Image"
            style={styles.image}
          />
        </div>
      </div>
      <h2 style={styles.heading}>Why These Certifications Matter</h2>
      <p style={styles.whyCertifications}>
        Obtaining these certifications ensures that a driving school operates legally, safely, and efficiently. It builds trust with students and ensures a high-quality training experience.
      </p>
      <button style={styles.learnMoreButton}>Learn More</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f4f9",
    textAlign: "center",
    margin: "40px 0",
    fontFamily: "'Roboto', sans-serif",
    padding: "40px 20px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "30px",
    fontWeight: "700",
  },
  subHeading: {
    fontSize: "2rem",
    color: "#555",
    marginBottom: "20px",
  },
  contentWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: "30px",
    gap: "20px",
  },
  content: {
    maxWidth: "50%",
    textAlign: "left",
  },
  description: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "20px",
  },
  certificationList: {
    listStyleType: "none",
    padding: "0",
    margin: "20px 0",
    textAlign: "left",
  },
  certificationItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "#444",
  },
  certificationIcon: {
    width: "40px",
    height: "40px",
    marginRight: "15px",
  },
  certificationText: {
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  imageSection: {
    maxWidth: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  whyCertifications: {
    fontSize: "1.2rem",
    color: "#444",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto",
  },
  learnMoreButton: {
    padding: "12px 24px",
    fontSize: "1.1rem",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  },
};

export default Certifications;
