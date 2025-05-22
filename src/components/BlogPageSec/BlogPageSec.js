import React from 'react';
import { Link } from 'react-router-dom'

import blogs from '../../api/blogs.js'
import BlogSidebar from '../BlogSidebar/index.js';
import VideoModal from '../ModalVideo/index.js';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogPageSec = (props) => {
    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">

                    <div className="content-side col-lg-8 col-md-12 col-sm-12">
                        <div className="our-blogs">
                            {blogs.slice(0, 3).map((blog, bitem) => (
                                <div className={`news-block-three ${blog.blClass}`} key={bitem}>
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src={blog.blogSingleImg} alt="" />
                                            <div className="overlay-box">
                                                <VideoModal/>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <ul className="post-meta">
                                                <li><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}><span className="icon fa fa-user"></span> {blog.author}</Link></li>
                                                <li><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}><span className="icon fa fa-calendar"></span> {blog.create_at}</Link></li>
                                            </ul>
                                            <h4><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>{blog.title}</Link></h4>
                                            <div className="text">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
                                            <div className="btn-box">
                                                <div className="btn-box-inner">
                                                    <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="theme-btn btn-style-five"><span className="txt">Learn More</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="styled-pagination text-center">
                                <ul className="clearfix">
                                    <li className="prev"><Link onClick={ClickHandler} to="/blog"><span className="fa fa-angle-left"></span> </Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">01</Link></li>
                                    <li className="active"><Link onClick={ClickHandler} to="/blog">02</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">03</Link></li>
                                    <li className="next"><Link onClick={ClickHandler} to="/blog"><span className="fa fa-angle-right"></span> </Link></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <BlogSidebar blLeft={props.blLeft} />

                </div>
            </div>
        </div>

    )

}

export default BlogPageSec;
