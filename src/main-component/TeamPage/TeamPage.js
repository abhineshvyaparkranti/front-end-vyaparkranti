import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';

const TeamPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Teams'} pagesub={'Team'} />
            <TeamSectionS2/>
            <TeamSection/>
            <Subscribe />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
