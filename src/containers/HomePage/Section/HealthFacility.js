import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class HealthFacility extends Component {

    render() {


        return (
            <div className='section section-health-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <h2>Cơ sở y tế nổi bật</h2>
                        <a href=''>Xem thêm</a>
                    </div>
                    <div className='section-content'>
                        <Slider {...this.props.setting}>
                            <div className='section-box-item'>
                                <div className='background-img section-health-facility'>
                                </div>
                                <h4 className='title-name'>Bệnh viện đa khoa An Việt</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-health-facility'>
                                </div>
                                <h4 className='title-name'>Bệnh viện đa khoa An Việt</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-health-facility'>
                                </div>
                                <h4 className='title-name'>Bệnh viện đa khoa An Việt</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-health-facility'>
                                </div>
                                <h4 className='title-name'>Bệnh viện đa khoa An Việt</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-health-facility'>
                                </div>
                                <h4 className='title-name'>Bệnh viện đa khoa An Việt</h4>
                            </div>
                            <div className='section-box-item'>
                                <div className='background-img section-health-facility'>
                                </div>
                                <h4 className='title-name'>Bệnh viện đa khoa An Việt</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthFacility);
