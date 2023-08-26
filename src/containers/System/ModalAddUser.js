import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalAddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    //toggle
    toggle = () => {
        this.props.toggleUserModal();
    }

    render() {

        console.log('check props', this.props.toggleUserModal)

        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className='modal-user-container'
                size="lg"
            >
                <ModalHeader toggle={() => this.toggle()}>Create new user!!</ModalHeader>

                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text' className='input' />
                        </div>

                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' className='input' />
                        </div>

                        <div className='input-container'>
                            <label>First Name</label>
                            <input type='text' className='input' />
                        </div>

                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='text' className='input' />
                        </div>

                        <div className='input-container w100-input'>
                            <label>Address</label>
                            <input type='text' className='input' />
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.toggle()}>Save Changes</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => this.toggle()}>Close</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddUser);

