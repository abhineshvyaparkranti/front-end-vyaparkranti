// import React from 'react'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';


// const FaqSection = (props) => {

//     const [expanded, setExpanded] = React.useState(false);

//     const handleChange = (panel) => (event, isExpanded) => {
//         setExpanded(isExpanded ? panel : false);
//     };


//     return (
//         <section className="faq-section">
//             <div className="auto-container">
//                 <div className="row clearfix">
//                     <div className="accordian-column col-lg-12 col-md-12 col-sm-12">
//                         <div className="inner-column">
//                             <div className="sec-title centered">
//                                 <div className="title">Some Faq’s</div>
//                                 <h2>Work with a Dedicated SEO Company </h2>
//                                 <div className="text">Our approach to SEO is uniquely built around what we know works…and what we know <br /> doesn’t work. With over 200 verified factors in play.</div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-lg-6 col-12">
//                                     <div className="accordion-box">
//                                         <div className="accordion block">
//                                             <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//                                                 <AccordionSummary
//                                                     expandIcon={""}
//                                                     aria-controls="panel1bh-content"
//                                                     id="panel1bh-header"
//                                                 >
//                                                     <Typography>Best Practices for Keyword Density? <div className="icon flaticon-right-arrow-1"></div></Typography>
//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <Typography>
//                                                         Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
//                                                     </Typography>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>
//                                         <div className="accordion block">
//                                             <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//                                                 <AccordionSummary
//                                                     expandIcon={""}
//                                                     aria-controls="panel2bh-content"
//                                                     id="panel2bh-header"
//                                                 >
//                                                     <Typography>Best SEO Practices for Page Layouts? <div className="icon flaticon-right-arrow-1"></div></Typography>
//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <Typography>
//                                                         Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
//                                                     </Typography>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>
//                                         <div className="accordion block">

//                                             <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//                                                 <AccordionSummary
//                                                     expandIcon={""}
//                                                     aria-controls="panel3bh-content"
//                                                     id="panel3bh-header"
//                                                 >
//                                                     <Typography> What is off page SEO link building? <div className="icon flaticon-right-arrow-1"></div></Typography>

//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <Typography>
//                                                         Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
//                                                     </Typography>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>
//                                         <div className="accordion block">

//                                             <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
//                                                 <AccordionSummary
//                                                     expandIcon={""}
//                                                     aria-controls="panel4bh-content"
//                                                     id="panel4bh-header"
//                                                 >
//                                                     <Typography>What is off page SEO link building? <div className="icon flaticon-right-arrow-1"></div></Typography>
//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <Typography>
//                                                         Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
//                                                     </Typography>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6 col-12">
//                                     <div className="accordion-box">
//                                         <div className="accordion block">
//                                             <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
//                                                 <AccordionSummary
//                                                     expandIcon={""}
//                                                     aria-controls="panel1bh-content"
//                                                     id="panel1bh-header"
//                                                 >
//                                                     <Typography>What is domain authority?<div className="icon flaticon-right-arrow-1"></div></Typography>
//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <Typography>
//                                                         Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
//                                                     </Typography>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>
//                                         <div className="accordion block">
//                                             <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
//                                                 <AccordionSummary
//                                                     expandIcon={""}
//                                                     aria-controls="panel2bh-content"
//                                                     id="panel2bh-header"
//                                                 >
//                                                     <Typography>Which SEO techniques are popular? <div className="icon flaticon-right-arrow-1"></div></Typography>
//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <Typography>
//                                                         Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
//                                                     </Typography>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>
//                                         <div className="accordion block">

//                                             <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
//                                                 <AccordionSummary
//                                                     expandIcon={""}
//                                                     aria-controls="panel3bh-content"
//                                                     id="panel3bh-header"
//                                                 >
//                                                     <Typography>What is broken link building? <div className="icon flaticon-right-arrow-1"></div></Typography>

//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <Typography>
//                                                         Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
//                                                     </Typography>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>
//                                         <div className="accordion block">

//                                             <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
//                                                 <AccordionSummary
//                                                     expandIcon={""}
//                                                     aria-controls="panel4bh-content"
//                                                     id="panel4bh-header"
//                                                 >
//                                                     <Typography>Are SEO meta tags important? <div className="icon flaticon-right-arrow-1"></div></Typography>
//                                                 </AccordionSummary>
//                                                 <AccordionDetails>
//                                                     <Typography>
//                                                         Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
//                                                     </Typography>
//                                                 </AccordionDetails>
//                                             </Accordion>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default FaqSection;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqSection = () => {
    const [expanded, setExpanded] = useState(false);
    const [faqData, setFaqData] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
    const fetchFAQData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/get-faq-data`);
            if (response.data.status && response.data.success) {
                setFaqData(response.data.chooseNowCard);
            }
        } catch (err) {
            console.error('Error fetching FAQ:', err);
        } finally {
            setLoading(false);
        }
    };

    fetchFAQData();
}, []);

    return (
        <section className="faq-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="accordian-column col-lg-12 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title centered">
                                <div className="title">Some Faq’s</div>
                                <h2>Work with a Dedicated SEO Company</h2>
                                <div className="text">
                                    Our approach to SEO is uniquely built around what we know works…
                                    and what we know doesn’t work. With over 200 verified factors in play.
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="accordion-box">
                                        {loading ? (
                                            Array.from({ length: 6 }).map((_, i) => (
                                                <div key={i} className="accordion block mb-3">
                                                    <Skeleton variant="rectangular" height={60} animation="wave" />
                                                </div>
                                            ))
                                        ) : (
                                            faqData.map((item, index) => (
                                                <div className="accordion block" key={item.id}>
                                                    <Accordion
                                                        expanded={expanded === `panel${index}`}
                                                        onChange={handleChange(`panel${index}`)}
                                                    >
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls={`panel${index}-content`}
                                                            id={`panel${index}-header`}
                                                        >
                                                            <Typography className="d-flex align-items-center justify-content-between w-100">
                                                                {item.questions}
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>{item.answers}</Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
