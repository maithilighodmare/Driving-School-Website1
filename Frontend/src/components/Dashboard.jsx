import React from "react";
import "../styles/Dashboard.css"; // Create this for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-details">
          <h2>Jane Doe</h2>
          <p>Email: jane.doe@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>

      {/* Attendance Monitoring Section */}
      <div className="attendance-section">
        <h3>Attendance Monitoring</h3>
        <div className="attendance-details">
          <p>Time Slot: 10:00 AM - 11:00 AM</p>
          <p>Classes Completed: 8</p>
          <p>Classes Remaining: 2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
