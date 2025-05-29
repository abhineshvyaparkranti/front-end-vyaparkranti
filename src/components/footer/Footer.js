// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'
// import Logo from '../../images/logo.png'
// import Services from '../../api/Services';
// import Projects from '../../api/project'
// import shape1 from '../../images/background/pattern-3.png'
// import shape2 from '../../images/background/pattern-4.png'
// import shape3 from '../../images/background/pattern-5.png'
// import companylogo3 from '../../images/companylogo/companylogo3.png'
// import PrivacyPage from './../../main-component/PrivacyPage/PrivacyPage';
// import htmlReactParser, { domToReact } from 'html-react-parser';
// import { API_BASE_URL } from '../../api/config/apiConfig';

// const Footer = (props) => {

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }


//             const [bannerTitle, setBannerTitle] = useState("Vyapar Kranti Seo Service Provider From Your Agency.");
//             const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
//             const [loading, setLoading] = useState(true);
//             const[address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
//             const[mobile, setMobile] = useState("+1234567790");
//             const[mail, setMail] = useState("test@gmail.com");
//             const[Map_link, setMap_link] = useState("https://www.google.com/maps?ll=28.61287,76.986676&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=1957349469795263381");
//             const [error, setError] = useState(null);
     
//         const removeTags = (htmlString) => {
//             if (typeof htmlString !== "string") {
//                 console.error("Invalid input for removeTags:", htmlString);
//                 return ""; 
//             }
            
            
//             if (!htmlString.includes('<') && !htmlString.includes('>')) {
//                 return htmlString;
//             }
            
            
//             try {
//                 return htmlReactParser(htmlString, {
//                     replace: (domNode) => {
//                         if (domNode.type === 'tag') {
                            
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
        
//         // api part start
    
//     const fetchBannerData = async () => {
    
//         try {
//             setLoading(true);
//             const response = await axios.get(`${API_BASE_URL}/api/home-elements`);
//             console.log('Contact page data response============>:', response.data.elements);
        
//             const elements = response.data.elements;
//              console.log('Contact page  data response============>:', response.data.elements);
        
//             if (elements) {
//               if (elements.Address) setAddress(removeTags(elements.Address));
//               if (elements.mobile) setMobile(removeTags(elements.mobile));
//               if (elements.mail) setMail(removeTags(elements.mail));
//               if (elements.Map_link) setMap_link(removeTags(elements.Map_link));
              
            
//             }
            
         
//             if (response.data && response.data.elements.banner_content) {
//                 const cleanContent = response.data.elements.banner_content
//                     .replace(/<p>/g, '')  
//                     .replace(/<\/p>/g, '')  
//                     .trim(); 
                
//                 setBannerContent(cleanContent);  
//             }
            
//             setLoading(false);
//         } catch (err) {
//             console.error("Error fetching banner data:", err);
//             setError("Failed to load banner content. Using default content instead.");
//             setLoading(false);
//         }
//     };
    
    
//     useEffect(() => {
//         fetchBannerData();
//     }, []);

//     // api end here
    

//     return (
//         <footer className={`main-footer ${props.fClass}`}>
//             <div className="pattern-layer" style={{ backgroundImage: `url(${shape1})` }}></div>
//             <div className="pattern-layer-two" style={{ backgroundImage: `url(${shape2})` }}></div>
//             <div className="pattern-layer-three" style={{ backgroundImage: `url(${shape3})` }}></div>
//             <div className="auto-container">
//                 <div className="widgets-section">
//                     <div className="row clearfix">
//                         <div className="big-column col-lg-6 col-md-12 col-sm-12">
//                             <div className="row clearfix">
//                                 <div className="footer-column col-lg-7 col-md-6 col-sm-12">
//                                     <div className="footer-widget logo-widget">
//                                         <div className="logo">
//                                             <Link onClick={ClickHandler} to="/"><img src={companylogo3} alt="" /></Link>
//                                         </div>
//                                         <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know doesn’t work. With over 200 verified factors in play.</div>
                                         
//                                     </div>
//                                 </div>
//                                 <div className="footer-column col-lg-5 col-md-6 col-sm-12">
//                                     <div className="footer-widget links-widget">
//                                         <h4>Services</h4>
//                                         <ul className="list-link">
//                                             {Services.slice(0, 5).map((service, i) => (
//                                                 <li key={i}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
//                                             ))}

//                                         <li><Link onClick={ClickHandler} to="/careers">Careers</Link></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="big-column col-lg-6 col-md-12 col-sm-12">
//                             <div className="row clearfix">
//                                 <div className="footer-column col-lg-6 col-md-6 col-sm-12">
//                                     <div className="footer-widget gallery-widget">
//                                         {/* <h4>instagram</h4>
//                                         <div className="widget-content">
//                                             <div className="images-outer clearfix">
//                                                 {Projects.slice(0, 6).map((project, prj) => (
//                                                     <figure className="image-box" key={prj}><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}><img src={project.pImg} alt="" /></Link></figure>
//                                                 ))}
//                                             </div>
//                                         </div> */}
//                                          <h4>Quick Link</h4>
//                                          <ul className="list-link">
//                                          <li><Link onClick={ClickHandler} to="/">Home</Link></li>
//                                          <li><Link onClick={ClickHandler} to="/terms">Terms & Condition</Link></li>
//                                          <li><Link onClick={ClickHandler} to="/privacy">Privacy & Policy</Link></li>
//                                          <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
//                                          <li><Link onClick={ClickHandler} to="/contact">Help</Link></li>
//                                          <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                                            
//                                         </ul>

//                                     </div>
//                                 </div>
//                                 <div className="footer-column col-lg-5 col-md-6 col-sm-12">
//                                     <div className="footer-widget links-widget">
//                                         <h4>Contact info</h4>
//                                         <ul className="list-style-two">
//                                             <li><span className="icon flaticon-wall-clock"></span>Mon – Sat 10:00pm - 8:00pm</li>
//                                             {/* <li><span className="icon flaticon-phone-call"></span><Link onClick={ClickHandler} to="/">{mobile}</Link> <Link onClick={ClickHandler} to="/">{mobile}</Link></li> */}
//                                               <li><span className="icon flaticon-email"></span><Link onClick={ClickHandler} to="/">{mail}</Link></li>
//                                             <li><span className="icon flaticon-email"></span><Link onClick={ClickHandler} to="/">{mail}</Link></li>
//                                             <li><span className="icon flaticon-maps-and-flags"></span> {address}</li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className="footer-bottom">
//                     <div className="copyright">Copyright © 2025  by <Link onClick={ClickHandler} to="/">Vyapar Kranti</Link>. All Rights Reserved.</div>
//                 </div>

//             </div>
//         </footer>
//     )
// }

// export default Footer;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import Services from '../../api/Services';
import Projects from '../../api/project';
import shape1 from '../../images/background/pattern-3.png';
import shape2 from '../../images/background/pattern-4.png';
import shape3 from '../../images/background/pattern-5.png';
import companylogo3 from '../../images/companylogo/logonewwhite.jpg';
import PrivacyPage from './../../main-component/PrivacyPage/PrivacyPage';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ServiceList from './../../main-component/ServiceSinglePage/ServiceList';

const Footer = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [bannerTitle, setBannerTitle] = useState("Vyapar Kranti Seo Service Provider From Your Agency.");
    const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
    const [mobile, setMobile] = useState("+1234567790");
    const [mail, setMail] = useState("test@gmail.com");
    const [Map_link, setMap_link] = useState("https://www.google.com/maps?ll=28.61287,76.986676&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=1957349469795263381");
    const [error, setError] = useState(null);
     const[contact_timing, setcontact_timing] = useState("10am - 6pm");
    const [Logo, setLogo] = useState("../../images/companylogo/logonewwhite.jpg");
    const [footer_content, setfooter_content] = useState("Our approach to SEO is uniquely built around what we know works…");
    const [international_address, setinternational_address] = useState(" 1st avneu USA");

    const removeTags = (htmlString) => {
        if (typeof htmlString !== "string") {
            console.error("Invalid input for removeTags:", htmlString);
            return "";
        }

        if (!htmlString.includes('<') && !htmlString.includes('>')) {
            return htmlString;
        }

        try {
            return htmlReactParser(htmlString, {
                replace: (domNode) => {
                    if (domNode.type === 'tag') {
                        return <>{domToReact(domNode.children)}</>;
                    }
                },
            });
        } catch (error) {
            console.error("Error parsing HTML:", error);
            return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
        }
    };

    const fetchBannerData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/home-elements`);
            console.log('Footer page data response============>:', response.data.elements);

            const elements = response.data.elements;
            console.log('Footer page  data response============>:', response.data.elements);

            if (elements) {
                if (elements.Address) setAddress(removeTags(elements.Address));
                if (elements.mobile) setMobile(removeTags(elements.mobile));
                if (elements.mail) setMail(removeTags(elements.mail));
                if (elements.Map_link) setMap_link(removeTags(elements.Map_link));
                if (elements.Logo) setLogo(removeTags(elements.Logo));
                 if (elements.footer_content) setfooter_content(removeTags(elements.footer_content));
                if (elements.contact_timing) setcontact_timing(removeTags(elements.contact_timing));
                if (elements.international_address) setinternational_address(removeTags(elements.international_address));
            }

            if (response.data && response.data.elements.banner_content) {
                const cleanContent = response.data.elements.banner_content
                    .replace(/<p>/g, '')
                    .replace(/<\/p>/g, '')
                    .trim();

                setBannerContent(cleanContent);
            }

            setLoading(false);
        } catch (err) {
            console.error("Error fetching banner data:", err);
            setError("Failed to load banner content. Using default content instead.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBannerData();
    }, []);

    return (
        <footer className={`main-footer ${props.fClass}`}>
            <div className="pattern-layer" style={{ backgroundImage: `url(${shape1})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${shape2})` }}></div>
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${shape3})` }}></div>
            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                    {/* <div className="logo">
                                    <Link onClick={ClickHandler} to="/">
                                        {loading ? (
                                            <Skeleton width={150} height={40} /> // adjusted skeleton height too
                                        ) : (
                                            <img src={Logo} alt="Logo" style={{ height: "80px", width:"200px", objectFit: "inherit" }} />
                                        )}
                                    </Link>
                                </div> */}

                                    <div className="logo">
                                            <Link onClick={ClickHandler} to="/"><img src={companylogo3} alt="" style={{width: '170px', height: "80px"}} /></Link>
                                     </div>

                                        <div className="text">
                                            {loading ? (
                                                <Skeleton count={3} />
                                            ) : (
                                                footer_content
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>{loading ? <Skeleton width={100} /> : "Services"}</h4>
                                        <ul className="list-link"> 
                                        <ServiceList />
                                         
                                        </ul>
                                        {/* <ul className="list-link">
                                            {loading ? (
                                                Array(6).fill().map((_, i) => (
                                                    <li key={i}><Skeleton width={120} /></li>
                                                ))
                                            ) : (
                                                <>
                                                    {Services.slice(0, 5).map((service, i) => (
                                                        <li key={i}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                                    ))}
                                                    <li><Link onClick={ClickHandler} to="/careers">Careers</Link></li>
                                                </>
                                            )}
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget gallery-widget">
                                        <h4>{loading ? <Skeleton width={100} /> : "Quick Link"}</h4>
                                        <ul className="list-link">
                                            {loading ? (
                                                Array(6).fill().map((_, i) => (
                                                    <li key={i}><Skeleton width={120} /></li>
                                                ))
                                            ) : (
                                                <>
                                                    {/* <li><Link onClick={ClickHandler} to="/">Home</Link></li> */}
                                                    {/* <li><Link onClick={ClickHandler} to="/terms">Terms & Condition</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/privacy">Privacy & Policy</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/refund">Refund Policy</Link></li> */}
                                                    
                                                    <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/contact">Help</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/careers">Careers</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                                     <li><Link onClick={ClickHandler} to="/payment">Pay Now</Link></li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>{loading ? <Skeleton width={120} /> : "Contact info"}</h4>
                                        <ul className="list-style-two">
                                            {loading ? (
                                                Array(4).fill().map((_, i) => (
                                                    <li key={i}>
                                                        <Skeleton width={200} />
                                                    </li>
                                                ))
                                            ) : (
                                                <>
                                                    <li><span className="icon flaticon-wall-clock"></span> {contact_timing} </li>
                                                    <li><span className="icon flaticon-phone-call"></span><Link onClick={ClickHandler} to="/">{mobile}</Link></li>
                                                    <li><span className="icon flaticon-email"></span><Link onClick={ClickHandler} to="/">{mail}</Link></li>
                                                    <li><span className="icon flaticon-maps-and-flags"></span> {address}</li>
                                                     <li><span className="icon flaticon-maps-and-flags"></span>{international_address}</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <div className="copyright">
                {loading ? (
                    <Skeleton width={300} />
                ) : (
                    <>Copyright © 2025 by <Link onClick={ClickHandler} to="/">Vyapar Kranti</Link>. All Rights Reserved.</>
                )}
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Link onClick={ClickHandler} to="/terms">Terms & Condition</Link>
                <span>|</span>
                <Link onClick={ClickHandler} to="/privacy">Privacy & Policy</Link>
                <span>|</span>
                <Link onClick={ClickHandler} to="/refund">Refund Policy</Link>
                </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;





 