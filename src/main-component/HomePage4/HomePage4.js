import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero4 from '../../components/hero4/hero4';
import Features2 from '../../components/Features2/Features2';
import About2 from '../../components/about2/about2';
import FunFact from '../../components/FunFact';
import ServiceSectionS4 from '../../components/ServiceSectionS4/ServiceSectionS4';
import CtaSection from '../../components/CtaSection/CtaSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import Scrollbar from '../../components/scrollbar/scrollbar';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import Pricing from '../../components/Pricing/Pricing';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection';


const HomePage4 = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero4 />
            <Features2 />
            <About2 />
            <ServiceSectionS4 />
            <PartnerSection styleClass={'style-three'}/>
            <CtaSection />
            <FunFact />
            <Testimonial />
            <TeamSectionS2 />
            <Pricing />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;