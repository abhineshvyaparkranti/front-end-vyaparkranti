 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';

import './VideoGallery.css';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // const response = await axios.get("http://192.168.1.12:8000/api/get-video-gallery");
        const response = await axios.get(`${API_BASE_URL}/api/get-video-gallery`);
        if (response.data.status) {
          setVideos(response.data.videoGallery);
        } else {
          console.error("Failed to fetch videos:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching video gallery:", error);
      }
    };

    fetchVideos();
  }, []);

  // Utility to generate YouTube thumbnail from video link
  const getThumbnail = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=))([\w-]{11})/);
    return match ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg` : '';
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 animate__animated animate__fadeInDown">Video Gallery</h2>
      <div className="row g-4">
        {videos.map(video => (
          <div key={video.id} className="col-md-4">
            <div className="card video-card h-100 shadow-sm animate__animated animate__zoomIn">
              <div className="video-thumb">
                <img src={getThumbnail(video.video_link)} alt={video.title} className="card-img-top" />
                <div className="overlay">
                  <a
                    href={video.video_link}
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
