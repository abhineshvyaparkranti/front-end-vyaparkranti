import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import hero1 from '../../images/resource/banner-1.png'
import hero2 from '../../images/icons/icon-11.png'
import hero3 from '../../images/icons/icon-12.png'
import hero4 from '../../images/icons/icon-13.png'
import hero5 from '../../images/icons/icon-15.png'
import hero6 from '../../images/icons/icon-14.png'

const Hero5 = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <section className="banner-section-two">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src={hero1} alt="" />
                                <div className="play-box">
                                    <span onClick={()=> setOpen(true)} className="lightbox-image play-icon wow bounceIn" data-wow-delay="0ms" data-wow-duration="1500ms"><span className="flaticon-play"></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="pattern-layer-one" style={{ backgroundImage: `url(${hero2})` }}></div>
                        <div className="pattern-layer-two" style={{ backgroundImage: `url(${hero3})` }}></div>
                        <div className="pattern-layer-three" style={{ backgroundImage: `url(${hero4})` }}></div>
                        <div className="pattern-layer-four" style={{ backgroundImage: `url(${hero5})` }}></div>
                        <div className="pattern-layer-five" style={{ backgroundImage: `url(${hero6})` }}></div>
                        <div className="inner-column">
                            <div className="title">Best for You</div>
                            <h1>We’re Digital AIl <br /> Startup Support</h1>
                            <div className="text">We bet you don’t spend much time on the 2nd page <br /> of Google - So why should your website,</div>
                            <div className="clearfix">
                                <Link to="/about" className="theme-btn btn-style-seven"><span className="txt">Lets Start</span></Link>
                                <div className="phone-box">
                                    <span className="phone-icon fa fa-phone"></span>
                                    <a className="phone" href="tel:+9999-000-999">9999 000 999</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="kxPCFljwJws" onClose={() => setOpen(false)} />
        </section>
    )
}

export default Hero5;