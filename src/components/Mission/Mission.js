import React from 'react'
import mImg1 from '../../images/resource/mission.png'
import mImg2 from '../../images/icons/mission-1.png'
import mImg3 from '../../images/icons/mission-2.png'
import mImg4 from '../../images/icons/mission-3.png'

const Mission = (props) => {

    return (
        <section className={`mission-section ${props.sClass}`}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <img src={mImg1} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">WHO WE ARE</div>
                                <h2>To Change Your View For <br /> SEO Our Mission</h2>
                            </div>
                            <div className="bold-text">Merix is a brand of digital agency. Competen novate synergstic vortas through forward strategic theme areas Compelling extend super was that Proactive myocardinate vertical strategic</div>
                            <ul className="mission-list">
                                <li><span className="icon"><img src={mImg2} alt="" /></span>If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.</li>
                                <li><span className="icon"><img src={mImg3} alt="" /></span>For businesses which sell products online & and improve their product listings in the search results..</li>
                                <li><span className="icon"><img src={mImg4} alt="" /></span>If you’re investing in a new website it’s important to ensure it’s built to succeed in the search results too.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Mission;