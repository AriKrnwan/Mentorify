import Navbar from'../../components/navbar/NavbarMentor'
import { Container, Row, Col, Card, ListGroup, Tab, } from 'react-bootstrap';
import '../notification/NotificationMentor.css'
import ListQna from '../../components/listNotificationQ&a/listQna';
import { FaRegUser } from "react-icons/fa6";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { useState } from 'react';
import profile_mentor from '../../assets/image/mentor2.png'
import profile_user from '../../assets/image/profile_user.png'
import List from '../../components/listNotificationMentoring/List';
import ListAccept from '../../components/listNotificationMentoring/ListAccept';
import ListDenied from '../../components/listNotificationMentoring/ListDenied';
import ListPayDone from '../../components/listNotificationMentoring/ListPayDone';
import ListPayDenied from '../../components/listNotificationMentoring/ListPayDenied'
// import Footer from '../../components/footer/Footer';


const Notification = () => {

    const [judul, setJudul] = useState("Notifikasi Mentoring")

    const changeTextTop = () => {
        setJudul('Notifikasi Tanya & Jawab');
    };

    const changeTextDown = () => {
        setJudul('Notifikasi Mentoring');
    };

    return ( 
        <div>
            <Navbar/>
                <Container fluid="xxl">
                    <Row className="gap-2">
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#mentoring">
                            <Card className='ca'>
                                <h4>Notifikasi</h4>
                                    <Col sm={12} >
                                        <ListGroup className='gap-2'>
                                            <ListGroup.Item onClick={changeTextDown} className="btn-notifikasi flex align-items-center gap-2" action href="#mentoring">
                                                <FaRegUser/>
                                                <div  className='huruf'>Mentoring</div>
                                            </ListGroup.Item>
                                            <ListGroup.Item onClick={changeTextTop} className="btn-notifikasi flex align-items-center gap-2" action href="#qna">
                                                <PiClockCounterClockwiseBold/>
                                                <div className='huruf'>Tanya & Jawab</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                            </Card>
                            <Col sm={9} className="mentor">
                                <ListGroup className='border-notifikasi-notif'>
                                    <h4 className='judul-mentoring'>{judul}</h4>
                                    <Tab.Content>
                                            <Tab.Pane eventKey="#mentoring">{<ListAccept 
                                            judul="Pesanan Mentoring Masuk"
                                            status="Silahkan untuk menerima atau menolak pesanan ini."
                                            waktu="18-11-2023 14:07"
                                            gambar={profile_mentor}/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<ListDenied 
                                            judul="Pembayaran Kadaluarsa"
                                            status="Mentee tidak melakukan pembayaran dalam kurun waktu tertentu."
                                            waktu="18-11-2023 14:07"
                                            gambar={profile_mentor}/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<ListPayDone
                                            judul="Proses pembayaran selesai"
                                            status="Mentee telah melakukan pembayaran. Sekarang Masukkan link untuk memulai mentoring."
                                            waktu="18-11-2023 14:07"
                                            gambar={profile_mentor}/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List 
                                            judul="Mentoring sekarang"
                                            status="Waktunya mentoring bersama mentee!"
                                            waktu="18-11-2023 14:07"
                                            gambar={profile_mentor}/>}</Tab.Pane>

                                            
                                        <Tab.Pane  eventKey="#qna">{<ListQna nama="Rizky Pahlevi"
                                        waktu="29-11-2023 11:00"
                                        keterangan="menyukai postingan anda"
                                        gambar={profile_user}/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna nama="Rizky Pahlevi"
                                        waktu="28-11-2023 15:58"
                                        keterangan="mengomentari postingan anda"
                                        gambar={profile_user}/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna nama="Rizky Pahlevi"
                                        waktu="28-11-2023 15:57"
                                        keterangan="menyebut anda di sebuah postingan"
                                        gambar={profile_user}/>}</Tab.Pane>
                                    </Tab.Content>
                                </ListGroup>
                            </Col>
                        </Tab.Container>h
                    </Row>
                </Container>
            {/* <Footer/> */}
        </div>
    );
}

export default Notification;