import React, { useEffect, useState } from 'react';
import axios from 'axios';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import cImg from '../../images/resource/skill.png'


const WhyChoose2 = (props) => {

    
     // api implementation
     
    const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
    const [loading, setLoading] = useState(true);
    const[address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
    const [error, setError] = useState(null);
 
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

     // remove tags end
    
    // api start

const fetchBannerData = async () => {

    try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/home-elements`);
        // console.log('About us page data response============>:', response.data.elements);
    
        const elements = response.data.elements;
         console.log('About us page why choose us part 2 data response============>:', response.data.elements);
    
        if (elements) {
          if (elements.Address) setAddress(removeTags(elements.Address));
           
          
        
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

         // api end
    return (

        <section className="skill-section">
            <div className="auto-container">
                <div className="row clearfix">

                    <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Why Choose Us</div>
                                <h2>We dedicate for Company <br /> with SEO work</h2>
                            </div>
                            <div className="text">From keyword research to technical auditing to site migration, our team of technical SEOs are true experts in their field.</div>

                            <div className="skills">

                                <div className="skill-item">
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Keyword Research</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="70">70</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '70%'}}></div></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Technical SEO Audit</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="80">80</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '80%'}}></div></div>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-header clearfix">
                                        <div className="skill-title">Content Optimization</div>
                                        <div className="skill-percentage"><div className="count-box"><span className="count-text" data-speed="2000" data-stop="60">60</span>%</div></div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner"><div className="bar progress-line" style={{width: '60%'}}></div></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <img src={cImg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default WhyChoose2;