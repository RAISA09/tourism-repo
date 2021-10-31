import React from 'react';
import { Carousel } from 'react-bootstrap';
import image01 from '../../../../src/images/pakistan---islamabad.jpeg'
import image02 from '../../../../src/images/newFile-12.jpg'
import image03 from '../../../../src/images/Schoolchildren-hill-Thimpu-Bhutan.jpg'

const Banner = () => {
    return (
        <div className="mb-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image01}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Islamabad Beautiful City</h3>
                        <p>Islamabad city is a beautiful city </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image02}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Butan Buddish Mondir</h3>
                        <p>He is historical place</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image03}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Butan Mountaing</h3>
                        <p>All adventure lover going this place</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
