// import React, { useState } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Row} from 'reactstrap';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom'
// import rv1 from '../../images/background/pattern-1.png'
// import rv2 from '../../images/background/pattern-20.png'
// import rv3 from '../../images/background/price-pattern-1.png'
// import rv4 from '../../images/background/price-pattern-3.png'
// import rv5 from '../../images/background/price-pattern-2.png'



// const pricing = [
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Standard',
//         price: '69.99',
//         price2: '109.99',
//         btnClass: 'btn-style-eleven',
//         shape:rv3,
//     },
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Economy',
//         price: '79.99',
//         price2: '129.99',
//         active: 'active',
//         btnClass: 'btn-style-six',
//         shape:rv4,
//     },
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Standard',
//         price: '69.99',
//         price2: '149.99',
//         btnClass: 'btn-style-eight',
//         shape:rv5,
//     },


// ]


// const Pricing = (props) => {
//     const [activeTab, setActiveTab] = useState('1');

//     const toggle = tab => {
//         if (activeTab !== tab) setActiveTab(tab);
//     }


//     return (

//         <section className={`pricing-section style-three ${props.sClass}`}>
//             <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
//             <div className="pattern-layer-two" style={{ backgroundImage: `url(${rv2})` }}></div>
//             <div className="auto-container">
//                 <div className="sec-title centered">
//                     <div className="title">Packages</div>
//                     <h2>Our Pricing Table</h2>
//                     <div className="text">We take a consultative approach to every client engagement and find actionable <br /> solutions that will help your organization achieve the best outcomes.</div>
//                 </div>

//                 <div className="pricing-tabs tabs-box">

//                     <TabContent activeTab={activeTab}>
//                         <TabPane tabId="1">
//                             <Row>
//                                 {pricing.map((pricing, ptem) => (
//                                     <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${pricing.active}`} key={ptem}>
//                                         <div className="inner-box">
//                                             <div className="title">{pricing.title}</div>
//                                             <div className="price">${pricing.price}</div>
//                                             <ul className="price-list">
//                                                 <li>{pricing.li1}</li>
//                                                 <li>{pricing.li2}</li>
//                                                 <li>{pricing.li3}</li>
//                                                 <li>{pricing.li4}</li>
//                                                 <li>{pricing.li5}</li>
//                                             </ul>
//                                             <Link to="/" className={`theme-btn  ${pricing.btnClass}`}><span className="txt">Buy Now</span></Link>
//                                             <div className="price-pattern-layer" style={{ backgroundImage: `url(${pricing.shape})` }}></div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Row>
//                         </TabPane>
//                         <TabPane tabId="2">
//                             <div className="row">
//                                 {pricing.map((pricing, ptem) => (
//                                     <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${pricing.active}`} key={ptem}>
//                                         <div className="inner-box">
//                                             <div className="title">{pricing.title}</div>
//                                             <div className="price">${pricing.price2}</div>
//                                             <ul className="price-list">
//                                                 <li>{pricing.li1}</li>
//                                                 <li>{pricing.li2}</li>
//                                                 <li>{pricing.li3}</li>
//                                                 <li>{pricing.li4}</li>
//                                                 <li>{pricing.li5}</li>
//                                             </ul>
//                                             <Link to="/" className={`theme-btn  ${pricing.btnClass}`}><span className="txt">Buy Now</span></Link>
//                                             <div className="price-pattern-layer" style={{ backgroundImage: `url(${pricing.shape})` }}></div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </TabPane>
//                     </TabContent>
//                     <div className="buttons-outer">
//                         <Nav tabs className="tab-buttons clearfix">
//                             <NavItem className='tab-btn'>
//                                 <NavLink
//                                     className={classnames({ active: activeTab === '1' })}
//                                     onClick={() => { toggle('1'); }}
//                                 >
//                                     Monthly
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem className='tab-btn'>
//                                 <NavLink
//                                     className={classnames({ active: activeTab === '2' })}
//                                     onClick={() => { toggle('2'); }}
//                                 >

//                                     Yearly
//                                 </NavLink>
//                             </NavItem>
//                         </Nav>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Pricing;


// import React, { useState, useEffect } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick'; // Import slider component
// import 'slick-carousel/slick/slick.css'; // Import slider styles
// import 'slick-carousel/slick/slick-theme.css'; // Import slider theme

// import rv1 from '../../images/background/pattern-1.png';
// import rv2 from '../../images/background/pattern-20.png';
// import rv3 from '../../images/background/price-pattern-1.png';
// import rv4 from '../../images/background/price-pattern-3.png';
// import rv5 from '../../images/background/price-pattern-2.png';

// const pricing = [
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Standard',
//         price: '69.99',
//         price2: '109.99',
//         btnClass: 'btn-style-eleven',
//         shape: rv3,
//     },
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Economy',
//         price: '79.99',
//         price2: '129.99',
//         active: 'active',
//         btnClass: 'btn-style-six',
//         shape: rv4,
//     },
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Standard',
//         price: '69.99',
//         price2: '149.99',
//         btnClass: 'btn-style-eight',
//         shape: rv5,
//     },
// ];

// const Pricing = (props) => {
//     const [activeTab, setActiveTab] = useState('1');
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

//     // Detect mobile screen size
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 767);
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const toggle = tab => {
//         if (activeTab !== tab) setActiveTab(tab);
//     };

//     // Slider settings for mobile
//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: "linear",
//         arrows: false,
//     };

//     // Price card component for reuse
//     const PriceCard = ({ item }) => (
//         <div className={`price-block ${item.active || ''}`}>
//             <div className="inner-box">
//                 <div className="title">{item.title}</div>
//                 <div className="price">${activeTab === '1' ? item.price : item.price2}</div>
//                 <ul className="price-list">
//                     <li>{item.li1}</li>
//                     <li>{item.li2}</li>
//                     <li>{item.li3}</li>
//                     <li>{item.li4}</li>
//                     <li>{item.li5}</li>
//                 </ul>
//                 <Link to="/" className={`theme-btn ${item.btnClass}`}><span className="txt">Buy Now</span></Link>
//                 <div className="price-pattern-layer" style={{ backgroundImage: `url(${item.shape})` }}></div>
//             </div>
//         </div>
//     );

//     return (
//         <section className={`pricing-section style-three ${props.sClass || ''}`}>
//             <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
//             <div className="pattern-layer-two" style={{ backgroundImage: `url(${rv2})` }}></div>
//             <div className="auto-container">
//                 <div className="sec-title centered">
//                     <div className="title">Packages</div>
//                     <h2>Our Pricing Table</h2>
//                     <div className="text">We take a consultative approach to every client engagement and find actionable <br /> solutions that will help your organization achieve the best outcomes.</div>
//                     <div className="pull-right">
//                                                 <Link to="/package-page" className="theme-btn btn-style-eight"><span className="txt">View All </span></Link>
//                                             </div>
//                 </div>

//                 <div className="pricing-tabs tabs-box">
//                     <div className="buttons-outer">
//                         <Nav tabs className="tab-buttons clearfix">
//                             <NavItem className='tab-btn'>
//                                 <NavLink
//                                     className={classnames({ active: activeTab === '1' })}
//                                     onClick={() => { toggle('1'); }}
//                                 >
//                                     Monthly
//                                 </NavLink>
//                             </NavItem>
                            
//                             <NavItem className='tab-btn'>
//                                 <NavLink
//                                     className={classnames({ active: activeTab === '2' })}
//                                     onClick={() => { toggle('2'); }}
//                                 >
//                                     Yearly
//                                 </NavLink>
//                             </NavItem>
//                         </Nav>
//                     </div>

//                     <TabContent activeTab={activeTab}>
//                         <TabPane tabId="1">
//                             {isMobile ? (
//                                 // Mobile carousel view
//                                 <div className="pricing-mobile-slider">
//                                     <Slider {...sliderSettings}>
//                                         {pricing.map((item, index) => (
//                                             <div key={index}>
//                                                 <PriceCard item={item} />
//                                             </div>
//                                         ))}
//                                     </Slider>
//                                 </div>
//                             ) : (
//                                 // Desktop grid view
//                                 <Row>
//                                     {pricing.map((item, index) => (
//                                         <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${item.active || ''}`} key={index}>
//                                             <PriceCard item={item} />
//                                         </div>
//                                     ))}
//                                 </Row>
//                             )}
//                         </TabPane>
//                         <TabPane tabId="2">
//                             {isMobile ? (
//                                 // Mobile carousel view
//                                 <div className="pricing-mobile-slider">
//                                     <Slider {...sliderSettings}>
//                                         {pricing.map((item, index) => (
//                                             <div key={index}>
//                                                 <PriceCard item={item} />
//                                             </div>
//                                         ))}
//                                     </Slider>
//                                 </div>
//                             ) : (
//                                 // Desktop grid view
//                                 <Row>
//                                     {pricing.map((item, index) => (
//                                         <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${item.active || ''}`} key={index}>
//                                             <PriceCard item={item} />
//                                         </div>
//                                     ))}
//                                 </Row>
//                             )}
//                         </TabPane>
//                     </TabContent>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Pricing;

  

// import React, { useState, useEffect } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
// import { Link, useNavigate } from 'react-router-dom';
// import { API_BASE_URL } from '../../api/config/apiConfig';
// import Slider from 'react-slick';
// import axios from 'axios';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import rv1 from '../../images/background/pattern-1.png';
// import rv2 from '../../images/background/pattern-20.png';
// import rv3 from '../../images/background/price-pattern-1.png';
// import rv4 from '../../images/background/price-pattern-3.png';
// import rv5 from '../../images/background/price-pattern-2.png';

// const Pricing = (props) => {
//     const [activeTab, setActiveTab] = useState('1');
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
//     const [packages, setPackages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [categories, setCategories] = useState([]);
//     const [groupedPackages, setGroupedPackages] = useState({});

//      const [isHover, setIsHover] = useState(false);

//         const buttonStyle = {
//             backgroundColor: isHover ? '#ff8c00' : '#ff8c00',
//             color: '#fff',
//             transition: 'background-color 0.3s ease'
//         };


//          const navigate = useNavigate(); // Initialize useNavigate hook
    
//     // ...existing code and useEffects
    
//     // Function to handle "Buy Now" click
//     const handleBuyNow = (packageItem) => {
//         // Navigate to checkout with package data as state
//         navigate('/checkout', { 
//             state: { 
//                 selectedPackage: {
//                     id: packageItem.id,
//                     title: packageItem.title,
//                     price: packageItem.price,
//                     details: packageItem.package_details
//                 }
//             }
//         });
//     };

//     // Fetch packages from API
//     useEffect(() => {
//         const fetchPackages = async () => {
//             try {
//                 // const response = await axios.get('http://192.168.1.12:8000/api/get-packages');
//                  const response = await axios.get(`${API_BASE_URL}/api/get-packages`);
//                 console.log("package data ============>", response.data.packages)
//                 if (response.data.success && response.data.packages) {
//                     // Ensure packages is an array
//                     const packagesData = Array.isArray(response.data.packages) 
//                         ? response.data.packages 
//                         : [response.data.packages];
                    
//                     // Map API data to our pricing format
//                     const formattedPackages = packagesData.map((pkg, index) => {
//                         // Create an array of details from package_details HTML string
//                         // const details = pkg.package_details
//                         //     ? extractListItems(pkg.package_details)
//                         //     : ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"];

//                          const details = pkg.package_details
//                             ? pkg.package_details
//                                 .replace(/<[^>]+>/g, '')         // Remove HTML tags
//                                 .replace(/&nbsp;/g, ' ')         // Replace &nbsp; with space
//                                 .replace(/&[a-z]+;/gi, '')       // Optionally remove other entities
//                                 .trim()
//                             : '';


                        
//                         // Determine which shape to use (cycling through available shapes)
//                         const shapes = [rv3, rv4, rv5];
//                         const shapeIndex = index % shapes.length;
                        
//                         // Determine button class (cycling through available classes)
//                         const btnClasses = ["btn-style-eleven", "btn-style-six", "btn-style-eight"];
//                         const btnClassIndex = index % btnClasses.length;
                        
//                         // Set active class for the middle item or the first if only one
//                         const isActive = (packagesData.length === 3 && index === 1) || 
//                                         (packagesData.length < 3 && index === 0);
                        
//                         return {
//                             id: pkg.id,
//                             title: pkg.title || pkg.package_class || "Standard",
//                             price: pkg.price || "69.99",
//                             price2: (parseFloat(pkg.price) * 10).toFixed(2) || "149.99", // Yearly price (10x monthly as example)
//                             // li1: details[0] || "Feature 1",
//                             // li2: details[1] || "Feature 2",
//                             // li3: details[2] || "Feature 3",
//                             // li4: details[3] || "Feature 4",
//                             // li5: details[4] || "Feature 5",
//                             package_details: details,
//                             btnClass: btnClasses[btnClassIndex],
//                             shape: shapes[shapeIndex],
//                             active: isActive ? 'active' : '',
//                             category: pkg.category || "Monthly",
//                             position: pkg.position || index + 1
//                         };
//                     });
                    
//                     // Sort packages by position if available
//                     const sortedPackages = formattedPackages.sort((a, b) => a.position - b.position);
//                     setPackages(sortedPackages);
                    
//                     // Extract unique categories and organize packages by category
//                     processPackageCategories(sortedPackages);
//                 }
//             } catch (error) {
//                 console.error("Error fetching packages:", error);
//                 // Use default packages as fallback
//                 const defaultPackages = getDefaultPackages();
//                 setPackages(defaultPackages);
//                 processPackageCategories(defaultPackages);
//             } finally {
//                 // Delay setting loading to false slightly to avoid flickering if data loads too quickly
//                 setTimeout(() => {
//                     setLoading(false);
//                 }, 300);
//             }
//         };
        
//         fetchPackages();
//     }, []);

//     // Process package categories and group packages
//     const processPackageCategories = (packagesData) => {
//         // Extract unique categories
//         const uniqueCategories = [...new Set(packagesData.map(pkg => 
//             pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1).toLowerCase()
//         ))];
        
//         // If no categories found, use default
//         if (uniqueCategories.length === 0) {
//             uniqueCategories.push('Monthly');
//         }
        
//         setCategories(uniqueCategories);
        
//         // Group packages by category
//         const grouped = uniqueCategories.reduce((acc, category) => {
//             acc[category] = packagesData.filter(pkg => 
//                 pkg.category.toLowerCase() === category.toLowerCase()
//             );
//             return acc;
//         }, {});
        
//         // If a category has no packages, use packages from first category that has packages
//         const firstNonEmptyCategory = Object.keys(grouped).find(cat => grouped[cat].length > 0);
        
//         if (firstNonEmptyCategory) {
//             uniqueCategories.forEach(category => {
//                 if (grouped[category].length === 0) {
//                     grouped[category] = [...grouped[firstNonEmptyCategory]];
//                 }
//             });
//         }
        
//         setGroupedPackages(grouped);
        
//         // Set active tab to first category
//         if (uniqueCategories.length > 0 && uniqueCategories[0]) {
//             setActiveTab(uniqueCategories[0]);
//         }
//     };

//     // Helper function to extract list items from HTML string
//     const extractListItems = (htmlString) => {
//         // Parse HTML and extract important points
//         const cleanText = htmlString.replace(/<[^>]*>/g, ''); // Remove HTML tags
        
//         // Split by periods, commas, or line breaks
//         const items = cleanText.split(/[.,;\n]/)
//             .map(item => item.trim())
//             .filter(item => item.length > 0);
        
//         // Return at least 5 items (pad with defaults if needed)
//         while (items.length < 5) {
//             items.push(`Feature ${items.length + 1}`);
//         }
        
//         return items.slice(0, 5); // Return max 5 items
//     };

//     // Default packages as fallback
//     const getDefaultPackages = () => [
//         {
//             id: 1,
//             li1: 'Social Media Marketing',
//             li2: '5.600 Keywords',
//             li3: 'One Way Link Building',
//             li4: '10 Free Optimization',
//             li5: '10 Press Releases',
//             title: 'Standard',
//             price: '69.99',
//             price2: '109.99',
//             btnClass: 'btn-style-eleven',
//             shape: rv3,
//             category: 'Monthly',
//             position: 1
//         },
//         {
//             id: 2,
//             li1: 'Social Media Marketing',
//             li2: '5.600 Keywords',
//             li3: 'One Way Link Building',
//             li4: '10 Free Optimization',
//             li5: '10 Press Releases',
//             title: 'Economy',
//             price: '79.99',
//             price2: '129.99',
//             active: 'active',
//             btnClass: 'btn-style-six',
//             shape: rv4,
//             category: 'Monthly',
//             position: 2
//         },
//         {
//             id: 3,
//             li1: 'Social Media Marketing',
//             li2: '5.600 Keywords',
//             li3: 'One Way Link Building',
//             li4: '10 Free Optimization',
//             li5: '10 Press Releases',
//             title: 'Premium',
//             price: '89.99',
//             price2: '149.99',
//             btnClass: 'btn-style-eight',
//             shape: rv5,
//             category: 'Yearly',
//             position: 3
//         },
//     ];

//     // Detect mobile screen size
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 767);
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const toggle = tab => {
//         if (activeTab !== tab) setActiveTab(tab);
//     };

//     // Mobile slider settings
//     const mobileSliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: "linear",
//         arrows: false,
//     };

//     // Desktop slider settings for more than 3 cards
//     const desktopSliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: "linear",
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

//     // Price card component for reuse
//     const PriceCard = ({ item }) => (
//         <div className={`price-block ${item.active || ''}`}>
//             <div className="inner-box">
//                 <div className="title">{item.title}</div>
//                 <div className="price">${item.price}</div>
//                 <ul className="price-list"> 
//                     {
//                     item.package_details
//                     ? item.package_details
//                         .replace(/<[^>]+>/g, '') // Remove HTML tags
//                         .split(/\s+/)            // Split into words
//                         .slice(0, 30)            // Take first 30 words
//                         .join(' ') + '...'
//                     : 'Loading...' // or a fallback string
//                 }  
//                      </ul>
//                 {/* <ul className="price-list">
//                     <li>{item.li1}</li>
//                     <li>{item.li2}</li>
//                     <li>{item.li3}</li>
//                     <li>{item.li4}</li>
//                     <li>{item.li5}</li>
//                 </ul> */}
//                 {/* <Link to="/" className={`theme-btn ${item.btnClass}`}><span className="txt">Buy Now</span></Link> */}
                
//                  {/* <Link 
//                 to="/checkout" 
//                 className={`theme-btn ${item.btnClass}`} 
//                 style={buttonStyle}
//                 onMouseEnter={() => setIsHover(true)}
//                 onMouseLeave={() => setIsHover(false)}
//                 >
//                 <span className="txt">Buy Now</span>
//                 </Link> */}

//                  <button 
//                     className={`theme-btn ${item.btnClass}`} 
//                     style={{
//                         backgroundColor: isHover ? '#ff8c00' : '#ff8c00',
//                         color: '#fff',
//                         transition: 'background-color 0.3s ease',
//                         border: 'none',
//                         cursor: 'pointer',
//                         padding: '10px 25px'
//                     }}
//                     onMouseEnter={() => setIsHover(true)}
//                     onMouseLeave={() => setIsHover(false)}
//                     onClick={() => handleBuyNow(item)}
//                 >
//                     <span className="txt">Buy Now</span>
//                 </button>
//                 <div className="price-pattern-layer" style={{ backgroundImage: `url(${item.shape})` }}></div>
//             </div>
//         </div>
//     );

//     // Skeleton loading component
//     const SkeletonPriceCard = () => (
//         <div className="price-block">
//             <div className="inner-box">
//                 <div className="title"><Skeleton width={120} height={30} /></div>
//                 <div className="price"><Skeleton width={100} height={40} /></div>
//                 <ul className="price-list">
//                     <li><Skeleton width="90%" height={20} /></li>
//                     <li><Skeleton width="80%" height={20} /></li>
//                     <li><Skeleton width="85%" height={20} /></li>
//                     <li><Skeleton width="75%" height={20} /></li>
//                     <li><Skeleton width="70%" height={20} /></li>
//                 </ul>
//                 <div style={{ padding: '10px' }}><Skeleton width="100%" height={45} borderRadius={30} /></div>
//             </div>
//         </div>
//     );

//     // Create skeleton loading for grid or slider
//     const SkeletonCards = () => {
//         if (isMobile) {
//             return (
//                 <div className="pricing-mobile-slider">
//                     <Slider {...mobileSliderSettings}>
//                         {[1, 2, 3].map((item) => (
//                             <div key={item}>
//                                 <SkeletonPriceCard />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             );
//         }

//         return (
//             <Row>
//                 {[1, 2, 3].map((item) => (
//                     <div className="price-block col-lg-4 col-md-6 col-sm-12" key={item}>
//                         <SkeletonPriceCard />
//                     </div>
//                 ))}
//             </Row>
//         );
//     };

//     // Render packages based on count and device
//     const renderPackages = (packages) => {
//         if (isMobile) {
//             return (
//                 <div className="pricing-slider">
//                     <Slider {...mobileSliderSettings}>
//                         {packages.map((item, index) => (
//                             <div key={item.id || index}>
//                                 <PriceCard item={item} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             );
//         } else if (packages.length > 3) {
//             // Use slider for desktop if more than 3 packages
//             return (
//                 <div className="pricing-desktop-slider">
//                     <Slider {...desktopSliderSettings}>
//                         {packages.map((item, index) => (
//                             <div key={item.id || index} className="px-2">
//                                 <PriceCard item={item} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             );
//         } else {
//             // Standard grid for 3 or fewer packages on desktop
//             return (
//                 <Row>
//                     {packages.map((item, index) => (
//                         <div className="price-block col-lg-4 col-md-6 col-sm-12" key={item.id || index}>
//                             <PriceCard item={item} />
//                         </div>
//                     ))}
//                 </Row>
//             );
//         }
//     };

//     return (
//         <section className={`pricing-section style-three ${props.sClass || ''}`}>
//             <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
//             <div className="pattern-layer-two" style={{ backgroundImage: `url(${rv2})` }}></div>
//             <div className="auto-container">
//                 <div className="sec-title centered">
//                     <div className="title">Packages</div>
//                     <h2>Our Pricing Table</h2>
//                     <div className="text">We take a consultative approach to every client engagement and find actionable <br /> solutions that will help your organization achieve the best outcomes.</div>
//                     <div className="pull-right">
//                         <Link to="/package-page" className="theme-btn btn-style-eight"><span className="txt">View All </span></Link>
//                     </div>
//                 </div>

//                 <div className="pricing-tabs tabs-box">
//                     <div className="buttons-outer">
//                         <Nav tabs className="tab-buttons clearfix">
//                             {categories.map((category, index) => (
//                                 <NavItem className='tab-btn' key={category}>
//                                     <NavLink
//                                         className={classnames({ active: activeTab === category })}
//                                         onClick={() => { toggle(category); }}
//                                     >
//                                         {category}
//                                     </NavLink>
//                                 </NavItem>
//                             ))}
//                         </Nav>
//                     </div>

//                     <TabContent activeTab={activeTab}>
//                         {categories.map(category => (
//                             <TabPane tabId={category} key={category}>
//                                 {loading ? (
//                                     <SkeletonCards />
//                                 ) : (
//                                     renderPackages(groupedPackages[category] || [])
//                                 )}
//                             </TabPane>
//                         ))}
//                     </TabContent>
//                 </div>
//             </div>
            
//         </section>
//     );
// };

// export default Pricing;

 


// import React, { useState, useEffect } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button } from 'reactstrap';
// import classnames from 'classnames';
// import { Link, useNavigate } from 'react-router-dom';
// import { API_BASE_URL } from '../../api/config/apiConfig';
// import Slider from 'react-slick';
// import axios from 'axios';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import rv1 from '../../images/background/pattern-1.png';
// import rv2 from '../../images/background/pattern-20.png';
// import rv3 from '../../images/background/price-pattern-1.png';
// import rv4 from '../../images/background/price-pattern-3.png';
// import rv5 from '../../images/background/price-pattern-2.png';
// import PackageComparison from '../../main-component/PricingPage/PackageComparison';
// import {
//   FaGlobe,
//   FaWordpress,
//   FaUsers,
//   FaHdd,
//   FaSitemap,
//   FaLock,
//   FaCloudUploadAlt,
//   FaDatabase,
//   FaEnvelope,
//   FaTools,
//   FaCogs,
//   FaRocket,
//   FaHeadset,
//   FaShieldAlt,
//   FaChartLine,
//   FaChevronUp,
// } from 'react-icons/fa';
// import { FaChevronDown } from 'react-icons/fa';


// const Pricing = (props) => {


//     const { 
//         sClass = '', 
//         showCompare = false, 
//         showViewAll = false 
//     } = props;

//     const [activeTab, setActiveTab] = useState('1');
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
//     const [packages, setPackages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [categories, setCategories] = useState([]);
//     const [groupedPackages, setGroupedPackages] = useState({});
//     const [isHover, setIsHover] = useState(false);
//     const [selectedForComparison, setSelectedForComparison] = useState([]);
//     const [comparisonModalOpen, setComparisonModalOpen] = useState(false);


//     const features = [
//             { text: '25 websites', icon: <FaGlobe /> },
//             { text: 'Managed hosting for WordPress', icon: <FaWordpress /> },
//             { text: '25,000 visits monthly', icon: <FaUsers /> },
//             { text: '25 GB SSD storage', icon: <FaHdd /> },
//             { text: '400 CMS pages and directories', icon: <FaSitemap /> },
//             { text: 'Free SSL certificate', icon: <FaLock /> },
//             { text: 'Daily backups', icon: <FaCloudUploadAlt /> },
//             { text: 'Unlimited MySQL databases', icon: <FaDatabase /> },
//             { text: 'Business email accounts', icon: <FaEnvelope /> },
//             { text: '1-click staging environment', icon: <FaTools /> },
//             { text: 'Auto plugin & theme updates', icon: <FaCogs /> },
//             { text: 'Blazing fast CDN', icon: <FaRocket /> },
//             { text: '24/7 expert support', icon: <FaHeadset /> },
//             { text: 'Malware scanning & removal', icon: <FaShieldAlt /> },
//             { text: 'Advanced performance monitoring', icon: <FaChartLine /> },
//             ];

//     const buttonStyle = {
//         backgroundColor: isHover ? '#ff8c00' : '#ff8c00',
//         color: '#fff',
//         transition: 'background-color 0.3s ease'
//     };

//     const navigate = useNavigate();
    
//     // Function to handle "Buy Now" click
//     const handleBuyNow = (packageItem) => {
//         navigate('/checkout', { 
//             state: { 
//                 selectedPackage: {
//                     id: packageItem.id,
//                     title: packageItem.title,
//                     price: packageItem.price,
//                     details: packageItem.package_details
//                 }
//             }
//         });
//     };

//     // Toggle package selection for comparison - Fixed to ensure consistent behavior
//     const toggleComparisonSelection = (packageItem) => {
//         setSelectedForComparison(prevSelected => {
//             // Check if already selected
//             const isAlreadySelected = prevSelected.some(pkg => pkg.id === packageItem.id);
            
//             if (isAlreadySelected) {
//                 // Remove if already selected
//                 return prevSelected.filter(pkg => pkg.id !== packageItem.id);
//             } else {
//                 // Add if less than 2 selected
//                 if (prevSelected.length < 2) {
//                     return [...prevSelected, packageItem];
//                 } else {
//                     // Replace first package if already 2 selected
//                     return [prevSelected[1], packageItem];
//                 }
//             }
//         });
//     };

//     // Toggle comparison modal
//     const toggleComparisonModal = () => {
//         setComparisonModalOpen(!comparisonModalOpen);
//     };

//     // Open comparison modal with selected packages
//     const openComparison = () => {
//         if (selectedForComparison.length > 0) {
//             toggleComparisonModal();
//         } else {
//             // Select first two packages by default if none selected
//             const currentPackages = groupedPackages[activeTab] || [];
//             if (currentPackages.length >= 2) {
//                 setSelectedForComparison([currentPackages[0], currentPackages[1]]);
//                 setTimeout(() => toggleComparisonModal(), 50); // Ensure state is updated before opening modal
//             } else if (currentPackages.length === 1) {
//                 setSelectedForComparison([currentPackages[0]]);
//                 setTimeout(() => toggleComparisonModal(), 50); // Ensure state is updated before opening modal
//             }
//         }
//     };

//     // Fetch packages from API
//     useEffect(() => {
//         const fetchPackages = async () => {
//             try {
//                 const response = await axios.get(`${API_BASE_URL}/api/get-packages`);
//                 if (response.data.success && response.data.packages) {
//                     // Ensure packages is an array
//                     const packagesData = Array.isArray(response.data.packages) 
//                         ? response.data.packages 
//                         : [response.data.packages];
                    
//                     // Map API data to our pricing format
//                     const formattedPackages = packagesData.map((pkg, index) => {
//                         const details = pkg.package_details
//                             ? pkg.package_details
//                                 .replace(/<[^>]+>/g, '')
//                                 .replace(/&nbsp;/g, ' ')
//                                 .replace(/&[a-z]+;/gi, '')
//                                 .trim()
//                             : '';
                        
//                         // Determine which shape to use (cycling through available shapes)
//                         const shapes = [rv3, rv4, rv5];
//                         const shapeIndex = index % shapes.length;
                        
//                         // Determine button class (cycling through available classes)
//                         const btnClasses = ["btn-style-eleven", "btn-style-six", "btn-style-eight"];
//                         const btnClassIndex = index % btnClasses.length;
                        
//                         // Set active class for the middle item or the first if only one
//                         const isActive = (packagesData.length === 3 && index === 1) || 
//                                         (packagesData.length < 3 && index === 0);
                        
//                         return {
//                             id: pkg.id,
//                             title: pkg.title || pkg.package_class || "Standard",
//                             price: pkg.price || "69.99",
//                             price2: (parseFloat(pkg.price) * 10).toFixed(2) || "149.99", // Yearly price (10x monthly as example)
//                             package_details: details,
//                             btnClass: btnClasses[btnClassIndex],
//                             shape: shapes[shapeIndex],
//                             active: isActive ? 'active' : '',
//                             category: pkg.category || "Monthly",
//                             position: pkg.position || index + 1
//                         };
//                     });
                    
//                     // Sort packages by position if available
//                     const sortedPackages = formattedPackages.sort((a, b) => a.position - b.position);
//                     setPackages(sortedPackages);
                    
//                     // Extract unique categories and organize packages by category
//                     processPackageCategories(sortedPackages);
//                 }
//             } catch (error) {
//                 console.error("Error fetching packages:", error);
//                 // Use default packages as fallback
//                 const defaultPackages = getDefaultPackages();
//                 setPackages(defaultPackages);
//                 processPackageCategories(defaultPackages);
//             } finally {
//                 setTimeout(() => {
//                     setLoading(false);
//                 }, 300);
//             }
//         };
        
//         fetchPackages();
//     }, []);

//     // Process package categories and group packages
//     const processPackageCategories = (packagesData) => {
//         // Extract unique categories
//         const uniqueCategories = [...new Set(packagesData.map(pkg => 
//             pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1).toLowerCase()
//         ))];
        
//         // If no categories found, use default
//         if (uniqueCategories.length === 0) {
//             uniqueCategories.push('Monthly');
//         }
        
//         setCategories(uniqueCategories);
        
//         // Group packages by category
//         const grouped = uniqueCategories.reduce((acc, category) => {
//             acc[category] = packagesData.filter(pkg => 
//                 pkg.category.toLowerCase() === category.toLowerCase()
//             );
//             return acc;
//         }, {});
        
//         // If a category has no packages, use packages from first category that has packages
//         const firstNonEmptyCategory = Object.keys(grouped).find(cat => grouped[cat].length > 0);
        
//         if (firstNonEmptyCategory) {
//             uniqueCategories.forEach(category => {
//                 if (grouped[category].length === 0) {
//                     grouped[category] = [...grouped[firstNonEmptyCategory]];
//                 }
//             });
//         }
        
//         setGroupedPackages(grouped);
        
//         // Set active tab to first category
//         if (uniqueCategories.length > 0 && uniqueCategories[0]) {
//             setActiveTab(uniqueCategories[0]);
//         }
//     };

//     // Default packages as fallback
//     const getDefaultPackages = () => [
//         {
//             id: 1,
//             title: 'Standard',
//             price: '69.99',
//             price2: '109.99',
//             btnClass: 'btn-style-eleven',
//             shape: rv3,
//             category: 'Monthly',
//             position: 1,
//             package_details: 'Social Media Marketing. 5,600 Keywords. One Way Link Building. 10 Free Optimization. 10 Press Releases.'
//         },
//         {
//             id: 2,
//             title: 'Economy',
//             price: '79.99',
//             price2: '129.99',
//             active: 'active',
//             btnClass: 'btn-style-six',
//             shape: rv4,
//             category: 'Monthly',
//             position: 2,
//             package_details: 'Social Media Marketing. 10,000 Keywords. Two Way Link Building. 20 Free Optimization. 15 Press Releases.'
//         },
//         {
//             id: 3,
//             title: 'Premium',
//             price: '89.99',
//             price2: '149.99',
//             btnClass: 'btn-style-eight',
//             shape: rv5,
//             category: 'Yearly',
//             position: 3,
//             package_details: 'Social Media Marketing. 20,000 Keywords. Enterprise Link Building. Unlimited Optimization. 25 Press Releases.'
//         },
//     ];

//     // Detect mobile screen size
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 767);
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const toggle = tab => {
//         if (activeTab !== tab) {
//             setActiveTab(tab);
//             // We'll keep the comparison selection when changing tabs to allow comparing across categories
//             // Remove this line to clear selection when changing tabs: setSelectedForComparison([]);
//         }
//     };

//     // Mobile slider settings
//     const mobileSliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: "linear",
//         arrows: false,
//     };

//     // Desktop slider settings for more than 3 cards
//     const desktopSliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: "linear",
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

//     // Price card component for reuse
//     const PriceCard = ({ item }) => {
//         // Use state to track hover for this specific card
//         const [isCardHover, setIsCardHover] = useState(false);
//         const isSelected = selectedForComparison.some(pkg => pkg.id === item.id);
//          const [expanded, setExpanded] = useState(false);

//          const visibleFeatures = expanded ? features : features.slice(0, 5);

           

        
//         return (
//             <div className={`price-block ${item.active || ''}`}>
//                 <div className="inner-box">
//                     <div className="title">{item.title}</div>
//                     <div className="price">${item.price}</div>
//                     <ul className="price-list"> 
//                         {item.package_details
//                             ? item.package_details
//                                 .split(/\s+/)
//                                 .slice(0, 30)
//                                 .join(' ') + '...'
//                             : 'Loading...'
//                         }
//                     </ul>
//                  {/* <ul className="price-list">
//                     {visibleFeatures.map((feature, index) => (
//                         <li className="feature-item" key={index}>
//                         <div className="d-flex align-items-center">
//                             <span
//                             style={{
//                                 color: '#4CAF50',
//                                 marginRight: '8px',
//                                 minWidth: '16px',
//                             }}
//                             >
//                             {feature.icon}
//                             </span>
//                             <span>{feature.text}</span>
//                         </div>
//                         </li>
//                     ))}

//                     <li className="text-center mt-2">
//                         <button
//                         className="btn btn-sm btn-link d-block w-100 text-center p-0"
//                         onClick={() => setExpanded(!expanded)}
//                         >
//                         {expanded ? (
//                             <>
//                             Show less <FaChevronUp />
//                             </>
//                         ) : (
//                             <>
//                             See all features <FaChevronDown />
//                             </>
//                         )}
//                         </button>
//                     </li>
//                     </ul> */}
//                     <div className="d-flex justify-content-between mt-2">
//                         <button 
//                             className={`theme-btn ${item.btnClass}`} 
//                             style={{
//                                 backgroundColor: isCardHover ? '#e57e00' : '#ff8c00',
//                                 color: '#fff',
//                                 transition: 'background-color 0.3s ease',
//                                 border: 'none',
//                                 cursor: 'pointer',
//                                 padding: '10px 15px',
//                                 flexGrow: 1,
//                                 marginRight: '5px'
//                             }}
//                             onMouseEnter={() => setIsCardHover(true)}
//                             onMouseLeave={() => setIsCardHover(false)}
//                             onClick={() => handleBuyNow(item)}
//                         >
//                             <span className="txt">Buy Now</span>
//                         </button>
                        
//                         <button 
//                             className={`btn ${isSelected ? 'btn-success' : 'btn-outline-secondary'}`} 
//                             style={{
//                                 flexGrow: 0,
//                                 padding: '10px 15px'
//                             }}
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                                 toggleComparisonSelection(item);
//                             }}
//                         >
//                             {isSelected ? 'Selected' : 'Compare'}
//                         </button>
//                     </div>
//                     <div className="price-pattern-layer" style={{ backgroundImage: `url(${item.shape})` }}></div>
//                 </div>
//             </div>
//         );
//     };

//     // Skeleton loading component
//     const SkeletonPriceCard = () => (
//         <div className="price-block">
//             <div className="inner-box">
//                 <div className="title"><Skeleton width={120} height={30} /></div>
//                 <div className="price"><Skeleton width={100} height={40} /></div>
//                 <ul className="price-list">
//                     <li><Skeleton width="90%" height={20} /></li>
//                     <li><Skeleton width="80%" height={20} /></li>
//                     <li><Skeleton width="85%" height={20} /></li>
//                     <li><Skeleton width="75%" height={20} /></li>
//                     <li><Skeleton width="70%" height={20} /></li>
//                 </ul>
//                 <div style={{ padding: '10px' }}><Skeleton width="100%" height={45} borderRadius={30} /></div>
//             </div>
//         </div>
//     );

//     // Create skeleton loading for grid or slider
//     const SkeletonCards = () => {
//         if (isMobile) {
//             return (
//                 <div className="pricing-mobile-slider">
//                     <Slider {...mobileSliderSettings}>
//                         {[1, 2, 3].map((item) => (
//                             <div key={item}>
//                                 <SkeletonPriceCard />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             );
//         }

//         return (
//             <Row>
//                 {[1, 2, 3].map((item) => (
//                     <div className="price-block col-lg-4 col-md-6 col-sm-12" key={item}>
//                         <SkeletonPriceCard />
//                     </div>
//                 ))}
//             </Row>
//         );
//     };

//     // Render packages based on count and device
//     const renderPackages = (packages) => {
//         if (isMobile) {
//             return (
//                 <div className="pricing-slider">
//                     <Slider {...mobileSliderSettings}>
//                         {packages.map((item, index) => (
//                             <div key={item.id || index}>
//                                 <PriceCard item={item} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             );
//         } else if (packages.length > 3) {
//             // Use slider for desktop if more than 3 packages
//             return (
//                 <div className="pricing-desktop-slider">
//                     <Slider {...desktopSliderSettings}>
//                         {packages.map((item, index) => (
//                             <div key={item.id || index} className="px-2">
//                                 <PriceCard item={item} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             );
//         } else {
//             // Standard grid for 3 or fewer packages on desktop
//             return (
//                 <Row>
//                     {packages.map((item, index) => (
//                         <div className="price-block col-lg-4 col-md-6 col-sm-12" key={item.id || index}>
//                             <PriceCard item={item} />
//                         </div>
//                     ))}
//                 </Row>
//             );
//         }
//     };

//     return (
//         <section className={`pricing-section style-three ${props.sClass || ''}`}>
//             <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
//             <div className="pattern-layer-two" style={{ backgroundImage: `url(${rv2})` }}></div>
//             <div className="auto-container">
//                 <div className="sec-title centered">
//                     <div className="title">Packages</div>
//                     <h2>Our Pricing Table</h2>
//                     <div className="text">We take a consultative approach to every client engagement and find actionable <br /> solutions that will help your organization achieve the best outcomes.</div>
//                     <div className="d-flex justify-content-end align-items-center gap-3 my-3">
//                 {/* Compare Button */}
//                 <Button 
//                     color="info"
//                     onClick={openComparison}
//                     className="theme-btn btn-style-eight"
//                     disabled={loading}
//                 >
//                     <span className="txt">
//                     Compare Selected {selectedForComparison.length > 0 ? `(${selectedForComparison.length})` : ''}
//                     </span>
//                 </Button>

//                 {/* View All Button */}
//                 <Link to="/package-page" className="theme-btn btn-style-eight">
//                     <span className="txt">View All</span>
//                 </Link>
//                 </div>

//                 </div>

//                 <div className="pricing-tabs tabs-box">
//                     <div className="buttons-outer">
//                         <Nav tabs className="tab-buttons clearfix">
//                             {categories.map((category, index) => (
//                                 <NavItem className='tab-btn' key={category}>
//                                     <NavLink
//                                         className={classnames({ active: activeTab === category })}
//                                         onClick={() => { toggle(category); }}
//                                     >
//                                         {category}
//                                     </NavLink>
//                                 </NavItem>
//                             ))}
//                         </Nav>
//                     </div>

//                     <TabContent activeTab={activeTab}>
//                         {categories.map(category => (
//                             <TabPane tabId={category} key={category}>
//                                 {loading ? (
//                                     <SkeletonCards />
//                                 ) : (
//                                     renderPackages(groupedPackages[category] || [])
//                                 )}
//                             </TabPane>
//                         ))}
//                     </TabContent>
//                 </div>
//             </div>
            
//             {/* Package Comparison Modal */}
//             {comparisonModalOpen && (
//                 <PackageComparison
//                     packages={packages}
//                     isOpen={comparisonModalOpen}
//                     toggle={toggleComparisonModal}
//                     preSelectedPackages={selectedForComparison}
//                 />
//             )}
//         </section>
//     );
// };

// export default Pricing;


import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../api/config/apiConfig';
import Slider from 'react-slick';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import rv1 from '../../images/background/pattern-1.png';
import rv2 from '../../images/background/pattern-20.png';
import rv3 from '../../images/background/price-pattern-1.png';
import rv4 from '../../images/background/price-pattern-3.png';
import rv5 from '../../images/background/price-pattern-2.png';
import PackageComparison from '../../main-component/PricingPage/PackageComparison';
import {
  FaGlobe,
  FaWordpress,
  FaUsers,
  FaHdd,
  FaSitemap,
  FaLock,
  FaCloudUploadAlt,
  FaDatabase,
  FaEnvelope,
  FaTools,
  FaCogs,
  FaRocket,
  FaHeadset,
  FaShieldAlt,
  FaChartLine,
  FaChevronUp,
} from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';


const Pricing = (props) => {
    // Destructure props with default values
    const { 
        sClass = '', 
        showCompare = false, 
        showViewAll = false 
    } = props;

    const [activeTab, setActiveTab] = useState('1');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [groupedPackages, setGroupedPackages] = useState({});
    const [isHover, setIsHover] = useState(false);
    const [selectedForComparison, setSelectedForComparison] = useState([]);
    const [comparisonModalOpen, setComparisonModalOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);
    


    const features = [
            { text: '25 websites', icon: <FaGlobe /> },
            { text: 'Managed hosting for WordPress', icon: <FaWordpress /> },
            { text: '25,000 visits monthly', icon: <FaUsers /> },
            { text: '25 GB SSD storage', icon: <FaHdd /> },
            { text: '400 CMS pages and directories', icon: <FaSitemap /> },
            { text: 'Free SSL certificate', icon: <FaLock /> },
            { text: 'Daily backups', icon: <FaCloudUploadAlt /> },
            { text: 'Unlimited MySQL databases', icon: <FaDatabase /> },
            { text: 'Business email accounts', icon: <FaEnvelope /> },
            { text: '1-click staging environment', icon: <FaTools /> },
            { text: 'Auto plugin & theme updates', icon: <FaCogs /> },
            { text: 'Blazing fast CDN', icon: <FaRocket /> },
            { text: '24/7 expert support', icon: <FaHeadset /> },
            { text: 'Malware scanning & removal', icon: <FaShieldAlt /> },
            { text: 'Advanced performance monitoring', icon: <FaChartLine /> },
            ];

    const buttonStyle = {
        backgroundColor: isHover ? '#ff8c00' : '#ff8c00',
        color: '#fff',
        transition: 'background-color 0.3s ease'
    };

    const navigate = useNavigate();
    
    // Function to handle "Buy Now" click
    const handleBuyNow = (packageItem) => {
        navigate('/checkout', { 
            state: { 
                selectedPackage: {
                    id: packageItem.id,
                    title: packageItem.title,
                    price: packageItem.price,
                    details: packageItem.package_details,
                    package_type: packageItem.package_type,
                    amount: packageItem.price,
                    package_class: packageItem.package_class
                    
                }
            }
        });
    };

    // Toggle package selection for comparison - Fixed to ensure consistent behavior
    const toggleComparisonSelection = (packageItem) => {
        if (!showCompare) return; // Don't allow comparison if showCompare is false
        
        setSelectedForComparison(prevSelected => {
            // Check if already selected
            const isAlreadySelected = prevSelected.some(pkg => pkg.id === packageItem.id);
            
            if (isAlreadySelected) {
                // Remove if already selected
                return prevSelected.filter(pkg => pkg.id !== packageItem.id);
            } else {
                // Add if less than 2 selected
                if (prevSelected.length < 2) {
                    return [...prevSelected, packageItem];
                } else {
                    // Replace first package if already 2 selected
                    return [prevSelected[1], packageItem];
                }
            }
        });
    };

    // Toggle comparison modal
    const toggleComparisonModal = () => {
        setComparisonModalOpen(!comparisonModalOpen);
    };

    // Open comparison modal with selected packages
    const openComparison = () => {
        if (!showCompare) return; // Don't allow comparison if showCompare is false
        
        if (selectedForComparison.length > 0) {
            toggleComparisonModal();
        } else {
            // Select first two packages by default if none selected
            const currentPackages = groupedPackages[activeTab] || [];
            if (currentPackages.length >= 2) {
                setSelectedForComparison([currentPackages[0], currentPackages[1]]);
                setTimeout(() => toggleComparisonModal(), 50); // Ensure state is updated before opening modal
            } else if (currentPackages.length === 1) {
                setSelectedForComparison([currentPackages[0]]);
                setTimeout(() => toggleComparisonModal(), 50); // Ensure state is updated before opening modal
            }
        }
    };

    // Fetch packages from API
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/get-packages`);
                if (response.data.success && response.data.packages) {
                    // Ensure packages is an array
                    const packagesData = Array.isArray(response.data.packages) 
                        ? response.data.packages 
                        : [response.data.packages];
                    
                    // Map API data to our pricing format
                    const formattedPackages = packagesData.map((pkg, index) => {
                        const details = pkg.package_details
                            ? pkg.package_details
                                .replace(/<[^>]+>/g, '')
                                .replace(/&nbsp;/g, ' ')
                                .replace(/&[a-z]+;/gi, '')
                                .trim()
                            : '';
                        
                        // Determine which shape to use (cycling through available shapes)
                        const shapes = [rv3, rv4, rv5];
                        const shapeIndex = index % shapes.length;
                        
                        // Determine button class (cycling through available classes)
                        const btnClasses = ["btn-style-eleven", "btn-style-six", "btn-style-eight"];
                        const btnClassIndex = index % btnClasses.length;
                        
                        // Set active class for the middle item or the first if only one
                        const isActive = (packagesData.length === 3 && index === 1) || 
                                        (packagesData.length < 3 && index === 0);
                        
                        return {
                            id: pkg.id,
                            title: pkg.title || pkg.package_class || "Standard",
                            price: pkg.price || "69.99",
                            price2: (parseFloat(pkg.price) * 10).toFixed(2) || "149.99", // Yearly price (10x monthly as example)
                            package_details: details,
                            btnClass: btnClasses[btnClassIndex],
                            shape: shapes[shapeIndex],
                            active: isActive ? 'active' : '',
                            category: pkg.category || "Monthly",
                            position: pkg.position || index + 1
                        };
                    });
                    
                    // Sort packages by position if available
                    const sortedPackages = formattedPackages.sort((a, b) => a.position - b.position);
                    setPackages(sortedPackages);
                    
                    // Extract unique categories and organize packages by category
                    processPackageCategories(sortedPackages);
                }
            } catch (error) {
                console.error("Error fetching packages:", error);
                // Use default packages as fallback
                const defaultPackages = getDefaultPackages();
                setPackages(defaultPackages);
                processPackageCategories(defaultPackages);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            }
        };
        
        fetchPackages();
    }, []);

    // Process package categories and group packages
    const processPackageCategories = (packagesData) => {
        // Extract unique categories
        const uniqueCategories = [...new Set(packagesData.map(pkg => 
            pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1).toLowerCase()
        ))];
        
        // If no categories found, use default
        if (uniqueCategories.length === 0) {
            uniqueCategories.push('Monthly');
        }
        
        setCategories(uniqueCategories);
        
        // Group packages by category
        const grouped = uniqueCategories.reduce((acc, category) => {
            acc[category] = packagesData.filter(pkg => 
                pkg.category.toLowerCase() === category.toLowerCase()
            );
            return acc;
        }, {});
        
        // If a category has no packages, use packages from first category that has packages
        const firstNonEmptyCategory = Object.keys(grouped).find(cat => grouped[cat].length > 0);
        
        if (firstNonEmptyCategory) {
            uniqueCategories.forEach(category => {
                if (grouped[category].length === 0) {
                    grouped[category] = [...grouped[firstNonEmptyCategory]];
                }
            });
        }
        
        setGroupedPackages(grouped);
        
        // Set active tab to first category
        if (uniqueCategories.length > 0 && uniqueCategories[0]) {
            setActiveTab(uniqueCategories[0]);
        }
    };

    // Default packages as fallback
    const getDefaultPackages = () => [
        {
            id: 1,
            title: 'Standard',
            price: '69.99',
            price2: '109.99',
            btnClass: 'btn-style-eleven',
            shape: rv3,
            category: 'Monthly',
            position: 1,
            package_details: 'Social Media Marketing. 5,600 Keywords. One Way Link Building. 10 Free Optimization. 10 Press Releases.'
        },
        {
            id: 2,
            title: 'Economy',
            price: '79.99',
            price2: '129.99',
            active: 'active',
            btnClass: 'btn-style-six',
            shape: rv4,
            category: 'Monthly',
            position: 2,
            package_details: 'Social Media Marketing. 10,000 Keywords. Two Way Link Building. 20 Free Optimization. 15 Press Releases.'
        },
        {
            id: 3,
            title: 'Premium',
            price: '89.99',
            price2: '149.99',
            btnClass: 'btn-style-eight',
            shape: rv5,
            category: 'Yearly',
            position: 3,
            package_details: 'Social Media Marketing. 20,000 Keywords. Enterprise Link Building. Unlimited Optimization. 25 Press Releases.'
        },
    ];

    // Detect mobile screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
            // We'll keep the comparison selection when changing tabs to allow comparing across categories
            // Remove this line to clear selection when changing tabs: setSelectedForComparison([]);
        }
    };

    // Mobile slider settings
    const mobileSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
    };

    // Desktop slider settings for more than 3 cards
    const desktopSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    // Price card component for reuse
    const PriceCard = ({ item }) => {
        // Use state to track hover for this specific card
        const [isCardHover, setIsCardHover] = useState(false);
        const isSelected = selectedForComparison.some(pkg => pkg.id === item.id);
         const [expanded, setExpanded] = useState(false);

         const visibleFeatures = expanded ? features : features.slice(0, 5);

           

        
        return (
            <div className={`price-block ${item.active || ''}`}>
                <div className="inner-box">
                    <div className="title">{item.title}</div>
                    <div className="price">Rs. {item.price}</div>
                    {/* <ul className="price-list"> 
                        {item.package_details
                            ? item.package_details
                                .split(/\s+/)
                                .slice(0, 30)
                                .join(' ') + '...'
                            : 'Loading...'
                        }
                    </ul> */}
             <ul className="price-list">
                    {item.package_details ? (
                        item.package_details
                        .split('\r\n')
                        .filter(detail => detail.trim().length > 0)
                        .slice(0, showAll ? undefined : 10)
                        .map((detail, index) => (
                            <li key={index}>
                                <span style={{ color: 'green', marginRight: '8px' }}>✓</span>
                                {detail.trim()}
                            </li>
                        ))
                    ) : (
                        <li>Loading...</li>
                    )}
                </ul>
                    
                    {item.package_details && 
                    item.package_details.split('\r\n').filter(detail => detail.trim().length > 0).length > 10 && (
                 <span
                    onClick={() => setShowAll(!showAll)}
                    style={{
                        marginTop: '10px',
                        padding: '6px 8px',
                        color: '#007bff',
                        cursor: 'pointer',
                        fontSize: '14px',
                        textDecoration: 'underline',
                        display: 'inline-block'
                    }}
                >
                    {showAll ? 'See Less' : 'See More'}
                </span>
                    )}
                 {/* <ul className="price-list">
                    {visibleFeatures.map((feature, index) => (
                        <li className="feature-item" key={index}>
                        <div className="d-flex align-items-center">
                            <span
                            style={{
                                color: '#4CAF50',
                                marginRight: '8px',
                                minWidth: '16px',
                            }}
                            >
                            {feature.icon}
                            </span>
                            <span>{feature.text}</span>
                        </div>
                        </li>
                    ))}

                    <li className="text-center mt-2">
                        <button
                        className="btn btn-sm btn-link d-block w-100 text-center p-0"
                        onClick={() => setExpanded(!expanded)}
                        >
                        {expanded ? (
                            <>
                            Show less <FaChevronUp />
                            </>
                        ) : (
                            <>
                            See all features <FaChevronDown />
                            </>
                        )}
                        </button>
                    </li>
                    </ul> */}
                    <div className={showCompare ? "d-flex justify-content-between mt-2" : "mt-2"}>
                        <button 
                            className={`theme-btn ${item.btnClass}`} 
                            style={{
                                backgroundColor: isCardHover ? '#e57e00' : '#ff8c00',
                                color: '#fff',
                                transition: 'background-color 0.3s ease',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '10px 15px',
                                flexGrow: 1,
                                marginRight: showCompare ? '5px' : '0',
                                width: showCompare ? 'auto' : '100%'
                            }}
                            onMouseEnter={() => setIsCardHover(true)}
                            onMouseLeave={() => setIsCardHover(false)}
                            onClick={() => handleBuyNow(item)}
                        >
                            <span className="txt">Buy Now</span>
                        </button>
                        
                        {showCompare && (
                            <button 
                                className={`btn ${isSelected ? 'btn-success' : 'btn-outline-secondary'}`} 
                                style={{
                                    flexGrow: 0,
                                    padding: '10px 15px'
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleComparisonSelection(item);
                                }}
                            >
                                {isSelected ? 'Selected' : 'Compare'}
                            </button>
                        )}
                    </div>
                    <div className="price-pattern-layer" style={{ backgroundImage: `url(${item.shape})` }}></div>
                </div>
            </div>
        );
    };

    // Skeleton loading component
    const SkeletonPriceCard = () => (
        <div className="price-block">
            <div className="inner-box">
                <div className="title"><Skeleton width={120} height={30} /></div>
                <div className="price"><Skeleton width={100} height={40} /></div>
                <ul className="price-list">
                    <li><Skeleton width="90%" height={20} /></li>
                    <li><Skeleton width="80%" height={20} /></li>
                    <li><Skeleton width="85%" height={20} /></li>
                    <li><Skeleton width="75%" height={20} /></li>
                    <li><Skeleton width="70%" height={20} /></li>
                </ul>
                <div style={{ padding: '10px' }}><Skeleton width="100%" height={45} borderRadius={30} /></div>
            </div>
        </div>
    );

    // Create skeleton loading for grid or slider
    const SkeletonCards = () => {
        if (isMobile) {
            return (
                <div className="pricing-mobile-slider">
                    <Slider {...mobileSliderSettings}>
                        {[1, 2, 3].map((item) => (
                            <div key={item}>
                                <SkeletonPriceCard />
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        return (
            <Row>
                {[1, 2, 3].map((item) => (
                    <div className="price-block col-lg-4 col-md-6 col-sm-12" key={item}>
                        <SkeletonPriceCard />
                    </div>
                ))}
            </Row>
        );
    };

    // Render packages based on count and device
    const renderPackages = (packages) => {
        if (isMobile) {
            return (
                <div className="pricing-slider">
                    <Slider {...mobileSliderSettings}>
                        {packages.map((item, index) => (
                            <div key={item.id || index}>
                                <PriceCard item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        } else if (packages.length > 3) {
            // Use slider for desktop if more than 3 packages
            return (
                <div className="pricing-desktop-slider">
                    <Slider {...desktopSliderSettings}>
                        {packages.map((item, index) => (
                            <div key={item.id || index} className="px-2">
                                <PriceCard item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        } else {
            // Standard grid for 3 or fewer packages on desktop
            return (
                <Row>
                    {packages.map((item, index) => (
                        <div className="price-block col-lg-4 col-md-6 col-sm-12" key={item.id || index}>
                            <PriceCard item={item} />
                        </div>
                    ))}
                </Row>
            );
        }
    };

    return (
        <section className={`pricing-section style-three ${sClass}`}>
            <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${rv2})` }}></div>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Packages</div>
                    <h2>Our Pricing Table</h2>
                    <div className="text">We take a consultative approach to every client engagement and find actionable <br /> solutions that will help your organization achieve the best outcomes.</div>
                    
                    {/* Conditionally render buttons based on props */}
                    {(showCompare || showViewAll) && (
                        <div className="d-flex justify-content-end align-items-center gap-3 my-3">
                            {/* Compare Button - only show if showCompare is true */}
                            {showCompare && (
                                <Button 
                                    color="info"
                                    onClick={openComparison}
                                    className="theme-btn btn-style-eight"
                                    disabled={loading}
                                >
                                    <span className="txt">
                                        Compare Selected {selectedForComparison.length > 0 ? `(${selectedForComparison.length})` : ''}
                                    </span>
                                </Button>
                            )}

                            {/* View All Button - only show if showViewAll is true */}
                            {showViewAll && (
                                <Link to="/package-page" className="theme-btn btn-style-eight">
                                    <span className="txt">View All</span>
                                </Link>
                            )}
                        </div>
                    )}
                </div>

                <div className="pricing-tabs tabs-box">
                    <div className="buttons-outer">
                        <Nav tabs className="tab-buttons clearfix">
                            {categories.map((category, index) => (
                                <NavItem className='tab-btn' key={category}>
                                    <NavLink
                                        className={classnames({ active: activeTab === category })}
                                        onClick={() => { toggle(category); }}
                                    >
                                        {category}
                                    </NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </div>

                    <TabContent activeTab={activeTab}>
                        {categories.map(category => (
                            <TabPane tabId={category} key={category}>
                                {loading ? (
                                    <SkeletonCards />
                                ) : (
                                    renderPackages(groupedPackages[category] || [])
                                )}
                            </TabPane>
                        ))}
                    </TabContent>
                </div>
            </div>
            
            {/* Package Comparison Modal - only render if showCompare is true */}
            {showCompare && comparisonModalOpen && (
                <PackageComparison
                    packages={packages}
                    isOpen={comparisonModalOpen}
                    toggle={toggleComparisonModal}
                    preSelectedPackages={selectedForComparison}
                />
            )}
        </section>
    );
};

export default Pricing;