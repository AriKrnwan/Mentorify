import Navbar from'../../components/navbar/Navbar'
import { Container, Row, Col, Card, ListGroup, Tab, } from 'react-bootstrap';
import '../notification/Notification.css'
import List from '../../components/listNotificationMentoring/List';
import ListQna from '../../components/listNotificationQ&a/listQna';
import { FaRegUser } from "react-icons/fa6";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { useState } from 'react';
import profile_mentor from '../../assets/image/mentor2.png'
import profile_user from '../../assets/image/profile_user.png'

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
                                            <Tab.Pane eventKey="#mentoring">{<List 
                                            judul="permintaan mentoring diterima"
                                            status="permintaan mentoring kamu diterima, silakan lakukan proses proses pembayaran untuk memulai mentoring"
                                            waktu="18-11-2023 14:07"
                                            gambar={profile_mentor}/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List judul="permintaan mentor diterima"
                                            waktu="putri jelek banget"
                                            status="mentoring aman"/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List judul="permintaan mentor diterima"
                                            waktu="putri jelek yeee aku jelekkkk"
                                            status="mentoring aman"/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List judul="permintaan mentor diterima"
                                            waktu="putri jelek hahahha"
                                            status="mentoring aman"/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List judul="permintaan mentor diterima"
                                            waktu="putri jelek banget bangettttttttt"
                                            status="mentoring aman"/>}</Tab.Pane>
                                        <Tab.Pane  eventKey="#qna">{<ListQna nama="Sambas Gaming"
                                        waktu="18-11-2023 18:57"
                                        keterangan="menyukai anda"
                                        gambar={profile_user}/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna nama="putri alifia rizky"
                                        waktu="18-11-2023 18:57"
                                        keterangan="menyukai anda"
                                        gambar={profile_user}/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna nama="Sambas Gaming"
                                        waktu="18-11-2023 18:57"
                                        keterangan="menyukai anda"
                                        gambar={profile_user}/>}</Tab.Pane>
                                    </Tab.Content>
                                </ListGroup>
                            </Col>
                        </Tab.Container>h
                    </Row>
                </Container>
        </div>
    );
}

export default Notification;