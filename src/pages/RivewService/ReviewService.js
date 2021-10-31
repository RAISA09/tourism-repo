import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ReviewService = (props) => {
    const { key, img, name, description, price, time } = props.service;
    const { handleRemove } = props;
    return (
        <Col>
            <Card className="card">
                <Card.Img variant="top" height="300px" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>Name:{name}</h3>
                        <h4>Price:{price}</h4>
                        <h4>Time:{time}</h4>
                    </Card.Title>
                    <Card.Text>
                        <p>Description:{description.slice(0, 180)}</p>
                        <button onClick={() => handleRemove(key)} className="btn-dark rounded-3 me-3">Remove</button>
                        <Link to="/manageOrder"><button className="bg-warning">Go To Order</button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>






    );
};

export default ReviewService;