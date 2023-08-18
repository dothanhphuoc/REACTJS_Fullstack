import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { Alert } from 'bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = () => {
        console.log('username: ', this.state.username, "Password: ", this.state.password);
        console.log("All State", this.state)
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className='login-container'>
                <div className='box row'>
                    <div className='login-content'>

                        <h2 className='col-12 login-title'>Login</h2>

                        <div className='col-12 form-group login-input'>

                            <label>Username: </label>

                            <div className='box-input'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Username ...'
                                    defaultValue={this.state.username}
                                    onChange={(e) => this.handleOnChangeUsername(e)}
                                />
                                <i class="fa-regular fa-user"></i>
                            </div>
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label>Password: </label>

                            <div className='box-input'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter Password ...'
                                    defaultValue={this.state.password}
                                    onChange={(e) => this.handleOnChangePassword(e)}
                                />

                                <i className={this.state.isShowPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'} onClick={() => this.handleShowHidePassword()}></i>
                            </div>
                        </div>

                        <div className='col-12 text-center'>
                            <button className='btn' onClick={() => this.handleLogin()}>Login</button>
                        </div>

                        <div className='col-12 mt-3'>
                            <span className='forget-password'>Forget your password!</span>
                        </div>

                        <div className='col-12 text-center'>
                            <span className='login-action'>or Login With: </span>
                        </div>

                        <div className='col-12 text-center'>
                            <i className="fa-brands fa-facebook icon-action icon-facebook"></i>
                            <i className="fa-brands fa-google-plus icon-action icon-google"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
