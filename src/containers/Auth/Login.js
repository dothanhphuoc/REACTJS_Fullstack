import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login-container'>
                <div className='box row'>
                    <div className='login-content'>

                        <h2 className='col-12 login-title'>Login</h2>

                        <div className='col-12 form-group login-input'>

                            <label>Username: </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Username ...'
                            />
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label>Password: </label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter Password ...'
                            />
                        </div>

                        <div className='col-12 text-center'>
                            <button className='btn'>Login</button>
                        </div>

                        <div className='col-12 mt-3'>
                            <span className='forget-password'>Forget your password!</span>
                        </div>

                        <div className='col-12 text-center'>
                            <span className='login-action'>or Login With: </span>
                        </div>

                        <div className='col-12 text-center'>
                            <i class="fa-brands fa-facebook icon-action icon-facebook"></i>
                            <i class="fa-brands fa-google-plus icon-action icon-google"></i>
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
