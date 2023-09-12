import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGE } from '../../utils/constant';


class Header extends Component {

    handleChangeLanguage = (language) => {
        this.props.changeLanguageRedux(language);
    }

    render() {
        const { processLogout, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className="btn btn-logout">
                    {/** languages */}
                    <div className='languages'>
                        <span
                            className={language === 'vi' ? 'language-vi active' : 'language-vi'}
                            onClick={() => this.handleChangeLanguage(LANGUAGE.VI)}
                        >VI</span>
                        <span>/</span>
                        <span
                            className={language === 'en' ? 'language-en active' : 'language-en'}
                            onClick={() => this.handleChangeLanguage(LANGUAGE.EN)}
                        >EN</span>
                    </div>
                    <i className="fas fa-sign-out-alt" onClick={processLogout} title='Log out'></i>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageRedux: (language) => dispatch(actions.changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
