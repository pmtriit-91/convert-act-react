import React from 'react'
import { Typography, Layout, Row, Col } from 'antd'
import {
    EnvironmentFilled,
    PhoneFilled,
    MailFilled,
    FacebookFilled,
    IeOutlined
} from '@ant-design/icons'

import './footer.scss'

const { Content } = Layout
const { Paragraph } = Typography

function Footer() {
    return (
        <Content className='component-themefooter' id='contact'>
            <div>
                <div id="footer-widget" className="footer-widget">
                    <div className="section-head-icon text-center flex-center">
                        <Paragraph className="text-h2">VỀ PHẦN MỀM CỬA NHÔM ACT</Paragraph>
                    </div>
                    <div className="container">
                        <Row gutter={30}>
                            <Col lg={14} md={24} sm={24}>
                                <div className="single-widget">
                                    <Paragraph className="text-h4">
                                        <span className='act-text'>ACT </span>
                                        là đơn vị tiên phong trong lĩnh vực cung cấp phần mềm, ứng dụng gia công sản xuất cửa nhôm, cửa nhựa.
                                    </Paragraph>
                                    <Paragraph className="text-h4">
                                        Với sứ mệnh mang đến cho khách hàng những sản phẩm phần mềm chuyên nghiệp, tối ưu nhất để áp dụng vào sản xuất thực tế từ đó giúp tiết kiệm chi phí, tăng năng suất trong công việc.
                                    </Paragraph>
                                    <Paragraph className="text-h4">
                                        <span className='act-text'>ACT </span>
                                        luôn lấy khách hàng làm trung tâm, luôn lắng nghe và hiểu rõ khách hàng để tìm ra những giải pháp tốt nhất phục vụ lại khách hàng một cách tối đa.
                                    </Paragraph>
                                </div>
                            </Col>

                            <Col lg={10} md={24} sm={24} className='hidden-mobile'>
                                <div className="single-widget">
                                    <div className="video-footer d-flex">
                                        <div className="ins-video">
                                            <iframe
                                                className='video'
                                                width="427"
                                                height="240"
                                                src="https://www.youtube.com/embed/owEjKRXwo1o"
                                                title="Hướng dẫn làm báo giá cửa nhôm kính phụ kiện gộp vào đơn giá"
                                                loading="lazy"
                                            ></iframe>
                                            <a className='link-video' href='https://www.youtube.com/watch?v=owEjKRXwo1o&autoplay=0' target="_blank" rel="noreferrer"> &gt;&gt; Video làm báo giá chuyên nghiệp siêu nhanh</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={24} md={24} sm={24} className='full-width'>
                                <div className="single-widget">
                                    <div className='contact-header'>
                                        <Paragraph className="text-h4">THÔNG TIN LIÊN HỆ</Paragraph>
                                    </div>

                                    <div className='wrapper-contact'>
                                        <div className='wrapper-contact1'>
                                            <div className="single-feed d-flex contact-grow1">
                                                <div className="icon">
                                                    <PhoneFilled />
                                                </div>
                                                <div className="msg mb-5">
                                                    <a className='text-link' href="tel:0977853869">0977.853.869</a><br />
                                                    <a className='text-link' href="tel:0878385869">0878.38.58.69</a>
                                                </div>
                                            </div>

                                            <div className="single-feed d-flex contact-grow1">
                                                <div className="icon">
                                                    <IeOutlined />
                                                </div>
                                                <div className="msg mb-5">
                                                    <a className='text-link' href="https://phanmemcua.com/">phanmemcua.com</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='wrapper-contact2'>
                                            <div className="single-feed d-flex contact-grow2">
                                                <div className="icon">
                                                    <EnvironmentFilled />
                                                </div>
                                                <div className="msg mb-5">
                                                    <Paragraph className="text-p">112 - Ngõ 59 - Mễ Trì - Nam Từ Liêm - Hà Nội</Paragraph>
                                                </div>
                                            </div>

                                            <div className="single-feed d-flex contact-grow2">
                                                <div className="icon">
                                                    <MailFilled />
                                                </div>
                                                <div className="msg mb-5">
                                                    <a className='text-link' href="mailto:ungdungact@gmail.com">ungdungact@gmail.com</a>
                                                </div>
                                            </div>

                                            <div className="single-feed d-flex contact-grow2">
                                                <div className="icon">
                                                    <FacebookFilled />
                                                </div>
                                                <div className="msg mb-5">
                                                    <a className='text-link' href="https://www.facebook.com/phanmemsanxuatcua">facebook.com/phanmemsanxuatcua</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <footer className="default-footer">
                    <div className="container">
                        <div className="d-flex space-between mobile-center no-flex-xs">
                            <div className="footer-copy-right">
                                <Paragraph className='title-bottom-footer'>&copy; {(new Date().getFullYear())}<span>|</span><a href="/#top">ACT đồng hành sản xuất cửa cùng bạn</a></Paragraph>
                            </div>
                            <div className="footer-social-link">
                                <a href="https://www.facebook.com/phanmemsanxuatcua"><img src="../images/logo_social/facebook.png" alt='anh facebook' /></a>
                                <a href="https://www.facebook.com/phanmemsanxuatcua"><img src="../images/logo_social/twitter.png" alt='anh twitter' /></a>
                                <a href="https://www.youtube.com/watch?v=45bH7w1xYbQ"><img src="../images/logo_social/youtube.png" alt='anh youtube' /></a>
                                <a href="https://mail.google.com"><img src="../images/logo_social/google.png" alt='anh gmale' /></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Content>
    )
}

export default Footer