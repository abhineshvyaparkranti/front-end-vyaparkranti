import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TermPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Terms & Coditions'} pagesub={'Terms & Coditions'} />
             <section className="privacy-section">
    <div className="auto-container">
        <div className="privacy-content">
            <h2>Terms & Conditions</h2>
            <p>At Vyapar Kranti, we are committed to delivering quality IT solutions tailored to meet the dynamic needs of businesses across sectors. These Terms & Conditions govern your use of our services, software, and website. By accessing our site or engaging with our services, you agree to be bound by these terms.</p>
            {/* <div className="date">Updated May 23, 2025</div> */}
            <p>All services provided by Vyapar Kranti are subject to prior consultation, scope definition, and mutual agreement. Custom software, web development, digital marketing, or any IT consultancy services will be delivered as per the agreed timeline and deliverables, and are non-refundable once work has commenced.</p>
            <p>Client obligations include providing timely feedback, approvals, and content required for project execution. Delays in these responsibilities may affect delivery schedules. Vyapar Kranti shall not be held liable for delays caused by such instances.</p>

            <h2>Overview</h2>
            <p>Vyapar Kranti provides customized IT services, including website development, software solutions, mobile applications, cloud-based systems, and digital marketing strategies. We reserve the right to modify our service offerings and pricing at any time, with prior notice to our clients where applicable.</p>
        </div>

        <div className="privacy-content">
            <h4>We value client relationships and aim to deliver high-performing, scalable digital solutions that drive business growth.</h4>
            <p>Our approach combines technical excellence with business insight to help clients transform digitally. By leveraging modern frameworks, agile development practices, and cloud-first strategies, we build robust IT systems that align with your business goals.</p>
            <p>Clients are encouraged to actively participate in the project lifecycle to ensure outcomes match expectations. Clear communication and transparency are integral to our engagement model.</p>
            <p>We offer service packages for businesses of all sizes—from startups seeking online presence to enterprises in need of advanced system integration and automation.</p>
        </div>

        <div className="privacy-content">
            <h4>Our consultative approach ensures each project receives tailored planning, development, and support from our expert team.</h4>
            <p>Before any engagement, we conduct detailed requirements analysis, offer recommendations, and define deliverables. These are documented in service-level agreements or project contracts that both parties sign before initiation.</p>
            <p>Vyapar Kranti maintains intellectual property rights over proprietary frameworks, modules, and templates used in project execution unless stated otherwise in a signed agreement.</p>
            <ul className="privacy-list">
                <li>Custom Software Development</li>
                <li>Web & E-commerce Development</li>
                <li>Mobile App Development</li>
                <li>Digital Marketing & SEO</li>
            </ul>
        </div>

        <div className="privacy-content">
            <h4>We focus on measurable results that increase visibility, productivity, and ROI for our clients.</h4>
            <p>Our marketing services target the right audience with SEO, social media, PPC, and content strategies. We ensure your business gains organic visibility and user engagement through consistent optimization and analytics-driven decisions.</p>
            <p>Service reports, campaign performance, and analytics are regularly shared with clients. We prioritize data security and follow best practices in storing and managing customer information.</p>
        </div>

        <div className="privacy-content">
            <h2>Security and Retention</h2>
            <p>We implement strict security protocols to protect client data. Our team follows industry best practices to ensure system integrity, confidentiality, and uptime. Data retention policies are defined in project agreements and comply with applicable laws.</p>
        </div>

        <div className="privacy-content">
            <h2>Contact Us</h2>
            <p>If you have questions regarding these Terms & Conditions, our services, or a current engagement, you can contact us via our official website at <a href="https://vyaparkranti.com">vyaparkranti.com</a>. We're here to support your business and answer any concerns you may have.</p>
        </div>
    </div>
</section>


            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermPage;
