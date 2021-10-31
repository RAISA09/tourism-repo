import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
import { serverDb } from '../../utilities/serverDb';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    const [cart, setCart] = useCarts(services);

    useEffect(() => {
        fetch('http://localhost:5000/addServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleAddToCart = (service) => {
        const newCart = [...cart, service];
        setCart(newCart);
        serverDb(service.key);

    }

    return (
        <div className="bg-dark p-5">
            <h2 className="our-services pt-3 mb-3">Our Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                        handleAddToCart={handleAddToCart}
                    ></Service>)
                }

            </Row>

        </div>

    );
};

export default Services;