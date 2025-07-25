import { useState } from 'react';
import axios from 'axios';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { subject, marks: Number(marks), level };
      const response = await axios.post('http://localhost:5000/api/submit', payload);
      alert('Data sent successfully!');
    } catch (error) {
      alert('Failed to send data.');
      console.error(error);
    }
  };

  return (
    <div className="landing-container">
      <nav className="navbar">
        <a href="#about" className="nav-link">About EduFlow</a>
        <a href="#team" className="nav-link">Our Team</a>
      </nav>

      <main className="content">
        <h1>Welcome to EduFlow</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
          />
          <select value={level} onChange={(e) => setLevel(e.target.value as any)}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <button type="submit">Send to Backend</button>
        </form>
      </main>

      <footer className="footer">
        <p>© 2025 EduFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
