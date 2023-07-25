import React, { useRef, useEffect } from 'react'
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
    //fix hiệu suất youtube embed
    const iframeRef = useRef(null)
    useEffect(() => {
        // Xác định các tùy chọn của Intersection Observer
        const options = {
            root: null, // Viewport là root
            rootMargin: '0px', // Không thêm khoảng cách root margin
            threshold: 0.2, // Gọi hàm callback khi ít nhất 20% của phần tử xuất hiện trong viewport
        };

        // Hàm callback sẽ được gọi khi phần tử xuất hiện trong viewport
        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                // Kiểm tra xem video có nằm trong viewport không
                if (entry.isIntersecting) {
                    // Nếu video xuất hiện, thì gán giá trị cho thuộc tính src để tải video
                    const iframe = iframeRef.current;
                    const dataSrc = iframe.getAttribute('datasrc')
                    if (dataSrc) {
                        iframe.setAttribute('src', dataSrc)
                    }

                    // Dừng quan sát video sau khi nó đã được tải
                    observer.unobserve(entry.target)
                }
            })
        }

        // Tạo một instance của Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, options)

        // Bắt đầu quan sát video
        if (iframeRef.current) {
            observer.observe(iframeRef.current)
        }

        // Hủy quan sát khi component bị unmount
        const currentIframe = iframeRef.current
        return () => {
            if (currentIframe) {
                observer.unobserve(currentIframe)
            }
        }
    }, [])

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
                                                ref={iframeRef}
                                                width="640"
                                                height="390"
                                                loading="lazy"
                                                datasrc="https://www.youtube.com/embed/NUrzZywriRk"
                                                title="Hướng dẫn làm báo giá cửa nhôm kính phụ kiện gộp vào đơn giá"
                                                allowFullScreen
                                            // preload="none"
                                            ></iframe>
                                            <a className='link-video' href='https://www.youtube.com/watch?v=NUrzZywriRk&autoplay=0' target="_blank" rel="noreferrer"> &gt;&gt; Video làm báo giá chuyên nghiệp siêu nhanh</a>
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
                                <a href="https://www.facebook.com/phanmemsanxuatcua"><img src="../images/logo_social/facebook.png" alt='anh facebook' width={64} height={64} /></a>
                                <a href="https://www.facebook.com/phanmemsanxuatcua"><img src="../images/logo_social/twitter.png" alt='anh twitter' width={64} height={64} /></a>
                                <a href="https://www.youtube.com/watch?v=45bH7w1xYbQ"><img src="../images/logo_social/youtube.png" alt='anh youtube' width={64} height={64} /></a>
                                <a href="https://mail.google.com"><img src="../images/logo_social/google.png" alt='anh gmail' width={64} height={64} /></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Content>
    )
}

export default Footer