import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends Component {

    render() {

        return (
            <div className='header-container'>
                <div className='header-content'>
                    <div className='left-content'>
                        <i className="fa-solid fa-bars icon-menu"></i>
                        <div className='logoWeb'></div>
                    </div>

                    <div className='center-content'>
                        <ul className='navbar-center-content'>
                            <li className='child-center-content'>
                                <a href=''>Chuyên khoa</a>
                                <span>Tìm bác sĩ theo chuyên khoa</span>
                            </li>
                            <li className='child-center-content'>
                                <a href=''>Cơ sở y tế</a>
                                <span>Chọn bệnh viện phòng khám</span>
                            </li>
                            <li className='child-center-content'>
                                <a href=''>Bác sĩ</a>
                                <span>Lựa chọn bác sĩ</span>
                            </li>
                            <li className='child-center-content'>
                                <a href=''>Gói khám</a>
                                <span>Khám sức khỏe tổng quát</span>
                            </li>
                        </ul>
                    </div>

                    <div className='right-content'>
                        <div className='action'>
                            <a href=''>
                                <i class="fa-solid fa-question"></i>
                                Hỗ Trợ
                            </a>

                            <span className='phoneNumber'>0763 505 333</span>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
