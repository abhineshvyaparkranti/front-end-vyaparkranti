import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Pricing from '../../components/Pricing/Pricing';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import PackageComparison from '../PricingPage/PackageComparison';
 

const PaymentFailPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Hosting Plan'} pagesub={'Hosting'} />
            {/* <Pricing sClass={'style-two'}/> */}
            <Pricing sClass={'style-two'} showCompare={true} />
            <PackageComparison />
            <Subscribe />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default PaymentFailPage;