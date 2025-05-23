 
// import { Link } from 'react-router-dom'
// import Services from '../../api/Services';
// import about from '../../images/resource/author-7.jpg'
// import shape from '../../images/background/author-bg.jpg'
// import blogs from '../../api/blogs'
// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
 
// import BlogSidebar from '../BlogSidebar';
// import htmlReactParser, { domToReact } from 'html-react-parser';
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';


// const BlogSidebar = (props) => {

//     const SubmitHandler = (e) => {
//         e.preventDefault()
//     }

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//       const fetchBlogData = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`${API_BASE_URL}/api/get-blogs`);
            
//             if (response.data && response.data.blogs) {
//                 console.log('Blog data first page response==========>:', response.data.blogs);
//                 // console.log('Image URL:', getImageSrc(blog));

                
//                 setBlogs(response.data.blogs);
                
//                 const elements = response.data.elements;
//                 if (elements) {
//                     if (elements.Address) setAddress(removeTags(elements.Address));
//                     if (elements.mobile) setMobile(removeTags(elements.mobile));
//                     if (elements.mail) setMail(removeTags(elements.mail));
//                     if (elements.Map_link) setMap_link(removeTags(elements.Map_link));
//                 }
                
//                 if (elements && elements.banner_content) {
//                     const cleanContent = elements.banner_content
//                         .replace(/<p>/g, '')  
//                         .replace(/<\/p>/g, '')  
//                         .trim();  
                    
//                     setBannerContent(cleanContent);
//                 }
//             }
            
//             setLoading(false);
//         } catch (err) {
//             console.error("Error fetching blog data:", err);
//             setError("Failed to load blog content.");
//             setLoading(false);
//         }
//     };

//     return (
//         <div className={`sidebar-side col-lg-4 col-md-12 col-sm-12 ${props.blLeft}`}>
//             <aside className="sidebar sticky-top">
//                 {/* <div className="sidebar-widget search-box">
//                     <form method="post" onSubmit={SubmitHandler}>
//                         <div className="form-group">
//                             <input type="search" name="search-field" value="" placeholder="Search Here" required />
//                             <button type="submit"><span className="icon fa fa-search"></span></button>
//                         </div>
//                     </form>
//                 </div> */}

//                 <div className="sidebar-widget categories-widget">
//                     <div className="sidebar-title">
//                         <h4>Categories</h4>
//                     </div>
//                     <div className="widget-content">
//                         <ul className="blog-cat">
//                             {Services.slice(0, 6).map((service, i) => (
//                                 <li key={i}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle} <span>( {service.id} )</span></Link></li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="sidebar-widget popular-posts">
//                     <div className="sidebar-title">
//                         <h4>Recent Post</h4>
//                     </div>
//                     <div className="widget-content">
//                         {blogs.slice(0, 3).map((blog, Bitem) => (
//                             <article className="post" key={Bitem}>
//                                 <figure className="post-thumb"><img src={blog.screens} alt="" /><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
//                                 <div className="text"><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>{blog.title}</Link></div>
//                                 <div className="post-info">{blog.create_at}</div>
//                             </article>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="sidebar-widget author-widget">
//                     <div className="widget-content" style={{ backgroundImage: `url(${shape})` }}>
//                         <div className="image">
//                             <img src={about} alt="" />
//                         </div>
//                         <div className="name">Pablo Villalpando</div>
//                         <div className="text">I got lucky because I never gave up the search. Are you quitting too soon? Or, are you willing to pursue luck with a vengeance?</div>
//                         <ul className="social-box">
//                             <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-facebook-f"></Link></li>
//                             <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-linkedin"></Link></li>
//                             <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-twitter"></Link></li>
//                             <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-google"></Link></li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* <div className="sidebar-widget instagram-widget">
//                     <div className="sidebar-title">
//                         <h4>Instagram</h4>
//                     </div>
//                     <div className="widget-content">
//                         <div className="clearfix">
//                             {Services.slice(0, 6).map((service, i) => (
//                                 <figure className="post-thumb" key={i}><img src={service.sImg} alt="" /><Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
//                             ))}
//                         </div>
//                     </div>
//                 </div> */}

//                 {/* <div className="sidebar-widget popular-tags">
//                     <div className="sidebar-title">
//                         <h4>Tags</h4>
//                     </div>
//                     <div className="widget-content">
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Business</Link>
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Marketing</Link>
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">SEO</Link>
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">SEO</Link>
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">SMM</Link>
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Solution</Link>
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Tips</Link>
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Startup</Link>
//                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Strategy</Link>
//                     </div>
//                 </div> */}

//             </aside>
//         </div>
//     )

// }

// export default BlogSidebar;

 

import { Link } from 'react-router-dom';
import about from '../../images/resource/author-7.jpg';
import shape from '../../images/background/author-bg.jpg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { API_BASE_URL } from '../../api/config/apiConfig';
import AuthorWidget from './AuthorWidget';
import ContactFormModalTwo from '../ContactFormModal/ConatctFormModalTwo';

const BlogSidebar = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [services, setServices] = useState([]);
    const [blogLoading, setBlogLoading] = useState(false);
    const [serviceLoading, setServiceLoading] = useState(false);
    const [blogError, setBlogError] = useState(null);
    const [serviceError, setServiceError] = useState(null);

    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [mail, setMail] = useState('');
    const [mapLink, setMapLink] = useState('');
    const [bannerContent, setBannerContent] = useState('');

    const removeTags = (str) => {
        if (!str) return '';
        return str.replace(/(<([^>]+)>)/gi, '');
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const fetchBlogData = async () => {
        try {
            setBlogLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/get-blogs`);
            if (response.data?.blogs) {
                setBlogs(response.data.blogs);
                const elements = response.data.elements;
                if (elements) {
                    if (elements.Address) setAddress(removeTags(elements.Address));
                    if (elements.mobile) setMobile(removeTags(elements.mobile));
                    if (elements.mail) setMail(removeTags(elements.mail));
                    if (elements.Map_link) setMapLink(removeTags(elements.Map_link));
                    if (elements.banner_content) {
                        setBannerContent(removeTags(elements.banner_content));
                    }
                }
            } else {
                setBlogError('No blog data available');
            }
        } catch (error) {
            console.error('Error fetching blog data:', error);
            setBlogError('Failed to load blog content.');
        } finally {
            setBlogLoading(false);
        }
    };

    const fetchServiceData = async () => {
        try {
            setServiceLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/get-service`);
            if (response.data) {
                setServices(response.data);
                const elements = response.data.elements;
                if (elements && (!address || !mobile || !mail || !mapLink)) {
                    if (elements.Address) setAddress(removeTags(elements.Address));
                    if (elements.mobile) setMobile(removeTags(elements.mobile));
                    if (elements.mail) setMail(removeTags(elements.mail));
                    if (elements.Map_link) setMapLink(removeTags(elements.Map_link));
                    if (elements.banner_content && !bannerContent) {
                        setBannerContent(removeTags(elements.banner_content));
                    }
                }
            } else {
                setServiceError('No service data available');
                console.log('Services set=============>:', response);
            }
        } catch (error) {
            console.error('Error fetching service data:', error);
            setServiceError('Failed to load service content.');
        } finally {
            setServiceLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogData();
        fetchServiceData();
    }, []);

    const renderServiceList = () => {
        if (serviceLoading) {
            return (
                <ul className="service-list">
                    {Array(6).fill().map((_, i) => (
                        <li key={i}><Skeleton height={30} /></li>
                    ))}
                </ul>
            );
        }
        if (serviceError) return <div className="error">{serviceError}</div>;
        if (!services.length) return <div className="no-data">No services available</div>;

        return (
            <ul className="service-list">
                {services.slice(0, 6).map((data, index) => (
                    <li key={index}>
                        <Link onClick={ClickHandler} to={`/services`}>
                            <span className="color-layer"></span>
                            {data.service_name}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };

    const renderRecentPosts = () => {
        if (blogLoading) {
            return Array(3).fill().map((_, index) => (
                <div className="post" key={index}>
                    <Skeleton height={80} width={80} className="post-thumb" />
                    <div className="text"><Skeleton height={20} width="100%" /></div>
                    <div className="post-info"><Skeleton height={15} width="50%" /></div>
                </div>
            ));
        }
        if (blogError) return <div className="error-message">{blogError}</div>;
        if (!blogs.length) return <div className="no-posts">No recent posts available</div>;

        return blogs.slice(0, 3).map((blog, i) => (
            <article className="post" key={i}>
                <figure className="post-thumb">
                    <img 
                        src={blog.image} 
                        alt={blog.title} 
                        onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder-image.jpg"; }}
                    />
                    <Link 
                        onClick={ClickHandler} 
                        to={`/blog-details/${blog.slug}`} 
                        className="overlay-box"
                    >
                        <span className="icon fa fa-link"></span>
                    </Link>
                </figure>
                <div className="text">
                    <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
                        {blog.title}
                    </Link>
                </div>
                <div className="post-info">{blog.create_at}</div>
            </article>
        ));
    };

    return (
        <> 
        <div className={`sidebar-side col-lg-4 col-md-12 col-sm-12 ${props.blLeft}`}>
            <aside className="sidebar sticky-top">
                {/* Categories */}
                {/* <div className="sidebar-widget categories-widget">
                    <div className="sidebar-title"><h4>Service Categories</h4></div>
                    {renderServiceList()}
                </div> */}

                {/* Recent Posts */}
                <div className="sidebar-widget popular-posts">
                    <div className="sidebar-title"><h4>Recent Post</h4></div>
                    <div className="widget-content">
                        {renderRecentPosts()}
                    </div>
                </div>

                {/* Author Info */}
                {/* <div className="sidebar-widget author-widget">
                    <div className="widget-content" style={{ backgroundImage: `url(${shape})` }}>
                        <div className="image"><img src={about} alt="Author" /></div>
                        <div className="name">Pablo Villalpando</div>
                        <div className="text">
                            I got lucky because I never gave up the search. Are you quitting too soon? Or, are you willing to pursue luck with a vengeance?
                        </div>
                        <ul className="social-box">
                            <li><Link onClick={ClickHandler} to="/blog-details/sample-1" className="fa fa-facebook-f"></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-details/sample-2" className="fa fa-linkedin"></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-details/sample-3" className="fa fa-twitter"></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-details/sample-4" className="fa fa-google"></Link></li>
                        </ul>
                    </div>
                </div> */}
                <AuthorWidget />
            </aside>
            <ContactFormModalTwo />
        </div>
         
        </>
    );
};

export default BlogSidebar;