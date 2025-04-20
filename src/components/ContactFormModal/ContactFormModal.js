import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import './ContactFormModal.css';

const ContactFormModal = ({ show, handleClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    message: ''
  });

  const closeModal = () => {
    handleClose();
    // Reset form after hiding modal
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          location: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 300);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    
    // Show thank you message
    setSubmitted(true);
    
    // Close modal after showing thank you message
    setTimeout(closeModal, 3000);
  };

  return (
    <Modal 
      show={show} 
      onHide={closeModal}
      centered
      className="cfm-contact-modal"
    >
      <Modal.Header closeButton  >
      <Modal.Title style={{ color: 'white' }}>Request a Quote</Modal.Title>

      </Modal.Header>
      <Modal.Body>
        {submitted ? (
          <Alert variant="success" className="cfm-thank-you-message">
            <h4>Thank you for your message!</h4>
            <p>We've received your request and will contact you shortly.</p>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            {/* Form fields */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                required
              />
            </Form.Group>

             

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
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
            </Form.Group>

            <div className="cfm-button-group">
              <Button variant="secondary" onClick={closeModal} className="cfm-cancel-btn">
                Cancel
              </Button>
              <Button type="submit" className="cfm-submit-btn">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ContactFormModal;