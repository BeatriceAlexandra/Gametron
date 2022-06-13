import React from 'react';
import Layout from '../Components/Layout';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import './Cart.css';
import { ReactComponent as Close} from '../assets/icons/close.svg';
import NewProducts from '../Components/NewProducts';


function Cart(props) {
    const totalSum = (products) => {
        return products.reduce((acc, product) => {
            return acc + product.quantity * product.price
        }, 0) 
    }

    return (
        <Layout>
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                   
                    ? <div className="w-100">
                        <div className="d-flex justify-content h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Preț</p>
                            <p className="w-25">Cantitate</p>
                            <p className="w-25">Total</p>
                        </div>
                        {
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <p className="w-25">{ product.quantity }</p>
                                    <div className="w-25 d-flex justify-content">
                                        <p className="mr-2">{ product.price * product.quantity } { product.currency }</p>
                                        <div onClick={() => props.removeFromCart({id: product.id})}>
                                        <Close />
                                    </div>
                                </div>
                    </div>
                            })
                        }

                        <div className="d-flex justify-content-end border-top">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                            <p className="my-4 text-center font-weight-bold">Total: </p>
                            </div>
                            <div className="w-25">
                                <p className="my-4 text-center">
                                    { totalSum(props.products) } { props.products[0].currency }
                                </p>
                            </div>
                            <Link to="/order"><button className="btn btn-outline-dark my-4">Continua</button></Link>
                            <Link to="/"><button className="btn btn-outline-dark my-4">Inapoi la home</button></Link>
                            
                        </div>
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p className="h3">Nu există produse în coș!</p>
                        
                       
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                       
                    </div> 
                }
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2> COMING Soon</h2>
            <NewProducts/> 
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.cart.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (payload) => dispatch(removeFromCart(payload))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);