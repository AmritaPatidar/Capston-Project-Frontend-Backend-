// src/Pages/QuizGame.jsx
import React, { useState } from 'react';
import './quiz.css';

const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//"
  }
];

const QuizGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelected(null);
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartGame = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  return (
    <div className="quiz-container">
      <h1>🎯 E-Learning Quiz</h1>

      {showResult ? (
        <div className="result-section">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button className="restart-btn" onClick={restartGame}>Try Again</button>
        </div>
      ) : (
        <div className="question-card">
          <h3>Q{current + 1}. {questions[current].question}</h3>
          <div className="options">
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                className={`option-btn ${
                  selected
                    ? option === questions[current].answer
                      ? 'correct'
                      : option === selected
                      ? 'wrong'
                      : ''
                    : ''
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={selected}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="progress">Question {current + 1} of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
