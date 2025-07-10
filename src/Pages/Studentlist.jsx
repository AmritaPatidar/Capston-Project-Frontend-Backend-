import React, { useState } from 'react';
import './Studentlist.css';

const StudentListByCourse = () => {
  const initialStudents = [
    { id: 1, name: "Aman Sharma", course: "Full Stack" },
    { id: 2, name: "Riya Patel", course: "Java" },
    { id: 3, name: "Soham Mehta", course: "Python" },
    { id: 4, name: "Neha Singh", course: "Full Stack" },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [newName, setNewName] = useState("");
  const [newCourse, setNewCourse] = useState("Full Stack");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editCourse, setEditCourse] = useState("");

  const courses = ["Full Stack", "Java", "Python", "Web Design"];

  const handleAddStudent = () => {
    if (!newName.trim()) return;
    const newId = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;
    setStudents([...students, { id: newId, name: newName.trim(), course: newCourse }]);
    setNewName("");
    setNewCourse("Full Stack");
  };

  const handleDelete = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const handleEditClick = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
    setEditCourse(student.course);
  };

  const handleSaveEdit = () => {
    setStudents(students.map(s =>
      s.id === editingId ? { ...s, name: editName.trim(), course: editCourse } : s
    ));
    setEditingId(null);
    setEditName("");
    setEditCourse("");
  };

  const groupByCourse = students.reduce((acc, student) => {
    acc[student.course] = acc[student.course] || [];
    acc[student.course].push(student);
    return acc;
  }, {});

  return (
    <div className="student-list-container">
      <h1 className="heading">🎓 Students Grouped by Course</h1>

      {/* Add Student Form */}
      <div className="add-student-form">
        <input
          type="text"
          placeholder="Enter student name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <select value={newCourse} onChange={(e) => setNewCourse(e.target.value)}>
          {courses.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
        <button onClick={handleAddStudent}>+ Add Student</button>
      </div>

      {/* Grouped Course Sections */}
      <div className="course-sections">
        {Object.entries(groupByCourse).map(([course, studentList]) => (
          <div key={course} className="course-card">
            <h2>{course} ({studentList.length})</h2>
            <ul>
              {studentList.map((s) => (
                <li key={s.id} className="student-item">
                  {editingId === s.id ? (
                    <>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="edit-input"
                      />
                      <select
                        value={editCourse}
                        onChange={(e) => setEditCourse(e.target.value)}
                        className="edit-input"
                      >
                        {courses.map((c, i) => (
                          <option key={i} value={c}>{c}</option>
                        ))}
                      </select>
                      <button className="save-btn" onClick={handleSaveEdit}>Save</button>
                    </>
                  ) : (
                    <>
                      <span className="student-name">{s.name}</span>
                      <span className="student-id">#{s.id}</span>
                      <button onClick={() => handleEditClick(s)} className="edit-btn">Edit</button>
                      <button onClick={() => handleDelete(s.id)} className="delete-btn">Delete</button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentListByCourse;
