import React from 'react';
import '../styles/Ready.css'; // Import the new CSS file

const Ready = () => {
  return (
    <div className="ready-container">
     <video 
        src="/assets/ready.mp4" 
        alt="Driving Video" 
        controls 
        autoPlay
        loop
      />
      <div className="ready-content">
        <h1>Are You Ready?</h1>
        <p>
          Since 1986, throughout the area, School of Driving has earned a reputation 
          for responsible and caring driving instruction. Through the USA, Europe, 
          and others, wherever you are, with our professional and friendly local 
          driving instructors, you’ll enjoy a relaxed, positive and encouraging 
          environment as you start your driving lessons and learn to drive.
        </p>
        <ul>
          <li>We know all of the different test areas.</li>
          <li>More than a school – a company that cares, more than you can offer.</li>
          <li>Plan first driving lessons from just $20.</li>
        </ul>
        <button>Check Now</button>
      </div>
    </div>
  );
};

export default Ready;
