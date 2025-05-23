  import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';
import './ConatctFormModalTwo.css';

const ContactFormModalTwo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    message: '',
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  // Generate random captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    setCaptcha({ num1, num2, answer });
    setCaptchaInput('');
    setCaptchaError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    setCaptchaError('');
  };

  const validateCaptcha = () => {
    const userAnswer = parseInt(captchaInput);
    if (isNaN(userAnswer) || userAnswer !== captcha.answer) {
      setCaptchaError('Incorrect answer. Please try again.');
      generateCaptcha();
      return false;
    }
    return true;
  };

  const validateFormData = () => {
  const { name, location, phone, message } = formData;

  if (!name.trim()) {
    alert("Please enter your name.");
    return false;
  }

  if (!location.trim()) {
    alert("Please enter your location.");
    return false;
  }

  if (!phone.trim() || !/^\+?\d{7,15}$/.test(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  // if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  //   alert("Please enter a valid email address.");
  //   return false;
  // }

  if (!message.trim()) {
    alert("Please enter a message.");
    return false;
  }

  return true;
};


 const handleSubmit = async (e) => {
  e.preventDefault();

  // Step 1: Validate form fields
  if (!validateFormData()) return;

  // Step 2: Validate captcha
  if (!validateCaptcha()) return;

  try {
    const payload = {
      name: formData.name,
      location: formData.location,
      // email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    const response = await axios.post(`${API_BASE_URL}/api/save-quotes`, payload);
    console.log("Request a quote submitted:", response.data);

    setSubmitted(true);
    setFormData({ name: '', location: '', phone: '', message: '' });
    generateCaptcha();

    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong while submitting. Please try again.");
  }
};


  const refreshCaptcha = () => generateCaptcha();

  // Generate a new captcha when component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

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
          <Form onSubmit={handleSubmit}  >
            <ListGroup variant="flush">
              <ListGroup.Item >
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

            {/* Captcha Section */}
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Captcha*</Form.Label>
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  padding: '10px',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #dee2e6',
                  borderRadius: '4px'
                }}
              >
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  {captcha.num1} + {captcha.num2} = ?
                </span>
                <Form.Control
                  type="number"
                  value={captchaInput}
                  onChange={handleCaptchaChange}
                  placeholder="Answer"
                  style={{ width: '104px' }}
                  required
                />
                <Button 
                  variant="outline-secondary" 
                  size="sm" 
                  onClick={refreshCaptcha}
                  type="button"
                  title="Refresh Captcha"
                >
                  🔄
                </Button>
              </div>
              {captchaError && (
                <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                  {captchaError}
                </div>
              )}
            </Form.Group>

            <div className="cfm-button-group mt-3 d-flex justify-content-between">
              <Button
                type="reset"
                variant="secondary"
                className="cfm-cancel-btn"
                onClick={() => {
                  setFormData({ name: '', location: '', email: '', phone: '', message: '' });
                  generateCaptcha();
                }}
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
