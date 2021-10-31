import React from 'react';
import image1 from '../../../../src/images/Sajek-1.jpg'
import './WinterVation.css'
const WinterVaction = () => {
    return (
        <div className="bg-dark">
            <h2 className="our-services pt-3 mb-3">Winter Special</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col-lg-6 mb-5 ">

                    <img src={image1} className="card-img-top p-3" alt="..." />

                </div>
                <div className="col-lg-6 mt-5 winter-text">

                    <h3 className="text-start">Sajek Valley</h3>
                    <h5 className="text-start">7500 Taka(25% off)</h5>
                    <h5 className="text-start">4 Days/3 Nights</h5>
                    <p className="text-start">Sajek valley is famous for its natural beauty. The valley is surrounded by mountains, dense forest, grasslands hilly tracks. Many small rivers flow through the mountains among which Kachalong and Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and Mayni river. The road to Sajek has high picks and falls.</p>

                </div>

            </div>
        </div>
    );
};

export default WinterVaction;