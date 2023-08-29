import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import googlePlay from '../../assets/google-play.svg';
import appStore from '../../assets/app-store.svg';
import a1 from '../../assets/images/options-home/a1.png';
import a2 from '../../assets/images/options-home/a2.png';
import a3 from '../../assets/images/options-home/a3.png';




class Header extends Component {

    render() {

        return (
            <>
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

                <div className='header-banner'>
                    <div className='title'>
                        <h3>NỀN TẢNG Y TẾ <br /> <b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</b></h3>
                    </div>

                    <div className='search'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type='text' placeholder='Tìm Bệnh Nhân' />
                    </div>

                    <div className='app-dowload'>
                        <a href='https://bookingcare.vn/app/android' target="_blank">
                            <img alt='googlePlay' src={googlePlay} />
                        </a>

                        <a href='https://bookingcare.vn/app/ios' target="_blank">
                            <img alt='appStore' src={appStore} />
                        </a>
                    </div>

                    <div className='options'>
                        <ul className='list-options'>
                            <li>
                                <img alt='a1' src={a1} />
                                <a href=''>Khám <br /> Chuyên khoa</a>
                            </li>

                            <li>
                                <img alt='a2' src={a2} />
                                <a href=''>Khám <br /> Từ xa</a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''>Khám <br /> Tổng quát</a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''>Khám <br /> Tổng quát</a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''>Khám <br /> Tổng quát</a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''>Khám <br /> Tổng quát</a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''>Khám <br /> Tổng quát</a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''>Khám <br /> Tổng quát</a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''>Khám <br /> Tổng quát</a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''>Khám <br /> Tổng quát</a>
                            </li>
                        </ul>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
