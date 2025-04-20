import React from 'react'
import CountUp from 'react-countup';
import fImg from '../../images/resource/counter.png'

const FunFact2 = (props) => {

    const funFact = [
        {
            title: '8',
            subTitle: 'Projects Done',
            Symbol: 'M+',
        },
        {
            title: '100',
            subTitle: 'Happy Clients',
            Symbol: 'K',
        },
        {
            title: '1240',
            subTitle: 'Ratings Customer',
            Symbol: '',
        },
        {
            title: '120',
            subTitle: 'Award Winner',
            Symbol: '+',
        },


    ]

    return (

        <section className="counter-section-three">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <img src={fImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Some Facts</div>
                                <h2>Our Trusted User to <br/> See you Funfacts</h2>
                            </div>
                            <div className="text">Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit.</div>

                            <div className="fact-counter-three">
                                <div className="row clearfix">
                                    {funFact.map((funfact, fitem) => (
                                        <div className="column counter-column col-lg-6 col-md-6 col-sm-12" key={fitem}>
                                            <div className="inner">
                                                <div className="content">
                                                    <div className="count-outer count-box">
                                                        <span className="count-text"><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.Symbol}
                                                    </div>
                                                    <h4 className="counter-title">{funfact.subTitle}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact2;