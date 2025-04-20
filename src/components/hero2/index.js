import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import hero1 from '../../images/resource/banner-3.png'


const Hero2 = () => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (

        <section className="banner-section-five">
            <ul className="social-box">
                <li><Link to="/home2" className="fa fa-facebook-f"></Link></li>
                <li><Link to="/home2" className="fa fa-linkedin"></Link></li>
                <li><Link to="/home2" className="fa fa-twitter"></Link></li>
                <li><Link to="/home2" className="fa fa-google"></Link></li>
            </ul>
            <div className="single-item-carousel">

                <Slider {...settings}>
                    <div className="slide">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Best for You</div>
                                        <h1>We’re Digital AIl <br /> Startup Support</h1>
                                        <div className="text">We bet you don’t spend much time on the 2nd page <br /> of Google - So why should your website,</div>
                                        <div className="clearfix">
                                            <Link to="/about" className="theme-btn btn-style-seven"><span className="txt">Lets Start</span></Link>
                                            <div className="phone-box">
                                                <span className="phone-icon fa fa-phone"></span>
                                                <a className="phone" href="tel:+9999-999-999">9999 999 999</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src={hero1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Best for You</div>
                                        <h1>We’re Digital AIl <br /> Startup Support</h1>
                                        <div className="text">We bet you don’t spend much time on the 2nd page <br /> of Google - So why should your website,</div>
                                        <div className="clearfix">
                                            <Link to="/about" className="theme-btn btn-style-seven"><span className="txt">Lets Start</span></Link>
                                            <div className="phone-box">
                                                <span className="phone-icon fa fa-phone"></span>
                                                <a className="phone" href="tel:+9999-999-999">9999 999 999</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src={hero1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="title">Best for You</div>
                                        <h1>We’re Digital AIl <br /> Startup Support</h1>
                                        <div className="text">We bet you don’t spend much time on the 2nd page <br /> of Google - So why should your website,</div>
                                        <div className="clearfix">
                                            <Link to="/about" className="theme-btn btn-style-seven"><span className="txt">Lets Start</span></Link>
                                            <div className="phone-box">
                                                <span className="phone-icon fa fa-phone"></span>
                                                <a className="phone" href="tel:+9999-999-999">9999 999 999</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image">
                                            <img src={hero1} alt="" />
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

export default Hero2;