import Navbar from'../../components/navbar/Navbar'
import { Container, Row, Col, Button, Card, ListGroup, Image } from 'react-bootstrap';
import SidebarNotifikasi from '../../components/sidebarNotifikasi/SidebarNotifikasi';
import picture from '../../assets/image/profile picture.jpg'

const Notification = () => {
    return ( 
        <div>
            <Navbar/>
            <Container fluid= "xxl">
                <Row className="gap-2">
                    <Col md={3}>
                    <Card>
                        {/* <Card.Header>Notifikasi</Card.Header> */}
                        <h2>notifikasi</h2>
                        <Card.Body>
                            <Button variant="primary">Mentoring</Button>
                            <Button variant="primary">Tanya dan Jawab</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col md={8}>
                        <Card>
                            {/* <Card.Header>Notifikasi Mentoring</Card.Header> */}
                            <ListGroup variant="flush">
                            <ListGroup.Item>
                            <Card.Img variant="top" src="{picture}" />
                                Permintaan mentoring diterima
                                <br />
                                <small>18-11-2023 14:07</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Proses pembayaran selesai
                                <br />
                                <small>18-11-2023 14:07</small>
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
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Notification;