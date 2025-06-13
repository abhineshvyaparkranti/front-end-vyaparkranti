// import React from 'react';
// import { Link } from 'react-router-dom'
// import ContactForm from '../ContactFrom'

// const Contactpage = () => {

//     return (
//         <div>
//             <div className="contact-info-section">
//                 <div className="auto-container">
//                     <div className="sec-title centered">
//                         <div className="title">Follow Our Info</div>
//                         <h2>Contact information</h2>
//                         <div className="text">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. <br /> We will be happy to answer your questions.</div>
//                     </div>
//                     <div className="inner-container">
//                         <div className="row clearfix">
//                             <div className="column col-lg-6 col-md-6 col-sm-12">
//                                 <div className="info-box">
//                                     <div className="box-inner">
//                                         <div className="icon flaticon-clock"></div>
//                                         10:00am to 6:00pm <br /> Sunday Closed
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="column col-lg-6 col-md-6 col-sm-12">
//                                 <div className="info-box">
//                                     <div className="box-inner">
//                                         <div className="icon flaticon-pin"></div>
//                                         13005 Greenville Avenue <br /> California, TX 70240
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="column col-lg-6 col-md-6 col-sm-12">
//                                 <div className="info-box">
//                                     <div className="box-inner">
//                                         <div className="icon flaticon-phone-call"></div>
//                                         <a href="tel:+1-000999-0099">+1 000999 0099</a>
//                                         <a href="mailto:mail@example.com">mail@example.com</a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="column col-lg-6 col-md-6 col-sm-12">
//                                 <ul className="social-box">
//                                     <span>Our Socials Links <i>Print this page to PDF for the complete set of vectors.</i></span>
//                                     <li className="facebook"><Link className="fa fa-facebook-f" to="/contact"></Link></li>
//                                     <li className="twitter"><Link className="fa fa-twitter" to="/contact"></Link></li>
//                                     <li className="linkedin"><Link to="/contact" className="fa fa-google-plus"></Link></li>
//                                     <li className="pinterest"><Link to="/contact" className="fa fa-pinterest-p"></Link></li>
//                                 </ul>
//                             </div>

//                         </div>
//                     </div>
//                     <div className="map-boxed">
//                         <div className="map-outer">
//                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s" width="100%" height="560px" frameborder="0" allowFullScreen=""></iframe>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <section className="contact-form-section">
//                 <div className="auto-container">
//                     <div className="sec-title centered">
//                         <div className="title">Don’t Hasitate To Contact With us</div>
//                         <h2>Now Very Easy</h2>
//                         <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know <br /> doesn’t work. With over 200 verified factors in play.</div>
//                     </div>
//                     <div className="inner-container">
//                         <div className="contact-form">
//                             <ContactForm />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )

// }

// export default Contactpage;
 



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactFrom';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Contactpage = () => {
    // const [aboutData, setAboutData] = useState(null);
 

        // const [bannerTitle, setBannerTitle] = useState("Vyapar Kranti Seo Service Provider From Your Agency.");
        const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
        const [loading, setLoading] = useState(true);
        const[address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
        const[mobile, setMobile] = useState("+1234567790 test");
        const[mail, setMail] = useState("test@gmail.com test");
        const[contact_timing, setcontact_timing] = useState("");
        const[Map_link, setMap_link] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.037650106843!2d76.98448781508391!3d28.612870082425267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fdda4eabfb1%3A0x1b29e6f8e8722395!2sVyapar%20Kranti!5e0!3m2!1sen!2sin!4v1713436924098!5m2!1sen!2sin");
        const [error, setError] = useState(null);
        const [international_address, setinternational_address] = useState(" 1st avneu USA");
        const [mapUrl, setMapUrl] = useState('');
   
 
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

     // remove tags end
    
    // In your Hero component, update how you process the banner content:

const fetchBannerData = async () => {

    try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/contact-element`);
        console.log('Contact page data response============>:', response.data.elements);
    
        const elements = response.data.elements;
         console.log('Contact page  data response============>:', response.data.elements);
         
    
        if (elements) {
          if (elements.Address) setAddress(removeTags(elements.Address));
          if (elements.international_address) setinternational_address(removeTags(elements.international_address));
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


useEffect(() => {
    // Function to fetch map data from your API
    const fetchMapData = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        // const response = await axios.get('your-api-endpoint');
        const response = await axios.get(`${API_BASE_URL}/api/contact-element`);
        console.log('Contact page data response============>:', response.data.elements);
        
        // Assuming the API returns a map_link property
        const rawMapLink = response.data.elements.Map_link;
        
        // Convert the place URL to an embed URL
        const embedUrl = convertToEmbedUrl(rawMapLink);
        
        setMapUrl(embedUrl);
        setLoading(false);
      } catch (err) {
        setError('Failed to load map data');
        setLoading(false);
        console.error('Error fetching map data:', err);
      }
    };

    fetchMapData();
  }, []);

  // Function to convert a Google Maps place URL to an embed URL
  const convertToEmbedUrl = (url) => {
    // Extract the place ID if present
    const placeIdMatch = url.match(/place\/[^\/]+\/@?([\d\.-]+),([\d\.-]+)/);
    
    if (placeIdMatch) {
      // For URLs with place information
      const locationName = url.split('/place/')[1].split('/')[0];
      const lat = url.match(/@([\d\.-]+),([\d\.-]+)/)[1];
      const lng = url.match(/@([\d\.-]+),([\d\.-]+)/)[2];
      
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus`;
    } else {
      // Fallback to the original URL if we can't parse it
      return url;
    }
  };

  if (loading) return <div>Loading map...</div>;
  if (error) return <div>{error}</div>;


    return (
        <div>

                 <section className="contact-form-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <div className="title"> </div>
                        <h2>Now Very Easy</h2>
                        <div className="text">
                            Our approach to SEO is uniquely built around what we know works…
                            <br /> and what we know doesn’t work.
                        </div>
                    </div>
                    <div className="inner-container">
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-info-section">
                <div className="auto-container">
                    <div className="sec-title centered">
                        <div className="title">Follow Our Info</div>
                        <h2>Contact information</h2>
                        <div className="text">
                            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
                            <br /> We will be happy to answer your questions.
                        </div>
                    </div>

                    <div className="inner-container">
                        <div className="row clearfix">
                            {/* Static Dummy Info */}
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-clock"></div>
                                        {/* 10:00am to 6:00pm <br /> Mon - Fri  */}
                                         {loading ? (
                                                <Skeleton width={150} height={50} />
                                                ) : (
                                               contact_timing
                                                )}
                                         
                                    </div>
                                </div>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-pin"></div>
                                        {/* 13005 Greenville Avenue <br /> California, TX 70240 */}

                                        {loading ? (
                                                <Skeleton width={150} height={50} />
                                                ) : (
                                                address
                                                )}


                                    </div>
                                </div>
                            </div>

                            

                            {/* Phone and Email - example from API data */}
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-phone-call"></div>
                                        <a href="tel:+1-000999-0099">
                                        {loading ? (
                                                <Skeleton width={150} height={20} />
                                                ) : (
                                                mobile
                                                )} </a>
                                        <br />
                                        {/* <a href="mailto:mail@example.com">
                                        {loading ? (
                                                <Skeleton width={150} height={20} />
                                                ) : (
                                                mail
                                                )}
                                            
                                             </a> */}
                                        {/* <div className="icon flaticon-phone-call"></div>
                                        {loading ? (
                                        <div className="shadow p-3 rounded bg-white d-inline-block">
                                            <Skeleton 
                                                width={150} 
                                                height={20} 
                                                baseColor="#e0e0e0" 
                                                highlightColor="#f5f5f5" 
                                                duration={1.2} 
                                                style={{ marginBottom: '8px', borderRadius: '4px' }}
                                            />
                                            <Skeleton 
                                                width={200} 
                                                height={20} 
                                                baseColor="#e0e0e0" 
                                                highlightColor="#f5f5f5" 
                                                duration={1.2}
                                                style={{ borderRadius: '4px' }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="shadow p-3 rounded bg-white d-inline-block">
                                            <a href={`tel:${mobile}`} className="d-block mb-1">{mobile}</a>
                                            <a href={`mailto:${mail}`}>{mail}</a>
                                        </div>
                                    )}
                                    */}


                                    </div>
                                </div>
                            </div>

                             <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="info-box">
                                    <div className="box-inner">
                                        <div className="icon flaticon-pin"></div>
                                        

                                        {loading ? (
                                                <Skeleton width={150} height={50} />
                                                ) : (
                                                 international_address
                                                )}


                                    </div>
                                </div>
                            </div>

                            {/* Socials from team_info[0] as an example */}
                            {/* {aboutData && aboutData.team_info?.length > 0 && (
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <ul className="social-box">
                                        <span>Our Social Links</span>
                                        <li className="facebook"><a href={aboutData.team_info[0]?.facebook || "#"} className="fa fa-facebook-f" target="_blank" rel="noopener noreferrer"></a></li>
                                        <li className="twitter"><a href={aboutData.team_info[0]?.twitter || "#"} className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
                                        <li className="linkedin"><a href={aboutData.team_info[0]?.linkedin || "#"} className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a></li>
                                        <li className="pinterest"><a href={aboutData.team_info[0]?.instagram || "#"} className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
                                    </ul>
                                </div>
                            )} */}
                            {/* <div className="column col-lg-6 col-md-6 col-sm-12">
                                <ul className="social-box">
                                    <span>Our Socials Links <i>Print this page to PDF for the complete set of vectors.</i></span>
                                    <li className="facebook"><Link className="fa fa-facebook-f" to="/contact"></Link></li>
                                    <li className="twitter"><Link className="fa fa-twitter" to="/contact"></Link></li>
                                    <li className="linkedin"><Link to="/contact" className="fa fa-google-plus"></Link></li>
                                    <li className="pinterest"><Link to="/contact" className="fa fa-pinterest-p"></Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    <div className="map-boxed">
                        <div className="map-outer">
                        
                            <iframe
                            // src={Map_link}
                            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.037650106843!2d76.98448781508391!3d28.612870082425267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fdda4eabfb1%3A0x1b29e6f8e8722395!2sVyapar%20Kranti!5e0!3m2!1sen!2sin!4v1713436924098!5m2!1sen!2sin"}
                                width="100%"
                                height="560px"
                                frameBorder="0"
                                allowFullScreen=""
                                title="Google Maps"
                            ></iframe>
                             {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.037650106843!2d76.98448781508391!3d28.612870082425267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fdda4eabfb1%3A0x1b29e6f8e8722395!2sVyapar%20Kranti!5e0!3m2!1sen!2sin!4v1713436924098!5m2!1sen!2sin"></iframe>
                              */}
                               {/* {mapUrl && (
                                <iframe 
                                src={mapUrl}
                                width="100%" 
                                height="560" 
                                frameBorder="0" 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                                />
                            )} */}
                        </div>
                    </div>
                </div>
            </div>

             
        </div>
    );
};

export default Contactpage;




 