// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ts1 from '../../images/resource/author-1.png'
// import ts2 from '../../images/resource/author-2.png'

// import icon1 from '../../images/icons/icon-3.png'
// import icon2 from '../../images/icons/icon-7.png'
// import icon3 from '../../images/icons/icon-8.png'
// import icon4 from '../../images/icons/icon-9.png'
// import icon5 from '../../images/icons/icon-10.png'

// const Testimonial = (props) => {

//     var settings = {
//         dots: true,
//         arrows: false,
//         speed: 1000,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: true,
//         responsive: [
//             {
//                 breakpoint: 991,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     const testimonial = [
//         {
//             tsImg: ts1,
//             Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
//             Title: 'Margaret Sunsan',
//             Sub: "Developer",
//         },
//         {
//             tsImg: ts2,
//             Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
//             Title: 'Eizabeth Blackwell',
//             Sub: "Web Designer",
//         },
//         {
//             tsImg: ts1,
//             Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
//             Title: 'Margaret Sunsan',
//             Sub: "Developer",
//         }
        
//     ]
//     return (

//         <section className="testimonial-section">
//             <div className="icon-layer-one" style={{ backgroundImage: `url(${icon1})` }}></div>
//             <div className="icon-layer-two" style={{ backgroundImage: `url(${icon2})` }}></div>
//             <div className="icon-layer-three" style={{ backgroundImage: `url(${icon3})` }}></div>
//             <div className="icon-layer-four" style={{ backgroundImage: `url(${icon4})` }}></div>
//             <div className="icon-layer-five" style={{ backgroundImage: `url(${icon5})` }}></div>
//             <div className="auto-container">

//                 <div className="sec-title centered">
//                     <div className="title">Real Testimonials</div>
//                     <h2>What They Say About Our <br /> Company?</h2>
//                     <div className="text">We know how important customer experience is for a busines and therefore, <br/> we trive to make your company excel in this.</div>
//                 </div>

//                 <div className="testimonial-carousel">

//                     <Slider {...settings}>
//                         {testimonial.map((tesmnl, tsm) => (
//                             <div className="testimonial-block" key={tsm}>
//                                 <div className="inner-box">
//                                     <div className="pattern-layer"></div>
//                                     <div className="author-image-outer">
//                                         <div className="author-image">
//                                             <img src={tesmnl.tsImg} alt="" />
//                                         </div>
//                                         <div className="rating">
//                                             <span className="fa fa-star"></span>
//                                             <span className="fa fa-star"></span>
//                                             <span className="fa fa-star"></span>
//                                             <span className="fa fa-star"></span>
//                                             <span className="fa fa-star"></span>
//                                         </div>
//                                         <div className="text">{tesmnl.Des}</div>
//                                         <div className="lower-box">
//                                             <div className="quote-icon fa fa-quote-left"></div>
//                                             <h6>{tesmnl.Title}</h6>
//                                             <div className="designation">{tesmnl.Sub}</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Testimonial;



import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { API_BASE_URL } from '../../api/config/apiConfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

// Import your icon images
import icon1 from '../../images/icons/icon-3.png'
import icon2 from '../../images/icons/icon-7.png'
import icon3 from '../../images/icons/icon-8.png'
import icon4 from '../../images/icons/icon-9.png'
import icon5 from '../../images/icons/icon-10.png'

// Default images for testimonials - you'll use these if API doesn't provide images
import defaultAvatar1 from '../../images/resource/author-1.png'
import defaultAvatar2 from '../../images/resource/author-2.png'

const Testimonial = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/get-testimonial`);
                
                // Check if the response contains testimonial data
                if (response.data && response.data.status && response.data.success) {
                    // If the API returns an array of testimonials in "Testimonials" property
                    if (Array.isArray(response.data.Testimonials)) {
                        setTestimonialData(response.data.Testimonials);
                        console.log("review data ===========>", response.data.Testimonials);
                    } 
                    // If the API returns an array of testimonials in "testimonials" property
                    else if (Array.isArray(response.data.testimonials)) {
                        setTestimonialData(response.data.testimonials);
                        console.log("review data ===========>", response.data.testimonials);
                    }
                    // If no testimonials found, use default data
                    else {
                        setTestimonialData(defaultTestimonials);
                    }
                } else {
                    setTestimonialData(defaultTestimonials);
                }
            } catch (err) {
                console.error("Error fetching testimonials:", err);
                setError("Failed to load testimonials");
                setTestimonialData(defaultTestimonials);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    // Default testimonial data as fallback
    const defaultTestimonials = [
        {
            tsImg: defaultAvatar1,
            Des: "I had so much fun working with your specialists on my business project that we will come back soon!",
            Title: 'Margaret Sunsan',
            Sub: "Developer",
        },
        {
            tsImg: defaultAvatar2,
            Des: "I had so much fun working with your specialists on my business project that we will come back soon!",
            Title: 'Elizabeth Blackwell',
            Sub: "Web Designer",
        },
        {
            tsImg: defaultAvatar1,
            Des: "I had so much fun working with your specialists on my business project that we will come back soon!",
            Title: 'Margaret Sunsan',
            Sub: "Developer",
        }
    ];

    // Updated slider settings to ensure proper display on different screen sizes
    const settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,          // Show 2 slides at once on desktop
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,           // Enable infinite loop
        centerPadding: "0px",     // No padding to ensure proper alignment
        centerMode: false,        // Don't center the active slide
        responsive: [
            {
                breakpoint: 1200, // For large desktop screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,  // For medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,  // For mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Function to get image URL from testimonial data
    const getImageUrl = (testimonial) => {
        // If API provides full URL
        if (testimonial.image && testimonial.image.startsWith('http')) {
            return testimonial.image;
        } 
        // If API provides just the filename
        else if (testimonial.image) {
            return `${API_BASE_URL}/images/testimonials/${testimonial.image}`;
        }
        // If using default data
        else if (testimonial.tsImg) {
            return testimonial.tsImg;
        }
        // Fallback
        return defaultAvatar1;
    };

    // Function to limit text to 20 words with an ellipsis
    const limitWords = (text, wordLimit = 20) => {
        // First convert to plain text if it's HTML
        let plainText = text;
        if (typeof text === 'string' && text.includes('<')) {
            // Create a temporary DOM element
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = text;
            plainText = tempDiv.textContent || tempDiv.innerText || '';
        }
        
        const words = plainText.trim().split(/\s+/);
        if (words.length <= wordLimit) {
            return plainText;
        }
        
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    // Function to get testimonial description with word limit
    const getDescription = (testimonial) => {
        let description;
        
        if (testimonial.description) {
            // For HTML content from API
            if (typeof testimonial.description === 'string' && testimonial.description.includes('<')) {
                const limitedText = limitWords(testimonial.description);
                // Return as plain text to avoid broken HTML tags
                return limitedText;
            }
            description = testimonial.description;
        } else {
            description = testimonial.Des || "I had so much fun working with your specialists on my business project that we will come back soon!";
        }
        
        return limitWords(description);
    };

    // Function to get testimonial title/name
    const getTitle = (testimonial) => {
        return testimonial.name || testimonial.Title || "Client Name";
    };

    // Function to get testimonial subtitle/designation
    const getSubtitle = (testimonial) => {
        return testimonial.designation || testimonial.Sub || "Client";
    };

    // Function to render star ratings based on review count
    const renderRating = (rating) => {
        const stars = [];
        const maxRating = 5;
        const reviewCount = parseInt(rating) || 5;
        
        for (let i = 0; i < maxRating; i++) {
            if (i < reviewCount) {
                stars.push(<span key={i} className="fa fa-star"></span>);
            } else {
                stars.push(<span key={i} className="fa fa-star-o"></span>);
            }
        }
        
        return stars;
    };

    const displayTestimonials = testimonialData.length > 0 ? testimonialData : defaultTestimonials;

    // Add more default testimonials if needed to ensure there are at least 2
    if (displayTestimonials.length === 1) {
        displayTestimonials.push(defaultTestimonials[0]);
    }

    // Skeleton loader for testimonials
    const TestimonialSkeleton = () => (
        <div className="testimonial-block">
            <div className="inner-box">
                <div className="pattern-layer"></div>
                <div className="author-image-outer">
                    <div className="author-image">
                        <Skeleton circle width={80} height={80} />
                    </div>
                    <div className="rating">
                        <Skeleton width={100} />
                    </div>
                    <div className="text">
                        <Skeleton count={3} />
                    </div>
                    <div className="lower-box">
                        <div className="quote-icon">
                            <Skeleton width={20} height={20} />
                        </div>
                        <h6><Skeleton width={150} /></h6>
                        <div className="designation"><Skeleton width={100} /></div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Custom useEffect hook to equalize card heights after slider initialization
    useEffect(() => {
        if (!loading) {
            // Wait for slider to initialize
            setTimeout(() => {
                equalizeCardHeights();
            }, 500);
            
            // Also equalize on window resize
            window.addEventListener('resize', equalizeCardHeights);
            
            return () => {
                window.removeEventListener('resize', equalizeCardHeights);
            };
        }
    }, [loading, testimonialData]);

    // Function to equalize card heights
    const equalizeCardHeights = () => {
        const testimonialCards = document.querySelectorAll('.testimonial-block .inner-box');
        
        if (testimonialCards.length === 0) return;
        
        // Reset heights first
        testimonialCards.forEach(card => {
            card.style.height = 'auto';
        });
        
        // Find max height
        let maxHeight = 0;
        testimonialCards.forEach(card => {
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });
        
        // Set equal height to all cards
        testimonialCards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    };

    return (
        <section className="testimonial-section">
            <div className="icon-layer-one" style={{ backgroundImage: `url(${icon1})` }}></div>
            <div className="icon-layer-two" style={{ backgroundImage: `url(${icon2})` }}></div>
            <div className="icon-layer-three" style={{ backgroundImage: `url(${icon3})` }}></div>
            <div className="icon-layer-four" style={{ backgroundImage: `url(${icon4})` }}></div>
            <div className="icon-layer-five" style={{ backgroundImage: `url(${icon5})` }}></div>
            <div className="auto-container">

                <div className="sec-title centered">
                    <div className="title">Real Testimonials</div>
                    <h2>What They Say About Our <br /> Company?</h2>
                    <div className="text">We know how important customer experience is for a business and therefore, <br/> we strive to make your company excel in this.</div>
                </div>

                <div className="testimonial-carousel">
                    {loading ? (
                        <Slider {...settings}>
                            {[1, 2].map((item) => (
                                <TestimonialSkeleton key={item} />
                            ))}
                        </Slider>
                    ) : error ? (
                        <div className="error-message">{error}</div>
                    ) : (
                        <Slider {...settings} className="equal-height-slider">
                            {displayTestimonials.map((testimonial, index) => (
                                <div className="testimonial-block" key={index}>
                                    <div className="inner-box">
                                        <div className="pattern-layer"></div>
                                        <div className="author-image-outer">
                                            <div className="author-image">
                                                <img src={getImageUrl(testimonial)} alt={getTitle(testimonial)} />
                                            </div>
                                            <div className="rating">
                                                {renderRating(testimonial.review)}
                                            </div>
                                            <div className="text">{getDescription(testimonial)}</div>
                                            <div className="lower-box">
                                                <div className="quote-icon fa fa-quote-left"></div>
                                                <h6>{getTitle(testimonial)}</h6>
                                                <div className="designation">{getSubtitle(testimonial)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Testimonial;