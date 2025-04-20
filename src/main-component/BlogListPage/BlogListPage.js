import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import BlogPageSec from '../../components/BlogPageSec/BlogPageSec';
import PartnerSection from '../../components/PartnerSection';

const BlogListPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogPageSec/>
            <PartnerSection styleClass={'style-two'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogListPage;

