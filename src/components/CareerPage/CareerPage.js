// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// // import PageTitle from '../components/pagetitle/PageTitle';
// import './Careers.css';

// // Sample career data - In a real application, you might fetch this from an API
// const careerListings = [
//     {
//         id: 1,
//         title: "Full Stack Developer",
//         department: "Technology",
//         location: "Melbourne, VIC",
//         type: "Full-Time",
//         description: "We're looking for an experienced Full Stack Developer who is passionate about building innovative web applications.",
//         requirements: [
//             "5+ years of experience with JavaScript, React, and Node.js",
//             "Experience with RESTful APIs and database design",
//             "Strong problem-solving abilities and attention to detail",
//             "Bachelor's degree in Computer Science or related field"
//         ],
//         benefits: [
//             "Competitive salary and benefits package",
//             "Flexible work arrangements",
//             "Professional development opportunities",
//             "Collaborative and innovative work environment"
//         ]
//     },
//     {
//         id: 2,
//         title: "Digital Marketing Specialist",
//         department: "Marketing",
//         location: "Melbourne, VIC",
//         type: "Full-Time",
//         description: "Join our marketing team to drive growth through digital channels and help amplify our brand presence.",
//         requirements: [
//             "3+ years of experience in digital marketing",
//             "Proficiency in SEO, SEM, and social media marketing",
//             "Experience with analytics tools and reporting",
//             "Excellent communication and project management skills"
//         ],
//         benefits: [
//             "Competitive salary and benefits package",
//             "Flexible work arrangements",
//             "Professional development opportunities",
//             "Collaborative and innovative work environment"
//         ]
//     },
//     {
//         id: 3,
//         title: "UX/UI Designer",
//         department: "Design",
//         location: "Remote",
//         type: "Full-Time",
//         description: "We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our web and mobile applications.",
//         requirements: [
//             "3+ years of experience in UX/UI design",
//             "Proficiency in design tools like Figma, Sketch, or Adobe XD",
//             "Strong portfolio showcasing your design process",
//             "Experience with responsive design and accessibility"
//         ],
//         benefits: [
//             "Competitive salary and benefits package",
//             "Flexible work arrangements",
//             "Professional development opportunities",
//             "Collaborative and innovative work environment"
//         ]
//     }
// ];

// const CareerPage = () => {
//     const [selectedJob, setSelectedJob] = useState(null);
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         resume: null,
//         coverLetter: '',
//     });
//     const [submitted, setSubmitted] = useState(false);
//     const jobDetailsRef = useRef(null);

//     const handleJobSelect = (jobId) => {
//         const job = careerListings.find(job => job.id === jobId);
//         setSelectedJob(job);
//     };

//     // Use useEffect to scroll after the component has rendered
//     useEffect(() => {
//         if (selectedJob && jobDetailsRef.current) {
//             jobDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, [selectedJob]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleFileChange = (e) => {
//         setFormData({
//             ...formData,
//             resume: e.target.files[0]
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you would typically send the form data to your server
//         console.log("Form submitted:", formData);
//         console.log("For job:", selectedJob.title);
        
//         // Show success message
//         setSubmitted(true);
        
//         // Reset form after submission
//         setTimeout(() => {
//             setFormData({
//                 fullName: '',
//                 email: '',
//                 phone: '',
//                 resume: null,
//                 coverLetter: '',
//             });
//             setSubmitted(false);
//             setSelectedJob(null);
//         }, 3000);
//     };

//     return (
//         <div className="careers-page">
//             {/* <PageTitle pageTitle="Careers" pagesub="Join Our Team" /> */}
            
//             <div className="careers-intro-section section-padding">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-10">
//                             <div className="section-title text-center">
//                                 <h2>Join Our Dynamic Team</h2>
//                                 <p className="lead">
//                                     At Vyapar Kranti, we're building the future of digital business transformation. 
//                                     We're always looking for talented individuals who are passionate about making a difference.
//                                 </p>
//                             </div>
                            
//                             <div className="careers-values mt-5">
//                                 <div className="row">
//                                     <div className="col-md-4">
//                                         <div className="value-box text-center">
//                                             <div className="icon">
//                                                 <i className="fa fa-lightbulb-o fa-3x"></i>
//                                             </div>
//                                             <h3>Innovation</h3>
//                                             <p>We embrace creativity and forward-thinking to deliver cutting-edge solutions.</p>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <div className="value-box text-center">
//                                             <div className="icon">
//                                                 <i className="fa fa-users fa-3x"></i>
//                                             </div>
//                                             <h3>Collaboration</h3>
//                                             <p>We believe in the power of teamwork and open communication.</p>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <div className="value-box text-center">
//                                             <div className="icon">
//                                                 <i className="fa fa-rocket fa-3x"></i>
//                                             </div>
//                                             <h3>Growth</h3>
//                                             <p>We invest in our team's professional and personal development.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             <div className="current-openings-section section-padding bg-light">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="section-title mb-5">
//                                 <h2>Current Openings</h2>
//                                 <p>Explore our available positions and find the perfect fit for your skills and aspirations.</p>
//                             </div>
                            
//                             <div className="job-listings">
//                                 {careerListings.map(job => (
//                                     <div className="job-card" key={job.id}>
//                                         <div className="row align-items-center">
//                                             <div className="col-md-8">
//                                                 <h3>{job.title}</h3>
//                                                 <div className="job-meta">
//                                                     <span><i className="fa fa-building"></i> {job.department}</span>
//                                                     <span><i className="fa fa-map-marker"></i> {job.location}</span>
//                                                     <span><i className="fa fa-clock-o"></i> {job.type}</span>
//                                                 </div>
//                                                 <p className="job-excerpt">{job.description}</p>
//                                             </div>
//                                             <div className="col-md-4 text-md-end mt-3 mt-md-0">
//                                                 <button 
//                                                     className="btn theme-btn" 
//                                                     onClick={() => handleJobSelect(job.id)}
//                                                 >
//                                                     View Details
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {selectedJob && (
//                 <div ref={jobDetailsRef} className="job-details-section section-padding">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-8">
//                                 <div className="job-details-content">
//                                     <h2>{selectedJob.title}</h2>
//                                     <div className="job-meta mb-4">
//                                         <span><i className="fa fa-building"></i> {selectedJob.department}</span>
//                                         <span><i className="fa fa-map-marker"></i> {selectedJob.location}</span>
//                                         <span><i className="fa fa-clock-o"></i> {selectedJob.type}</span>
//                                     </div>
                                    
//                                     <div className="job-description">
//                                         <h3>Description</h3>
//                                         <p>{selectedJob.description}</p>
                                        
//                                         <h3 className="mt-4">Requirements</h3>
//                                         <ul>
//                                             {selectedJob.requirements.map((req, index) => (
//                                                 <li key={index}>{req}</li>
//                                             ))}
//                                         </ul>
                                        
//                                         <h3 className="mt-4">Benefits</h3>
//                                         <ul>
//                                             {selectedJob.benefits.map((benefit, index) => (
//                                                 <li key={index}>{benefit}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4">
//                                 <div className="application-form-wrapper">
//                                     <h3>Apply for this position</h3>
                                    
//                                     {submitted ? (
//                                         <div className="alert alert-success">
//                                             Your application has been submitted successfully. We'll be in touch soon!
//                                         </div>
//                                     ) : (
//                                         <form onSubmit={handleSubmit} className="application-form">
//                                             <div className="mb-3">
//                                                 <label htmlFor="fullName" className="form-label">Full Name *</label>
//                                                 <input 
//                                                     type="text" 
//                                                     className="form-control" 
//                                                     id="fullName" 
//                                                     name="fullName"
//                                                     value={formData.fullName}
//                                                     onChange={handleInputChange}
//                                                     required
//                                                 />
//                                             </div>
                                            
//                                             <div className="mb-3">
//                                                 <label htmlFor="email" className="form-label">Email Address *</label>
//                                                 <input 
//                                                     type="email" 
//                                                     className="form-control" 
//                                                     id="email" 
//                                                     name="email"
//                                                     value={formData.email}
//                                                     onChange={handleInputChange}
//                                                     required
//                                                 />
//                                             </div>
                                            
//                                             <div className="mb-3">
//                                                 <label htmlFor="phone" className="form-label">Phone Number</label>
//                                                 <input 
//                                                     type="tel" 
//                                                     className="form-control" 
//                                                     id="phone" 
//                                                     name="phone"
//                                                     value={formData.phone}
//                                                     onChange={handleInputChange}
//                                                 />
//                                             </div>
                                            
//                                             <div className="mb-3">
//                                                 <label htmlFor="resume" className="form-label">Resume/CV *</label>
//                                                 <input 
//                                                     type="file" 
//                                                     className="form-control" 
//                                                     id="resume" 
//                                                     name="resume"
//                                                     onChange={handleFileChange}
//                                                     accept=".pdf,.doc,.docx"
//                                                     required
//                                                 />
//                                                 <div className="form-text">Accepted formats: PDF, DOC, DOCX</div>
//                                             </div>
                                            
//                                             <div className="mb-3">
//                                                 <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
//                                                 <textarea 
//                                                     className="form-control" 
//                                                     id="coverLetter" 
//                                                     name="coverLetter"
//                                                     rows="4"
//                                                     value={formData.coverLetter}
//                                                     onChange={handleInputChange}
//                                                 ></textarea>
//                                             </div>
                                            
//                                             <button type="submit" className="btn theme-btn w-100">Submit Application</button>
//                                         </form>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
            
             
//         </div>
//     );
// };

// export default CareerPage;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import { Link } from 'react-router-dom';
 
import './Careers.css';
import Applyform from './Applyform';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="job-card">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="skeleton-title"></div>
            <div className="skeleton-meta">
              <span className="skeleton-badge"></span>
              <span className="skeleton-badge"></span>
              <span className="skeleton-badge"></span>
            </div>
            <div className="skeleton-text"></div>
          </div>
          <div className="col-md-4 text-md-end">
            <div className="skeleton-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CareerPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const jobDetailsRef = useRef(null);

  // Fetch vacancies when component mounts
   useEffect(() => {
  const fetchVacancies = async () => {
    try {
      setLoading(true);
    //   const response = await axios.get('http://192.168.1.7:8000/api/get-vacancy');
     const response = await axios.get(`${API_BASE_URL}/api/get-vacancy`);
        console.log('Technology api response============>:', response.data.success);

      console.log('Full response:', response.data); 

      if (response.data.success && response.data.Vacancys && response.data.Vacancys.data) {
        setVacancies(response.data.Vacancys.data);  
        console.log("Career data ======>", response.data.Vacancys.data);
      } else {
        setError('Failed to fetch job listings');
      }
    } catch (err) {
      setError('Error connecting to the server');
      console.error('Error fetching vacancies:', err);
    } finally {
      // Show skeleton for 1s
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  fetchVacancies();
}, []);

  const handleJobSelect = (jobId) => {
    const job = vacancies.find(job => job.id === jobId);
    setSelectedJob(job);
  };

  // Use useEffect to scroll after the component has rendered
  useEffect(() => {
    if (selectedJob && jobDetailsRef.current) {
      jobDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedJob]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      
      // Create form data for file upload
      const formSubmitData = new FormData();
      formSubmitData.append('fullName', formData.fullName);
      formSubmitData.append('email', formData.email);
      formSubmitData.append('phone', formData.phone);
      formSubmitData.append('coverLetter', formData.coverLetter);
      formSubmitData.append('jobId', selectedJob.id);
      formSubmitData.append('jobTitle', selectedJob.title);
      
      if (formData.resume) {
        formSubmitData.append('resume', formData.resume);
      }
      
      // In a real application, replace this URL with your actual API endpoint
      const response = await axios.post('http://192.168.1.7:8000/api/job-application', formSubmitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      
      console.log('Application submitted:', response.data);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          resume: null,
          coverLetter: '',
        });
        setSubmitted(false);
        setSelectedJob(null);
      }, 3000);
      
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Function to safely render HTML content from API
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="careers-page">
      <div className="careers-intro-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center">
                <h2>Join Our Dynamic Team</h2>
                <p className="lead">
                  At Vyapar Kranti, we're building the future of digital business transformation. 
                  We're always looking for talented individuals who are passionate about making a difference.
                </p>
              </div>
              
              <div className="careers-values mt-5">
                <div className="row">
                  <div className="col-md-4">
                    <div className="value-box text-center">
                      <div className="icon">
                        <i className="fa fa-lightbulb-o fa-3x"></i>
                      </div>
                      <h3>Innovation</h3>
                      <p>We embrace creativity and forward-thinking to deliver cutting-edge solutions.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="value-box text-center">
                      <div className="icon">
                        <i className="fa fa-users fa-3x"></i>
                      </div>
                      <h3>Collaboration</h3>
                      <p>We believe in the power of teamwork and open communication.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="value-box text-center">
                      <div className="icon">
                        <i className="fa fa-rocket fa-3x"></i>
                      </div>
                      <h3>Growth</h3>
                      <p>We invest in our team's professional and personal development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="current-openings-section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-5">
                <h2>Current Openings</h2>
                <p>Explore our available positions and find the perfect fit for your skills and aspirations.</p>
              </div>
              
              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}
              
              <div className="job-listings">
                {loading ? (
                  // Display skeleton loaders while data is loading
                  <>
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                  </>
                ) : vacancies.length > 0 ? (
                  // Display actual job listings once loaded
                  vacancies.map(job => (
                    <div className="job-card" key={job.id}>
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <h3>{job.title}</h3>
                          <div className="job-meta">
                            <span><i className="fa fa-building"></i> {job.department}</span>
                            <span><i className="fa fa-map-marker"></i> {job.location}</span>
                            <span><i className="fa fa-clock-o"></i> {job.job_type}</span>
                          </div>
                          <div className="job-excerpt" dangerouslySetInnerHTML={createMarkup(job.description)}></div>
                        </div>
                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                          <button 
                            className="btn theme-btn" 
                            onClick={() => handleJobSelect(job.id)}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-jobs-message">
                    <p>No job openings available at the moment. Please check back later.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {selectedJob && (
        <div ref={jobDetailsRef} className="job-details-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="job-details-content">
                  <h2>{selectedJob.title}</h2>
                  <div className="job-meta mb-4">
                    <span><i className="fa fa-building"></i> {selectedJob.department}</span>
                    <span><i className="fa fa-map-marker"></i> {selectedJob.location}</span>
                    <span><i className="fa fa-clock-o"></i> {selectedJob.job_type}</span>
                  </div>
                  
                  <div className="job-description">
                    <h3>Description</h3>
                    <div dangerouslySetInnerHTML={createMarkup(selectedJob.description)}></div>
                    
                    <h3 className="mt-4">Requirements</h3>
                    <div dangerouslySetInnerHTML={createMarkup(selectedJob.requirement)}></div>
                    
                    <h3 className="mt-4">Benefits</h3>
                    <div dangerouslySetInnerHTML={createMarkup(selectedJob.benefits)}></div>
                  </div>
                </div>
              </div>
               <Applyform />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;