import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact';
import CtaSection from '../../components/CtaSection/CtaSection';
import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

const ServicePage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Services'} pagesub={'Services'} />
            <ServiceSection />
            <PartnerSection styleClass={'style-three'}/>
            <CtaSection />
            <FunFact />
            <Subscribe />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
