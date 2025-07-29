
//import './App.css'
//import LandingPage from './components/LandingPage';


//function App() {
//  return <LandingPage />
//}

//export default App



////////////////////////////////////////////////////////////// BELANI

//import { useState } from 'react';
//import './App.css';

//function App() {
//  const [subject, setSubject] = useState('');
//  const [marks, setMarks] = useState('');
//  const [result, setResult] = useState<{ level: string; videos: string[] } | null>(null);

//  const handleSubmit = async () => {
//    const res = await fetch('http://localhost:9090/recommend/video', {
//      method: 'POST',
//      headers: { 'Content-Type': 'application/json' },
//      body: JSON.stringify({ subject, marks: parseInt(marks) }),
//    });
//    const data = await res.json();
//    setResult({ subject, ...data });
//  };

//  return (
//    <div>
//      <h1>EduFlow - Video Recommendation</h1>
//      <input
//        placeholder="Subject (math/science)"
//        value={subject}
//        onChange={(e) => setSubject(e.target.value)}
//      />
//      <input
//        type="number"
//        placeholder="Marks"
//        value={marks}
//        onChange={(e) => setMarks(e.target.value)}
//      />
//      <button onClick={handleSubmit}>Get Videos</button>

//      {result && (
//        <div>
//          <h2>{result.level} Level Videos</h2>
//          <ul>
//            {result.videos.map((url, index) => (
//              <li key={index}>
//                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
//              </li>
//            ))}
//          </ul>
//        </div>
//      )}
//    </div>
//  );
//}

//export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );

}

export default App;
