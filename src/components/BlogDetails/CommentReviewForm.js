 


import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from '../../api/config/apiConfig';

const CommentReviewForm = ({ blogId }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    comments: "",
    review: "",
    blog_id: "",  
  });

 
  useEffect(() => {
    if (blogId) {
      setFormData((prev) => ({
        ...prev,
        blog_id: blogId,
      }));
    }
  }, [blogId]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleStarClick = (rating) => {
    setFormData((prev) => ({
      ...prev,
      review: rating,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting review with data:", formData); // debug line
      
      // const response = await axios.post("http://192.168.1.12:8000/api/save-review", formData);
      const response = await axios.post(`${API_BASE_URL}/api/save-review`, formData);
      console.log("Review submitted:", response.data);
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error.response?.data || error.message);
      alert("Failed to submit review.");
    }
  };

  return (
     <div className="comment-form">
      <div className="group-title"><h4>Add Your Reviews</h4></div>

      <div className="rating-box mb-3">
        <div className="text mb-1">Your Rating:</div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`fa fa-star me-1 ${formData.review >= star ? "text-warning" : "text-secondary"}`}
            style={{ cursor: "pointer" }}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>

      <form onSubmit={submitHandler}>
        <div className="row clearfix">
          <div className="col-md-6 form-group">
            <label>First Name*</label>
            <input
              type="text"
              name="first_name"
              className="form-control"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-6 form-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-12 form-group">
            <label>Phone Number*</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-12 form-group">
            <label>Your Comments*</label>
            <textarea
              name="comments"
              className="form-control"
              rows="4"
              value={formData.comments}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-12 form-group">
            <button className="btn btn-primary" type="submit">
              Submit Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentReviewForm;

