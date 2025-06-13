import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Pricing from '../../components/Pricing/Pricing';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
 
import Domain from '../../components/Domain/Domain';
import DomainSearch from '../../components/Domain/DomainSearch';

const DomainPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Domain '} pagesub={'Domain'} />
            {/* <Pricing sClass={'style-two'}/> */}
            {/* <Pricing sClass={'style-two'} showCompare={true} />
            <PackageComparison /> */}
            <Domain />
            {/* <DomainSearch /> */}
            <Subscribe />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default DomainPage;
