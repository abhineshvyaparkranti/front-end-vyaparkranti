import React from 'react'
import simg from '../../images/background/pattern-14.png'

const BuildStep = (props) => {
    return (
        <section className="steps-section" style={{ backgroundImage: `url(${simg})` }}>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">HOW WE DO IT</div>
                    <h2>Steps to Build a Successful   <br/> Digital Product</h2>
                </div>

                <div className="row clearfix">
                    <div className="step-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <div className="number">01</div>
                            </div>
                            <h6>Deep Dive into Business Insights</h6>
                        </div>
                    </div>
                    <div className="step-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <div className="number">02</div>
                            </div>
                            <h6>Comprehensive Evaluation</h6>
                        </div>
                    </div>
                    <div className="step-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <div className="number">03</div>
                            </div>
                            <h6>Strategic Blueprint Development</h6>
                        </div>
                    </div>
                    <div className="step-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-box">
                                <div className="number">04</div>
                            </div>
                            <h6>Flawless Execution</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuildStep;