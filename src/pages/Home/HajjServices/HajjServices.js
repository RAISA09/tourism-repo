import React from 'react';
import image1 from '../../../images/makka.jpg'
import image2 from '../../../images/ecORBy2.jpg'
import './HajjServices.css'

const HajjServices = () => {
    return (
        <div className="bg-dark my-5 py-4">
            <h3 className="our-haj-services pt-3 mb-3">Our Special Umrah Hajj Packages </h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={image1} height="500px" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">20 Days Umrah Package</h3>
                            <p className="card-text">Our 20 Days Umrah Package are operated in private basis. We do not combine guests to make groups. The guides and drivers are assigned just for you, your family or your friends during transfers and Ziyarats. As we are based in Makkah, our ground staff is within a walking distance from your hotels.3 Star Hotel with Umrah Prize: 2575 USD per person in double or triple room . 4 Star Hotel with Umrah Prize: 3860 USD per person in double or triple room .5 Star Hotel with Umrah Prize: 4745 USD per person in double or triple room</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={image2} height="500px" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Umrah Package-07 Days</h3>
                            <p className="card-text">Our 07 Days Umrah Package are operated in private basis. We do not combine guests to make groups. The guides and drivers are assigned just for you, your family or your friends during transfers and Ziyarats. As we are based in Makkah, our ground staff is within a walking distance from your hotels.3 Star Hotel with Umrah Prize: 1275 USD per person in double or triple room . 4 Star Hotel with Umrah Prize: 1860 USD per person in double or triple room .5 Star Hotel with Umrah Prize: 2445 USD per person in double or triple room</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HajjServices;