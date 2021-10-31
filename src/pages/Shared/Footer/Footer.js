import React from 'react';
import './Footer.css'

// Footer js file

const Footer = () => {
    return (
        <div>
            <div>
                <div className='bg-dark text-white text-center mt-4 '>

                    <div className="row py-4">
                        <h3 className="learning">World Tours</h3>
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <p>Dev Pahar, Chowkbazar, Chittagong</p>
                            <p>1234, Mirpur, Dhaka</p>
                        </div>
                        <div className="col-md-3">
                            <p>Phone: 800 123 4567</p>
                            <p>Fax: 1.800.123.4566</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;