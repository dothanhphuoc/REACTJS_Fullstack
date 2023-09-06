import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import img
import cot_song from "../../../assets/specialty/cot-song.jpg";

class Specialty extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
        };

        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <h2>Chuyên Khoa Phổ Biến</h2>
                        <a href=''>Xem thêm</a>
                    </div>
                    <div className='specialty-content'>
                        <Slider {...settings}>
                            <div className='specialty-box-item'>
                                <div className='background-img'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='specialty-box-item'>
                                <div className='background-img'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='specialty-box-item'>
                                <div className='background-img'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='specialty-box-item'>
                                <div className='background-img'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='specialty-box-item'>
                                <div className='background-img'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='specialty-box-item'>
                                <div className='background-img'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
