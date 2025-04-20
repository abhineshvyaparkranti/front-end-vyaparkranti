import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import hero1 from '../../images/resource/banner-2.png'
import hero2 from '../../images/icons/icon-16.png'
import hero3 from '../../images/icons/icon-17.png'
import hero4 from '../../images/icons/icon-12.png'

const Hero6 = () => {

    const [isOpen, setOpen] = useState(false)

    return (

        <section className="banner-section-three">
            <div className="icon-layer-one" style={{ backgroundImage: `url(${hero2})` }}></div>
            <div className="icon-layer-two" style={{ backgroundImage: `url(${hero3})` }}></div>
            <div className="icon-layer-three" style={{ backgroundImage: `url(${hero4})` }}></div>
            <ul className="social-box">
                <li><Link to="/home6" className="fa fa-facebook-f"></Link></li>
                <li><Link to="/home6" className="fa fa-linkedin"></Link></li>
                <li><Link to="/home6" className="fa fa-twitter"></Link></li>
                <li><Link to="/home6" className="fa fa-google"></Link></li>
            </ul>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <h1>Data Analytics <br /> Consulting Services</h1>
                            <div className="text">World leading reliable research & AI based Data Analytics solutions for Big Data companies and consumer business products</div>
                            <div className="clearfix">
                                <span onClick={() => setOpen(true)} className="lightbox-image video-box"><span className="fa fa-play"><i className="ripple"></i></span> WATCH VIDEO</span>
                                <Link to="/about" className="theme-btn btn-style-three"><span className="txt">about us</span></Link>
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
            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="kxPCFljwJws" onClose={() => setOpen(false)} />
        </section>

    )
}

export default Hero6;