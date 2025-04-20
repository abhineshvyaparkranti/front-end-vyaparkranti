import React from 'react'
import { Link } from 'react-router-dom'
import sIcon from '../../images/icons/service-pattern.png'
import sIcon2 from '../../images/icons/service-pattern-2.png'

const Features2 = (props) => {


    const featres = [
        {
            fIcon: 'flaticon-shuttle',
            title: 'Greate Results',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon: 'flaticon-globe',
            title: 'Business Worth',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon: 'flaticon-network',
            title: 'Keep Your Groth',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon: 'flaticon-bar-chart',
            title: 'Important ROI',
            des: 'We have seen great successes with everyone companies.',
        },

    ]


    return (
        <section className="services-section margin-top">
            <div className="auto-container">
            <div className="color-layer"></div>
                <div className="row clearfix">
                {featres.map((featres, fitem) => (
                        <div className="service-block col-lg-3 col-md-6 col-sm-12" key={fitem}>
                            <div className="inner-box">
                                <div className="color-layer"></div>
                                <div className="pattern-layer-one" style={{ backgroundImage: `url(${sIcon})` }}></div>
                                <div className="pattern-layer-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
                                <div className="icon-box">
                                    <span className={`fi ${featres.fIcon}`}></span>
                                </div>
                                <h5><Link to="/service">{featres.title}</Link></h5>
                                <div className="text">{featres.dec}</div>
                                <Link to="/service" className="arrow-icon flaticon-arrow-pointing-to-right"></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features2;