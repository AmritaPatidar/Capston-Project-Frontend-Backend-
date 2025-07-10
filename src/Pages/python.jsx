import React, { useState } from 'react';
import './details.css';

const studyData = [
  {
    title: "Introduction to Python",
    time: "9:00 AM - 10:00 AM",
    shortVideos: [
      { url: "https://www.youtube.com/embed/_uQrJ0TkZlc", completed: true }, // Python crash course
      { url: "https://www.youtube.com/embed/kqtD5dpn9C8", completed: false }, // Python for Beginners
    ],
    longVideos: [
      { url: "https://www.youtube.com/embed/rfscVS0vtbw", completed: true }, // freeCodeCamp full course
    ],
  },
  {
    title: "Data Types & Variables",
    time: "10:15 AM - 11:15 AM",
    shortVideos: [
      { url: "https://www.youtube.com/embed/hEgO047GxaQ", completed: false },
      { url: "https://www.youtube.com/embed/dPRtcRwKo-Y", completed: false },
    ],
    longVideos: [
      { url: "https://www.youtube.com/embed/A5V1flCihOA", completed: true },
    ],
  },
  {
    title: "Functions & Loops",
    time: "11:30 AM - 12:30 PM",
    shortVideos: [
      { url: "https://www.youtube.com/embed/7wnove7K-ZQ", completed: true }, // functions
      { url: "https://www.youtube.com/embed/WGJJIrtnfpk", completed: false }, // loops
    ],
    longVideos: [
      { url: "https://www.youtube.com/embed/6iF8Xb7Z3wQ", completed: false }, // loops & functions
    ],
  },
  {
    title: "Object-Oriented Python",
    time: "12:45 PM - 1:45 PM",
    shortVideos: [
      { url: "https://www.youtube.com/embed/ZDa-Z5JzLYM", completed: true },
    ],
    longVideos: [
      { url: "https://www.youtube.com/embed/JeznW_7DlB0", completed: false },
    ],
  },
  {
    title: "File Handling & Exceptions",
    time: "2:00 PM - 3:00 PM",
    shortVideos: [
      { url: "https://www.youtube.com/embed/Uh2ebFW8OYM", completed: false },
    ],
    longVideos: [
      { url: "https://www.youtube.com/embed/qXso2zdi9i8", completed: false },
    ],
  },
];


export default PythonSchedule;
