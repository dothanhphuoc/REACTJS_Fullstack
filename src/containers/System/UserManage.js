import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManage.scss';
import {
    getListUser,
    createNewUserService,
    deleteUserService,
    editUserService
} from '../../services/userService';
import ModalAddUser from './ModalAddUser';
import { eventEmitter } from '../../utils/Emitter';
import ModalEditUser from './ModalEditUser';


class UserManage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listUser: [],
            isOpenModalUser: false,
            isOpenEditModalUser: false,
            infoUserEdit: {}
        }
    }

    // life cycle
    /*
        - 1. run contructer -> init state
        - 2. did mount (setState)
        - 3. render (re-render)
    */

    async componentDidMount() {
        await this.getListUserFromReact();
    }

    //action
    getListUserFromReact = async () => {
        let response = await getListUser("ALL");
        if (response && response.errCode === 0) {
            this.setState({
                listUser: response.users,
                isOpenModalUser: false
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    handleOpenEditModal = () => {
        this.setState({
            isOpenEditModalUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleEditUserModal = () => {
        this.setState({
            isOpenEditModalUser: !this.state.isOpenEditModalUser
        })
    }

    //create new user
    createNewUser = async (dataUser) => {
        try {
            let response = await createNewUserService(dataUser);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getListUserFromReact();
                this.setState({
                    isOpenModalUser: false,
                })
                eventEmitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e)
        }
    }

    //delete user
    handleDeleteUser = async (user) => {
        try {
            let response = await deleteUserService(user.id);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getListUserFromReact();
                this.setState({
                    isOpenModalUser: false,
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    //edit user 
    handleEditUser = async (user) => {
        this.setState({
            isOpenEditModalUser: true,
            infoUserEdit: user
        })
    }

    doEditUser = async (user) => {
        try {
            let response = await editUserService(user);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getListUserFromReact();
                this.setState({
                    isOpenEditModalUser: false,
                })
            }
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        let listUser = this.state.listUser;

        return (
            <div className="user-container">

                <ModalAddUser
                    isOpen={this.state.isOpenModalUser}
                    toggleUserModal={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />

                {
                    this.state.isOpenEditModalUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditModalUser}
                        toggleUserModal={this.toggleEditUserModal}
                        infoUserEdit={this.state.infoUserEdit}
                        editUser={this.doEditUser}
                    />
                }

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
                                                <i
                                                    className="fa-solid fa-pen-to-square"
                                                    onClick={() => this.handleEditUser(user)}
                                                ></i>

                                                <i
                                                    className="fa-solid fa-trash"
                                                    onClick={() => this.handleDeleteUser(user)}
                                                ></i>
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
