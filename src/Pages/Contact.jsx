import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className="student-contact-container">
      <h1 className="student-contact-heading">Contact Our Team</h1>
      <p className="student-contact-description">
        We'd love to hear from you! Whether you're a student with questions about our programs, or a visitor curious about our campus—reach out anytime.
      </p>

      <div className="student-contact-grid">
        {/* Form */}
        <form className="student-contact-form">
          <h2 className="form-title">Send Us a Message</h2>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Your name" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="student@example.edu" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Write your message..." />
          
          <button type="submit">Submit</button>
        </form>

        {/* Map */}
        <div className="student-contact-map">
          <iframe
            title="Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.6264448514724!2d75.83713961488094!3d23.03957488494954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637112027f8721%3A0xf918960bca1ec92c!2sUjjain%20Engineering%20College!5e0!3m2!1sen!2sin!4v1625059917648!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Points */}
      <div className="student-contact-points">
        <h3>Why Contact Us?</h3>
        <ul>
          <li>✅ Ask about upcoming courses and batches</li>
          <li>✅ Collaborate with us on student projects</li>
          <li>✅ Schedule a campus visit or online info session</li>
          <li>✅ Share your feedback and suggestions</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;