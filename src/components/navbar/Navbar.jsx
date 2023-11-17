import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import profile from '../../assets/image/profile picture.jpg'
import '../navbar/Navbar.css'
import { FiBell } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top">
          <Container fluid>
            <Navbar.Brand ><img src="#" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle className='toogle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton/>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/mentoring">Mentoring</Nav.Link>
                  <Nav.Link href="/qna">Tanya & Jawab</Nav.Link>
                  <Nav.Link href="/schedule">Jadwal</Nav.Link>
                  <Nav.Link href="/save" >
                    <FiBookmark size="25px" />
                    </Nav.Link>
                  <Nav.Link href="/notification">
                    <FiBell size="25px"/>
                    </Nav.Link>
                  <Nav.Link href="/profile" >
                    <img src={profile} alt="profile picture" width="60px" height="60px"/>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;