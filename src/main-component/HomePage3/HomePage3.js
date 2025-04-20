import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import Hero3 from '../../components/hero3/hero3';
import Mission from '../../components/Mission/Mission';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import Analysis from '../../components/Analysis/Analysis';
import FunFact2 from '../../components/FunFact2/FunFact2';
import BuildStep from '../../components/BuildStep/BuildStep';
import WhyChoose2 from '../../components/WhyChoose2/WhyChoose2';
import VideoArea from '../../components/VideoArea/VideoArea';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo-3.png'

const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar3 Logo={Logo}/>
            <Hero3 />
            <Mission />
            <ServiceSectionS3 />
            <Analysis />
            <FunFact2 />
            <BuildStep />
            <WhyChoose2 />
            <VideoArea />
            <Testimonial2 tsClass={'testimonial-section-three'} tClass={'testimonial-block-three'}/>
            <Subscribe />
            <Footer fClass={'style-two'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;