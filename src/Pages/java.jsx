import React, { useState } from 'react';
import './java.css';

const studyData = [
  {
    title: "Java Introduction & Setup",
    time: "9:00 AM - 10:00 AM",
    shortVideos: [
      {
        url: "https://www.youtube.com/embed/eIrMbAQSU34", // Java Intro
        completed: true,
      },
      {
        url: "https://www.youtube.com/embed/grEKMHGYyns", // Java Setup
        completed: false,
      },
    ],
    longVideos: [
      {
        url: "https://www.youtube.com/embed/GoXwIVyNvX0", // Java full course
        completed: false,
      },
    ],
  },
  {
    title: "OOPs & Inheritance",
    time: "10:15 AM - 11:15 AM",
    shortVideos: [
      {
        url: "https://www.youtube.com/embed/8cm1x4bC610", // OOPs concepts
        completed: false,
      },
    ],
    longVideos: [
      {
        url: "https://www.youtube.com/embed/VVDFyUfe5kQ", // Inheritance in Java
        completed: true,
      },
    ],
  },
];

const JavaSchedule = () => {
  const [videoType, setVideoType] = useState("All");
  const [filterType, setFilterType] = useState("All");

  const filterVideos = (videos) =>
    videos.filter((v) =>
      filterType === "All"
        ? true
        : filterType === "Completed"
        ? v.completed
        : !v.completed
    );

  const getFilteredVideos = (item) => {
    let videos = [];
    if (videoType === "Short") videos = filterVideos(item.shortVideos);
    else if (videoType === "Long") videos = filterVideos(item.longVideos);
    else videos = filterVideos([...item.shortVideos, ...item.longVideos]);
    return videos;
  };

  const totalVideos = studyData.reduce(
    (acc, item) =>
      acc + [...item.shortVideos, ...item.longVideos].length,
    0
  );
  const completedVideos = studyData.reduce(
    (acc, item) =>
      acc +
      [...item.shortVideos, ...item.longVideos].filter(
        (v) => v.completed
      ).length,
    0
  );

  return (
    <div className="study-schedule-container"><br /> <br />
      <h2 className="schedule-heading">☕ Java Lecture Schedule ({videoType} / {filterType})</h2>

      <div className="progress-bar">
        <p>
          Progress: {completedVideos}/{totalVideos} completed
        </p>
        <div className="bar-track">
          <div
            className="bar-fill"
            style={{
              width: `${(completedVideos / totalVideos) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="filter-buttons">
        <div>
          <span>Video Type:</span>
          {["All", "Short", "Long"].map((type) => (
            <button
              key={type}
              className={videoType === type ? "active" : ""}
              onClick={() => setVideoType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div>
          <span>Status:</span>
          {["All", "Completed", "Pending"].map((type) => (
            <button
              key={type}
              className={filterType === type ? "active" : ""}
              onClick={() => setFilterType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {studyData.map((item, index) => {
        const videos = getFilteredVideos(item);
        const watched = videos.filter((v) => v.completed).length;
        const remaining = videos.length - watched;

        return (
          <div className="schedule-card" key={index}>
            <div className="schedule-header">
              <h3>{item.title}</h3>
              <span className="schedule-time">{item.time}</span>
            </div>

            <p className="video-counts">
              Watched: {watched} | Remaining: {remaining}
            </p>

            <div className="video-list">
              {videos.length === 0 ? (
                <p className="no-videos">No videos to display.</p>
              ) : (
                videos.map((video, i) => (
                  <div className="video-item" key={i}>
                    <p className="video-number">{i + 1}.</p>
                    <iframe
                      src={video.url}
                      title={`video-${i}`}
                      allowFullScreen
                    />
                    <span
                      className={`badge ${
                        video.completed ? "completed" : "pending"
                      }`}
                    >
                      {video.completed ? "✔ Completed" : "⏳ Not Completed"}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JavaSchedule;
