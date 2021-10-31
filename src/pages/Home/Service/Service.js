import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, img, name, description, price, time } = props.service;
    return (
        <Col>
            <Card className="card">
                <Card.Img variant="top" height="300px" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>Name:{name}</h3>
                        <h4>Package:{price}</h4>
                        <h4>Time:{time}</h4>
                    </Card.Title>
                    <Card.Text>
                        <p>Description:{description.slice(0, 180)}</p>
                        <button
                            onClick={() => props.handleAddToCart(props.service)}
                            className="btn-warning me-2">Booking Now</button>

                        <NavLink to="/rivew"><button className="bg-dark text-white ms-2">Booking Review</button></NavLink>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;