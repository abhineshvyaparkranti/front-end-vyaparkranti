import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'
import Projects from '../../api/project'
import pImg from '../../images/resource/project-3.jpg'
import PartnerSection from '../../components/PartnerSection';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';

const ProjectSinglePage = (props) => {
    const { slug } = useParams()

    const ProjectsDetails = Projects.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={ProjectsDetails.subTitle} pagesub={'Project'} />

            <section className="gallery-detail-section">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="upper-box">
                            <div className="row clearfix">
                                <div className="column col-lg-3 col-md-6 col-sm-12">
                                    <ul className="list">
                                        <li><strong>PUBLISHED</strong></li>
                                        <li>February 22, 2020</li>
                                    </ul>
                                </div>
                                <div className="column col-lg-3 col-md-6 col-sm-12">
                                    <ul className="list">
                                        <li><strong>CATEGORY</strong></li>
                                        <li>Development / Media</li>
                                    </ul>
                                </div>
                                <div className="column col-lg-3 col-md-6 col-sm-12">
                                    <ul className="list">
                                        <li><strong>CLIENT</strong></li>
                                        <li>noor_tech</li>
                                    </ul>
                                </div>
                                <div className="column col-lg-3 col-md-6 col-sm-12">
                                    <ul className="social-box">
                                        <li className="facebook"><Link to="/" className="fa fa-facebook-f"></Link></li>
                                        <li className="twitter"><Link to="/" className="fa fa-twitter"></Link></li>
                                        <li className="linkedin"><Link to="/" className="fa fa-linkedin"></Link></li>
                                        <li className="google"><Link to="/" className="fa fa-google"></Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <img src={ProjectsDetails.ps1img} alt="" />
                            </div>
                            <h3>The Challenge & Solution</h3>
                            <p>One of the principal decisions that startup owners have to make is whether or not to engage in SEO. One common consideration is the cost of investing in an SEO campaign versus possible returns. Another is the daunting list of SEO terminologies, which may overwhelm newcomers to the e-commerce and website scene. If you are a new online entrepreneur but are not convinced of the benefits of SEO, then this article is for you! Here are some of the reasons why SEO is important and why you should consider it as a marketing technique. SEO is less expensive than other online marketing approaches. It also offers higher reward rates when compared to other techniques such as social media marketing, pay per click advertising, and email marketing. While you may need to defray a substantial amount to cover initial SEO planning and processes that include website design, programming, and strategizing, you can be sure to get faster and more long-term results.</p>
                            <blockquote>
                                “I cannot give you the formula for success, but I can give you the formula for failure. It is: Try to please everybody.”
                                <span className="author-name"> -   HERBERT BAYARD SWOPE</span>
                            </blockquote>
                            <div className="gallery-column">
                                <div className="row clearfix">
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <div className="image titlt" data-tilt data-tilt-max="1">
                                            <img src={ProjectsDetails.psub1img1} alt="" />
                                        </div>
                                    </div>
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <div className="image titlt" data-tilt data-tilt-max="1">
                                            <img src={ProjectsDetails.psub1img2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4><span>02.</span> Working Process</h4>
                            <p>One SEO component called off-site SEO ensures that users of external pages or of social media can find your website. Being optimized for SEO increases the site’s potential to draw customers from other platforms other than the search engine. For instance, when you post content and links to your page on Facebook or Twitter, you are able to promote your website and attract more customers. One of the main goals of SEO is to attract the targeted audience through organic searches. The number of visitors to your site influences your sales and subscriptions. It also promotes the marketing of your products and services. Increased inbound traffic is always good for business because it equates to more conversion opportunities.</p>
                            <p>Some SEO-related tools such as the Google Keyword Planner and Google Analytics provide quantitative data to help you understand your market, analyze the trends, and know your competitors’ standings. It helps you identify popular and valuable keywords so you can decide how to structure or revise your content.</p>
                            <div className="image titlt" data-tilt data-tilt-max="1">
                                <img src={pImg} alt="" />
                            </div>
                            <h4><span>03.</span> Perfect Result</h4>
                            <p>Implementing SEO strategies help you to rank higher on the search engine’s results page (SERP). This means that when your target customers search for products and services that your industry offers, they are likely to find your website. When you repeatedly appear on the SERP, users become aware of your site and your business. This increases the chances of landing potential customers on your webpages. <span>SEO is less expensive than other online marketing approaches.</span> It also offers higher reward rates when compared to other techniques such as social media marketing, pay per click advertising, and email marketing.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectSectionS2/>
            <PartnerSection styleClass={'style-two'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;
