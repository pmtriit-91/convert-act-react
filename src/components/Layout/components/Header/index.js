import React, { useEffect, useState } from 'react'
import { Typography, Layout, Col, Row } from 'antd'
import classNames from 'classnames/bind'

import styles from './header.module.scss'
import { Header } from 'antd/lib/layout/layout'

const cx = classNames.bind(styles)
const { Content } = Layout
const { Paragraph, Text } = Typography

function ThemeHeader() {
    const [classHeader, setClassHeader] = useState('')

    const handleScroll = () => {
        if (window.scrollY !== 0) {
            setClassHeader('bg-logo-scroll')
        } else {
            setClassHeader('')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Header className={cx('component-themeheader')}>
            <Content className={cx('default-header', 'scrolled')}>
                <div className={cx('bg-header')}>
                    <div className={cx("bg-logo", classHeader)}></div>
                    <div className={cx('bg-nav')}></div>
                </div>
                <div className={cx('header-bg')}>
                    <Row gutter={30} justify="end" align="middle">
                        <Col lg={11} md={9} sm={24} className={cx('wrapper-logo')}>
                        </Col>
                        <Col lg={13} md={14} sm={0} className={cx('wrapper-nav')}>
                        </Col>
                    </Row>
                </div>
                <div className={`container ${cx("center-onmobile")}`}>
                    <Row gutter={30} justify="start" align="middle">
                        <Col lg={11} md={9} sm={24} className={cx('wrapper-logo')}>
                            <div className={cx("logo", "logo-edit")}>
                                <a href="/">
                                    <img src="../images/logoNew.png" alt="logo" style={{ width: 75 }} />
                                </a>
                            </div>
                            <div className={cx('wrap-text-logo')}>
                                <Text className={cx("text-act")}>ACT</Text>
                                <Paragraph className={cx("text-logo")}>CHUYÊN NGHIỆP - NHANH CHÓNG - CHÍNH XÁC</Paragraph>
                            </div>
                        </Col>
                        <Col lg={13} md={14} sm={0} className={cx('wrapper-nav')}>
                            <div className={cx("right-header', 'flex-center")}>
                                <div className={cx("main-menu")}>
                                    <ul className={cx("list-item")}>
                                        <li><a href={`#top`}>Giới thiệu</a></li>
                                        <li><a href={`#features`} >Tính năng</a></li>
                                        <li><a href={`#price`} >Thu phí</a></li>
                                        <li><a href={`#contact`}>Liên hệ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={cx("right-header", "flex-center", "menu-mobile")}>
                    <div className='flex-center'>
                        <div className={cx("main-menu-mobile")}>
                            <ul className={cx("list-item")}>
                                <li><a href={`/#top`}>Giới thiệu</a></li>
                                <li><a href={`/#features`} >Tính năng</a></li>
                                <li><a href={`/#price`} >Thu phí</a></li>
                                <li><a href={`/#contact`}>Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Content>
        </Header>
    )
}

export default ThemeHeader
