import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '../../images/logo.png'
import HeaderTopbar from '../HeaderTopbar';
import { totalPrice } from "../../utils";


const Header2 = (props) => {
	const [searchActive, setSearchState] = useState(false);
	const [rightBarActive, setrightBarState] = useState(false);
	const [cartActive, setcartState] = useState(false);

	const SubmitHandler = (e) => {
		e.preventDefault()
	}

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	}

	const { carts } = props;

	return (
		<header className="main-header header-style-two">
			<HeaderTopbar />
			<div className="header-upper">
				<div className="auto-container clearfix">

					<div className="pull-left logo-box">
						<div className="logo"><Link to="/home"><img src={Logo} alt="" title="" /></Link></div>
					</div>

					<div className="nav-outer clearfix">
						<MobileMenu />
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
									<li className="current dropdown"><Link onClick={ClickHandler} to="/">Home</Link>
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
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} to="/">About</Link>
										<ul>
											<li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
											<li><Link onClick={ClickHandler} to="/faq">Faq</Link></li>
											<li><Link onClick={ClickHandler} to="/price">Price</Link></li>
											<li><Link onClick={ClickHandler} to="/team">Team</Link></li>
											<li><Link onClick={ClickHandler} to="/team-single/Bina-Rano">Team Detail</Link></li>
											<li><Link onClick={ClickHandler} to="/testimonial">Testimonial</Link></li>
											<li><Link onClick={ClickHandler} to="/comming-soon">Comming Soon</Link></li>
											<li><Link onClick={ClickHandler} to="/terms">Terms & Condition</Link></li>
											<li><Link onClick={ClickHandler} to="/privacy">Privacy & Policy</Link></li>
										</ul>
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} to="/">Services</Link>
										<ul>
											<li><Link onClick={ClickHandler} to="/services">Services</Link></li>
											<li><Link onClick={ClickHandler} to="/service-single/Content-Marketing">Content Marketing</Link></li>
											<li><Link onClick={ClickHandler} to="/service-single/Social-Marketing">Social Marketing</Link></li>
											<li><Link onClick={ClickHandler} to="/service-single/App-Development">App Development</Link></li>
											<li><Link onClick={ClickHandler} to="/service-single/SEO-Optimization">SEO Optimization</Link></li>
											<li><Link onClick={ClickHandler} to="/service-single/Web-Development">Web Development</Link></li>
											<li><Link onClick={ClickHandler} to="/service-single/PPC-Advertising">PPC Advertising</Link></li>
										</ul>
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} to="/">Projects</Link>
										<ul>
											<li><Link onClick={ClickHandler} to="/projects">Projects</Link></li>
											<li><Link onClick={ClickHandler} to="/projects-left-sidebar">Projects Left Sidebar</Link></li>
											<li><Link onClick={ClickHandler} to="/projects-right-sidebar">Project Right Sidebar</Link></li>
											<li><Link onClick={ClickHandler} to="/project-single/Movie-Recommendation">Projects Detail</Link></li>
										</ul>
									</li>
									<li className="dropdown has-mega-menu"><Link onClick={ClickHandler} to="/">Pages</Link>
										<div className="mega-menu">
											<div className="mega-menu-bar row clearfix">
												<div className="column col-lg-3 col-md-4 col-sm-12">
													<h3>About Us</h3>
													<ul>
														<li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
														<li><Link onClick={ClickHandler} to="/faq">Faq</Link></li>
														<li><Link onClick={ClickHandler} to="/price">Price</Link></li>
														<li><Link onClick={ClickHandler} to="/team">Team</Link></li>
														<li><Link onClick={ClickHandler} to="/team-single/Bina-Rano">Team Detail</Link></li>
														<li><Link onClick={ClickHandler} to="/testimonial">Testimonial</Link></li>
														<li><Link onClick={ClickHandler} to="/comming-soon">Comming Soon</Link></li>
														<li><Link onClick={ClickHandler} to="/terms">Terms & Condition</Link></li>
														<li><Link onClick={ClickHandler} to="/privacy">Privacy & Policy</Link></li>
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
													<h3>Blog</h3>
													<ul>
														<li><Link onClick={ClickHandler} to="/blog">Our Blog</Link></li>
														<li><Link onClick={ClickHandler} to="/blog-classNameic">Blog classNameic</Link></li>
														<li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
														<li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Blog Single</Link></li>
														<li><Link onClick={ClickHandler} to="/not-found">Not Found</Link></li>
													</ul>
												</div>
												<div className="column col-lg-3 col-md-4 col-sm-12">
													<h3>Our Shop</h3>
													<ul>
														<li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
														<li><Link onClick={ClickHandler} to="/product-single/Book-Item-1">Shop Details</Link></li>
														<li><Link onClick={ClickHandler} to="/shoping-cart">Cart Page</Link></li>
														<li><Link onClick={ClickHandler} to="/checkout">Checkout Page</Link></li>
														<li><Link onClick={ClickHandler} to="/login">Login</Link></li>
														<li><Link onClick={ClickHandler} to="/login">Register</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} to="/">Shop</Link>
										<ul>
											<li><Link onClick={ClickHandler} to="/shop">Our Products</Link></li>
											<li><Link onClick={ClickHandler} to="/product-single/Book-Item-1">Product Single</Link></li>
											<li><Link onClick={ClickHandler} to="/shopping-cart">Shopping Cart</Link></li>
											<li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
											<li><Link onClick={ClickHandler} to="/login">Account</Link></li>
										</ul>
									</li>
									<li className="dropdown"><Link onClick={ClickHandler} to="/">Blog</Link>
										<ul>
											<li><Link onClick={ClickHandler} to="/blog">Our Blog</Link></li>
											<li><Link onClick={ClickHandler} to="/blog-classNameic">Blog classNameic</Link></li>
											<li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
											<li><Link onClick={ClickHandler} to="/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links">Blog Single</Link></li>
											<li><Link onClick={ClickHandler} to="/not-found">Not Found</Link></li>
										</ul>
									</li>
									<li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
								</ul>
							</div>
						</nav>
						<div className="outer-box clearfix">
							<div className="cart-box">
								<div className="dropdown">
									<button onClick={() => setcartState(!cartActive)} className="cart-box-btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										{" "}
										<span className="flaticon-cart"></span>
										{" "}

										<span className="total-cart">{carts.length}</span>
									</button>
									<div className={`dropdown-menu pull-right cart-panel ${cartActive ? "cart-active" : ""}`} aria-labelledby="dropdownMenu1">


										{carts &&
											carts.length > 0 &&
											carts.map((catItem, crt) => (
												<div className="cart-product" key={crt}>
													<div className="inner">
														<div className="cross-icon"><span className="icon fa fa-remove" onClick={() => props.removeFromCart(catItem.id)}></span>{" "}</div>
														<div className="image"><img src={catItem.proImg} alt="" /></div>
														<h3>{catItem.title}</h3>
														<div className="quantity-text">Quantity {" "} {catItem.qty}</div>
														<div className="price"> ${catItem.price}</div>
													</div>
												</div>
											))}

										<div className="cart-total">Sub Total: <span>${totalPrice(carts)}</span></div>
										<ul className="btns-boxed">
											<li><Link onClick={ClickHandler} to="/shopping-cart">View Cart</Link></li>
											<li><Link onClick={ClickHandler} to="/checkout">CheckOut</Link></li>
										</ul>

									</div>
								</div>
							</div>

							<div onClick={() => setSearchState(!searchActive)} className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div>
							<div className="btn-box">
								<Link to="/contact" className="theme-btn btn-style-one"><span className="txt">Get A Quote</span></Link>
							</div>

							<div onClick={() => setrightBarState(!rightBarActive)} className="nav-btn navSidebar-button"><span className="icon flaticon-menu"></span></div>

						</div>
					</div>

				</div>
			</div>


			<div className={`search-popup ${searchActive ? "search-active" : ""}`}>
				<button className="close-search style-two" onClick={() => setSearchState(!searchActive)}><span className="flaticon-multiply"></span></button>
				<button className="close-search" onClick={() => setSearchState(!searchActive)}><span className="fa fa-arrow-up"></span></button>
				<form method="post" onClick={SubmitHandler}>
					<div className="form-group">
						<input type="search" name="search-field" value="" placeholder="Search Here" required="" />
						<button type="submit"><i className="fa fa-search"></i></button>
					</div>
				</form>
			</div>

			<div className={`xs-sidebar-group info-group ${rightBarActive ? "isActive" : ""}`}>
				<div className="xs-overlay xs-bg-black" onClick={() => setrightBarState(!rightBarActive)}></div>
				<div className="xs-sidebar-widget">
					<div className="sidebar-widget-container">
						<div className="widget-heading">
							<span onClick={() => setrightBarState(!rightBarActive)} className="close-side-widget">
								X
							</span>
						</div>
						<div className="sidebar-textwidget">

							<div className="sidebar-info-contents">
								<div className="content-inner">
									<div className="logo">
										<Link to="/"><img src={Logo} alt="" /></Link>
									</div>
									<div className="content-box">
										<h2>About Us</h2>
										<p className="text">Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.</p>
										<Link to="/contact" className="theme-btn btn-style-two"><span className="txt">Contact Now</span></Link>
									</div>
									<div className="contact-info">
										<h2>Contact Info</h2>
										<ul className="list-style-one">
											<li><span className="icon fa fa-location-arrow"></span>New York 24, Melborne City, USA</li>
											<li><span className="icon fa fa-phone"></span><a href="tel:+000-000-000-0000">(000) 000-000-0000</a></li>
											<li><span className="icon fa fa-envelope"></span><a href="mailto:Merix@gmail.com">Merix@gmail.com</a></li>
											<li><span className="icon fa fa-clock-o"></span>Week Days: 09.00 to 18.00 Sunday: Closed</li>
										</ul>
									</div>
									<ul className="social-box">
										<li className="facebook"><Link to="/" className="fa fa-facebook-f"></Link></li>
										<li className="twitter"><Link to="/" className="fa fa-twitter"></Link></li>
										<li className="linkedin"><Link to="/" className="fa fa-linkedin"></Link></li>
										<li className="instagram"><Link to="/" className="fa fa-instagram"></Link></li>
										<li className="youtube"><Link to="/" className="fa fa-youtube"></Link></li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		carts: state.cartList.cart,
	};
};
export default connect(mapStateToProps, { removeFromCart })(Header2);