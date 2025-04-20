import React from 'react';
import './VideoGallery.css'; // We'll add hover styles here

const videos = [
  {
    id: 1,
    title: "React Intro",
    thumbnail: "https://img.youtube.com/vi/dGcsHMXbSOA/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA"
  },
  {
    id: 2,
    title: "React Hooks",
    thumbnail: "https://img.youtube.com/vi/f687hBjwFcM/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/f687hBjwFcM"
  },
  {
    id: 3,
    title: "React Routing",
    thumbnail: "https://img.youtube.com/vi/Law7wfdg_ls/mqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Law7wfdg_ls"
  },
];

const VideoGallery = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 animate__animated animate__fadeInDown">Video Gallery</h2>
      <div className="row g-4">
        {videos.map(video => (
          <div key={video.id} className="col-md-4">
            <div className="card video-card h-100 shadow-sm animate__animated animate__zoomIn">
              <div className="video-thumb">
                <img src={video.thumbnail} alt={video.title} className="card-img-top" />
                <div className="overlay">
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light btn-sm"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
