 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import abimg from '../../images/resource/about-main.png';
import abicon from '../../images/icons/about-circle.png';
import "./about.css";

const About = ({ showReadMore = true, showLearnMore = true }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [aboutData, setAboutData] = useState(null);

    const toggleReadMore = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

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

    const fetchAboutData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/get-about`);
            console.log('About data response:', response.data);
            
            if (response.data && response.data.aboutus) {
                setAboutData(response.data.aboutus);
            }
            
            setLoading(false);
        } catch (err) {
            console.error("Error fetching about data:", err);
            setError("Failed to load about content");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAboutData();
    }, []);

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

    return (
        <section className="about-section style-two">
            <div className="circle-layer" style={{ backgroundImage: `url(${abicon})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    {loading ? (
                        // Skeleton loading state
                        <>
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image titlt">
                                        <Skeleton height={400} width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <div className="title"><Skeleton width={100} /></div>
                                        <h2><Skeleton width={300} /></h2>
                                    </div>
                                    <div className="text">
                                        <Skeleton count={4} />
                                    </div>
                                    <div className="buttons-container" style={{ display: 'flex', gap: '15px' }}>
                                        <Skeleton width={120} height={45} />
                                        <Skeleton width={120} height={45} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : error ? (
                        // Error state
                        <div className="col-12 text-center">
                            <div className="error-message">{error}</div>
                        </div>
                    ) : aboutData ? (
                        // Data loaded successfully
                        <>
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image titlt" data-tilt data-tilt-max="1">
                                        <img
                                            src={aboutData.image || abimg}
                                            alt={aboutData.title}
                                            className="img-fluid"
                                            // style={{ 
                                            //     objectFit: 'contain',
                                            //     width: '100%',
                                            //     height: '400px',
                                            //     objectPosition: 'center'
                                            // }}
                                            style={{ 
                                                        objectFit: 'contain',
                                                        width: '100%',
                                                        height: '500px',       // This can stay as your default height
                                                        minHeight: '500px',    // Minimum height
                                                        maxHeight: '500px',    // Maximum height
                                                        objectPosition: 'center'
                                                        }}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = abimg; // Fallback image
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <div className="title">ABOUT US</div>
                                        <h2>{aboutData.title}</h2>
                                    </div>

                                    <div className="text">
                                        {isExpanded ? (
                                            // Show full description when expanded
                                            <div dangerouslySetInnerHTML={{ 
                                                __html: cleanDescription(aboutData.description) 
                                            }} />
                                        ) : (
                                            // Show truncated description when collapsed
                                            <div dangerouslySetInnerHTML={{ 
                                                __html: cleanDescription(aboutData.description)
                                                    .split('</p>').slice(0, 2).join('</p>') + '</p>'
                                            }} />
                                        )}
                                    </div>

                                    <div className="buttons-container" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                                        {showReadMore && (
                                            <button 
                                                onClick={toggleReadMore} 
                                                className="theme-btn btn-style-ten-about-page"
                                            >
                                                <span className="txt">
                                                    {isExpanded ? 'Read Less' : 'Read More'}
                                                </span>
                                            </button>
                                        )}
                                        {showLearnMore && (
                                            <Link 
                                                to="/about" 
                                                className="theme-btn btn-style-ten-about-page"
                                            >
                                                <span className="txt">Learn More</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        // No data returned
                        <div className="col-12 text-center">
                            <div className="no-data">No about data available</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;