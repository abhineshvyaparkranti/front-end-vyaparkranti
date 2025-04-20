import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import FaqSection from './FaqSection';
import Question from './Question';

const FaqPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'FAQ'} pagesub={'FAQ'} />
            <FaqSection/>
            <Question/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default FaqPage;

