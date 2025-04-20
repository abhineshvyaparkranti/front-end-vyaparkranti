import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import cImg1 from '../../images/background/1.jpg'
import Logo from '../../images/logo-2.png'
import TimeCountDown from './countdown';

const ComingSoon = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <section className="coming-soon" style={{ backgroundImage: `url(${cImg1})` }}>
                <div className="content">
                    <div className="content-inner">
                        <div className="auto-container">
                            <div className="logo"><Link to="/comming-soon"><img src={Logo} alt="" /></Link></div>
                            <div className="sec-title"><h2>Coming Soon</h2></div>
                            <div className="time-counter">
                                <div className="time-countdown">
                                    <TimeCountDown/>
                                </div>

                                <div className="clock-wrapper">
                                    <div className="clock-base">
                                        <div className="click-indicator">
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                            <div><span></span></div>
                                        </div>
                                        <div className="clock-hour"></div>
                                        <div className="clock-minute"></div>
                                        <div className="clock-second"></div>
                                        <div className="clock-center"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="emailed-form">
                                <h3>Our Website is under construction.</h3>
                                <div className="text">stay tuned for something amazing! <br />Subscribe to be notified</div>
                                <form method="post" onSubmit={SubmitHandler}>
                                    <div className="form-group">
                                        <input type="email" name="email" value="" placeholder="Your Email" required />
                                        <button type="submit"><span className="fa fa-paper-plane"></span></button>
                                    </div>
                                </form>
                            </div>
                            <ul className="social-icon-one">
                                <li><Link to="/comming-soon"><span className="fa fa-facebook-f"></span></Link></li>
                                <li><Link to="/comming-soon"><span className="fa fa-twitter"></span></Link></li>
                                <li><Link to="/comming-soon"><span className="fa fa-pinterest-p"></span></Link></li>
                                <li><Link to="/comming-soon"><span className="fa fa-linkedin"></span></Link></li>
                                <li><Link to="/comming-soon"><span className="fa fa-whatsapp"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};
export default ComingSoon;
