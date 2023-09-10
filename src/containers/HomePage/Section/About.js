import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class About extends Component {

    render() {

        return (
            <div className='section section-about'>
                <div className='section-container'>
                    <div className='section-header'>
                        <h2>Truyền thông</h2>
                    </div>

                    <div className='section-about-content'>
                        <div className='section-about-content-video'>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/5uYw1k3zkmU"
                                title="Ngày Em Đẹp Nhất - Vì Ngày Em Đẹp Nhất Là Ngày Anh Mất Em | Nhạc Lofi Chill Nhẹ Nhàng Hay Nhất 2023"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className='section-about-content-logo'>
                            <ul>
                                <li>box 1</li>
                                <li>box 1</li>
                                <li>box 1</li>
                                <li>box 1</li>
                                <li>box 1</li>
                                <p>✔ Các bạn hiểu được 1 FullStack Web Developer thì cần chuẩn bị những gì. Ở đây, mình không dám chắc 100%
                                    các bạn sẽ trở thành Fullstack Developer, nhưng nếu bạn chọn Frontend hay Backend thì khóa học này
                                    cũng cung cấp cho bạn nhiều điều bổ ích</p>
                            </ul>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
