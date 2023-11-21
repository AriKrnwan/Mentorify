import Navbar from'../../components/navbar/Navbar'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from '../../components/card/Card'

const Save = () => {
    return ( 
        <div>
            <Navbar/>
            <Container fluid="xxl">
                <Row className=' gap-3  justify-content-center  '>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Row>
            </Container>   
        </div>
    );
}

export default Save;