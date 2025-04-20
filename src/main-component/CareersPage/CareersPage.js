import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
//import WhyChoose3 from '../../components/WhyChoose3/WhyChoose3';
//import FunFact3 from '../../components/FunFact3/FunFact3';
import Mission from '../../components/Mission/Mission';
//import BuildStep from '../../components/BuildStep/BuildStep';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CareerPage from '../../components/CareerPage/CareerPage';
import GrowthBenefits from '../../components/CareerPage/GrowthBenefits';
import CompanyCulture from '../../components/CareerPage/CompanyCulture';
//import WhyChoose2 from '../../components/WhyChoose2/WhyChoose2';
//import Subscribe from '../../components/Subscribe/Subscribe';
//import TeamSection from '../../components/TeamSection/TeamSection';

const CareersPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Careers'} pagesub={'Careers'} />
            {/* <Mission sClass={'style-two margin-top'}/> */}
            <GrowthBenefits />
            <CareerPage />
            <CompanyCulture />
            
            {/* <WhyChoose3 />
            <TeamSection /> */}
            {/* <FunFact3 />
            <BuildStep />
            <WhyChoose2 /> */}
            {/* <Subscribe /> */}
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default CareersPage;