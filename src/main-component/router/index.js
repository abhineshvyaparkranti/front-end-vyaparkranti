import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import AboutPage from '../AboutPage/AboutPage';
import PricingPage from '../PricingPage/PricingPage';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import BlogPage from '../BlogPage/BlogPage'
import BlogDetails from '../BlogDetails/BlogDetails';
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogListPage from '../BlogListPage/BlogListPage';
import TermPage from '../TermPage/TermPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ServicePage from '../ServicePage/ServicePage';
import TeamPage from '../TeamPage/TeamPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import AuthPage from '../AuthPage/AuthPage';
import FaqPage from '../FaqPage';
import ComingSoon from '../ComingSoon/ComingSoon';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectLeftPage from '../ProjectLeftPage/ProjectLeftPage';
import ProjectRightPage from '../ProjectRightPage/ProjectRightPage';
//import CareerPage from '../../components/CareerPage/CareerPage';
import CareersPage from '../CareersPage/CareersPage';
import Dashboard from '../../components/Dashboard/Dashboard';
// import BlogSingletest from '../BlogDetails/BlogSingletest';
 
import GalleryPage from '../GalleryPage/GalleryPage';
import ContactFormModal from '../../components/ContactFormModal/ContactFormModal';
import TechnologyPage from '../TechnologyPage/TechnologyPage';
import RefundPolicy from '../TermPage/RefundPolicy';
import PaymentPage from '../PaymentPage/PaymentPage';
import DomainPage from '../DomainPage/DomainPage';
import PaymentSucessPage from '../PaymentSucessPage/PaymentSucessPage';
import PaymentFailPage from '../PaymentFailPage/PaymentFailPage';
// import Faq from '../../components/Faq/Faq';
// import PricingSinglePage from '../../components/Pricing/PricingSinglePage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home2" element={<HomePage2 />} />
          <Route path="home3" element={<HomePage3 />} />
          <Route path="home4" element={<HomePage4 />} />
          <Route path="home5" element={<HomePage5 />} />
          <Route path="home6" element={<HomePage6 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path='price' element={<PricingPage />} />
          <Route path="services" element={<ServicePage />} />
          {/* <Route path="service-single/:slug" element={<ServiceSinglePage />} /> */}
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />

          <Route path="projects" element={<ProjectPage />} />
          <Route path="projects-left-sidebar" element={<ProjectLeftPage />} />
          <Route path="projects-right-sidebar" element={<ProjectRightPage />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="terms" element={<TermPage />} />
           <Route path="refund" element={<RefundPolicy />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="comming-soon" element={<ComingSoon />} />
          <Route path='shopping-cart' element={<CartPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='product-single/:slug' element={<ProductSinglePage />} />
          <Route path='login' element={<AuthPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='not-found' element={<ErrorPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-classNameic' element={<BlogListPage />} />
          <Route path='blog' element={<BlogPage />} />
          {/* <Route path='blog-details/:slug' element={<BlogDetails />} /> */}
          <Route path='blog-details/:slug' element={<BlogDetails />} />
          {/* <Route path="/careers" component={CareerPage} /> */}
          <Route path='/careers' element={<CareersPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/ContactFormModal' element={<ContactFormModal />} />
          <Route path='/technology' element={<TechnologyPage />} />
          {/* <Route path='/package-page' element={<PricingSinglePage />} /> */}
          <Route path='/package-page' element={<PricingPage />} />
          <Route path='/domain' element={<DomainPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/laravel/payment/success' element={<PaymentSucessPage />} />
          <Route path='/laravel/payment/error' element={<PaymentFailPage />} />
            {/* <Route path='/faq' element={<Faq />} /> */}


          {/* <Route path="/blog-details/:id" element={<BlogSingletest />} /> */}


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
