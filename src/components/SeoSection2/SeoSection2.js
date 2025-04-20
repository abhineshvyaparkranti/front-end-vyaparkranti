import React from 'react'
import Sub from '../../images/icons/icon-8.png'
import Sub2 from '../../images/icons/icon-9.png'
import Sub3 from '../../images/icons/icon-10.png'
import rImg from '../../images/resource/seo.png'

const SeoSection2 = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="seo-section">
            <div className="pattern-layer-one" style={{ backgroundImage: `url(${Sub})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${Sub2})` }}></div>
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${Sub3})` }}></div>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Web SEO</div>
                    <h2>Check Your Website For SEO</h2>
                </div>
                <div className="seo-image titlt" data-tilt data-tilt-max="5">
                    <img src={rImg} alt="" />
                </div>
                <div className="seo-form">
                    <form method="post" onSubmit={SubmitHandler}>
                        <div className="form-group clearfix">
                            <input type="text" name="website" value="" placeholder="Your Website URL" required />
                            <input type="email" name="email" value="" placeholder="Your Email" required />
                        </div>
                        <button type="submit" className="theme-btn btn-style-three"><span className="txt">Send Now</span></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SeoSection2;