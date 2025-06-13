 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/clients/1.png'
import pimg2 from '../../images/clients/2.png'
import pimg3 from '../../images/clients/3.png'
import pimg4 from '../../images/clients/4.png'
import pimg5 from '../../images/clients/5.png'
import SectionTitle from '../SectionTitle/SectionTitle';

// Fallback partners in case API fails
const fallbackPartners = [
    { pImg: pimg1 },
    { pImg: pimg2 },
    { pImg: pimg3 },
    { pImg: pimg4 },
    { pImg: pimg5 },
    { pImg: pimg3 },
];

const PartnerSection = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [partners, setPartners] = useState(fallbackPartners);

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Keep existing functions that might be used elsewhere
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
    
    // Clean description HTML to remove unnecessary tags
    const cleanDescription = (description) => {
        if (!description) return '';
        
        // Remove unnecessary MS Word tags and clean up the HTML
        return description
            .replace(/<o:p><\/o:p>/g, '')
            .replace(/<span[^>]*>/g, '<span>')  // Simplify span tags
            .replace(/<p class="MsoNormal">/g, '<p>') // Simplify paragraph tags
            .replace(/\r\n/g, ''); // Remove carriage returns
    };

    // New function to fetch partner data
    const fetchPartnerData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/get-partner`);
            console.log('Partner data response:', response.data);
            
            if (response.data && response.data.status && response.data.Partners && response.data.Partners.length > 0) {
                // Convert API data format to match the expected format for the carousel
                const apiPartners = response.data.Partners.map(partner => ({
                    pImg: partner.image,
                    id: partner.id
                }));
                
                setPartners(apiPartners);
            }
            
            setLoading(false);
        } catch (err) {
            console.error("Error fetching partner data:", err);
            setError("Failed to load partners");
            // Keep using fallback partners if API fails
            setPartners(fallbackPartners);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPartnerData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
         
          
        <section className={`clients-section ${props.styleClass}`}>
             <SectionTitle subTitle={'Our Affiliate'} />
            <div className="auto-container">
                <div className="inner-container">
                    <div className="sponsors-outer">
                        {loading ? (
                            <ul className="sponsors-carousel">
                                <Slider {...settings}>
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <li key={item} className="slide-item">
                                            <figure className="image-box">
                                                <div style={{ 
                                                    width: '190px', 
                                                    height: '155px', 
                                                    background: '#f0f0f0',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto'
                                                }}>
                                                    <Skeleton width={150} height={100} />
                                                </div>
                                            </figure>
                                        </li>
                                    ))}
                                </Slider>
                            </ul>
                        ) : (
                            <ul className="sponsors-carousel">
                                <Slider {...settings}>
                                    {partners.map((partner, pitem) => (
                                        <li key={partner.id || pitem} className="slide-item">
                                            <figure className="image-box">
                                                <Link to="/">
                                                    <div style={{ 
                                                        width: '190px', 
                                                        height: '155px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto'
                                                    }}>
                                                        <img 
                                                            src={partner.pImg} 
                                                            alt=""
                                                            style={{ 
                                                                maxWidth: '190px',
                                                                maxHeight: '155px',
                                                                objectFit: 'contain'
                                                            }}
                                                        />
                                                    </div>
                                                </Link>
                                            </figure>
                                        </li>
                                    ))}
                                </Slider>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
         
    );
}

export default PartnerSection;