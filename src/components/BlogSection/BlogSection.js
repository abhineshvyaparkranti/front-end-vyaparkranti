// import React from 'react'
// import blogs from '../../api/blogs'
// import { Link } from 'react-router-dom'
// import rv1 from '../../images/resource/homemaincta.png'


// const BlogSection = (props) => {

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     return (
//         <section className="news-section">
//             <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
//             <div className="auto-container">
//                 <div className="sec-title">
//                     <div className="clearfix">
//                         <div className="pull-left">
//                             <div className="title">OUR BLOG</div>
//                             <h2>Our Latest Media</h2>
//                             <div className="text">Our campaigns get your business in front of the right people at the <br /> right time to increase organic traffic and boost engagement.</div>
//                         </div>
//                         <div className="pull-right">
//                             <Link to="/blog" className="theme-btn btn-style-eight"><span className="txt">All News</span></Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row clearfix">
//                     {blogs.slice(0, 3).map((blog, Bitem) => (
//                         <div className="news-block style-two col-lg-4 col-md-6 col-sm-12" key={Bitem}>
//                             <div className="inner-box">
//                                 <div className="image">
//                                     <img src={blog.screens} alt="" />
//                                     <div className="overlay-box">
//                                         <div className="overlay-inner">
//                                             <div className="content">
//                                                 <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="icon flaticon-unlink"></Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="lower-content">
//                                     <ul className="post-meta">
//                                         <li><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}><span className="icon fa fa-user"></span> {blog.author}</Link></li>
//                                         <li><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}><span className="icon fa fa-calendar"></span> {blog.create_at}</Link></li>
//                                     </ul>
//                                     <h5><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>{blog.title}</Link></h5>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default BlogSection;

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config/apiConfig';
import { Link } from 'react-router-dom';
import rv1 from '../../images/resource/homemaincta.png';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const sliderRef = useRef(null);
    const touchStartRef = useRef(0);
    const touchEndRef = useRef(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // Window resize handler
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                // const response = await axios.get('http://192.168.1.7:8000/api/get-blogs');
                 const response = await axios.get(`${API_BASE_URL}/api/get-blogs`);
                if (response.data && response.data.blogs) {
                    setBlogs(response.data.blogs);
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to load blog data");
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Auto slide functionality
    useEffect(() => {
        if (blogs.length > 0) {
            const interval = setInterval(() => {
                nextSlide();
            }, 5000); // Change slide every 5 seconds

            return () => clearInterval(interval);
        }
    }, [blogs, currentSlide]);

    const nextSlide = () => {
        if (blogs.length > 0) {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % blogs.length);
        }
    };

    const prevSlide = () => {
        if (blogs.length > 0) {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + blogs.length) % blogs.length);
        }
    };

    // Touch event handlers for mobile swipe
    const handleTouchStart = (e) => {
        touchStartRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartRef.current - touchEndRef.current > 75) {
            // Swipe left
            nextSlide();
        } else if (touchEndRef.current - touchStartRef.current > 75) {
            // Swipe right
            prevSlide();
        }
    };

    // Loading skeleton UI
    const renderSkeleton = () => (
        <>
            {[1, 2, 3].map((item) => (
                <div className="news-block style-two col-lg-4 col-md-6 col-sm-12" key={`skeleton-${item}`}>
                    <div className="inner-box">
                        <div className="image" style={{ background: '#f0f0f0', height: '250px' }}></div>
                        <div className="lower-content">
                            <ul className="post-meta">
                                <li><div style={{ background: '#f0f0f0', height: '20px', width: '100px' }}></div></li>
                                <li><div style={{ background: '#f0f0f0', height: '20px', width: '100px' }}></div></li>
                            </ul>
                            <h5><div style={{ background: '#f0f0f0', height: '24px', width: '80%' }}></div></h5>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

    // Error display
    const renderError = () => (
        <div className="col-12 text-center">
            <div style={{ padding: '30px' }}>
                <h4>Unable to load blog posts</h4>
                <p>{error}</p>
                <button 
                    className="theme-btn btn-style-eight mt-3"
                    onClick={() => {
                        setLoading(true);
                        setError(null);
                        // Refetch blogs
                        const fetchBlogs = async () => {
                            try {
                                const response = await axios.get('http://192.168.1.7:8000/api/get-blogs');
                                if (response.data && response.data.blogs) {
                                    setBlogs(response.data.blogs);
                                }
                                setLoading(false);
                            } catch (err) {
                                console.error("Error fetching blogs:", err);
                                setError("Failed to load blog data");
                                setLoading(false);
                            }
                        };
                        fetchBlogs();
                    }}
                >
                    <span className="txt">Try Again</span>
                </button>
            </div>
        </div>
    );

    // Render blog cards with slider
    const renderBlogCards = () => {
        if (!blogs.length) {
            return (
                <div className="col-12 text-center">
                    <h4>No blog posts available at the moment</h4>
                    <p>Please check back later for new content</p>
                </div>
            );
        }

        // Get visible blogs based on screen size
        const getVisibleBlogs = () => {
            const isMobile = windowWidth < 768;
            if (isMobile) {
                // For mobile: show only current slide
                return [blogs[currentSlide]];
            } else {
                // For desktop: show 3 slides
                const visibleBlogs = [];
                for (let i = 0; i < 3; i++) {
                    const index = (currentSlide + i) % blogs.length;
                    visibleBlogs.push(blogs[index]);
                }
                return visibleBlogs;
            }
        };

        const visibleBlogs = getVisibleBlogs();

        return (
            <div 
                className="blog-slider"
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ 
                    display: 'flex',
                    transition: 'transform 0.5s ease',
                    width: '100%'
                }}
            >
                {visibleBlogs.map((blog, index) => {
                    const isMobile = windowWidth < 768;
                    return (
                        <div 
                            className={`news-block style-two ${isMobile ? 'col-12' : 'col-lg-4 col-md-6 col-sm-12'}`}
                            key={`blog-${currentSlide + index}-${blog.id || index}`}
                            style={{ 
                                flex: '0 0 auto',
                                width: isMobile ? '100%' : '33.333%',
                                padding: '0 15px'
                            }}
                        >
                            <div className="inner-box" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div className="image" style={{ 
                                    height: '250px', 
                                    overflow: 'hidden', 
                                    position: 'relative' 
                                }}>
                                    <img 
                                        src={blog.image} 
                                        alt={blog.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/placeholder-image.jpg';
                                        }}
                                    />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="icon flaticon-unlink"></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-content" style={{ flex: '1' }}>
                                    <ul className="post-meta">
                                        <li>
                                            <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
                                                <span className="icon fa fa-user"></span> Admin
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
                                                <span className="icon fa fa-calendar"></span> {new Date(blog.blog_date).toLocaleDateString()}
                                            </Link>
                                        </li>
                                    </ul>
                                    <h5><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>{blog.title}</Link></h5>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <section className="news-section">
            <div className="pattern-layer" style={{ backgroundImage: `url(${rv1})` }}></div>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="clearfix">
                        <div className="pull-left">
                            <div className="title">OUR BLOG</div>
                            <h2>Our Latest Media</h2>
                            <div className="text">Our campaigns get your business in front of the right people at the <br /> right time to increase organic traffic and boost engagement.</div>
                        </div>
                        <div className="pull-right">
                            <Link to="/blog" className="theme-btn btn-style-eight"><span className="txt">All News</span></Link>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    {loading ? (
                        renderSkeleton()
                    ) : error ? (
                        renderError()
                    ) : (
                        <div className="col-12 slider-container" style={{ position: 'relative' }}>
                            {renderBlogCards()}
                            <div className="slider-indicators" style={{ textAlign: 'center', marginTop: '20px' }}>
                               {blogs.map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    style={{
                                    display: 'inline-block',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    margin: '0 5px',
                                    background: currentSlide === index ? '#C41E3A' : '#D3D3D3', // Changed to red for active and light gray for inactive
                                    cursor: 'pointer'
                                    }}
                                />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Add custom CSS for equal height cards */}
            <style jsx>{`
                .blog-slider .inner-box {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                
                .blog-slider .image {
                    height: 250px;
                    overflow: hidden;
                    position: relative;
                }
                
                .blog-slider .image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
                
                .blog-slider .lower-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                
                @media (max-width: 767px) {
                    .blog-slider {
                        overflow: hidden;
                    }
                }
            `}</style>
        </section>
    );
};

export default BlogSection;

 