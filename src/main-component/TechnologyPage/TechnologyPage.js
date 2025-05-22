import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
 
import Mission from '../../components/Mission/Mission';
 
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import TechnologySection from '../../components/Technology/TechnologySection';
 
 

const TechnologyPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Technology'} pagesub={'Technology'} />
            {/* <Mission sClass={'style-two margin-top'}/> */}
            
            <TechnologySection />
            
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default TechnologyPage;