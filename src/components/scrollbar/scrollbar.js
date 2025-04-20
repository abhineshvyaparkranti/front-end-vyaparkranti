import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialSidebar from '../SocialSidebar/SocialSidebar';

const Scrollbar = () => {

    return(
        <AnchorLink href='#scrool'>
            <div className="back-to-top scroll-to-target show-back-to-top">TOP</div>
            <SocialSidebar />
        </AnchorLink>
        
    )
}

export default Scrollbar;
