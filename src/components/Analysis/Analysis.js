import React from 'react'
import { Link } from 'react-router-dom'
import aImg1 from '../../images/background/analysic-bg.png'
import aImg2 from '../../images/resource/analysic.png'

const Analysis = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="analysis-section">
            <div className="pattern-layer" style={{ backgroundImage: `url(${aImg1})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="title-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Market Analysis</div>
                                <h2>Data Analysis and <br /> Statistics for consulting</h2>
                            </div>
                            <div className="text">Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</div>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn btn-style-five"><span className="txt">Lets Start</span></Link>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <img src={aImg2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analysis;