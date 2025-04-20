 // File: src/components/ProjectModal.js
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  // Define color mappings for Bootstrap
  const colorMap = {
    blue: 'primary',
    purple: 'purple', // Custom color to be added in additional styles
    green: 'success',
    red: 'danger',
    yellow: 'warning',
    indigo: 'indigo', // Custom color to be added in additional styles
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!project) return null;
  
  // Modal transition styles
  const modalStyles = {
    transition: 'opacity 0.3s, transform 0.3s',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.95)'
  };
  
  // Backdrop styles
  const backdropStyles = {
    transition: 'opacity 0.3s',
    opacity: isOpen ? 1 : 0,
    backdropFilter: 'blur(4px)'
  };
  
  return (
    <div className={`modal fade ${isOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-hidden={!isOpen}>
      {/* Backdrop */}
      <div 
        className="modal-backdrop bg-dark opacity-50" 
        style={backdropStyles}
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" style={modalStyles}>
        <div className="modal-content">
          {/* Modal Header */}
          <div className={`modal-header bg-${colorMap[project.color]} text-white py-4`}>
            <div className="d-flex align-items-center">
              <div className="me-3 bg-white bg-opacity-25 p-3 rounded-circle">
                {project.icon}
              </div>
              <div>
                <h3 className="modal-title fs-4 fw-bold">{project.title}</h3>
                <p className="mb-0 opacity-75">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          
          {/* Modal Body */}
          <div className="modal-body p-4">
            <h4 className="fs-5 fw-semibold text-dark mb-2">Overview</h4>
            <p className="text-secondary mb-4">{project.description}</p>
            
            <h4 className="fs-5 fw-semibold text-dark mb-2">Details</h4>
            <p className="text-secondary mb-4">{project.details}</p>
            
            <h4 className="fs-5 fw-semibold text-dark mb-2">Benefits</h4>
            <ul className="ps-4 mb-4 text-secondary">
              <li className="mb-1">Improved operational efficiency</li>
              <li className="mb-1">Reduced maintenance costs</li>
              <li className="mb-1">Enhanced security measures</li>
              <li className="mb-1">Scalable infrastructure</li>
            </ul>
            
            <div className="d-flex flex-wrap justify-content-between align-items-center border-top border-light pt-4 mt-4">
              <div>
                <p className="text-secondary small mb-1">Ready to learn more?</p>
                <p className="text-dark">Contact our team for a consultation</p>
              </div>
              <button className={`btn btn-${colorMap[project.color]} px-4`}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for the additional colors and modal styling */}
      <style jsx>{`
        /* Additional Bootstrap-friendly colors */
        .bg-purple {
          background-color: #9b59b6 !important;
        }
        .bg-indigo {
          background-color: #5352ed !important;
        }
        .btn-purple {
          background-color: #9b59b6 !important;
          border-color: #9b59b6 !important;
          color: white !important;
        }
        .btn-indigo {
          background-color: #5352ed !important;
          border-color: #5352ed !important;
          color: white !important;
        }
        
        /* Custom modal styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1050;
          overflow: hidden;
          outline: 0;
        }
        
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1040;
        }
        
        .bg-opacity-25 {
          opacity: 0.25;
        }
        
        /* Fix for modal close button positioning */
        .modal-header .btn-close {
          margin: -0.5rem -0.5rem -0.5rem auto;
        }
        
        /* Ensure modal displays properly in center */
        .d-block {
          display: block !important;
        }
        
        .modal-dialog-centered {
          display: flex;
          align-items: center;
          min-height: calc(100% - 1rem);
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;