import React, { useEffect, useState } from 'react';
import axios from 'axios';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom'
import cImg from '../../images/icons/icon-8.png'
import cImg2 from '../../images/icons/icon-9.png'
import cImg3 from '../../images/icons/icon-10.png'
import WhyChooseUsCard from './WhyChooseUsCard';


const WhyChoose3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


     // api implementation
     
    const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
    const [loading, setLoading] = useState(true);
    const[address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
    const [error, setError] = useState(null);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
      
 
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
        const response = await axios.get(`${API_BASE_URL}/api/get-choose-data`);
        // const response = await axios.get("http://192.168.1.12:8000/api/get-choose-data")
        // console.log('About us page data response============>:', response.data.elements);
    
        const elements = response.data.chhoseUs;
         console.log('About us page why choose us 2nd data response============>:', response.data.chhoseUs);
    
        if (elements) {
          if (elements.Address) setAddress(removeTags(elements.Address));
          if (elements.description) setDescription(removeTags(elements.description));
          if (elements.title) setTitle(removeTags(elements.title));
           
          
        
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

        <section className="services-section-three">
            <div className="pattern-layer-one" style={{ backgroundImage: `url(${cImg})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${cImg2})` }}></div>
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${cImg3})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
                        <WhyChooseUsCard />
                    </div>

                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">WHY US CHOOSE NOW</div>
                                <h2>{title}</h2>
                            </div>
                            <div className="bold-text">{description}</div>
                            {/* <ul className="list-style-three">
                                <li>We've been supporting WordPress since the beginning. test</li>
                                <li>Perfect for large sites or agencies managing multiple clients.</li>
                                <li>Our easy-to-use control panel and API let you spend</li>
                            </ul> */}
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn btn-style-five"><span className="txt">Learn More</span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default WhyChoose3;