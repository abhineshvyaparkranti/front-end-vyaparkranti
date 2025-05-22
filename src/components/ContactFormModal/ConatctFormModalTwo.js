 import React, { useState } from 'react';
import { Form, Button, Alert, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';
import './ConatctFormModalTwo.css'; // Ensure your CSS filename is correct

const ContactFormModalTwo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        location: formData.location,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await axios.post(`${API_BASE_URL}/api/save-quotes`, payload);
      console.log("Request a quote submitted ==============>:", response.data);

      setSubmitted(true);
      setFormData({
        name: '',
        location: '',
        email: '',
        phone: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong while submitting. Please try again.");
    }
  };

  return (
    <div className="services-modal-wrapper">
      <div className="services-modal-content">
        <h2 className="services-modal-title">Request a Quote</h2>

        {submitted ? (
          <Alert variant="success" className="cfm-thank-you-message">
            <h4>Thank you for your message!</h4>
            <p>We've received your request and will contact you shortly.</p>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  required
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={3}
                  required
                />
              </ListGroup.Item>
            </ListGroup>

            <div className="cfm-button-group mt-3 d-flex justify-content-between">
              <Button
                type="reset"
                variant="secondary"
                className="cfm-cancel-btn"
                onClick={() => setFormData({ name: '', location: '', email: '', phone: '', message: '' })}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary" className="cfm-submit-btn">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ContactFormModalTwo;
