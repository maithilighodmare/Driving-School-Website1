import React, { useRef } from "react";

const Gallery = () => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="Gallery" style={styles.container}>
      <h2 style={styles.heading}>Gallery</h2>
      <div style={styles.galleryContainer}>
        <button onClick={scrollLeft} style={styles.arrowButton}>
          &#8249;
        </button>
        <div style={styles.gallery} ref={galleryRef}>
          <img src="/assets/g1.jpg" alt="Gallery Image 1" style={styles.image} />
          <img src="/assets/g2.jpg" alt="Gallery Image 2" style={styles.image} />
          <img src="/assets/g3.jpg" alt="Gallery Image 3" style={styles.image} />
          <img src="/assets/g4.jpg" alt="Gallery Image 4" style={styles.image} />
          <img src="/assets/g5.jpg" alt="Gallery Image 5" style={styles.image} />
          <img src="/assets/g6.jpg" alt="Gallery Image 6" style={styles.image} />
          <img src="/assets/g7.jpg" alt="Gallery Image 7" style={styles.image} />
          <img src="/assets/g8.jpg" alt="Gallery Image 8" style={styles.image} />
        </div>
        <button onClick={scrollRight} style={styles.arrowButton}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

const styles = {
    container: {
        textAlign: "center",
        margin: "0", // Remove margin for full viewport height
        padding: "0", // Remove padding if any
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/gallerybg.jpg')", 
        height: "100vh", // Full viewport height
        width: "100%", // Ensure the container takes full width
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center center", // Center the background image
      },
  heading: {
    fontSize: "3rem",
    color: "white",
    marginBottom: "40px",
    marginTop:"-80px",
  },
  galleryContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "30px",
  },
  gallery: {
    display: "flex",
    overflowX: "auto",
    gap: "30px", // Increase gap between images
    padding: "10px",
    scrollBehavior: "smooth",
    msOverflowStyle: "none", // For IE and Edge
    scrollbarWidth: "none", // For Firefox
  },
  image: {
    width: "45%", // Use percentage for responsive width
    maxWidth: "350px", // Limit max width
    height: "auto", // Auto height to maintain aspect ratio
    aspectRatio: "1.5", // Make the width larger than height
    objectFit: "cover", // Ensures images maintain aspect ratio
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  arrowButton: {
    backgroundColor: "white",
    borderRadius: "30px",
    width:"50px",
    height: "70px",
    margin: "30px",
    border: "none",
    fontSize: "2rem",
    color: "#ff5722",
    cursor: "pointer",
    padding: "10px",
    zIndex: "10",
  },
  // Media query for smaller screens
  "@media (max-width: 768px)": {
    gallery: {
      gap: "15px", // Reduce gap between images on smaller screens
    },
    image: {
      width: "60%", // Increase width of images on smaller screens for better fit
      maxWidth: "250px", // Adjust max width for smaller screens
    },
  },

  "@media (max-width: 480px)": {
    heading: {
      fontSize: "1.5rem", // Adjust heading size for smaller screens
    },
    image: {
      width: "70%", // Further reduce the width of images for very small screens
      maxWidth: "200px", // Adjust max width further
    },
  },
};

export default Gallery;
