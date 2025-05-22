// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import BlogSidebar from '../BlogSidebar';
// import htmlReactParser, { domToReact } from 'html-react-parser';
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const BlogList = (props) => {
//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     const [bannerTitle, setBannerTitle] = useState("Vyapar Kranti Seo Service Provider From Your Agency.");
//     const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
//     const [mobile, setMobile] = useState("+1234567790");
//     const [mail, setMail] = useState("test@gmail.com");
//     const [Map_link, setMap_link] = useState("https://www.google.com/maps?ll=28.61287,76.986676&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=1957349469795263381");
//     const [error, setError] = useState(null);

//     const removeTags = (htmlString) => {
//         if (typeof htmlString !== "string") {
//             console.error("Invalid input for removeTags:", htmlString);
//             return ""; // Return an empty string to prevent errors
//         }
        
//         // If the string doesn't contain any HTML tags, return it as is
//         if (!htmlString.includes('<') && !htmlString.includes('>')) {
//             return htmlString;
//         }
        
//         // Use a simplified approach to just extract text content
//         try {
//             return htmlReactParser(htmlString, {
//                 replace: (domNode) => {
//                     if (domNode.type === 'tag') {
//                         // Keep content of all tags, effectively removing the tags themselves
//                         return <>{domToReact(domNode.children)}</>;
//                     }
//                 },
//             });
//         } catch (error) {
//             console.error("Error parsing HTML:", error);
            
//             // Fallback: use regex to strip tags if parsing fails
//             return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
//         }
//     };

//     // Fetch blog data
//     const fetchBlogData = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`${API_BASE_URL}/api/get-blogs`);
            
//             if (response.data && response.data.blogs) {
//                 console.log('Blog data response==========>:', response.data.blogs);
                
                
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

//     // Fetch data when component mounts
//     useEffect(() => {
//         fetchBlogData();
//     }, []);

//     // Format date to display in a more readable format
//     const formatDate = (dateString) => {
//         if (!dateString) return '';
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//     };

//     // Skeleton loader for blog items
//     const BlogSkeleton = () => (
//         <div className="news-block col-lg-6 col-md-6 col-sm-12">
//             <div className="inner-box">
//                 <div className="image">
//                     <Skeleton height={200} />
//                 </div>
//                 <div className="lower-content">
//                     <ul className="post-meta">
//                         <li><Skeleton width={100} /></li>
//                         <li><Skeleton width={100} /></li>
//                     </ul>
//                     <h5><Skeleton width={200} /></h5>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="sidebar-page-container">
//             <div className="auto-container">
//                 <div className="row clearfix">
//                     <div className={`content-side col-lg-8 col-md-12 col-sm-12 ${props.blRight}`}>
//                         <div className="row clearfix">
//                             {loading ? (
//                                 // Show skeleton loaders while loading
//                                 Array(4).fill().map((_, index) => <BlogSkeleton key={index} />)
//                             ) : error ? (
//                                 // Show error message if there's an error
//                                 <div className="col-12 text-center">
//                                     <p className="error-message">{error}</p>
//                                 </div>
//                             ) : blogs.length === 0 ? (
//                                 // Show message if no blogs are available
//                                 <div className="col-12 text-center">
//                                     <p>No blog posts available at the moment.</p>
//                                 </div>
//                             ) : (
//                                 // Show actual blog posts
//                                 blogs.map((blog, index) => (
//                                     <div className="news-block col-lg-6 col-md-6 col-sm-12" key={index}>
//                                         <div className="inner-box">
//                                             <div className="image">
//                                             <img src={blog.image.startsWith('http') ? blog.image : `${API_BASE_URL}/${blog.image}`} alt={blog.title} />
//                                                 <div className="overlay-box">
//                                                     <div className="overlay-inner">
//                                                         <div className="content">
//                                                             <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="icon flaticon-unlink"></Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="lower-content">
//                                                 <ul className="post-meta">
//                                                     <li>
//                                                         <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
//                                                             <span className="icon fa fa-user"></span> Admin
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
//                                                             <span className="icon fa fa-calendar"></span> {formatDate(blog.blog_date || blog.created_at)}
//                                                         </Link>
//                                                     </li>
//                                                 </ul>
//                                                 <h5>
//                                                     <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
//                                                         {blog.title}
//                                                     </Link>
//                                                 </h5>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))
//                             )}
//                         </div>
//                         {/* Pagination */}
//                         {!loading && !error && blogs.length > 0 && (
//                             <div className="styled-pagination text-center">
//                                 <ul className="clearfix">
//                                     <li className="prev"><Link onClick={ClickHandler} to="/blog"><span className="fa fa-angle-left"></span> </Link></li>
//                                     <li><Link onClick={ClickHandler} to="/blog">01</Link></li>
//                                     <li className="active"><Link onClick={ClickHandler} to="/blog">02</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/blog">03</Link></li>
//                                     <li className="next"><Link onClick={ClickHandler} to="/blog"><span className="fa fa-angle-right"></span> </Link></li>
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                     <BlogSidebar blLeft={props.blLeft} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import BlogSidebar from '../BlogSidebar';
// import htmlReactParser, { domToReact } from 'html-react-parser';
// import { API_BASE_URL } from '../../api/config/apiConfig'; 
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const BlogList = (props) => {
//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     const [bannerTitle, setBannerTitle] = useState("Vyapar Kranti Seo Service Provider From Your Agency.");
//     const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
//     const [mobile, setMobile] = useState("+1234567790");
//     const [mail, setMail] = useState("test@gmail.com");
//     const [Map_link, setMap_link] = useState("https://www.google.com/maps?ll=28.61287,76.986676&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=1957349469795263381");
//     const [error, setError] = useState(null);

//     const removeTags = (htmlString) => {
//         if (typeof htmlString !== "string") {
//             console.error("Invalid input for removeTags:", htmlString);
//             return ""; // Return an empty string to prevent errors
//         }
        
//         // If the string doesn't contain any HTML tags, return it as is
//         if (!htmlString.includes('<') && !htmlString.includes('>')) {
//             return htmlString;
//         }
        
//         // Use a simplified approach to just extract text content
//         try {
//             return htmlReactParser(htmlString, {
//                 replace: (domNode) => {
//                     if (domNode.type === 'tag') {
//                         // Keep content of all tags, effectively removing the tags themselves
//                         return <>{domToReact(domNode.children)}</>;
//                     }
//                 },
//             });
//         } catch (error) {
//             console.error("Error parsing HTML:", error);
            
//             // Fallback: use regex to strip tags if parsing fails
//             return htmlString.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
//         }
//     };

//     // Fetch blog data
//     const fetchBlogData = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`${API_BASE_URL}/api/get-blogs`);
            
//             if (response.data && response.data.blogs) {
//                 console.log('Blog data response==========>:', response.data.blogs);
                
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

//     // Fetch data when component mounts
//     useEffect(() => {
//         fetchBlogData();
//     }, []);

//     // Format date to display in a more readable format
//     const formatDate = (dateString) => {
//         if (!dateString) return '';
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//     };

//     // Skeleton loader for blog items
//     const BlogSkeleton = () => (
//         <div className="news-block col-lg-6 col-md-6 col-sm-12">
//             <div className="inner-box">
//                 <div className="image">
//                     <Skeleton height={200} />
//                 </div>
//                 <div className="lower-content">
//                     <ul className="post-meta">
//                         <li><Skeleton width={100} /></li>
//                         <li><Skeleton width={100} /></li>
//                     </ul>
//                     <h5><Skeleton width={200} /></h5>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="sidebar-page-container">
//             <div className="auto-container">
//                 <div className="row clearfix">
//                     <div className={`content-side col-lg-8 col-md-12 col-sm-12 ${props.blRight}`}>
//                         <div className="row clearfix">
//                             {loading ? (
//                                 // Show skeleton loaders while loading
//                                 Array(4).fill().map((_, index) => <BlogSkeleton key={index} />)
//                             ) : error ? (
//                                 // Show error message if there's an error
//                                 <div className="col-12 text-center">
//                                     <p className="error-message">{error}</p>
//                                 </div>
//                             ) : blogs.length === 0 ? (
//                                 // Show message if no blogs are available
//                                 <div className="col-12 text-center">
//                                     <p>No blog posts available at the moment.</p>
//                                 </div>
//                             ) : (
//                                 // Show actual blog posts
//                                 blogs.map((blog, index) => (
//                                     <div className="news-block col-lg-6 col-md-6 col-sm-12" key={index}>
//                                         <div className="inner-box">
//                                             <div className="image">
//                                                 <img 
//                                                     src={blog.image.startsWith('http') ? blog.image : `${API_BASE_URL}/${blog.image}`} 
//                                                     alt={blog.title} 
//                                                 />
//                                                 <div className="overlay-box">
//                                                     <div className="overlay-inner">
//                                                         <div className="content">
//                                                             <Link 
//                                                                 onClick={ClickHandler} 
//                                                                 to={`/blog-details/${blog.id}`} 
//                                                                 className="icon flaticon-unlink"
//                                                             ></Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="lower-content">
//                                                 <ul className="post-meta">
//                                                     <li>
//                                                         <Link onClick={ClickHandler} to={`/blog-details/${blog.id}`}>
//                                                             <span className="icon fa fa-user"></span> Admin
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link onClick={ClickHandler} to={`/blog-details/${blog.id}`}>
//                                                             <span className="icon fa fa-calendar"></span> {formatDate(blog.blog_date || blog.created_at)}
//                                                         </Link>
//                                                     </li>
//                                                 </ul>
//                                                 <h5>
//                                                     <Link onClick={ClickHandler} to={`/blog-details/${blog.id}`}>
//                                                         {blog.title}
//                                                     </Link>
//                                                 </h5>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))
//                             )}
//                         </div>
//                         {/* Pagination */}
//                         {!loading && !error && blogs.length > 0 && (
//                             <div className="styled-pagination text-center">
//                                 <ul className="clearfix">
//                                     <li className="prev"><Link onClick={ClickHandler} to="/blog"><span className="fa fa-angle-left"></span> </Link></li>
//                                     <li><Link onClick={ClickHandler} to="/blog">01</Link></li>
//                                     <li className="active"><Link onClick={ClickHandler} to="/blog">02</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/blog">03</Link></li>
//                                     <li className="next"><Link onClick={ClickHandler} to="/blog"><span className="fa fa-angle-right"></span> </Link></li>
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                     <BlogSidebar blLeft={props.blLeft} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogList;
 

 

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogList = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [bannerTitle, setBannerTitle] = useState("Vyapar Kranti Seo Service Provider From Your Agency.");
    const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
    const [mobile, setMobile] = useState("+1234567790");
    const [mail, setMail] = useState("test@gmail.com");
    const [Map_link, setMap_link] = useState("https://www.google.com/maps?ll=28.61287,76.986676&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=1957349469795263381");
    const [error, setError] = useState(null);
    
    // Image loading state
    const [loadedImages, setLoadedImages] = useState({});
    const observerRef = useRef(null);
    const imageRefs = useRef({});

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

    // Fetch blog data
    const fetchBlogData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_BASE_URL}/api/get-blogs`);
            
            if (response.data && response.data.blogs) {
                console.log('Blog data first page response==========>:', response.data.blogs);
                // console.log('Image URL:', getImageSrc(blog));

                
                setBlogs(response.data.blogs);
                
                const elements = response.data.elements;
                if (elements) {
                    if (elements.Address) setAddress(removeTags(elements.Address));
                    if (elements.mobile) setMobile(removeTags(elements.mobile));
                    if (elements.mail) setMail(removeTags(elements.mail));
                    if (elements.Map_link) setMap_link(removeTags(elements.Map_link));
                }
                
                if (elements && elements.banner_content) {
                    const cleanContent = elements.banner_content
                        .replace(/<p>/g, '')  
                        .replace(/<\/p>/g, '')  
                        .trim();  
                    
                    setBannerContent(cleanContent);
                }
            }
            
            setLoading(false);
        } catch (err) {
            console.error("Error fetching blog data:", err);
            setError("Failed to load blog content.");
            setLoading(false);
        }
    };

    // Setup Intersection Observer for lazy loading
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.dataset.id;
                        if (id) {
                            // Set src attribute to load the image
                            const img = entry.target;
                            img.src = img.dataset.src;
                            
                            // Stop observing this image
                            observerRef.current.unobserve(img);
                        }
                    }
                });
            },
            { rootMargin: '100px' } // Load images when within 100px of viewport
        );

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    // Observe image elements after rendering
    useEffect(() => {
        if (!loading && blogs.length > 0) {
            // Add all images to the observer
            Object.values(imageRefs.current).forEach(img => {
                if (img && observerRef.current) {
                    observerRef.current.observe(img);
                }
            });
        }
    }, [loading, blogs]);

    // Fetch data when component mounts
    useEffect(() => {
        fetchBlogData();
    }, []);

    // Handle image load event
    const handleImageLoad = (blogId) => {
        setLoadedImages(prev => ({
            ...prev,
            [blogId]: true
        }));
    };

    // Format date to display in a more readable format
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    // Function to get image source
    // const getImageSrc = (blog) => {
    //     return blog.image.startsWith('http') ? blog.image : `${API_BASE_URL}/${blog.image}`;
    // };
    const getImageSrc = (blog) => {
        if (!blog.image) return '';
      
        // If hosted images are in /public/uploads or similar
        if (blog.image.startsWith('http')) {
          return blog.image;
        } else {
          return `${API_BASE_URL.replace(/\/$/, '')}/${blog.image.replace(/^\/+/, '')}`;
        }
      };
      

    // Image placeholder while loading
    const imagePlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23cccccc'/%3E%3C/svg%3E";

    // Skeleton loader for blog items
    const BlogSkeleton = () => (
        <div className="news-block col-lg-6 col-md-6 col-sm-12">
            <div className="inner-box">
                <div className="image">
                    <Skeleton height={200} />
                </div>
                <div className="lower-content">
                    <ul className="post-meta">
                        <li><Skeleton width={100} /></li>
                        <li><Skeleton width={100} /></li>
                    </ul>
                    <h5><Skeleton width={200} /></h5>
                </div>
            </div>
        </div>
    );

    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className={`content-side col-lg-8 col-md-12 col-sm-12 ${props.blRight}`}>
                        <div className="row clearfix">
                            {loading ? (
                                // Show skeleton loaders while loading
                                Array(4).fill().map((_, index) => <BlogSkeleton key={index} />)
                            ) : error ? (
                                // Show error message if there's an error
                                <div className="col-12 text-center">
                                    <p className="error-message">{error}</p>
                                </div>
                            ) : blogs.length === 0 ? (
                                // Show message if no blogs are available
                                <div className="col-12 text-center">
                                    <p>No blog posts available at the moment.</p>
                                </div>
                            ) : (
                                // Show actual blog posts
                                blogs.map((blog, index) => {
                                    const blogId = blog.slug || index;
                                    const imageSrc = getImageSrc(blog);
                                    
                                    return (
                                        <div className="news-block col-lg-6 col-md-6 col-sm-12" key={blogId}>
                                            <div className="inner-box">
                                               <div
                                                className="image"
                                                style={{
                                                    position: 'relative',
                                                    height: '250px', // Match this with your card's image section height
                                                    overflow: 'hidden',
                                                    borderRadius: '8px'
                                                }}
                                                >
                                                {!loadedImages[blogId] && (
                                                    <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        zIndex: 1,
                                                    }}
                                                    >
                                                    <Skeleton height="100%" width="100%" />
                                                    </div>
                                                )}
                                                <img
                                                    src={imageSrc}
                                                    alt="Service Preview"
                                                    style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: loadedImages[blogId] ? 'block' : 'none',
                                                    }}
                                                    onLoad={() => setLoadedImages((prev) => ({ ...prev, [blogId]: true }))}
                                                />
                                                {/* </div> */}

                                                    <div className="overlay-box">
                                                        <div className="overlay-inner">
                                                            <div className="content">
                                                                <Link 
                                                                    onClick={ClickHandler} 
                                                                    to={`/blog-details/${blog.slug}`} 
                                                                    className="icon flaticon-unlink"
                                                                ></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    <ul className="post-meta">
                                                        <li>
                                                            <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
                                                                <span className="icon fa fa-user"></span> Admin
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
                                                                <span className="icon fa fa-calendar"></span> {formatDate(blog.blog_date || blog.created_at)}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <h5>
                                                        <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        {/* Pagination */}
                        {/* {!loading && !error && blogs.length > 0 && (
                            <div className="styled-pagination text-center">
                                <ul className="clearfix">
                                    <li className="prev"><Link onClick={ClickHandler} to="/blog"><span className="fa fa-angle-left"></span> </Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">01</Link></li>
                                    <li className="active"><Link onClick={ClickHandler} to="/blog">02</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">03</Link></li>
                                    <li className="next"><Link onClick={ClickHandler} to="/blog"><span className="fa fa-angle-right"></span> </Link></li>
                                </ul>
                            </div>
                        )} */}
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </div>
    );
};

export default BlogList;