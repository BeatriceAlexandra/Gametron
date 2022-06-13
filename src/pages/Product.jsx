import React, { Component, } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import products from '../utils/products.json';
import { connect } from 'react-redux';
import {addToCart} from "../redux/actions/cart";
import "./Product.css";

const withRouter = (Component) => props => {
    const navigate = useNavigate ();
    const location = useLocation();
    const params = useParams ();
    
    return (
        <Component {...props} params={params} navigate={navigate} location={location} /> 
        
        );
        
    };
       
    class Product extends Component {
        constructor () {
            super();
            this.state={
            product: {}
        }
    }

    componentDidMount() {
            const productIdUrl = this.props.params.productId;
            const categoryValues = Object.values(products);

            let currentProduct;
            categoryValues.forEach((category) => {
                const findResult = category.items.find ((item)=>{
                    return Number(productIdUrl) === item.id;
                })

                if (findResult !== undefined) {
                    currentProduct = findResult;
                }
            })
            this.setState({product: currentProduct})
    }
        
        
    render () {
            console.log(this.state)
            const{name, image, id, price, currency, size, colour, description, material, brand} = this.state.product; 
            const {addToCart} = this.props;
    return (
        <Layout>
            <div className="product-page content-min-height container-fluid container-min-max-width">
                <h1 className="my-5 h2">{name}</h1>
              <div className="product-info d-flex">  
                <div className="image-wrapper d-flex mr-5">
                    <img src={image} alt="Product"></img>
                </div>
                
                <div className="product-details">
                    <p className="h3 text-danger ">{price} {currency}</p>
                    
                    <button 
                            className="btn btn-dark mb-4 font-weight-bold content-min-height container-fluid container-min-max-width"
                            onClick = {() => addToCart( {
                                product: {
                                    id,
                                    name,
                                    price,
                                    currency,
                                    image,
                                
                                }
                            })}
                            
                            
                    >
                        Adauga in cos 
                    </button>
                    
                    <p><span className="">Mărime</span>: {size}</p>
                    <p><span className="font-weight-bold">Culoare</span>: {colour}</p>
                    <p><span className="font-weight-bold">Material</span>: {material}</p>
                    <p><span className="font-weight-bold">Brand</span>: {brand}</p>
                    <p className="font-weight-bold mb-1">Descriere:</p>
                    <p>{description}</p>

                </div>   
              </div>       
            </div>
        </Layout>
        );
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
           addToCart: (product) => dispatch(addToCart(product))
        };
}

export default withRouter (connect(null, mapDispatchToProps)(Product));
