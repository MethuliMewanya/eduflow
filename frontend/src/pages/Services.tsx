import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {
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

export default Services;
