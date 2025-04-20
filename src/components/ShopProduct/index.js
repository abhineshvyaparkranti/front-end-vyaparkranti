import React from "react";
import { Link } from "react-router-dom";


const ShopProduct = ({ products, addToCartProduct, addToWishListProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">

                    <div className="content-side col-lg-12 col-md-12 col-sm-12">
                        <div className="shop-section">

                            <div className="items-sorting">
                                <div className="row clearfix">
                                    <div className="results-column col-lg-8 col-md-8 col-sm-12">
                                        <h4>Showing 1-9 of 12 results</h4>
                                    </div>
                                    <div className="select-column pull-right col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <select name="sort-by">
                                                <option>Default Sorting</option>
                                                <option>By Order</option>
                                                <option>By Price</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">

                                {products.length > 0 &&
                                    products.slice(0, 9).map((product, pitem) => (
                                        <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12" key={pitem}>
                                            <div className="inner-box">
                                                <div className="image">
                                                    <img src={product.proImg} alt="" />
                                                    <div className="overlay-box">
                                                        <ul className="cart-option">
                                                            <li>
                                                                <button
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Add to Cart"
                                                                    onClick={() => addToCartProduct(product)}
                                                                >
                                                                    <span className="flaticon-shopping-cart-1"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-html="true"
                                                                    title="Add to Wishlist"
                                                                    onClick={() => addToWishListProduct(product)}
                                                                >
                                                                    <i className="fa fa-heart-o"></i>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    <div className="clearfix">
                                                        <div className="pull-left">
                                                            <h3><Link onClick={ClickHandler} to={`/product-single/${product.slug}`}>{product.title}</Link></h3>
                                                        </div>
                                                        <div className="pull-right">
                                                            <div className="rating">
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star-half-empty"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="price">${product.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                            </div>
                            <div className="styled-pagination text-center mt-5">
                                <ul className="clearfix">
                                    <li className="prev"><Link to="/"><span className="fa fa-angle-left"></span> </Link></li>
                                    <li><Link to="/">01</Link></li>
                                    <li className="active"><Link to="/">02</Link></li>
                                    <li><Link to="/">03</Link></li>
                                    <li className="next"><Link to="/"><span className="fa fa-angle-right"></span> </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ShopProduct;
