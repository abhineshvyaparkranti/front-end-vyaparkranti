import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import WhyChoose3 from '../../components/WhyChoose3/WhyChoose3';
import FunFact3 from '../../components/FunFact3/FunFact3';
import Mission from '../../components/Mission/Mission';
import BuildStep from '../../components/BuildStep/BuildStep';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import WhyChoose2 from '../../components/WhyChoose2/WhyChoose2';
import Subscribe from '../../components/Subscribe/Subscribe';
import TeamSectionTwo from '../../components/TeamSection/TeamSectionTwo';
import About from '../../components/about/about';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';

const AboutPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'About Us'} pagesub={'About Us'} />
            <About showLearnMore={false} />
            {/* <Mission sClass={'style-two margin-top'}/> */}
            
            
             <BuildStep />
            {/* <TeamSection /> */}
            <TeamSectionTwo />
            <TeamSectionS2 />
             <WhyChoose3 />
            {/* <FunFact3 /> */}
            
            {/* <WhyChoose2 /> */}
            {/* <Subscribe /> */}
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
