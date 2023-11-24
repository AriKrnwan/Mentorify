import Navbar from'../../components/navbar/Navbar'
import { Container, Row, Col, Card, ListGroup, Tab, } from 'react-bootstrap';
import '../notification/Notification.css'
import List from '../../components/listNotificationMentoring/List';
import ListQna from '../../components/listNotificationQ&a/listQna';
import { FaRegUser } from "react-icons/fa6";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

const Notification = () => {
    return ( 
        <div>
            <Navbar/>
                <Container fluid="xxl">
                    <Row className="gap-2">
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#mentoring">
                                <Card className='ca'>
                                    <h4>Notification</h4>
                                        <Col sm={12}>
                                            <ListGroup>
                                                <ListGroup.Item className="flex align-items-center gap-2" action href="#mentoring">
                                                    <FaRegUser/>
                                                    <div>Mentoring</div>
                                                </ListGroup.Item>
                                                <ListGroup.Item className="flex align-items-center gap-2" action href="#qna">
                                                    <PiClockCounterClockwiseBold/>
                                                    <div>Tanya & Jawab</div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                </Card>
                                <Col sm={9} className="mentor">
                                    <ListGroup >
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
                            </Tab.Container>
                    </Row>
                </Container>
        </div>
    );
}

export default Notification;