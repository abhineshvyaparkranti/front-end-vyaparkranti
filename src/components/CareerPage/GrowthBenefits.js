// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'framer-motion';
// import './GrowthBenefits.css'; // We'll create this custom CSS file

// const GrowthBenefits = () => {
//   // State for animation triggers
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState('growth');

//   // Mock data for growth paths
//   const growthPaths = [
//     {
//       id: 1,
//       level: 'Entry Level',
//       title: 'Associate Developer',
//       description: 'Begin your journey with mentored projects and foundational skill development',
//       skills: ['Basic coding proficiency', 'Understanding of development processes', 'Teamwork fundamentals'],
//       icon: '🌱',
//       color: '#4CAF50' // green color for entry level
//     },
//     {
//       id: 2,
//       level: 'Mid Level',
//       title: 'Software Developer',
//       description: 'Take ownership of features and contribute meaningfully to team objectives',
//       skills: ['Advanced programming skills', 'Problem-solving abilities', 'Self-management'],
//       icon: '🌿',
//       color: '#2196F3' // blue color for mid level
//     },
//     {
//       id: 3,
//       level: 'Senior Level',
//       title: 'Senior Developer',
//       description: 'Lead technical initiatives and mentor junior team members',
//       skills: ['System architecture', 'Technical leadership', 'Cross-team collaboration'],
//       icon: '🌳',
//       color: '#9C27B0' // purple color for senior level
//     },
//     {
//       id: 4,
//       level: 'Leadership',
//       title: 'Engineering Manager',
//       description: 'Guide team strategy and drive organizational excellence',
//       skills: ['People management', 'Strategic planning', 'Delivery optimization'],
//       icon: '🌲',
//       color: '#FF5722' // orange color for leadership
//     },
//   ];

//   // Mock data for benefits
//   const benefits = [
//     {
//       id: 1,
//       title: 'Health & Wellness',
//       description: 'Comprehensive health insurance with dental and vision coverage, plus wellness programs and gym stipend',
//       icon: '❤️',
//       color: '#ff7979'
//     },
//     {
//       id: 2,
//       title: 'Flexible Work',
//       description: 'Remote-first culture with flexible hours and home office setup allowance',
//       icon: '🏠',
//       color: '#6c5ce7'
//     },
//     {
//       id: 3,
//       title: 'Learning Budget',
//       description: '$2,000 annual learning budget for courses, books, and conferences',
//       icon: '📚',
//       color: '#fdcb6e'
//     },
//     {
//       id: 4,
//       title: 'Paid Time Off',
//       description: '4 weeks paid vacation plus 10 holidays and unlimited sick days',
//       icon: '✈️',
//       color: '#00cec9'
//     },
//     {
//       id: 5,
//       title: 'Parental Leave',
//       description: '16 weeks fully paid parental leave for all new parents',
//       icon: '👶',
//       color: '#e84393'
//     },
//     {
//       id: 6,
//       title: 'Retirement Plan',
//       description: '401(k) with 4% company match and financial wellness resources',
//       icon: '💰',
//       color: '#55efc4'
//     }
//   ];

//   // Set visibility for animation after component mounts
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="gb-container py-5">
//       <div className="container">
//         {/* Navigation tabs */}
//         <div className="gb-nav-container text-center mb-5">
//           <div className="gb-tab-wrapper d-inline-flex">
//             <button 
//               className={`gb-tab-btn ${activeTab === 'growth' ? 'gb-active' : ''}`}
//               onClick={() => setActiveTab('growth')}
//             >
//               Career Growth
//             </button>
//             <button 
//               className={`gb-tab-btn ${activeTab === 'benefits' ? 'gb-active' : ''}`}
//               onClick={() => setActiveTab('benefits')}
//             >
//               Perks & Benefits
//             </button>
//           </div>
//         </div>

//         {/* Growth Paths Section */}
//         {activeTab === 'growth' && (
//           <div className="gb-growth-section">
//             <motion.div
//               className="gb-section-title text-center mb-5"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="gb-title">Your Growth Journey</h2>
//               <p className="gb-subtitle">We invest in your development with clear advancement paths</p>
//             </motion.div>

//             <div className="row">
//               {growthPaths.map((path, index) => (
//                 <div key={path.id} className="col-md-6 col-lg-3 mb-4">
//                   <motion.div
//                     className="gb-card-wrapper"
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ 
//                       opacity: isVisible ? 1 : 0, 
//                       y: isVisible ? 0 : 50 
//                     }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ 
//                       translateY: -10
//                     }}
//                   >
//                     <div 
//                       className="gb-benefit-card gb-growth-benefit-card"
//                       style={{
//                         borderTop: `4px solid ${path.color}`
//                       }}
//                     >
//                       <div className="gb-level-badge">{path.level}</div>
//                       <div 
//                         className="gb-benefit-icon" 
//                         style={{ backgroundColor: `${path.color}20` }}
//                       >
//                         <span>{path.icon}</span>
//                       </div>
//                       <h3 className="gb-benefit-title">{path.title}</h3>
//                       <p className="gb-benefit-desc">{path.description}</p>
//                       <div className="gb-skills-container">
//                         <h4 className="gb-skills-heading">Key Skills</h4>
//                         <ul className="gb-skills-list">
//                           {path.skills.map((skill, i) => (
//                             <li key={i} className="gb-skill-item">{skill}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Benefits Section */}
//         {activeTab === 'benefits' && (
//           <div className="gb-benefits-section">
//             <motion.div
//               className="gb-section-title text-center mb-5"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="gb-title">Perks & Benefits</h2>
//               <p className="gb-subtitle">We take care of our team with comprehensive benefits</p>
//             </motion.div>

//             <div className="row">
//               {benefits.map((benefit, index) => (
//                 <div key={benefit.id} className="col-md-6 col-lg-4 mb-4">
//                   <motion.div
//                     className="gb-card-wrapper"
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ 
//                       opacity: isVisible ? 1 : 0, 
//                       y: isVisible ? 0 : 50 
//                     }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ 
//                       translateY: -10
//                     }}
//                   >
//                     <div 
//                       className="gb-benefit-card"
//                       style={{
//                         borderTop: `4px solid ${benefit.color}`
//                       }}
//                     >
//                       <div 
//                         className="gb-benefit-icon" 
//                         style={{ backgroundColor: `${benefit.color}20` }}
//                       >
//                         <span>{benefit.icon}</span>
//                       </div>
//                       <h3 className="gb-benefit-title">{benefit.title}</h3>
//                       <p className="gb-benefit-desc">{benefit.description}</p>
//                     </div>
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Call to Action */}
//         <motion.div 
//           className="gb-cta-container text-center mt-5"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ 
//             opacity: isVisible ? 1 : 0, 
//             scale: isVisible ? 1 : 0.9 
//           }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <h3 className="gb-cta-title">Ready to grow with us?</h3>
//           <p className="gb-cta-text">Join our team and build your career while making an impact</p>
//           <button className="gb-cta-button">Explore Openings</button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default GrowthBenefits;

 import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_BASE_URL } from '../../api/config/apiConfig';
import axios from 'axios';
import './GrowthBenefits.css';

// Skeleton Component for Growth Path Cards
const SkeletonCard = () => {
  return (
    <div className="gb-card-wrapper">
      <div className="gb-benefit-card gb-growth-benefit-card skeleton-card">
        <div className="skeleton-badge"></div>
        <div className="skeleton-icon"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-skills-container">
          <div className="skeleton-skills-heading"></div>
          <div className="skeleton-skill"></div>
          <div className="skeleton-skill"></div>
          <div className="skeleton-skill"></div>
        </div>
      </div>
    </div>
  );
};

// Skeleton Component for Benefit Cards
const SkeletonBenefitCard = () => {
  return (
    <div className="gb-card-wrapper">
      <div className="gb-benefit-card skeleton-card">
        <div className="skeleton-icon"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  );
};

const GrowthBenefits = () => {
  // State for animation triggers
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('growth');
  const [growthPaths, setGrowthPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Mock data for benefits (keeping these as they weren't in the API)
  const benefits = [
    {
      id: 1,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance with dental and vision coverage, plus wellness programs and gym stipend',
      icon: '❤️',
      color: '#ff7979'
    },
    {
      id: 2,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and home office setup allowance',
      icon: '🏠',
      color: '#6c5ce7'
    },
    {
      id: 3,
      title: 'Learning Budget',
      description: '$2,000 annual learning budget for courses, books, and conferences',
      icon: '📚',
      color: '#fdcb6e'
    },
    {
      id: 4,
      title: 'Paid Time Off',
      description: '4 weeks paid vacation plus 10 holidays and unlimited sick days',
      icon: '✈️',
      color: '#00cec9'
    },
    {
      id: 5,
      title: 'Parental Leave',
      description: '16 weeks fully paid parental leave for all new parents',
      icon: '👶',
      color: '#e84393'
    },
    {
      id: 6,
      title: 'Retirement Plan',
      description: '401(k) with 4% company match and financial wellness resources',
      icon: '💰',
      color: '#55efc4'
    }
  ];

  // Function to handle image load events
  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({
      ...prev,
      [id]: true
    }));
  };

  // Function to fetch growth paths from API
  const fetchGrowthPaths = async () => {
    setLoading(true);
    try {
     
      const response = await axios.get(`${API_BASE_URL}/api/get-team-growth`);
      
      
      if (response.data.status && response.data.success) {
      
        const apiData = response.data.GrowthJourneys.data;
        console.log('Creeergrowth page response =======>:', apiData);
        
        const processedData = apiData.map(item => {
          // Parse the HTML content in skills
          const skillsWithoutTags = item.skills.replace(/<\/?[^>]+(>|$)/g, "");
          const skillsList = skillsWithoutTags.split(/\n|\./).filter(skill => skill.trim() !== '');
          
          // Generate a color based on experience level
          let color = '#4CAF50'; // default green
          if (item.experience_level === 'Mid Level') {
            color = '#2196F3'; // blue
          } else if (item.experience_level === 'Senior Level') {
            color = '#9C27B0'; // purple
          } else if (item.experience_level === 'Leadership') {
            color = '#FF5722'; // orange
          }
          
          // Select icon based on experience level
          let icon = '🌱'; // Default for Entry Level
          if (item.experience_level === 'Mid Level') {
            icon = '🌿';
          } else if (item.experience_level === 'Senior Level') {
            icon = '🌳';
          } else if (item.experience_level === 'Leadership') {
            icon = '🌲';
          }
          
          return {
            id: item.id,
            level: item.experience_level || 'Entry Level',
            title: item.title,
            description: item.short_description.replace(/<\/?[^>]+(>|$)/g, ""),
            skills: skillsList,
            icon: icon,
            color: color,
            imageUrl: item.icon // Store the image URL from API
          };
        });
        
        // Sort by position if available
        processedData.sort((a, b) => {
          return parseInt(a.position) - parseInt(b.position);
        });
        
        setGrowthPaths(processedData);
        
        // Initialize image load state
        const initialImagesLoaded = {};
        processedData.forEach(path => {
          initialImagesLoaded[path.id] = false;
        });
        setImagesLoaded(initialImagesLoaded);
      } else {
        setError('Failed to load data');
      }
    } catch (err) {
      console.error('Error fetching growth paths:', err);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data and set visibility for animation after component mounts
  useEffect(() => {
    fetchGrowthPaths();
    setIsVisible(true);
  }, []);

  return (
    <div className="gb-container py-5">
      <div className="container">
        {/* Navigation tabs */}
        {/* <div className="gb-nav-container text-center mb-5">
          <div className="gb-tab-wrapper d-inline-flex">
            <button 
              className={`gb-tab-btn ${activeTab === 'growth' ? 'gb-active' : ''}`}
              onClick={() => setActiveTab('growth')}
            >
              Career Growth
            </button>
            <button 
              className={`gb-tab-btn`}
              onClick={() => setActiveTab('benefits')}
            >
              Perks & Benefits
            </button>
          </div>
        </div> */}

        {/* Growth Paths Section */}
        {/* {activeTab === 'growth' && (
          <div className="gb-growth-section">
            <div className="gb-section-title text-center mb-5">
              <h2 className="gb-title">Your Growth Journey</h2>
              <p className="gb-subtitle">We invest in your development with clear advancement paths</p>
            </div>

            {loading ? (
              <div className="row">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="col-md-6 col-lg-3 mb-4">
                    <SkeletonCard />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              <div className="row">
                {growthPaths.map((path, index) => (
                  <div key={path.id} className="col-md-6 col-lg-3 mb-4">
                    <div className="gb-card-wrapper">
                      <div 
                        className="gb-benefit-card gb-growth-benefit-card"
                        style={{
                          borderTop: `4px solid ${path.color}`
                        }}
                      >
                         
                        
                        {path.imageUrl ? (
                          <div className="gb-benefit-icon-container">
                            {!imagesLoaded[path.id] && (
                              <div 
                                className="gb-benefit-icon skeleton-image" 
                                style={{ backgroundColor: `${path.color}20` }}
                              ></div>
                            )}
                            <img 
                              src={path.imageUrl} 
                              alt={path.title} 
                              className={`gb-icon-image ${imagesLoaded[path.id] ? 'loaded' : 'hidden'}`} 
                              onLoad={() => handleImageLoad(path.id)}
                              onError={() => handleImageLoad(path.id)} // Show fallback on error
                            />
                            {imagesLoaded[path.id] && !document.getElementById(`img-${path.id}`)?.complete && (
                              <div className="gb-benefit-icon" style={{ backgroundColor: `${path.color}20` }}>
                                <span>{path.icon}</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div 
                            className="gb-benefit-icon" 
                            style={{ backgroundColor: `${path.color}20` }}
                          >
                            <span>{path.icon}</span>
                          </div>
                        )}
                        
                        <h3 className="gb-benefit-title">{path.title}</h3>
                        <p className="gb-benefit-desc">{path.description}</p>
                        <div className="gb-skills-container">
                          <h4 className="gb-skills-heading">Key Skills</h4>
                          <ul className="gb-skills-list">
                            {path.skills.map((skill, i) => (
                              <li key={i} className="gb-skill-item">{skill}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )} */}

        {/* Benefits Section */}
        {/* {activeTab === 'benefits' && ( */}
          <div className="gb-benefits-section">
            <div className="gb-section-title text-center mb-5">
              <h2 className="gb-title">Perks & Benefits</h2>
              <p className="gb-subtitle">We take care of our team with comprehensive benefits</p>
            </div>

            <div className="row">
              {benefits.map((benefit, index) => (
                <div key={benefit.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="gb-card-wrapper">
                    <div 
                      className="gb-benefit-card"
                      style={{
                        borderTop: `4px solid ${benefit.color}`
                      }}
                    >
                      <div 
                        className="gb-benefit-icon" 
                        style={{ backgroundColor: `${benefit.color}20` }}
                      >
                        <span>{benefit.icon}</span>
                      </div>
                      <h3 className="gb-benefit-title">{benefit.title}</h3>
                      <p className="gb-benefit-desc">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* )} */}

        {/* Call to Action */}
        {/* <div className="gb-cta-container text-center mt-5">
          <h3 className="gb-cta-title">Ready to grow with us?</h3>
          <p className="gb-cta-text">Join our team and build your career while making an impact</p>
          <button className="gb-cta-button">Explore Openings</button>
        </div> */}
      </div>
    </div>
  );
};

export default GrowthBenefits;