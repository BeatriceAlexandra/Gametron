import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return(
        <div className = "footer">
        <footer className="pt-4">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between">
             
                <div className="leftFooter ">
                    <h3 className="h5">Link-uri rapide:</h3>
                    <p className="mb-1">
                        <Link to='/about' className="text-white">Despre</Link>
                    </p>
                    <p className="m-0">
                        <Link to='/terms-and-conditions' className="text-white">Termeni și condiții</Link>
                    </p>
                    <p className="m-0">
                        <Link to='/livrare' className="text-white">Livrare</Link>
                    </p>
                </div>
                <div>
                    <h3 className="h5">Contact:</h3>
                    <p className="mb-1">
                        <a href="mailto:Gametron.contact@gmail.com" className="text-white">
                            <Mail className="footer-icon bg-white p-0"/>
                            Gametron.contact@gmail.com
                        </a>
                    </p>
                    <p className="text-center m-0"><Phone className="mr-1 footer-icon bg-white"/>+4 0765 xxx yyy</p>
                </div>

                <div className="rightFooter">
                    <h3 className="h5">Contact:</h3>
    
                    <p>
                        <a href="https://www.linkedin.com">
                            <LinkedInIcon/>
                             Gametron
                        </a>
                    </p>

                  
                        <Link to='/formular' className='Complain'>Reclamatii</Link>
                   
                </div>

            </div>
            <div className="text-center py-2">
                &copy; Gametron, 2022 
            </div>
        </footer>
        </div>
    );
}

export default Footer;