// import React, { useState } from 'react';
// import {
//   FaShareAlt,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhone,
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
// } from 'react-icons/fa';
// import './SocialSidebar.css';

// const SocialSidebar = () => {
//   const [showShareIcons, setShowShareIcons] = useState(false);

  

//   return (
//     <div
//       className="social-sidebar-bodypart position-fixed d-flex flex-column align-items-end"
//       style={{
//         top: '50%',
//         right: 0,
//         transform: 'translateY(-50%)',
//         zIndex: 1050,
//         gap: '10px',
//       }}
//     >
//       {/* Share Button */}
//       <div
//         className="sidebar-btn-bodypart bg-success text-white"
//         onMouseEnter={() => setShowShareIcons(true)}
//         onMouseLeave={() => setShowShareIcons(false)}
//       >
//         <FaShareAlt className="icon-bodypart" />
//         <span className="label-bodypart">Share</span>

//         {showShareIcons && (
//           <div className="share-icons-bodypart bg-success px-3 py-2 rounded-start">
//             <a href="#" className="text-white me-3"><FaFacebookF /></a>
//             <a href="#" className="text-white me-3"><FaInstagram /></a>
//             <a href="#" className="text-white me-3"><FaTwitter /></a>
//             <a href="#" className="text-white me-3"><FaLinkedinIn /></a>
//             <a href="#" className="text-white"><FaYoutube /></a>
//           </div>
//         )}
//       </div>

//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/1234567890"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="sidebar-btn-bodypart bg-success text-white"
//       >
//         <FaWhatsapp className="icon-bodypart" />
//         <span className="label-bodypart">Send Hi on WhatsApp</span>
//       </a>

//       {/* Email */}
//       <a
//         href="mailto:info@example.com"
//         className="sidebar-btn-bodypart bg-success text-white"
//       >
//         <FaEnvelope className="icon-bodypart" />
//         <span className="label-bodypart">Email Us</span>
//       </a>

//       {/* Phone */}
//       <a
//         href="tel:+1234567890"
//         className="sidebar-btn-bodypart bg-success text-white"
//       >
//         <FaPhone className="icon-bodypart" />
//         <span className="label-bodypart">Call Now</span>
//       </a>
//     </div>
//   );
// };

// export default SocialSidebar;





 
// API PART START
 

import React, { useState, useEffect } from 'react';
import htmlReactParser, { domToReact } from 'html-react-parser';
import axios from "axios";
import { API_BASE_URL } from "../../api/config/apiConfig";
import { FaGlobe } from "react-icons/fa";
import {
  FaShareAlt,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import './SocialSidebar.css';
import { color } from 'framer-motion';

const SocialSidebar = () => {
    const [showShareIcons, setShowShareIcons] = useState(false);
    
    const DEFAULT_SOCIAL_LINKS = {
        whatsapp_number: "1234567890",
        mail: "info@exampletest.com",
        
       mobile: "+1234567890123",
       facebook_link: "https://www.facebook.com/vyaparkranti/",
       instagram_link: "https://www.instagram.com/vyaparkranti/",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
    };

    const [socialLinks, setSocialLinks] = useState(DEFAULT_SOCIAL_LINKS);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bannerTitle, setBannerTitle] = useState("");
    const [bannerContent, setBannerContent] = useState("");

    // Improved removeTags function
    const removeTags = (htmlString) => {
        if (typeof htmlString !== "string") {
            console.error("Invalid input for removeTags:", htmlString);
            return "";
        }
        
        // Simple case where there are no tags
        if (!htmlString.includes('<') && !htmlString.includes('>')) {
            return htmlString;
        }
        
        // Special case for URLs wrapped in simple tags
        const urlMatch = htmlString.match(/^<[^>]+>(https?:\/\/[^\s<]+)<\/[^>]+>$/i);
        if (urlMatch) {
            return urlMatch[1];
        }
        
        // Fallback to regex for simple tag removal
        return htmlString.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    };

    // const fetchSocialData = async (retryCount = 0, maxRetries = 3) => {
    //     try {
    //         setLoading(true);
            
    //         const axiosInstance = axios.create({
    //             timeout: 5000
    //         });
            
    //         const response = await axiosInstance.get(`${API_BASE_URL}/api/home-elements`);
            
    //         if (response.data?.elements) {
    //             const socialData = response.data.elements;
    //             console.log("social media link=========>", socialData)
                
    //             // Process all social links with removeTags
    //             const processedLinks = {
    //                 whatsapp_number: removeTags(socialData.whatsapp_number || DEFAULT_SOCIAL_LINKS.whatsapp_number),
    //                 mail: removeTags(socialData.mail || DEFAULT_SOCIAL_LINKS.mail),
    //                 mobile: removeTags(socialData.mobile || DEFAULT_SOCIAL_LINKS.mobile),
    //                 facebook_link: removeTags(socialData.facebook_link || DEFAULT_SOCIAL_LINKS.facebook_link),
    //                 instagram_link: removeTags(socialData.instagram_link || DEFAULT_SOCIAL_LINKS.instagram_link),
    //                 twitter: removeTags(socialData.twitter || DEFAULT_SOCIAL_LINKS.twitter),
    //                 linkedin: removeTags(socialData.linkedin || DEFAULT_SOCIAL_LINKS.linkedin),
    //                 youtube: removeTags(socialData.youtube || DEFAULT_SOCIAL_LINKS.youtube)
    //             };
                
    //             setSocialLinks(processedLinks);
                
    //             if (socialData.banner_title) {
    //                 setBannerTitle(removeTags(socialData.banner_title));
    //             }
                
    //             if (socialData.banner_content) {
    //                 setBannerContent(removeTags(socialData.banner_content));
    //             }
                
    //             console.log('Social links updated from API');
    //         } else {
    //             console.warn('Social media data not found in API response, using default links');
    //         }
            
    //         setError(null);
    //         setLoading(false);
    //     } catch (err) {
    //         console.error("Error fetching social media data:", err);
            
    //         if (retryCount < maxRetries) {
    //             const backoffTime = 1000 * Math.pow(2, retryCount);
    //             setTimeout(() => fetchSocialData(retryCount + 1, maxRetries), backoffTime);
    //             return;
    //         }
            
    //         setError("Failed to load social media links. Using default links instead.");
    //         setLoading(false);
    //     }
    // };

    // error issue of mutitime api hit start

    const fetchSocialData = async () => {
    // Check for cached data first
    const cachedData = localStorage.getItem('social_media_data');
    const cachedTimestamp = localStorage.getItem('social_media_timestamp');
    
    // Use cached data if it's less than 30 minutes old
    if (cachedData && cachedTimestamp) {
        const isRecent = (Date.now() - parseInt(cachedTimestamp)) < 1800000; // 30 minutes
        if (isRecent) {
            try {
                const parsedData = JSON.parse(cachedData);
                setSocialLinks({
                    whatsapp_number: removeTags(parsedData.whatsapp_number || DEFAULT_SOCIAL_LINKS.whatsapp_number),
                    mail: removeTags(parsedData.mail || DEFAULT_SOCIAL_LINKS.mail),
                    mobile: removeTags(parsedData.mobile || DEFAULT_SOCIAL_LINKS.mobile),
                    facebook_link: removeTags(parsedData.facebook_link || DEFAULT_SOCIAL_LINKS.facebook_link),
                    instagram_link: removeTags(parsedData.instagram_link || DEFAULT_SOCIAL_LINKS.instagram_link),
                    twitter: removeTags(parsedData.twitter || DEFAULT_SOCIAL_LINKS.twitter),
                    linkedin: removeTags(parsedData.linkedin || DEFAULT_SOCIAL_LINKS.linkedin),
                    youtube: removeTags(parsedData.youtube || DEFAULT_SOCIAL_LINKS.youtube)
                });
                
                if (parsedData.banner_title) {
                    setBannerTitle(removeTags(parsedData.banner_title));
                }
                
                if (parsedData.banner_content) {
                    setBannerContent(removeTags(parsedData.banner_content));
                }
                
                setLoading(false);
                return; // Skip API call
            } catch (err) {
                console.error("Error parsing cached data:", err);
                // Continue to API call if parsing fails
            }
        }
    }
    
    try {
        setLoading(true);
        
        const axiosInstance = axios.create({
            timeout: 10000 // Increased timeout
        });
        
        const response = await axiosInstance.get(`${API_BASE_URL}/api/home-elements`);
        
        if (response.data?.elements) {
            const socialData = response.data.elements;
            
            // Cache the response
            localStorage.setItem('social_media_data', JSON.stringify(socialData));
            localStorage.setItem('social_media_timestamp', Date.now().toString());
            
            // Process social links
            const processedLinks = {
                whatsapp_number: removeTags(socialData.whatsapp_number || DEFAULT_SOCIAL_LINKS.whatsapp_number),
                mail: removeTags(socialData.mail || DEFAULT_SOCIAL_LINKS.mail),
                mobile: removeTags(socialData.mobile || DEFAULT_SOCIAL_LINKS.mobile),
                facebook_link: removeTags(socialData.facebook_link || DEFAULT_SOCIAL_LINKS.facebook_link),
                instagram_link: removeTags(socialData.instagram_link || DEFAULT_SOCIAL_LINKS.instagram_link),
                twitter: removeTags(socialData.twitter || DEFAULT_SOCIAL_LINKS.twitter),
                linkedin: removeTags(socialData.linkedin || DEFAULT_SOCIAL_LINKS.linkedin),
                youtube: removeTags(socialData.youtube || DEFAULT_SOCIAL_LINKS.youtube)
            };
            
            setSocialLinks(processedLinks);
            
            if (socialData.banner_title) {
                setBannerTitle(removeTags(socialData.banner_title));
            }
            
            if (socialData.banner_content) {
                setBannerContent(removeTags(socialData.banner_content));
            }
        } else {
            console.warn('Social media data not found in API response, using default links');
        }
        
        setError(null);
    } catch (err) {
        console.error("Error fetching social media data:", err);
        setError("Failed to load social media links. Using default links instead.");
        
        // No immediate retry - let subsequent renders or user actions trigger retries
    } finally {
        setLoading(false);
    }
};

 // error issue of mutitime api hit end

    const whatsapp_number = (number) => {
        const cleanNumber = number.replace(/\D/g, '');
        return `https://wa.me/${cleanNumber}`;
    };

    const handleLinkClick = (e, url) => {
        if (url === "#") {
            e.preventDefault();
            return;
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        fetchSocialData();
    }, []);

    return (
        <div className="social-sidebar-bodypart position-fixed d-flex flex-column align-items-end"
            style={{
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
                zIndex: 1050,
                gap: '10px',
            }}>
            
            {/* Share Button */}
            <div className="sidebar-btn-bodypart   text-white"
                onMouseEnter={() => setShowShareIcons(true)}
                onMouseLeave={() => setShowShareIcons(false)} style={{ backgroundColor: '#652e6f' }}>
                {/* <FaShareAlt className="icon-bodypart" /> */}
                <FaGlobe className="icon-bodypart" />
                {/* <span className="label-bodypart">Social </span> */}

                {showShareIcons && (
                    <div className="share-icons-bodypart  px-3 py-2 rounded-start" style={{ backgroundColor: '#652e6f' }}>
                        {socialLinks.facebook_link !== "#" && (
                            <a href={socialLinks.facebook_link} className="text-white me-3" target="_blank" rel="noopener noreferrer"
                                onClick={(e) => handleLinkClick(e, socialLinks.facebook_link)}>
                                <FaFacebookF />
                            </a>
                        )}
                        {socialLinks.instagram_link !== "#" && (
                            <a href={socialLinks.instagram_link} className="text-white me-3" target="_blank" rel="noopener noreferrer"
                                onClick={(e) => handleLinkClick(e, socialLinks.instagram_link)}>
                                <FaInstagram />
                            </a>
                        )}
                        {socialLinks.twitter !== "#" && (
                            <a href={socialLinks.twitter} className="text-white me-3" target="_blank" rel="noopener noreferrer"
                                onClick={(e) => handleLinkClick(e, socialLinks.twitter)}>
                                <FaTwitter />
                            </a>
                        )}
                        {socialLinks.linkedin !== "#" && (
                            <a href={socialLinks.linkedin} className="text-white me-3" target="_blank" rel="noopener noreferrer"
                                onClick={(e) => handleLinkClick(e, socialLinks.linkedin)}>
                                <FaLinkedinIn />
                            </a>
                        )}
                        {socialLinks.youtube !== "#" && (
                            <a href={socialLinks.youtube} className="text-white" target="_blank" rel="noopener noreferrer"
                                onClick={(e) => handleLinkClick(e, socialLinks.youtube)}>
                                <FaYoutube />
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* WhatsApp */}
            <a href={whatsapp_number(socialLinks.whatsapp_number)}
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-btn-bodypart   text-white"
                onClick={(e) => handleLinkClick(e, whatsapp_number(socialLinks.whatsapp_number))} style={{ backgroundColor: '#652e6f' }}>
                <FaWhatsapp className="icon-bodypart" />
                <span className="label-bodypart">{socialLinks.whatsapp_number}</span>
            </a>

            {/* Email */}
             <a href={`mailto:${socialLinks.mail}`}
            className="sidebar-btn-bodypart text-white"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleLinkClick(`mailto:${socialLinks.mail}`, '_blank', 'noopener,noreferrer')}
            style={{ backgroundColor: '#652e6f' }}>
            <FaEnvelope className="icon-bodypart" />
            <span className="label-bodypart" style={{fontSize: '13px'}}>{socialLinks.mail}</span>
            </a>

            {/* Phone */}
            <a href={`tel:${socialLinks.mobile}`}
                className="sidebar-btn-bodypart   text-white"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => window.open(`tel:${socialLinks.mobile}`, '_blank', 'noopener,noreferrer')} style={{ backgroundColor: '#652e6f' }}>
                <FaPhone className="icon-bodypart" />
                <span className="label-bodypart">{socialLinks.mobile}</span>
            </a>
        </div>
    );
};

export default SocialSidebar;
 

// import React, { useState, useEffect } from 'react';
// import { 
//   FaShareAlt,
//   FaWhatsapp,
//   FaEnvelope,
//   FaPhone,
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
// } from 'react-icons/fa';
// import './SocialSidebar.css';

// // Default fallback data in case API fails
// const FALLBACK_DATA = {
//   whatsapp: '+1234567890',
//   email: 'contact@example.com',
//   phone: '+1234567890',
//   facebook: 'https://facebook.com',
//   instagram: 'https://instagram.com',
//   twitter: 'https://twitter.com',
//   linkedin: 'https://linkedin.com',
//   youtube: 'https://youtube.com'
// };

// const SocialSidebar = () => {
//   const [showShareIcons, setShowShareIcons] = useState(false);
//   const [socialData, setSocialData] = useState(FALLBACK_DATA);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch social media links from API with retry logic
//     const fetchSocialData = async (retryCount = 0, maxRetries = 3) => {
//       try {
//         setIsLoading(true);
//         setError(null);
        
//         // Set timeout for fetch to avoid long waiting times
//         const controller = new AbortController();
//         const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
//         const response = await fetch('http://192.168.1.7:8000/api/home-elements', {
//           signal: controller.signal
//         });
        
//         clearTimeout(timeoutId);
        
//         if (!response.ok) {
//           throw new Error(`API responded with status: ${response.status}`);
//         }
        
//         const data = await response.json();
        
//         // Update state with API data
//         if (data && data.social) {
//           setSocialData({
//             whatsapp: data.social.whatsapp || FALLBACK_DATA.whatsapp,
//             email: data.social.email || FALLBACK_DATA.email,
//             phone: data.social.phone || FALLBACK_DATA.phone,
//             facebook: data.social.facebook || FALLBACK_DATA.facebook,
//             instagram: data.social.instagram || FALLBACK_DATA.instagram,
//             twitter: data.social.twitter || FALLBACK_DATA.twitter,
//             linkedin: data.social.linkedin || FALLBACK_DATA.linkedin,
//             youtube: data.social.youtube || FALLBACK_DATA.youtube
//           });
//           console.log('Social data fetched successfully===========>:', data.social);
//         } else {
//           console.warn('Social data not found in API response, using fallback data');
//         }
//       } catch (error) {
//         // Check if we should retry
//         if (retryCount < maxRetries) {
//           console.log(`Retry attempt ${retryCount + 1} of ${maxRetries}...`);
//           setTimeout(() => {
//             fetchSocialData(retryCount + 1, maxRetries);
//           }, 1000 * (retryCount + 1)); // Exponential backoff
//           return;
//         }
        
//         // If we've reached max retries, log error and use fallback data
//         console.error('Error fetching social data:', error);
//         setError(`Failed to load social data: ${error.message}`);
        
//         // Ensure we're using the fallback data
//         setSocialData(FALLBACK_DATA);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     // Try to fetch from API first
//     fetchSocialData();
    
//     // Alternative API endpoint for backup
//     // You can uncomment this if you have a backup API
//     // const backupEndpoint = 'https://your-backup-api.com/api/social';
    
//   }, []);

//   // Helper function to format WhatsApp link
//   const formatWhatsAppLink = (number) => {
//     // Remove all non-digit characters
//     const cleanNumber = number.replace(/\D/g, '');
//     return `https://wa.me/${cleanNumber}`;
//   };

//   return (
//     <div className="social-sidebar">
//       {/* Show a minimal loading indicator if still loading */}
//       {isLoading && <div className="loading-indicator"></div>}
      
//       {/* Show error message if there was an error */}
//       {error && !isLoading && (
//         <div className="error-message" style={{ display: 'none' }}>
//           {/* Hidden from UI but useful for debugging */}
//           {error}
//         </div>
//       )}
      
//       {/* Share Button */}
//       <div 
//         className="social-icon share-btn"
//         onMouseEnter={() => setShowShareIcons(true)}
//         onMouseLeave={() => setShowShareIcons(false)}
//       >
//         <FaShareAlt />
//         <span className="icon-text">Share</span>
        
//         {showShareIcons && (
//           <div className="share-dropdown">
//             <a href={socialData.facebook} target="_blank" rel="noopener noreferrer" className="social-share-icon facebook">
//               <FaFacebookF />
//             </a>
//             <a href={socialData.twitter} target="_blank" rel="noopener noreferrer" className="social-share-icon twitter">
//               <FaTwitter />
//             </a>
//             <a href={socialData.linkedin} target="_blank" rel="noopener noreferrer" className="social-share-icon linkedin">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         )}
//       </div>
      
//       {/* WhatsApp */}
//       <a 
//         href={formatWhatsAppLink(socialData.whatsapp)}
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="social-icon whatsapp"
//       >
//         <FaWhatsapp />
//         <span className="icon-text">Send Hi on WhatsApp</span>
//       </a>
      
//       {/* Email */}
//       <a 
//         href={`mailto:${socialData.email}`} 
//         className="social-icon email"
//       >
//         <FaEnvelope />
//         <span className="icon-text">Email Us</span>
//       </a>
      
//       {/* Phone */}
//       <a 
//         href={`tel:${socialData.phone}`} 
//         className="social-icon phone"
//       >
//         <FaPhone />
//         <span className="icon-text">Call Now</span>
//       </a>
      
//       {/* Social Media Links */}
//       <div className="fixed-social-links">
//         {socialData.instagram && (
//           <a href={socialData.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram">
//             <FaInstagram />
//           </a>
//         )}
//         {socialData.youtube && (
//           <a href={socialData.youtube} target="_blank" rel="noopener noreferrer" className="social-icon youtube">
//             <FaYoutube />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SocialSidebar;