import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
// import Logo from '../../images/logo.png'
import companylogo3 from '../../images/companylogo/logocorrectwhite.jpg'
import ContactFormModal from '../ContactFormModal/ContactFormModal';
// import Dashboard from './../Dashboard/Dashboard';
import htmlReactParser, { domToReact } from 'html-react-parser';
import { API_BASE_URL } from '../../api/config/apiConfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const Header = (props) => {
    const [searchActive, setSearchState] = useState(false);
    const [showModal, setShowModal] = useState(false);
  
    const ClickHandlerModal = (e) => {
      e.preventDefault();
      setShowModal(true);
    };

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }



     const [bannerTitle, setBannerTitle] = useState("Vyapar Kranti Seo Service Provider From Your Agency.");
        const [bannerContent, setBannerContent] = useState("Vyapar Kranti Banner Title SEo ,description ,seo services,packages kjskd");
        const [loading, setLoading] = useState(true);
        const [address, setAddress] = useState("Vayapar Kranti ,Nazafgarh Near Metro Station test ");
        const [mobile, setMobile] = useState("+1234567790");
        const [mail, setMail] = useState("test@gmail.com");
        const [Map_link, setMap_link] = useState("https://www.google.com/maps?ll=28.61287,76.986676&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=1957349469795263381");
        const [error, setError] = useState(null);
        const [Logo, setLogo] = useState("logo");
    
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
    
        const fetchBannerData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_BASE_URL}/api/home-elements`);
                console.log('Header data page response============>:', response.data.elements);
    
                const elements = response.data.elements;
                console.log('Header data page response============>:', response.data.elements);
    
                if (elements) {
                    if (elements.Address) setAddress(removeTags(elements.Address));
                    if (elements.mobile) setMobile(removeTags(elements.mobile));
                    if (elements.mail) setMail(removeTags(elements.mail));
                    if (elements.Map_link) setMap_link(removeTags(elements.Map_link));
                    if (elements.Logo) setLogo(removeTags(elements.Logo));
                }
    
                if (response.data && response.data.elements.banner_content) {
                    const cleanContent = response.data.elements.banner_content
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

    

    return (
        <header className="main-header header-style-one">
            <div className="header-upper">
                <div className="auto-container clearfix">
                    {/* <div className="pull-left logo-box">
                        <div className="logo"><Link onClick={ClickHandler} to="/home">   {loading ? (
                    <Skeleton width={170} height={80} />
                    ) : (
                    <img
                        src={Logo}
                        alt=""
                        title=""
                        style={{ width: "170px", height: "80px", objectFit: "inherit" }}
                    />
                    )}
                        </Link></div>
                    </div> */}
                    <div className="pull-left logo-box">
                        <div className="logo"  ><Link onClick={ClickHandler} to="/home"><img src={companylogo3} alt="" title=""  style={{width:'170px', height: "80px"}}/></Link></div>
                    </div>
                    <div className="nav-outer clearfix">
                        <MobileMenu/>
                        <nav className="main-menu navbar-expand-md">
                            <div className="navbar-header">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                    {/* <li className="current dropdown"><Link onClick={ClickHandler} to="/">Home</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/home">Homepage One</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home2">Homepage Two</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home3">Homepage Three</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home4">Homepage Four</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home5">Homepage Five</Link></li>
                                            <li><Link onClick={ClickHandler} to="/home6">Homepage Six</Link></li>
                                            <li className="dropdown"><Link onClick={ClickHandler} to="/">Header Styles</Link>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} to="/home">Header Style One</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home2">Header Style Two</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home3">Header Style Three</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home4">Header Style Four</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home5">Header Style Five</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home6">Header Style Six</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li className="dropdown"><Link onClick={ClickHandler} to="/about">About</Link>
                                        {/* <ul>
                                            <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                            <li><Link onClick={ClickHandler} to="/faq">Faq</Link></li>
                                            <li><Link onClick={ClickHandler} to="/price">Price</Link></li>
                                            <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                            <li><Link onClick={ClickHandler} to="/team-single/Bina-Rano">Team Detail</Link></li>
                                            <li><Link onClick={ClickHandler} to="/testimonial">Testimonial</Link></li>
                                            <li><Link onClick={ClickHandler} to="/comming-soon">Comming Soon</Link></li>
                                            <li><Link onClick={ClickHandler} to="/terms">Terms & Condition</Link></li>
                                            <li><Link onClick={ClickHandler} to="/privacy">Privacy & Policy</Link></li>
                                        </ul> */}
                                    </li>
                                    <li className="dropdown"><Link onClick={ClickHandler} to="/services">Services</Link> </li>
                                      <li className="dropdown"><Link onClick={ClickHandler} to="/package-page">Hosting</Link> </li>
                                        <li className="dropdown"><Link onClick={ClickHandler} to="/domain">Domain</Link> </li>
                                      
                                    {/* <li className="dropdown"><Link onClick={ClickHandler} to="/services">Services</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/Content-Marketing">Content Marketing</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/Social-Marketing">Social Marketing</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/App-Development">App Development</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/SEO-Optimization">SEO Optimization</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/Web-Development">Web Development</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/PPC-Advertising">PPC Advertising</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/PPC-Advertising">Digital Marketing</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/PPC-Advertising">QA and Testing</Link></li>
                                            <li><Link onClick={ClickHandler} to="/service-single/PPC-Advertising">Maintenance & Support</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="dropdown"><Link onClick={ClickHandler} to="/projects-right-sidebar">Projects</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/projects">Projects</Link></li>
                                            <li><Link onClick={ClickHandler} to="/projects-left-sidebar">Projects Left Sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} to="/projects-right-sidebar">Project Right Sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} to="/project-single/Movie-Recommendation">Projects Details</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="dropdown has-mega-menu"><Link onClick={ClickHandler} to="/services">Services</Link>
                                        <div className="mega-menu">
                                            <div className="mega-menu-bar row clearfix">
                                                <div className="column col-lg-3 col-md-4 col-sm-12">
                                                    <h3>SEO</h3>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="/about">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/faq">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/price">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/team">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/team-single/Bina-Rano">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/testimonial">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/comming-soon">Comming Soon</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/terms">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/privacy">dumy</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="column col-lg-3 col-md-4 col-sm-12">
                                                    <h3>Services</h3>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/Content-Marketing">Content Marketing</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/Social-Marketing">Social Marketing</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/App-Development">App Development</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/SEO-Optimization">SEO Optimization</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/Web-Development">Web Development</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/service-single/PPC-Advertising">PPC Advertising</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="column col-lg-3 col-md-4 col-sm-12">
                                                    <h3>Marketing</h3>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="/blog">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-classNameic">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-left-sidebar">dumy</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Blog Single</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/not-found">Not Found</Link></li>
                                                        
                                                    </ul>
                                                </div>
                                                <div className="column col-lg-3 col-md-4 col-sm-12">
                                                    <h3>Others</h3>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="/shop">Not Found</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/product-single/Book-Item-1">Not Found</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/shoping-cart">Not Found</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/checkout">Not Found</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/login">Not Found</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/login">Not Found</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}
                                     {/* <li className="dropdown"><Link onClick={ClickHandler} to="/blog">Blog</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/blog">Our Blog</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-classNameic">Blog classNameic</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Blog Single</Link></li>
                                            <li><Link onClick={ClickHandler} to="/dashboard">Dashboard</Link></li>
                                            <li><Link onClick={ClickHandler} to="/not-found">Not Found</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="dropdown"><Link onClick={ClickHandler} to="/gallery">Gallery</Link>
                                         
                                    </li> */}
                                    
                                     
                                    <li><Link onClick={ClickHandler} to="/technology">Technology</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
                                </ul>
                            </div>
                        </nav>

                        <div className="outer-box clearfix">
                            {/* <div className="btn-box">
                                <Link onClick={ClickHandler} to="/contact" className="theme-btn btn-style-one"><span className="txt">Get A Quote</span></Link>
                            </div> */}
                                 <div className="btn-box">
                            <Link onClick={ClickHandlerModal} to="/ContactFormModal" className="theme-btn btn-style-one">
                            <span className="txt">Get A Quote</span>
                            </Link>
                            </div>

                            <ContactFormModal show={showModal} handleClose={() => setShowModal(false)} />
                            {/* <div onClick={() => setSearchState(!searchActive)} className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div> */}
                        </div>
                    </div>

                </div>
            </div>
            <div className={`search-popup ${searchActive ? "search-active" : ""}`}>
                <button className="close-search style-two" onClick={() => setSearchState(!searchActive)}><span className="flaticon-multiply"></span></button>
                <button className="close-search" onClick={() => setSearchState(!searchActive)}><span className="fa fa-arrow-up"></span></button>
                <form method="post" onClick={SubmitHandler}>
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search Here" required="" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);