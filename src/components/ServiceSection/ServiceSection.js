// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'
// import Services from '../../api/Services';
// import htmlReactParser, { domToReact } from 'html-react-parser';
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// import sIcon1 from '../../images/icons/icon-1.png'
// import sIcon2 from '../../images/icons/icon-2.png'
// import sIcon3 from '../../images/icons/icon-19.png'
// import sIcon4 from '../../images/icons/icon-4.png'
// import SectionTitle from '../SectionTitle/SectionTitle';

// const ServiceSection = (props) => {

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
//     const [loading, setLoading] = useState(true);
//     const [Address, setAddress] = useState(true);
//     const [error, setError] = useState(null);

     
    
//     const removeTags = (htmlString) => {
//         if (typeof htmlString !== "string") {
//             console.error("Invalid input for removeTags:", htmlString);
//             return "";  
//         }
        
        
//         if (!htmlString.includes('<') && !htmlString.includes('>')) {
//             return htmlString;
//         }
        
        
//         try {
//             return htmlReactParser(htmlString, {
//                 replace: (domNode) => {
//                     if (domNode.type === 'tag') {
                        
//                         return <>{domToReact(domNode.children)}</>;
//                     }
//                 },
//             });
//         } catch (error) {
//             console.error("Error parsing HTML:", error);
            
//             // Fallback: use regex to strip tags if parsing fails
//             return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
//         }
//     };

//  // remove tags end

// // In your Hero component, update how you process the banner content:

// const fetchBannerData = async () => {

// try {
//     setLoading(true);
//     const response = await axios.get(`${API_BASE_URL}/api/get-service`);
//     console.log('Service page data response============>:', response.data);

//     const elements = response.data;
//      console.log('service page  data response============>:', response.data);

//     if (elements) {
//       if (elements.Address) setAddress(removeTags(elements.Address));
     
      
    
//     }
    
    
//     if (response.data && response.data.elements.banner_content) {
//         const cleanContent = response.data.elements.banner_content
//             .replace(/<p>/g, '')  
//             .replace(/<\/p>/g, '')  
//             .trim();  
        
//         setBannerContent(cleanContent);  
//     }
    
//     setLoading(false);
//     } catch (err) {
//         console.error("Error fetching banner data:", err);
//         setError("Failed to load banner content. Using default content instead.");
//         setLoading(false);
//     }
//     };

  
//     useEffect(() => {
//     fetchBannerData();
//     }, []);


//     return (
//         <section className="services-section-two style-two">
//             <div className="auto-container">
//                 <SectionTitle subTitle={'Our Services'} MainTitle={'When Innovation will TALK & Design will Visualize, Then Brand Will REACH.'} />
//                 <div className="inner-container">
//                     <div className="clearfix">
//                         {Services.slice(0, 6).map((service, i) => (
//                             <div className="service-block-two style-two col-lg-4 col-md-6 col-sm-12" key={i}>
//                                 <div className="inner-box">
//                                     <div className="color-layer"></div>
//                                     <div className="icon-one" style={{ backgroundImage: `url(${sIcon1})` }}></div>
//                                     <div className="icon-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
//                                     <div className="icon-three" style={{ backgroundImage: `url(${sIcon3})` }}></div>
//                                     <div className="icon-four" style={{ backgroundImage: `url(${sIcon4})` }}></div>
//                                     <div className="icon-box">
//                                         <span className={`icon ${service.Icon}`}></span>
//                                     </div>
//                                     <h5><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h5>
//                                     <div className="text">{service.des}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/* <div className="lower-box">
//                     <div className="text">If You See All Service <Link onClick={ClickHandler} to="/services">Click Hare</Link> Now.</div>
//                 </div> */}
//                 <div className="lower-box"> 

//                 <div className="flex justify-center pt-8">
//                 <Link to="/services" className="theme-btn btn-style-ten">
//                     <span className="txt">View All</span>
//                 </Link>
//                 </div>
//                 </div>


//             </div>
//         </section>
//     );
// }

// export default ServiceSection;

 


 

// import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Services from '../../api/Services'; // Keep for fallback
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// import sIcon1 from '../../images/icons/icon-1.png';
// import sIcon2 from '../../images/icons/icon-2.png';
// import sIcon3 from '../../images/icons/icon-19.png';
// import sIcon4 from '../../images/icons/icon-4.png';
// import SectionTitle from '../SectionTitle/SectionTitle';

// const ServiceSection = (props) => {
//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     };

//     const [apiServices, setApiServices] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     // Default icon class
//     const DEFAULT_ICON = "flaticon-businessman";
    
//     // FIXED: Simplified HTML tags removal function that returns string, not React elements
//     const removeTags = useCallback((htmlString) => {
//         if (!htmlString || typeof htmlString !== "string") {
//             return "";
//         }
        
//         if (!htmlString.includes('<') && !htmlString.includes('>')) {
//             return htmlString;
//         }
        
//         // Use simple regex to strip HTML tags and return plain text
//         return htmlString.replace(/<[^>]*>?/g, '').replace(/&nbsp;/g, ' ').trim();
//     }, []);

//     // Optimized fetch function with caching and timeout
//     const fetchServiceData = useCallback(async () => {
//         // Check if we have cached data
//         const cachedData = sessionStorage.getItem('serviceData');
//         const cachedTimestamp = sessionStorage.getItem('serviceDataTimestamp');
        
//         // Use cached data if it exists and is less than 5 minutes old
//         if (cachedData && cachedTimestamp) {
//             const now = new Date().getTime();
//             const cacheTime = parseInt(cachedTimestamp);
            
//             if (now - cacheTime < 5 * 60 * 1000) { // 5 minutes
//                 try {
//                     const parsedData = JSON.parse(cachedData);
//                     setApiServices(parsedData);
//                     setLoading(false);
//                     return;
//                 } catch (e) {
//                     console.error("Error parsing cached data", e);
//                     // Continue to fetch if parsing fails
//                 }
//             }
//         }
        
//         // Set up timeout to abort if request takes too long
//         const controller = new AbortController();
//         const timeoutId = setTimeout(() => {
//             controller.abort();
//             if (loading) {
//                 console.warn("API request timeout, using fallback data");
//                 setLoading(false);
//                 setError("API request timeout. Using default content.");
//             }
//         }, 5000); // 5 seconds timeout
        
//         try {
//             setLoading(true);
//             const response = await axios.get(`${API_BASE_URL}/api/get-service`, {
//                 signal: controller.signal
//                 // Removed cache-control header that was causing CORS issues
//             });
            
//             clearTimeout(timeoutId);
            
//             if (Array.isArray(response.data) && response.data.length > 0) {
//                 // Process service data more efficiently
//                 const processedServices = response.data.map((service, index) => {
//                     // Parse service_image only once
//                     let serviceImages = [];
//                     try {
//                         if (service.service_image) {
//                             serviceImages = JSON.parse(service.service_image);
//                         }
//                     } catch (e) {
//                         console.warn("Error parsing service images:", e);
//                     }
                    
//                     return {
//                         id: service.id,
//                         sTitle: service.service_name || "Service",
//                         des: removeTags(service.short_desc) || "Service description",
//                         Icon: (Services[index % Services.length] || {}).Icon || DEFAULT_ICON,
//                         slug: service.id.toString(),
//                         banner_image: service.banner_image,
//                         service_images: serviceImages,
//                         // Store the full original service object for access on detail page
//                         originalData: service
//                     };
//                 });
                
//                 setApiServices(processedServices);
                
//                 // Cache the processed data
//                 sessionStorage.setItem('serviceData', JSON.stringify(processedServices));
//                 sessionStorage.setItem('serviceDataTimestamp', new Date().getTime().toString());
//             }
            
//             setLoading(false);
//         } catch (err) {
//             clearTimeout(timeoutId);
//             console.error("Error fetching service data:", err);
            
//             // If we have cached data, use it as fallback even if it's older than 5 minutes
//             if (cachedData) {
//                 try {
//                     const parsedData = JSON.parse(cachedData);
//                     setApiServices(parsedData);
//                     setError("Using cached data - couldn't refresh from server");
//                 } catch (e) {
//                     setError("Failed to load service data. Using default content.");
//                 }
//             } else {
//                 setError("Failed to load service data. Using default content.");
//             }
            
//             setLoading(false);
//         }
//     }, [loading, removeTags]);

//     // Use effect with proper dependency array
//     useEffect(() => {
//         fetchServiceData();
//     }, [fetchServiceData]);

//     // Determine which services to display efficiently
//     const displayServices = apiServices || Services;

//     return (
//         <section className="services-section-two style-two">
//             <div className="auto-container">
//                 <SectionTitle subTitle={'Our Services'} MainTitle={'When Innovation will TALK & Design will Visualize, Then Brand Will REACH.'} />
//                 <div className="inner-container">
//                     <div className="clearfix">
//                         {loading ? (
//                             // Only render 6 skeletons with a more efficient loop
//                             [...Array(6)].map((_, i) => (
//                                 <div className="service-block-two style-two col-lg-4 col-md-6 col-sm-12" key={i}>
//                                     <div className="inner-box">
//                                         <Skeleton height={200} />
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             // Optimized rendering of services
//                             displayServices.slice(0, 6).map((service, i) => (
//                                 <div className="service-block-two style-two col-lg-4 col-md-6 col-sm-12" key={i}>
//                                     <div className="inner-box">
//                                         <div className="color-layer"></div>
//                                         <div className="icon-one" style={{ backgroundImage: `url(${sIcon1})` }}></div>
//                                         <div className="icon-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
//                                         <div className="icon-three" style={{ backgroundImage: `url(${sIcon3})` }}></div>
//                                         <div className="icon-four" style={{ backgroundImage: `url(${sIcon4})` }}></div>
//                                         <div className="icon-box">
//                                             <span className={`icon ${service.Icon || DEFAULT_ICON}`}></span>
//                                         </div>
//                                         <h5>
//                                             <Link 
//                                                 onClick={ClickHandler} 
//                                                 to={`/service-single/${service.slug}`}
//                                                 state={{ serviceData: service }}
//                                             >
//                                                 {service.sTitle}
//                                             </Link>
//                                         </h5>
//                                         <div className="text">
//                                     {typeof service.des === 'string' 
//                                         ? service.des.split(' ').slice(0, 10).join(' ') + (service.des.split(' ').length > 10 ? '...' : '')
//                                         : ''}
//                                     </div>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//                 {error && (
//                     <div className="text-center text-sm text-gray-500 mt-2 mb-4">
//                         {error}
//                     </div>
//                 )}
//                 <div className="lower-box"> 
//                     <div className="flex justify-center pt-8">
//                         <Link to="/services" className="theme-btn btn-style-ten">
//                             <span className="txt">View All</span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ServiceSection;


// import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Services from '../../api/Services'; // Keep for fallback
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// import sIcon1 from '../../images/icons/icon-1.png';
// import sIcon2 from '../../images/icons/icon-2.png';
// import sIcon3 from '../../images/icons/icon-19.png';
// import sIcon4 from '../../images/icons/icon-4.png';
// import SectionTitle from '../SectionTitle/SectionTitle';

// const ServiceSection = (props) => {
//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     };

//     const [apiServices, setApiServices] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     // Default icon class
//     const DEFAULT_ICON = "flaticon-businessman";
    
     
//     const removeTags = useCallback((htmlString) => {
//         if (!htmlString || typeof htmlString !== "string") {
//             return "";
//         }
        
//         if (!htmlString.includes('<') && !htmlString.includes('>')) {
//             return htmlString;
//         }
        
        
//         return htmlString.replace(/<[^>]*>?/g, '').replace(/&nbsp;/g, ' ').trim();
//     }, []);

    
//     const fetchServiceData = useCallback(async () => {
        
//         const cachedData = sessionStorage.getItem('serviceData');
//         const cachedTimestamp = sessionStorage.getItem('serviceDataTimestamp');
        
        
//         if (cachedData && cachedTimestamp) {
//             const now = new Date().getTime();
//             const cacheTime = parseInt(cachedTimestamp);
            
//             if (now - cacheTime < 5 * 60 * 1000) { // 5 minutes
//                 try {
//                     const parsedData = JSON.parse(cachedData);
//                     setApiServices(parsedData);
//                     setLoading(false);
//                     return;
//                 } catch (e) {
//                     console.error("Error parsing cached data", e);
                     
//                 }
//             }
//         }
        
        
//         const controller = new AbortController();
//         const timeoutId = setTimeout(() => {
//             controller.abort();
//             if (loading) {
//                 console.warn("API request timeout, using fallback data");
//                 setLoading(false);
//                 setError("API request timeout. Using default content.");
//             }
//         }, 5000); // 5 seconds timeout
        
//         try {
//             setLoading(true);
//             const response = await axios.get(`${API_BASE_URL}/api/get-service`, {
//                 signal: controller.signal
                 
//             });
            
//             console.log("Service single page Data==============>:", response.data);
//             clearTimeout(timeoutId);
            
//             if (Array.isArray(response.data) && response.data.length > 0) {
                
//                 const processedServices = response.data.map((service, index) => {
                     
//                     let serviceImages = [];
//                     try {
//                         if (service.service_image) {
//                             serviceImages = JSON.parse(service.service_image);
//                         }
//                     } catch (e) {
//                         console.warn("Error parsing service images:", e);
//                     }
                    
//                     return {
//                         slug: service.slug,
//                         sTitle: service.service_name || "Service",
//                         des: removeTags(service.short_desc) || "Service description",
//                         Icon: (Services[index % Services.length] || {}).Icon || DEFAULT_ICON,
//                         slug: service.id.toString(),
//                         banner_image: service.banner_image,
//                         service_images: serviceImages,
//                         service_details: service.service_details,
//                          service_details: service.service_details || "",
                         
//                         originalData: service
//                     };
//                 });
                
//                 setApiServices(processedServices);
                
//                 // Cache the processed data
//                 sessionStorage.setItem('serviceData', JSON.stringify(processedServices));
//                 sessionStorage.setItem('serviceDataTimestamp', new Date().getTime().toString());
//             }
            
//             setLoading(false);
//         } catch (err) {
//             clearTimeout(timeoutId);
//             console.error("Error fetching service data:", err);
            
//             // If we have cached data, use it as fallback even if it's older than 5 minutes
//             if (cachedData) {
//                 try {
//                     const parsedData = JSON.parse(cachedData);
//                     setApiServices(parsedData);
//                     setError("Using cached data - couldn't refresh from server");
//                 } catch (e) {
//                     setError("Failed to load service data. Using default content.");
//                 }
//             } else {
//                 setError("Failed to load service data. Using default content.");
//             }
            
//             setLoading(false);
//         }
//     }, [loading, removeTags]);

    
//     useEffect(() => {
//         fetchServiceData();
//     }, [fetchServiceData]);

    
//     const displayServices = apiServices || Services;
//     const limitedServices = props.limit ? displayServices.slice(0, props.limit) : displayServices;
//     console.log("Display Services Data ==============>", displayServices);

//     return (
//         <section className="services-section-two style-two">
//             <div className="auto-container">
//                 <SectionTitle subTitle={'Our Services'} MainTitle={'When Innovation will TALK & Design will Visualize, Then Brand Will REACH.'} />
//                 <div className="inner-container">
//                     {/* Added 'row' class here for proper grid layout */}
//                     <div className="row clearfix">
//                         {loading ? (
                            
//                             [...Array(6)].map((_, i) => (
//                                 <div className="service-block-two style-two col-6 col-lg-4 col-md-6" key={i}>
//                                     <div className="inner-box">
//                                         <Skeleton height={200} />
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
                            
//                             // displayServices.slice(0, 30).map((service, i) => (
//                                 limitedServices.map((service, i) => (

//                                 <div className="service-block-two style-two col-6 col-lg-4 col-md-6" key={i}>
//                                     <div className="inner-box">
//                                         <div className="color-layer"></div>
//                                         <div className="icon-one" style={{ backgroundImage: `url(${sIcon1})` }}></div>
//                                         <div className="icon-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
//                                         <div className="icon-three" style={{ backgroundImage: `url(${sIcon3})` }}></div>
//                                         <div className="icon-four" style={{ backgroundImage: `url(${sIcon4})` }}></div>
//                                         <div className="icon-box">
//                                             <span className={`icon ${service.Icon || DEFAULT_ICON}`}></span>
//                                         </div>
//                                         <h5>
//                                             <Link 
//                                                 onClick={ClickHandler} 
//                                                 to={`/service-single/${service.slug}`}
//                                                 state={{ serviceData: service }}
//                                             >
//                                                 {service.sTitle}
//                                             </Link>
//                                         </h5>
//                                         <div className="text">
//                                             {typeof service.des === 'string' 
//                                                 ? service.des.split(' ').slice(0, 10).join(' ') + (service.des.split(' ').length > 10 ? '...' : '')
//                                                 : ''}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//                 {error && (
//                     <div className="text-center text-sm text-gray-500 mt-2 mb-4">
//                         {error}
//                     </div>
//                 )}
//                 {props.showViewAll && (
//                     <div className="lower-box"> 
//                         <div className="flex justify-center pt-8">
//                             <Link to="/services" className="theme-btn btn-style-ten">
//                                 <span className="txt">View All</span>
//                             </Link>
//                         </div>
//                     </div>
//                 )}

//             </div>
//         </section>
//     );
// };

// export default ServiceSection;


import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Services from '../../api/Services'; // Keep for fallback
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import sIcon1 from '../../images/icons/icon-1.png';
import sIcon2 from '../../images/icons/icon-2.png';
import sIcon3 from '../../images/icons/icon-19.png';
import sIcon4 from '../../images/icons/icon-4.png';
import SectionTitle from '../SectionTitle/SectionTitle';

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [apiServices, setApiServices] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Default icon class
    const DEFAULT_ICON = "flaticon-businessman";
    
    const removeTags = useCallback((htmlString) => {
        if (!htmlString || typeof htmlString !== "string") {
            return "";
        }
        
        if (!htmlString.includes('<') && !htmlString.includes('>')) {
            return htmlString;
        }
        
        return htmlString.replace(/<[^>]*>?/g, '').replace(/&nbsp;/g, ' ').trim();
    }, []);

    const fetchServiceData = useCallback(async () => {
        const cachedData = sessionStorage.getItem('serviceData');
        const cachedTimestamp = sessionStorage.getItem('serviceDataTimestamp');
        
        if (cachedData && cachedTimestamp) {
            const now = new Date().getTime();
            const cacheTime = parseInt(cachedTimestamp);
            
            if (now - cacheTime < 5 * 60 * 1000) { // 5 minutes
                try {
                    const parsedData = JSON.parse(cachedData);
                    setApiServices(parsedData);
                    setLoading(false);
                    return;
                } catch (e) {
                    console.error("Error parsing cached data", e);
                }
            }
        }
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            controller.abort();
            if (loading) {
                console.warn("API request timeout, using fallback data");
                setLoading(false);
                setError("API request timeout. Using default content.");
            }
        }, 5000); // 5 seconds timeout
        
        try {
            setLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/get-service`, {
                signal: controller.signal
            });
            
            console.log("Service data response:", response.data);
            clearTimeout(timeoutId);
            
            if (Array.isArray(response.data) && response.data.length > 0) {
                const processedServices = response.data.map((service, index) => {
                    let serviceImages = [];
                    try {
                        if (service.service_image) {
                            serviceImages = JSON.parse(service.service_image);
                        }
                    } catch (e) {
                        console.warn("Error parsing service images:", e);
                    }
                    
                    // Ensure both slug properties are set correctly
                    const serviceSlug = service.slug || service.id.toString();
                    
                    return {
                        slug: serviceSlug, // Use this as the primary slug
                        id: service.id.toString(), // Also store ID separately
                        sTitle: service.service_name || "Service",
                        des: removeTags(service.short_desc) || "Service description",
                        Icon: (Services[index % Services.length] || {}).Icon || DEFAULT_ICON,
                        sImg: service.banner_image || (Services[index % Services.length] || {}).sImg,
                        banner_image: service.banner_image,
                        service_images: serviceImages,
                        service_details: service.service_details || "",
                        content: service.description || "",
                        originalData: service
                    };
                });
                
                setApiServices(processedServices);
                
                // Cache the processed data
                sessionStorage.setItem('serviceData', JSON.stringify(processedServices));
                sessionStorage.setItem('serviceDataTimestamp', new Date().getTime().toString());
            }
            
            setLoading(false);
        } catch (err) {
            clearTimeout(timeoutId);
            console.error("Error fetching service data:", err);
            
            // If we have cached data, use it as fallback even if it's older than 5 minutes
            if (cachedData) {
                try {
                    const parsedData = JSON.parse(cachedData);
                    setApiServices(parsedData);
                    setError("Using cached data - couldn't refresh from server");
                } catch (e) {
                    setError("Failed to load service data. Using default content.");
                }
            } else {
                setError("Failed to load service data. Using default content.");
            }
            
            setLoading(false);
        }
    }, [loading, removeTags]);

    useEffect(() => {
        fetchServiceData();
    }, [fetchServiceData]);

    // Ensure we have services to display
    const displayServices = apiServices || Services.map((service, index) => ({
        ...service,
        id: (index + 1).toString() // Add ID to hardcoded services as fallback
    }));
    
    const limitedServices = props.limit ? displayServices.slice(0, props.limit) : displayServices;
    console.log("Display Services Data:", displayServices);

    return (
        <section className="services-section-two style-two">
            <div className="auto-container">
                <SectionTitle subTitle={'Our Services'} MainTitle={'When Innovation will TALK & Design will Visualize, Then Brand Will REACH.'} />
                <div className="inner-container">
                    {/* Added 'row' class here for proper grid layout */}
                    <div className="row clearfix">
                        {loading ? (
                            // Skeleton loading placeholders
                            [...Array(6)].map((_, i) => (
                                <div className="service-block-two style-two col-6 col-lg-4 col-md-6" key={i}>
                                    <div className="inner-box">
                                        <Skeleton height={200} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Rendered service items
                            limitedServices.map((service, i) => (
                                <div className="service-block-two style-two col-6 col-lg-4 col-md-6" key={i}>
                                    <div className="inner-box">
                                        <div className="color-layer"></div>
                                        <div className="icon-one" style={{ backgroundImage: `url(${sIcon1})` }}></div>
                                        <div className="icon-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
                                        <div className="icon-three" style={{ backgroundImage: `url(${sIcon3})` }}></div>
                                        <div className="icon-four" style={{ backgroundImage: `url(${sIcon4})` }}></div>
                                        <div className="icon-box">
                                            <span className={`icon ${service.Icon || DEFAULT_ICON}`}></span>
                                        </div>
                                        <h5>
                                            <Link 
                                                onClick={ClickHandler} 
                                                to={`/service-single/${service.slug}`}
                                                state={{ serviceData: service }}
                                            >
                                                {service.sTitle}
                                            </Link>
                                        </h5>
                                        <div className="text">
                                            {typeof service.des === 'string' 
                                                ? service.des.split(' ').slice(0, 10).join(' ') + (service.des.split(' ').length > 10 ? '...' : '')
                                                : ''}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                {error && (
                    <div className="text-center text-sm text-gray-500 mt-2 mb-4">
                        {error}
                    </div>
                )}
                {props.showViewAll && (
                    <div className="lower-box"> 
                        <div className="flex justify-center pt-8">
                            <Link to="/services" className="theme-btn btn-style-ten">
                                <span className="txt">View All</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServiceSection;