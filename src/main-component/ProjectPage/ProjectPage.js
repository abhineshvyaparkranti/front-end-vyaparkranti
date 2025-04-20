import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

const ProjectRightPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'} />
            <ProjectSection/>
            <Subscribe />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectRightPage;
