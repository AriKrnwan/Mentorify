import picture from '../assets/image/Mentor.png'
import { Container, Card } from 'react-bootstrap';
import { FiStar } from "react-icons/fi";
import Bag from '../assets/image/suitcase.svg'

function TextExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Container>
          <Card.Title>test</Card.Title>
          <Card.Link href="#">Card Link</Card.Link>
        </Container>
        <Container>
          <FiStar color='#e4e5e9'/><Card.Text>test</Card.Text>
          <Card.Img variant="top" src={Bag} alt='bag'/> <Card.Text>Mentor teknik industry</Card.Text>
          <Card.Text>test</Card.Text>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default TextExample;