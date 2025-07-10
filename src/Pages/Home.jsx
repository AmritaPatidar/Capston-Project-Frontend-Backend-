
import React from 'react';
import './Home.css';

import bhopalImg from '../Assets/bhopal.jpg';
import gwaliorImg from '../Assets/gwalior.jpg';
import jabalpurImg from '../Assets/jabalpur.jpg';
import ratlamImg from '../Assets/ratlam.jpg';
import nagpurImg from '../Assets/nagpur.jpg';
import indoreImg from '../Assets/indore.jpg';



import microsoft from '../Assets/micro.png';
import google from '../Assets/google.png';
import amazon from '../Assets/ama.png';
import netflix from '../Assets/net.png';
import meta from '../Assets/meta.jpg';
import apple from '../Assets/apple.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";

const courses = [
  {
    title: "Web Development",
    desc: "Learn HTML, CSS, JavaScript, and React.js to build real-world websites.",
    img: "https://source.unsplash.com/400x250/?webdevelopment",
  },
  {
    title: "UI/UX Design",
    desc: "Master the art of designing stunning, user-friendly interfaces.",
    img: "https://source.unsplash.com/400x250/?ui,design",
  },
  {
    title: "Data Science",
    desc: "Dive into data analysis, visualization, and machine learning.",
    img: "https://source.unsplash.com/400x250/?data,science",
  },
];

const services = [
  {
    id: 1,
    title: "App Development",
    description: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.",
    image: "https://gramentheme.com/html/gratech/assets/images/service/service-image1.jpg",
    icon: "📱"
  },
  {
    id: 2,
    title: "Database Security",
    description: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.",
    image: "https://gramentheme.com/html/gratech/assets/images/service/service-image2.jpg",
    icon: "🔒"
  },
  {
    id: 3,
    title: "IT Consultancy",
    description: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.",
    image: "https://gramentheme.com/html/gratech/assets/images/service/service-image3.jpg",
    icon: "💻"
  }
];

const companies = [
  { name: "Tech Media", logo: "🔷" },
  { name: "Tech Media", logo: "🔳" },
  { name: "Tech Media", logo: "➿" },
  { name: "Tech Media", logo: "〰️" },
  { name: "Tech Media", logo: "〽️" },
];


const HomePage = () => {
  return (
    <>
    <div className="homepage-body">
      <div className="homepage-container">
        <section className="hero">
          <br /><br /><br />
          <h1 className="heading">
            Welcome to <span class="iit"> Miracle IT </span><br />Enhancing Learning with Smart Technology.
          </h1>
          {/* <button>Explore Cources</button> */}
          {/* <p className="sub-text">
            Educating, Inspiring, & Transforming Young Women. A Tuition-free Private Middle School
          </p> */}
          
          <div className="students">
            <div className="student">
              
              <img src="https://media.istockphoto.com/id/1141685629/photo/young-smiling-student-holding-a-books-in-library-beautiful-woman-holding-a-books-in-bookstore.jpg?s=612x612&w=0&k=20&c=zLIhOlCnfwS8ym8RHLnY6e6oFe6HiPEy3Y2u-F9uYmY=" alt="Student 1" className="student-image" />
            </div>
            <div className="studentss">
              <img src="https://media.istockphoto.com/id/1298759550/photo/portrait-of-a-college-student-at-campus.jpg?s=612x612&w=0&k=20&c=XDtXrwX08_L96ZYjGIQiCLLuWXF8KNnF6orI2BYdY_4=" alt="Student 3" className="student-image" />
            </div>
            <div className="studentsss">
                 <img src="https://media.istockphoto.com/id/477754564/photo/student-smiling-at-camera-in-library.jpg?s=612x612&w=0&k=20&c=qbwZs-oTuC-2D45N_cg3lfEREOB7Fqgi4WPclFVnnK4=" alt="" />  
                 {/* <img src="https://media.istockphoto.com/id/178785294/photo/male-student-in-a-library.jpg?s=612x612&w=0&k=20&c=_I3UiQiroly1-176VMJx1pDVeWF4DK923ZIHm5c6LfM=" alt="" /> */}
                           </div>
          </div>
        </section>
      </div>
    </div>


    


<br /><br /><br /><br /><br /><br /><br />
 {/* student work compaines */}
 {/* .......................................................................................222222222222222222222........................................... */}


<div class="companies-section">
  <div class="slider-wrapper">
    <div class="slider-track">
      <div class="company-item"><span class="company-logo">🏢</span> Google</div>
      <div class="company-item"><span class="company-logo">💼</span> Microsoft</div>
      <div class="company-item"><span class="company-logo">🚀</span> SpaceX</div>
      <div class="company-item"><span class="company-logo">🔒</span> CyberSecure</div>
      <div class="company-item"><span class="company-logo">🌐</span> OpenAI</div>
    </div>
  </div>
</div>


 
{/* how we are  */}
 {/* ...............................................................................233333333333333333333333333333333333333333333...................................... */}
<section className="about-section">
  <div className="about-container">
    <div className="about-left">
      {/* Blue Circle */}
      <img
        src="https://gramentheme.com/html/gratech/assets/images/shape/about-two-circle.png"
        alt="Circle"
        className="circle-shape"
      />

      {/* Main Image */}
      <img
        src="https://gramentheme.com/html/gratech/assets/images/about/about-two-image1.jpg"
        alt="Main"
        className="main-image"
      />

      {/* Small Team Image */}
      <img
        src="https://gramentheme.com/html/gratech/assets/images/about/about-two-image2.png"
        alt="Team"
        className="team-image"
      />
    </div>

    <div className="about-right">
      <p className="subtitle">WHO WE ARE</p>
      <h1>
       Building Bright Futures Through Quality IT Education
      </h1>
      <p className="description">
 At Miracle Institute, we are dedicated to empowering students with cutting-edge IT skills and industry-focused training. Our mission is to prepare every learner for success with personalized guidance, practical experience, and a commitment to excellence.
      </p>

      <div className="features">
        <ul>
          <li>✔  Advanced IT Courses & Training</li>
          <li>✔ Personalized Student Support</li>
        </ul>
        <ul>
          <li>✔ Career-Oriented Curriculum</li>
          <li>✔ Industry Expert Faculty</li>
        </ul>
      </div>

      <div className="about-footer">
        <button className="about-btn">About Us →</button>
        <span className="signature"> Miracle Institute</span>
      </div>
    </div>
  </div>
</section>



{/* excelsive it services/.................................................................44444444444444444444444444........................................ */}

 <div className="services-section">
      <p className="subtitle">SERVICES WE'RE OFFERING</p>
      <h2>Exclusive IT Services</h2>

      <div className="services-list">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
 
 
 
 {/* pricing...........................................................................................555555555555555555555555555555555555555555 */}


   
     </>
   );
 };

 export default HomePage;
