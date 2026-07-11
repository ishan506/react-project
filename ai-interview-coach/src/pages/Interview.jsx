 import { useState } from "react";
import "../InterviewSetup.css";

function Interview() {
  const [role, setRole] = useState("Frontend Developer");
  const [level, setLevel] = useState("Fresher");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState("10");
  const [type, setType] = useState("Technical");
  const [language, setLanguage] = useState("English");
  const [timer, setTimer] = useState("60 Seconds");

  const startInterview = () => {
    alert("Interview Started!");
  };

  return (
    <section className="setup">
      <div className="setup-card">
        <h1>Interview Setup</h1>

        <p>Select your interview preferences.</p>

        <div className="grid">

          <div className="field">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          <div className="field">
            <label>Experience</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option>Fresher</option>
              <option>1-2 Years</option>
              <option>3+ Years</option>
            </select>
          </div>

          <div className="field">
            <label>Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="field">
            <label>Questions</label>
            <select
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>

          <div className="field">
            <label>Interview Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option>Technical</option>
              <option>HR</option>
              <option>Mixed</option>
            </select>
          </div>

          <div className="field">
            <label>Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="field">
            <label>Timer</label>
            <select value={timer} onChange={(e) => setTimer(e.target.value)}>
              <option>30 Seconds</option>
              <option>60 Seconds</option>
              <option>90 Seconds</option>
            </select>
          </div>

        </div>

        <button className="start-btn" onClick={startInterview}>
          Start Interview
        </button>
      </div>
    </section>
  );
}

export default Interview;