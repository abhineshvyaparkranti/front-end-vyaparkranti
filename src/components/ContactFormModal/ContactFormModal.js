//  import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form, Alert } from 'react-bootstrap';
// import axios from 'axios';
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import './ContactFormModal.css';

// const ContactFormModal = ({ show, handleClose }) => {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   // Reset form when the modal is shown
//   useEffect(() => {
//     if (show) {
//       setFormData({
//         name: '',
//         location: '',
//         email: '',
//         phone: '',
//         message: '',
//       });
//       setSubmitted(false); // Reset submitted state when modal is shown
//     }
//   }, [show]);

//   const closeModal = () => {
//     handleClose();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         name: formData.name,
//         location: formData.location,
//         phone: formData.phone,
//         message: formData.message,
//       };

//       // Send form data to the backend API via POST request
//       // const response = await axios.post('http://192.168.1.12:8000/api/save-quotes', payload);
//        const response = await axios.post(`${API_BASE_URL}/api/save-quotes`, payload);

//       console.log("Request a quote submitted form ==============>:", response.data);

//       // Show thank you message
//       setSubmitted(true);

//       // Close modal after showing thank you message
//       setTimeout(closeModal, 3000);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Something went wrong while submitting. Please try again.");
//     }
//   };

//   return (
//     <Modal 
//       show={show} 
//       onHide={closeModal}
//       centered
//       className="cfm-contact-modal"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title style={{ color: 'white' }}>Request a Quote</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {submitted ? (
//           <Alert variant="success" className="cfm-thank-you-message">
//             <h4>Thank you for your message!</h4>
//             <p>We've received your request and will contact you shortly.</p>
//           </Alert>
//         ) : (
//           <Form onSubmit={handleSubmit}>
//             {/* Form fields */}
//             <Form.Group className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Location</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 placeholder="Enter your location"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your phone number"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your message"
//                 rows={3}
//                 required
//               />
//             </Form.Group>

//             <div className="cfm-button-group">
//               <Button variant="secondary" onClick={closeModal} className="cfm-cancel-btn">
//                 Cancel
//               </Button>
//               <Button type="submit" className="cfm-submit-btn">
//                 Submit
//               </Button>
//             </div>
//           </Form>
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ContactFormModal;

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import './ContactFormModal.css';

const ContactFormModal = ({ show, handleClose, autoShow = true, delay = 15000 }) => {
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(show || false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    message: '',
  });

  // Generate random captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    setCaptcha({ num1, num2, answer });
    setCaptchaInput('');
    setCaptchaError('');
  };

  // Auto show modal after delay
  useEffect(() => {
    let timer;
    
    // if (autoShow && !localStorage.getItem('contactModalShown')) {
    //   timer = setTimeout(() => {
    //     setShowModal(true);
    //     // Mark that modal has been shown in this session
    //     localStorage.setItem('contactModalShown', 'true');
    //   }, delay);
    // }
    if (autoShow && !sessionStorage.getItem('contactModalShown')) {
      timer = setTimeout(() => {
        setShowModal(true);
        // Mark that modal has been shown in this browser session
        sessionStorage.setItem('contactModalShown', 'true');
      }, delay);
    }


    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [autoShow, delay]);

  // Generate new captcha when modal opens
  useEffect(() => {
    if (showModal || show) {
      generateCaptcha();
    }
  }, [showModal, show]);

  // Reset form when the modal is shown
  useEffect(() => {
    if (showModal || show) {
      setFormData({
        name: '',
        location: '',
        email: '',
        phone: '',
        message: '',
      });
      setSubmitted(false);
      setCaptchaInput('');
      setCaptchaError('');
    }
  }, [showModal, show]);

  // Handle prop changes
  useEffect(() => {
    if (show !== undefined) {
      setShowModal(show);
    }
  }, [show]);

  const closeModal = () => {
    setShowModal(false);
    if (handleClose) {
      handleClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    setCaptchaError('');
  };

  const validateCaptcha = () => {
    const userAnswer = parseInt(captchaInput);
    if (isNaN(userAnswer) || userAnswer !== captcha.answer) {
      setCaptchaError('Incorrect answer. Please try again.');
      generateCaptcha(); // Generate new captcha
      return false;
    }
    return true;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   // Validate captcha first
  //   if (!validateCaptcha()) {
  //     return;
  //   }

  //   try {
  //     const payload = {
  //       name: formData.name,
  //       location: formData.location,
  //       email: formData.email,
  //       phone: formData.phone,
  //       message: formData.message,
  //     };

  //     // Send form data to the backend API via POST request
  //     const response = await axios.post(`${API_BASE_URL}/api/save-quotes`, payload);

  //     console.log("Request a quote submitted form ==============>:", response.data);

  //     // Show thank you message
  //     setSubmitted(true);

  //     // Close modal after showing thank you message
  //     setTimeout(closeModal, 3000);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("Something went wrong while submitting. Please try again.");
  //   }
  // };

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


  const refreshCaptcha = () => {
    generateCaptcha();
  };

  return (
    <Modal 
      show={showModal} 
      onHide={closeModal}
      centered
      className="cfm-contact-modal"
      backdrop="static" // Prevent closing by clicking outside
    >
      <Modal.Header closeButton>
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

            {/* <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group> */}

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

            {/* Captcha Section */}
            <Form.Group className="mb-3">
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
                  style={{ width: ' 104px' }}
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
