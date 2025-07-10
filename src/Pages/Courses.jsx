import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './courses.css';

const courseList = [
  {
    id: 1,
    title: 'Full Stack Development',
    desc: 'Complete MERN Stack Development',
    videos: [
      'https://www.youtube.com/embed/Zftx68K-1D4',
      'https://www.youtube.com/embed/3JluqTojuME',
      'https://www.youtube.com/embed/bMknfKXIFA8',
      'https://www.youtube.com/embed/l1rOfBM6c1E',
      'https://www.youtube.com/embed/Oe421EPjeBE',
      'https://www.youtube.com/embed/K1naz9wBwKU',
      'https://www.youtube.com/embed/Ke90Tje7VS0',
      'https://www.youtube.com/embed/vjf774RKrLc'
    ]
  },
  {
    id: 2,
    title: 'Python Programming',
    desc: 'Learn Python from Basics to Advanced',
    videos: [
      'https://www.youtube.com/embed/_uQrJ0TkZlc',
      'https://www.youtube.com/embed/kqtD5dpn9C8',
      'https://www.youtube.com/embed/7wnove7K-ZQ',
      'https://www.youtube.com/embed/Y8Tko2YC5hA',
      'https://www.youtube.com/embed/rrB13utjYV4',
      'https://www.youtube.com/embed/H1elmMBnykA',
      'https://www.youtube.com/embed/QXeEoD0pB3E',
      'https://www.youtube.com/embed/rfscVS0vtbw'
    ]
  },
  {
    id: 3,
    title: 'Java Programming',
    desc: 'Java Core + OOP + Projects',
    videos: [
      'https://www.youtube.com/embed/eIrMbAQSU34',
      'https://www.youtube.com/embed/GoXwIVyNvX0',
      'https://www.youtube.com/embed/hBh_CC5y8-s',
      'https://www.youtube.com/embed/grEKMHGYyns',
      'https://www.youtube.com/embed/UmnCZ7-9yDY',
      'https://www.youtube.com/embed/8cm1x4bC610',
      'https://www.youtube.com/embed/vRFE6YcEa2E',
      'https://www.youtube.com/embed/lGWTs3Zz9MI'
    ]
  },
  {
    id: 4,
    title: 'Data Science',
    desc: 'Machine Learning, Pandas, NumPy, Matplotlib',
    videos: [
      'https://www.youtube.com/embed/ua-CiDNNj30',
      'https://www.youtube.com/embed/r-uOLxNrNk8',
      'https://www.youtube.com/embed/0Lt9w-BxKFQ',
      'https://www.youtube.com/embed/vuYFzKnLa0U',
      'https://www.youtube.com/embed/oH3uMdDdXdo',
      'https://www.youtube.com/embed/Y6RRHw9uN9o',
      'https://www.youtube.com/embed/kHwlB_j7Hkc',
      'https://www.youtube.com/embed/wz3sSgQ3z1Q'
    ]
  }
];

const FullCoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courseList.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="video-page">
      <header className="video-header">
        <h1>📚 Miracle IT Career Academy - Video Courses</h1>
        <p>Watch full free video lectures from our top programs</p>
        <input
          type="text"
          placeholder="Search course name..."
          className="video-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <div className="courses-container">
        {filteredCourses.map(course => (
          <div className="course-block" key={course.id}>
            <motion.h2
              className="course-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {course.title}
            </motion.h2>
            <p className="course-desc">{course.desc}</p>

            <div className="videos-grid">
              {course.videos.map((url, idx) => (
                <motion.div
                  className="video-card"
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <iframe
                    src={url}
                    title={`Video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        {filteredCourses.length === 0 && (
          <p className="no-result">No matching course found</p>
        )}
      </div>
    </div>
  );
};

export default FullCoursesPage;
