import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Terms from './pages/Terms';
import Delivery from './pages/Delivery';
import Form from './pages/Form';
import {mobile} from './responsive'
import Register from './pages/Register';
import OrderPage from './pages/OrderPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
 
  }


  render () {


    return(
      <div className="app">
        <div>{mobile}</div>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="about" element={<About />}/>
           <Route path="login" element={<Login />} />
           <Route path="terms-and-conditions" element={<Terms />} />
           <Route path="livrare" element={<Delivery />} />
           <Route path="formular" element={<Form />} />
           <Route path="category/:pathName" element={<Category />} />
           <Route path="cart" element={<Cart/>}/>    
           <Route path="order" element={<OrderPage/>}/>  
           <Route path="product/:productId" element={<Product />}/>      
           <Route path="register" element={<Register />}/>      
           <Route path="*" element={<Page404 />}/>
        </Routes> 
 
      </div>
    );
  }
}

export default App;
