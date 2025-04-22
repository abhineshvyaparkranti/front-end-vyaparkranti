// import React from "react";
// import { Link } from 'react-router-dom'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import hero1 from '../../images/main-slider/image-2.jpg'
// import hero2 from '../../images/main-slider/11image.jpg'
// import hero3 from '../../images/main-slider/heromain3.png'
// import hero4 from '../../images/main-slider/heromain1.png'
// import hero5 from '../../images/main-slider/heromain2.png'

// const Hero = () => {

//     var settings = {
//         dots: false,
//         arrows: true,
//         speed: 3000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: true,
//         autoplay: true,
//     };


//     return (
//         <section className="banner-section-four">
//             <div className="main-slider-carousel owl-carousell">
//                 <Slider {...settings}>
//                     <div className="slide">
//                         <div className="hero-inner" style={{ backgroundImage: `url(${hero1})` }}>
//                             <div className="dotted-layer" style={{ backgroundImage: `url(${hero2})` }}></div>
//                             <div className="auto-container">
//                                 <div className="row clearfix">
//                                     <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                         <div className="inner-column">
//                                             <div className="title">What’s Your SEO Score</div>
//                                             <h1>SEO Services Provide <br /> For Your Agency</h1>
//                                             <div className="btns-box">
//                                                 <Link to="/about" className="theme-btn btn-style-eight"><span className="txt">Lets Start</span></Link>
//                                                 <Link to="/contact" className="theme-btn btn-style-nine"><span className="txt">Contact Now</span></Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="image-column col-lg-6 col-md-12 col-sm-12">
//                                         <div className="inner-column">
//                                             <div className="image">
//                                                 <img src={hero3} alt="" />
//                                             </div>
//                                             <div className="images-icons">
//                                                 <div className="image-1">
//                                                     <img src={hero4} alt="" />
//                                                 </div>
//                                                 <div className="image-2">
//                                                     <img src={hero5} alt="" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="slide">
//                         <div className="hero-inner" style={{ backgroundImage: `url(${hero1})` }}>
//                             <div className="dotted-layer" style={{ backgroundImage: `url(${hero2})` }}></div>
//                             <div className="auto-container">
//                                 <div className="row clearfix">
//                                     <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                         <div className="inner-column">
//                                             <div className="title">What’s Your SEO Score</div>
//                                             <h1>SEO Services Provide <br /> For Your Agency</h1>
//                                             <div className="btns-box">
//                                                 <Link to="/about" className="theme-btn btn-style-eight"><span className="txt">Lets Start</span></Link>
//                                                 <Link to="/contact" className="theme-btn btn-style-nine"><span className="txt">Contact Now</span></Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="image-column col-lg-6 col-md-12 col-sm-12">
//                                         <div className="inner-column">
//                                             <div className="image">
//                                                 <img src={hero3} alt="" />
//                                             </div>
//                                             <div className="images-icons">
//                                                 <div className="image-1">
//                                                     <img src={hero4} alt="" />
//                                                 </div>
//                                                 <div className="image-2">
//                                                     <img src={hero5} alt="" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </Slider>
//             </div>
//             <div className="owl-item">
//                 <div>
//                     <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
//                         viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
//                         <defs>
//                             <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
//                         </defs>
//                         <g className="parallax">
//                             <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
//                             <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
//                             <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
//                             <use href="#gentle-wave" x="48" y="7" fill="#fff" />
//                         </g>
//                     </svg>
//                 </div>
//             </div>
//         </section>
//     )
// }



// export default Hero;




import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';

// Fallback images for background
import hero1 from '../../images/main-slider/image-2.jpg';
import hero2 from '../../images/main-slider/11image.jpg';
import hero3 from '../../images/main-slider/heromain3.png';
import hero4 from '../../images/main-slider/heromain1.png';
import hero5 from '../../images/main-slider/heromain2.png';
import BannerSkeleton from "./BannerSkeleton";

const Hero = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/get-banner`);
                if (response.data.success && response.data.Banners) {
                    setBanners(response.data.Banners);
                    console.log("hero page banner===========>", response.data.Banners  )
                } else {
                    setError("Failed to load banner data");
                }
            } catch (err) {
                console.error("Error fetching banners:", err);
                setError("Error loading banners. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    // Fallback data in case API doesn't return anything
    const fallbackHeroContents = [
        {
            mainTitle: "Information Technology Enablement Services.",
            subTitle: "Turning clicks into customers with coding",
            buttonText: "Let's Start"
        },
        {
            mainTitle: "Revenue Management System.",
            subTitle: "Stay booked. Stay profitable",
            buttonText: "Let's Start"
        },
        {
            mainTitle: "Brand & Marketing Solution.",
            subTitle: "Start with clarity. Grow with confidence",
            buttonText: "Let's Start"
        }
    ];

    // Slider settings
 const settings = {
        dots: true,            
        arrows: false,         
        speed: 800,           
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,   
        pauseOnHover: false,   
        cssEase: "ease-in-out",  
        infinite: true,       
        swipe: true,           
    };

    // Loading skeleton component
    // const BannerSkeleton = () => (
    //    <div 
    //   className="slide" 
    //   style={{
    //     backgroundImage: 'linear-gradient(#2a3cb0, #8dc9ff), url("/path/to/your/background-image.jpg")',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     minHeight: '600px',
    //     position: 'relative'
    //   }}
    // >
    //   <div className="hero-inner">
    //     <div className="auto-container">
    //       <div className="row clearfix">
    //         <div className="content-column col-lg-6 col-md-12 col-sm-12">
    //           <div className="inner-column">
    //             <h1 className="main-title">
    //               <Skeleton height={80} width="80%" />
    //             </h1>
    //             <div className="subtitle">
    //               <Skeleton height={40} width="80%" />
    //             </div>
    //             <div className="btns-box">
    //               <Skeleton height={60} width={200} style={{ marginRight: 10 }} />
    //               <Skeleton height={60} width={200} />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="image-column col-lg-6 col-md-12 col-sm-12">
    //           <div className="inner-column">
    //             <div className="image">
    //               <Skeleton height={400} width="100%" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // );

    return (
        <section className="banner-section-four">
            <div className="main-slider-carousel">
                
                {loading ? (
                    <BannerSkeleton />
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : (
                    <Slider {...settings}>
                        {banners.length > 0 ? (
                            banners.map((banner, index) => (
                                <div className="slide" key={banner.id}>
                                    <div className="hero-inner" style={{ backgroundImage: `url(${banner.image})` }}>
                                        <div className="dotted-layer" style={{ backgroundImage: `url(${hero2})` }}></div>
                                        <div className="auto-container">
                                            <div className="row clearfix">
                                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                                    <div className="inner-column">
                                                        <h1 className="main-title" style={{ fontSize: '34px' }}>{banner.title}</h1>
                                                        <div className="subtitle" style={{ fontSize: '24px', color: 'white', paddingTop: '5px' }}>
                                                            {banner.sub_title}
                                                        </div>
                                                        <div className="btns-box">
                                                            <Link to="/about" className="theme-btn btn-style-eight">
                                                                <span className="txt">Let's Start</span>
                                                            </Link>
                                                            <Link to="/contact" className="theme-btn btn-style-nine">
                                                                <span className="txt">Contact Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                                    <div className="inner-column">
                                                        <div className="image">
                                                            <img src={hero3} alt="" />
                                                        </div>
                                                        <div className="images-icons">
                                                            <div className="image-1">
                                                                <img src={hero4} alt="" />
                                                            </div>
                                                            <div className="image-2">
                                                                <img src={hero5} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            fallbackHeroContents.map((content, index) => (
                                <div className="slide" key={index}>
                                    <div className="hero-inner" style={{ backgroundImage: `url(${hero1})` }}>
                                        <div className="dotted-layer" style={{ backgroundImage: `url(${hero2})` }}></div>
                                        <div className="auto-container">
                                            <div className="row clearfix">
                                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                                    <div className="inner-column">
                                                        <h1 className="main-title">{content.mainTitle}</h1>
                                                        <div className="subtitle" style={{ fontSize: '24px', color: 'white', paddingTop: '5px' }}>
                                                            {content.subTitle}
                                                        </div>
                                                        <div className="btns-box">
                                                            <Link to="/about" className="theme-btn btn-style-eight">
                                                                <span className="txt">{content.buttonText}</span>
                                                            </Link>
                                                            <Link to="/contact" className="theme-btn btn-style-nine">
                                                                <span className="txt">Contact Now</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                                    <div className="inner-column">
                                                        <div className="image">
                                                            <img src={hero3} alt="" />
                                                        </div>
                                                        <div className="images-icons">
                                                            <div className="image-1">
                                                                <img src={hero4} alt="" />
                                                            </div>
                                                            <div className="image-2">
                                                                <img src={hero5} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </Slider>
                )}
            </div>
            <div className="owl-item">
                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;

 