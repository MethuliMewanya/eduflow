import { useLocation, useNavigate } from 'react-router-dom';

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="container mt-5">
        <h4>No data available. Please go back and submit the form.</h4>
        <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
          Go Back
        </button>
      </div>
    );
  }

  const { subject, level, videos } = state;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📚 {subject.toUpperCase()} - {level} Level Recommendations</h2>

      <ul className="list-group">
        {videos.map((url: string, idx: number) => (
          <li key={idx} className="list-group-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>

      <button className="btn btn-outline-primary mt-4" onClick={() => navigate('/')}>
        🔁 Try Another
      </button>
    </div>
  );
}

export default Results;
