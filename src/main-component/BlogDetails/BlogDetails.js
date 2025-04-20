
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import blogs from '../../api/blogs'
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection';


const BlogDetails = () => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'}/>
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <BlogSingle />
            <PartnerSection styleClass={'style-two'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;
