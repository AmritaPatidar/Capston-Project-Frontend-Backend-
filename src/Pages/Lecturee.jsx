// src/Pages/LectureProgress.jsx
import React from 'react';
import './lectures.css'; // ✅ This works if your CSS file is named "LectureProgress.css"

import { CheckCircle, Clock, PlayCircle } from 'lucide-react';

const LectureProgress = () => {
  const lectures = [
    { title: 'HTML Basics', status: 'completed' },
    { title: 'CSS Fundamentals', status: 'completed' },
    { title: 'JavaScript Intro', status: 'pending' },
    { title: 'React Overview', status: 'remaining' },
    { title: 'Node.js Basics', status: 'remaining' },
  ];

  const total = lectures.length;
  const completed = lectures.filter(l => l.status === 'completed').length;
  const pending = lectures.filter(l => l.status === 'pending').length;
  const remaining = lectures.filter(l => l.status === 'remaining').length;
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="lecture-page">
      <h2 className="page-title">📚 My Lecture Progress</h2>

      <div className="stats-box">
        <div className="stat completed">
          <CheckCircle /> <span>Completed: {completed}</span>
        </div>
        <div className="stat pending">
          <Clock /> <span>Pending: {pending}</span>
        </div>
        <div className="stat remaining">
          <PlayCircle /> <span>Remaining: {remaining}</span>
        </div>
        <div className="stat total">
          📊 <span>Total Lectures: {total}</span>
        </div>
      </div>

      <div className="progress-section">
        <label>Overall Progress</label>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      </div>

      <div className="lecture-list">
        {lectures.map((lecture, index) => (
          <div key={index} className={`lecture-card ${lecture.status}`}>
            <h4>{lecture.title}</h4>
            <span className="status">{lecture.status.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LectureProgress;
