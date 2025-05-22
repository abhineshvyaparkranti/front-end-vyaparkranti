// import React, { Fragment } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import { Link } from 'react-router-dom'
// import PageTitle from '../../components/pagetitle/PageTitle'
// import Scrollbar from '../../components/scrollbar/scrollbar'
// import { useParams } from 'react-router-dom'
// import Services from '../../api/Services';
// import sSimg from '../../images/resource/service-2.jpg';
// import sSimg2 from '../../images/resource/service-3.jpg';
// import shape from '../../images/background/pattern-19.jpg';
// import PartnerSection from '../../components/PartnerSection';
// import Footer from '../../components/footer/Footer';


// const ServiceSinglePage = (props) => {
//     const { slug } = useParams()

//     const serviceDetails = Services.find(item => item.slug === slug)

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={serviceDetails?.sTitle} pagesub={serviceDetails?.sTitle} />
//             <div className="sidebar-page-container">
//                 <div className="auto-container">
//                     <div className="row clearfix" style={{ display: "flex", flexDirection: "row-reverse" }}>
//                         <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
//                             <aside className="sidebar sticky-top">
//                                 <div className="sidebar-widget">
//                                     <ul className="service-list">
//                                         {Services.slice(0, 6).map((service, i) => (
//                                             <li key={i}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}> <span className="color-layer"></span>{service.sTitle}</Link></li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div className="broucher-widget">
//                                     <div className="widget-content" style={{ backgroundImage: `url(${shape})` }}>
//                                         <h3>Download <br /> Our Brochures</h3>
//                                         <div className="icon flaticon-pdf-1"></div>
//                                         <div className="text">Business is a marketing discipline focused on growing visibility in organic (non-paid) technic required.</div>
//                                         <Link to="/" className="download">Click here to download</Link>
//                                     </div>
//                                 </div>
//                                 <div className="help-widget">
//                                     <div className="widget-content">
//                                         <h4>Need Help ?</h4>
//                                         <div className="text">Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now</div>
//                                         <ul className="help-list">
//                                             <li><Link to="/"><span className="icon fa fa-phone"></span>+0 000 0000 000</Link></li>
//                                             <li><Link to="/"><span className="icon fa fa-envelope-o"></span>Merix@example.com</Link></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </aside>
//                         </div>

//                         <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
//                             <div className="service-detail">
//                                 <div className="inner-box">
//                                     <div className="image">
//                                         <img src={serviceDetails?.sImg} alt="" />
//                                     </div>
//                                     <div className="lower-content">
//                                         <h3>Content Marketing</h3>
//                                         <p>Having been around for over a decade, Basecamp is considered a reliable tool that excels at giving organizations a high-level view of their teams. Like Asana, Basecamp can help monitor tracking, but also offers additional features like direct messaging chats, centralized document storage, and a scheduling tool.Basecamp aims to take on Slack, Asana, Google Drive, and Dropbox by melding all of their competitors into one robust management tool.</p>
//                                         <h4>Features</h4>
//                                         <p>Designed with the harried business person in mind, Basecamp helps managers and team members stay on top of their professional lives. The app boasts that users will no longer drown in a sea of emails as that feature is already embedded into the app. Additionally, the scheduling and tracking features help ensure teams never again miss a deadline. Another interesting component of Basecamp is that managercan eliminate the need for “check-in” meetings by sending an automated message daily to employees that ask for a recap of what they accomplished that day. Then employees can “tag” teammates in their recaps to explain what they need help with or what they finished.</p>
//                                         <div className="two-columns">
//                                             <div className="row clearfix">
//                                                 <div className="column col-lg-6 col-md-6 col-sm-12">
//                                                     <div className="image">
//                                                         <img src={sSimg} alt="" />
//                                                     </div>
//                                                 </div>
//                                                 <div className="column col-lg-6 col-md-6 col-sm-12">
//                                                     <h4>Cost</h4>
//                                                     <p>A unique feature of Basecamp is that the app doesn’t charge for an increase in the number of users or projects. So unlike some of its peers, Basecamp charges a flat-fixed fee of $99 a month for a team, no matter the size.</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <h4>Why It’s Good for SEO Pros</h4>
//                                         <p>Managing a client’s SEO consists of many different timelines and action items. Keeping track of client emails, meetings, and central documents is a full-time job.</p>
//                                         <div className="two-columns">
//                                             <div className="row clearfix">
//                                                 <div className="column col-lg-6 col-md-6 col-sm-12">
//                                                     <p>By offering one of the best all-encompassing software solutions, Basecamp helps busy SEO pros stay on top of their entire business by more efficiently checking in with their team and deadlines in one easy to use the app.Casie Gillette, senior director of digital marketing at KoMarketing, uses Basecamp mainly for communicating to clients.</p>
//                                                     <p>“Basecamp is our primary means of communication with clients,” Gillette said. “For any deliverable, it allows an easy way to track the conversation and adjust docs accordingly.”</p>
//                                                 </div>
//                                                 <div className="column col-lg-6 col-md-6 col-sm-12">
//                                                     <div className="image">
//                                                         <img src={sSimg2} alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <PartnerSection styleClass={'style-two'}/>
//             <Footer/>
//             <Scrollbar />
//         </Fragment>
//     )
// };
// export default ServiceSinglePage;

 


// import React, { Fragment } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../../api/config/apiConfig';
// import Navbar from '../../components/Navbar/Navbar';
// import { Link } from 'react-router-dom';
// import PageTitle from '../../components/pagetitle/PageTitle';
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Services from '../../api/Services';
// import sSimg from '../../images/resource/service-2.jpg';
// import sSimg2 from '../../images/resource/service-3.jpg';
// import shape from '../../images/background/pattern-19.jpg';
// import PartnerSection from '../../components/PartnerSection';
// import Footer from '../../components/footer/Footer';

// const ServiceSinglePage = (props) => {
//     const { slug } = useParams();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [service, setService] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Hardcoded serviceDetails for fallback
//     const serviceDetails = Services.find(item => item.slug === slug);

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     };

//     useEffect(() => {
//         // Scroll to top when component mounts
//         window.scrollTo(10, 0);
        
//         // First, try to get data from router state (passed from ServiceSection)
//         if (location.state && location.state.serviceData) {
//             setService(location.state.serviceData);
//             setLoading(false);
//             return;
//         }
        
//         // If no data in router state, try to get from sessionStorage
//         const cachedData = sessionStorage.getItem('serviceData');
//         if (cachedData) {
//             try {
//                 const services = JSON.parse(cachedData);
//                 const matchedService = services.find(s => s.slug === slug || s.id.toString() === slug);
//                 if (matchedService) {
//                     setService(matchedService);
//                     setLoading(false);
//                     return;
//                 }
//             } catch (e) {
//                 console.error("Error parsing cached service data", e);
//                 // Continue to fetch if parsing fails
//             }
//         }
        
//         // If we still don't have the data, fetch it from API
//         const fetchServiceById = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`${API_BASE_URL}/api/get-service/${slug}`);
//                  console.log("single page services data response:===============>", response.data);

                
//                 if (response.data) {
//                     // Process the service data
//                     const serviceData = response.data.service;
//                     console.log("service-single page data ==========>", serviceData);
//                     let serviceImages = [];
                    
//                     try {
//                         if (serviceData.service_image) {
//                             serviceImages = JSON.parse(serviceData.service_image);
//                         }
//                     } catch (e) {
//                         console.error("Error parsing service images:", e);
//                     }
                    
//                     const processedService = {
//                         id: serviceData.id,
//                         sTitle: serviceData.service_name || "Service",
//                         sImg: serviceData.banner_image || serviceDetails?.sImg,
//                         des: serviceData.short_desc || "Service description",
//                         content: serviceData.description,
//                         slug: serviceData.id.toString(),
//                         banner_image: serviceData.banner_image,
//                         service_images: serviceImages,
//                         originalData: serviceData
//                     };
                    
//                     setService(processedService);
//                 }
                
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching service by ID:", err);
                
//                 // Try to use fallback from hardcoded Services
//                 const fallbackService = Services.find(s => s.slug === slug);
//                 if (fallbackService) {
//                     setService(fallbackService);
//                     setError("Using fallback service data");
//                 } else {
//                     setError("Failed to load service data");
//                     // Redirect to services page if no data found
//                     setTimeout(() => navigate('/services'), 3000);
//                 }
                
//                 setLoading(false);
//             }
//         };
        
//         fetchServiceById();
//     }, [slug, location.state, navigate, serviceDetails]);

//     if (loading) {
//         return (
//             <Fragment>
//                 <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//                 <PageTitle pageTitle="Loading..." pagesub="Please wait" />
//                 <div className="sidebar-page-container">
//                     <div className="auto-container">
//                         <div className="text-center py-5">
//                             <div className="spinner-border" role="status">
//                                 <span className="visually-hidden">Loading...</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//                 <Scrollbar />
//             </Fragment>
//         );
//     }

//     if (error && !service) {
//         return (
//             <Fragment>
//                 <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//                 <PageTitle pageTitle="Error" pagesub="An error occurred" />
//                 <div className="sidebar-page-container">
//                     <div className="auto-container">
//                         <div className="alert alert-danger my-5">
//                             {error}. Redirecting to services page...
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//                 <Scrollbar />
//             </Fragment>
//         );
//     }

//     // Use API data if available, otherwise fall back to hardcoded data
//     const displayService = service || serviceDetails;

//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={displayService?.sTitle} pagesub={displayService?.sTitle} />
//             <div className="sidebar-page-container">
//                 <div className="auto-container">
//                     <div className="row clearfix" style={{ display: "flex", flexDirection: "row-reverse" }}>
//                         <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
//                             <aside className="sidebar sticky-top">
//                                 <div className="sidebar-widget">
//                                     <ul className="service-list">
//                                         {Services.slice(0, 6).map((service, i) => (
//                                             <li key={i}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}> <span className="color-layer"></span>{service.sTitle}</Link></li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div className="broucher-widget">
//                                     <div className="widget-content" style={{ backgroundImage: `url(${shape})` }}>
//                                         <h3>Download <br /> Our Brochures</h3>
//                                         <div className="icon flaticon-pdf-1"></div>
//                                         <div className="text">Business is a marketing discipline focused on growing visibility in organic (non-paid) technic required.</div>
//                                         <Link to="/" className="download">Click here to download</Link>
//                                     </div>
//                                 </div>
//                                 <div className="help-widget">
//                                     <div className="widget-content">
//                                         <h4>Need Help ?</h4>
//                                         <div className="text">Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now</div>
//                                         <ul className="help-list">
//                                             <li><Link to="/"><span className="icon fa fa-phone"></span>+0 000 0000 000</Link></li>
//                                             <li><Link to="/"><span className="icon fa fa-envelope-o"></span>Merix@example.com</Link></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </aside>
//                         </div>

//                         <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
//                             <div className="service-detail">
//                                 <div className="inner-box">
//                                     <div className="image">
//                                         <img src={displayService?.sImg || displayService?.banner_image} alt={displayService?.sTitle} />
//                                     </div>
//                                     <div className="lower-content">
//                                         <h3>{displayService?.sTitle}</h3>
                                        
//                                         {/* If API content is available, use it, otherwise use hardcoded content */}
//                                         {displayService?.content ? (
//                                             <div dangerouslySetInnerHTML={{ __html: displayService.content }} />
//                                         ) : (
//                                             <>
//                                                  <h4>Features</h4>
//                                                 <p>{displayService?.des || "Having been around for over a decade, Basecamp is considered a reliable tool that excels at giving organizations a high-level view of their teams. Like Asana, Basecamp can help monitor tracking, but also offers additional features like direct messaging chats, centralized document storage, and a scheduling tool.Basecamp aims to take on Slack, Asana, Google Drive, and Dropbox by melding all of their competitors into one robust management tool."}</p>
                                                
//                                             </>
//                                         )}
                                        
//                                         {/* Service images gallery */}
//                                         {displayService?.service_images && displayService.service_images.length > 0 && (
//                                             <div className="service-gallery mt-5">
//                                                 <h3>Gallery</h3>
//                                                 <div className="row">
//                                                     {displayService.service_images.map((img, idx) => (
//                                                         <div className="column col-lg-6 col-md-6 col-sm-12 mb-4" key={idx}>
//                                                             <div className="image">
//                                                                 <img 
//                                                                     src={img} 
//                                                                     alt={`${displayService.sTitle} - image ${idx + 1}`}
//                                                                     className="img-fluid rounded"
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <PartnerSection styleClass={'style-two'} />
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     );
// };

// export default ServiceSinglePage;



//  import React, { Fragment } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../../api/config/apiConfig';
// import Navbar from '../../components/Navbar/Navbar';
// import { Link } from 'react-router-dom';
// import PageTitle from '../../components/pagetitle/PageTitle';
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Services from '../../api/Services';
// import sSimg from '../../images/resource/service-2.jpg';
// import sSimg2 from '../../images/resource/service-3.jpg';
// import shape from '../../images/background/pattern-19.jpg';
// import PartnerSection from '../../components/PartnerSection';
// import Footer from '../../components/footer/Footer';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// // Service Detail Page Skeleton Component
// const ServiceDetailSkeleton = () => (
//     <div className="service-detail">
//         <div className="inner-box">
//             <div className="image">
//                 <Skeleton height={400} width="100%" />
//             </div>
//             <div className="lower-content">
//                 <h3><Skeleton height={36} width="70%" /></h3>
//                 <Skeleton height={20} count={2} />
//                 <h4><Skeleton height={28} width="30%" /></h4>
//                 <Skeleton height={16} count={4} />
//                 <Skeleton height={16} count={3} />
//                 <div className="service-gallery mt-5">
//                     <h3><Skeleton height={32} width="20%" /></h3>
//                     <div className="row">
//                         <div className="column col-lg-6 col-md-6 col-sm-12 mb-4">
//                             <Skeleton height={200} />
//                         </div>
//                         <div className="column col-lg-6 col-md-6 col-sm-12 mb-4">
//                             <Skeleton height={200} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// // Sidebar Skeleton Component
// const SidebarSkeleton = () => (
//     <aside className="sidebar sticky-top">
//         <div className="sidebar-widget">
//             <ul className="service-list">
//                 {[...Array(6)].map((_, i) => (
//                     <li key={i}><Skeleton height={60} /></li>
//                 ))}
//             </ul>
//         </div>
//         <div className="broucher-widget">
//             <div className="widget-content">
//                 <h3><Skeleton height={40} width="80%" /></h3>
//                 <div className="text"><Skeleton height={40} count={3} /></div>
//                 <Skeleton height={60} width="60%" />
//             </div>
//         </div>
//         <div className="help-widget">
//             <div className="widget-content">
//                 <h4><Skeleton height={30} /></h4>
//                 <div className="text"><Skeleton height={20} count={2} /></div>
//                 <ul className="help-list">
//                     <li><Skeleton height={24} /></li>
//                     <li><Skeleton height={24} /></li>
//                 </ul>
//             </div>
//         </div>
//     </aside>
// );

// const ServiceSinglePage = (props) => {
//     const { slug } = useParams();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [service, setService] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Hardcoded serviceDetails for fallback
//     const serviceDetails = Services.find(item => item.slug === slug);

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     };

//     useEffect(() => {
//         // Scroll to top when component mounts
//         window.scrollTo(10, 0);
        
//         // First, try to get data from router state (passed from ServiceSection)
//         if (location.state && location.state.serviceData) {
//             setService(location.state.serviceData);
//             setLoading(false);
//             return;
//         }
        
//         // If no data in router state, try to get from sessionStorage
//         const cachedData = sessionStorage.getItem('serviceData');
//         if (cachedData) {
//             try {
//                 const services = JSON.parse(cachedData);
//                 const matchedService = services.find(s => s.slug === slug || s.id.toString() === slug);
//                 if (matchedService) {
//                     setService(matchedService);
//                     setLoading(false);
//                     return;
//                 }
//             } catch (e) {
//                 console.error("Error parsing cached service data", e);
//                 // Continue to fetch if parsing fails
//             }
//         }
        
//         // If we still don't have the data, fetch it from API
//         const fetchServiceById = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`${API_BASE_URL}/api/get-service/${slug}`);
//                 console.log("single page services data response:===============>", response.data);

                
//                 if (response.data) {
//                     // Process the service data
//                     const serviceData = response.data.service;
//                     console.log("service-single page data ==========>", serviceData);
//                     let serviceImages = [];
                    
//                     try {
//                         if (serviceData.service_image) {
//                             serviceImages = JSON.parse(serviceData.service_image);
//                         }
//                     } catch (e) {
//                         console.error("Error parsing service images:", e);
//                     }
                    
//                     const processedService = {
//                         id: serviceData.id,
//                         sTitle: serviceData.service_name || "Service",
//                         sImg: serviceData.banner_image || serviceDetails?.sImg,
//                         des: serviceData.short_desc || "Service description",
//                         content: serviceData.description,
//                         slug: serviceData.id.toString(),
//                         banner_image: serviceData.banner_image,
//                         service_images: serviceImages,
//                         originalData: serviceData
//                     };
                    
//                     setService(processedService);
//                 }
                
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching service by ID:", err);
                
//                 // Try to use fallback from hardcoded Services
//                 const fallbackService = Services.find(s => s.slug === slug);
//                 if (fallbackService) {
//                     setService(fallbackService);
//                     setError("Using fallback service data");
//                 } else {
//                     setError("Failed to load service data");
//                     // Redirect to services page if no data found
//                     setTimeout(() => navigate('/services'), 3000);
//                 }
                
//                 setLoading(false);
//             }
//         };
        
//         fetchServiceById();
//     }, [slug, location.state, navigate, serviceDetails]);

//     if (loading) {
//         return (
//             <Fragment>
//                 <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//                 <PageTitle pageTitle="Loading..." pagesub="Please wait" />
//                 <div className="sidebar-page-container">
//                     <div className="auto-container">
//                         <div className="row clearfix" style={{ display: "flex", flexDirection: "row-reverse" }}>
//                             <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
//                                 <SidebarSkeleton />
//                             </div>
//                             <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
//                                 <ServiceDetailSkeleton />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//                 <Scrollbar />
//             </Fragment>
//         );
//     }

//     if (error && !service) {
//         return (
//             <Fragment>
//                 <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//                 <PageTitle pageTitle="Error" pagesub="An error occurred" />
//                 <div className="sidebar-page-container">
//                     <div className="auto-container">
//                         <div className="alert alert-danger my-5">
//                             {error}. Redirecting to services page...
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//                 <Scrollbar />
//             </Fragment>
//         );
//     }

//     // Use API data if available, otherwise fall back to hardcoded data
//     const displayService = service || serviceDetails;

//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={displayService?.sTitle} pagesub={displayService?.sTitle} />
//             <div className="sidebar-page-container">
//                 <div className="auto-container">
//                     <div className="row clearfix" style={{ display: "flex", flexDirection: "row-reverse" }}>
//                         <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
//                             <aside className="sidebar sticky-top">
//                                 <div className="sidebar-widget">
//                                     <ul className="service-list">
//                                         {Services.slice(0, 6).map((service, i) => (
//                                             <li key={i}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}> <span className="color-layer"></span>{service.sTitle}</Link></li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div className="broucher-widget">
//                                     <div className="widget-content" style={{ backgroundImage: `url(${shape})` }}>
//                                         <h3>Download <br /> Our Brochures</h3>
//                                         <div className="icon flaticon-pdf-1"></div>
//                                         <div className="text">Business is a marketing discipline focused on growing visibility in organic (non-paid) technic required.</div>
//                                         <Link to="/" className="download">Click here to download</Link>
//                                     </div>
//                                 </div>
//                                 <div className="help-widget">
//                                     <div className="widget-content">
//                                         <h4>Need Help ?</h4>
//                                         <div className="text">Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now</div>
//                                         <ul className="help-list">
//                                             <li><Link to="/"><span className="icon fa fa-phone"></span>+0 000 0000 000</Link></li>
//                                             <li><Link to="/"><span className="icon fa fa-envelope-o"></span>Merix@example.com</Link></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </aside>
//                         </div>

//                         <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
//                             <div className="service-detail">
//                                 <div className="inner-box">
//                                     <div className="image">
//                                         <img src={displayService?.sImg || displayService?.banner_image} alt={displayService?.sTitle} />
//                                     </div>
//                                     <div className="lower-content">
//                                         <h3>{displayService?.sTitle}</h3>
                                        
//                                         {/* If API content is available, use it, otherwise use hardcoded content */}
//                                         {displayService?.content ? (
//                                             <div dangerouslySetInnerHTML={{ __html: displayService.content }} />
//                                         ) : (
//                                             <>
//                                                 <h4>Features</h4>
//                                                 <p>{displayService?.des || "Having been around for over a decade, Basecamp is considered a reliable tool that excels at giving organizations a high-level view of their teams. Like Asana, Basecamp can help monitor tracking, but also offers additional features like direct messaging chats, centralized document storage, and a scheduling tool.Basecamp aims to take on Slack, Asana, Google Drive, and Dropbox by melding all of their competitors into one robust management tool."}</p>
//                                             </>
//                                         )}
                                        
//                                         {/* Service images gallery */}
//                                         {displayService?.service_images && displayService.service_images.length > 0 && (
//                                             <div className="service-gallery mt-5">
//                                                 <h3>Gallery</h3>
//                                                 <div className="row">
//                                                     {displayService.service_images.map((img, idx) => (
//                                                         <div className="column col-lg-6 col-md-6 col-sm-12 mb-4" key={idx}>
//                                                             <div className="image">
//                                                                 <img 
//                                                                     src={img} 
//                                                                     alt={`${displayService.sTitle} - image ${idx + 1}`}
//                                                                     className="img-fluid rounded"
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <PartnerSection styleClass={'style-two'} />
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     );
// };

// export default ServiceSinglePage;



// import React, { Fragment } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../../api/config/apiConfig';
// import Navbar from '../../components/Navbar/Navbar';
// import { Link } from 'react-router-dom';
// import PageTitle from '../../components/pagetitle/PageTitle';
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Services from '../../api/Services';
// // import shape from '../../images/background/pattern-19.jpg';
// import PartnerSection from '../../components/PartnerSection';
// import Footer from '../../components/footer/Footer';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import htmlReactParser, { domToReact } from 'html-react-parser';
// import BlogSidebar from '../../components/BlogSidebar';
// import ServiceList from './ServiceList';
// import ServiceBaneer from './ServiceBaneer';
// import "./ServiceSinglePage.css";
// import ContactFormModal from '../../components/ContactFormModal/ContactFormModal';
// import ContactFormModalTwo from '../../components/ContactFormModal/ConatctFormModalTwo';

// // Service Detail Page Skeleton Component
// const ServiceDetailSkeleton = () => (
//     <div className="service-detail">
//         <div className="inner-box">
//             <div className="image">
//                 <Skeleton height={400} width="100%" />
//             </div>
//             <div className="lower-content">
//                 <h3><Skeleton height={36} width="70%" /></h3>
//                 <Skeleton height={20} count={2} />
//                 <h4><Skeleton height={28} width="30%" /></h4>
//                 <Skeleton height={16} count={4} />
//                 <Skeleton height={16} count={3} />
//                 <div className="service-gallery mt-5">
//                     <h3><Skeleton height={32} width="20%" /></h3>
//                     <div className="row">
//                         <div className="column col-lg-6 col-md-6 col-sm-12 mb-4">
//                             <Skeleton height={200} />
//                         </div>
//                         <div className="column col-lg-6 col-md-6 col-sm-12 mb-4">
//                             <Skeleton height={200} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// // Sidebar Skeleton Component
// const SidebarSkeleton = () => (
//     <aside className="sidebar sticky-top">
//         <div className="sidebar-widget">
//             <ul className="service-list">
//                 {[...Array(6)].map((_, i) => (
//                     <li key={i}><Skeleton height={60} /></li>
//                 ))}
//             </ul>
//         </div>
//         <div className="broucher-widget">
//             <div className="widget-content">
//                 <h3><Skeleton height={40} width="80%" /></h3>
//                 <div className="text"><Skeleton height={40} count={3} /></div>
//                 <Skeleton height={60} width="60%" />
//             </div>
//         </div>
//         <div className="help-widget">
//             <div className="widget-content">
//                 <h4><Skeleton height={30} /></h4>
//                 <div className="text"><Skeleton height={20} count={2} /></div>
//                 <ul className="help-list">
//                     <li><Skeleton height={24} /></li>
//                     <li><Skeleton height={24} /></li>
//                 </ul>
//             </div>
//         </div>
//     </aside>
// );

// const ServiceSinglePage = (props) => {
//     const { slug } = useParams();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [service, setService] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
//     const[address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
//             const[mobile, setMobile] = useState("+1234567790 test");
//             const[mail, setMail] = useState("test@gmail.com test");
//             const[contact_timing, setcontact_timing] = useState("");
//             const[Map_link, setMap_link] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.037650106843!2d76.98448781508391!3d28.612870082425267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fdda4eabfb1%3A0x1b29e6f8e8722395!2sVyapar%20Kranti!5e0!3m2!1sen!2sin!4v1713436924098!5m2!1sen!2sin");

//     // Hardcoded serviceDetails for fallback
//     const serviceDetails = Services.find(item => item.slug === slug);

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     };

//     useEffect(() => {
//         // Scroll to top when component mounts
//         window.scrollTo(10, 0);
        
//         // First, try to get data from router state (passed from ServiceSection)
//         if (location.state && location.state.serviceData) {
//             setService(location.state.serviceData);
//             setLoading(false);
//             return;
//         }
        
//         // If no data in router state, try to get from sessionStorage
//         const cachedData = sessionStorage.getItem('serviceData');
//         if (cachedData) {
//             try {
//                 const services = JSON.parse(cachedData);
//                 const matchedService = services.find(s => s.slug === slug || s.id.toString() === slug);
//                 if (matchedService) {
//                     setService(matchedService);
//                     setLoading(false);
//                     return;
//                 }
//             } catch (e) {
//                 console.error("Error parsing cached service data", e);
//                 // Continue to fetch if parsing fails
//             }
//         }
        
//         // If we still don't have the data, fetch it from API
//         const fetchServiceById = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`${API_BASE_URL}/api/get-service/${slug}`);
//                 console.log("single page services data response:===============>", response.data);

//                 if (response.data && response.data.service) {
//                     // Process the service data
//                     const serviceData = response.data.service;
//                     console.log("service-single page data ==========>", serviceData);
                    
//                     let serviceImages = [];
                    
//                     try {
//                         if (serviceData.service_image) {
//                             serviceImages = JSON.parse(serviceData.service_image);
//                         }
//                     } catch (e) {
//                         console.error("Error parsing service images:", e);
//                     }
                    
//                     const processedService = {
//                         slug: serviceData.slug,
//                         sTitle: serviceData.service_name || "Service",
//                         sImg: serviceData.banner_image || serviceDetails?.sImg,
//                         des: serviceData.short_desc || "Service description",
//                         content: serviceData.description,
//                         slug: serviceData.id.toString(),
//                         banner_image: serviceData.banner_image,
//                         service_images: serviceImages,
//                         originalData: serviceData,
//                         service_details: serviceData.service_details || "",
//                     };
                    
//                     console.log("Service-single page data =============>", processedService);
//                     setService(processedService);
//                 } else {
//                     throw new Error("Invalid response format");
//                 }
//             } catch (err) {
//                 console.error("Error fetching service by ID:", err);
                
//                 // Try to use fallback from hardcoded Services
//                 const fallbackService = Services.find(s => s.slug === slug);
//                 if (fallbackService) {
//                     setService(fallbackService);
//                     setError("Using fallback service data");
//                 } else {
//                     setError("Failed to load service data");
//                     // Redirect to services page if no data found
//                     setTimeout(() => navigate('/services'), 3000);
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };
        
//         fetchServiceById();
//     }, [slug, location.state, navigate, serviceDetails]);

//      const removeTags = (htmlString) => {
//             if (typeof htmlString !== "string") {
//                 console.error("Invalid input for removeTags:", htmlString);
//                 return ""; // Return an empty string to prevent errors
//             }
            
//             // If the string doesn't contain any HTML tags, return it as is
//             if (!htmlString.includes('<') && !htmlString.includes('>')) {
//                 return htmlString;
//             }
            
//             // Use a simplified approach to just extract text content
//             try {
//                 return htmlReactParser(htmlString, {
//                     replace: (domNode) => {
//                         if (domNode.type === 'tag') {
//                             // Keep content of all tags, effectively removing the tags themselves
//                             return <>{domToReact(domNode.children)}</>;
//                         }
//                     },
//                 });
//             } catch (error) {
//                 console.error("Error parsing HTML:", error);
                
//                 // Fallback: use regex to strip tags if parsing fails
//                 return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
//             }
//         };
    
//          // remove tags end


//     const fetchBannerData = async () => {

//     try {
//         setLoading(true);
//         const response = await axios.get(`${API_BASE_URL}/api/home-elements`);
//         console.log('Contact page data response============>:', response.data.elements);
    
//         const elements = response.data.elements;
//          console.log('Contact page  data response============>:', response.data.elements);
    
//         if (elements) {
//           if (elements.Address) setAddress(removeTags(elements.Address));
//           if (elements.mobile) setMobile(removeTags(elements.mobile));
//           if (elements.mail) setMail(removeTags(elements.mail));
//           if (elements.Map_link) setMap_link(removeTags(elements.Map_link));
//           if (elements.contact_timing) setcontact_timing(removeTags(elements.contact_timing));
          
        
//         }
        
//         // Process banner content to preserve intended formatting but remove unwanted p tags
//         if (response.data && response.data.elements.banner_content) {
//             const cleanContent = response.data.elements.banner_content
//                 .replace(/<p>/g, '') // Remove opening p tags
//                 .replace(/<\/p>/g, '') // Remove closing p tags
//                 .trim(); // Remove extra whitespace
            
//             setBannerContent(cleanContent); // Now content still has desired tags like <br> but no p tags
//         }
        
//         setLoading(false);
//     } catch (err) {
//         console.error("Error fetching banner data:", err);
//         setError("Failed to load banner content. Using default content instead.");
//         setLoading(false);
//     }
//     };

//     // Fetch data when component mounts
//     useEffect(() => {
//         fetchBannerData();
//     }, []);


//     if (loading) {
//         return (
//             <Fragment>
//                 <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//                 <PageTitle pageTitle="Loading..." pagesub="Please wait" />
//                 <div className="sidebar-page-container">
//                     <div className="auto-container">
//                         <div className="row clearfix" style={{ display: "flex", flexDirection: "row-reverse" }}>
//                             <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
//                                 <SidebarSkeleton />
//                             </div>
//                             <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
//                                 <ServiceDetailSkeleton />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//                 <Scrollbar />
//             </Fragment>
//         );
//     }

//     if (error && !service) {
//         return (
//             <Fragment>
//                 <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//                 <PageTitle pageTitle="Error" pagesub="An error occurred" />
//                 <div className="sidebar-page-container">
//                     <div className="auto-container">
//                         <div className="alert alert-danger my-5">
//                             {error}. Redirecting to services page...
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//                 <Scrollbar />
//             </Fragment>
//         );
//     }

//     // Use API data if available, otherwise fall back to hardcoded data
//     const displayService = service || serviceDetails;
//     console.log("🔥 Final Display Service Data=========>:", displayService);

    

//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={displayService?.sTitle} pagesub={displayService?.sTitle} />
//             <div className="sidebar-page-container">
//                 <div className="auto-container">
//                     <div className="row clearfix" style={{ display: "flex", flexDirection: "row-reverse" }}>
//                         <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
//                             <aside className="sidebar sticky-top">
//                                 {/* <div className="sidebar-widget">
                                     
//                                     <ul className="service-list">
//                                     {Services.slice(0, 6).map((service, i) => (
//                                         <li key={i}>
//                                             <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
//                                                 <span className="color-layer"></span>
//                                                 {service.sTitle}
//                                             </Link>
//                                         </li>
//                                     ))}
                                     
//                                 </ul>

//                                 </div> */}
//                                  <ServiceList services={Services} onClick={ClickHandler} />
//                                 {/* <div className="broucher-widget">
//                                     <div className="widget-content" style={{ backgroundImage: `url(${shape})` }}>
//                                         <h3>Download <br /> Our Brochures</h3>
//                                         <div className="icon flaticon-pdf-1"></div>
//                                         <div className="text">Business is a marketing discipline focused on growing visibility in organic (non-paid) technic required.</div>
//                                         <Link to="/" className="download">Click here to download</Link>
//                                     </div>
//                                 </div> */}
//                                 <ServiceBaneer />
//                                  <ContactFormModalTwo />
//                                 <div className="help-widget">
//                                     <div className="widget-content">
//                                         <h4>Need Help ?</h4>
//                                         {/* <div className="text">Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now</div> */}
//                                         <ul className="help-list">
//                                             <li><Link to="/"><span className="icon fa fa-phone"></span>{mobile}</Link></li>
//                                             <li><Link to="/"><span className="icon fa fa-envelope-o"></span>{mail}</Link></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </aside>
//                         </div>

//                         {/* query form */}
                       
                      
                      

//                         {/* query from end here */}

//                         <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
//                             <div className="service-detail">
//                                 <div className="inner-box">
//                                     <div className="image">
//                                         <img src={displayService?.sImg || displayService?.banner_image} alt={displayService?.sTitle} />
//                                     </div>
//                                     <div className="lower-content">
//                                         <h3>{displayService?.sTitle}</h3>
                                        
//                                         {/* If API content is available, use it, otherwise use hardcoded content */}
//                                         {displayService?.content ? (
//                                             <div dangerouslySetInnerHTML={{ __html: displayService.content }} />
//                                         ) : (
//                                             <>
//                                                 {/* <h4>Features</h4> */}
//                                                 <p>
//                                                     {displayService?.des || "Having been around for over a decade, Basecamp is considered a reliable tool that excels at giving organizations a high-level view of their teams. Like Asana, Basecamp can help monitor tracking, but also offers additional features like direct messaging chats, centralized document storage, and a scheduling tool.Basecamp aims to take on Slack, Asana, Google Drive, and Dropbox by melding all of their competitors into one robust management tool."}
//                                                 </p>
                                                
//                                                 {/* Display service_details */}
//                                                 {displayService?.service_details ? (
//                                                     <div
//                                                         dangerouslySetInnerHTML={{ __html: displayService.service_details }}
//                                                     />
//                                                 ) : (
//                                                     <p>
//                                                         Having been around for over a decade, Basecamp is considered a
//                                                         reliable tool that excels at giving organizations a high-level view
//                                                         of their teams. Like Asana, Basecamp can help monitor tracking, but
//                                                         also offers additional features like direct messaging chats,
//                                                         centralized document storage, and a scheduling tool.Basecamp aims to
//                                                         take on Slack, Asana, Google Drive, and Dropbox by melding all of
//                                                         their competitors into one robust management tool.
//                                                     </p>
//                                                 )}
//                                             </>
//                                         )}
                                        
//                                         {/* Service images gallery */}
//                                         {/* {displayService?.service_images && displayService.service_images.length > 0 && (
//                                             <div className="service-gallery mt-5">
//                                                 <h3>Gallery</h3>
//                                                 <div className="row">
//                                                     {displayService.service_images.map((img, idx) => (
//                                                         <div className="column col-lg-6 col-md-6 col-sm-12 mb-4" key={idx}>
//                                                             <div className="image hover-zoom">
//                                                                 <img 
//                                                                     src={img} 
//                                                                     alt={`${displayService.sTitle} - image ${idx + 1}`}
//                                                                     className="img-fluid rounded"
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         )} */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <PartnerSection styleClass={'style-two'} />
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     );
// };

// export default ServiceSinglePage;


import React, { Fragment } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Services from '../../api/Services';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer/Footer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import htmlReactParser, { domToReact } from 'html-react-parser';
import ServiceList from './ServiceList';
import ServiceBaneer from './ServiceBaneer';
import "./ServiceSinglePage.css";
import ContactFormModalTwo from '../../components/ContactFormModal/ConatctFormModalTwo';

// Service Detail Skeleton Component (unchanged)
const ServiceDetailSkeleton = () => (
    <div className="service-detail">
        <div className="inner-box">
            <div className="image">
                <Skeleton height={400} width="100%" />
            </div>
            <div className="lower-content">
                <h3><Skeleton height={36} width="70%" /></h3>
                <Skeleton height={20} count={2} />
                <h4><Skeleton height={28} width="30%" /></h4>
                <Skeleton height={16} count={4} />
                <Skeleton height={16} count={3} />
                <div className="service-gallery mt-5">
                    <h3><Skeleton height={32} width="20%" /></h3>
                    <div className="row">
                        <div className="column col-lg-6 col-md-6 col-sm-12 mb-4">
                            <Skeleton height={200} />
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12 mb-4">
                            <Skeleton height={200} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Sidebar Skeleton Component (unchanged)
const SidebarSkeleton = () => (
    <aside className="sidebar sticky-top">
        <div className="sidebar-widget">
            <ul className="service-list">
                {[...Array(6)].map((_, i) => (
                    <li key={i}><Skeleton height={60} /></li>
                ))}
            </ul>
        </div>
        <div className="broucher-widget">
            <div className="widget-content">
                <h3><Skeleton height={40} width="80%" /></h3>
                <div className="text"><Skeleton height={40} count={3} /></div>
                <Skeleton height={60} width="60%" />
            </div>
        </div>
        <div className="help-widget">
            <div className="widget-content">
                <h4><Skeleton height={30} /></h4>
                <div className="text"><Skeleton height={20} count={2} /></div>
                <ul className="help-list">
                    <li><Skeleton height={24} /></li>
                    <li><Skeleton height={24} /></li>
                </ul>
            </div>
        </div>
    </aside>
);

const ServiceSinglePage = (props) => {
    const { slug } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
    const [address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
    const [mobile, setMobile] = useState("+1234567790 test");
    const [mail, setMail] = useState("test@gmail.com test");
    const [contact_timing, setcontact_timing] = useState("");
    const [Map_link, setMap_link] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.037650106843!2d76.98448781508391!3d28.612870082425267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fdda4eabfb1%3A0x1b29e6f8e8722395!2sVyapar%20Kranti!5e0!3m2!1sen!2sin!4v1713436924098!5m2!1sen!2sin");

    // Find service by slug or ID in the static services list
    const findServiceInStaticList = (searchSlug) => {
        return Services.find(item => 
            // Check if it matches by slug or ID
            item.slug === searchSlug || 
            (item.id && item.id.toString() === searchSlug)
        );
    };

    // Get the hardcoded service details for fallback
    const serviceDetails = findServiceInStaticList(slug);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // HTML tag removal utility
    const removeTags = (htmlString) => {
        if (typeof htmlString !== "string") {
            console.error("Invalid input for removeTags:", htmlString);
            return ""; // Return an empty string to prevent errors
        }
        
        // If the string doesn't contain any HTML tags, return it as is
        if (!htmlString.includes('<') && !htmlString.includes('>')) {
            return htmlString;
        }
        
        // Use a simplified approach to just extract text content
        try {
            return htmlReactParser(htmlString, {
                replace: (domNode) => {
                    if (domNode.type === 'tag') {
                        // Keep content of all tags, effectively removing the tags themselves
                        return <>{domToReact(domNode.children)}</>;
                    }
                },
            });
        } catch (error) {
            console.error("Error parsing HTML:", error);
            
            // Fallback: use regex to strip tags if parsing fails
            return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
        }
    };

    // Function to find a service in session storage
    const findServiceInSessionStorage = (searchSlug) => {
        const cachedData = sessionStorage.getItem('serviceData');
        if (cachedData) {
            try {
                const services = JSON.parse(cachedData);
                return services.find(s => 
                    s.slug === searchSlug || 
                    (s.id && s.id.toString() === searchSlug)
                );
            } catch (e) {
                console.error("Error parsing cached service data", e);
            }
        }
        return null;
    };

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(10, 0);
        
        // First, try to get data from router state (passed from ServiceSection)
        if (location.state && location.state.serviceData) {
            setService(location.state.serviceData);
            setLoading(false);
            return;
        }
        
        // Try to get from sessionStorage
        const cachedService = findServiceInSessionStorage(slug);
        if (cachedService) {
            setService(cachedService);
            setLoading(false);
            return;
        }
        
        // If still don't have the data, fetch it from API
        const fetchServiceById = async () => {
            try {
                setLoading(true);
                
                // Try two approaches: first by slug path, then by ID
                let response = null;
                let tryBySlug = true;
                
                try {
                    // First try: get service by slug
                    response = await axios.get(`${API_BASE_URL}/api/service-details/${slug}`);
                    
                    console.log("Response by slug:", response.data);
                    tryBySlug = false;
                } catch (error) {
                    console.log("Failed to find by slug, will try by ID");
                    
                    // If slug lookup fails, tryBySlug remains true
                }
                
                // If first attempt failed, try getting by ID
                if (tryBySlug) {
                    try {
                        response = await axios.get(`${API_BASE_URL}/api/get-service/${slug}`);
                        console.log("Response by ID:", response.data);
                    } catch (secondError) {
                        // If both attempts failed, throw an error
                        throw new Error("Could not find service by slug or ID");
                    }
                }

                if (response && response.data && response.data.service) {
                    // Process the service data
                    const serviceData = response.data.service;
                    console.log("Service-single page data ==========>", serviceData);
                    
                    let serviceImages = [];
                    
                    try {
                        if (serviceData.service_image) {
                            serviceImages = JSON.parse(serviceData.service_image);
                        }
                    } catch (e) {
                        console.error("Error parsing service images:", e);
                    }
                    
                    const processedService = {
                        slug: serviceData.slug || slug, // Use original slug if available
                        sTitle: serviceData.service_name || "Service",
                        sImg: serviceData.banner_image || (serviceDetails ? serviceDetails.sImg : null),
                        des: serviceData.short_desc || "Service description",
                        content: serviceData.description,
                        banner_image: serviceData.banner_image,
                        service_images: serviceImages,
                        originalData: serviceData,
                        service_details: serviceData.service_details || "",
                    };
                    
                    console.log("Processed service data =============>", processedService);
                    setService(processedService);
                } else {
                    throw new Error("Invalid response format");
                }
            } catch (err) {
                console.error("Error fetching service by ID or slug:", err);
                
                // Try to use fallback from hardcoded Services
                if (serviceDetails) {
                    console.log("Using fallback service data:", serviceDetails);
                    setService(serviceDetails);
                    setError("Using fallback service data");
                } else {
                    setError("Failed to load service data");
                    // Wait longer before redirecting
                    setTimeout(() => navigate('/services'), 5000);
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchServiceById();
    }, [slug, location.state, navigate, serviceDetails]);

    const fetchBannerData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/home-elements`);
            console.log('Contact page data response============>:', response.data.elements);
        
            const elements = response.data.elements;
            
            if (elements) {
                if (elements.Address) setAddress(removeTags(elements.Address));
                if (elements.mobile) setMobile(removeTags(elements.mobile));
                if (elements.mail) setMail(removeTags(elements.mail));
                if (elements.Map_link) setMap_link(removeTags(elements.Map_link));
                if (elements.contact_timing) setcontact_timing(removeTags(elements.contact_timing));
            }
            
            // Process banner content to preserve intended formatting but remove unwanted p tags
            if (response.data && response.data.elements.banner_content) {
                const cleanContent = response.data.elements.banner_content
                    .replace(/<p>/g, '') // Remove opening p tags
                    .replace(/<\/p>/g, '') // Remove closing p tags
                    .trim(); // Remove extra whitespace
                
                setBannerContent(cleanContent); // Now content still has desired tags like <br> but no p tags
            }
            
            setLoading(false);
        } catch (err) {
            console.error("Error fetching banner data:", err);
            setError("Failed to load banner content. Using default content instead.");
            setLoading(false);
        }
    };

    // Fetch data when component mounts
    useEffect(() => {
        fetchBannerData();
    }, []);

    if (loading) {
        return (
            <Fragment>
                <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
                <PageTitle pageTitle="Loading..." pagesub="Please wait" />
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row clearfix" style={{ display: "flex", flexDirection: "row-reverse" }}>
                            <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
                                <SidebarSkeleton />
                            </div>
                            <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
                                <ServiceDetailSkeleton />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    if (error && !service) {
        return (
            <Fragment>
                <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
                <PageTitle pageTitle="Error" pagesub="An error occurred" />
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="alert alert-danger my-5">
                            {error}. Redirecting to services page...
                        </div>
                    </div>
                </div>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    // Use API data if available, otherwise fall back to hardcoded data
    const displayService = service || serviceDetails;
    console.log("🔥 Final Display Service Data=========>:", displayService);

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={displayService?.sTitle} pagesub={displayService?.sTitle} />
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix" style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar sticky-top">
                                <ServiceList services={Services} onClick={ClickHandler} />
                                <ServiceBaneer />
                                <ContactFormModalTwo />
                                <div className="help-widget">
                                    <div className="widget-content">
                                        <h4>Need Help ?</h4>
                                        <ul className="help-list">
                                            <li><Link to="/"><span className="icon fa fa-phone"></span>{mobile}</Link></li>
                                            <li><Link to="/"><span className="icon fa fa-envelope-o"></span>{mail}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
                            <div className="service-detail">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src={displayService?.sImg || displayService?.banner_image} alt={displayService?.sTitle} />
                                    </div>
                                    <div className="lower-content">
                                        <h3>{displayService?.sTitle}</h3>
                                        
                                        {/* If API content is available, use it, otherwise use hardcoded content */}
                                        {displayService?.content ? (
                                            <div dangerouslySetInnerHTML={{ __html: displayService.content }} />
                                        ) : (
                                            <>
                                                <p>
                                                    {displayService?.des || "Having been around for over a decade, Basecamp is considered a reliable tool that excels at giving organizations a high-level view of their teams. Like Asana, Basecamp can help monitor tracking, but also offers additional features like direct messaging chats, centralized document storage, and a scheduling tool.Basecamp aims to take on Slack, Asana, Google Drive, and Dropbox by melding all of their competitors into one robust management tool."}
                                                </p>
                                                
                                                {/* Display service_details */}
                                                {displayService?.service_details ? (
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: displayService.service_details }}
                                                    />
                                                ) : (
                                                    <p>
                                                        Having been around for over a decade, Basecamp is considered a
                                                        reliable tool that excels at giving organizations a high-level view
                                                        of their teams. Like Asana, Basecamp can help monitor tracking, but
                                                        also offers additional features like direct messaging chats,
                                                        centralized document storage, and a scheduling tool.Basecamp aims to
                                                        take on Slack, Asana, Google Drive, and Dropbox by melding all of
                                                        their competitors into one robust management tool.
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PartnerSection styleClass={'style-two'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default ServiceSinglePage;