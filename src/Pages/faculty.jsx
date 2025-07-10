import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    { name: "Dashboard", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Attendance", path: "/attendance" },
    { name: "Events", path: "/events" },
    { name: "Logout", path: "/" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">👨‍🏫 Faculty Panel</h2>
        <ul>
          {sidebarItems.map((item, i) => (
            <li
              key={i}
              className="mb-4 cursor-pointer hover:text-yellow-300"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-6">Welcome, Prof. Sharma 👋</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📚 Courses</h3>
            <p>Manage lectures, topics and study materials.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📅 Attendance</h3>
            <p>Track daily attendance and download reports.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📌 Events</h3>
            <p>View upcoming academic events or holidays.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
