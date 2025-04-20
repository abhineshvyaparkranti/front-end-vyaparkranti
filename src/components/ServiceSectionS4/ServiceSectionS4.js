import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../api/Services';
import sIcon1 from '../../images/icons/icon-1.png'
import sIcon2 from '../../images/icons/icon-2.png'
import sIcon3 from '../../images/icons/icon-3.png'
import sIcon4 from '../../images/icons/icon-4.png'
import sIcon5 from '../../images/icons/icon-6.png'

const ServiceSectionS4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="services-section-two">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="clearfix">
                        {Services.slice(0, 6).map((service, i) => (
                            <div className="service-block-two col-lg-4 col-md-6 col-sm-12" key={i}>
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS4;