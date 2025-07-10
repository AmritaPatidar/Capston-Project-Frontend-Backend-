import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Student.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('Form data:', formData);

    try {
      const response = await fetch('http://localhost:8000/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      
      let data;
      try {
        data = await response.json();
        console.log('Response data:', data);
      } catch (jsonError) {
        console.error('Failed to parse JSON response:', jsonError);
        alert(`Server error (${response.status}): Backend returned invalid response. Check Django server logs.`);
        return;
      }
      
      if (!response.ok) {
        alert('Login failed: ' + (data.message || `Server error: ${response.status}`));
        return;
      }

      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data));
        alert('Login successful!');
        
        // Role-based redirect
        if (data.role === 'student') {
          navigate('/student-dashboard');
        } else if (data.role === 'teacher') {
          navigate('/faculty-dashboard');
        } else {
          navigate('/dashboard');
        }
      } else {
        alert('Login failed: ' + (data.message || 'Invalid credentials'));
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.message.includes('fetch')) {
        alert('Backend server not running. Please start Django server first.');
      } else {
        alert('Error: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="image-box">
          <video width="640" height="360" autoPlay>
            <source src="https://media.istockphoto.com/id/1383390003/video/glossary-book-concept.mp4?s=mp4-640x640-is&k=20&c=UG4gt2h087X0zgLkc2SMW3K6Jumw2_qyxKkKU1Z-pl0=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="topic">Student Login</div>

          <div className="input-box">
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="student1"
              required 
            />
            <label>Username</label>
          </div>

          <div className="input-box">
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password123"
              required 
            />
            <label>Password</label>
          </div>

          <div className="input-box">
            <input 
              type="submit" 
              value={loading ? "Logging in..." : "Login"} 
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
