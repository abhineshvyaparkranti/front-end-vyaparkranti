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

// import React, { Fragment, useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import PageTitle from "../../components/pagetitle/PageTitle";
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Footer from '../../components/footer/Footer';
// import { Link } from "react-router-dom";
// import cImg1 from '../../images/resource/products/prod-thumb-1.jpg';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const [packageData, setPackageData] = useState(null);
//     const [quantity, setQuantity] = useState(1);
    
//     useEffect(() => {
//         // Get package data from navigation state
//         if (location.state && location.state.selectedPackage) {
//             setPackageData(location.state.selectedPackage);
//         }
//     }, [location]);
    
//     // Calculate order totals
//     const calculateSubtotal = () => {
//         if (!packageData) return 0;
//         return (parseFloat(packageData.price) * quantity).toFixed(2);
//     };
    
//     const handleQuantityChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         if (!isNaN(value) && value > 0) {
//             setQuantity(value);
//         }
//     };

//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
//             <div className="checkout-page">
//                 <div className="auto-container">
//                      <div className="checkout-form">
//                         <form method="post" action="checkout.html">
//                             <div className="row clearfix">
//                                 <div className="column col-md-6 col-sm-12 col-xs-12">
//                                     <div className="checkout-title">
//                                         <h2>Billing Address</h2>
//                                     </div>
//                                     <div className="row clearfix">

//                                         {/* <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Country <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div> */}

//                                         {/* <div className="form-group col-md-6 col-sm-6 col-xs-12">
//                                             <div className="field-label">Name <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-6 col-sm-6 col-xs-12">
//                                             <div className="field-label">Last Name <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
//                                             <div className="field-label">Email <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         <div className="form-group col-md-6 col-sm-6 col-xs-12">
//                                             <div className="field-label">Mobile <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div> */}

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Name <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Email <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Phone <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

//                                         {/* <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div> */}

//                                         {/* <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Town / City <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div> */}

//                                         {/* <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Contact Info <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder="Email Address"/>
//                                         </div>

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <input type="text" name="field-name" value="" placeholder="Phone Number"/>
//                                         </div> */}

//                                         {/* <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
//                                             <div className="check-box"><input type="checkbox" name="shipping-option" id="account-option"/> &ensp; <label for="account-option">Create an account?</label></div>
//                                         </div> */}

//                                     </div>
//                                 </div>

                                
//                                 {/* <div className="column col-md-6 col-sm-12 col-xs-12">
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

//                                 </div> */}

//                                 <div className="order-column column col-md-6 col-sm-12 col-xs-12">
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
//                                             {packageData ? (
//                                                 <tr>
//                                                     <td className="prod-column">
//                                                         <div className="column-box">
//                                                             <figure className="prod-thumb">
//                                                                 <img src={cImg1} alt={packageData.title} />
//                                                             </figure>
//                                                             <h4 className="prod-title">{packageData.title} Package</h4>
//                                                         </div>
//                                                     </td>
//                                                     <td className="qty" style={{color: 'black'}}>
//                                                         <input 
//                                                             type="number" 
//                                                             min="1" 
//                                                             value={quantity} 
//                                                             onChange={handleQuantityChange} 
//                                                             style={{ width: '60px', backgroundColor: 'white', color: 'black' }}
//                                                         />
//                                                     </td>
//                                                     <td className="sub-total">{calculateSubtotal()}</td>
//                                                 </tr>
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="3" align="center">
//                                                         No package selected. Please go back to the pricing page.
//                                                     </td>
//                                                 </tr>
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                             </div>

                            
//                         </form>

                        

//                     </div>
                    
                    
//                     <div className="lower-content">
//                         <div className="row clearfix">
                            

//                              <div className="column col-md-6 col-sm-12 col-xs-12">
//                                 <div className="checkout-title">
//                                     <h2>Cart Totals</h2>
//                                 </div>
//                                 <ul 
//                                 className="totals-table"
//                                 style={{
//                                     listStyle: 'none',
//                                     padding: 0,
//                                     margin: 0,
//                                     border: '1px solid #ddd',
//                                     borderRadius: '4px',
//                                     backgroundColor: '#f9f9f9',
//                                     marginBottom: '10px'
//                                 }}
//                             >                                     
//                                 <li 
//                                     className="clearfix"
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                         padding: '12px 16px',
//                                         borderBottom: '1px solid #eee',
//                                         boxSizing: 'border-box',
                                         
//                                     }}
//                                 >                                         
//                                     <span 
//                                         className="col title"
//                                         style={{
//                                             fontWeight: '500',
//                                             color: '#333',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     >
//                                         Cart Subtotal
//                                     </span>                                         
//                                     <span 
//                                         className="col"
//                                         style={{
//                                             fontWeight: '600',
//                                             color: '#666',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     >
//                                         {calculateSubtotal()}
//                                     </span>                                     
//                                 </li>                                                                           
//                                 <li 
//                                     className="clearfix"
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                         padding: '12px 16px',
//                                         backgroundColor: '#f0f0f0',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >                                         
//                                     <span 
//                                         className="col title"
//                                         style={{
//                                             fontWeight: '600',
//                                             color: '#333',
//                                             fontSize: '16px',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     >
//                                         Order Total
//                                     </span>                                         
//                                     <span 
//                                         className="col total"
//                                         style={{
//                                             fontWeight: '700',
//                                             color: '#2c5aa0',
//                                             fontSize: '18px',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     >
//                                         {calculateSubtotal()}
//                                     </span>                                     
//                                 </li>                                 
//                             </ul>

//                                 <div className="payment-options">
//                                     {/* Payment options remain the same */}
//                                     <ul>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-1" />
//                                                 {/* <label htmlFor="payment-1">
//                                                     <strong>Direct Bank Transfer</strong>
//                                                     <span className="small-text">
//                                                         Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
//                                                     </span>
//                                                 </label> */}
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-3"/>
//                                                 <label htmlFor="payment-3">
//                                                     <strong>Pay <Link to="/checkout"></Link></strong>
//                                                 </label>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                     <button 
//                                         type="button" 
//                                         className="theme-btn btn-style-two"
//                                         disabled={!packageData}
//                                     >
//                                         <span className="txt">Place Order</span>
//                                     </button>
//                                 </div>
//                             </div>
//                             {/* <div className="column col-md-6 col-sm-12 col-xs-12">
//                                 <div className="checkout-title">
//                                     <h2>Cart Totals</h2>
//                                 </div>
//                                 <ul className="totals-table">
//                                     <li className="clearfix">
//                                         <span className="col title">Cart Subtotal</span>
//                                         <span className="col">{calculateSubtotal()}</span>
//                                     </li>
//                                      <li className="clearfix">
//                                         <span className="col title">Shipping and Handling</span>
//                                         <span className="col total">Free Shipping</span>
//                                     </li> 
//                                     <li className="clearfix">
//                                         <span className="col title">Order Total</span>
//                                         <span className="col total">{calculateSubtotal()}</span>
//                                     </li>
//                                 </ul>

//                                 <div className="payment-options">
//                                     Payment options remain the same
//                                     <ul>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-1" />
//                                                 <label htmlFor="payment-1">
//                                                     <strong>Direct Bank Transfer</strong>
//                                                     <span className="small-text">
//                                                         Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
//                                                     </span>
//                                                 </label>
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-3"/>
//                                                 <label htmlFor="payment-3">
//                                                     <strong>Pay <Link to="/checkout"></Link></strong>
//                                                 </label>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                     <button 
//                                         type="button" 
//                                         className="theme-btn btn-style-two"
//                                         disabled={!packageData}
//                                     >
//                                         <span className="txt">Place Order</span>
//                                     </button>
//                                 </div>
//                             </div> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     );
// };

// export default CheckoutPage;


// import React, { Fragment, useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import PageTitle from "../../components/pagetitle/PageTitle";
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Footer from '../../components/footer/Footer';
// import { Link } from "react-router-dom";
// import cImg1 from '../../images/resource/products/prod-thumb-1.jpg';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const [packageData, setPackageData] = useState(null);
//     const [quantity, setQuantity] = useState(1);
    
//     useEffect(() => {
//         // Get package data from navigation state
//         if (location.state && location.state.selectedPackage) {
//             setPackageData(location.state.selectedPackage);
//         }
//     }, [location]);
    
//     // Calculate order totals
//     const calculateSubtotal = () => {
//         if (!packageData) return 0;
//         return (parseFloat(packageData.price) * quantity).toFixed(2);
//     };
    
//     const handleQuantityChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         if (!isNaN(value) && value > 0) {
//             setQuantity(value);
//         }
//     };

//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
//             <div className="checkout-page">
//                 <div className="auto-container">
//                      <div className="checkout-form">
//                         <form method="post" action="checkout.html">
//                             <div className="row clearfix">
//                                 <div className="column col-md-6 col-sm-12 col-xs-12">
//                                     <div className="checkout-title">
//                                         <h2>Billing Address</h2>
//                                     </div>
//                                     <div className="row clearfix">

                                       

//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Name <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Email <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Phone <sup>*</sup></div>
//                                             <input type="text" name="field-name" value="" placeholder=""/>
//                                         </div>

                                        

                                         
//                                     </div>
//                                 </div>

                                
                                

//                                 <div className="order-column column col-md-6 col-sm-12 col-xs-12">
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
//                                             {packageData ? (
//                                                 <tr>
//                                                     <td className="prod-column">
//                                                         <div className="column-box">
//                                                             <figure className="prod-thumb">
//                                                                 <img src={cImg1} alt={packageData.title} />
//                                                             </figure>
//                                                             <h4 className="prod-title">{packageData.title} Package</h4>
//                                                         </div>
//                                                     </td>
//                                                     <td className="qty" style={{color: 'black'}}>
//                                                         <input 
//                                                             type="number" 
//                                                             min="1" 
//                                                             value={quantity} 
//                                                             onChange={handleQuantityChange} 
//                                                             style={{ width: '60px', backgroundColor: 'white', color: 'black' }}
//                                                         />
//                                                     </td>
//                                                     <td className="sub-total">{calculateSubtotal()}</td>
//                                                 </tr>
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="3" align="center">
//                                                         No package selected. Please go back to the pricing page.
//                                                     </td>
//                                                 </tr>
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                             </div>

                            
//                         </form>

                        

//                     </div>
                    
                    
//                     <div className="lower-content">
//                         <div className="row clearfix">
                            

//                              <div className="column col-md-6 col-sm-12 col-xs-12">
//                                 <div className="checkout-title">
//                                     <h2>Cart Totals</h2>
//                                 </div>
//                                 <ul 
//                                 className="totals-table"
//                                 style={{
//                                     listStyle: 'none',
//                                     padding: 0,
//                                     margin: 0,
//                                     border: '1px solid #ddd',
//                                     borderRadius: '4px',
//                                     backgroundColor: '#f9f9f9',
//                                     marginBottom: '10px'
//                                 }}
//                             >                                     
//                                 <li 
//                                     className="clearfix"
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                         padding: '12px 16px',
//                                         borderBottom: '1px solid #eee',
//                                         boxSizing: 'border-box',
                                         
//                                     }}
//                                 >                                         
//                                     <span 
//                                         className="col title"
//                                         style={{
//                                             fontWeight: '500',
//                                             color: '#333',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     >
//                                         Cart Subtotal
//                                     </span>                                         
//                                     <span 
//                                         className="col"
//                                         style={{
//                                             fontWeight: '600',
//                                             color: '#666',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     >
//                                         {calculateSubtotal()}
//                                     </span>                                     
//                                 </li>                                                                           
//                                 <li 
//                                     className="clearfix"
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                         padding: '12px 16px',
//                                         backgroundColor: '#f0f0f0',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >                                         
//                                     <span 
//                                         className="col title"
//                                         style={{
//                                             fontWeight: '600',
//                                             color: '#333',
//                                             fontSize: '16px',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     >
//                                         Order Total
//                                     </span>                                         
//                                     <span 
//                                         className="col total"
//                                         style={{
//                                             fontWeight: '700',
//                                             color: '#2c5aa0',
//                                             fontSize: '18px',
//                                             boxSizing: 'border-box'
//                                         }}
//                                     >
//                                         {calculateSubtotal()}
//                                     </span>                                     
//                                 </li>                                 
//                             </ul>

//                                 <div className="payment-options">
//                                     {/* Payment options remain the same */}
//                                     <ul>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-1" />
                                                
//                                             </div>
//                                         </li>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-3"/>
//                                                 <label htmlFor="payment-3">
//                                                     <strong>CashFree <Link to="/checkout"></Link></strong>
//                                                 </label>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                     <button 
//                                         type="button" 
//                                         className="theme-btn btn-style-two"
//                                         disabled={!packageData}
//                                     >
//                                         <span className="txt">Pay now</span>
//                                     </button>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     );
// };

// export default CheckoutPage;

// import React, { Fragment, useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../../components/Navbar/Navbar';
// import PageTitle from "../../components/pagetitle/PageTitle";
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Footer from '../../components/footer/Footer';
// import { Link } from "react-router-dom";
// import cImg1 from '../../images/resource/products/prod-thumb-1.jpg';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const [packageData, setPackageData] = useState(null);
//     const [quantity, setQuantity] = useState(1);
//     const [loading, setLoading] = useState(false);

    
//     // Form data state
//     const [formData, setFormData] = useState({
//         client_name: '',
//         email: '',
//         phone: '',
//         package_type: '',
//         package_class: '',
//         amount: 0
//     });
    
//     // Form validation errors
//     const [errors, setErrors] = useState({});
    
//     useEffect(() => {
//         // Get package data from navigation state
//         if (location.state && location.state.selectedPackage) {
//             setPackageData(location.state.selectedPackage);
//             setFormData(prev => ({
//                 ...prev,
//                 package_type: location.state.selectedPackage.title || '',
//                 package_class: location.state.selectedPackage.class || 'standard',
//                 amount: parseFloat(location.state.selectedPackage.price) || 0
//             }));
//         }
//     }, [location]);
    
//     // Update amount when quantity changes
//     useEffect(() => {
//         if (packageData) {
//             setFormData(prev => ({
//                 ...prev,
//                 amount: parseFloat(packageData.price) * quantity
//             }));
//         }
//     }, [quantity, packageData]);
    
//     // Calculate order totals
//     const calculateSubtotal = () => {
//         if (!packageData) return '0.00';
//         return (parseFloat(packageData.price) * quantity).toFixed(2);
//     };
    
//     const handleQuantityChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         if (!isNaN(value) && value > 0) {
//             setQuantity(value);
//         }
//     };
    
//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
        
//         // Clear error when user starts typing
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };
    
//     // Form validation
//     const validateForm = () => {
//         const newErrors = {};
        
//         if (!formData.client_name.trim()) {
//             newErrors.client_name = 'Name is required';
//         }
        
//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email is invalid';
//         }
        
//         if (!formData.phone.trim()) {
//             newErrors.phone = 'Phone is required';
//         } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//             newErrors.phone = 'Phone number must be 10 digits';
//         }
        
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };
    
//     // Handle payment processing
//     const handlePayment = async () => {
//         if (!validateForm()) {
//             return;
//         }
        
//         if (!packageData) {
//             alert('Please select a package first');
//             return;
//         }
        
//         setLoading(true);
        
//         try {
//             // Prepare API payload
//             const payload = {
//                 client_name: formData.client_name.trim(),
//                 email: formData.email.trim(),
//                 phone: formData.phone.trim(),
//                 package_type: formData.package_type,
//                 package_class: formData.package_class,
//                 amount: formData.amount
//             };
            
//             console.log('Sending payment request:', payload);
            
//             // Make API call to your Laravel backend
//             const response = await axios.post(
//                 'https://www.vyaparkranti.com/laravel/api/package-orders/pay',
//                 payload,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Accept': 'application/json'
//                     }
//                 }
//             );
            
//             console.log('API Response===========>:', response.data);
//             console.log("payload ==============>", payload);
            
//             // Handle successful response
//             if (response.data && response.data.success) {
//                 // If your API returns Cashfree payment URL or session ID
//                 if (response.data.payment_url) {
//                     // Redirect to Cashfree payment page
//                     window.location.href = response.data.payment_url;
//                 } else if (response.data.payment_session_id) {
//                     // Initialize Cashfree SDK if you're using client-side integration
//                     initiateCashfreePayment(response.data);
//                 } else {
//                     alert('Payment initiated successfully!');
//                 }
//             } else {
//                 throw new Error(response.data.message || 'Payment initiation failed');
//             }
            
//         } catch (error) {
//             console.error('Payment error:', error);
            
//             let errorMessage = 'Payment failed. Please try again.';
            
//             if (error.response) {
//                 // API responded with error status
//                 console.error('API Error Response:', error.response.data);
//                 errorMessage = error.response.data.message || 
//                              error.response.data.error || 
//                              `API Error: ${error.response.status}`;
//             } else if (error.request) {
//                 // Network error
//                 errorMessage = 'Network error. Please check your connection.';
//             } else {
//                 // Other error
//                 errorMessage = error.message;
//             }
            
//             alert(errorMessage);
//         } finally {
//             setLoading(false);
//         }
//     };
    
//     // Initialize Cashfree payment (if using client-side SDK)
//     // const initiateCashfreePayment = (paymentData) => {
//     //     // This is a placeholder for Cashfree SDK integration
//     //     // You'll need to include Cashfree SDK script and implement this based on their documentation
//     //     console.log('Initializing Cashfree payment with:', paymentData);
        
//     //     // Example Cashfree integration (adjust based on your implementation):
//     //     /*
//     //     const cashfree = new Cashfree({
//     //         mode: "production" // or "sandbox" for testing
//     //     });
        
//     //     const checkoutOptions = {
//     //         paymentSessionId: paymentData.payment_session_id,
//     //         redirectTarget: "_self"
//     //     };
        
//     //     cashfree.checkout(checkoutOptions);
//     //     */
//     // };

//   const initiateCashfreePayment = (paymentData) => {
//   const sessionId = paymentData.cashfree.payment_session_id;

//   if (!window.Cashfree) {
//     alert('Cashfree SDK not loaded.');
//     return;
//   }

//   const cashfree = new window.Cashfree(sessionId);
//   cashfree.redirect(); // This will open the Cashfree payment UI
// };

//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
//             <div className="checkout-page">
//                 <div className="auto-container">
//                      <div className="checkout-form">
//                         <form onSubmit={(e) => e.preventDefault()}>
//                             <div className="row clearfix">
//                                 <div className="column col-md-6 col-sm-12 col-xs-12">
//                                     <div className="checkout-title">
//                                         <h2>Billing Address</h2>
//                                     </div>
//                                     <div className="row clearfix">
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Name <sup>*</sup></div>
//                                             <input 
//                                                 type="text" 
//                                                 name="client_name" 
//                                                 value={formData.client_name} 
//                                                 onChange={handleInputChange}
//                                                 placeholder="Enter your full name"
//                                                 style={{
//                                                     borderColor: errors.client_name ? '#ff6b6b' : '#ddd'
//                                                 }}
//                                             />
//                                             {errors.client_name && (
//                                                 <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
//                                                     {errors.client_name}
//                                                 </div>
//                                             )}
//                                         </div>
                                        
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Email <sup>*</sup></div>
//                                             <input 
//                                                 type="email" 
//                                                 name="email" 
//                                                 value={formData.email} 
//                                                 onChange={handleInputChange}
//                                                 placeholder="Enter your email address"
//                                                 style={{
//                                                     borderColor: errors.email ? '#ff6b6b' : '#ddd'
//                                                 }}
//                                             />
//                                             {errors.email && (
//                                                 <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
//                                                     {errors.email}
//                                                 </div>
//                                             )}
//                                         </div>
                                        
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Phone <sup>*</sup></div>
//                                             <input 
//                                                 type="tel" 
//                                                 name="phone" 
//                                                 value={formData.phone} 
//                                                 onChange={handleInputChange}
//                                                 placeholder="Enter your phone number"
//                                                 style={{
//                                                     borderColor: errors.phone ? '#ff6b6b' : '#ddd'
//                                                 }}
//                                             />
//                                             {errors.phone && (
//                                                 <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
//                                                     {errors.phone}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="order-column column col-md-6 col-sm-12 col-xs-12">
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
//                                             {packageData ? (
//                                                 <tr>
//                                                     <td className="prod-column">
//                                                         <div className="column-box">
//                                                             <figure className="prod-thumb">
//                                                                 <img src={cImg1} alt={packageData.title} />
//                                                             </figure>
//                                                             <h4 className="prod-title">{packageData.title} Package</h4>
//                                                         </div>
//                                                     </td>
//                                                     <td className="qty" style={{color: 'black'}}>
//                                                         <input 
//                                                             type="number" 
//                                                             min="1" 
//                                                             value={quantity} 
//                                                             onChange={handleQuantityChange} 
//                                                             style={{ width: '60px', backgroundColor: 'white', color: 'black' }}
//                                                         />
//                                                     </td>
//                                                     <td className="sub-total">₹{calculateSubtotal()}</td>
//                                                 </tr>
                                                
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="3" align="center">
//                                                         No package selected. Please go back to the pricing page.
//                                                     </td>
//                                                 </tr>
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                             </div>
//                         </form>
//                     </div>
                    
//                     <div className="lower-content">
//                         <div className="row clearfix">
//                              <div className="column col-md-6 col-sm-12 col-xs-12">
//                                 <div className="checkout-title">
//                                     <h2>Cart Totals</h2>
//                                 </div>
//                                 <ul 
//                                 className="totals-table"
//                                 style={{
//                                     listStyle: 'none',
//                                     padding: 0,
//                                     margin: 0,
//                                     border: '1px solid #ddd',
//                                     borderRadius: '4px',
//                                     backgroundColor: '#f9f9f9',
//                                     marginBottom: '10px'
//                                 }}
//                             >                                     
//                                 <li 
//                                     className="clearfix"
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                         padding: '12px 16px',
//                                         borderBottom: '1px solid #eee',
//                                         boxSizing: 'border-box',
//                                     }}
//                                 >                                         
//                                     <span 
//                                     className="col title"
//                                     style={{
//                                         fontWeight: '500',
//                                         color: '#333',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     Cart Subtotal
//                                 </span>                                         
//                                 <span 
//                                     className="col"
//                                     style={{
//                                         fontWeight: '600',
//                                         color: '#666',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     ₹{calculateSubtotal()}
//                                 </span>                                     
//                             </li>      

//                             <li 
//                                 className="clearfix"
//                                 style={{
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center',
//                                     padding: '12px 16px',
//                                     boxSizing: 'border-box'
//                                 }}
//                             >                                         
//                                 <span 
//                                     className="col title"
//                                     style={{
//                                         fontWeight: '500',
//                                         color: '#333',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     GST (18%)
//                                 </span>                                         
//                                 <span 
//                                     className="col"
//                                     style={{
//                                         fontWeight: '600',
//                                         color: '#666',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     ₹{(calculateSubtotal() * 0.18).toFixed(2)}
//                                 </span>                                     
//                             </li>                                                                    

//                             <li 
//                                 className="clearfix"
//                                 style={{
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center',
//                                     padding: '12px 16px',
//                                     backgroundColor: '#f0f0f0',
//                                     boxSizing: 'border-box'
//                                 }}
//                             >                                         
//                                 <span 
//                                     className="col title"
//                                     style={{
//                                         fontWeight: '600',
//                                         color: '#333',
//                                         fontSize: '16px',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     Order Total
//                                 </span>                                         
//                                 <span 
//                                     className="col total"
//                                     style={{
//                                         fontWeight: '700',
//                                         color: '#2c5aa0',
//                                         fontSize: '18px',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     ₹{(calculateSubtotal() * 1.18).toFixed(2)}
//                                 </span>                                     
//                                 </li>                                 
//                             </ul>

//                                 <div className="payment-options">
//                                     <ul>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-1" defaultChecked />
//                                                 <label htmlFor="payment-1">
//                                                     <strong>Cashfree Payment Gateway</strong>
//                                                 </label>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                     <button 
//                                         type="button" 
//                                         className="theme-btn btn-style-two"
//                                         disabled={!packageData || loading}
//                                         onClick={handlePayment}
//                                         style={{
//                                             opacity: (!packageData || loading) ? 0.6 : 1,
//                                             cursor: (!packageData || loading) ? 'not-allowed' : 'pointer',
//                                             position: 'relative'
//                                         }}
//                                     >
//                                         <span className="txt">
//                                             {loading ? 'Processing...' : 'Pay Now'}
//                                         </span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     );
// };

// export default CheckoutPage;


// correct api part payement start


//  import React, { Fragment, useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../../components/Navbar/Navbar';
// import PageTitle from "../../components/pagetitle/PageTitle";
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Footer from '../../components/footer/Footer';
// import { Link } from "react-router-dom";
// import cImg1 from '../../images/resource/products/prod-thumb-1.jpg';

// const CheckoutPage = () => {
//     const location = useLocation();
//     const [packageData, setPackageData] = useState(null);
//     const [quantity, setQuantity] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [cashfreeLoaded, setCashfreeLoaded] = useState(false);
    
//     // Form data state
//     const [formData, setFormData] = useState({
//         client_name: '',
//         email: '',
//         phone: '',
//         package_type: '',
//         package_class: '',
//         amount: 0
//     });
    
//     // Form validation errors
//     const [errors, setErrors] = useState({});
    
//     useEffect(() => {
//         // Get package data from navigation state
//         if (location.state && location.state.selectedPackage) {
//             setPackageData(location.state.selectedPackage);
//             setFormData(prev => ({
//                 ...prev,
//                 package_type: location.state.selectedPackage.title || '',
//                 package_class: location.state.selectedPackage.class || 'standard',
//                 amount: parseFloat(location.state.selectedPackage.price) || 0
//             }));
//         }
//     }, [location]);
    
//     // Update amount when quantity changes
//     useEffect(() => {
//         if (packageData) {
//             setFormData(prev => ({
//                 ...prev,
//                 amount: parseFloat(packageData.price) * quantity
//             }));
//         }
//     }, [quantity, packageData]);
    
//     // Load Cashfree SDK dynamically
//     const loadCashfreeSDK = () => {
//         return new Promise((resolve, reject) => {
//             if (window.Cashfree) {
//                 setCashfreeLoaded(true);
//                 resolve(window.Cashfree);
//                 return;
//             }
            
//             const script = document.createElement('script');
//             script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
//             script.onload = () => {
//                 setCashfreeLoaded(true);
//                 resolve(window.Cashfree);
//             };
//             script.onerror = () => {
//                 reject(new Error('Failed to load Cashfree SDK'));
//             };
//             document.head.appendChild(script);
//         });
//     };
    
//     // Load SDK on component mount
//     useEffect(() => {
//         loadCashfreeSDK().catch(error => {
//             console.error('Failed to load Cashfree SDK:', error);
//         });
//     }, []);
    
//     // Calculate order totals
//     const calculateSubtotal = () => {
//         if (!packageData) return '0.00';
//         return (parseFloat(packageData.price) * quantity).toFixed(2);
//     };
    
//     const handleQuantityChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         if (!isNaN(value) && value > 0) {
//             setQuantity(value);
//         }
//     };
    
//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
        
//         // Clear error when user starts typing
//         if (errors[name]) {
//             setErrors(prev => ({
//                 ...prev,
//                 [name]: ''
//             }));
//         }
//     };
    
//     // Form validation
//     const validateForm = () => {
//         const newErrors = {};
        
//         if (!formData.client_name.trim()) {
//             newErrors.client_name = 'Name is required';
//         }
        
//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email is invalid';
//         }
        
//         if (!formData.phone.trim()) {
//             newErrors.phone = 'Phone is required';
//         } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//             newErrors.phone = 'Phone number must be 10 digits';
//         }
        
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };
    
//     // Initialize Cashfree payment
//     const initiateCashfreePayment = async (paymentData) => {
//         try {
//             // Ensure SDK is loaded
//             if (!cashfreeLoaded || !window.Cashfree) {
//                 console.log('Loading Cashfree SDK...');
//                 await loadCashfreeSDK();
//             }
            
//             const sessionId = paymentData.cashfree.payment_session_id;
//             console.log('Initializing Cashfree with session ID:', sessionId);
            
//             if (!sessionId) {
//                 throw new Error('Payment session ID not found');
//             }
            
//             // Create Cashfree instance
//             const cashfree = new window.Cashfree({
//                 mode: "production" // Change to "sandbox" for testing
//             });
            
//             const checkoutOptions = {
//                 paymentSessionId: sessionId,
//                 redirectTarget: "_self"
//             };
            
//             console.log('Starting Cashfree checkout with options:', checkoutOptions);
            
//             // Start the payment process
//             await cashfree.checkout(checkoutOptions);
            
//         } catch (error) {
//             console.error('Error in initiateCashfreePayment:', error);
//             alert('Unable to initialize payment. Please try again.');
//             setLoading(false);
//         }
//     };
    
//     // Handle payment processing
//     const handlePayment = async () => {
//         if (!validateForm()) {
//             return;
//         }
        
//         if (!packageData) {
//             alert('Please select a package first');
//             return;
//         }
        
//         setLoading(true);
        
//         try {
//             // Prepare API payload
//             const payload = {
//                 client_name: formData.client_name.trim(),
//                 email: formData.email.trim(),
//                 phone: formData.phone.trim(),
//                 package_type: formData.package_type,
//                 package_class: formData.package_class,
//                 amount: formData.amount
//             };
            
//             console.log('Sending payment request:', payload);
            
//             // Make API call to your Laravel backend
//             const response = await axios.post(
//                 'https://www.vyaparkranti.com/laravel/api/package-orders/pay',
//                 payload,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Accept': 'application/json'
//                     },
//                     timeout: 30000 // 30 second timeout
//                 }
//             );
            
//             console.log('API Response=============>:', response.data);
            
//             // Handle successful response
//             if (response.data && response.data.success) {
//                 if (response.data.cashfree && response.data.cashfree.payment_session_id) {
//                     // Initialize Cashfree payment
//                     await initiateCashfreePayment(response.data);
//                 } else {
//                     throw new Error('Payment session not created properly');
//                 }
//             } else {
//                 throw new Error(response.data.message || 'Payment initiation failed');
//             }
            
//         } catch (error) {
//             console.error('Payment error:', error);
            
//             let errorMessage = 'Payment failed. Please try again.';
            
//             if (error.response) {
//                 // API responded with error status
//                 console.error('API Error Response:', error.response.data);
//                 errorMessage = error.response.data.message || 
//                              error.response.data.error || 
//                              `API Error: ${error.response.status}`;
                             
//                 // Handle specific error cases
//                 if (error.response.status === 422) {
//                     // Validation errors
//                     if (error.response.data.errors) {
//                         setErrors(error.response.data.errors);
//                         errorMessage = 'Please check the form for errors';
//                     }
//                 } else if (error.response.status === 401) {
//                     errorMessage = 'Authentication failed. Please contact support.';
//                 } else if (error.response.status >= 500) {
//                     errorMessage = 'Server error. Please try again later.';
//                 }
                
//             } else if (error.request) {
//                 // Network error
//                 errorMessage = 'Network error. Please check your connection and try again.';
//             } else if (error.code === 'ECONNABORTED') {
//                 // Timeout error
//                 errorMessage = 'Request timeout. Please try again.';
//             } else {
//                 // Other error
//                 errorMessage = error.message;
//             }
            
//             alert(errorMessage);
//             setLoading(false);
//         }
//     };

//     return (
//         <Fragment>
//             <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
//             <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
//             <div className="checkout-page">
//                 <div className="auto-container">
//                      <div className="checkout-form">
//                         <form onSubmit={(e) => e.preventDefault()}>
//                             <div className="row clearfix">
//                                 <div className="column col-md-6 col-sm-12 col-xs-12">
//                                     <div className="checkout-title">
//                                         <h2>Billing Address</h2>
//                                     </div>
//                                     <div className="row clearfix">
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Name <sup>*</sup></div>
//                                             <input 
//                                                 type="text" 
//                                                 name="client_name" 
//                                                 value={formData.client_name} 
//                                                 onChange={handleInputChange}
//                                                 placeholder="Enter your full name"
//                                                 style={{
//                                                     borderColor: errors.client_name ? '#ff6b6b' : '#ddd'
//                                                 }}
//                                             />
//                                             {errors.client_name && (
//                                                 <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
//                                                     {errors.client_name}
//                                                 </div>
//                                             )}
//                                         </div>
                                        
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Email <sup>*</sup></div>
//                                             <input 
//                                                 type="email" 
//                                                 name="email" 
//                                                 value={formData.email} 
//                                                 onChange={handleInputChange}
//                                                 placeholder="Enter your email address"
//                                                 style={{
//                                                     borderColor: errors.email ? '#ff6b6b' : '#ddd'
//                                                 }}
//                                             />
//                                             {errors.email && (
//                                                 <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
//                                                     {errors.email}
//                                                 </div>
//                                             )}
//                                         </div>
                                        
//                                         <div className="form-group col-md-12 col-sm-12 col-xs-12">
//                                             <div className="field-label">Phone <sup>*</sup></div>
//                                             <input 
//                                                 type="tel" 
//                                                 name="phone" 
//                                                 value={formData.phone} 
//                                                 onChange={handleInputChange}
//                                                 placeholder="Enter your phone number"
//                                                 style={{
//                                                     borderColor: errors.phone ? '#ff6b6b' : '#ddd'
//                                                 }}
//                                             />
//                                             {errors.phone && (
//                                                 <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
//                                                     {errors.phone}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="order-column column col-md-6 col-sm-12 col-xs-12">
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
//                                             {packageData ? (
//                                                 <tr>
//                                                     <td className="prod-column">
//                                                         <div className="column-box">
//                                                             <figure className="prod-thumb">
//                                                                 <img src={cImg1} alt={packageData.title} />
//                                                             </figure>
//                                                             <h4 className="prod-title">{packageData.title} Package</h4>
//                                                         </div>
//                                                     </td>
//                                                     <td className="qty" style={{color: 'black'}}>
//                                                         <input 
//                                                             type="number" 
//                                                             min="1" 
//                                                             value={quantity} 
//                                                             onChange={handleQuantityChange} 
//                                                             style={{ width: '60px', backgroundColor: 'white', color: 'black' }}
//                                                         />
//                                                     </td>
//                                                     <td className="sub-total">₹{calculateSubtotal()}</td>
//                                                 </tr>
                                                
//                                             ) : (
//                                                 <tr>
//                                                     <td colSpan="3" align="center">
//                                                         No package selected. Please go back to the pricing page.
//                                                     </td>
//                                                 </tr>
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                             </div>
//                         </form>
//                     </div>
                    
//                     <div className="lower-content">
//                         <div className="row clearfix">
//                              <div className="column col-md-6 col-sm-12 col-xs-12">
//                                 <div className="checkout-title">
//                                     <h2>Cart Totals</h2>
//                                 </div>
//                                 <ul 
//                                 className="totals-table"
//                                 style={{
//                                     listStyle: 'none',
//                                     padding: 0,
//                                     margin: 0,
//                                     border: '1px solid #ddd',
//                                     borderRadius: '4px',
//                                     backgroundColor: '#f9f9f9',
//                                     marginBottom: '10px'
//                                 }}
//                             >                                     
//                                 <li 
//                                     className="clearfix"
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         alignItems: 'center',
//                                         padding: '12px 16px',
//                                         borderBottom: '1px solid #eee',
//                                         boxSizing: 'border-box',
//                                     }}
//                                 >                                         
//                                     <span 
//                                     className="col title"
//                                     style={{
//                                         fontWeight: '500',
//                                         color: '#333',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     Cart Subtotal
//                                 </span>                                         
//                                 <span 
//                                     className="col"
//                                     style={{
//                                         fontWeight: '600',
//                                         color: '#666',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     ₹{calculateSubtotal()}
//                                 </span>                                     
//                             </li>      

//                             <li 
//                                 className="clearfix"
//                                 style={{
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center',
//                                     padding: '12px 16px',
//                                     boxSizing: 'border-box'
//                                 }}
//                             >                                         
//                                 <span 
//                                     className="col title"
//                                     style={{
//                                         fontWeight: '500',
//                                         color: '#333',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     GST (18%)
//                                 </span>                                         
//                                 <span 
//                                     className="col"
//                                     style={{
//                                         fontWeight: '600',
//                                         color: '#666',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     ₹{(calculateSubtotal() * 0.18).toFixed(2)}
//                                 </span>                                     
//                             </li>                                                                    

//                             <li 
//                                 className="clearfix"
//                                 style={{
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center',
//                                     padding: '12px 16px',
//                                     backgroundColor: '#f0f0f0',
//                                     boxSizing: 'border-box'
//                                 }}
//                             >                                         
//                                 <span 
//                                     className="col title"
//                                     style={{
//                                         fontWeight: '600',
//                                         color: '#333',
//                                         fontSize: '16px',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     Order Total
//                                 </span>                                         
//                                 <span 
//                                     className="col total"
//                                     style={{
//                                         fontWeight: '700',
//                                         color: '#2c5aa0',
//                                         fontSize: '18px',
//                                         boxSizing: 'border-box'
//                                     }}
//                                 >
//                                     ₹{(calculateSubtotal() * 1.18).toFixed(2)}
//                                 </span>                                     
//                                 </li>                                 
//                             </ul>

//                                 <div className="payment-options">
//                                     <ul>
//                                         <li>
//                                             <div className="radio-option">
//                                                 <input type="radio" name="payment-group" id="payment-1" defaultChecked />
//                                                 <label htmlFor="payment-1">
//                                                     <strong>Cashfree Payment Gateway</strong>
//                                                 </label>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                     <button 
//                                         type="button" 
//                                         className="theme-btn btn-style-two"
//                                         disabled={!packageData || loading}
//                                         onClick={handlePayment}
//                                         style={{
//                                             opacity: (!packageData || loading) ? 0.6 : 1,
//                                             cursor: (!packageData || loading) ? 'not-allowed' : 'pointer',
//                                             position: 'relative'
//                                         }}
//                                     >
//                                         <span className="txt">
//                                             {loading ? 'Processing...' : 'Pay Now'}
//                                         </span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     );
// };

// export default CheckoutPage;


// end


  
import React, { Fragment, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import { Link } from "react-router-dom";
import cImg1 from '../../images/resource/products/prod-thumb-1.jpg';

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [packageData, setPackageData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cashfreeLoaded, setCashfreeLoaded] = useState(false);
    
    // Form data state
    const [formData, setFormData] = useState({
        client_name: '',
        email: '',
        phone: '',
        package_type: '',
        package_class: '',
        amount: 0
    });
    
    // Form validation errors
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        // Get package data from navigation state
        if (location.state && location.state.selectedPackage) {
            setPackageData(location.state.selectedPackage);
            setFormData(prev => ({
                ...prev,
                package_type: location.state.selectedPackage.title || '',
                package_class: location.state.selectedPackage.class || 'standard',
                amount: parseFloat(location.state.selectedPackage.price) || 0
            }));
        }
    }, [location]);
    
    // Update amount when quantity changes
    useEffect(() => {
        if (packageData) {
            setFormData(prev => ({
                ...prev,
                amount: parseFloat(packageData.price) * quantity
            }));
        }
    }, [quantity, packageData]);
    
    // Load Cashfree SDK dynamically
    const loadCashfreeSDK = () => {
        return new Promise((resolve, reject) => {
            if (window.Cashfree) {
                setCashfreeLoaded(true);
                resolve(window.Cashfree);
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
            script.onload = () => {
                setCashfreeLoaded(true);
                resolve(window.Cashfree);
            };
            script.onerror = () => {
                reject(new Error('Failed to load Cashfree SDK'));
            };
            document.head.appendChild(script);
        });
    };
    
    // Load SDK on component mount
    useEffect(() => {
        loadCashfreeSDK().catch(error => {
            console.error('Failed to load Cashfree SDK:', error);
        });
    }, []);
    
    // Payment success callback
    const handlePaymentSuccess = (data) => {
        console.log('Payment successful:', data);
        
        // Show success message
        alert('Payment completed successfully! Redirecting to home page...');
        
        // Redirect to home page after a short delay
        setTimeout(() => {
            navigate('/', { 
                state: { 
                    paymentSuccess: true, 
                    orderData: data 
                } 
            });
        }, 2000);
    };
    
    // Payment failure callback
    const handlePaymentFailure = (data) => {
        console.log('Payment failed:', data);
        
        // Show failure message
        alert('Payment failed. Please try again.');
        
        // Reset loading state
        setLoading(false);
        
        // Optionally redirect to home page or stay on checkout
        navigate('/');
    };
    
    // Calculate order totals
    const calculateSubtotal = () => {
        if (!packageData) return '0.00';
        return (parseFloat(packageData.price) * quantity).toFixed(2);
    };
    
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };
    
    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    
    // Form validation
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.client_name.trim()) {
            newErrors.client_name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    // Initialize Cashfree payment
    const initiateCashfreePayment = async (paymentData) => {
        try {
            // Ensure SDK is loaded
            if (!cashfreeLoaded || !window.Cashfree) {
                console.log('Loading Cashfree SDK...');
                await loadCashfreeSDK();
            }
            
            const sessionId = paymentData.cashfree.payment_session_id;
            console.log('Initializing Cashfree with session ID:', sessionId);
            
            if (!sessionId) {
                throw new Error('Payment session ID not found');
            }
            
            // Create Cashfree instance
            const cashfree = new window.Cashfree({
                mode: "production" // Change to "sandbox" for testing
            });
            
            const checkoutOptions = {
                paymentSessionId: sessionId,
                redirectTarget: "_self",
                // Add callback handlers
                onSuccess: function(data) {
                    console.log('Cashfree onSuccess callback:', data);
                    handlePaymentSuccess(data);
                },
                onFailure: function(data) {
                    console.log('Cashfree onFailure callback:', data);
                    handlePaymentFailure(data);
                },
                onCancel: function(data) {
                    console.log('Cashfree onCancel callback:', data);
                    alert('Payment was cancelled.');
                    setLoading(false);
                }
            };
            
            console.log('Starting Cashfree checkout with options:', checkoutOptions);
            
            // Start the payment process
            await cashfree.checkout(checkoutOptions);
            
        } catch (error) {
            console.error('Error in initiateCashfreePayment:', error);
            alert('Unable to initialize payment. Please try again.');
            setLoading(false);
        }
    };
    
    // Handle payment processing
    const handlePayment = async () => {
        if (!validateForm()) {
            return;
        }
        
        if (!packageData) {
            alert('Please select a package first');
            return;
        }
        
        setLoading(true);
        
        try {
            // Prepare API payload
            const payload = {
                client_name: formData.client_name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                package_type: formData.package_type,
                package_class: formData.package_class,
                amount: formData.amount
            };
            
            console.log('Sending payment request:', payload);
            
            // Make API call to your Laravel backend
            const response = await axios.post(
                'https://www.vyaparkranti.com/laravel/api/package-orders/pay',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    timeout: 30000 // 30 second timeout
                }
            );
            
            console.log('API Response=============>:', response.data);
            
            // Handle successful response
            if (response.data && response.data.success) {
                if (response.data.cashfree && response.data.cashfree.payment_session_id) {
                    // Initialize Cashfree payment
                    await initiateCashfreePayment(response.data);
                } else {
                    throw new Error('Payment session not created properly');
                }
            } else {
                throw new Error(response.data.message || 'Payment initiation failed');
            }
            
        } catch (error) {
            console.error('Payment error:', error);
            
            let errorMessage = 'Payment failed. Please try again.';
            
            if (error.response) {
                // API responded with error status
                console.error('API Error Response:', error.response.data);
                errorMessage = error.response.data.message || 
                             error.response.data.error || 
                             `API Error: ${error.response.status}`;
                             
                // Handle specific error cases
                if (error.response.status === 422) {
                    // Validation errors
                    if (error.response.data.errors) {
                        setErrors(error.response.data.errors);
                        errorMessage = 'Please check the form for errors';
                    }
                } else if (error.response.status === 401) {
                    errorMessage = 'Authentication failed. Please contact support.';
                } else if (error.response.status >= 500) {
                    errorMessage = 'Server error. Please try again later.';
                }
                
            } else if (error.request) {
                // Network error
                errorMessage = 'Network error. Please check your connection and try again.';
            } else if (error.code === 'ECONNABORTED') {
                // Timeout error
                errorMessage = 'Request timeout. Please try again.';
            } else {
                // Other error
                errorMessage = error.message;
            }
            
            alert(errorMessage);
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'} />
            <div className="checkout-page">
                <div className="auto-container">
                     <div className="checkout-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="row clearfix">
                                <div className="column col-md-6 col-sm-12 col-xs-12">
                                    <div className="checkout-title">
                                        <h2>Billing Address</h2>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Name <sup>*</sup></div>
                                            <input 
                                                type="text" 
                                                name="client_name" 
                                                value={formData.client_name} 
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                style={{
                                                    borderColor: errors.client_name ? '#ff6b6b' : '#ddd'
                                                }}
                                            />
                                            {errors.client_name && (
                                                <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
                                                    {errors.client_name}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Email <sup>*</sup></div>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                value={formData.email} 
                                                onChange={handleInputChange}
                                                placeholder="Enter your email address"
                                                style={{
                                                    borderColor: errors.email ? '#ff6b6b' : '#ddd'
                                                }}
                                            />
                                            {errors.email && (
                                                <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Phone <sup>*</sup></div>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                value={formData.phone} 
                                                onChange={handleInputChange}
                                                placeholder="Enter your phone number"
                                                style={{
                                                    borderColor: errors.phone ? '#ff6b6b' : '#ddd'
                                                }}
                                            />
                                            {errors.phone && (
                                                <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
                                                    {errors.phone}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

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
                                                    <td className="qty" style={{color: 'black'}}>
                                                        <input 
                                                            type="number" 
                                                            min="1" 
                                                            value={quantity} 
                                                            onChange={handleQuantityChange} 
                                                            style={{ width: '60px', backgroundColor: 'white', color: 'black' }}
                                                        />
                                                    </td>
                                                    <td className="sub-total">₹{calculateSubtotal()}</td>
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
                            </div>
                        </form>
                    </div>
                    
                    <div className="lower-content">
                        <div className="row clearfix">
                             <div className="column col-md-6 col-sm-12 col-xs-12">
                                <div className="checkout-title">
                                    <h2>Cart Totals</h2>
                                </div>
                                <ul 
                                className="totals-table"
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    backgroundColor: '#f9f9f9',
                                    marginBottom: '10px'
                                }}
                            >                                     
                                <li 
                                    className="clearfix"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '12px 16px',
                                        borderBottom: '1px solid #eee',
                                        boxSizing: 'border-box',
                                    }}
                                >                                         
                                    <span 
                                    className="col title"
                                    style={{
                                        fontWeight: '500',
                                        color: '#333',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    Cart Subtotal
                                </span>                                         
                                <span 
                                    className="col"
                                    style={{
                                        fontWeight: '600',
                                        color: '#666',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    ₹{calculateSubtotal()}
                                </span>                                     
                            </li>      

                            <li 
                                className="clearfix"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 16px',
                                    boxSizing: 'border-box'
                                }}
                            >                                         
                                <span 
                                    className="col title"
                                    style={{
                                        fontWeight: '500',
                                        color: '#333',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    GST (18%)
                                </span>                                         
                                <span 
                                    className="col"
                                    style={{
                                        fontWeight: '600',
                                        color: '#666',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    ₹{(calculateSubtotal() * 0.18).toFixed(2)}
                                </span>                                     
                            </li>                                                                    

                            <li 
                                className="clearfix"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 16px',
                                    backgroundColor: '#f0f0f0',
                                    boxSizing: 'border-box'
                                }}
                            >                                         
                                <span 
                                    className="col title"
                                    style={{
                                        fontWeight: '600',
                                        color: '#333',
                                        fontSize: '16px',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    Order Total
                                </span>                                         
                                <span 
                                    className="col total"
                                    style={{
                                        fontWeight: '700',
                                        color: '#2c5aa0',
                                        fontSize: '18px',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    ₹{(calculateSubtotal() * 1.18).toFixed(2)}
                                </span>                                     
                                </li>                                 
                            </ul>

                                <div className="payment-options">
                                    <ul>
                                        <li>
                                            <div className="radio-option">
                                                <input type="radio" name="payment-group" id="payment-1" defaultChecked />
                                                <label htmlFor="payment-1">
                                                    <strong>Cashfree Payment Gateway</strong>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <button 
                                        type="button" 
                                        className="theme-btn btn-style-two"
                                        disabled={!packageData || loading}
                                        onClick={handlePayment}
                                        style={{
                                            opacity: (!packageData || loading) ? 0.6 : 1,
                                            cursor: (!packageData || loading) ? 'not-allowed' : 'pointer',
                                            position: 'relative'
                                        }}
                                    >
                                        <span className="txt">
                                            {loading ? 'Processing...' : 'Pay Now'}
                                        </span>
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


