 import React, { useState } from 'react';
import Sub from '../../images/background/pattern-21.png';
import seo_banner_home from '../../images/background/seo_banner_home.png';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';

const SeoSection = (props) => {
    const [formData, setFormData] = useState({
        website_url: '',
        phone: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const submitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Form validation
            if (!formData.website_url) {
                setStatus('Please enter your website URL');
                setIsSubmitting(false);
                return;
            }
            
            // Make sure URL has http/https prefix if not present
            let website = formData.website_url;
            if (!/^https?:\/\//i.test(website)) {
                website = 'https://' + website;
            }
            
            // API call to save SEO data using axios with correctly formatted data
            const data = new FormData();
            data.append('website_url', website);
            data.append('phone', formData.phone);
            
            const response = await axios.post(`${API_BASE_URL}/api/save-seo`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            });
            
            // Alternative JSON format if the server expects JSON
            // const response = await axios.post(`${API_BASE_URL}/api/save-seo`, {
            //     website_url: website,
            //     phone: formData.phone
            // }, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     }
            // });
            
            if (response.status === 200 || response.status === 201) {
                setStatus('Thank you for submitting!');
                // Reset form
                setFormData({
                    website_url: '',
                    phone: ''
                });
                console.log('Seo successful post ======>:', response.data);
            } else {
                setStatus('Submission failed. Please try again.');
                console.error('Seo failed:', response.data);
            }
        } catch (error) {
            setStatus('An error occurred. Please try again later.');
            console.error('Seo error:', error);
            
            // More detailed error logging
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
                
                // Set more specific error message if available
                if (error.response.data && error.response.data.message) {
                    setStatus(error.response.data.message);
                }
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="seo-section-two">
            <div className="image-layer" style={{ backgroundImage: `url(${Sub})` }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Web SEO</div>
                                <h2>Check Your Website For SEO</h2>
                            </div>
                            <div className="seo-form-two">
                                <form method="post" onSubmit={submitHandler}>
                                    <div className="form-group clearfix">
                                        <input 
                                            type="text" 
                                            name="website_url" 
                                            value={formData.website_url}
                                            onChange={handleInputChange}
                                            placeholder="Your Website URL" 
                                            required 
                                        />
                                        <input 
                                            type="tel" 
                                            name="phone" 
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Your Phone No." 
                                            required 
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="theme-btn btn-style-eleven"
                                        disabled={isSubmitting}
                                    >
                                        <span className="txt">
                                            {isSubmitting ? 'Sending...' : 'Send Now'}
                                        </span>
                                    </button>
                                </form>
                                {status && (
                                    <div className="status-message mt-3" style={{color: status.includes('error') ? 'red' : 'green'}}>
                                        {status}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="seo-image titlt" data-tilt data-tilt-max="5">
                                <img src={seo_banner_home} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoSection;