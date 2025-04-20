// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CountUp from 'react-countup';

// import htmlReactParser, { domToReact } from 'html-react-parser';
// import { API_BASE_URL } from '../../api/config/apiConfig';
 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const FunFact = (props) => {

    

//     // api start


      
//         const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
//         const [loading, setLoading] = useState(true);
//         const [active_clients_number, setactive_clients_number] = useState("test");
//         const [error, setError] = useState(null);
         
        
    
//         const removeTags = (htmlString) => {
//             if (typeof htmlString !== "string") {
//                 console.error("Invalid input for removeTags:", htmlString);
//                 return "";
//             }
    
//             if (!htmlString.includes('<') && !htmlString.includes('>')) {
//                 return htmlString;
//             }
    
//             try {
//                 return htmlReactParser(htmlString, {
//                     replace: (domNode) => {
//                         if (domNode.type === 'tag') {
//                             return <>{domToReact(domNode.children)}</>;
//                         }
//                     },
//                 });
//             } catch (error) {
//                 console.error("Error parsing HTML:", error);
//                 return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
//             }
//         };
    
//         const fetchBannerData = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`${API_BASE_URL}/api/home-elements`);
//                 console.log('Client page data response============>:', response.data.elements);
    
//                 const elements = response.data.elements;
//                 console.log('Client page  data response============>:', response.data.elements);
    
//                 if (elements) {
                    
//                     if (elements.active_clients_number) setactive_clients_number(removeTags(elements.active_clients_number));
                    
//                 }
    
//                 if (response.data && response.data.elements.banner_content) {
//                     const cleanContent = response.data.elements.banner_content
//                         .replace(/<p>/g, '')
//                         .replace(/<\/p>/g, '')
//                         .trim();
    
//                     setBannerContent(cleanContent);
//                 }
    
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching banner data:", err);
//                 setError("Failed to load banner content. Using default content instead.");
//                 setLoading(false);
//             }
//         };
    
//         useEffect(() => {
//             fetchBannerData();
//         }, []);


//     // api end here

//     const funFact = [
//         {
//             title: active_clients_number || 0,
//             subTitle: 'ACTIVE CLIENTS',
//             Symbol: '+',
//         },
//         {
//             title: 95,
//             subTitle: 'TEAM ADVISORS',
//             Symbol: '+',
//         },
//         {
//             title: 820,
//             subTitle: 'PROJECTS DONE',
//             Symbol: '+',
//         },
//         {
//             title: 25,
//             subTitle: 'GLORIOUS YEARS',
//             Symbol: '+',
//         },
//     ];


//     return (

//         <section className={`counter-section ${props.styleClass}`}>
//             <div className="auto-container">
//                 <div className="inner-container">
//                     <div className="fact-counter">
//                         <div className="row clearfix">
//                             {funFact.map((funfact, fitem) => (
//                                 <div className="column counter-column col-lg-3 col-md-6 col-sm-12" key={fitem}>
//                                     <div className="inner">
//                                     <div className="content">
//                                             <div className="count-outer count-box">
//                                                 <span className="count-text">
//                                                     <CountUp end={funfact.title} enableScrollSpy />
//                                                 </span>
//                                                 {funfact.Symbol}
//                                             </div>
//                                             <h4 className="counter-title">{funfact.subTitle}</h4>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <span id="counter" className='d-none' />
//         </section>
//     )
// }

// export default FunFact;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { API_BASE_URL } from '../../api/config/apiConfig';
import htmlReactParser, { domToReact } from 'html-react-parser';
 
import 'react-loading-skeleton/dist/skeleton.css';

const FunFact = (props) => {
    const [active_clients_number, setactive_clients_number] = useState(100);
    const [glorious_years_no, setglorious_years_no] = useState(10);
    const [team_advisor_number, setteam_advisor_number] = useState(20);
    const [project_done_number, setproject_done_number] = useState(200);
    const [loading, setLoading] = useState(true);
    const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
    
    const [error, setError] = useState(null);


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
                
                // Fallback: use regex to strip tags if parsing fails
                return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
            }
        };
    
         // remove tags end

         const fetchBannerData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_BASE_URL}/api/home-elements`);
                const elements = response.data.elements;
        
                if (elements) {
                    const cleanNumber = (str) => {
                        const num = parseInt(
                            str?.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim()
                        );
                        return isNaN(num) ? 0 : num;
                    };
        
                    if (elements.active_clients_number) setactive_clients_number(cleanNumber(elements.active_clients_number));
                    if (elements.glorious_years_no) setglorious_years_no(cleanNumber(elements.glorious_years_no));
                    if (elements.team_advisor_number) setteam_advisor_number(cleanNumber(elements.team_advisor_number));
                    if (elements.project_done_number) setproject_done_number(cleanNumber(elements.project_done_number));
                }
        
                if (elements.banner_content) {
                    const cleanContent = elements.banner_content
                        .replace(/<p>/g, '')
                        .replace(/<\/p>/g, '')
                        .trim();
                    setBannerContent(cleanContent);
                }
        
                setLoading(false);
            } catch (err) {
                console.error("Error fetching banner data:", err);
                setError("Failed to load banner content. Using default content instead.");
                setLoading(false);
            }
        };
        
    useEffect(() => {
        fetchBannerData();
    }, []);

    const funFact = [
        {
            title: active_clients_number,
            subTitle: 'ACTIVE CLIENTS',
            Symbol: '+',
        },
        {
            title: team_advisor_number,
            subTitle: 'TEAM ADVISORS',
            Symbol: '+',
        },
        {
            title: project_done_number,
            subTitle: 'PROJECTS DONE',
            Symbol: '+',
        },
        {
            title: glorious_years_no,
            subTitle: 'GLORIOUS YEARS',
            Symbol: '+',
        },
    ];

    return (
        <section className={`counter-section ${props.styleClass}`}>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="fact-counter">
                        <div className="row clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="column counter-column col-lg-3 col-md-6 col-sm-12" key={fitem}>
                                    <div className="inner">
                                        <div className="content">
                                            <div className="count-outer count-box">
                                                <span className="count-text">
                                                    {/* {loading
                                                        ? <Skeleton width={50} />
                                                        : <CountUp end={funfact.title} enableScrollSpy />
                                                    } */}
                                                      {loading ? (
                                                    <Skeleton width={150} height={50} />
                                                    ) : (
                                                        <CountUp end={funfact.title} enableScrollSpy />
                                                    )}
                                                </span>
                                                {funfact.Symbol}
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
            <span id="counter" className='d-none' />
        </section>
    );
};

export default FunFact;
