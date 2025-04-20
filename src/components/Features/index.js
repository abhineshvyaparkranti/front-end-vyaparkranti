import React from 'react'
import { Link } from 'react-router-dom'
import sIcon from '../../images/icons/service-pattern.png'
import sIcon2 from '../../images/icons/service-pattern-2.png'

const Features = (props) => {


    const featres = [
        {
            fIcon: 'flaticon-shuttle',
            title: 'Strategic Transformation',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon: 'flaticon-globe',
            title: 'Tech-Brand Synergy',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon:  'flaticon-bar-chart',
            title: 'Consistent Growth',
            des: 'We have seen great successes with everyone companies.',
        },
        {
            fIcon: 'flaticon-network',
            title: 'Sector Versatility',
            des: 'We have seen great successes with everyone companies.',
        },

    ]


    return (
        <section className="services-section style-two">
            <div className="auto-container">
                <div className="row clearfix">
                    {featres.map((featres, fitem) => (
                        <div className="service-block style-two col-lg-3 col-md-6 col-sm-12" key={fitem}  >
                            <div className="inner-box" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div className="color-layer"></div>
                                <div className="pattern-layer-one" style={{ backgroundImage: `url(${sIcon})` }}></div>
                                <div className="pattern-layer-two" style={{ backgroundImage: `url(${sIcon2})` }}></div>
                                <div className="icon-box">
                                    <span className={`fi ${featres.fIcon}`}></span>
                                </div>
                                <h5><Link to="/services">{featres.title}</Link></h5>
                                <div className="text">{featres.dec}</div>
                                <Link to="/services" className="arrow-icon flaticon-arrow-pointing-to-right"></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;