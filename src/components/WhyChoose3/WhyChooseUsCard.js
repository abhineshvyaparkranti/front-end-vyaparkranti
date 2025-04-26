 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import htmlReactParser from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

function WhyChooseUsCard() {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const ClickHandler = () => window.scrollTo(10, 0);

    const removeTags = (htmlString) => {
        try {
            return htmlReactParser(htmlString);
        } catch {
            return htmlString?.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim() || '';
        }
    };

    const fetchCardsData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/get-card-data`);
            // const response = await axios.get(`http://192.168.1.12:8000/api/get-card-data`);
            console.log("why choose know 4 card==============", response.data.chooseNowCard);
            if (response.data?.chooseNowCard) {
                setCardsData(response.data.chooseNowCard);
            } else {
                throw new Error("Invalid data structure");
            }
        } catch (err) {
            console.error("API error:", err);
            setError("Failed to load cards. Showing default cards.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCardsData();
    }, []);

    const CardSkeleton = () => (
        <>
            {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="icon-box">
                            <Skeleton circle width={50} height={50} />
                        </div>
                        <h5><Skeleton width={150} /></h5>
                        <div className="text"><Skeleton count={2} /></div>
                    </div>
                </div>
            ))}
        </>
    );

    const renderCard = (card, index) => (
        <div key={card.id} className="service-block-three col-lg-6 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-delay={`${index % 2 === 0 ? 0 : 150}ms`} data-wow-duration="1500ms">
                <div className="icon-box">
                    <img
                        src={card.icon || '/default-icon.png'}
                        alt={card.title || 'Service Icon'}
                        className="icon"
                        style={{ maxWidth: '50px', maxHeight: '50px' }}
                    />
                </div>
                <h5>
                    <Link to="/service" onClick={ClickHandler}>
                        {removeTags(card.title)}
                    </Link>
                </h5>
                <div className="text">
                    {removeTags(card.description)}
                </div>
            </div>
        </div>
    );

    return (
        <div className="inner-column">
            <div className="row clearfix">
                {loading ? (
                    <CardSkeleton />
                ) : error ? (
                    <>
                        <div className="col-12 text-center text-danger mb-3">{error}</div>
                        <DefaultCards clickHandler={ClickHandler} />
                    </>
                ) : cardsData.length ? (
                    cardsData.map(renderCard)
                ) : (
                    <DefaultCards clickHandler={ClickHandler} />
                )}
            </div>
        </div>
    );
}

const DefaultCards = ({ clickHandler }) => {
    const defaultCards = [
        {
            icon: "flaticon-badge",
            title: "IT-Enabled Smart Solutions",
            text: "Bridging sellers and buyers using advanced ITES and strategic brand enablement.",
        },
        {
            icon: "flaticon-chat-3",
            title: "Strategy to Execution",
            text: "From insight to implementation, we align every step with your business goals.",
        },
        {
            icon: "flaticon-growth",
            title: "Trusted by Clients",
            text: "Proven results with glowing testimonials from respected business leaders and founders.",
        },
        {
            icon: "flaticon-management",
            title: "Tailored for Growth",
            text: "Customized strategies designed to drive sustainable, scalable growth for every business.",
        }
    ];

    return defaultCards.map((item, index) => (
        <div key={index} className="service-block-three col-lg-6 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-delay={`${index % 2 === 0 ? 0 : 150}ms`} data-wow-duration="1500ms">
                <div className="icon-box">
                    <span className={`icon ${item.icon}`}></span>
                </div>
                <h5><Link to="/service" onClick={clickHandler}>{item.title}</Link></h5>
                <div className="text">{item.text}</div>
            </div>
        </div>
    ));
};

export default WhyChooseUsCard;
