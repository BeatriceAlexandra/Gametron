import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import "./Header.css";
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/user';
import Navbar from './Navbar';

function Header(props) {
      const { user, logout} = props;
      
      return (
         <header className="border-bottom">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                  
                        <Link to="/" className="d-flex justify-content">
                              <img src={logo} alt="Gametron" className="logo"/>
                        </Link>
                 

                        <h1 className="text"> PENTRU PASIONAȚII DE GAMING</h1>
                        
                        <div className="display">
                              {user
                                  ? <p className='text-white'> Salut, {user.displayName}!</p>
                                  : null  
                              }                             
                              <div className="d-flex justify-content-end">
                                    {user
                                          ? <p className="logout h5" onClick = {() => logout()}>Delogare</p>
                                          : <Link to="login" className="h5 mb-2">Logare</Link>
                                    }
                              </div>                             

                              
                        </div>
            </div>      
            <Navbar/>
         </header>
      );
}

function mapStateToProps (state) {
      return {
            numberOfProducts: state.cart.products.length,
            user: state.user.data
      }
}

function mapDispatchToProps (dispatch) {
      return {
            logout: () =>  dispatch (logoutUser())
      }
}

export default connect (mapStateToProps, mapDispatchToProps)(Header);