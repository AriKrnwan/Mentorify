import Navbar from'../../components/navbar/NavbarMentor'
import { Container, Row, Col, Card, ListGroup, Tab, } from 'react-bootstrap';
import profile_mentor from '../../assets/image/mentor2.png'
import List from '../../components/listNotificationMentoring/List';
import ListAccept from '../../components/listNotificationMentoring/ListAccept';
import ListDenied from '../../components/listNotificationMentoring/ListDenied';
import ListPayDone from '../../components/listNotificationMentoring/ListPayDone';
import Footer from '../../components/footer/Footer';
import '../notification/Notification.css'

const Notification = () => {
    return ( 
        <div>
            <Navbar/>
                <Container fluid="xxl">
                    <Row className="gap-2">
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#mentoring">
                            <Col sm={12}>
                                <ListGroup className='border-notifikasi-notif'>
                                    <h4 className='judul-mentoring'>Notifikasi Pesanan & Mentoring</h4>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#mentoring">{<ListAccept 
                                        judul="Pesanan Mentoring Masuk"
                                        status="Silahkan untuk menerima atau menolak pesanan ini."
                                        waktu="18-11-2023 14:07"
                                        gambar={profile_mentor}/>}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#mentoring">{<ListDenied 
                                        judul="Pembayaran Kadaluarsa"
                                        status="Mentee tidak melakukan pembayaran dalam kurun waktu tertentu."
                                        waktu="18-11-2023 14:07"
                                        gambar={profile_mentor}/>}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#mentoring">{<ListPayDone
                                        judul="Proses pembayaran selesai"
                                        status="Mentee telah melakukan pembayaran. Sekarang Masukkan link untuk memulai mentoring."
                                        waktu="18-11-2023 14:07"
                                        gambar={profile_mentor}/>}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#mentoring">{<List 
                                        judul="Mentoring sekarang"
                                        status="Waktunya mentoring bersama mentee!"
                                        waktu="18-11-2023 14:07"
                                        gambar={profile_mentor}/>}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </ListGroup>
                            </Col>
                        </Tab.Container>
                    </Row>
                </Container>
            {/* <Footer/> */}
        </div>
    );
}

export default Notification;