// import React from 'react'
// import { Link } from 'react-router-dom'
// import Teams from '../../api/Teams'
// import SectionTitle from '../SectionTitle/SectionTitle'


// const TeamSection = (props) => {

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     return (
//         <section className="team-section-two">
//             <div className="auto-container">
//                 <SectionTitle subTitle={'Our Team'} MainTitle={'Our Expert Leadership'} />
//                 <div className="row clearfix">
//                     {Teams.slice(0, 3).map((team, aitem) => (
//                         <div className="team-block-two col-lg-4 col-md-6 col-sm-12" key={aitem}>
//                             <div className="inner-box">
//                                 <ul className="team-social-box">
//                                     <li className="youtube"><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-youtube"></Link><span className="social-name">youtube</span></li>
//                                     <li className="linkedin"><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-linkedin"></Link><span className="social-name">linkedin</span></li>
//                                     <li className="facebook"><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-facebook-f"></Link><span className="social-name">facebook</span></li>
//                                     <li className="twitter"><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-twitter"></Link><span className="social-name">twitter</span></li>
//                                 </ul>
//                                 <div className="image">
//                                     <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}><img src={team.tImg} alt="" /></Link>
//                                 </div>
//                                 <div className="lower-content">
//                                     <h3><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h3>
//                                     <div className="designation">{team.title}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default TeamSection;
 

 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [teams, setTeams] = useState([]);

    // State to track window size
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const removeTags = (htmlString) => {
        if (typeof htmlString !== "string") {
            console.error("Invalid input for removeTags:", htmlString);
            return "";  
        }
        
        if (!htmlString.includes('<') && !htmlString.includes('>')) {
            return htmlString;
        }
        
        try {
            return htmlReactParser(htmlString, {
                replace: (domNode) => {
                    if (domNode.type === 'tag') {
                        return <>{domToReact(domNode.children)}</>;
                    }
                },
            });
        } catch (error) {
            console.error("Error parsing HTML:", error);
            return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
        }
    };

    const fetchTeamData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/get-team`);
            console.log('Team data response:', response.data.teams);
            
            if (response.data && response.data.teams) {
                setTeams(response.data.teams);
            }
            
            setLoading(false);
        } catch (err) {
            console.error("Error fetching team data:", err);
            setError("Failed to load team data");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeamData();
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        
        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Slider settings for mobile
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        rtl: false,
    };

    // CSS styles for consistent card and image heights
    const cardStyle = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    };

    const imageContainerStyle = {
        height: '300px', // Fixed height for all image containers
        overflow: 'hidden',
        position: 'relative'
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // This will make all images cover the container properly
        objectPosition: 'center top' // Position images to show from top
    };

    const contentStyle = {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    // Team member card component for reuse
    const TeamMemberCard = ({ member }) => (
        <div className="inner-box" style={cardStyle}>
            <ul className="team-social-box">
                {member.youtube_link && (
                    <li className="youtube">
                        <a href={member.youtube_link} className="fa fa-youtube" target="_blank" rel="noopener noreferrer"></a>
                        <span className="social-name">youtube</span>
                    </li>
                )}
                {member.linkedin_link && (
                    <li className="linkedin">
                        <a href={member.linkedin_link} className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
                        <span className="social-name">linkedin</span>
                    </li>
                )}
                {member.facebook_link && (
                    <li className="facebook">
                        <a href={member.facebook_link} className="fa fa-facebook-f" target="_blank" rel="noopener noreferrer"></a>
                        <span className="social-name">facebook</span>
                    </li>
                )}
                {member.twitter_link && (
                    <li className="twitter">
                        <a href={member.twitter_link} className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
                        <span className="social-name">twitter</span>
                    </li>
                )}
            </ul>
            <div className="image" style={imageContainerStyle}>
                <img 
                    src={member.image} 
                    alt={member.name} 
                    style={imageStyle}
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = '/assets/images/team/team-placeholder.jpg'; // Fallback image path
                    }}
                />
            </div>
            <div className="lower-content" style={contentStyle}>
                <h3>{member.name}</h3>
                <div className="designation">{member.designation}</div>
            </div>
        </div>
    );

    const renderTeamMembers = () => {
        if (loading) {
            return Array(3).fill(0).map((_, index) => (
                <div className="team-block-two col-lg-4 col-md-6 col-sm-12" key={index}>
                    <div className="inner-box" style={cardStyle}>
                        <div className="image" style={imageContainerStyle}>
                            <Skeleton height={300} />
                        </div>
                        <div className="lower-content" style={contentStyle}>
                            <h3><Skeleton width={150} /></h3>
                            <div className="designation"><Skeleton width={100} /></div>
                        </div>
                    </div>
                </div>
            ));
        }

        if (error) {
            return <div className="col-12 text-center">{error}</div>;
        }

        if (!teams || teams.length === 0) {
            return <div className="col-12 text-center">No team members found</div>;
        }

        if (isMobile) {
            return (
                <div className="team-mobile-slider">
                    <Slider {...settings}>
                        {teams.map((member, index) => (
                            <div className="team-block-two" key={index}>
                                <TeamMemberCard member={member} />
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }

        return teams.map((member, index) => (
            <div className="team-block-two col-lg-4 col-md-6 col-sm-12" key={index} style={{marginBottom: '30px'}}>
                <TeamMemberCard member={member} />
            </div>
        ));
    };

    return (
        <section className="team-section-two">
            <div className="auto-container">
                <SectionTitle subTitle={'Our Team'} MainTitle={'Our Expert Leadership'} />
                
                <div className={isMobile ? "" : "row clearfix"}>
                    {renderTeamMembers()}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;