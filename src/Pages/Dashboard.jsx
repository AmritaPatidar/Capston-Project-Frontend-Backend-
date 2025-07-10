// src/Pages/FacultyDashboard.jsx
import React, { useState } from 'react';


import './StudentDashboard.css'; // Reuse same styling
import { Search, Bell, Calendar, Users, GraduationCap, BookOpen, Settings, LogOut, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const navigate = useNavigate();
const sidebarItems = [
  { icon: <GraduationCap className="w-5 h-5" />, label: "Dashboard", path: "/faculty-dashboard" },
  { icon: <BookOpen className="w-5 h-5" />, label: "Attendance", path: "/attendance" },
  { icon: <Calendar className="w-5 h-5" />, label: "Events", path: "/events" },
  { icon: <Users className="w-5 h-5" />, label: "Studentlist", path: "/studentlist" },
  { icon: <Settings className="w-5 h-5" />, label: "Settings", path: "/settings" },
];


  const students = [
    { name: "Amrita Patidar", course: "Full Stack", attendance: "98%" },
    { name: "Rohan Mehta", course: "Java Programming", attendance: "92%" },
    { name: "Anjali Singh", course: "Python DS", attendance: "95%" },
  ];

  const upcomingLectures = [
    { subject: "React Components", time: "10:00 AM", date: "5 July" },
    { subject: "Java Spring Boot", time: "12:00 PM", date: "6 July" },
  ];

  const events = [
    { date: "5", month: "July", title: "Internal Evaluation", subtitle: "Test 1 for all batches" },
    { date: "10", month: "July", title: "Parent-Teacher Meet", subtitle: "Performance review" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-text">Miracle IT Academy</span>
          </div>
        </div>
       <nav className="sidebar-nav">
  {sidebarItems.map((item, index) => (
    <div
      key={index}
      className={`nav-item ${item.active ? 'active' : ''}`}
      onClick={() => navigate(item.path)}
      style={{ cursor: 'pointer' }}
    >
      {item.icon}
      <span>{item.label}</span>
    </div>
  ))}
</nav>

        
        <div className="sidebar-footer">
          <div className="user-profile">
            <img src="https://img.freepik.com/premium-photo/portrait-young-boy-professional-look_785361-73.jpg" alt="Profile" className="profile-image" />
            <div className="profile-info">
              <p className="profile-name">Pratham Rathore</p>
              <p className="profile-role">Faculty</p>
            </div>
          </div>
          <button className="logout-btn">
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div className="header-left">
            <h1 className="page-title">Faculty Dashboard</h1>
          </div>
          <div className="header-center">
            <div className="search-container">
              <Search className="search-icon" />
              <input type="text" placeholder="Search students..." className="search-input" />
            </div>
          </div>
          <div className="header-right">
            <Bell className="notification-icon" />
            <div className="user-menu">
              <img src="https://img.freepik.com/premium-photo/portrait-young-boy-professional-look_785361-73.jpg" alt="User" className="user-avatar" />
              <span className="user-name">Pratham Rathore</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-banner">
          <div className="hero-content">
            <h2 className="hero-title">Welcome,</h2>
            <p className="hero-subtitle">Manage your classes, students, and track performance here.</p>
            <button className="hero-cta">Go to Courses</button>
          </div>
          <div className="hero-illustration">
            <img src="https://csspicker.dev/api/image/?q=teacher+classroom&image_type=illustration" alt="Teacher" />
          </div>
        </section>


        {/* Student List */}
        <section className="stats-section">
          <h3 className="section-title">Student Overview</h3>
          <div className="stats-grid">
            {students.map((student, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-content">
                  <h3 className="stat-count">{student.name}</h3>
                  <p className="stat-label">Course: {student.course}</p>
                  <span className="stat-change positive">Attendance: {student.attendance}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Lectures */}
        <section className="charts-section">
          <div className="student-growth-card">
            <div className="card-header">
              <h3>Upcoming Lectures</h3>
            </div>
            <div className="growth-stats">
              {upcomingLectures.map((lec, i) => (
                <div key={i} className="growth-item">
                  <span className="growth-amount">{lec.subject}</span>
                  <span className="growth-change">{lec.date} at {lec.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="calendar-widget">
          <div className="calendar-header">
            <h3>Lecture Calendar</h3>
            <div className="calendar-nav">
              <ChevronLeft className="w-4 h-4 cursor-pointer" />
              <span>July 2025</span>
              <ChevronRight className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
          <div className="calendar-grid">
            <div className="calendar-days">
              {daysOfWeek.map((day, index) => (
                <div key={index} className="day-header">{day}</div>
              ))}
            </div>
            <div className="calendar-dates">
              {calendarDays.map((date) => (
                <div
                  key={date}
                  className={`calendar-date ${selectedDate === date ? 'active' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-events">
          <div className="events-header">
            <h3>Upcoming Events</h3>
            <button className="view-more">View More</button>
          </div>
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className="event-item">
                <div className="event-date">
                  <span className="event-day">{event.date}</span>
                  <span className="event-month">{event.month}</span>
                </div>
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <p>{event.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="new-events-btn">+ Add Event</button>
        </div>
      </aside>
    </div>
  );
};

export default FacultyDashboard;
