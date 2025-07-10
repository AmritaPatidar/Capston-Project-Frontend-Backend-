import React from 'react';
import './Admin.css';

const AdminLogin = () => {
  return (
    <div className="contact-container dual">
  
      {/* Admin Login Section */}
      <div className="contact-content admin-side">
        <div className="image-box">
          {/* Video Instead of Image */}
          <video width="640" height="360" autoPlay loop muted>
            <source src="https://media.istockphoto.com/id/2184842001/video/business-activity-concept-moving-banner-with-man-with-laptop-businessman-with-computer.mp4?s=mp4-640x640-is&k=20&c=2GtLbjIC1Wc88NZKQq6yMJLewzTg4YRITMDcnxtr1XU=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <form>
          <div className="topic">Admin Login</div>
          <br />
          <div className="input-box">
            <input type="text" required />
            <label>Admin Name</label>
          </div>

          <div className="input-box">
            <input type="text" required />
            <label>Email Address</label>
          </div>

          <div className="input-box">
            <input type="text" required />
            <label>Admin ID</label>
          </div>

          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="input-box">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;