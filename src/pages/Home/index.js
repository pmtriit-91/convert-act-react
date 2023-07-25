import React, { useEffect, useRef, useState } from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap, TextPlugin } from 'gsap/all'

import './home.scss'

const { Content } = Layout
const { Paragraph } = Typography

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

function Home() {
    const [isMobile, setIsMobile] = useState(false)

    const tinhnang1 = useRef(null)
    const textTopLeft = useRef(null)
    const textBottomLeft = useRef(null)
    const textTopRight = useRef(null)
    const textBottomRight = useRef(null)
    const tinhnang2 = useRef(null)
    const textTopLeft2 = useRef(null)
    const textBottomLeft2 = useRef(null)
    const textTopRight2 = useRef(null)
    const textBottomRight2 = useRef(null)
    const t1 = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 2.2, opacity: 0, ease: "power4.easeOut", scale: 0.2 } })
        const ctx = gsap.context(() => {
            tl.from('.wrapper-content-app', { ease: "power2.easeIn" })
                .from('.laptop', {}, 0)
                .from('.phone_right', { rotateZ: 90, y: -200 }, 0)
        })
        if (window.innerWidth < '768') {
            ctx.revert()
            tl.from('.wrapper-content-app', { ease: "power2.easeIn" })
                .from('.laptop', {}, 1)
                .from('.phone_right', { rotateZ: 90, y: -200 }, 1)
        }

        gsap.to(tinhnang1.current, {
            scrollTrigger: {
                trigger: tinhnang1.current,
                toggleActions: 'restart pause resume none',
            },
            text: 'PHIÊN BẢN MẪU CÓ SẴN',
            duration: 1,
            ease: "none",
        }, '+=0.5')

        gsap.to(tinhnang2.current, {
            scrollTrigger: {
                trigger: tinhnang2.current,
                toggleActions: 'restart pause resume none',
            },
            text: 'PHIÊN BẢN TỰ THIẾT KẾ',
            duration: 1,
            ease: "none",
        }, '+=0.5')

        gsap.to('.act-sub-4', {
            scrollTrigger: {
                trigger: '.act-sub-4',
                toggleActions: 'restart none none none',
            },
            delay: 0.5,
            text: 'TẠI SAO',
            duration: 2,
            ease: "expo.out",
        })

        gsap.from('.act-sub-3', {
            scrollTrigger: {
                trigger: '.act-sub-3',
                toggleActions: 'restart none none none',
            },
            delay: 0.5,
            scale: 1.6,
            duration: 2,
            ease: "bounce.out",
        })

        gsap.from('.act-sub-2', {
            scrollTrigger: {
                trigger: '.act-sub-3',
                toggleActions: 'restart none none none',
            },
            opacity: 0,
            delay: 0.5,
            x: 150,
            duration: 2,
            ease: "bounce.out",
        })

        gsap.from('.act-sub-1', {
            scrollTrigger: {
                trigger: '.act-sub-3',
                toggleActions: 'restart none none none',
            },
            delay: 0.5,
            opacity: 0,
            duration: 1.5,
            ease: "power2.in",
        })

        gsap.from('.act-question', {
            scrollTrigger: {
                trigger: '.act-sub-3',
                toggleActions: 'restart none none none',
            },
            delay: 0.5,
            opacity: 0,
            y: 100,
            duration: 1.5,
            rotateX: -360,
            ease: "power2.in",
        })

        gsap.from('.img-question', {
            scrollTrigger: {
                trigger: '.act-sub-3',
                toggleActions: 'restart none none none',
            },
            delay: 0.5,
            opacity: 0,
            y: 200,
            x: 100,
            rotation: 360,
            scale: 0.5,
            duration: 1.3,
            ease: "bounce.out",
        })

        gsap.from('.logo-question', {
            scrollTrigger: {
                trigger: '.act-sub-3',
                toggleActions: 'restart none none none',
            },
            opacity: 0,
            rotateY: 360,
            scale: 0.5,
            duration: 1.3,
            ease: "power2.in",
        })

        // if (window.innerWidth >= 1200) {
        //     gsap.from('.icon-check', {
        //         scrollTrigger: {
        //             trigger: '.icon-check',
        //             // toggleActions: 'restart none none none',
        //         },
        //         opacity: 0,
        //         rotateY: 360,
        //         duration: 0.3,
        //         stagger: 0.3,
        //         ease: "power2.in",
        //     })

        //     gsap.from('.text-description', {
        //         scrollTrigger: {
        //             trigger: '.text-description',
        //         },
        //         opacity: 0,
        //         duration: 0.3,
        //         stagger: 0.3,
        //         ease: "power2.in",
        //     })
        // }

        document.querySelectorAll('.img-item').forEach((elm) => {
            gsap.from(elm, { rotationY: -360, scrollTrigger: { trigger: elm, toggleActions: 'restart none restart none' }, duration: 2 })
        })

        gsap.registerEffect({
            name: 'scroll',
            defaults: {
                opacity: 0,
                duration: 2.5,
            },
            effect: (targets, config) => {
                return gsap.from(targets, {
                    ...config, y: -50,
                    scrollTrigger: {
                        toggleActions: 'restart none none none',
                        trigger: targets
                    }
                })
            }
        })

        gsap.effects.scroll(textTopLeft.current)
        gsap.effects.scroll(textBottomLeft.current)
        gsap.effects.scroll(textTopRight.current)
        gsap.effects.scroll(textBottomRight.current)

        gsap.effects.scroll(textTopLeft2.current)
        gsap.effects.scroll(textBottomLeft2.current)
        gsap.effects.scroll(textTopRight2.current)
        gsap.effects.scroll(textBottomRight2.current)

        //handle mouseenter price box
        const handleColorPrice = (event) => {
            const elm = event.currentTarget
            const textH3 = elm.querySelector('.text-h3')

            gsap.fromTo(textH3, { scale: 0.5, duration: 0.5, rotateX: 180 }, { scale: 1, duration: 0.5, rotateX: 360 })
        }
        document.querySelectorAll('.price-color-4').forEach((elm) => {
            elm.addEventListener('mouseenter', handleColorPrice)
        })

        //handle click button on mobile
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        //clear event
        return () => {
            //clear event mouseenter price
            document.querySelectorAll('.price-color-4').forEach((elm) => {
                elm.removeEventListener('mouseenter', handleColorPrice)
            })
            //clear event click button
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <Content className="full-layout page homenew-page">
            <div id='top'>
                <div className="wrapper-top">
                    <div className='right-bg-top'>
                        <Row gutter={30} className=" fitscreen">
                            <div className="wrapper-right"></div>
                        </Row>
                    </div>
                    <div className="container">
                        <Row gutter={30} className=" fitscreen">
                            <Col lg={9} md={9} sm={24} className="wrapper-content-app">
                                <img
                                    className="iphone-img"
                                    // fetchpriority="high"
                                    src="../images/iphonenew.webp?time=date.now"
                                    alt="iphone-left"
                                />
                                <div className="div-qr">
                                    <img
                                        className="qr"
                                        src="../images/qr1.png"
                                        alt="qr"
                                        width={124}
                                        height={124}
                                    />
                                    <a href="http://onelink.to/ppfgn7" className='btn-web flex-center btn-first' target={'_blank'} rel='noopener noreferrer'>
                                        TẢI VỀ ĐIỆN THOẠI
                                    </a>
                                    <p className="p-qr">(hoặc dùng camera điện thoại để quét)</p>
                                    <a href={'/sign'} className='btn-web flex-center'>
                                        DÙNG BẢN WEB
                                    </a>
                                    <p className="p-qr">(Tạo tài khoản trên điện thoại trước)</p>
                                    <a target="_blank" href="https://cuongact.com/phan-mem-thiet-ke-cua-nhom-kinh-act/" className="btn-text" rel='noopener noreferrer'>
                                        TÌM HIỂU THÊM PHIÊN BẢN TỰ VẼ TRÊN MÁY TÍNH
                                    </a>
                                    <a
                                        className={`btn-web flex-center btn-first`}
                                        href='https://cuongact.com/phan-mem-thiet-ke-cua-nhom-kinh-act'
                                        target={isMobile ? '_self' : '_blank'}
                                        rel={isMobile ? '' : 'noopener noreferrer'}
                                    >
                                        CHỌN
                                    </a>
                                </div>
                            </Col>
                            <Col lg={15} md={15} sm={24} className="d-flex wrapper-content-text hidden-mobile">
                                <div className="banner-right-content">
                                    <img
                                        className='laptop'
                                        src='../images/laptop1.webp'
                                        width="520"
                                        height="308"
                                        alt='laptop1'
                                    />
                                    <img className='phone_right prmb' src='../images/phone_right.webp' alt='phone-right' />
                                    <Paragraph className="text-h1">
                                        <span className='act-text'>ACT</span>
                                        - Phần mềm sản xuất cửa trên điện thoại và PC
                                        <span> hàng đầu cho người Việt!</span>
                                    </Paragraph>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* mobile page 2 laptop */}
                    <div className='wrapper-laptop-mobile'>
                        <div className='container'>
                            <Row gutter={30} className="justify-content-center fitscreen">
                                <Col lg={0} md={0} sm={24} className="d-flex align-items-center wrapper-content-text">
                                    <div className="banner-right-content">
                                        <img className='laptop' src='../images/laptop1.webp' alt='laptop1' />
                                        <img className='phone_right' src='../images/phone_right.webp' alt='phone-right' />
                                        <Paragraph className="text-h1">
                                            <span className='act-text'>ACT</span>
                                            - Phần mềm sản xuất cửa trên điện thoại và PC
                                            <span> hàng đầu cho người Việt!</span>
                                        </Paragraph>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features" id='features'>
                <div className='bg-features-header'></div>
                <div className="container">
                    <div className="section-head-icon">
                        <Paragraph className="text-h2">TÍNH NĂNG CỦA PHẦN MỀM</Paragraph>
                    </div>
                    <Row gutter={30} className="feature-pc-tablet">
                        <Col lg={24} md={24}>
                            <div className="single-feture">
                                <div className='wrapper-content'>
                                    <div className='tinhnang'>
                                        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                                        <h1 ref={tinhnang1} className='text-tinhnang'></h1>
                                    </div>
                                    <div className='top-left'>
                                        <h1 ref={textTopLeft} className='text-top-left text-size-features'>Tính kích thước cắt nhôm, kính, phụ kiện, xuất bản vẽ sản xuất tránh tình trạng cắt sai.</h1>
                                    </div>
                                    <div className='bottom-left'>
                                        <h1 ref={textBottomLeft} className='text-bottom-left text-size-features'>Tổng hợp vật tư: nhôm, kính, phụ kiện, ra bảng pha cắt tiết kiệm nhôm giảm lượng lớn đề xê.</h1>
                                    </div>
                                    <div className='top-right'>
                                        <h1 ref={textTopRight} className='text-top-right text-size-features'>Tính giá từng bộ cửa và tổng hợp giá thành theo từng công trình cụ thể, tránh tình trạng làm không biết lời lỗ bao nhiêu.</h1>
                                    </div>
                                    <div className='bottom-right'>
                                        <h1 ref={textBottomRight} className='text-bottom-right text-size-features'> Đầy đủ hệ nhôm (được cập nhật thường xuyên) và đa dạng mẫu cửa cho người dùng lựa chọn.</h1>
                                    </div>
                                    <img
                                        className='tinhnang_img'
                                        src='../images/tinhnang_icon.webp'
                                        width="1100"
                                        height="652"
                                        alt='anh-tinhnang'
                                    />
                                </div>
                                <a
                                    className='btn-web flex-center btn-video'
                                    href={'https://www.youtube.com/embed/45bH7w1xYbQ'}
                                    target={'_blank'}
                                    rel='noopener noreferrer'
                                >
                                    <div className='wrapper-video-btn'>
                                        <CaretRightOutlined className='icon-video' />
                                        XEM VIDEO BẢN MẪU CÓ SẴN
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col lg={24} md={24}>
                            <div className="single-feture">
                                <div className='wrapper-content'>
                                    <div className='tinhnang'>
                                        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                                        <h1 ref={tinhnang2} className='text-tinhnang'></h1>
                                    </div>
                                    <div className='top-left'>
                                        <h1 ref={textTopLeft2} className='text-top-left text-size-features'>Tự vẽ được các dạng cửa theo ý muốn, có thể xuất bản vẽ hình dáng kích thước cửa để chốt quy cách với chủ nhà.</h1>
                                    </div>
                                    <div className='bottom-left'>
                                        <h1 ref={textBottomLeft2} className='text-bottom-left text-size-features'>Tổng hợp vật tư: nhôm, kính, phụ kiện, ra bảng pha cắt tiết kiệm nhôm giảm lượng lớn đề xê.</h1>
                                    </div>
                                    <div className='top-right top-right2'>
                                        <h1 ref={textTopRight2} className='text-top-right text-size-features'>Tích hợp báo giá chuyên nghiệp làm siêu nhanh, giúp việc làm báo giá trở nên dễ dàng và nhanh chóng chỉ bằng 1 vài click chuột.</h1>
                                    </div>
                                    <div className='bottom-right bottom-right2'>
                                        <h1 ref={textBottomRight2} className='text-bottom-right text-size-features'> Đầy đủ hệ nhôm<br /> (được cập nhật thường xuyên).</h1>
                                    </div>
                                    <img
                                        className='tinhnang_img'
                                        src='../images/tinhnang_icon.webp'
                                        width="1100"
                                        height="652"
                                        alt='anh-tinhnang'
                                    />
                                </div>
                                <a
                                    className='btn-web flex-center btn-video btn-video2'
                                    href='https://cuongact.com/phan-mem-thiet-ke-cua-nhom-kinh-act'
                                    target={'_blank'}
                                    rel='noopener noreferrer'
                                >
                                    <div className='wrapper-video-btn'>
                                        <CaretRightOutlined className='icon-video' />
                                        XEM THÊM THÔNG TIN BẢN TỰ THIẾT KẾ
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    {/* mobile */}
                    <div className="feature-mobile">
                        <div className="single-feture">
                            <div className='wrapper-content-mobile'>
                                <div className='tinhnang'>
                                    <Paragraph className='text-tinhnang text-h1'>PHIÊN BẢN MẪU CÓ SẴN</Paragraph>
                                </div>
                                <div className='wrapper-tinhnang'>
                                    <div className='tinhnang-item mt-20'>
                                        <img
                                            className='img-item'
                                            alt='icon-feature'
                                            src='../images/icon-feature1.png'
                                            width='250'
                                            height='218'
                                        />
                                        <Paragraph className='text-h4'>Tính kích thước cắt nhôm, kính, phụ kiện, xuất bản vẽ sản xuất tránh tình trạng cắt sai.</Paragraph>
                                    </div>
                                    <div className='tinhnang-item '>
                                        <img
                                            className='img-item'
                                            alt='icon-feature'
                                            src='../images/icon-feature2.png'
                                            width='250'
                                            height='218'
                                        />
                                        <Paragraph className='text-h4'>Tính giá từng bộ cửa và tổng hợp giá thành theo từng công trình cụ thể, tránh tình trạng làm không biết lời lỗ bao nhiêu.</Paragraph>
                                    </div>
                                    <div className='tinhnang-item '>
                                        <img
                                            className='img-item'
                                            alt='icon-feature'
                                            src='../images/icon-feature3.png'
                                            width='250'
                                            height='218'
                                        />
                                        <Paragraph className='text-h4'>Tổng hợp vật tư: nhôm, kính, phụ kiện, ra bảng pha cắt tiết kiệm nhôm giảm lượng lớn đề xê.</Paragraph>
                                    </div>
                                    <div className='tinhnang-item '>
                                        <img
                                            className='img-item'
                                            alt='icon-feature'
                                            src='../images/icon-feature4.png'
                                            width='250'
                                            height='218'
                                        />
                                        <Paragraph className='text-h4'>Đầy đủ hệ nhôm (được cập nhật thường xuyên) và đa dạng mẫu cửa cho người dùng lựa chọn.</Paragraph>
                                    </div>
                                </div>
                                <a href={'https://www.youtube.com/embed/45bH7w1xYbQ'} className='btn-web flex-center btn-video'>
                                    <div className='wrapper-video-btn'>
                                        <CaretRightOutlined className='icon-video' />
                                        XEM VIDEO BẢN MẪU CÓ SẴN
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="feature-mobile">
                        <div className="single-feture single-feture-bg">
                            <div className='wrapper-content-mobile'>
                                <div className='tinhnang'>
                                    <Paragraph className='text-tinhnang text-h1'>PHIÊN BẢN TỰ THIẾT KẾ</Paragraph>
                                </div>
                                <div className='wrapper-tinhnang'>
                                    <div className='tinhnang-item  mt-20'>
                                        <img
                                            className='img-item'
                                            alt='icon-feature'
                                            src='../images/icon-feature2-1.png'
                                            width='250'
                                            height='218'
                                        />
                                        <Paragraph className='text-h4'>Tự vẽ được các dạng cửa theo ý muốn, có thể xuất bản vẽ hình dáng kích thước cửa để chốt quy cách với chủ nhà.</Paragraph>
                                    </div>
                                    <div className='tinhnang-item '>
                                        <img
                                            className='img-item'
                                            alt='icon-feature'
                                            src='../images/icon-feature2-2.png'
                                            width='250'
                                            height='218'
                                        />
                                        <Paragraph className='text-h4'>Tích hợp báo giá chuyên nghiệp làm siêu nhanh, giúp việc làm báo giá trở nên dễ dàng và nhanh chóng chỉ bằng 1 vài click chuột.</Paragraph>
                                    </div>
                                    <div className='tinhnang-item '>
                                        <img
                                            className='img-item'
                                            alt='icon-feature'
                                            src='../images/icon-feature2-3.png'
                                            width='250'
                                            height='218'
                                        />
                                        <Paragraph className='text-h4'>Tổng hợp vật tư: nhôm, kính, phụ kiện, ra bảng pha cắt tiết kiệm nhôm giảm lượng lớn đề xê.</Paragraph>
                                    </div>
                                    <div className='tinhnang-item '>
                                        <img
                                            className='img-item'
                                            alt='icon-feature'
                                            src='../images/icon-feature2-4.png'
                                            width='250'
                                            height='218'
                                        />
                                        <Paragraph className='text-h4'>Đầy đủ hệ nhôm (được cập nhật thường xuyên).</Paragraph>
                                    </div>
                                </div>
                                <a href='https://cuongact.com/phan-mem-thiet-ke-cua-nhom-kinh-act' className='btn-web flex-center btn-video btn-video2 btn-mobile'>
                                    <div className='wrapper-video-btn'>
                                        <CaretRightOutlined className='icon-video' />
                                        XEM THÊM BẢN TỰ THIẾT KẾ
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why-use">
                <div className="container">
                    <Row gutter={30}>
                        <Col lg={10} md={24} sm={24} className="why-use-left">
                            <div className='wrapper-question'>
                                <img src="../images/question.png" alt="pic-question" className="img-question" />
                                <img src="../images/question_logo.png" alt="logo-question" className="logo-question" />
                                <span className='act-sub-4'></span>
                                <span className='act-sub-3'>NÊN</span>
                                <span className='act-sub-2'>sử dụng</span>
                                <span className='act-sub-1'>phần mềm cửa nhôm</span>
                                <span className='act-question'>ACT</span>
                            </div>
                        </Col>
                        <Col lg={14} md={24} sm={24} className="why-use-right">
                            <ul className='list-text'>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span ref={t1} className='text-description'>Đa dạng hệ nhôm, hệ nhôm được cập nhật thường xuyên (hơn 100 hệ nhôm)</span>
                                </li>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span className='text-description'>Khách hàng được hỗ trợ miễn phí trọn đời khi sử dụng sản phẩm</span>
                                </li>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span className='text-description'>Giao diện thân thiện, dễ sử dụng, chỉ cần 5 phút để làm quen là có thể sử dụng được ngay</span>
                                </li>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span className='text-description'>Giúp tiết kiệm thời gian tính toán đau đầu, không lo tính nhầm, cắt sai</span>
                                </li>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span className='text-description'>Đầy đủ giải pháp cho người dùng linh hoạt sử dụng, app, web, bản cài đặt trên máy tính</span>
                                </li>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span className='text-description'>Sơ đồ vẽ được bố trí tối ưu nhất giúp người dùng dễ lựa chọn và vẽ cửa 1 cách dễ dàng</span>
                                </li>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span className='text-description'>Có đầy đủ video hướng dẫn sử dụng 1 cách khoa học giúp những người mới có thể sử dụng thành thạo phần mềm trong thời gian ngắn nhất</span>
                                </li>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span className='text-description'>ACT luôn lắng nghe, thấu hiểu và đưa ra những giải pháp hỗ trợ tối ưu nhất cho từng khách hàng</span>
                                </li>
                                <li className='item-text'>
                                    <img
                                        className='icon-check'
                                        src='../images/tick_icon.png'
                                        alt='icon-check'
                                        width={100}
                                        height={95}
                                    />
                                    <span className='text-description'>Với nhiều năm kinh nghiệm trong lĩnh vực nhôm kính, ACT đảm bảo các số liệu chuẩn xác, tin cậy chính xác tuyệt đối, ngoài ra ACT còn hỗ trợ điều chỉnh số liệu theo đúng ý từng khách hàng nếu khách hàng có nhu cầu</span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>

            <div id='price' className="section-full price-bg">
                <div className="header-price">
                    <div className="section-head-icon text-center price-bg-header">
                        <Paragraph className="text-h2">BẢNG GIÁ</Paragraph>
                    </div>
                </div>
                <div className="container">
                    <Row gutter={{
                        xs: 64,
                        sm: 26,
                        md: 24,
                    }} className="m-0">
                        <Col md={8} sm={24} xs={24}>
                            <div className="single-pricing-table price-color-4 m-mb">
                                <div className="price-head">
                                    <p className="text-h6">3 tháng</p>
                                </div>
                                <div className="price">
                                    <div className="position-text-h3">
                                        <Paragraph className="text-h3">
                                            <sup className="text-sup1">đ</sup>80.000<sub className="text-sup2">tháng</sub>
                                        </Paragraph>
                                    </div>
                                </div>
                                <ul className="price-item">
                                    <li>Một người dùng</li>
                                    <li>Nhiều lần truy cập</li>
                                    <li>Hỗ trợ qua Zalo</li>
                                    <li>Hỗ trợ trực tuyến 24/7</li>
                                </ul>
                                <div className="price-bottom">
                                    <a href="https://www.facebook.com/phanmemsanxuatcua" className="purchase-btn">
                                        Mua ngay
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} sm={24} xs={24}>
                            <div className="single-pricing-table price-color-4 m-mb">
                                <div className="price-head">
                                    <p className="text-h6">6 tháng</p>
                                </div>
                                <div className="price">
                                    <div className="position-text-h3">
                                        <Paragraph className="text-h3">
                                            <sup className="text-sup1">đ</sup>68.000<sub className="text-sup2">tháng</sub>
                                        </Paragraph>
                                    </div>
                                </div>
                                <ul className="price-item">
                                    <li>Một người dùng</li>
                                    <li>Nhiều lần truy cập</li>
                                    <li>Hỗ trợ qua Zalo</li>
                                    <li>Hỗ trợ trực tuyến 24/7</li>
                                </ul>
                                <div className="price-bottom">
                                    <a href="https://www.facebook.com/phanmemsanxuatcua" className="purchase-btn">
                                        Mua ngay
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} sm={24} xs={24}>
                            <div className="single-pricing-table price-color-4">
                                <div className="price-head">
                                    <p className="text-h6">1 năm</p>
                                </div>
                                <div className="price">
                                    <div className="position-text-h3">
                                        <Paragraph className="text-h3">
                                            <sup className="text-sup1">đ</sup>59.000<sub className="text-sup2">tháng</sub>
                                        </Paragraph>
                                    </div>
                                </div>
                                <ul className="price-item">
                                    <li>Một người dùng</li>
                                    <li>Nhiều lần truy cập</li>
                                    <li>Hỗ trợ qua Zalo</li>
                                    <li>Hỗ trợ trực tuyến 24/7</li>
                                </ul>
                                <div className="price-bottom">
                                    <a href="https://www.facebook.com/phanmemsanxuatcua" className="purchase-btn">
                                        Mua ngay
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Content>
    )
}

export default Home




