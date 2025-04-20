import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

import rv1 from '../../images/resource/author-1.png'
import rv2 from '../../images/resource/author-1.png'



const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (

        <div className="product-info-tabs">
            <div className="prod-tabs tabs-box">

                <ul className="tab-btns tab-buttons clearfix">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Description
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >

                                Reviews (2)
                            </NavLink>
                        </NavItem>
                    </Nav>
                </ul>

                <TabContent activeTab={activeTab} className='tabs-content'>
                    <TabPane tabId="1">
                        <div className="content">
                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. runway heading towards a streamlined cloud solution.</p>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence. </p>
                        </div>
                    </TabPane>
                    <TabPane tabId="2">

                        <div className="tab" id="prod-reviews">
                            <h2 className="title">2 Reviews For win Your Friends</h2>
                            <div className="comments-area">
                                <div className="comment-box">
                                    <div className="comment">
                                        <div className="author-thumb"><img src={rv1} alt="" /></div>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">Steven Rich – Sep 17, 2020</div>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star light"></span>
                                            </div>
                                            <div className="text">How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-box reply-comment">
                                    <div className="comment">
                                        <div className="author-thumb"><img src={rv2} alt="" /></div>
                                        <div className="comment-inner">
                                            <div className="comment-info clearfix">William Cobus – Aug 21, 2020</div>
                                            <div className="rating">
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star-half-empty"></span>
                                            </div>
                                            <div className="text">There anyone who loves or pursues or desires to obtain pain itself, because it is pain sed, because occasionally circumstances occur some great pleasure.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="shop-comment-form">
                                <h2>Add Your Comments</h2>
                                <div className="rating-box">
                                    <div className="text"> Your Rating:</div>
                                    <div className="rating">
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                    </div>
                                    <div className="rating">
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                        <Link to="/"><span className="fa fa-star"></span></Link>
                                    </div>
                                </div>
                                <form method="post" onSubmit={SubmitHandler}>
                                    <div className="row clearfix">
                                        <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                            <label>First Name *</label>
                                            <input type="text" name="username" placeholder="" required />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                            <label>Last Name*</label>
                                            <input type="email" name="email" placeholder="" required />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                            <label>Email*</label>
                                            <input type="text" name="number" placeholder="" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <label>Your Comments*</label>
                                            <textarea name="message" placeholder=""></textarea>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                            <button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="txt">Submit now</span></button>
                                        </div>

                                    </div>
                                </form>

                            </div>

                        </div>
                    </TabPane>
                </TabContent>
            </div>

        </div>
    );
}

export default ProductTabs;