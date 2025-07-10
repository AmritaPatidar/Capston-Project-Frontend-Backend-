// src/Pages/FacultyEvents.jsx
import React, { useState } from 'react';
import './event.css';
import { CalendarDays, Clock, MapPin, Plus } from 'lucide-react';

const FacultyEvents = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Workshop on AI Tools",
      date: "2025-07-10",
      time: "10:00 AM",
      location: "Auditorium A",
      description: "A full-day workshop for faculty to learn about new AI tools in education."
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      date: "2025-07-15",
      time: "02:00 PM",
      location: "Room 202",
      description: "Monthly PTM to discuss student performance and feedback."
    },
    {
      id: 3,
      title: "Annual Cultural Fest Planning",
      date: "2025-07-18",
      time: "12:00 PM",
      location: "Conference Hall",
      description: "Planning session for the upcoming annual fest."
    }
  ]);

  return (
    <div className="faculty-events-page">
      <div className="events-header">
        <h1>📅 Upcoming Faculty Events</h1>
        <button className="add-event-btn"><Plus size={16} /> Add Event</button>
      </div>

      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <div className="event-meta">
              <p><CalendarDays size={16} /> {event.date}</p>
              <p><Clock size={16} /> {event.time}</p>
              <p><MapPin size={16} /> {event.location}</p>
            </div>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyEvents;
