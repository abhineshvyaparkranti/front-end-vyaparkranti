import React, { Fragment } from "react";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Button, Grid } from "@mui/material";
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";
import Footer from "../../components/footer/Footer";

const CartPage = (props) => {

  const SubmitHandler = (e) => {
    e.preventDefault()
}

  const { carts } = props;

  return (
    <Fragment>
      <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
      <PageTitle pageTitle={"Cart"} pagesub={"Cart"} />
      <section className="cart-section">
        <div className="auto-container">

          <div className="cart-outer">
            <div className="table-outer">
              <table className="cart-table">
                <thead className="cart-header">
                  <tr>
                    <th className="prod-column">PRODUCT</th>
                    <th>&nbsp;</th>
                    <th>Quantity</th>
                    <th>Avalability</th>
                    <th className="price">Price</th>
                    <th>Total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>

                <tbody>
                  {carts &&
                    carts.length > 0 &&
                    carts.map((catItem, crt) => (
                      <tr key={crt}>
                        <td colspan="2" className="prod-column">
                          <div className="column-box">
                            <figure className="prod-thumb"><img src={catItem.proImg} alt="" /></figure>
                            <h3 className="prod-title">{catItem.title}</h3>
                          </div>
                        </td>
                        <td className="qty">
                          <Grid className="quantity cart-plus-minus">
                            <Button
                              className="dec qtybutton"
                              onClick={() =>
                                props.decrementQuantity(catItem.id)
                              }
                            >
                              -
                            </Button>
                            <input value={catItem.qty} type="text" />
                            <Button
                              className="inc qtybutton"
                              onClick={() =>
                                props.incrementQuantity(catItem.id)
                              }
                            >
                              +
                            </Button>
                          </Grid>
                        </td>
                        <td className="unit-price"><div className="available-info"><span className="icon fa fa-check"></span> Item(s) <br />Avilable Now</div></td>
                        <td className="price">${catItem.price}</td>
                        <td className="sub-total">${catItem.qty * catItem.price}</td>
                        <td className="remove"><button className="remove-btn" onClick={() => props.removeFromCart(catItem.id)}><span className="flaticon-cancel-1"></span></button></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="coupon-outer clearfix">
              <div className="pull-left">
                <div className="apply-coupon clearfix">
                  <div className="form-group clearfix">
                    <input type="text" name="coupon-code" value="" placeholder="Enter Coupon Code..." />
                  </div>
                  <div className="form-group clearfix">
                    <button type="button" className="theme-btn btn-style-two"><span className="txt">Apply Coupon</span></button>
                  </div>
                </div>
              </div>

              <div className="pull-right">
                <button type="button" className="theme-btn cart-btn">Update Cart</button>
              </div>

            </div>


            <div className="row clearfix">
              <div className="column col-md-6 col-sm-12 col-xs-12">
                <div className="shipping-form">
                  <div className="sec-title"><h2>Calculate Shipping</h2></div>
                  <form method="post" onSubmit={SubmitHandler}>
                    <div className="row clearfix">
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <select name="country" className="custom-select-box">
                          <option>United Kingdom (UK)</option>
                          <option>Pakistan</option>
                          <option>USA</option>
                          <option>CANADA</option>
                          <option>INDIA</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <select name="country" className="custom-select-box">
                          <option>State / Country</option>
                          <option>Maharshtra</option>
                          <option>NY</option>
                          <option>ALabama</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input type="text" name="code" value="" placeholder="Zip / Postal Code" />
                      </div>
                      <div className="form-group col-md-12 col-sm-12 col-xs-12">
                        <button type="submit" className="theme-btn btn-style-two"><span className="txt">Update Totals</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="column col-md-6 col-sm-12 col-xs-12">
                <div className="sec-title"><h2>Cart Totals</h2></div>
                <ul className="totals-table">
                  <li className="clearfix"><span className="col col-title">Cart Subtotal</span><span className="col">${totalPrice(carts)}</span></li>
                  <li className="clearfix"><span className="col col-title">Shipping and Handling</span><span className="col">Free Shipping</span></li>
                  <li className="clearfix"><span className="col col-title">Order Total</span><span className="col">${totalPrice(carts)}</span></li>
                </ul>

                <div className="padd-top-30 text-right"><button type="submit" className="theme-btn btn-style-two"><span className="txt">Proceed to Checkout</span></button></div>
              </div>

            </div>


          </div>

        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);
