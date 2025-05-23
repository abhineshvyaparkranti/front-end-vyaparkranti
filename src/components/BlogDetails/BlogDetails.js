// import React from 'react';
// import { Link } from 'react-router-dom'
// import blog1 from '../../images/resource/author-8.jpg'
// import blog2 from '../../images/resource/author-1.png'
// import blog3 from '../../images/resource/author-2.png'
// import gl1 from '../../images/resource/news-12.jpg'
// import gl2 from '../../images/resource/news-13.jpg'
// import blogs from '../../api/blogs';
// import { useParams } from 'react-router-dom'
// import BlogSidebar from '../BlogSidebar';

// const BlogSingle = (props) => {

//     const { slug } = useParams()

//     const BlogDetails = blogs.find(item => item.slug === slug)

//     const submitHandler = (e) => {
//         e.preventDefault()
//     }

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     return (
//         <div className="sidebar-page-container">
//             <div className="auto-container">
//                 <div className="row clearfix">
//                     <div className="content-side col-lg-8 col-md-12 col-sm-12">
//                         <div className="news-detail">
//                             <div className="inner-box">
//                                 <div className="image">
//                                     <img src={BlogDetails.blogSingleImg} alt="" />
//                                 </div>
//                                 <div className="lower-content">
//                                     <ul className="post-meta">
//                                         <li><span className="icon fa fa-user"></span> {BlogDetails.author}</li>
//                                         <li><span className="icon fa fa-calendar"></span> {BlogDetails.create_at}</li>
//                                     </ul>
//                                     <h2>{BlogDetails.title}</h2>
//                                     <p>It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
//                                     <p>The basic premise of search engine reputation management in to use the greate work  Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over </p>
//                                     <p>Spring is often associated with a fresh, new, clean start and a renewed sense of life. For many, this getting rid of the old and in with the new takes on the form of spring cleaning.  While you may be thinking about the house, why not think of refreshing and reviving your business’ website?  After all, your website is your business’ presence online and is the first interaction customers have with your company.</p>
//                                     <p>Does your website accurately display your company’s character, personality and culture? Is it current and up to date?</p>
//                                     <p>Like your home, you may acquire a different taste in décor and choose to go beyond cleaning to overhauling a room’s look. Spring is a great time to do the same for your business website.</p>
//                                     <blockquote>
//                                         “I cannot give you the formula for success, but I can give you the formula for failure. It is: Try to please everybody.”
//                                         <span className="author-name">Bayard Herbert</span>
//                                     </blockquote>
//                                     <div className="row clearfix">
//                                         <div className="column col-lg-6 col-md-6 col-sm-12">
//                                             <div className="image">
//                                                 <img src={gl1} alt="" />
//                                             </div>
//                                         </div>
//                                         <div className="column col-lg-6 col-md-6 col-sm-12">
//                                             <div className="image">
//                                                 <img src={gl2} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <h3>Absolute Links vs. Relative Links – SEO Intrinsic Value</h3>
//                                     <p>Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. It helps you identify popular and valuable keywords so you can decide how to structure or revise your content. It also gives you insights on your market’s behavior such as location, times of activity, frequency of searches, technologies used, product preferences, etc. All these metrics are useful in helping you get to know your audience, their needs, and their expectations.</p>

//                                     <div className="post-share-options">
//                                         <div className="post-share-inner clearfix">
//                                             <div className="pull-left">
//                                                 <div className="post-title">Tags:</div>
//                                                 <ul className="tags">
//                                                     <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">App,</Link></li>
//                                                     <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Agencyco,</Link></li>
//                                                     <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">History,</Link></li>
//                                                     <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Blue,</Link></li>
//                                                     <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Gold</Link></li>
//                                                 </ul>
//                                             </div>
//                                             <ul className="social-box pull-right">
//                                                 <li className="facebook"><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-facebook-f"></span></Link></li>
//                                                 <li className="twitter"><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-twitter"></span></Link></li>
//                                                 <li className="linkedin"><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-google-plus"></span></Link></li>
//                                                 <li className="pinterest"><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-pinterest-p"></span></Link></li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="authors-box">
//                                 <div className="author-inner">
//                                     <div className="thumb"><img src={blog1} alt="" /></div>
//                                     <div className="author">Author</div>
//                                     <h4 className="name">Manika Rock</h4>
//                                     <div className="text">He is attended the State University of New York at Oswego where he majored in English Literature and Creative Writing.</div>
//                                     <ul className="social-icon clearfix">
//                                         <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><i className="fa fa-facebook-f"></i></Link></li>
//                                         <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><i className="fa fa-google-plus"></i></Link></li>
//                                         <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><i className="fa fa-twitter"></i></Link></li>
//                                         <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><i className="fa fa-linkedin"></i></Link></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="comments-area">
//                                 <div className="group-title"><h4>Read Comments</h4></div>
//                                 <div className="comment-box">
//                                     <div className="comment">
//                                         <div className="author-thumb"><img src={blog2} alt="" /></div>
//                                         <div className="comment-inner">
//                                             <div className="comment-info clearfix">Steven Rich – Dec 17, 2020</div>
//                                             <div className="rating">
//                                                 <span className="fa fa-star"></span>
//                                                 <span className="fa fa-star"></span>
//                                                 <span className="fa fa-star"></span>
//                                                 <span className="fa fa-star"></span>
//                                                 <span className="fa fa-star light"></span>
//                                             </div>
//                                             <div className="text">How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="comment-box reply-comment">
//                                     <div className="comment">
//                                         <div className="author-thumb"><img src={blog3} alt="" /></div>
//                                         <div className="comment-inner">
//                                             <div className="comment-info clearfix">William Cobus – Dec 20, 2020</div>
//                                             <div className="rating">
//                                                 <span className="fa fa-star"></span>
//                                                 <span className="fa fa-star"></span>
//                                                 <span className="fa fa-star"></span>
//                                                 <span className="fa fa-star"></span>
//                                                 <span className="fa fa-star-half-empty"></span>
//                                             </div>
//                                             <div className="text">There anyone who loves or pursues or desires to obtain pain itself, because it is pain sed, because occasionally circumstances occur some great pleasure.</div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>

//                             <div className="comment-form">
//                                 <div className="group-title"><h4>Add Your Reviews</h4></div>
//                                 <div className="rating-box">
//                                     <div className="text"> Your Rating:</div>
//                                     <div className="rating">
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                     </div>
//                                     <div className="rating">
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                     </div>
//                                     <div className="rating">
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                     </div>
//                                     <div className="rating">
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                     </div>
//                                     <div className="rating">
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
//                                     </div>
//                                 </div>
//                                 <form method="post" onSubmit={submitHandler}>
//                                     <div className="row clearfix">
//                                         <div className="col-md-6 col-sm-6 col-xs-12 form-group">
//                                             <label>Your Name*</label>
//                                             <input type="text" name="username" placeholder="" required />
//                                         </div>
//                                         <div className="col-md-6 col-sm-6 col-xs-12 form-group">
//                                             <label>Last Name*</label>
//                                             <input type="text" name="username" placeholder="" required />
//                                         </div>
//                                         <div className="col-md-12 col-sm-12 col-xs-12 form-group">
//                                             <label>Phone Number*</label>
//                                             <input type="email" name="email" placeholder="" required />
//                                         </div>

//                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
//                                             <label>Your Comments*</label>
//                                             <textarea name="message" placeholder=""></textarea>
//                                         </div>

//                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
//                                             <button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="txt">Submit Now</span></button>
//                                         </div>

//                                     </div>
//                                 </form>

//                             </div>

//                         </div>
//                     </div>
//                     <BlogSidebar />
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default BlogSingle;

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import BlogSidebar from '../BlogSidebar';
import { API_BASE_URL } from '../../api/config/apiConfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import blog1 from '../../images/resource/author-8.jpg';
import blog2 from '../../images/resource/author-1.png';
import blog3 from '../../images/resource/author-2.png';
import gl1 from '../../images/resource/news-12.jpg';
import gl2 from '../../images/resource/news-13.jpg';
import styles from './Blog.module.css';
import CommentReviewForm from './CommentReviewForm';

const BlogSingle = () => {
    const { slug } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [blog, setBlog] = useState(null);
     const [comment, setComment] = useState(null);
     const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [visibleComments, setVisibleComments] = useState(3);

    const ClickHandler = () => window.scrollTo(10, 0);
    const submitHandler = (e) => e.preventDefault();

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_BASE_URL}/api/blog-details/${slug}`);
                if (response.data.blog) {
                    console.log("Blog data details page============>:", response.data.blog);
                    setBlog(response.data.blog);
                     setComment(response.data.blog.review);
                     setData(response.data.blog.review);
                     setBlogData(response.data.blog.review);

                    console.log("Blog data comment page============>:", response.data.blog.review);

                } else {
                    setError("Blog not found");
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blog details:", err);
                setError("Failed to load blog details");
                setLoading(false);
            }
        };

        if (slug) fetchBlogDetails();
    }, [slug]);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    if (loading) {
        return (
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="news-detail">
                                <div className="inner-box">
                                    <div className="image"><Skeleton height={400} /></div>
                                    <div className="lower-content">
                                        <ul className="post-meta">
                                            <li><Skeleton width={100} /></li>
                                            <li><Skeleton width={150} /></li>
                                        </ul>
                                        <h2><Skeleton width={300} /></h2>
                                        <p><Skeleton count={5} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="news-detail">
                                <div className="inner-box text-center">
                                    <h2>Error</h2>
                                    <p>{error || "Blog not found"}</p>
                                    <Link to="/blog" className="theme-btn btn-style-two">
                                        <span className="txt">Return to Blog List</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="content-side col-lg-8 col-md-12 col-sm-12">
                        <div className="news-detail">
                            <div className="inner-box">
                                <div className="image">
                                    <img 
                                        src={blog.image.startsWith('http') ? blog.image : `${API_BASE_URL}/${blog.image}`} 
                                        alt={blog.title} 
                                        style={{ maxWidth: '100%' }}
                                    />
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li><span className="icon fa fa-user"></span> Admin</li>
                                        <li><span className="icon fa fa-calendar"></span> {formatDate(blog.blog_date || blog.created_at)}</li>
                                    </ul>
                                    <h2>{blog.title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />

                                    <div className="row clearfix">
                                        {/* <div className="column col-lg-6 col-md-6 col-sm-12">
                                            <div className="image"><img src={blog.image} alt="" /></div>
                                        </div>
                                        <div className="column col-lg-6 col-md-6 col-sm-12">
                                            <div className="image"><img src={blog.image} alt="" /></div>
                                        </div> */}
                                       {/* {JSON.parse(blog.blog_images).map((img, index) => (
                                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
                                            <div className="ratio ratio-4x3">
                                            <img
                                                src={img}
                                                alt={`Blog Image ${index + 1}`}
                                                className={`img-fluid ${styles.img}`}
                                                // className="img-fluid"
                                                style={{ objectFit: 'cover' }}
                                            />
                                            </div>
                                        </div>
                                        ))} */}


                                    </div>

                                    <div className="post-share-options">
                                        {/* <div className="post-share-inner clearfix">
                                            <div className="pull-left">
                                                <div className="post-title">Tags:</div>
                                                <ul className="tags">
                                                    {blog.tags ? blog.tags.split(',').map((tag, index) => (
                                                        <li key={index}>
                                                            <Link onClick={ClickHandler} to={`/blog-tag/${tag.trim()}`}>
                                                                {tag.trim()}{index < blog.tags.split(',').length - 1 ? ',' : ''}
                                                            </Link>
                                                        </li>
                                                    )) : (
                                                        <>
                                                            <li><Link onClick={ClickHandler} to="/blog-tag/App">App,</Link></li>
                                                            <li><Link onClick={ClickHandler} to="/blog-tag/Blog">Blog,</Link></li>
                                                            <li><Link onClick={ClickHandler} to="/blog-tag/Website">Website</Link></li>
                                                        </>
                                                    )}
                                                </ul>
                                            </div>
                                            <ul className="social-box pull-right">
                                                <li className="facebook"><Link onClick={ClickHandler} to="#"><span className="fa fa-facebook-f"></span></Link></li>
                                                <li className="twitter"><Link onClick={ClickHandler} to="#"><span className="fa fa-twitter"></span></Link></li>
                                                <li className="linkedin"><Link onClick={ClickHandler} to="#"><span className="fa fa-google-plus"></span></Link></li>
                                                <li className="pinterest"><Link onClick={ClickHandler} to="#"><span className="fa fa-pinterest-p"></span></Link></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            {/* Author Section */}
                            {/* <div className="authors-box">
                                <div className="author-inner">
                                    <div className="thumb"><img src={blog1} alt="" /></div>
                                    <div className="author"></div>
                                    <h4 className="name">Manika Rock</h4>
                                    <div className="text">He is attended the State University of New York at Oswego where he majored in English Literature and Creative Writing.</div>
                                     
                                </div>
                            </div> */}

                              {/* <div className="authors-box">
                            <div className="author-inner">
                                <div className="thumb"><img src={blog1} alt="" /></div>
                                <div className="author">Author</div>
                                {(() => {
                                const activeReviewer = comment?.find(item => item.status === 1);
                                
                                if (activeReviewer) {
                                    return (
                                    <>
                                        <h4 className="name">
                                        {activeReviewer.first_name}
                                        </h4>
                                        <div className="text">
                                        Author of this blog titled <strong>{blogData?.title}</strong>.
                                        </div>
                                    </>
                                    );
                                } else {
                                    return <div className="text">No active reviewer available.</div>;
                                }
                                })()}
                            </div>
                            </div> */}

                            {/* Comment Section with Load More */}
                            {/* <div className="comments-section mt-4">
                        <h3 className="mb-4">Comments</h3>

                        
                        {comment.slice(0, visibleComments).map((item) => (
                            <div key={item.id} className="card mb-3">
                            <div className="card-body d-flex">
                                 
                                <div className="me-3">
                                <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                                    <i className="fa fa-user"></i>
                                </div>
                                </div>

                                
                                <div>
                                <h5 className="card-title mb-1">
                                    {item.first_name} {item.last_name}
                                </h5>
                                <div className="text-muted mb-1">Rating: {item.review}/5</div>
                                <p className="card-text">{item.comments}</p>
                                </div>
                            </div>
                            </div>
                        ))}

                        
                        {comment.length > visibleComments && (
                            <div className="text-center">
                            <button
                                className="btn btn-outline-primary mt-3"
                                onClick={() => setVisibleComments((prevCount) => prevCount + 3)}
                            >
                                Load More
                            </button>
                            </div>
                        )}
                        </div> */}


                            {/* Comment Section */}

                           {/* <div className="comment-form">
                            <div className="group-title"><h4>Add Your Reviews</h4></div>
                             <div className="rating-box">
                                  <div className="text"> Your Rating:</div>
                                   <div className="rating">
                                    <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                            </div>
                               <div className="rating">
                                     <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                  <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                             </div>
                                 <div className="rating">
                                 <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                       <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                     </div>
                                     <div className="rating">
                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                       <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                     <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                         <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links"><span className="fa fa-star"></span></Link>
                                    </div>
                                </div>
                                 <form method="post" onSubmit={submitHandler}>
                                      <div className="row clearfix">
                                        <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                           <label>Your Name*</label>
                                            <input type="text" name="username" placeholder="" required />
                                       </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                             <label>Last Name*</label>
                                            <input type="text" name="username" placeholder="" required />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                           <label>Phone Number*</label>
                                            <input type="email" name="email" placeholder="" required />
                                        </div>

                                       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <label>Your Comments*</label>
                                             <textarea name="message" placeholder=""></textarea>
                                      </div>

                                         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                             <button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="txt">Submit Now</span></button>
                                         </div>

                                      </div>
                                  </form>

                              </div> */}

                 
                             {/* comment part start */}
                         {/* <CommentReviewForm blogId={id} /> */}


                         {/* comment part end */}

                         {/* <CommentReviewForm blogId={singleBlog.id} /> */}


                             
                            
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { API_BASE_URL } from '../../api/config/apiConfig';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const BlogDetails = () => {
//     const { id } = useParams();
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             try {
//                 const res = await axios.get(`${API_BASE_URL}/api/blog-details/${id}`);
//                 setBlog(res.data.blog);
//                 console.log("data details page ==========>", res.data);
//             } catch (err) {
//                 console.error("Error fetching blog detail:", err);
//                 setError("Blog not found.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [id]);

//     if (loading) {
//         return <Skeleton count={5} />;
//     }

//     if (error) {
//         return <div className="text-center text-danger">{error}</div>;
//     }

//     if (!blog) {
//         return <div className="text-center">No Blog Data</div>;
//     }

//     return (
//         <div className="blog-detail-page">
//             <h2>{blog.title}</h2>
//             <p><strong>Date:</strong> {new Date(blog.created_at).toLocaleDateString()}</p>
//             <img 
//                 src={blog.image.startsWith('http') ? blog.image : `${API_BASE_URL}/${blog.image}`} 
//                 alt={blog.title} 
//                 style={{ maxWidth: '100%' }}
//             />
//             <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
//         </div>
//     );
// };

// export default BlogDetails;

