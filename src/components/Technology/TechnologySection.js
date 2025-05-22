// import React, { useState, useEffect } from 'react';
// import 'animate.css';
// import SectionTitle from '../SectionTitle/SectionTitle';

// const TechnologySection = () => {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [animateCards, setAnimateCards] = useState(false);
  
//   useEffect(() => {
//     setAnimateCards(true);
//     const timer = setTimeout(() => setAnimateCards(false), 800);
//     return () => clearTimeout(timer);
//   }, [activeCategory]);
  
//   const categories = [
//     { id: 'all', name: 'All Technologies' },
//     { id: 'frontend', name: 'Frontend' },
//     { id: 'backend', name: 'Backend' },
//     { id: 'mobile', name: 'Mobile' },
//     { id: 'cloud', name: 'Cloud & DevOps' },
//     { id: 'ai', name: 'AI & Data Science' }
//   ];
  
//   const technologies = [
//     // Frontend
//     { id: 1, name: 'React.js', category: 'frontend', icon: 'devicon-react-original colored', description: 'Building interactive user interfaces' },
//     { id: 2, name: 'Angular', category: 'frontend', icon: 'devicon-angularjs-plain colored', description: 'Platform for building mobile and desktop web applications' },
//     { id: 3, name: 'Vue.js', category: 'frontend', icon: 'devicon-vuejs-plain colored', description: 'Progressive JavaScript framework' },
//     { id: 4, name: 'Next.js', category: 'frontend', icon: 'devicon-nextjs-original', description: 'React framework for production' },
//     { id: 5, name: 'Bootstrap', category: 'frontend', icon: 'devicon-bootstrap-plain colored', description: 'Frontend toolkit for responsive design' },
    
//     // Backend
//     { id: 6, name: 'Node.js', category: 'backend', icon: 'devicon-nodejs-plain colored', description: 'JavaScript runtime for server-side applications' },
//     { id: 7, name: 'Express.js', category: 'backend', icon: 'devicon-express-original', description: 'Web application framework for Node.js' },
//     { id: 8, name: 'Django', category: 'backend', icon: 'devicon-django-plain', description: 'High-level Python web framework' },
//     { id: 9, name: 'Laravel', category: 'backend', icon: 'devicon-laravel-plain colored', description: 'PHP web application framework' },
//     { id: 10, name: 'Spring Boot', category: 'backend', icon: 'devicon-spring-plain colored', description: 'Java-based framework for microservices' },
    
//     // Mobile
//     { id: 11, name: 'React Native', category: 'mobile', icon: 'devicon-react-original colored', description: 'Framework for building native mobile apps' },
//     { id: 12, name: 'Flutter', category: 'mobile', icon: 'devicon-flutter-plain colored', description: 'UI toolkit for cross-platform applications' },
//     { id: 13, name: 'Swift', category: 'mobile', icon: 'devicon-swift-plain colored', description: 'Programming language for iOS development' },
//     { id: 14, name: 'Kotlin', category: 'mobile', icon: 'devicon-kotlin-plain colored', description: 'Modern programming language for Android' },
    
//     // Cloud & DevOps
//     { id: 15, name: 'AWS', category: 'cloud', icon: 'devicon-amazonwebservices-original colored', description: 'Cloud computing services' },
//     { id: 16, name: 'Azure', category: 'cloud', icon: 'devicon-azure-plain colored', description: 'Microsoft cloud platform' },
//     { id: 17, name: 'Docker', category: 'cloud', icon: 'devicon-docker-plain colored', description: 'Containerization platform' },
//     { id: 18, name: 'Kubernetes', category: 'cloud', icon: 'devicon-kubernetes-plain colored', description: 'Container orchestration system' },
//     { id: 19, name: 'Jenkins', category: 'cloud', icon: 'devicon-jenkins-plain colored', description: 'Open-source automation server' },
    
//     // AI & Data Science
//     { id: 20, name: 'TensorFlow', category: 'ai', icon: 'devicon-tensorflow-original colored', description: 'End-to-end machine learning platform' },
//     { id: 21, name: 'PyTorch', category: 'ai', icon: 'devicon-pytorch-original colored', description: 'Machine learning framework' },
//     { id: 22, name: 'Python', category: 'ai', icon: 'devicon-python-plain colored', description: 'Programming language for data science' },
//     { id: 23, name: 'R', category: 'ai', icon: 'devicon-r-plain colored', description: 'Language for statistical computing' },
//     { id: 24, name: 'Hadoop', category: 'ai', icon: 'devicon-hadoop-plain colored', description: 'Framework for distributed storage and processing' }
//   ];
  
//   const filteredTechnologies = activeCategory === 'all' 
//     ? technologies 
//     : technologies.filter(tech => tech.category === activeCategory);
  
//   // Custom CSS for animations and hover effects
//   const styles = {
//     techCard: {
//       transition: 'all 0.3s ease',
//       cursor: 'pointer',
//     },
//     techCardHover: {
//       transform: 'translateY(-10px)',
//       boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
//     },
//     iconRotate: {
//       transition: 'transform 0.6s ease',
//     },
//     iconRotateHover: {
//       transform: 'rotate(20deg)',
//     },
//     buttonHover: {
//       transition: 'all 0.3s ease',
//     },
//     progressBarAnimation: {
//       transition: 'width 1.5s ease-in-out',
//     },
//     checklistItemHover: {
//       transition: 'all 0.3s ease',
//     },
//     checklistItemHoverActive: {
//       transform: 'translateX(10px)',
//       color: '#0d6efd',
//     }
//   };
  
//   return (
//     <section className="py-5 bg-light" id="technologies">
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-12 text-center">
//             {/* <h2 className="fw-bold mb-3 animate__animated animate__fadeIn">Our Technologies</h2>
//             <p className="text-muted lead mb-5 animate__animated animate__fadeIn animate__delay-1s">
//               We leverage cutting-edge technologies to deliver powerful, scalable solutions
//             </p> */}
//              <SectionTitle subTitle={'Our Technologies'}   />
//              <p className="text-muted lead mb-5 animate__animated animate__fadeIn animate__delay-1s">
//               We leverage cutting-edge technologies to deliver powerful, scalable solutions
//             </p>
            
//             {/* Category Tabs */}
//             <div className="d-flex justify-content-center flex-wrap mb-4 animate__animated animate__fadeIn animate__delay-1s">
//               {categories.map(category => (
//                 <button
//                   key={category.id}
//                   className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-secondary'} m-1`}
//                   onClick={() => setActiveCategory(category.id)}
//                   style={styles.buttonHover}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.05)';
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
        
//         {/* Technology Cards */}
//         <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
//           {filteredTechnologies.map((tech, index) => (
//             <div 
//               key={tech.id} 
//               className={`col animate__animated ${animateCards ? 'animate__fadeIn' : ''}`}
//               style={{ animationDelay: `${index * 0.05}s` }}
//             >
//               <div 
//                 className="card h-100 shadow-sm border-0"
//                 style={styles.techCard}
//                 onMouseOver={(e) => {
//                   Object.assign(e.currentTarget.style, styles.techCardHover);
//                   const icon = e.currentTarget.querySelector('.tech-icon');
//                   if (icon) Object.assign(icon.style, styles.iconRotateHover);
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = '';
//                   e.currentTarget.style.boxShadow = '';
//                   const icon = e.currentTarget.querySelector('.tech-icon');
//                   if (icon) icon.style.transform = '';
//                 }}
//               >
//                 <div className="card-body text-center">
//                   <div className="mb-3">
//                     <i className={`${tech.icon} display-1 tech-icon`} style={styles.iconRotate}></i>
//                   </div>
//                   <h5 className="card-title">{tech.name}</h5>
//                   <p className="card-text text-muted small">{tech.description}</p>
//                   <div className="tech-details d-none">
//                     <hr />
//                     <p className="small">Learn more about our {tech.name} solutions</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Technology Expertise */}
//         <div className="row mt-5 pt-4">
//           <div className="col-md-6 animate__animated animate__fadeInLeft">
//             <div className="p-4 bg-white rounded shadow">
//               <h3 className="h4 mb-4">Our Technical Expertise</h3>
              
//               {/* Frontend */}
//               <div className="mb-4">
//                 <div className="d-flex justify-content-between mb-1">
//                   <span>Frontend Development</span>
//                   <span>95%</span>
//                 </div>
//                 <div className="progress" style={{ height: '8px' }}>
//                   <div 
//                     className="progress-bar bg-primary progress-bar-striped progress-bar-animated" 
//                     role="progressbar" 
//                     style={{ ...styles.progressBarAnimation, width: '95%' }} 
//                     aria-valuenow="95" 
//                     aria-valuemin="0" 
//                     aria-valuemax="100"
//                   ></div>
//                 </div>
//               </div>
              
//               {/* Backend */}
//               <div className="mb-4">
//                 <div className="d-flex justify-content-between mb-1">
//                   <span>Backend Development</span>
//                   <span>90%</span>
//                 </div>
//                 <div className="progress" style={{ height: '8px' }}>
//                   <div 
//                     className="progress-bar bg-success progress-bar-striped progress-bar-animated" 
//                     role="progressbar" 
//                     style={{ ...styles.progressBarAnimation, width: '90%' }} 
//                     aria-valuenow="90" 
//                     aria-valuemin="0" 
//                     aria-valuemax="100"
//                   ></div>
//                 </div>
//               </div>
              
//               {/* Mobile */}
//               <div className="mb-4">
//                 <div className="d-flex justify-content-between mb-1">
//                   <span>Mobile App Development</span>
//                   <span>85%</span>
//                 </div>
//                 <div className="progress" style={{ height: '8px' }}>
//                   <div 
//                     className="progress-bar bg-info progress-bar-striped progress-bar-animated" 
//                     role="progressbar" 
//                     style={{ ...styles.progressBarAnimation, width: '85%' }} 
//                     aria-valuenow="85" 
//                     aria-valuemin="0" 
//                     aria-valuemax="100"
//                   ></div>
//                 </div>
//               </div>
              
//               {/* Cloud */}
//               <div className="mb-4">
//                 <div className="d-flex justify-content-between mb-1">
//                   <span>Cloud & DevOps</span>
//                   <span>88%</span>
//                 </div>
//                 <div className="progress" style={{ height: '8px' }}>
//                   <div 
//                     className="progress-bar bg-warning progress-bar-striped progress-bar-animated" 
//                     role="progressbar" 
//                     style={{ ...styles.progressBarAnimation, width: '88%' }} 
//                     aria-valuenow="88" 
//                     aria-valuemin="0" 
//                     aria-valuemax="100"
//                   ></div>
//                 </div>
//               </div>
              
//               {/* AI */}
//               <div>
//                 <div className="d-flex justify-content-between mb-1">
//                   <span>AI & Data Science</span>
//                   <span>80%</span>
//                 </div>
//                 <div className="progress" style={{ height: '8px' }}>
//                   <div 
//                     className="progress-bar bg-danger progress-bar-striped progress-bar-animated" 
//                     role="progressbar" 
//                     style={{ ...styles.progressBarAnimation, width: '80%' }} 
//                     aria-valuenow="80" 
//                     aria-valuemin="0" 
//                     aria-valuemax="100"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 animate__animated animate__fadeInRight">
//             <div className="p-4 bg-white rounded shadow h-100">
//               <h3 className="h4 mb-4">Why Choose Our Technology Stack?</h3>
//               <ul className="list-group list-group-flush">
//                 {[
//                   { title: 'Scalable Solutions', desc: 'Our tech stack ensures your application can grow with your business' },
//                   { title: 'Performance Optimized', desc: 'We build with performance in mind from day one' },
//                   { title: 'Security Focused', desc: 'We implement industry best practices for secure applications' },
//                   { title: 'Modern Frameworks', desc: 'We use cutting-edge technologies that are future-proof' },
//                   { title: 'Cross-platform Compatibility', desc: 'Our solutions work across all devices and browsers' }
//                 ].map((item, index) => (
//                   <li 
//                     key={index}
//                     className="list-group-item bg-transparent border-0 ps-0"
//                     style={styles.checklistItemHover}
//                     onMouseOver={(e) => {
//                       Object.assign(e.currentTarget.style, styles.checklistItemHoverActive);
//                     }}
//                     onMouseOut={(e) => {
//                       e.currentTarget.style.transform = '';
//                       e.currentTarget.style.color = '';
//                     }}
//                   >
//                     <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                     <strong>{item.title}</strong> - {item.desc}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
        
//         {/* Call to Action */}
//         <div className="row mt-5">
//           <div className="col-12 text-center">
//             <div className="p-4 bg-primary rounded shadow text-white animate__animated animate__fadeIn">
//               <h3 className="mb-3">Ready to transform your business with our technology solutions?</h3>
//               <p className="mb-4">Let's talk about how our expertise can help you achieve your goals.</p>
//               <button 
//                 className="btn btn-light px-4 py-2"
//                 style={styles.buttonHover}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                   e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                   e.currentTarget.style.boxShadow = '';
//                 }}
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnologySection;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import 'animate.css';
// import SectionTitle from '../SectionTitle/SectionTitle';
// import BubbleSectionTechnology from './BubbleSectionTechnology';

// // Skeleton loading component
// const TechnologyCardSkeleton = () => {
//   return (
//     <div className="col">
//       <div className="card h-100 shadow-sm border-0 p-3">
//         <div className="skeleton-img mb-3" style={{ 
//           height: '180px', 
//           background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
//           backgroundSize: '200% 100%',
//           animation: 'skeleton-loading 1.5s infinite' 
//         }}></div>
//         <div className="skeleton-title mb-2" style={{ 
//           height: '24px', 
//           width: '70%', 
//           margin: '0 auto',
//           background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
//           backgroundSize: '200% 100%',
//           animation: 'skeleton-loading 1.5s infinite' 
//         }}></div>
//         <div className="skeleton-badge" style={{ 
//           height: '18px', 
//           width: '40%', 
//           margin: '0 auto',
//           background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
//           backgroundSize: '200% 100%',
//           animation: 'skeleton-loading 1.5s infinite' 
//         }}></div>
//       </div>
//     </div>
//   );
// };

// const TechnologySection = () => {
//   const [technologies, setTechnologies] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [animateCards, setAnimateCards] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [categories, setCategories] = useState([
//     { id: 'all', name: 'All Technologies' }
//   ]);
//   const [expandedTech, setExpandedTech] = useState(null);
  
//   // Fetch technologies from API
//   useEffect(() => {
//     const fetchTechnologies = async () => {
//       try {
//         setLoading(true);
//         // const response = await axios.get('http://192.168.1.7:8000/api/get-technology');
//         const response = await axios.get(`${API_BASE_URL}/api/get-technology`);
//         console.log('Technology api response================>:', response.data.Technologys);
        
//         if (response.data.status && response.data.success) {
//           setTechnologies(response.data.Technologys);
          
//           // Extract unique categories from the API response
//           const uniqueCategories = [...new Set(response.data.Technologys.map(tech => tech.category))];
          
//           // Create category objects for filter buttons
//           const categoryObjects = [
//             { id: 'all', name: 'All Technologies' },
//             ...uniqueCategories.map(category => ({
//               id: category.toLowerCase().replace(/\s+/g, '-'),
//               name: category
//             }))
//           ];
          
//           setCategories(categoryObjects);
//         } else {
//           setError('Failed to fetch technologies');
//         }
//       } catch (err) {
//         setError('Error connecting to the server');
//         console.error('Error fetching technologies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchTechnologies();
//   }, []);
  
//   useEffect(() => {
//     setAnimateCards(true);
//     const timer = setTimeout(() => setAnimateCards(false), 800);
//     return () => clearTimeout(timer);
//   }, [activeCategory]);
  
//   // Add CSS for skeleton animation
//   useEffect(() => {
//     const styleSheet = document.createElement("style");
//     styleSheet.innerText = `
//       @keyframes skeleton-loading {
//         0% { background-position: 200% 0; }
//         100% { background-position: -200% 0; }
//       }
      
//       @keyframes gradient-shift {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }
      
//       .tech-card-hover {
//         transition: all 0.4s ease;
//       }
      
//       .tech-card-hover:hover {
//         transform: translateY(-10px);
//         background: linear-gradient(135deg, rgba(236,72,153,0.1), rgba(124,58,237,0.1));
//         box-shadow: 0 10px 25px rgba(124,58,237,0.2) !important;
//         border: 1px solid rgba(236,72,153,0.3) !important;
//       }
      
//       .tech-card-hover:hover .tech-image {
//         transform: scale(1.05);
//       }
      
//       .tech-image {
//         transition: transform 0.5s ease;
//         object-fit: contain;
//       }
      
//       .tech-card-hover:hover .expand-button {
//         background: linear-gradient(90deg, #ec4899, #7c3aed);
//         background-size: 200% 100%;
//         animation: gradient-shift 3s ease infinite;
//         color: white;
//         transform: translateY(-3px);
//       }
      
//       .tech-card-hover .expand-button {
//         transition: all 0.3s ease;
//         background: #f8f9fa;
//         border: 1px solid #dee2e6;
//       }
      
//       .tech-description {
//         max-height: 0;
//         overflow: hidden;
//         transition: max-height 0.4s ease-out;
//       }
      
//       .tech-description.expanded {
//         max-height: 500px;
//         transition: max-height 0.6s ease-in;
//       }
//     `;
//     document.head.appendChild(styleSheet);
    
//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, []);
  
//   // Filter technologies based on active category
//   const filteredTechnologies = activeCategory === 'all' 
//     ? technologies 
//     : technologies.filter(tech => {
//         const techCategory = tech.category.toLowerCase().replace(/\s+/g, '-');
//         return techCategory === activeCategory;
//       });
  
//   // Toggle expanded tech card
//   const toggleTechExpand = (techId) => {
//     if (expandedTech === techId) {
//       setExpandedTech(null);
//     } else {
//       setExpandedTech(techId);
//     }
//   };
  
//   // Custom CSS for animations and hover effects
//   const styles = {
//     buttonHover: {
//       transition: 'all 0.3s ease',
//     },
//     progressBarAnimation: {
//       transition: 'width 1.5s ease-in-out',
//     },
//     checklistItemHover: {
//       transition: 'all 0.3s ease',
//     },
//     checklistItemHoverActive: {
//       transform: 'translateX(10px)',
//       color: '#0d6efd',
//       // background: linear-gradient(to left, #6917B4 0%, #D54BE1 100%),
//       // background: 'linear-gradient(to left, #6917B4 0%, #D54BE1 100%)',
//     }
//   };
  
//   // Render skeleton loaders
//   const renderSkeletons = () => {
//     return Array(8).fill(0).map((_, index) => (
//       <TechnologyCardSkeleton key={`skeleton-${index}`} />
//     ));
//   };
  
//   if (error) {
//     return (
//       <section className="py-5 bg-light" id="technologies">
//         <div className="container text-center">
//           <div className="alert alert-danger" role="alert">
//             {error}
//           </div>
//         </div>
//       </section>
//     );
//   }
  
//   return (
//     <section className="py-5 bg-light" id="technologies">
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-12 text-center">
//             <SectionTitle subTitle={'Our Technologies'} />
//             <p className="text-muted lead mb-5 animate__animated animate__fadeIn animate__delay-1s">
//               We leverage cutting-edge technologies to deliver powerful, scalable solutions
//             </p>
            
//             {/* Category Tabs */}
//             <div className="d-flex justify-content-center flex-wrap mb-4 animate__animated animate__fadeIn animate__delay-1s">
//               {categories.map(category => (
//                 <button
//                 key={category.id}
//                 className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-secondary'} m-1`}
//                 onClick={() => setActiveCategory(category.id)}
//                 style={styles.buttonHover}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                   e.currentTarget.style.background = 'linear-gradient(to left, #6917B4 0%, #D54BE1)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                   e.currentTarget.style.background = ''; // Reset to original background
//                 }}
//               >
//                 {category.name}
//               </button>

//               ))}
//             </div>
//           </div>
//         </div>
        
//         {/* Technology Cards */}
//         <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
//           {loading ? renderSkeletons() : (
//             filteredTechnologies.length > 0 ? (
//               filteredTechnologies.map((tech, index) => (
//                 <div 
//                   key={tech.id} 
//                   className={`col animate__animated ${animateCards ? 'animate__fadeIn' : ''}`}
//                   style={{ animationDelay: `${index * 0.05}s` }}
//                 >
//                   <div className="card h-100 shadow-sm border-0 tech-card-hover overflow-hidden">
//                     <div className="position-relative p-3">
//                       <img 
//                         src={tech.image} 
//                         className="tech-image img-fluid mx-auto d-block"
//                         alt={tech.tech_name}
//                         style={{ 
//                           height: '80px',
//                           maxWidth: '100%',
//                           objectPosition: 'center',
//                         }}
//                       />
//                     </div>
//                     <div className="card-body text-center pt-0">
//                       <h5 className="card-title">{tech.tech_name}</h5>
//                       <p className="text-muted mb-2">
//                         <span className="badge bg-light text-dark">{tech.category}</span>
//                       </p>
                      
//                       <button 
//                         className="btn btn-sm expand-button mt-2 mb-3"
//                         onClick={() => toggleTechExpand(tech.id)}
//                       >
//                         {expandedTech === tech.id ? 'Show Less' : 'Learn More'}
//                       </button>
                      
//                       <div className={`tech-description ${expandedTech === tech.id ? 'expanded' : ''}`}>
//                         <hr className="my-2" />
//                         <div 
//                           className="card-text text-muted small text-start" 
//                           dangerouslySetInnerHTML={{ __html: tech.description }}
//                         >
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-12 text-center py-5">
//                 <p className="text-muted">No technologies found in this category.</p>
//               </div>
//             )
//           )}
//         </div>
        
//         {/* Technology Expertise */}
//         <div className="row mt-5 pt-4">
//           {/* <div className="col-md-6 animate__animated animate__fadeInLeft"> */}
//             {/* <div className="p-4 bg-white rounded shadow">
//               <h3 className="h4 mb-4">Our Technical Expertise</h3>
              
//               {loading ? (
//                 // Skeleton for expertise bars
//                 Array(5).fill(0).map((_, index) => (
//                   <div className="mb-4" key={`expertise-skeleton-${index}`}>
//                     <div className="d-flex justify-content-between mb-1">
//                       <div style={{ 
//                         height: '18px', 
//                         width: '40%', 
//                         background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
//                         backgroundSize: '200% 100%',
//                         animation: 'skeleton-loading 1.5s infinite' 
//                       }}></div>
//                       <div style={{ 
//                         height: '18px', 
//                         width: '10%', 
//                         background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
//                         backgroundSize: '200% 100%',
//                         animation: 'skeleton-loading 1.5s infinite' 
//                       }}></div>
//                     </div>
//                     <div className="progress" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
//                       <div 
//                         style={{ 
//                           width: '100%', 
//                           background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
//                           backgroundSize: '200% 100%',
//                           animation: 'skeleton-loading 1.5s infinite' 
//                         }}
//                         role="progressbar" 
//                         aria-valuenow="0" 
//                         aria-valuemin="0" 
//                         aria-valuemax="100"
//                       ></div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 categories
//                   .filter(cat => cat.id !== 'all')
//                   .slice(0, 5)
//                   .map((category, index) => {
//                     // Calculate percentage based on number of techs in each category
//                     const categoryTechs = technologies.filter(
//                       tech => tech.category.toLowerCase().replace(/\s+/g, '-') === category.id
//                     );
//                     const percentage = Math.min(75 + (categoryTechs.length * 5), 95);
                    
//                     // Define a list of bootstrap colors for variety
//                     const colors = ['primary', 'success', 'info', 'warning', 'danger'];
                    
//                     return (
//                       <div className="mb-4" key={category.id}>
//                         <div className="d-flex justify-content-between mb-1">
//                           <span>{category.name}</span>
//                           <span>{percentage}%</span>
//                         </div>
//                         <div className="progress" style={{ height: '8px' }}>
//                           <div 
//                             className={`progress-bar bg-${colors[index % colors.length]} progress-bar-striped progress-bar-animated`}
//                             role="progressbar" 
//                             style={{ ...styles.progressBarAnimation, width: `${percentage}%` }} 
//                             aria-valuenow={percentage}
//                             aria-valuemin="0" 
//                             aria-valuemax="100"
//                           ></div>
//                         </div>
//                       </div>
//                     );
//                   })
//               )}
//             </div> */}
//           {/* </div> */}
//           <div className="col-md-12 animate__animated ">
//             <div className="p-4 bg-white rounded shadow h-100  ">
//               <h3 className="h4 mb-4">Why Choose Our Technology Stack?</h3>
//               <ul className="list-group list-group-flush">
//                 {loading ? (
//                   // Skeleton for checklist
//                   Array(5).fill(0).map((_, index) => (
//                     <li key={`checklist-skeleton-${index}`} className="list-group-item bg-transparent border-0 ps-0">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2" style={{ 
//                           height: '16px',
//                           width: '16px',
//                           borderRadius: '50%',
//                           background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
//                           backgroundSize: '200% 100%',
//                           animation: 'skeleton-loading 1.5s infinite' 
//                         }}></div>
//                         <div style={{ 
//                           height: '16px',
//                           width: '80%',
//                           background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
//                           backgroundSize: '200% 100%',
//                           animation: 'skeleton-loading 1.5s infinite' 
//                         }}></div>
//                       </div>
//                     </li>
//                   ))
//                 ) : (
//                   [
//                     { title: 'Scalable Solutions', desc: 'Our tech stack ensures your application can grow with your business ' },
//                     { title: 'Performance Optimized', desc: 'We build with performance in mind from day one' },
//                     { title: 'Security Focused', desc: 'We implement industry best practices for secure applications' },
//                     { title: 'Modern Frameworks', desc: 'We use cutting-edge technologies that are future-proof' },
//                     { title: 'Cross-platform Compatibility', desc: 'Our solutions work across all devices and browsers' }
//                   ].map((item, index) => (
//                     <li 
//                       key={index}
//                       className="list-group-item bg-transparent border-0 ps-0"
//                       style={styles.checklistItemHover}
//                       onMouseOver={(e) => {
//                         Object.assign(e.currentTarget.style, styles.checklistItemHoverActive);
//                       }}
//                       onMouseOut={(e) => {
//                         e.currentTarget.style.transform = '';
//                         e.currentTarget.style.color = '';
//                       }}
//                     >
//                       <i className="bi bi-check-circle-fill text-primary me-2"></i>
//                       <strong>{item.title}</strong> - {item.desc}
//                     </li>
//                   ))
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
        
//         {/* Call to Action */}
//         <BubbleSectionTechnology />
//       </div>
//     </section>
//   );
// };

// export default TechnologySection;


 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import 'animate.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import BubbleSectionTechnology from './BubbleSectionTechnology';

// Skeleton loading component
const TechnologyCardSkeleton = () => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0 p-3">
        <div className="skeleton-img mb-3" style={{ 
          height: '180px', 
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-loading 1.5s infinite' 
        }}></div>
        <div className="skeleton-title mb-2" style={{ 
          height: '24px', 
          width: '70%', 
          margin: '0 auto',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-loading 1.5s infinite' 
        }}></div>
        <div className="skeleton-badge" style={{ 
          height: '18px', 
          width: '40%', 
          margin: '0 auto',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-loading 1.5s infinite' 
        }}></div>
      </div>
    </div>
  );
};

// Technology Modal Component
const TechnologyModal = ({ tech, isOpen, onClose }) => {
  if (!isOpen || !tech) return null;

  return (
    <div 
      className="modal fade show" 
      style={{ 
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1050
      }}
      onClick={onClose}
    >
      <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content animate__animated animate__zoomIn animate__faster">
          <div className="modal-header border-0" style={{
            background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(124,58,237,0.1))'
          }}>
            <div className="d-flex align-items-center">
              <img 
                src={tech.image} 
                alt={tech.tech_name}
                className="me-3"
                style={{ 
                  height: '50px',
                  width: '50px',
                  objectFit: 'contain'
                }}
              />
              <div>
                <h4 className="modal-title mb-1">{tech.tech_name}</h4>
                <span className="badge bg-primary">{tech.category}</span>
              </div>
            </div>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div 
              className="technology-content"
              dangerouslySetInnerHTML={{ __html: tech.description }}
              style={{
                lineHeight: '1.6',
                fontSize: '16px',
                color: '#495057'
              }}
            />
          </div>
          <div className="modal-footer border-0 bg-light">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onClose}
            >
              Close
            </button>
            {/* <button 
              type="button" 
              className="btn"
              style={{
                background: 'linear-gradient(90deg, #ec4899, #7c3aed)',
                color: 'white',
                border: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(124,58,237,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Started with {tech.tech_name}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([
    { id: 'all', name: 'All Technologies' }
  ]);
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Fetch technologies from API
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);
        // const response = await axios.get('http://192.168.1.7:8000/api/get-technology');
        const response = await axios.get(`${API_BASE_URL}/api/get-technology`);
        console.log('Technology api response================>:', response.data.Technologys);
        
        if (response.data.status && response.data.success) {
          setTechnologies(response.data.Technologys);
          
          // Extract unique categories from the API response
          const uniqueCategories = [...new Set(response.data.Technologys.map(tech => tech.category))];
          
          // Create category objects for filter buttons
          const categoryObjects = [
            { id: 'all', name: 'All Technologies' },
            ...uniqueCategories.map(category => ({
              id: category.toLowerCase().replace(/\s+/g, '-'),
              name: category
            }))
          ];
          
          setCategories(categoryObjects);
        } else {
          setError('Failed to fetch technologies');
        }
      } catch (err) {
        setError('Error connecting to the server');
        console.error('Error fetching technologies:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTechnologies();
  }, []);
  
  useEffect(() => {
    setAnimateCards(true);
    const timer = setTimeout(() => setAnimateCards(false), 800);
    return () => clearTimeout(timer);
  }, [activeCategory]);
  
  // Add CSS for skeleton animation and modal
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes skeleton-loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .tech-card-hover {
        transition: all 0.4s ease;
        cursor: pointer;
      }
      
      .tech-card-hover:hover {
        transform: translateY(-10px);
        background: linear-gradient(135deg, rgba(236,72,153,0.1), rgba(124,58,237,0.1));
        box-shadow: 0 10px 25px rgba(124,58,237,0.2) !important;
        border: 1px solid rgba(236,72,153,0.3) !important;
      }
      
      .tech-card-hover:hover .tech-image {
        transform: scale(1.05);
      }
      
      .tech-image {
        transition: transform 0.5s ease;
        object-fit: contain;
      }
      
      .tech-card-hover:hover .expand-button {
        background: linear-gradient(90deg, #ec4899, #7c3aed);
        background-size: 200% 100%;
        animation: gradient-shift 3s ease infinite;
        color: white;
        transform: translateY(-3px);
      }
      
      .tech-card-hover .expand-button {
        transition: all 0.3s ease;
        background: #f8f9fa;
        border: 1px solid #dee2e6;
      }
      
      /* Modal Styles */
      .modal-content {
        border: none;
        border-radius: 15px;
        overflow: hidden;
      }
      
      .modal-header {
        padding: 1.5rem;
      }
      
      .modal-body {
        padding: 1.5rem;
        max-height: 60vh;
        overflow-y: auto;
      }
      
      .modal-footer {
        padding: 1rem 1.5rem;
      }
      
      .technology-content h1,
      .technology-content h2,
      .technology-content h3,
      .technology-content h4,
      .technology-content h5,
      .technology-content h6 {
        color: #2d3748;
        margin-bottom: 0.75rem;
        margin-top: 1.5rem;
      }
      
      .technology-content p {
        margin-bottom: 1rem;
      }
      
      .technology-content ul,
      .technology-content ol {
        margin-bottom: 1rem;
        padding-left: 1.5rem;
      }
      
      .technology-content li {
        margin-bottom: 0.5rem;
      }
      
      .technology-content strong {
        color: #2d3748;
      }
      
      .technology-content code {
        background-color: #f7fafc;
        padding: 2px 6px;
        border-radius: 4px;
        color: #e53e3e;
        font-size: 0.9em;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  // Handle body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);
  
  // Filter technologies based on active category
  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => {
        const techCategory = tech.category.toLowerCase().replace(/\s+/g, '-');
        return techCategory === activeCategory;
      });
  
  // Open modal with selected technology
  const openTechModal = (tech) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };
  
  // Close modal
  const closeTechModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTech(null), 300); // Delay to allow animation
  };
  
  // Custom CSS for animations and hover effects
  const styles = {
    buttonHover: {
      transition: 'all 0.3s ease',
    },
    progressBarAnimation: {
      transition: 'width 1.5s ease-in-out',
    },
    checklistItemHover: {
      transition: 'all 0.3s ease',
    },
    checklistItemHoverActive: {
      transform: 'translateX(10px)',
      color: '#0d6efd',
    }
  };
  
  // Render skeleton loaders
  const renderSkeletons = () => {
    return Array(8).fill(0).map((_, index) => (
      <TechnologyCardSkeleton key={`skeleton-${index}`} />
    ));
  };
  
  if (error) {
    return (
      <section className="py-5 bg-light" id="technologies">
        <div className="container text-center">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-5 bg-light" id="technologies">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <SectionTitle subTitle={'Our Technologies'} />
            <p className="text-muted lead mb-5 animate__animated animate__fadeIn animate__delay-1s">
              We leverage cutting-edge technologies to deliver powerful, scalable solutions
            </p>
            
            {/* Category Tabs */}
            <div className="d-flex justify-content-center flex-wrap mb-4 animate__animated animate__fadeIn animate__delay-1s">
              {categories.map(category => (
                <button
                key={category.id}
                className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-secondary'} m-1`}
                onClick={() => setActiveCategory(category.id)}
                style={styles.buttonHover}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.background = 'linear-gradient(to left, #6917B4 0%, #D54BE1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = ''; // Reset to original background
                }}
              >
                {category.name}
              </button>

              ))}
            </div>
          </div>
        </div>
        
        {/* Technology Cards */}
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {loading ? renderSkeletons() : (
            filteredTechnologies.length > 0 ? (
              filteredTechnologies.map((tech, index) => (
                <div 
                  key={tech.id} 
                  className={`col animate__animated ${animateCards ? 'animate__fadeIn' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="card h-100 shadow-sm border-0 tech-card-hover">
                    <div className="position-relative p-3">
                      <img 
                        src={tech.image} 
                        className="tech-image img-fluid mx-auto d-block"
                        alt={tech.tech_name}
                        style={{ 
                          height: '80px',
                          maxWidth: '100%',
                          objectPosition: 'center',
                        }}
                      />
                    </div>
                    <div className="card-body text-center pt-0">
                      <h5 className="card-title">{tech.tech_name}</h5>
                      <p className="text-muted mb-2">
                        <span className="badge bg-light text-dark">{tech.category}</span>
                      </p>
                      
                      <button 
                        className="btn btn-sm expand-button mt-2 mb-3"
                        onClick={() => openTechModal(tech)}
                      >
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="text-muted">No technologies found in this category.</p>
              </div>
            )
          )}
        </div>
        
        {/* Technology Expertise */}
        <div className="row mt-5 pt-4">
          <div className="col-md-12 animate__animated ">
            <div className="p-4 bg-white rounded shadow h-100  ">
              <h3 className="h4 mb-4">Why Choose Our Technology Stack?</h3>
              <ul className="list-group list-group-flush">
                {loading ? (
                  // Skeleton for checklist
                  Array(5).fill(0).map((_, index) => (
                    <li key={`checklist-skeleton-${index}`} className="list-group-item bg-transparent border-0 ps-0">
                      <div className="d-flex align-items-center">
                        <div className="me-2" style={{ 
                          height: '16px',
                          width: '16px',
                          borderRadius: '50%',
                          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                          backgroundSize: '200% 100%',
                          animation: 'skeleton-loading 1.5s infinite' 
                        }}></div>
                        <div style={{ 
                          height: '16px',
                          width: '80%',
                          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                          backgroundSize: '200% 100%',
                          animation: 'skeleton-loading 1.5s infinite' 
                        }}></div>
                      </div>
                    </li>
                  ))
                ) : (
                  [
                    { title: 'Scalable Solutions', desc: 'Our tech stack ensures your application can grow with your business ' },
                    { title: 'Performance Optimized', desc: 'We build with performance in mind from day one' },
                    { title: 'Security Focused', desc: 'We implement industry best practices for secure applications' },
                    { title: 'Modern Frameworks', desc: 'We use cutting-edge technologies that are future-proof' },
                    { title: 'Cross-platform Compatibility', desc: 'Our solutions work across all devices and browsers' }
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="list-group-item bg-transparent border-0 ps-0"
                      style={styles.checklistItemHover}
                      onMouseOver={(e) => {
                        Object.assign(e.currentTarget.style, styles.checklistItemHoverActive);
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.color = '';
                      }}
                    >
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>{item.title}</strong> - {item.desc}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <BubbleSectionTechnology />
      </div>
      
      {/* Technology Modal */}
      <TechnologyModal 
        tech={selectedTech}
        isOpen={isModalOpen}
        onClose={closeTechModal}
      />
    </section>
  );
};

export default TechnologySection;