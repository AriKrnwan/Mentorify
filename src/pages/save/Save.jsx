import Navbar from'../../components/navbar/Navbar'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from '../../components/Card'

const Save = () => {
    return ( 
        <div>
            <Navbar/>
            <Container className="">
                <Row className='justify-content-md-center my-5'>
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