import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getListUser } from '../../services/userService';


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
        - 3. render
    */

    async componentDidMount() {
        let response = await getListUser("ALL");
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    render() {
        let listUser = this.state.arrUsers;

        return (
            <div className="user-container">
                <h2 className='title text-center'>Manage users with Neil</h2>

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
                                                <i class="fa-solid fa-pen-to-square"></i>
                                                <i class="fa-solid fa-trash"></i>
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
