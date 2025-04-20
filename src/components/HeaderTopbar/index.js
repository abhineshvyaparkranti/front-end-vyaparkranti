import React from 'react'

const HeaderTopbar = () => {
    return (
        <div className="header-top">
            <div className="auto-container">
                <div className="inner-container clearfix">
                    <div className="top-left pull-left">
                        <div className="text">Welcome to Best IT Company Solution.</div>
                    </div>
                    <div className="top-right pull-right">
                        <ul className="info-list">
                            <li><span className="icon flaticon-maps-and-flags"></span> 16122 Collins Street West, Melbourne</li>
                            <li><span className="icon flaticon-big-envelope"></span><a href="mailto:Merix_itcompany@gmail.com"> Merix_itcompany@gmail.com</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;