// src/Pages/Attendance.jsx
import React from 'react';
import './atten.css';

const Attendance = () => {
  const subjects = [
    { name: 'HTML & CSS', present: 20, absent: 3, late: 2, total: 25 },
    { name: 'JavaScript', present: 18, absent: 5, late: 2, total: 25 },
    { name: 'React.js', present: 22, absent: 2, late: 1, total: 25 },
    { name: 'Python', present: 15, absent: 8, late: 2, total: 25 },
    { name: 'Java', present: 19, absent: 4, late: 2, total: 25 },
  ];

  return (
    <div className="attendance-page">
      <h1 className="page-title">📆 Attendance Overview</h1>

      <div className="subject-attendance">
        {subjects.map((subject, index) => {
          const { name, present, absent, late, total } = subject;
          const percentage = Math.round((present / total) * 100);

          return (
            <div key={index} className="subject-card">
              <div className="progress-ring">
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="10" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#3b82f6"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="251"
                    strokeDashoffset={251 - (251 * percentage) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="progress-text">{percentage}%</div>
              </div>
              <div className="subject-details">
                <h3>{name}</h3>
                <p>✅ Present: {present}</p>
                <p>❌ Absent: {absent}</p>
                <p>🟡 Late: {late}</p>
                <p>📅 Total: {total}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="calendar-title">📅 Monthly Calendar Record (June)</h2>
      <div className="calendar">
        {[...Array(30)].map((_, i) => {
          const day = i + 1;
          const isPresent = day % 6 !== 0 && day % 7 !== 0;
          const isLate = day % 5 === 0;
          const status = isPresent ? (isLate ? 'Late' : 'Present') : 'Absent';

          return (
            <div key={i} className={`calendar-day ${status.toLowerCase()}`}>
              <span className="day-num">{day}</span>
              <span className="status-text">{status}</span>
            </div>
          );
        })}
      </div>

      <div className="summary-box">
        <h2>📌 Summary</h2>
        <p>
          Your overall attendance is <strong>83%</strong>. Make sure to maintain at least 75% attendance to be eligible for final exams. Late marks may reduce your internal assessment score.
        </p>
        <p>
          Last absent on <strong>June 22</strong> (Friday). Try to maintain consistency to improve performance and grades.
        </p>
      </div>
    </div>
  );
};

export default Attendance;
