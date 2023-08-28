import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { eventEmitter } from '../../utils/Emitter';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

    }

    componentDidMount() {
        let user = this.props.infoUserEdit;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }

    //toggle
    toggle = () => {
        this.props.toggleUserModal();
    }

    handleOnChangeInput = (e, nameInput) => {
        this.setState(
            {
                [nameInput]: e.target.value,
            }
        );
    };

    checkValidateInput = () => {
        let isValid = true; //xac nhan
        let nameInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < nameInput.length; i++) {
            if (!this.state[nameInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + nameInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveEditUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //call api edit user
            this.props.editUser(this.state);
        }

        console.log(this.state)
    }

    render() {

        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className='modal-user-container'
                size="lg"
            >
                <ModalHeader toggle={() => this.toggle()}>Edit information user!!</ModalHeader>

                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                className='input'
                                value={this.state.email}
                                onChange={(e) => this.handleOnChangeInput(e, 'email')}
                                disabled
                            />
                        </div>

                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='input'
                                value={this.state.password}
                                onChange={(e) => this.handleOnChangeInput(e, 'password')}
                                disabled
                            />
                        </div>

                        <div className='input-container'>
                            <label>First Name</label>
                            <input
                                type='text'
                                className='input'
                                value={this.state.firstName}
                                onChange={(e) => this.handleOnChangeInput(e, 'firstName')}
                            />
                        </div>

                        <div className='input-container'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                className='input'
                                value={this.state.lastName}
                                onChange={(e) => this.handleOnChangeInput(e, 'lastName')}
                            />
                        </div>

                        <div className='input-container w100-input'>
                            <label>Address</label>
                            <input
                                type='text'
                                className='input'
                                value={this.state.address}
                                onChange={(e) => this.handleOnChangeInput(e, 'address')}
                            />
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                        className='px-3'
                        onClick={() => this.handleSaveEditUser()}
                    >Sava Update</Button>{' '}
                    <Button
                        color="secondary"
                        className='px-3'
                        onClick={() => this.toggle()}
                    >Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);

