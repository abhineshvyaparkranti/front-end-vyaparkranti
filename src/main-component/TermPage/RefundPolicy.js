import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const RefundPolicy = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Refund Policy'} pagesub={'Refund Policy'} />
            <section className="privacy-section">
    <div className="auto-container">
        <div className="privacy-content">
            <h2>Refund Policy</h2>
            <p>At Vyapar Kranti, we strive to deliver high-quality IT solutions tailored to your business needs. We take a consultative approach in every project and commit to transparency, value, and trust. Our refund policy is designed to be fair and clear to ensure your satisfaction while respecting the efforts of our expert teams.</p>
            {/* <div className="date">Updated May 23, 2025</div> */}
            <p>Clients are eligible for a full or partial refund under the following circumstances:
                <ul>
                    <li>If the project has not yet started.</li>
                    <li>If the deliverables do not align with the agreed-upon scope and cannot be rectified.</li>
                    {/* <li>If a cancellation request is made within 7 days of payment and significant resources have not yet been allocated.</li> */}
                </ul>
            </p>
            <p>Refund requests should be sent in writing to our official support channel. Each case will be reviewed individually, and a resolution will be provided within 7 business days.</p>
        </div>

        <div className="privacy-content">
            <h2>Overview</h2>
            <p>Vyapar Kranti is a next-generation IT services company committed to empowering businesses through digital transformation. From customized software development to digital marketing, SEO, and cloud infrastructure, we provide scalable solutions that drive results.</p>
            <p>We believe in continuous innovation, client-centric delivery, and measurable impact to ensure your business thrives in today’s fast-paced digital landscape.</p>
        </div>

        <div className="privacy-content">
            <h4>Customer Satisfaction is Our Priority</h4>
            <p>Our team understands the unique challenges faced by businesses. That’s why we invest time in understanding your goals and provide tailored solutions, ensuring a seamless and successful engagement from ideation to implementation.</p>
            <p>We aim to not only meet but exceed your expectations through responsive communication, milestone tracking, and timely deliveries.</p>
        </div>

        <div className="privacy-content">
            <h4>Our Commitment to Excellence</h4>
            <p>Every client engagement is an opportunity for us to deliver real-world solutions backed by technical expertise. Whether you're a startup looking for MVP development or an enterprise planning digital transformation, Vyapar Kranti has the right tools and talent for you.</p>
            <ul className="privacy-list">
                <li>Custom Web & App Development</li>
                <li>Digital Marketing & SEO Services</li>
                <li>Enterprise Resource Planning (ERP)</li>
                <li>Cloud & DevOps Solutions</li>
                <li>E-Commerce Platform Development</li>
            </ul>
        </div>

        <div className="privacy-content">
            <h4>Driving Organic Growth Through Technology</h4>
            <p>Our strategies are data-driven and goal-focused. We work to enhance your online presence, automate workflows, and drive conversions. By aligning your digital infrastructure with business objectives, we deliver meaningful and scalable results.</p>
        </div>

        <div className="privacy-content">
            <h2>Security and Data Retention</h2>
            <p>We prioritize your data’s security with enterprise-grade encryption, secure cloud hosting, and regular security audits. Project data is retained for up to 6 months post-delivery unless otherwise agreed, and is securely purged thereafter to protect confidentiality.</p>
        </div>

        <div className="privacy-content">
            <h2>Contact Us</h2>
            <p>If you have any questions regarding our services, policies, or wish to initiate a refund request, please contact us at:</p>
            <ul className="privacy-list">
                <li>Email: support@vyaparkranti.com</li>
                <li>Phone: +91-9958224825</li>
                <li>Website: <a href="https://vyaparkranti.com">https://vyaparkranti.com</a></li>
            </ul>
            <p>We are here to support your growth and ensure you get the best from your partnership with Vyapar Kranti.</p>
        </div>
    </div>
</section>

            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default RefundPolicy;
