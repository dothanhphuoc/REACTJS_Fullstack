import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getListUser } from '../../services/userService';
import ModalAddUser from './ModalAddUser';


class UserManage extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    // life cycle
    /*
        - 1. run contructer -> init state
        - 2. did mount (setState)
        - 3. render (re-render)
    */

    async componentDidMount() {
        let response = await getListUser("ALL");
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
                isOpenModalUser: false
            })
        }
    }

    //action
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    render() {
        let listUser = this.state.arrUsers;

        return (
            <div className="user-container">

                <ModalAddUser
                    isOpen={this.state.isOpenModalUser}
                    toggleUserModal={this.toggleUserModal}
                />
                <h2 className='title text-center'>Manage users with Neil</h2>

                <div className='mx-1 text-center mt-3'>
                    <button className='btn-primary' onClick={() => this.handleAddNewUser()}>Add New User <i className="fa-solid fa-plus"></i></button>
                </div>

                <div className='user-table'>
                    <table id="table">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listUser && listUser.length > 0 && listUser.map((user, index) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.email}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td className='action-icon'>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                                <i className="fa-solid fa-trash"></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
