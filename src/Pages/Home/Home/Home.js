import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import InformationBox from '../InformationBoxs/InformationBoxs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Navigation></Navigation>
            <Banner></Banner>
            <InformationBox></InformationBox>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;