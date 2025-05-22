import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Features from '../../components/Features';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Testimonial from '../../components/Testimonial/Testimonial';
import Pricing from '../../components/Pricing/Pricing';
import PartnerSection from '../../components/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import WhyChoose from './../../components/WhyChoose/WhyChoose';
import SeoSection from '../../components/SeoSection/SeoSection';
import BuildStep from '../../components/BuildStep/BuildStep';
import Dashboard from '../../components/Dashboard/Dashboard';

const HomePage = () => {

    
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <Features />
            {/* <About /> */}
            <About showReadMore={false} />
            {/* <ServiceSection /> */}
            <ServiceSection limit={6} showViewAll={true}/>
            <FunFact styleClass={'style-two margin-top'}/>
            {/* <CtaSection styleClass={'style-two'}/> */}
            <BuildStep />
            <WhyChoose />
            <SeoSection />
            {/* <TeamSection /> */}
            <Testimonial />
            {/* package start */}
            {/* <Pricing /> */}
            <Pricing showViewAll={true} />

            {/* package end */}
            <PartnerSection />
            <BlogSection />
            <Footer fClass={'style-three'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;




// chat part start 


// import React, { Fragment, useEffect } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import Hero from '../../components/hero/hero';
// import Features from '../../components/Features';
// import About from '../../components/about/about';
// import ServiceSection from '../../components/ServiceSection/ServiceSection';
// import FunFact from '../../components/FunFact';
// import CtaSection from '../../components/CtaSection/CtaSection';
// import TeamSection from '../../components/TeamSection/TeamSection';
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Testimonial from '../../components/Testimonial/Testimonial';
// import Pricing from '../../components/Pricing/Pricing';
// import PartnerSection from '../../components/PartnerSection';
// import BlogSection from '../../components/BlogSection/BlogSection';
// import Footer from '../../components/footer/Footer';
// import WhyChoose from './../../components/WhyChoose/WhyChoose';
// import SeoSection from '../../components/SeoSection/SeoSection';
// import BuildStep from '../../components/BuildStep/BuildStep';

// const HomePage = () => {
//   useEffect(() => {
//     const tawkScript = document.createElement("script");
//     tawkScript.src = 'https://embed.tawk.to/67f7b82fe6ecad190d7c030c/1iofqeupn';
//     tawkScript.async = true;
//     tawkScript.charset = 'UTF-8';
//     tawkScript.setAttribute('crossorigin', '*');
//     document.body.appendChild(tawkScript);

//     return () => {
//       // Optional: Cleanup script if component unmounts
//       document.body.removeChild(tawkScript);
//     };
//   }, []);

//   return (
//     <Fragment>
//       <Navbar />
//       <Hero />
//       <Features />
//       <About />
//       <ServiceSection />
//       <FunFact styleClass={'style-two margin-top'} />
//       {/* <CtaSection styleClass={'style-two'} /> */}
//       <BuildStep />
//       <WhyChoose />
//       <SeoSection />
//       <TeamSection />
//       <Testimonial />
//       <Pricing />
//       <PartnerSection />
//       <BlogSection />
//       <Footer fClass={'style-three'} />
//       <Scrollbar />
//     </Fragment>
//   );
// };

// export default HomePage;


// import React, { Fragment, useEffect } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import Hero from '../../components/hero/hero';
// import Features from '../../components/Features';
// import About from '../../components/about/about';
// import ServiceSection from '../../components/ServiceSection/ServiceSection';
// import FunFact from '../../components/FunFact';
// import CtaSection from '../../components/CtaSection/CtaSection';
// import TeamSection from '../../components/TeamSection/TeamSection';
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Testimonial from '../../components/Testimonial/Testimonial';
// import Pricing from '../../components/Pricing/Pricing';
// import PartnerSection from '../../components/PartnerSection';
// import BlogSection from '../../components/BlogSection/BlogSection';
// import Footer from '../../components/footer/Footer';
// import WhyChoose from './../../components/WhyChoose/WhyChoose';
// import SeoSection from '../../components/SeoSection/SeoSection';
// import BuildStep from '../../components/BuildStep/BuildStep';

// const HomePage = () => {
//   useEffect(() => {
//     // LiveChat widget setup
//     window.__lc = window.__lc || {};
//     window.__lc.license = 19138162;
//     window.__lc.integration_name = "manual_onboarding";
//     window.__lc.product_name = "livechat";

//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://cdn.livechatinc.com/tracking.js";
//     script.type = "text/javascript";
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <Fragment>
//       <Navbar />
//       <Hero />
//       <Features />
//       <About />
//       <ServiceSection />
//       <FunFact styleClass={'style-two margin-top'} />
//       {/* <CtaSection styleClass={'style-two'} /> */}
//       <BuildStep />
//       <WhyChoose />
//       <SeoSection />
//       <TeamSection />
//       <Testimonial />
//       <Pricing />
//       <PartnerSection />
//       <BlogSection />
//       <Footer fClass={'style-three'} />
//       <Scrollbar />
//     </Fragment>
//   );
// };

// export default HomePage;


// chat part end 