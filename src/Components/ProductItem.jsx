import React from 'react';
import './ProductItem.css';
import {connect} from 'react-redux';
import {addToCart} from '../redux/actions/cart';
import { Link, } from 'react-router-dom';



function ProductItem(props) {
 
    const {id, name, price, currency, image, addToCartInjected} = props;
    // console.log(props)

    return (
        <div className="product-item col-12 col-md-4 d-flex-column align-items-center mb-3 mt-auto">
          
            <Link to={`/product/${id}`} className="d-flex flex-column">
                <img src ={image} alt="product" className="mb-2 "/>
                <p className="mb-1 mb-3">{name}</p> 
                <p>{price} {currency}</p>
            </Link>
          
          <button 
                className="btn btn-outline-dark button-wrapper inline-block" 
                onClick={()=>{
                  addToCartInjected({
                      product: {
                        id,
                        name,
                        price,
                        currency,
                        image,
                      
                      }
                  
                  })
                }}
            >
              Adauga in cos
          </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
  return {
      addToCartInjected: (payload) => dispatch(addToCart(payload))
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
