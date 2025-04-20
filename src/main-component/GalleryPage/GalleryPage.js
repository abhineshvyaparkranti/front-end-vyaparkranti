import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
 
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
 
 
 
 

const GalleryPage = (props) => {

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery Page'} />
            <Gallery />
             
           
          
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default GalleryPage;