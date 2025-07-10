// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';

import "./About.css";

const App= () => {
const [activeTab, setActiveTab] = useState(0);
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
setIsVisible(true);
}, []);

const reviews = [
  {
    name: 'Aarav Mehta',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    course: 'Full Stack Development',
    review: 'This platform made me job-ready with real-world projects. Faculty support is top-notch!',
  },
  {
    name: 'Riya Kapoor',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    course: 'Python Programming',
    review: 'Very interactive and well-structured content. Loved the quizzes and practicals!',
  },
  {
    name: 'Yash Sharma',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    course: 'Java Development',
    review: 'Clear explanations, doubt solving sessions, and placement support were excellent.',
  },
  {
    name: 'Meena Joshi',
    image: 'https://randomuser.me/api/portraits/women/58.jpg',
    course: 'Data Science',
    review: 'This course helped me switch careers confidently. Great curriculum and hands-on practice!',
  },
  {
    name: 'Kunal Verma',
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
    course: 'AI & ML',
    review: 'I learned everything from basics to advanced AI. The projects really built my confidence.',
  },
  {
    name: 'Sneha Nair',
    image: 'https://randomuser.me/api/portraits/women/60.jpg',
    course: 'Front-end Development',
    review: 'Animations, UI design, and React were taught beautifully. Loved every part of it!',
  }
];
const teamMembers = [
  {
    name: 'Michael Anderson',
    title: 'Chief Executive Officer',
    img: 'https://media.istockphoto.com/id/1312734478/photo/business-men.jpg?s=612x612&w=0&k=20&c=rsrGjzY1bhDfQHNRGkneXTEoSzVLjxCOqXTnDF17zj4=',
  },
  {
    name: 'Sarah Johnson',
    title: 'Chief Technology Officer',
    img: 'https://media.istockphoto.com/id/1159911239/photo/smiling-indian-young-businesswoman-wear-white-suit-looking-at-camera-isolated-on-grey-studio.jpg?s=612x612&w=0&k=20&c=iziSZAUaAXY3zu00BbJYTtYu_D-vD6TRxNzH9x_KAJE=',
  },
  {
    name: 'David Chen',
    title: 'Chief Operations Officer',
    img: 'https://media.istockphoto.com/id/2156705580/photo/confident-professional-woman-in-striped-blue-shirt-and-beige-pants-posing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=f7krmJBLZTHTrf3AC5HpZH-iQFIkzFpA-IeMs5KkF4Q=',
  },
];

return (
 <>
<div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-950 text-white">
<div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
{/* Hero Section */}
<section className="relative py-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src="https://readdy.ai/api/search-image?query=Modern%20educational%20institution%20with%20futuristic%20architecture%20and%20blue%20lighting%2C%20professional%20academic%20environment%20with%20students%20and%20technology%2C%20inspiring%20learning%20space%20with%20digital%20displays%20and%20collaborative%20areas%2C%20corporate%20educational%20setting&width=1440&height=600&seq=about1&orientation=landscape"
alt="About Us Hero"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
</div>
<div className="container mx-auto px-6 relative z-10 min-h-[50vh] flex items-center justify-center text-center">
  <div className="max-w-3xl">
    
    <p className="text-xl text-gray-300 mb-4">
      At <span className="text-blue-400 font-semibold">Miracle IT</span>, we believe in building a future where technology enhances education at every level.
    </p>
    <p className="text-md text-gray-400">
      Through innovative digital tools, AI-powered solutions, and personalized learning experiences, Miracle IT empowers students, educators, and institutions to excel in a modern, tech-driven academic environment. We're committed to creating a smarter, more inclusive world of learning.
    </p>
  </div>
</div>

 <br /><br /><br />
</section>


      {/* Success Section */}
      <section className="success-section">
        <div className="section-grid">
          <div>
            <img src="https://csspicker.dev/api/image/?q=business+success+technology&image_type=photo" alt="Success" className="rounded-img" />
          </div>
          <div>
            <h2 className="section-title">Ensuring Your Success Through Reliable IT Solutions</h2>
            <p className="section-text">We provide comprehensive IT solutions that drive business growth and ensure operational excellence through innovative technology implementations.</p>
            <ul className="bullet-list">
              <li>Expert Technical Support 24/7</li>
              <li>Scalable Cloud Solutions</li>
              <li>Advanced Security Protocols</li>
            </ul>
            <button className="primary-button">Learn More</button>
          </div>
        </div>
      </section>
<section className="leadership-section">
      <div className="text-center mb-12">
        <h2 className="leadership-title">Our Leadership Team</h2>
        <p className="leadership-subtext">
          Meet the experts behind our success who drive innovation and excellence in every project we undertake.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.img} alt={member.name} className="team-img" />
            <div className="team-content">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <button className="profile-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>

 
<br /><br />

<div className=" text-white py-12 px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 flex justify-center">
  <img
    src="https://readdy.ai/api/search-image?query=Professional%20IT%20consultant%20explaining%20digital%20solutions%20to%20clients%2C%20modern%20office%20with%20blue%20lighting%2C%20tech%20screens%20showing%20data%20analytics%2C%20business%20professionals%20in%20discussion%2C%20corporate%20environment%20with%20high-tech%20elements&width=500&height=400&seq=2&orientation=portrait"
    alt="Team Discussion"
    className="rounded-xl w-full max-w-[480px] h-[280px] object-cover"
  />
</div>


      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
          Ensuring <span className="text-white font-bold">Your Success</span>{" "}
          Through <span className="text-blue-500 font-bold">Remote IT Solutions</span>
        </h1>
        <p className="text-gray-300 text-sm mb-6">
          Our comprehensive education management system combines cutting-edge
          technology with user-friendly interfaces to streamline administrative
          tasks, enhance learning experiences, and provide valuable insights
          for educational institutions.
        </p>
        <ul className="space-y-2 text-sm text-gray-200">
          <li>✔️ AI-Powered Student Analytics</li>
          <li>✔️ Automated Attendance Tracking</li>
          <li>✔️ Secure Authentication System</li>
          <li>✔️ Comprehensive Fee Management</li>
        </ul>
        
      </div>
    </div>

<br /><br /> <br /><br /><br />
 <br />
 <div className="py-16 px-4 md:px-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"><br /><br /><br />
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 animate-fade-in-down">
        What Our <span className="text-blue-500">Students Say</span><br />
      </h2> 
<br />
      <p className="text-center text-gray-300 mb-12 animate-fade-in-down delay-200">
        Real experiences from real students who transformed their careers with us.
      </p>
<br /><br /><br /><br />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((student, index) => (
          <div
            key={index}
            className="bg-[#1a1f36] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={student.image}
                alt={student.name}
                className="w-16 h-16 rounded-full border-2 border-blue-500 group-hover:scale-105 transition duration-300"
              />
              <div>
                <h4 className="font-semibold text-lg">{student.name}</h4>
                <p className="text-sm text-gray-400">{student.course}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed italic">
              “{student.review}”
            </p>
          </div>
        ))}
      </div>
    
  
</div>
</div><br /><br /><br /><br />
</div>






  
          
        
       
   
</>
);
};

export default App