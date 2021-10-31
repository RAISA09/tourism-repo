import React from 'react';
import { Row } from 'react-bootstrap';
import useCarts from '../hooks/useCarts';
import useServices from '../hooks/useServices';
import ReviewService from '../RivewService/ReviewService'
import { removeFromDb } from '../utilities/serverDb';

const ServiceRivewsColeection = () => {
    const [services] = useServices();
    const [cart, setCart] = useCarts(services);
    console.log(cart)

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    return (
        <Row xs={1} md={3} className="g-4 bg-dark py-5 my-3">
            {
                cart.map(service => <ReviewService
                    key={service.key}
                    service={service}
                    handleRemove={handleRemove}
                ></ReviewService>)
            }
        </Row>
    );
};

export default ServiceRivewsColeection;