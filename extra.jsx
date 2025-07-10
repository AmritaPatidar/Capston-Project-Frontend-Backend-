// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaInfoCircle, FaPhone, FaUniversity, FaUser, FaSignInAlt } from "react-icons/fa";
// import "./Nav.css";

// const Navbar = () => {
//   const [loginDropdown, setLoginDropdown] = useState(false);

//   return (
//     <>
//     {/* <div class="box1">
//       info@example.com +208-6666-011
//     </div> */}
//       <nav className="navbar">
//         <h1>Miracle IT</h1>

//         <ul className="nav-center">
//           <li><Link to="/"><FaHome className="icon" /> Home</Link></li>
//           <li><Link to="/about"><FaInfoCircle className="icon" /> About</Link></li>
//           <li><Link to="/contact"><FaPhone className="icon" /> Contact Us</Link></li>
//           {/* <li><Link to="/admission"><FaUniversity className="icon" /> Admission</Link></li> */}
//         </ul>

//         <ul className="nav-right">
//           <li><Link to="/Dashboard"><FaUser className="icon" />DAshboard</Link></li>

//           {/* Login Dropdown */}
//           <li className="login-dropdown">
//             <button className="login-btn" onClick={() => setLoginDropdown(!loginDropdown)}>
//               <FaSignInAlt className="icon" /> Login
//             </button>
//             <div className={`dropdown-menu ${loginDropdown ? "active" : ""}`}>
//               <Link to="/login/student" className="dropdown-item">Student Login</Link>
//               <Link to="/login/teacher" className="dropdown-item">Teacher Login</Link>
//                <Link to="/login/Admin" className="dropdown-item">Admin Login</Link>
//             </div>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;














// // Home....................................................
// import React from 'react';
// import './Home.css';

// import bhopalImg from '../Assets/bhopal.jpg';
// import gwaliorImg from '../Assets/gwalior.jpg';
// import jabalpurImg from '../Assets/jabalpur.jpg';
// import ratlamImg from '../Assets/ratlam.jpg';
// import nagpurImg from '../Assets/nagpur.jpg';
// import indoreImg from '../Assets/indore.jpg';


// import microsoft from '../Assets/micro.png';
// import google from '../Assets/google.png';
// import amazon from '../Assets/ama.png';
// import netflix from '../Assets/net.png';
// import meta from '../Assets/meta.jpg';
// import apple from '../Assets/apple.png';





// const companies = [
//   { name: 'Microsoft', logo: microsoft },
//   { name: 'Google', logo: google },
//   { name: 'Amazon', logo: amazon },
//   { name: 'Netflix', logo: netflix },
//   { name: 'Meta', logo: meta },
//   { name: 'Apple', logo: apple },
// ];


// const branches = [
//   {
//     name: 'Bhopal',
//     address: 'Plot No.80, 3rd Floor,Aakriti Complex,Zone-ll',
//     phone: '+91 9179001399',
//     email: 'bhopal@miracleit.edu',
//     image: bhopalImg,
    
//   },
//   {
//     name: 'Jabalpur',
//     address: '2nd Floor in Front of Maruti Sizula Showrrom  ',
//     phone: '+91 9179004399',
//     email: 'jabalpur@miracleit.edu',
//     image: jabalpurImg,
//   },
//   {
//     name: 'Gwalior',
//     address: 'A-8 ,201, 2nd Floor, Opp.Aditya College',
//     phone: '+91 9179007399',
//     email: 'gwalior@miracleit.edu',
//     image: gwaliorImg,
//   },
//   {
//     name: 'Ratlam',
//     address: '76,b-Plaza,First Floor,T,I,Y ROad corner,Above',
//     phone: '+919179180399',
//     email: 'ratlam@miracleit.edu',
//     image: ratlamImg,
//   },
//   {
//     name: 'Nagpur',
//     address: '1st Floor Mohta Complex,Above SBI Bank',
//     phone: '+91 7028407399',
//     email: 'nagpur@miracleit.edu',
//     image: nagpurImg,
//   },
//   {
//     name: 'Ujjain',
//     address: '301 #rd Floor, Mahankal Kanak,Malipura ',
//     phone: '+91 7344030236',
//     email: 'indore@miracleit.edu',
//     image: indoreImg,
//   },
// ];


// const HomePage = () => {
//   return (
//     <>
//     <div className="homepage-body">
//       <div className="homepage-container">
//         <section className="hero">
//           <br /><br /><br />
//           <h1 className="heading">
//             Welcome to Miracle IT<br />Enhancing Learning with Smart Technology.
//           </h1>
//           {/* <button>Explore Cources</button> */}
//           {/* <p className="sub-text">
//             Educating, Inspiring, & Transforming Young Women. A Tuition-free Private Middle School
//           </p> */}
          
//           <div className="students">
//             <div className="student">
              
//               <img src="https://media.istockphoto.com/id/1141685629/photo/young-smiling-student-holding-a-books-in-library-beautiful-woman-holding-a-books-in-bookstore.jpg?s=612x612&w=0&k=20&c=zLIhOlCnfwS8ym8RHLnY6e6oFe6HiPEy3Y2u-F9uYmY=" alt="Student 1" className="student-image" />
//             </div>
//             <div className="studentss">
//               <img src="https://media.istockphoto.com/id/1298759550/photo/portrait-of-a-college-student-at-campus.jpg?s=612x612&w=0&k=20&c=XDtXrwX08_L96ZYjGIQiCLLuWXF8KNnF6orI2BYdY_4=" alt="Student 3" className="student-image" />
//             </div>
//             <div className="studentsss">
//                  <img src="https://media.istockphoto.com/id/477754564/photo/student-smiling-at-camera-in-library.jpg?s=612x612&w=0&k=20&c=qbwZs-oTuC-2D45N_cg3lfEREOB7Fqgi4WPclFVnnK4=" alt="" />  
//                  {/* <img src="https://media.istockphoto.com/id/178785294/photo/male-student-in-a-library.jpg?s=612x612&w=0&k=20&c=_I3UiQiroly1-176VMJx1pDVeWF4DK923ZIHm5c6LfM=" alt="" /> */}
//                            </div>
//           </div>
//         </section>
//       </div>
//     </div>


//     {/* second branches  page.............................................................................................................. */}
// <br /><br /><br /><br /><br /><br /><br /><br />
//     {/* <section className="branches-section">
//       <h2 class="branch">Our Branches</h2>
//       <p>6 state-of-the-art campuses across Madhya Pradesh</p>
//       <div className="slider-container">
//         <div className="slider">
//           {branches.map((branch, index) => (
//             <div className="card" key={index}>
//               <img src={branch.image} alt={branch.name} />
//               <h3>{branch.name}</h3>
//               <p>{branch.address}</p>
//               <p>📞 {branch.phone}</p>
//               <p>📧 {branch.email}</p>
//               <button>Visit Branch </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section> */}



// {/* student work compaines */}
// {/* .................................................................................................................................. */}


//   <section className="companies-section">
//       <h3>Our Students Work At</h3>
//       <div className="company-logos">
//         {companies.map((company, index) => (
//           <div className="company" key={index}>
//             <img src={company.logo} alt={company.name} />
//             {/* <span>{company.name}</span> */}
//           </div>
//         ))}
//       </div>
//     </section>
 
// <br />


//  {/* cources 
// ............................................................................................................................. */}
 



// <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//     </>
//   );
// };

// export default HomePage;
