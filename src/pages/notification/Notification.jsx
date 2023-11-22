import Navbar from'../../components/navbar/Navbar'
import { Container, Row, Col, Button, Card, ListGroup, Image } from 'react-bootstrap';
import SidebarNotifikasi from '../../components/sidebarNotifikasi/SidebarNotifikasi';
import picture from '../../assets/image/profile picture.jpg'
import '../notification/Notification.css'
import List from '../../components/listNotification/List';

const Notification = () => {
    return ( 
        <div>
            <Navbar/>
            <Container fluid="xxl">
                <Row className="gap-2">
                    <Col md={3} >
                        <SidebarNotifikasi/>
                    </Col>

                    <Col >
                        <ListGroup >
                            
                            <ListGroup.Item>
                                Proses pembayaran selesai
                                <br />
                                <small>18-11-2023 14:07</small>
                                <List />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Mentoring sekarang
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran kadaluarsa
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Notification;