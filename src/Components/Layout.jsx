import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';
import Newsletter from './Newsletter';
import NewsletterAb from './NewsletterAb';

function Layout(props) {
 
  return (
    <div className="layout">
        <Header />
           <div className="content"> {props.children} </div>
        <Newsletter/>
        <NewsletterAb/>
        <Footer/>
    </div>
  );
}

export default Layout;
