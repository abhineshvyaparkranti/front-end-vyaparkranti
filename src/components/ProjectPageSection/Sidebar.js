import React from 'react';
import { Link } from 'react-router-dom'
import Services from '../../api/Services';
import about from '../../images/resource/author-7.jpg'
import shape from '../../images/background/author-bg.jpg'


const Sidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <div className={`sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12 ${props.blLeft}`}>
            <aside className="sidebar sticky-top">
                <div className="sidebar-widget search-box">
                    <form method="post" onSubmit={SubmitHandler}>
                        <div className="form-group">
                            <input type="search" name="search-field" value="" placeholder="Search Here" required />
                            <button type="submit"><span className="icon fa fa-search"></span></button>
                        </div>
                    </form>
                </div>

                <div className="sidebar-widget categories-widget">
                    <div className="sidebar-title">
                        <h4>Categories</h4>
                    </div>
                    <div className="widget-content">
                        <ul className="blog-cat">
                            {Services.slice(0, 6).map((service, i) => (
                                <li key={i}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle} <span>( {service.Id} )</span></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="sidebar-widget author-widget">
                    <div className="widget-content" style={{ backgroundImage: `url(${shape})` }}>
                        <div className="image">
                            <img src={about} alt="" />
                        </div>
                        <div className="name">Pablo Villalpando</div>
                        <div className="text">I got lucky because I never gave up the search. Are you quitting too soon? Or, are you willing to pursue luck with a vengeance?</div>
                        <ul className="social-box">
                            <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-facebook-f"></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-linkedin"></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-twitter"></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links" className="fa fa-google"></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-widget popular-tags">
                    <div className="sidebar-title">
                        <h4>Tags</h4>
                    </div>
                    <div className="widget-content">
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Business</Link>
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Marketing</Link>
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">SEO</Link>
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">SEO</Link>
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">SMM</Link>
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Solution</Link>
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Tips</Link>
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Startup</Link>
                        <Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Strategy</Link>
                    </div>
                </div>

            </aside>
        </div>
    )

}

export default Sidebar;
