import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Pricing from '../../components/Pricing/Pricing';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

const PricingPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Pricing Plan'} pagesub={'Pricing'} />
            <Pricing sClass={'style-two'}/>
            <Subscribe />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default PricingPage;
