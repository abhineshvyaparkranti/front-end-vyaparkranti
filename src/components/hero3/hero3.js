import React from "react";
import { Link } from 'react-router-dom'
import hero1 from '../../images/background/2.png'
import hero2 from '../../images/background/pattern-1.png'
import hero3 from '../../images/resource/banner-2.png'

const Hero3 = () => {
    return (
        <section className="banner-section-six">
        <div className="patern-layer-one" style={{ backgroundImage: `url(${hero1})` }}></div>
        <div className="patern-layer-two" style={{ backgroundImage: `url(${hero2})` }}></div>
        <div className="auto-container">
            <div className="row clearfix">
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <div className="title">Digital Marketing</div>
                        <h1>Your Business Find Better Solutions.</h1>
                        <div className="text">Getting online is easy. Succeeding online is a different <br/> story. You’ll need more than just a beautiful.</div>
                        <div className="btn-box">
                            <Link to="/about" className="theme-btn btn-style-three"><span className="txt">Read More</span></Link>
                            <Link to="/services" className="theme-btn btn-style-five"><span className="txt">Our Services</span></Link>
                        </div>
                    </div>
                </div>
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <div className="image wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <img src={hero3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero3;