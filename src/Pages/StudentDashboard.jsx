import React, { useState } from 'react';
import './StudentDashboard.css';
import {
  Search, Bell, Calendar, Users, GraduationCap, DollarSign,
  BarChart3, Settings, LogOut, ChevronDown, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
  const { userName = "Amrita Patidar" } = props;
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const hasEvents = [3, 5];

  const sidebarItems = [
    { icon: <BarChart3 className="w-5 h-5" />, label: "Dashboard" },

    { icon: <GraduationCap className="w-5 h-5" />, label: "lecture" },
    { icon: <Calendar className="w-5 h-5" />, label: "Attendance" },
    { icon: <DollarSign className="w-5 h-5" />, label: "Fees" },
{ icon: <Settings className="w-5 h-5" />, label: "Quiz" }


  ];

  const handleSidebarNavigation = (label) => {
    switch (label) {
      case "Dashboard": navigate("/dashboard"); break;
      case "Cources": navigate("/cources"); break; // or "/courses"
      case "lecture": navigate("/lecture"); break;
      case "Attendance": navigate("/attendance"); break;
      case "Fees": navigate("/fees"); break;
      case "Settings": navigate("/settings"); break;
      case "Quiz":
  navigate("/quiz");
  break;

      default: break;
    }
  };

  const coursesData = [
    { title: "Full Stack Development", description: "React, JS, Spring Boot", icon: "🖥️", duration: "12 Weeks" },
    { title: "Java Programming", description: "OOPs, DSA", icon: "☕", duration: "10 Weeks" },
    { title: "Python for Data Science", description: "Pandas, ML", icon: "🐍", duration: "8 Weeks" },
    { title: "Web Design", description: "HTML, CSS, Figma", icon: "🎨", duration: "6 Weeks" },
    { title: "Mobile Development", description: "Flutter, Dart", icon: "📱", duration: "10 Weeks" },
    { title: "Cyber Security", description: "Ethical Hacking", icon: "🛡️", duration: "7 Weeks" }
  ];

  const upcomingEvents = [
    { date: "3", month: "Feb", title: "Live Concert", subtitle: "Charity Event 2022" },
    { date: "5", month: "Feb", title: "School Fest", subtitle: "Annual Event" }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-text">Miracle It Academy</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className="nav-item cursor-pointer"
              onClick={() => handleSidebarNavigation(item.label)}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <img src="https://csspicker.dev/api/image/?q=teacher+profile&image_type=photo" alt="Profile" className="profile-image" />
            <div className="profile-info">
              <p className="profile-name">Minerva McGonagall</p>
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
            <h1 className="page-title">Dashboard</h1>
          </div>
          <div className="header-center">
            <div className="search-container">
              <Search className="search-icon" />
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
          </div>
          <div className="header-right">
            <Bell className="notification-icon" />
            <div className="user-menu">
              <img src="https://tse1.mm.bing.net/th/id/OIP.cy_GLk_Q5qWyGVx45dTQFQHaE8?pid=Api&rs=1&c=1&qlt=95&w=184&h=123" alt="User" className="user-avatar" />
              <span className="user-name">{userName}</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-content">
            <h2 className="hero-title">Increase your knowledge By Learning!</h2>
            <p className="hero-subtitle">We have new method to new learning process. Faster, secure and easy to use!</p>
            <button className="hero-cta">Ok! Take me there</button>
          </div>
          <div className="hero-illustration">
            <img src="https://csspicker.dev/api/image/?q=learning+education+illustration&image_type=illustration" alt="Learning illustration" />
          </div>
        </section>

        {/* Courses Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {coursesData.map((course, index) => (
              <div
                key={index}
                className="stat-card cursor-pointer"
                onClick={() => navigate(`/course/${index}`)}
              >
                <div className="stat-icon text-3xl">{course.icon}</div>
                <div className="stat-content">
                  <h3 className="stat-count">{course.title}</h3>
                  <p className="stat-label">{course.description}</p>
                  <span className="stat-change positive">{course.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Growth Graph */}
        <section className="charts-section">
          <div className="student-growth-card">
            <div className="card-header">
              <h3>Student Growth</h3>
              <select className="period-select">
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
            </div>

            <div className="growth-stats">
              <div className="growth-item">
                <span className="growth-amount">1,240 Students</span>
                <span className="growth-change positive">+320 this month</span>
              </div>
            </div>

            <div className="chart-container">
              <svg className="growth-chart" viewBox="0 0 400 150">
                <path d="M0,130 Q50,110 100,115 T200,90 T300,70 T400,60" stroke="#3b82f6" strokeWidth="2" fill="rgba(59,130,246,0.1)" />
                <path d="M0,140 Q50,120 100,125 T200,100 T300,90 T400,80" stroke="#10b981" strokeWidth="2" fill="rgba(16,185,129,0.1)" />
              </svg>
            </div>

            <div className="chart-legend">
              <div className="legend-item"><span className="legend-color students"></span><span>Actual Students</span></div>
              <div className="legend-item"><span className="legend-color target"></span><span>Target Growth</span></div>
            </div>
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="period-selector">
          <label>Change Period</label>
          <select className="period-dropdown">
            <option>1 Jan, 2022 - 1 Jan, 2023</option>
          </select>
        </div>

        <div className="calendar-widget">
          <div className="calendar-header">
            <h3>Event Calendar</h3>
            <div className="calendar-nav">
              <ChevronLeft className="w-4 h-4 cursor-pointer" />
              <span>Feb 2022</span>
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
                  className={`calendar-date ${hasEvents.includes(date) ? 'has-event' : ''} ${selectedDate === date ? 'active' : ''}`}
                  onClick={() => setSelectedDate(date)}
                  title={hasEvents.includes(date) ? 'Event Scheduled' : ''}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
          <div className="events-count">{hasEvents.length} Events</div>
        </div>

        <div className="upcoming-events">
          <div className="events-header">
            <h3>Upcoming Events</h3>
            <button className="view-more">View More</button>
          </div>
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
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
          <button className="new-events-btn">+ New Events</button>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
