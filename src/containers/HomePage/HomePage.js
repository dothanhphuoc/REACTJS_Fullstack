import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Specialty from './Section/Specialty';
import HealthFacility from './Section/HealthFacility';
import Doctor from './Section/Doctor';
import Handbook from './Section/Handbook';
import './HomePage.scss';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {

        let settings3 = {
            dots: false,
            infinite: true,
            speed: 500,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
        };

        let settings2 = {
            dots: false,
            infinite: true,
            speed: 500,
            lazyLoad: 'ondemand',
            slidesToShow: 2,
            slidesToScroll: 1,
        };

        return (
            <>
                <Header />

                <HealthFacility
                    setting={settings3}
                />

                <Specialty
                    setting={settings3}
                />

                <Handbook
                    setting={settings2}
                />

                <Doctor
                    setting={settings3}
                />

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
