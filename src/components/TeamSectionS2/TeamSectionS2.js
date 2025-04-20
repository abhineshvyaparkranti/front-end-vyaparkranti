// import React from 'react'
// import { Link } from 'react-router-dom'
// import Teams from '../../api/Teams'


// const TeamSectionS2 = (props) => {

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     return (
//         <section className="team-section">
//             <div className="outer-container">
//                 <div className="row clearfix">
//                     {Teams.slice(3, 8).map((team, aitem) => (
//                         <div className="team-block" key={aitem}>
//                             <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
//                                 <div className="image">
//                                     <img src={team.tImg} alt="" />
//                                     <ul className="social-box">
//                                         <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-facebook-f"></Link></li>
//                                         <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-linkedin"></Link></li>
//                                         <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-twitter"></Link></li>
//                                         <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-google"></Link></li>
//                                     </ul>
//                                 </div>
//                                 <div className="lower-content">
//                                     <div className="content">
//                                         <h4><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h4>
//                                         <div className="designation">{team.title}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default TeamSectionS2;

  

//  import React, { useState, useEffect, useRef } from 'react';
 
// import axios from 'axios';
// import htmlReactParser, { domToReact } from 'html-react-parser';
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { Link } from 'react-router-dom';
// import Teams from '../../api/Teams';

// const TeamSectionS2 = (props) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isMobile, setIsMobile] = useState(false);
//     const teams = Teams.slice(3);
//     const totalTeams = teams.length;
//     const cardsToShow = 5; // Show 5 cards at a time on desktop
//     const sliderRef = useRef(null);
    

//     // Handle window resize to determine if mobile
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };
        
//         // Set initial value
//         handleResize();
        
//         // Add event listener
//         window.addEventListener('resize', handleResize);
        
//         // Clean up
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     // Auto-scroll effect
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => {
//                 const nextIndex = (prevIndex + 1) % totalTeams;
//                 return nextIndex;
//             });
//         }, 3000); // Change slide every 3 seconds
        
//         return () => clearInterval(interval);
//     }, [totalTeams]);

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     };

//     return (
//         <section className="team-section overflow-hidden">
//             <div className="outer-container">
//                 <div className="row clearfix">
//                     {isMobile ? (
//                         // Mobile View - Single card with cycling
//                         <div className="w-full">
//                             <div className="mobile-card-container">
//                                 {/* Only render the current team member card */}
//                                 <div className="team-block w-full">
//                                     <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
//                                         <div className="image">
//                                             <img src={teams[currentIndex].tImg} alt="" />
//                                             <ul className="social-box">
//                                                 <li><Link onClick={ClickHandler} to={`/team-single/${teams[currentIndex].slug}`} className="fa fa-facebook-f"></Link></li>
//                                                 <li><Link onClick={ClickHandler} to={`/team-single/${teams[currentIndex].slug}`} className="fa fa-linkedin"></Link></li>
//                                                 <li><Link onClick={ClickHandler} to={`/team-single/${teams[currentIndex].slug}`} className="fa fa-twitter"></Link></li>
//                                                 <li><Link onClick={ClickHandler} to={`/team-single/${teams[currentIndex].slug}`} className="fa fa-google"></Link></li>
//                                             </ul>
//                                         </div>
//                                         <div className="lower-content">
//                                             <div className="content">
//                                                 <h4><Link onClick={ClickHandler} to={`/team-single/${teams[currentIndex].slug}`}>{teams[currentIndex].name}</Link></h4>
//                                                 <div className="designation">{teams[currentIndex].title}</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Indicator dots for mobile */}
//                             <div className="flex justify-center mt-4">
//                                 {teams.map((_, index) => (
//                                     <div 
//                                         key={`dot-${index}`}
//                                         className="h-2 w-2 mx-1 rounded-full cursor-pointer"
//                                         style={{
//                                             backgroundColor: index === currentIndex ? '#000' : '#ccc'
//                                         }}
//                                         onClick={() => setCurrentIndex(index)}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     ) : (
//                         // Desktop View - Show 5 cards sliding (unchanged)
//                         <div 
//                             ref={sliderRef}
//                             className="desktop-slider flex flex-wrap transition-all duration-500 ease-in-out"
//                         >
//                             {/* Get 5 cards to show on desktop, starting from currentIndex */}
//                             {Array.from({ length: cardsToShow }).map((_, i) => {
//                                 const index = (currentIndex + i) % totalTeams;
//                                 const team = teams[index];
                                
//                                 return (
//                                     <div 
//                                         className="team-block w-1/5" 
//                                         key={`desktop-${index}`}
//                                     >
//                                         <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
//                                             <div className="image">
//                                                 <img src={team.tImg} alt="" />
//                                                 <ul className="social-box">
//                                                     <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-facebook-f"></Link></li>
//                                                     <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-linkedin"></Link></li>
//                                                     <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-twitter"></Link></li>
//                                                     <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`} className="fa fa-google"></Link></li>
//                                                 </ul>
//                                             </div>
//                                             <div className="lower-content">
//                                                 <div className="content">
//                                                     <h4><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h4>
//                                                     <div className="designation">{team.title}</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TeamSectionS2;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const TeamSectionS2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sliderRef = useRef(null);
    const cardsToShow = 5; // Show 5 cards at a time on desktop

    // Fetch team data from API
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                setLoading(true);
                // const response = await axios.get('http://192.168.1.7:8000/api/other-team');
                const response = await axios.get(`${API_BASE_URL}/api/other-team`);
                            console.log('Team member data  response========>:', response.data.teams);
                
                if (response.data && response.data.otherTeam) {
                    // Sort by position if needed
                    const sortedTeams = response.data.otherTeam.sort((a, b) => a.position - b.position);
                    setTeams(sortedTeams);
                } else {
                    setTeams([]);
                }
                
                setLoading(false);
            } catch (err) {
                console.error("Error fetching team data:", err);
                setError("Failed to load team data");
                setLoading(false);
            }
        };
        
        fetchTeamData();
    }, []);

    // Handle window resize to determine if mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Set initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-scroll effect
    useEffect(() => {
        if (teams.length <= cardsToShow) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const maxIndex = Math.max(0, teams.length - cardsToShow);
                return prevIndex >= maxIndex ? 0 : prevIndex + 1;
            });
        }, 3000); // Change slide every 3 seconds
        
        return () => clearInterval(interval);
    }, [teams, cardsToShow]);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Loading skeleton for team cards
    const TeamCardSkeleton = () => (
        <div className="team-block">
            <div className="inner-box">
                <div className="image aspect-ratio-container">
                    <div className="aspect-ratio-box" style={{ paddingBottom: '100%' }}>
                        <Skeleton height="100%" width="100%" style={{ position: 'absolute', top: 0, left: 0 }} />
                    </div>
                    <div className="social-box">
                        <Skeleton width={120} height={20} />
                    </div>
                </div>
                <div className="lower-content">
                    <div className="content">
                        <h4><Skeleton width={150} /></h4>
                        <div className="designation"><Skeleton width={100} /></div>
                    </div>
                </div>
            </div>
        </div>
    );

    // If loading, display skeleton
    if (loading) {
        return (
            <section className="team-section overflow-hidden">
                <div className="outer-container">
                    <div className="row clearfix">
                        {isMobile ? (
                            <div className="w-full">
                                <TeamCardSkeleton />
                            </div>
                        ) : (
                            <div className="desktop-slider flex flex-wrap">
                                {Array.from({ length: cardsToShow }).map((_, i) => (
                                    <div className="team-block w-1/5" key={`skeleton-${i}`}>
                                        <TeamCardSkeleton />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    // If error, display error message
    if (error) {
        return (
            <section className="team-section">
                <div className="outer-container">
                    <div className="error-message text-center p-4">
                        {error}
                    </div>
                </div>
            </section>
        );
    }

    // If no team data, display message
    if (teams.length === 0) {
        return (
            <section className="team-section">
                <div className="outer-container">
                    <div className="no-data-message text-center p-4">
                        No team members found.
                    </div>
                </div>
            </section>
        );
    }

    return (
        <> 
         <SectionTitle   MainTitle={'Our Team'} />
        <section className="team-section overflow-hidden">
             
            <div className="outer-container">
                <div className="row clearfix">
                    {isMobile ? (
                        // Mobile View - Single card with cycling
                        <div className="w-full">
                            <div className="mobile-card-container">
                                {/* Only render the current team member card */}
                                <div className="team-block w-full">
                                    <div className="inner-box" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="image">
                                            <div className="aspect-ratio-container" style={{ position: 'relative', overflow: 'hidden' }}>
                                                <div className="aspect-ratio-box" style={{ paddingBottom: '100%', position: 'relative' }}>
                                                    <img 
                                                        src={teams[currentIndex % teams.length].image} 
                                                        alt={teams[currentIndex % teams.length].name}
                                                        style={{ 
                                                            position: 'absolute', 
                                                            top: '0', 
                                                            left: '0', 
                                                            width: '100%', 
                                                            height: '100%', 
                                                            objectFit: 'cover' 
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <ul className="social-box">
                                                {teams[currentIndex % teams.length].facebook_link && (
                                                    <li><a href={teams[currentIndex % teams.length].facebook_link} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a></li>
                                                )}
                                                {teams[currentIndex % teams.length].linkedin_link && (
                                                    <li><a href={teams[currentIndex % teams.length].linkedin_link} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                                                )}
                                                {teams[currentIndex % teams.length].twitter_link && (
                                                    <li><a href={teams[currentIndex % teams.length].twitter_link} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                                                )}
                                                {teams[currentIndex % teams.length].youtube_link && (
                                                    <li><a href={teams[currentIndex % teams.length].youtube_link} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa fa-youtube"></i></a></li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <div className="content">
                                                <h4>{teams[currentIndex % teams.length].name}</h4>
                                                <div className="designation">{teams[currentIndex % teams.length].designation}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Indicator dots for mobile */}
                            <div className="flex justify-center mt-4">
                                {teams.map((_, index) => (
                                    <button 
                                        key={`dot-${index}`}
                                        className="h-2 w-2 mx-1 rounded-full cursor-pointer"
                                        style={{
                                            backgroundColor: index === (currentIndex % teams.length) ? '#000' : '#ccc'
                                        }}
                                        onClick={() => setCurrentIndex(index)}
                                        aria-label={`View team member ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Desktop View - Show cards sliding
                        <div 
                            ref={sliderRef}
                            className="desktop-slider flex flex-wrap transition-all duration-500 ease-in-out"
                        >
                            {/* Get cards to show on desktop, implementing proper sliding effect */}
                            {teams.length <= cardsToShow ? (
                                // If we have fewer team members than cards to show, display all without scrolling
                                teams.map((team, index) => (
                                    <div 
                                        className={`team-block ${teams.length >= 5 ? 'w-1/5' : teams.length === 4 ? 'w-1/4' : teams.length === 3 ? 'w-1/3' : teams.length === 2 ? 'w-1/2' : 'w-full'}`} 
                                        key={`desktop-${index}`}
                                    >
                                        <div className="inner-box" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="image">
                                                <div className="aspect-ratio-container" style={{ position: 'relative', overflow: 'hidden' }}>
                                                    <div className="aspect-ratio-box" style={{ paddingBottom: '100%', position: 'relative' }}>
                                                        <img 
                                                            src={team.image} 
                                                            alt={team.name}
                                                            style={{ 
                                                                position: 'absolute', 
                                                                top: '0', 
                                                                left: '0', 
                                                                width: '100%', 
                                                                height: '100%', 
                                                                objectFit: 'cover' 
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <ul className="social-box">
                                                    {team.facebook_link && (
                                                        <li><a href={team.facebook_link} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a></li>
                                                    )}
                                                    {team.linkedin_link && (
                                                        <li><a href={team.linkedin_link} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                                                    )}
                                                    {team.twitter_link && (
                                                        <li><a href={team.twitter_link} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                                                    )}
                                                    {team.youtube_link && (
                                                        <li><a href={team.youtube_link} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa fa-youtube"></i></a></li>
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="lower-content">
                                                <div className="content">
                                                    <h4>{team.name}</h4>
                                                    <div className="designation">{team.designation}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // If we have more team members than cards to show, implement sliding functionality
                                Array.from({ length: Math.min(cardsToShow, teams.length) }).map((_, i) => {
                                    const index = (currentIndex + i) % teams.length;
                                    const team = teams[index];
                                    
                                    return (
                                        <div 
                                            className="team-block w-1/5" 
                                            key={`desktop-${index}`}
                                        >
                                            <div className="inner-box" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                <div className="image">
                                                    <div className="aspect-ratio-container" style={{ position: 'relative', overflow: 'hidden' }}>
                                                        <div className="aspect-ratio-box" style={{ paddingBottom: '100%', position: 'relative' }}>
                                                            <img 
                                                                src={team.image} 
                                                                alt={team.name}
                                                                style={{ 
                                                                    position: 'absolute', 
                                                                    top: '0', 
                                                                    left: '0', 
                                                                    width: '100%', 
                                                                    height: '100%', 
                                                                    objectFit: 'cover' 
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <ul className="social-box">
                                                        {team.facebook_link && (
                                                            <li><a href={team.facebook_link} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a></li>
                                                        )}
                                                        {team.linkedin_link && (
                                                            <li><a href={team.linkedin_link} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                                                        )}
                                                        {team.twitter_link && (
                                                            <li><a href={team.twitter_link} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                                                        )}
                                                        {team.youtube_link && (
                                                            <li><a href={team.youtube_link} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa fa-youtube"></i></a></li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <div className="lower-content">
                                                    <div className="content">
                                                        <h4>{team.name}</h4>
                                                        <div className="designation">{team.designation}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
        </>
    );
};

export default TeamSectionS2;