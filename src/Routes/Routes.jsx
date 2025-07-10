import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Courses from '../Pages/Courses';
import Contact from '../Pages/Contact';
import Form from '../Pages/Form';
import Student from '../Pages/Student';
import Teacher from '../Pages/Teacher';
import Login from '../Pages/Login';
import Admission from '../Pages/Admission';
import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard';
import StudentDashboard from '../Pages/StudentDashboard';
import FacultyDashboard from '../Pages/FacultyDashboard';
import Admin from '../Pages/Admin';
import Details from '../Pages/details';
import Java from '../Pages/java';
import Studentlist from '../Pages/Studentlist';
import Faculty from '../Pages/faculty';
import Event from '../Pages/event';
import Attendance from '../Pages/Attendance';
import Attan from '../Pages/Attan';

import Fees from '../Pages/Fees';
import Lecturee from '../Pages/Lecturee';
import Quiz from '../Pages/Quiz'; // ✅ Fixed import

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
   

<Route path="/courses" element={<Courses />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Form />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/student" element={<Student />} />
      <Route path="/login/teacher" element={<Teacher />} />
      <Route path="/login/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
      <Route path="/course/:courseId" element={<Details />} />
      <Route path="/events" element={<Event />} />
      <Route path="/Studentlist" element={<Studentlist />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/fees" element={<Fees />} />
       
      <Route path="/Attan" element={<Attan />} />
      <Route path="/lecture" element={<Lecturee />} />
     <Route path="/quiz" element={<Quiz />} />  {/* ✅ Route added */}

    </Routes>
  );
};

export default AppRoutes;
