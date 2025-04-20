import React from 'react'
import { Link } from 'react-router-dom'
import pIcon1 from '../../images/background/pattern-16.png'
import pIcon2 from '../../images/main-slider/pattern-1.png'
import pIcon3 from '../../images/background/pattern-17.png'
import pIcon4 from '../../images/background/pattern-18.png'
import pIcon5 from '../../images/icons/cross-icon.png'

const PageTitle = (props) => {
    return (
        <section className="page-title" style={{ backgroundImage: `url(${pIcon1})` }}>
            <div className="pattern-layer-one" style={{ backgroundImage: `url(${pIcon2})` }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: `url(${pIcon3})` }}></div>
            <div className="pattern-layer-three" style={{ backgroundImage: `url(${pIcon4})` }}></div>
            <div className="pattern-layer-four" style={{ backgroundImage: `url(${pIcon5})` }}></div>
            <div className="auto-container">
                <h2>{props.pageTitle}</h2>
                <ul className="page-breadcrumb">
                    <li><Link to="/home">Home</Link></li>
                    <li><span>{props.pagesub}</span></li>
                </ul>
            </div>
        </section>
    )
}

export default PageTitle;