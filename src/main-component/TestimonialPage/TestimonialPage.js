import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Testimonial from '../../components/Testimonial/Testimonial';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

const TestimonialPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Testimonials'} pagesub={'Testimonials'} />
            <Testimonial/>
            <Subscribe />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default TestimonialPage;
