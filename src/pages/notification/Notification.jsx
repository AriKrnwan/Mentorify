import Navbar from'../../components/navbar/Navbar'
import { Container, Row, Col, Card, ListGroup, Tab, } from 'react-bootstrap';
import '../notification/Notification.css'
import List from '../../components/listNotificationMentoring/List';
import ListQna from '../../components/listNotificationQ&a/listQna';
import { FaRegUser } from "react-icons/fa6";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { useState } from 'react';

const Notification = () => {

    // function change () {
        // const [state, setState] = React.useState("Mentoring")

        // if (aria-selected=="true") {
        //     <p>coba aja</p>
        // }

    // const [text, setText] = React.useState("mentoring");

    // // function change () {
    // //     if (menu == "mentoring") {
    // //         return <h4>Halo</h4>;
    // //     }
    // //     if (menu == "forum") {
    // //         return <h4>Hai</h4>;
    // //     }
    // // };

    // const changeText = () => {
    //     setText('Teks telah diubah!');
    // };

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
                                            <ListGroup.Item className="try flex align-items-center gap-2" action href="#mentoring">
                                                <FaRegUser/>
                                                <div  className='huruf'>Mentoring</div>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="try flex align-items-center gap-2" action href="#qna">
                                                <PiClockCounterClockwiseBold/>
                                                <div className='huruf'>Tanya & Jawab</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                            </Card>
                            <Col sm={9} className="mentor">
                                <ListGroup className='border'>
                                    <h4 className='title'>coba</h4>
                                    <Tab.Content>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                            <Tab.Pane eventKey="#mentoring">{<List/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
                                        <Tab.Pane eventKey="#qna">{<ListQna/>}</Tab.Pane>
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