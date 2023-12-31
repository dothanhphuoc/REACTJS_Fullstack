import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class Specialty extends Component {

    render() {

        return (
            <div className='section section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <h2>Chuyên Khoa Phổ Biến</h2>
                        <a href=''>Xem thêm</a>
                    </div>
                    <div className='section-content'>
                        <Slider {...this.props.setting}>
                            <div className='section-box-item'>
                                <div className='background-img section-specialty'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-specialty'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-specialty'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-specialty'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-specialty'>
                                </div>
                                <h4 className='title-name'>Cột sống</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-specialty'>
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
