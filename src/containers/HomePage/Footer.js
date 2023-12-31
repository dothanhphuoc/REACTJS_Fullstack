import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class Footer extends Component {

    render() {

        return (
            <div className='section section-footer'>
                <p>&copy; Dothanhphuoc giac mo tro thanh dev <a href='https://www.facebook.com/neilJune07' target='_blank'>Detail Info</a></p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
