import React from 'react';
import { Link } from 'react-router-dom';
import cImg from '../../images/background/pattern-23.png'
import cImg2 from '../../images/resource/business.png'
import banner_how_todo from '../../images/background/banner_how_todo.png';
import cImg3 from '../../images/resource/business-arrow.png'


const WhyChoose = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="business-section">
            <div className="pattern-layer" style={{ backgroundImage: `url(${cImg})` }}></div>
            <div className="auto-container">
                <div className="sec-title light">
                    <div className="title">WHY US CHOOSE NOW</div>
                    <h2>At Vyapar Kranti, we provide top-notch facilities to empower your business.</h2>
                    <div className="text">At Vyapar Kranti, we are more than just a service provider — we are your strategic growth partner in the digital age. Here's why now is the perfect time to partner with us:</div>
                </div>
                <Link  nClick={ClickHandler} to="/about" className="theme-btn btn-style-eight"><span className="txt">Lets Start</span></Link>
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image wow slideInUp">
                                    <img src={banner_how_todo} alt="" />
                                </div>
                                <div className="arrow-image wow fadeInRight">
                                    <img src={cImg3} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">01</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-safe"></span>
                                        </div>
                                        <div className="content">
                                            <h4>IT-Enabled Smart Solutions</h4>
                                            <div className="text">Bridging sellers and buyers using advanced ITES and strategic brand enablement.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">02</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-pie-chart"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Strategy to Execution</h4>
                                            <div className="text">From insight to implementation, we align every step with your business goals.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">03</div>
                                        <div className="icon-box">
                                            {/* <span className="icon flaticon-growth"></span> */}
                                            <span className="icon flaticon-management"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Trusted by Clients</h4>
                                            <div className="text">Proven results with glowing testimonials from respected business leaders and founders.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">04</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-growth"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Tailored for Growth</h4>
                                            <div className="text">Customized strategies designed to drive sustainable, scalable growth for every business</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="business-block">
                                    <div className="inner-box">
                                        <div className="box-number">05</div>
                                        <div className="icon-box">
                                            <span className="icon flaticon-united"></span>
                                        </div>
                                        <div className="content">
                                            <h4>Recognized & Reliable Partner</h4>
                                            <div className="text">Backed by Prathma Inopex, known for reliable service and lasting business impact</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default WhyChoose;