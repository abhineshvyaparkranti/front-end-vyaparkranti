import React from 'react'
import CountUp from 'react-countup';

const FunFact3 = (props) => {

    const funFact = [
        {
            title: '230',
            subTitle: 'ACTIVE CLIENTS',
            Symbol: '+',
            icon: 'flaticon-in-love'
        },
        {
            title: '95',
            subTitle: 'TEAM ADVISORS',
            Symbol: '+',
            icon: 'flaticon-mentor',
        },
        {
            title: '820',
            subTitle: 'PROJECTS DONE',
            Symbol: '+',
            icon: 'flaticon-target',
        },
        {
            title: '25',
            subTitle: 'GLORIOUS YEARS',
            Symbol: '+',
            icon: 'flaticon-united',
        },


    ]

    return (
        <section className="counter-section-two">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="fact-counter-two">
                        <div className="row clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="column counter-column col-lg-3 col-md-6 col-sm-12" key={fitem}>
                                    <div className="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                        <div className="content">
                                            <div className={`icon ${funfact.icon}`}></div>
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
        </section>
    )
}

export default FunFact3;