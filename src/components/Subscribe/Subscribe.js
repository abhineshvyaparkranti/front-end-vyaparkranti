// import React from 'react'
// import Sub from '../../images/resource/newsletter.png'


// const Subscribe = (props) => {

//     const SubmitHandler = (e) => {
//         e.preventDefault()
//     }
    
//     return (
//         <section className="newsletter-section">
//             <div className="auto-container">
//                 <div className="row clearfix">
//                     <div className="form-column col-lg-6 col-md-12 col-sm-12">
//                         <div className="inner-column">
//                             <div className="sec-title">
//                                 <div className="title">Newsletter</div>
//                                 <h2>Subscribe Our Newsletter</h2>
//                             </div>
//                             <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo </div>
//                             <div className="newsletter-form">
//                                 <form method="post" onSubmit={SubmitHandler}>
//                                     <div className="form-group">
//                                         <input type="email" name="email" value="" placeholder="Enter Your Email" required="" />
//                                         <button type="submit" className="theme-btn btn-style-three"><span className="txt">Subscribe Now</span></button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="image-column col-lg-6 col-md-12 col-sm-12">
//                         <div className="inner-column">
//                             <div className="image titlt" data-tilt data-tilt-max="3">
//                                 <img src={Sub} alt="" />
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Subscribe;



import React, { useEffect, useState,  } from 'react';
// import Sub from '../../images/resource/newsletter.png'
import Sub from '../../images/resource/newsletterservice.png'

import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig'; 

const Subscribe = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
            // Form validation
            if (!email || !email.includes('@')) {
                setStatus('Please enter a valid email address');
                return;
            }
            
            // API call to save subscription using axios
            const postData = { email };
            const response = await axios.post(`${API_BASE_URL}/api/save-subscribe`, postData);
            
            if (response.status === 200) {
                setStatus('Thank you for subscribing!');
                setEmail('');
                console.log('Subscription successful======>:', response.data);
            } else {
                setStatus('Subscription failed. Please try again.');
                console.error('Subscription failed:', response.data);
            }
        } catch (error) {
            setStatus('An error occurred. Please try again later.');
            console.error('Subscription error:', error);
        }
    };
    
    return (
        <section className="newsletter-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Newsletter</div>
                                <h2>Subscribe Our Newsletter</h2>
                            </div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo </div>
                            <div className="newsletter-form">
                                {/* <form method="post" onSubmit={SubmitHandler}>
                                    <div className="form-group">
                                        <input type="email" name="email" value="" placeholder="Enter Your Email" required="" />
                                        <button type="submit" className="theme-btn btn-style-three"><span className="txt">Subscribe Now</span></button>
                                    </div>
                                </form> */}
                                <form onSubmit={submitHandler}>
                                <div className="input-group">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="form-control"
                                        required
                                    />
                                    <button type="submit" className="theme-btn btn-style-three"><span className="txt">Subscribe Now</span></button>
                                </div>
                                {status && <div className="subscription-status mt-2">{status}</div>}
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <img src={Sub} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Subscribe;

  