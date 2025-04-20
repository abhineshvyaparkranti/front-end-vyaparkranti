// File: src/components/GallerySkeleton.js
import React from 'react';

const GallerySkeleton = ({ count = 6 }) => {
  // Create an array with the specified count
  const skeletons = Array.from({ length: count }, (_, index) => index);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {skeletons.map((index) => (
        <div key={index} className="col">
          <div className="card h-100 shadow-sm">
            {/* Image placeholder */}
            <div className="skeleton-img" style={{ height: '200px' }}></div>
            
            {/* Content placeholder */}
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="skeleton-circle me-3"></div>
                <div className="skeleton-title"></div>
              </div>
              <div className="skeleton-text mb-2"></div>
              <div className="skeleton-text mb-2" style={{ width: '70%' }}></div>
              <div className="skeleton-btn mt-auto"></div>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes skeleton-loading {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        .skeleton-img,
        .skeleton-circle,
        .skeleton-title,
        .skeleton-text,
        .skeleton-btn {
          background-color: #e9ecef;
          background-image: linear-gradient(90deg, #e9ecef, #f8f9fa, #e9ecef);
          background-size: 200px 100%;
          background-repeat: no-repeat;
          border-radius: 4px;
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }
        
        .skeleton-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        
        .skeleton-title {
          height: 24px;
          width: 60%;
        }
        
        .skeleton-text {
          height: 16px;
          width: 100%;
        }
        
        .skeleton-btn {
          height: 24px;
          width: 100px;
          margin-top: 12px;
        }
      `}</style>
    </div>
  );
};

export default GallerySkeleton;