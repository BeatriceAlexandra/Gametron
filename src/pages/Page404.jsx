import React from 'react';
import { Link } from 'react-router-dom';


function Page404() {
  return (
    <div>
      <h1> 404</h1>
      <h1> Page  NOT FOUND</h1>  
      <Link to='/'> 
              <button className="btn btn-outline-dark my-4"> Înapoi la Home </button>  
      </Link>
      <br/>
      <img src="https://imgur.com/w6gHxVF.jpg" alt="UPS"/>

    
    </div>
  );
}

export default Page404;
