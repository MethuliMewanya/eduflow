/*
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:9191/recommend/video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, marks: parseInt(marks) }),
    });

    const data = await res.json();
    navigate('/results', { state: { subject, ...data } });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🎓 EduFlow - Get Video Recommendations</h2>

      <div className="mb-3">
        <label className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., math or science"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Marks</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter your marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Get Recommendations
      </button>
    </div>
  );
}

export default Home;
*/

// Card Styles added//
/*
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:9191/recommend/video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, marks: parseInt(marks) }),
    });

    const data = await res.json();
    navigate('/results', { state: { subject, ...data } });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-center text-primary mb-4">
            🎓 EduFlow - Get Video Recommendations
          </h2>

          <div className="mb-3">
            <label className="form-label fw-bold text-secondary">Subject</label>
            <input
              type="text"
              className="form-control border-primary"
              placeholder="e.g., math or science"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold text-secondary">Marks</label>
            <input
              type="number"
              className="form-control border-success"
              placeholder="Enter your marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary w-100 fw-bold"
            onClick={handleSubmit}
          >
            🚀 Get Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // ✅ Import CSS

function Home() {
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const marksNum = Number.parseInt(marks, 10);
    const res = await fetch("http://localhost:9191/recommend/video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, marks: marksNum }),
    });

    const data = await res.json();
    navigate("/results", { state: { subject, ...data } });
  };

  return (
    <div className="home-container">
      <div className="card glass-card shadow-lg border-0 p-4 p-md-5">
        <div className="card-body">
          <div className="text-center mb-3">
            <img src="/logo1.png" alt="EduFlow Logo" className="logo-img mb-2" />
          </div>
          <p className="brand-title text-center text-muted mb-4">Get Video Recommendations</p>

          <div className="row g-3">
            {/* Subject */}
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold text-primary-edu">
                Subject
              </label>
              <input
                type="text"
                className="form-control form-control-edu"
                placeholder="Ex: ICT Grade 11 / Hydrolics"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Marks */}
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold text-primary-edu">
                Marks
              </label>
              <input
                type="number"
                className="form-control form-control-edu"
                placeholder="Enter your marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
              />
            </div>
          </div>

          <button
            className="btn btn-gradient w-100 fw-bold mt-4"
            onClick={handleSubmit}
          >
            🚀 Get Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
