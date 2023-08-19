import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { userLoginSuccess } from '../../store/actions';
import './Login.scss';

//userService.js
import { handleLoginApi } from "../../services/userService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
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

    handleLogin = async () => {
        // khi request server -> clear errMessage
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleLoginApi(this.state.username, this.state.password);

            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }

            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                //success
                console.log('login success!!')
            }

        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
        }
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
                                <i className="fa-regular fa-user"></i>
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

                        <div className='col-12' style={{ color: 'red' }}>
                            <span>{this.state.errMessage}</span>
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
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
