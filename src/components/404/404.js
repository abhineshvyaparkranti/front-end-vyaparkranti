import React from 'react'
import { Link } from 'react-router-dom'
import erimg from '../../images/resource/error.png'


const Error = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="error-section">
            <div className="auto-container">
                <div className="content">
                    <div className="error-image">
                        <img src={erimg} alt="" />
                    </div>
                    <h2>Oops.... Page Not Found</h2>
                    <div className="text">Sorry, but the page you are looking for does not existing</div>
                    <Link onClick={ClickHandler} to="/home" className="theme-btn btn-style-five"><span className="txt">Go to home page</span></Link>
                </div>
            </div>
        </section>
    )
}

export default Error;