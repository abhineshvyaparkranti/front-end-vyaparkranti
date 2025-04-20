import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'

const AuthPage = (props) => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Login / Register'} pagesub={'Account'} />
            <section className="register-section">
                <div className="auto-container">
                    <form method="post" onSubmit={SubmitHandler}>
                        <div className="row clearfix">
                            <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <div className="form-title">
                                    <h2>Login Now</h2>
                                </div>

                                <div className="styled-form login-form">
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-user"></span></span>
                                        <input type="text" name="username"  placeholder="Your Name *" />
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="email" name="useremil"  placeholder="Enter Mail id *" />
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-unlock-alt"></span></span>
                                        <input type="password" name="userpassword"  placeholder="Enter Password" />
                                    </div>
                                    <div className="clearfix">
                                        <div className="form-group pull-left">
                                            <button type="button" className="theme-btn btn-style-two"><span className="txt">login</span></button>
                                        </div>
                                        <div className="form-group social-links-two pull-right">
                                            Or login with <Link to="/" className="img-circle facebook"><span className="fa fa-facebook-f"></span></Link> <Link to="/" className="img-circle twitter"><span className="fa fa-twitter"></span></Link> <Link to="/" className="img-circle google-plus"><span className="fa fa-google-plus"></span></Link>
                                        </div>
                                    </div>

                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <input type="checkbox" id="remember-me" /><label className="remember-me" for="remember-me">&nbsp; Remember Me</label>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <div className="form-title">
                                    <h2>Register Here</h2>
                                </div>

                                <div className="styled-form register-form">
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-user"></span></span>
                                        <input type="text" name="username"  placeholder="Your Name *" />
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                        <input type="email" name="useremil"  placeholder="Emai Address*" />
                                    </div>
                                    <div className="form-group">
                                        <span className="adon-icon"><span className="fa fa-unlock-alt"></span></span>
                                        <input type="password" name="userpassword"  placeholder="Enter Password" />
                                    </div>
                                    <div className="clearfix">
                                        <div className="form-group pull-left">
                                            <button type="button" className="theme-btn btn-style-two"><span className="txt">Register here</span></button>
                                        </div>
                                        <div className="form-group submit-text pull-right">
                                            * You must be a free registered to submit content.
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AuthPage;
