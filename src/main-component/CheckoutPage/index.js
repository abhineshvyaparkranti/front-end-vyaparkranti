// import React, { Fragment } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import PageTitle from "../../components/pagetitle/PageTitle";
// import Scrollbar from '../../components/scrollbar/scrollbar'
// import Footer from '../../components/footer/Footer';
// import { Link } from "react-router-dom";
// import cImg1 from '../../images/resource/products/prod-thumb-1.jpg'
// import cImg2 from '../../images/resource/products/prod-thumb-2.jpg'

// const CheckoutPage = () => {
//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
//             <div className="checkout-page">
//                 <div className="auto-container">
//                     {/* <ul className="default-links">
//                         <li>Exisitng Customer? <Link to="/checkout">Click here to login</Link></li>
//                         <li>Have a coupon? <Link to="/checkout">Click here to enter your code</Link></li>
//                     </ul> */}
//                     <div className="checkout-form">
//                         <form method="post" action="checkout.html">
//                             <div className="row clearfix">
//                                 <div className="column col-md-6 col-sm-12 col-xs-12">
//                                     <div className="checkout-title">
//                                         <h2>Billing Address</h2>
//                                     </div>
//                                     <div className="row clearfix">

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Country <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-6 col-sm-6 col-xs-12">
//                                             <div className="field-label">First Name <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-6 col-sm-6 col-xs-12">
//                                             <div className="field-label">Last Name <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Address <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Town / City <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Contact Info <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder="Email Address"/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <input type="text" name="field-name" value="" placeholder="Phone Number"/>
//                                         </div>

//                                         {/* <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
//                                             <div className="check-box"><input type="checkbox" name="shipping-option" id="account-option"/> &ensp; <label for="account-option">Create an account?</label></div>
//                                         </div> */}

//                                     </div>
//                                 </div>
//                                 <div className="column col-md-6 col-sm-12 col-xs-12">
//                                     <div className="checkout-title">
//                                         <h2>Other Address</h2>
//                                     </div>

//                                     <div className="row clearfix">

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Country <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-6 col-sm-6 col-xs-12">
//                                             <div className="field-label">First Name <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-6 col-sm-6 col-xs-12">
//                                             <div className="field-label">Last Name <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Address <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Town / City <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Other Notes</div>
//                                             <textarea className="" placeholder="Special notes about your order..." ></textarea>
//                                         </div>

//                                     </div>

//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="lower-content">
//                         <div className="row clearfix">
//                             <div className="order-column column col-md-6 col-sm-12 col-xs-12">
//                                 <div className="checkout-title">
//                                     <h2>Order Summary</h2>
//                                 </div>
//                                 <div className="cart-outer">
//                                     <table className="cart-table">
//                                         <thead className="cart-header">
//                                             <tr>
//                                                 <th className="prod-column">Product</th>
//                                                 <th>Quantity</th>
//                                                 <th>Total</th>
//                                             </tr>
//                                         </thead>

//                                         <tbody>

//                                             <tr>
//                                                 <td className="prod-column">
//                                                     <div className="column-box">
//                                                         <figure className="prod-thumb"><img src={cImg1} alt=""/></figure>
//                                                         <h4 className="prod-title">Book Item 01</h4>
//                                                     </div>
//                                                 </td>
//                                                 <td className="qty"><input type="text" /></td>
//                                                 <td className="sub-total">$34.99</td>
//                                             </tr>

//                                             <tr>
//                                                 <td className="prod-column">
//                                                     <div className="column-box">
//                                                         <figure className="prod-thumb"><img src={cImg2} alt=""/></figure>
//                                                         <h4 className="prod-title">Book Item 02</h4>
//                                                     </div>
//                                                 </td>
//                                                 <td className="qty"><input type="text" /></td>
//                                                 <td className="sub-total">$29.99</td>
//                                             </tr>

//                                         </tbody>

//                                     </table>
//                                 </div>
//                             </div>
//                             <div className="column col-md-6 col-sm-12 col-xs-12">
//                                 <div className="checkout-title">
//                                     <h2>Cart Totals</h2>
//                                 </div>
//                                 <ul className="totals-table">
//                                     <li className="clearfix"><span className="col title">Cart Subtotal</span><span className="col">$146.00</span></li>
//                                     <li className="clearfix"><span className="col title">Shipping and Handling</span><span className="col total">Free Shipping</span></li>
//                                     <li className="clearfix"><span className="col title">Order Total</span><span className="col total">$146.00</span></li>
//                                 </ul>

//                                 <div className="payment-options">
//                                     <ul>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-1" />
//                                                     <label for="payment-1"><strong>Direct Bank Transfer</strong><span className="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-3"/>
//                                                     <label for="payment-3"><strong>Paypal <Link to="/checkout">What is Paypal</Link></strong></label>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                     <button type="button" className="theme-btn btn-style-two"><span className="txt">Place Order</span></button>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     )
// };

// export default CheckoutPage;

// Modified CheckoutPage.js
import React, { Fragment, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import { Link } from "react-router-dom";
import cImg1 from '../../images/resource/products/prod-thumb-1.jpg';

const CheckoutPage = () => {
    const location = useLocation();
    const [packageData, setPackageData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        // Get package data from navigation state
        if (location.state && location.state.selectedPackage) {
            setPackageData(location.state.selectedPackage);
        }
    }, [location]);
    
    // Calculate order totals
    const calculateSubtotal = () => {
        if (!packageData) return 0;
        return (parseFloat(packageData.price) * quantity).toFixed(2);
    };
    
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
            <div className="checkout-page">
                <div className="auto-container">
                     <div className="checkout-form">
                        <form method="post" action="checkout.html">
                            <div className="row clearfix">
                                <div className="column col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkout-title">
                                        <h2>Billing Address</h2>
                                    </div>
                                    <div className="row clearfix">

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Country <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">First Name <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Last Name <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Address <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Town / City <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Contact Info <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder="Email Address"/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <input type="text" name="field-name" value="" placeholder="Phone Number"/>
                                        </div>

                                        {/* <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="check-box"><input type="checkbox" name="shipping-option" id="account-option"/> &ensp; <label for="account-option">Create an account?</label></div>
                                        </div> */}

                                    </div>
                                </div>
                                <div className="column col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkout-title">
                                        <h2>Other Address</h2>
                                    </div>

                                    <div className="row clearfix">

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Country <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">First Name <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Last Name <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Address <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Town / City <sup>*</sup></div>
                                            <input type="text" name="field-name" value="" placeholder=""/>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Other Notes</div>
                                            <textarea className="" placeholder="Special notes about your order..." ></textarea>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="lower-content">
                        <div className="row clearfix">
                            <div className="order-column column col-md-6 col-sm-12 col-xs-12">
                                <div className="checkout-title">
                                    <h2>Order Summary</h2>
                                </div>
                                <div className="cart-outer">
                                    <table className="cart-table">
                                        <thead className="cart-header">
                                            <tr>
                                                <th className="prod-column">Product</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {packageData ? (
                                                <tr>
                                                    <td className="prod-column">
                                                        <div className="column-box">
                                                            <figure className="prod-thumb">
                                                                <img src={cImg1} alt={packageData.title} />
                                                            </figure>
                                                            <h4 className="prod-title">{packageData.title} Package</h4>
                                                        </div>
                                                    </td>
                                                    <td className="qty">
                                                        <input 
                                                            type="number" 
                                                            min="1" 
                                                            value={quantity} 
                                                            onChange={handleQuantityChange} 
                                                        />
                                                    </td>
                                                    <td className="sub-total">${calculateSubtotal()}</td>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" align="center">
                                                        No package selected. Please go back to the pricing page.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="column col-md-6 col-sm-12 col-xs-12">
                                <div className="checkout-title">
                                    <h2>Cart Totals</h2>
                                </div>
                                <ul className="totals-table">
                                    <li className="clearfix">
                                        <span className="col title">Cart Subtotal</span>
                                        <span className="col">${calculateSubtotal()}</span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="col title">Shipping and Handling</span>
                                        <span className="col total">Free Shipping</span>
                                    </li>
                                    <li className="clearfix">
                                        <span className="col title">Order Total</span>
                                        <span className="col total">${calculateSubtotal()}</span>
                                    </li>
                                </ul>

                                <div className="payment-options">
                                    {/* Payment options remain the same */}
                                    <ul>
                                        <li>
                                            <div className="radio-option">
                                                <input type="radio" name="payment-group" id="payment-1" />
                                                <label htmlFor="payment-1">
                                                    <strong>Direct Bank Transfer</strong>
                                                    <span className="small-text">
                                                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="radio-option">
                                                <input type="radio" name="payment-group" id="payment-3"/>
                                                <label htmlFor="payment-3">
                                                    <strong>Paypal <Link to="/checkout">What is Paypal</Link></strong>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <button 
                                        type="button" 
                                        className="theme-btn btn-style-two"
                                        disabled={!packageData}
                                    >
                                        <span className="txt">Place Order</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default CheckoutPage;
