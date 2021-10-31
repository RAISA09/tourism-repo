import React from 'react';
import Banner from '../Banner/Banner';
import HajjServices from '../HajjServices/HajjServices';
import Services from '../Services/Services';
import WinterVaction from '../WinterVaction/WinterVaction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HajjServices></HajjServices>
            <WinterVaction></WinterVaction>
        </div>
    );
};

export default Home;