import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class Handbook extends Component {

    render() {

        return (
            <div className='section section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <h2>Cẩm nang</h2>
                        <a href=''>Xem thêm</a>
                    </div>
                    <div className='section-content'>
                        <Slider {...this.props.setting}>
                            <div className='section-box-item section-handbook'>
                                <div>
                                    <div className='background-img section-handbook-bg'>
                                    </div>
                                    <p>Lưu ngay 7 bác sĩ da liễu cho bé giỏi ở Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='section-box-item section-handbook'>
                                <div>
                                    <div className='background-img section-handbook-bg'>
                                    </div>
                                    <p>Lưu ngay 7 bác sĩ da liễu cho bé giỏi ở Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='section-box-item section-handbook'>
                                <div>
                                    <div className='background-img section-handbook-bg'>
                                    </div>
                                    <p>Lưu ngay 7 bác sĩ da liễu cho bé giỏi ở Đà Nẵng</p>
                                </div>
                            </div>
                            <div className='section-box-item section-handbook'>
                                <div>
                                    <div className='background-img section-handbook-bg'>
                                    </div>
                                    <p>Lưu ngay 7 bác sĩ da liễu cho bé giỏi ở Đà Nẵng</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
