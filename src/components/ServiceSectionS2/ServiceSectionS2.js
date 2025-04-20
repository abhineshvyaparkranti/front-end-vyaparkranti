import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../api/Services';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sIcon1 from '../../images/icons/icon-1.png'
import sIcon2 from '../../images/icons/icon-2.png'
import sIcon3 from '../../images/icons/icon-3.png'
import sIcon4 from '../../images/icons/icon-4.png'
import sIcon5 from '../../images/icons/icon-6.png'
import sIcon6 from '../../images/icons/icon-7.png'


const ServiceSectionS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding:'0px',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section className="services-section-four">
            <div className="pattern-layer-one" style={{ backgroundImage: `url(${sIcon3})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${sIcon6})` }}></div>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Our Services</div>
                    <h2>You Take Growth For Business</h2>
                    <div className="text">Our strategy includes consistently evolving, to ensure we’re producing <br /> exceptional SEO for business.</div>
                </div>
                <div className="services-carousel">
                    <Slider {...settings}>
                        {Services.slice(0, 6).map((service, i) => (
                            <div className={`service-block-four ${props.svClass}`}>
                                <div className="inner-box">
                                    <div className="color-layer"></div>
                                    <div className="icon-one" style={{ backgroundImage: `url(${sIcon1})` }}></div>
                                    <div className="icon-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
                                    <div className="icon-three" style={{ backgroundImage: `url(${sIcon3})` }}></div>
                                    <div className="icon-four" style={{ backgroundImage: `url(${sIcon4})` }}></div>
                                    <div className="icon-box">
                                        <span className={`icon ${service.Icon}`}></span>
                                        <div className="icon-five" style={{ backgroundImage: `url(${sIcon5})` }}></div>
                                    </div>
                                    <h5><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h5>
                                    <div className="text">{service.des}</div>
                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="arrow-icon flaticon-arrow-pointing-to-right"></Link>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;