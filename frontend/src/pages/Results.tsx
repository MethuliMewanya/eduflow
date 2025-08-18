import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Results.scss';

/////////////////////////////Thumbnails + Titles
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
      <h2 className="mb-2 text-center">{subject.toUpperCase()}</h2>
      <h2 className="mb-2 text-center"> {level} Level Recommendations</h2>
      <p className="text-muted text-center mt-2 mb-4">{videos.length} hand-picked learning videos just for you!</p>

      <div className="row mt-4 justify-content-center">
        {videos.map((video: { url: string; title: string }, idx: number) => {
          const embedUrl = getEmbedUrl(video.url);
          if (!embedUrl) return null;

          return (
            <div key={idx} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow h-100 border rounded hover-card">
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

      <div className="text-center mt-4 mb-4">
        <button className="video-recommendation__button" onClick={() => navigate('/')}>
          Want To Explore Another Subject ?
        </button>
      </div>
    </div>
  );
}

export default Results;

