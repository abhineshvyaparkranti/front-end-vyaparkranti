// import React, { useState } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Row} from 'reactstrap';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom'
// import rv1 from '../../images/background/pattern-1.png'
// import rv2 from '../../images/background/pattern-20.png'
// import rv3 from '../../images/background/price-pattern-1.png'
// import rv4 from '../../images/background/price-pattern-3.png'
// import rv5 from '../../images/background/price-pattern-2.png'



// const pricing = [
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Standard',
//         price: '69.99',
//         price2: '109.99',
//         btnClass: 'btn-style-eleven',
//         shape:rv3,
//     },
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Economy',
//         price: '79.99',
//         price2: '129.99',
//         active: 'active',
//         btnClass: 'btn-style-six',
//         shape:rv4,
//     },
//     {
//         li1: 'Social Media Marketing',
//         li2: '5.600 Keywords',
//         li3: 'One Way Link Building',
//         li4: '10 Free Optimization',
//         li5: '10 Press Releases',
//         title: 'Standard',
//         price: '69.99',
//         price2: '149.99',
//         btnClass: 'btn-style-eight',
//         shape:rv5,
//     },


// ]


// const Pricing = (props) => {
//     const [activeTab, setActiveTab] = useState('1');

//     const toggle = tab => {
//         if (activeTab !== tab) setActiveTab(tab);
//     }


//     return (

//         <section className={`pricing-section style-three ${props.sClass}`}>
//             <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
//             <div className="pattern-layer-two" style={{ backgroundImage: `url(${rv2})` }}></div>
//             <div className="auto-container">
//                 <div className="sec-title centered">
//                     <div className="title">Packages</div>
//                     <h2>Our Pricing Table</h2>
//                     <div className="text">We take a consultative approach to every client engagement and find actionable <br /> solutions that will help your organization achieve the best outcomes.</div>
//                 </div>

//                 <div className="pricing-tabs tabs-box">

//                     <TabContent activeTab={activeTab}>
//                         <TabPane tabId="1">
//                             <Row>
//                                 {pricing.map((pricing, ptem) => (
//                                     <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${pricing.active}`} key={ptem}>
//                                         <div className="inner-box">
//                                             <div className="title">{pricing.title}</div>
//                                             <div className="price">${pricing.price}</div>
//                                             <ul className="price-list">
//                                                 <li>{pricing.li1}</li>
//                                                 <li>{pricing.li2}</li>
//                                                 <li>{pricing.li3}</li>
//                                                 <li>{pricing.li4}</li>
//                                                 <li>{pricing.li5}</li>
//                                             </ul>
//                                             <Link to="/" className={`theme-btn  ${pricing.btnClass}`}><span className="txt">Buy Now</span></Link>
//                                             <div className="price-pattern-layer" style={{ backgroundImage: `url(${pricing.shape})` }}></div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Row>
//                         </TabPane>
//                         <TabPane tabId="2">
//                             <div className="row">
//                                 {pricing.map((pricing, ptem) => (
//                                     <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${pricing.active}`} key={ptem}>
//                                         <div className="inner-box">
//                                             <div className="title">{pricing.title}</div>
//                                             <div className="price">${pricing.price2}</div>
//                                             <ul className="price-list">
//                                                 <li>{pricing.li1}</li>
//                                                 <li>{pricing.li2}</li>
//                                                 <li>{pricing.li3}</li>
//                                                 <li>{pricing.li4}</li>
//                                                 <li>{pricing.li5}</li>
//                                             </ul>
//                                             <Link to="/" className={`theme-btn  ${pricing.btnClass}`}><span className="txt">Buy Now</span></Link>
//                                             <div className="price-pattern-layer" style={{ backgroundImage: `url(${pricing.shape})` }}></div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </TabPane>
//                     </TabContent>
//                     <div className="buttons-outer">
//                         <Nav tabs className="tab-buttons clearfix">
//                             <NavItem className='tab-btn'>
//                                 <NavLink
//                                     className={classnames({ active: activeTab === '1' })}
//                                     onClick={() => { toggle('1'); }}
//                                 >
//                                     Monthly
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem className='tab-btn'>
//                                 <NavLink
//                                     className={classnames({ active: activeTab === '2' })}
//                                     onClick={() => { toggle('2'); }}
//                                 >

//                                     Yearly
//                                 </NavLink>
//                             </NavItem>
//                         </Nav>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Pricing;


import React, { useState, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import slider component
import 'slick-carousel/slick/slick.css'; // Import slider styles
import 'slick-carousel/slick/slick-theme.css'; // Import slider theme

import rv1 from '../../images/background/pattern-1.png';
import rv2 from '../../images/background/pattern-20.png';
import rv3 from '../../images/background/price-pattern-1.png';
import rv4 from '../../images/background/price-pattern-3.png';
import rv5 from '../../images/background/price-pattern-2.png';

const pricing = [
    {
        li1: 'Social Media Marketing',
        li2: '5.600 Keywords',
        li3: 'One Way Link Building',
        li4: '10 Free Optimization',
        li5: '10 Press Releases',
        title: 'Standard',
        price: '69.99',
        price2: '109.99',
        btnClass: 'btn-style-eleven',
        shape: rv3,
    },
    {
        li1: 'Social Media Marketing',
        li2: '5.600 Keywords',
        li3: 'One Way Link Building',
        li4: '10 Free Optimization',
        li5: '10 Press Releases',
        title: 'Economy',
        price: '79.99',
        price2: '129.99',
        active: 'active',
        btnClass: 'btn-style-six',
        shape: rv4,
    },
    {
        li1: 'Social Media Marketing',
        li2: '5.600 Keywords',
        li3: 'One Way Link Building',
        li4: '10 Free Optimization',
        li5: '10 Press Releases',
        title: 'Standard',
        price: '69.99',
        price2: '149.99',
        btnClass: 'btn-style-eight',
        shape: rv5,
    },
];

const Pricing = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    // Detect mobile screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    // Slider settings for mobile
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
    };

    // Price card component for reuse
    const PriceCard = ({ item }) => (
        <div className={`price-block ${item.active || ''}`}>
            <div className="inner-box">
                <div className="title">{item.title}</div>
                <div className="price">${activeTab === '1' ? item.price : item.price2}</div>
                <ul className="price-list">
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                    <li>{item.li3}</li>
                    <li>{item.li4}</li>
                    <li>{item.li5}</li>
                </ul>
                <Link to="/" className={`theme-btn ${item.btnClass}`}><span className="txt">Buy Now</span></Link>
                <div className="price-pattern-layer" style={{ backgroundImage: `url(${item.shape})` }}></div>
            </div>
        </div>
    );

    return (
        <section className={`pricing-section style-three ${props.sClass || ''}`}>
            <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${rv2})` }}></div>
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Packages</div>
                    <h2>Our Pricing Table</h2>
                    <div className="text">We take a consultative approach to every client engagement and find actionable <br /> solutions that will help your organization achieve the best outcomes.</div>
                    <div className="pull-right">
                                                <Link to="/not-found" className="theme-btn btn-style-eight"><span className="txt">View All </span></Link>
                                            </div>
                </div>

                <div className="pricing-tabs tabs-box">
                    <div className="buttons-outer">
                        <Nav tabs className="tab-buttons clearfix">
                            <NavItem className='tab-btn'>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Monthly
                                </NavLink>
                            </NavItem>
                            <NavItem className='tab-btn'>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    Yearly
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            {isMobile ? (
                                // Mobile carousel view
                                <div className="pricing-mobile-slider">
                                    <Slider {...sliderSettings}>
                                        {pricing.map((item, index) => (
                                            <div key={index}>
                                                <PriceCard item={item} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            ) : (
                                // Desktop grid view
                                <Row>
                                    {pricing.map((item, index) => (
                                        <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${item.active || ''}`} key={index}>
                                            <PriceCard item={item} />
                                        </div>
                                    ))}
                                </Row>
                            )}
                        </TabPane>
                        <TabPane tabId="2">
                            {isMobile ? (
                                // Mobile carousel view
                                <div className="pricing-mobile-slider">
                                    <Slider {...sliderSettings}>
                                        {pricing.map((item, index) => (
                                            <div key={index}>
                                                <PriceCard item={item} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            ) : (
                                // Desktop grid view
                                <Row>
                                    {pricing.map((item, index) => (
                                        <div className={`price-block col-lg-4 col-md-6 col-sm-12 ${item.active || ''}`} key={index}>
                                            <PriceCard item={item} />
                                        </div>
                                    ))}
                                </Row>
                            )}
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </section>
    );
};

export default Pricing;