import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
// import Pricing from '../../components/Pricing/Pricing';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import PaymentOptions from './PaymentOption';
// import PackageComparison from './PackageComparison';

const PaymentPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Payment Option'} pagesub={'Payment'} />
            {/* <Pricing sClass={'style-two'}/> */}
            {/* <Pricing sClass={'style-two'} showCompare={true} /> */}
            {/* <PackageComparison /> */}
            <PaymentOptions />
            <Subscribe />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default PaymentPage;