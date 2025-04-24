 import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Applyform() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    coverLetter: '',
    resume: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.fullName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('department', formData.department);
      data.append('position_analytics', formData.position);
      data.append('resume', formData.resume);
      data.append('cover_letter', formData.coverLetter);

      // const response = await axios.post('http://192.168.1.12:8000/api/save-apply-data', data);
      const response = await axios.post(`${API_BASE_URL}/api/save-apply-data`, data);
      console.log('Application submitted response============>:', response.data);

      setSubmitted(true);
      
      // Add a short delay before refreshing to ensure the user sees the success message
      setTimeout(() => {
        window.location.reload();
      }, 1500); // 1.5 second delay
      
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="col-lg-4">
      <div className="application-form-wrapper">
        <h3>Apply for this position</h3>

        {submitted ? (
          <div className="alert alert-success">
            Your application has been submitted successfully. We'll be in touch soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="application-form">
            {submitting ? (
              <Skeleton count={10} height={40} style={{ marginBottom: '1rem' }} />
            ) : (
              <>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="department" className="form-label">Department *</label>
                  <select
                    className="form-control"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="HR">Human Resources</option>
                    <option value="Design">Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="position" className="form-label">Position Applying For *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="e.g. Frontend Developer"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">Resume/CV *</label>
                  <input
                    type="file"
                    className="form-control"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <div className="form-text">Accepted formats: PDF, DOC, DOCX</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
                  <textarea
                    className="form-control"
                    id="coverLetter"
                    name="coverLetter"
                    rows="4"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn theme-btn w-100"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default Applyform;
