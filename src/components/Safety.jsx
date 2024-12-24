import React from 'react'; 

const DriverSafetyForm = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px' }}>
      {/* Left Section: Driver Safety Content */}
      <div style={{ width: '50%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px',color:'#142864' }}>Driver Safety On The Road</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
          Your choice by Driveex is the revolutionary car ownership experience you have been waiting for—simple, convenient & flexible.
        </p>
        <ul style={{ paddingLeft: '20px', fontSize: '1.1rem' }}>
          <li><strong>Courses for Advanced:</strong> Cras sed sem sed felis</li>
          <li><strong>Driving Basics:</strong> Aliquam maximus turpis in vehicula</li>
          <li><strong>Quick Tips and Advice:</strong> Vivamus sapien magna sodales</li>
        </ul>
      </div>
      
      {/* Right Section: Booking Form */}
      <div style={{ width: '40%', backgroundColor: '#e6b9b9', padding: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
        <h3 style={{ marginBottom: '10px' }}>Book your lessons now</h3>
        <p>It`s free and always will be.</p>
        <form>
          <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '10px', margin: '10px 0', background:'#f4fafd' }} />
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', margin: '10px 0' , background:'#f4fafd' }} />
          <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '10px', margin: '10px 0',background:'#f4fafd' }} />
          <input type="text" placeholder="Website" style={{ width: '100%', padding: '10px', margin: '10px 0', background:'#f4fafd' }} />
          <button style={{ padding: '10px 20px', backgroundColor: '#2a9fec', color: 'white', border: 'none', cursor: 'pointer' }}>
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverSafetyForm;
