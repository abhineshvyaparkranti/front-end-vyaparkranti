import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const PrivacyPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Privacy Policy'} pagesub={'Privacy Policy'} />
            <section className="privacy-section">
    <div className="auto-container">
        <div className="privacy-content">
            <h2>Privacy Policy</h2>
            <p>At Vyapar Kranti, we are committed to protecting your privacy. This policy outlines how we handle your data, ensuring it remains secure and used only for its intended purpose. Our practices align with the highest standards of data protection.</p>
            {/* <div className="date">Updated May 23, 2025</div> */}
            <p>We collect only the necessary information to provide our services effectively, including web development, digital marketing, and IT consulting. Data is stored securely and used solely to enhance our services and communication with clients.</p>
            <p>Your information is never sold or shared with third parties without your consent, except where required by law. We use modern security technologies to ensure data integrity and confidentiality.</p>
            <h2>Overview</h2>
            <p>Vyapar Kranti offers a suite of IT solutions tailored for businesses of all sizes. From custom software development to e-commerce solutions and cloud services, we help clients digitize operations and grow efficiently. This privacy policy ensures that as you grow with us, your trust is protected.</p>
        </div>

        <div className="privacy-content">
            <h4>Client-Centric Solutions for Modern Businesses</h4>
            <p>We prioritize your digital journey by offering scalable and flexible IT solutions. Our team ensures seamless communication, transparent processes, and custom strategies tailored to meet your specific business goals.</p>
            <p>We understand how valuable your time and trust are, which is why we invest in technology that improves user experience, data transparency, and support responsiveness. Our client relationships are built on clarity and mutual growth.</p>
            <p>Your data may be used for account management, customer support, service updates, and internal analytics, all aimed at enhancing your experience and outcomes.</p>
        </div>

        <div className="privacy-content">
            <h4>Consultative Approach to IT Services</h4>
            <p>Every engagement begins with a thorough understanding of your business objectives. Our IT consultants provide actionable strategies that align technology with your goals, ensuring sustainable growth and operational efficiency.</p>
            <p>Whether it's website design, digital marketing, or software deployment, we use your input to create solutions that drive results while maintaining data privacy and compliance.</p>
            <ul className="privacy-list">
                <li>Custom Web Development</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Digital Marketing Campaigns</li>
                <li>Business Process Automation</li>
            </ul>
        </div>

        <div className="privacy-content">
            <h4>Smart Campaigns That Drive Results</h4>
            <p>Our digital marketing strategies are data-driven and results-oriented. We target the right audience using ethical SEO practices, paid advertising, and content marketing that respects user privacy and adheres to platform guidelines.</p>
            <p>We ensure campaign performance data is used solely to improve marketing effectiveness and is never shared externally. All marketing tools are configured with privacy-first settings.</p>
        </div>

        <div className="privacy-content">
            <h2>Security and Data Retention</h2>
            <p>Vyapar Kranti uses secure servers, encryption, and firewall protection to keep your data safe. We retain information only as long as necessary to fulfill our services, or as required by applicable laws. Regular audits ensure our security protocols remain effective and up-to-date.</p>
        </div>

        <div className="privacy-content">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or your personal data, please contact us at <a href="mailto:sales@vyaparkranti.com">sales@vyaparkranti.com</a>. We are happy to clarify our practices and ensure your concerns are addressed promptly and respectfully.</p>
        </div>
    </div>
</section>

            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PrivacyPage;
