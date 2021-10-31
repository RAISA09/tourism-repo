import React from 'react';
import image1 from '../../../src/images/slide018.jpg'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div>
            <div class="card bg-dark">
                <img src={image1} height="300px" class="card-img" alt="..." />
                <div class="card-img-overlay text-center contact-text">
                    <h1> Contact Us</h1>
                    <h4>Email</h4>
                    <p>rh938664@gmail.com</p>
                    <p>rakib9032000@gmail.com</p>
                    <h4>Phone</h4>
                    <p>++85555</p>


                </div>
            </div>
        </div>

    );
};

export default ContactUs;