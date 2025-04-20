import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Product = ({ item, addToCart }) => {

  return (

    <div className="basic-details">
      <div className="row clearfix align-items-center">
        <div className="image-column col-md-6 col-sm-6 col-xs-12">
          <figure className="image-box">
            <Zoom>
              <img src={item.proImg ? item.proImg : ''} alt="products" />
            </Zoom>
          </figure>
        </div>
        <div className="info-column col-md-6 col-sm-6 col-xs-12">
          <div className="details-header">
            <h4>{item.title}</h4>
            <div className="rating">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star-half-empty"></span>
            </div>
            <div className="item-price">${item.price}</div>
          </div>

          <div className="text">
            <p>Working from home meant we couldsnack and coffee our breaks change our desks or view, good, drink on the job, even spend the weather started getting roughday in pajamas consequences.</p>
          </div>
          <div className="location">Check Delivery Option at Your Location:</div>
          <div className="pincode-form">
            <form method="post" action="contact.html">
              <div className="form-group">
                <input type="text" name="text" value="" placeholder="Pincode" required />
                <button type="submit">Check</button>
              </div>
            </form>
          </div>
          <div className="expired">Expected Delivery in 4-10 Days</div>
          <div className="other-options clearfix">
            <button className="theme-btn btn-style-three add-to-cart"
              onClick={() => addToCart(item)}>Add
              to cart</button>
            <div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Product;
