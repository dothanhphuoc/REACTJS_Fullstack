import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class Doctor extends Component {

    render() {


        return (
            <div className='section section-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <h2>Bác sĩ nổi bật tuần qua</h2>
                        <a href=''>Xem thêm</a>
                    </div>
                    <div className='section-content'>
                        <Slider {...this.props.setting}>

                            <div className='section-box-item section-doctor'>
                                <div className='section-doctor-box'>
                                    <div className='background-img section-doctor'>
                                    </div>
                                    <div className='text-center'>
                                        <h3>Giáo sư, tiến sĩ Hà Văn Quyết</h3>
                                        <h4>Tiêu hóa - Bệnh viêm gan</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='section-box-item section-doctor'>
                                <div className='section-doctor-box'>
                                    <div className='background-img section-doctor'>
                                    </div>
                                    <div className='text-center'>
                                        <h3>Giáo sư, tiến sĩ Hà Văn Quyết</h3>
                                        <h4>Tiêu hóa - Bệnh viêm gan</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='section-box-item section-doctor'>
                                <div className='section-doctor-box'>
                                    <div className='background-img section-doctor'>
                                    </div>
                                    <div className='text-center'>
                                        <h3>Giáo sư, tiến sĩ Hà Văn Quyết</h3>
                                        <h4>Tiêu hóa - Bệnh viêm gan</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='section-box-item section-doctor'>
                                <div className='section-doctor-box'>
                                    <div className='background-img section-doctor'>
                                    </div>
                                    <div className='text-center'>
                                        <h3>Giáo sư, tiến sĩ Hà Văn Quyết</h3>
                                        <h4>Tiêu hóa - Bệnh viêm gan</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='section-box-item section-doctor'>
                                <div className='section-doctor-box'>
                                    <div className='background-img section-doctor'>
                                    </div>
                                    <div className='text-center'>
                                        <h3>Giáo sư, tiến sĩ Hà Văn Quyết</h3>
                                        <h4>Tiêu hóa - Bệnh viêm gan</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='section-box-item section-doctor'>
                                <div className='section-doctor-box'>
                                    <div className='background-img section-doctor'>
                                    </div>
                                    <div className='text-center'>
                                        <h3>Giáo sư, tiến sĩ Hà Văn Quyết</h3>
                                        <h4>Tiêu hóa - Bệnh viêm gan</h4>
                                    </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
