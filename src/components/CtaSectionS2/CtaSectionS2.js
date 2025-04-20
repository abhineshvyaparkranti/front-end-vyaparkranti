import React from 'react'
import { Link } from 'react-router-dom'
import cImg1 from '../../images/background/map-pattern-1.png'
import cImg3 from '../../images/background/pattern-9.png'
import cImg4 from '../../images/resource/cta-1.png'

const CtaSectionS2 = (props) => {

    const ClickHandler = () => {
		window.scrollTo(10, 0);
	}
    
    return (
        <section className={`call-to-action-section-two ${props.s2Class}`} style={{ backgroundImage: `url(${cImg1})` }}>
            <div className="pattern-layer-one"></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${cImg3})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <img src={cImg4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="title-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <h2>Take Your Site to Next Level At this moment!</h2>
                            <div className="text">Make the Right Choice for Your Future. Choose Moto!</div>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn btn-style-eight"><span className="txt">Lets Start</span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CtaSectionS2;