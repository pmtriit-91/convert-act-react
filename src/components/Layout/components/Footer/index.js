import { Layout, Row, Col } from 'antd'
import './footer.scss'
import {
    EnvironmentFilled,
    PhoneFilled,
    MailFilled,
  } from '@ant-design/icons';

const { Content } = Layout


function Footer() {
    return (
        <Content className='component-footer'>
            <section className='wrapper-content-footer'>
                <div className='container'>
                    <Row className='' gutter={30}>
                        <Col lg={24} md={24} sm={24}>
                            <div className="main-content">
                                <h1 className='text-h1'>NHA KHOA TÂM PHƯỚC</h1>

                                <div className="wrapper-add">
                                    <EnvironmentFilled className='icon'/>
                                    <h4 className='text-h4 mb-0'>Địa chỉ: 356 Đường Tô Ký, Phường Tân Chánh Hiệp, Quận 12, TP Hồ Chí</h4>     
                                </div>

                                <div className="wrapper-phone">
                                    <PhoneFilled className='icon'/>
                                    <a className='text-link' href="tel:0977992964">0977.992.964</a>
                                </div>

                                <div className="wrapper-email">
                                    <MailFilled className='icon'/>
                                    <a className='text-h4 mb-0' href="nhakhoatamphuoc@gmail.com">Email: nhakhoatamphuoc@gmail.com</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Content>
    )
}

export default Footer