import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/resource/author-1.png'
import ts2 from '../../images/resource/author-2.png'

import icon1 from '../../images/background/pattern-10.png'

const Testimonial2 = (props) => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
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

    const testimonial = [
        {
            tsImg: ts1,
            Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
            Title: 'Margaret Sunsan',
            Sub: "Developer",
        },
        {
            tsImg: ts2,
            Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
            Title: 'Eizabeth Blackwell',
            Sub: "Web Designer",
        },
        {
            tsImg: ts1,
            Des: "I had so much fun working with your specialists on my business project that we will come back soom!",
            Title: 'Margaret Sunsan',
            Sub: "Developer",
        }

    ]

    return (

        <section className={`testimonial-section-two ${props.tsClass}`}>
            <div className="pattern-layer" style={{ backgroundImage: `url(${icon1})` }}></div>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Real Testimonials</div>
                    <h2>What They Say About Our <br /> Company?</h2>
                    <div className="text">We know how important customer experience is for a busines and therefore, <br/> we trive to make your company excel in this.</div>
                </div>

                <div className="two-item-carousel">

                    <Slider {...settings}>
                        {testimonial.map((tesmnl, tsm) => (
                            <div className={`testimonial-block-two ${props.tClass}`} key={tsm}>
                                <div className="inner-box">
                                    <div className="author-image-outer">
                                        <div className="author-image">
                                            <img src={tesmnl.tsImg} alt="" />
                                        </div>
                                        <h6>{tesmnl.Title}</h6>
                                        <div className="designation">{tesmnl.Sub}</div>
                                        <div className="quote-icon fa fa-quote-right"></div>
                                    </div>
                                    <div className="text">{tesmnl.Des}</div>
                                    <div className="rating">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>


                </div>
            </div>
        </section>
    )
}

export default Testimonial2;