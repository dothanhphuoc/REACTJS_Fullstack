import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import googlePlay from '../../assets/google-play.svg';
import appStore from '../../assets/app-store.svg';

import a1 from '../../assets/images/options-home/a1.png';
import a2 from '../../assets/images/options-home/a2.png';
import a3 from '../../assets/images/options-home/a3.png';
import a4 from '../../assets/images/options-home/a4.png';
import a5 from '../../assets/images/options-home/a5.png';
import a6 from '../../assets/images/options-home/a6.png';
import a7 from '../../assets/images/options-home/a7.png';
import a8 from '../../assets/images/options-home/a8.png';
import a9 from '../../assets/images/options-home/a9.png';

import { FormattedMessage } from 'react-intl';
import { LANGUAGE } from '../../utils/constant';
import { changeLanguage } from '../../store/actions/appActions';




class Header extends Component {

    handleChangeLanguage = (language) => {
        //fire redux event: action
        this.props.changeLanguageRedux(language);
    }

    render() {
        /// lay tu redux
        let language = this.props.language;

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
                                    <a href=''><FormattedMessage id='homeheader.specialty' /></a>
                                    <span><FormattedMessage id='homeheader.searchdoctor' /></span>
                                </li>
                                <li className='child-center-content'>
                                    <a href=''><FormattedMessage id='homeheader.healthFacilities' /></a>
                                    <span><FormattedMessage id="homeheader.selectHospital" /></span>
                                </li>
                                <li className='child-center-content'>
                                    <a href=''><FormattedMessage id='homeheader.doctor' /></a>
                                    <span><FormattedMessage id='homeheader.selectDoctor' /></span>
                                </li>
                                <li className='child-center-content'>
                                    <a href=''><FormattedMessage id='homeheader.checkupPackage' /></a>
                                    <span><FormattedMessage id='homeheader.generalHealth' /></span>
                                </li>
                            </ul>
                        </div>

                        <div className='right-content'>
                            <div className='action'>
                                <a href=''>
                                    <i className="fa-solid fa-question"></i>
                                    <FormattedMessage id='homeheader.support' />
                                </a>

                                <span className='phoneNumber'>0763 505 333</span>
                            </div>

                            <div className='language'>
                                <span
                                    className={language === 'vi' ? 'language-vi active' : 'language-vi'}
                                    onClick={() => this.handleChangeLanguage(LANGUAGE.VI)}
                                >VI </span>
                                <span> / </span>
                                <span
                                    className={language === 'en' ? 'language-en active' : 'language-en'}
                                    onClick={() => this.handleChangeLanguage(LANGUAGE.EN)}
                                > EN</span>
                            </div>
                        </div>
                    </div>
                </div >

                <div className='header-banner'>
                    <div className='title'>
                        <h3><FormattedMessage id='banner.title1' /> <br /> <b><FormattedMessage id='banner.title2' /></b></h3>
                    </div>

                    <div className='search'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type='text' placeholder='Tìm phòng khám ...' />
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
                                <a href=''><FormattedMessage id='options.specialistExamination' /></a>
                            </li>

                            <li>
                                <img alt='a2' src={a2} />
                                <a href=''><FormattedMessage id='options.remoteExamination' /></a>
                            </li>

                            <li>
                                <img alt='a3' src={a3} />
                                <a href=''><FormattedMessage id='options.generalExamination' /></a>
                            </li>

                            <li>
                                <img alt='a3' src={a4} />
                                <a href=''><FormattedMessage id='options.medicalTests' /></a>
                            </li>

                            <li>
                                <img alt='a3' src={a5} />
                                <a href=''><FormattedMessage id='options.mentalHealth' /></a>
                            </li>

                            <li>
                                <img alt='a6' src={a6} />
                                <a href=''><FormattedMessage id='options.dentalExamination' /></a>
                            </li>

                            <li>
                                <img alt='a3' src={a7} />
                                <a href=''><FormattedMessage id='options.surgeryPackage' /></a>
                            </li>

                            <li>
                                <img alt='a3' src={a8} />
                                <a href=''><FormattedMessage id='options.testHealth' /></a>
                            </li>

                            <li>
                                <img alt='a3' src={a9} />
                                <a href=''><FormattedMessage id='options.medicalNearYou' /></a>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageRedux: (language) => dispatch(changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
