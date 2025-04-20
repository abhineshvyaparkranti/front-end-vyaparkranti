import React from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../../images/main-slider/image-1.png'
import hero2 from '../../images/main-slider/pattern-1.png'
import hero3 from '../../images/main-slider/pattern-2.png'
import hero4 from '../../images/main-slider/dotted-layer.png'
import hero5 from '../../images/main-slider/content-image-1.png'

import icon1 from '../../images/main-slider/icon-1.png'
import icon2 from '../../images/main-slider/icon-2.png'
import icon3 from '../../images/main-slider/icon-3.png'
import icon4 from '../../images/main-slider/icon-4.png'
import icon5 from '../../images/main-slider/icon-5.png'
import icon6 from '../../images/main-slider/icon-6.png'

const Hero4 = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
    };


    return (
        <section className="banner-section">
            <div className="main-slider-carousel">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="hero-inner" style={{ backgroundImage: `url(${hero1})` }}>
                            <div className="patern-layer-one" style={{ backgroundImage: `url(${hero2})` }}></div>
                            <div className="patern-layer-two" style={{ backgroundImage: `url(${hero3})` }}></div>
                            <div className="dotted-layer" style={{ backgroundImage: `url(${hero4})` }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">

                                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="title">What’s Your SEO Score</div>
                                            <h1>SEO Services Provide <br /> For Your Agency</h1>
                                            <div className="btns-box">
                                                <Link to="/about" className="theme-btn btn-style-three"><span className="txt">Lets Start</span></Link>
                                                <Link to="/contact" className="theme-btn btn-style-four"><span className="txt">Contact Now</span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src={hero5} alt="" />
                                            </div>
                                            <div className="images-icons parallax-scene-1">
                                                <div className="image-1" data-depth="0.30">
                                                    <img src={icon1} alt="" />
                                                </div>
                                                <div className="image-2" data-depth="0.30">
                                                    <img src={icon2} alt="" />
                                                </div>
                                                <div className="image-3" data-depth="0.30">
                                                    <img src={icon3} alt="" />
                                                </div>
                                                <div className="image-4" data-depth="0.50">
                                                    <img src={icon4} alt="" />
                                                </div>
                                                <div className="image-5" data-depth="0.50">
                                                    <img src={icon5} alt="" />
                                                </div>
                                                <div className="image-6" data-depth="0.50">
                                                    <img src={icon6} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="hero-inner" style={{ backgroundImage: `url(${hero1})` }}>
                            <div className="patern-layer-one" style={{ backgroundImage: `url(${hero2})` }}></div>
                            <div className="patern-layer-two" style={{ backgroundImage: `url(${hero3})` }}></div>
                            <div className="dotted-layer" style={{ backgroundImage: `url(${hero4})` }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">

                                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="title">What’s Your SEO Score</div>
                                            <h1>SEO Services Provide <br /> For Your Agency</h1>
                                            <div className="btns-box">
                                                <Link to="/about" className="theme-btn btn-style-three"><span className="txt">Lets Start</span></Link>
                                                <Link to="/contact" className="theme-btn btn-style-four"><span className="txt">Contact Now</span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src={hero5} alt="" />
                                            </div>
                                            <div className="images-icons parallax-scene-1">
                                                <div className="image-1" data-depth="0.30">
                                                    <img src={icon1} alt="" />
                                                </div>
                                                <div className="image-2" data-depth="0.30">
                                                    <img src={icon2} alt="" />
                                                </div>
                                                <div className="image-3" data-depth="0.30">
                                                    <img src={icon3} alt="" />
                                                </div>
                                                <div className="image-4" data-depth="0.50">
                                                    <img src={icon4} alt="" />
                                                </div>
                                                <div className="image-5" data-depth="0.50">
                                                    <img src={icon5} alt="" />
                                                </div>
                                                <div className="image-6" data-depth="0.50">
                                                    <img src={icon6} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="hero-inner" style={{ backgroundImage: `url(${hero1})` }}>
                            <div className="patern-layer-one" style={{ backgroundImage: `url(${hero2})` }}></div>
                            <div className="patern-layer-two" style={{ backgroundImage: `url(${hero3})` }}></div>
                            <div className="dotted-layer" style={{ backgroundImage: `url(${hero4})` }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">

                                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="title">What’s Your SEO Score</div>
                                            <h1>SEO Services Provide <br /> For Your Agency</h1>
                                            <div className="btns-box">
                                                <Link to="/about" className="theme-btn btn-style-three"><span className="txt">Lets Start</span></Link>
                                                <Link to="/contact" className="theme-btn btn-style-four"><span className="txt">Contact Now</span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner-column">
                                            <div className="image">
                                                <img src={hero5} alt="" />
                                            </div>
                                            <div className="images-icons parallax-scene-1">
                                                <div className="image-1" data-depth="0.30">
                                                    <img src={icon1} alt="" />
                                                </div>
                                                <div className="image-2" data-depth="0.30">
                                                    <img src={icon2} alt="" />
                                                </div>
                                                <div className="image-3" data-depth="0.30">
                                                    <img src={icon3} alt="" />
                                                </div>
                                                <div className="image-4" data-depth="0.50">
                                                    <img src={icon4} alt="" />
                                                </div>
                                                <div className="image-5" data-depth="0.50">
                                                    <img src={icon5} alt="" />
                                                </div>
                                                <div className="image-6" data-depth="0.50">
                                                    <img src={icon6} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}



export default Hero4;