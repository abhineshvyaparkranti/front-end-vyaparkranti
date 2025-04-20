import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import Footer from '../../components/footer/Footer';
import ProductTabs from './alltab';



const ProductSinglePage = (props) => {
    const { slug } = useParams()


    const productsArray = api();
    const Allproduct = productsArray


    const { addToCart } = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.slug === String(slug)))
    }, []);

    const item = product[0];

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} topbarClass={'tb-block'} />
            <PageTitle pageTitle={'Product Single'} pagesub={'Product Single'} />
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-12 col-md-12 col-sm-12">
                            <div className="shop-single">
                                <div className="product-details">
                                    {item ? <Product
                                        item={item}
                                        addToCart={addToCart}
                                    /> : null}
                                    <ProductTabs />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
