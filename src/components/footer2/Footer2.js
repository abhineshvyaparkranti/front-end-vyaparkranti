import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-3.png'
import shape1 from '../../images/background/map-pattern-2.png'
import btn1 from '../../images/icons/app-btn.png'
import btn2 from '../../images/icons/google-btn.png'

const Footer2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="footer-style-two" style={{ backgroundImage: `url(${shape1})` }}>
            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">

                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">

                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                        <div className="logo">
                                            <Link onClick={ClickHandler} to="/home2"><img src={Logo} alt="" /></Link>
                                        </div>
                                        <div className="text">Lorem ipsum dolor amet consectetur adip- ielit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis....</div>
                                    </div>
                                </div>

                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Quicky links</h4>
                                        <div className="row clearfix">
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <ul className="list-link-two">
                                                    <li><Link onClick={ClickHandler} to="/service">How It Works</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/service">Guarantee</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog">Report Bug</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                                </ul>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <ul className="list-link-two">
                                                    <li><Link onClick={ClickHandler} to="/about">About Singleton</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/testimonial">Testimonials</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget contact-info-widget">
                                        <h4>Contact us</h4>
                                        <div className="widget-content">
                                            <ul>
                                                <li>Mon – Sat 10:00pm - 8:00pm</li>
                                                <li><a href="tel:+0987-654-321">0987 654 321</a> <a href="tel:+0123-456-789">0123 456 789</a></li>
                                                <li><a href="mailto:Merix@gmail.com">Merix@gmail.com</a></li>
                                                <li>16122 Collins Street West, Melbourne, VIC Srsars</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget app-widget">
                                        <h4>Download the App</h4>
                                        <div className="app-btns clearfix">
                                            <Link onClick={ClickHandler} to="/home2"><img src={btn1} alt="" /></Link>&ensp;
                                            <Link onClick={ClickHandler} to="/home2"><img src={btn2} alt="" /></Link>
                                        </div>

                                        <ul className="social-box">
                                            <li className="follow">Follow Us Now</li>
                                            <li><Link onClick={ClickHandler} to="/home2" className="fa fa-facebook-f"></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home2" className="fa fa-linkedin"></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home2" className="fa fa-twitter"></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home2" className="fa fa-google"></Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright">Copyright &copy; 2023. All Rights Reserved By <Link to="/">noor_tech.</Link></div>
                        </div>
                        <div className="nav-column col-lg-6 col-md-12 col-sm-12">
                            <ul>
                                <li><Link onClick={ClickHandler} to="/privacy">Privacy</Link></li>
                                <li><Link onClick={ClickHandler} to="/faq">FAQs</Link></li>
                                <li><Link onClick={ClickHandler} to="/login">Account</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer2;