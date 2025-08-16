import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Results.css'; 

/*
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
*/


////////////////////////////////////////////Tumbnails - successful
/*
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

  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/v=([^&]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : '';
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📚 {subject.toUpperCase()} - {level} Level Recommendations</h2>

      <div className="row">
        {videos.map((url: string, idx: number) => (
          <div key={idx} className="col-md-6 mb-4">
            <div className="ratio ratio-16x9 border rounded shadow-sm">
              <iframe
                src={getEmbedUrl(url)}
                title={`YouTube video ${idx + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-primary" onClick={() => navigate('/')}>
          🔁 Try Another
        </button>
      </div>
    </div>
  );
}

export default Results;*/

/////////////////////////////Thumbnails + Titles
/*
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

  const getEmbedUrl = (url: string) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-2 text-center">📚 {subject.toUpperCase()} - {level} Level Recommendations</h2>
      <p className="text-muted text-center">{videos.length} hand-picked learning videos just for you!</p>

      <div className="row">
        {videos.map((video: { url: string; title: string }, idx: number) => {
          const embedUrl = getEmbedUrl(video.url);
          if (!embedUrl) return null;

          return (
            <div key={idx} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100 border-0 hover-card">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="card-body text-center">
                  <p className="card-text fw-semibold">{video.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-primary" onClick={() => navigate('/')}>
          🔁 Try Another
        </button>
      </div>
    </div>
  );
}

export default Results;
*/

///////////////////////////////////////// with styles
function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="results-page">
        <div className="empty-card">
          <h4 className="text-danger">⚠ No data available</h4>
          <p className="text-muted">Please go back and submit the form.</p>
          <button className="btn-primary mt-3" onClick={() => navigate("/")}>
            ⬅ Go Back
          </button>
        </div>
      </div>
    );
  }

  const { subject, level, videos } = state;

  const getEmbedUrl = (url: string) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  return (
    <div className="results-page">
      {/* Header with logo */}
      <header className="results-header">
        <img src="/logo1.png" alt="EduFlow Logo" className="logo" />
      </header>
      {/* Heading */}  
      <h2 className="results-heading">
         {subject.toUpperCase()}
      </h2>
      <h2 className="results-heading">
         {level} Level Recommendations
      </h2>
      <p className="results-subtitle">
        {videos.length} hand-picked learning videos just for you!
      </p>

      {/* Video Grid */}
      <div className="results-grid">
        {videos.map((video: { url: string; title: string }, idx: number) => {
          const embedUrl = getEmbedUrl(video.url);
          if (!embedUrl) return null;

          return (
            <div key={idx} className="video-card">
              <div className="video-frame">
                <iframe
                  src={embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="video-body">
                <p className="video-title">{video.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="text-center mt-4">
        <button className="btn-primary" onClick={() => navigate("/")}>
          Try Another
        </button>
      </div>
      
      {/*Footer*/}
      <footer className="results-footer">
        © Mavericks Quad 2025 | All Rights Reserved
      </footer>
    </div>
  );
}

export default Results;