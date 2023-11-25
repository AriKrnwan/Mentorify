import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import profile from "../../assets/image/profile picture.jpg";
import "../navbar/Navbar.css";
import { FiBell } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import Logo from '../../assets/image/Logo.svg'
import { useState, useEffect } from "react";

function OffcanvasExample() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; 

      if (scrollPosition > threshold) {
        setNavbarTransparent(true);
      } else {
        setNavbarTransparent(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`mb-3 fixed-top px-4 ${navbarTransparent ? 'navbar-transparent' : ''}`}
        >
          <Container fluid>
            <Navbar.Brand>
              <img src={Logo} alt="logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              className="toogle"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1  align-items-center gap-5">
                  <Nav.Link href="/home" active={activeMenu === "home"} onClick={() => setActiveMenu("home")}>Home</Nav.Link>
                  <Nav.Link href="/mentoring" active={activeMenu === "mentoring"} onClick={() => setActiveMenu("mentoring")}>Mentoring</Nav.Link>
                  <Nav.Link href="/qna">Tanya & Jawab</Nav.Link>
                  <Nav.Link href="/schedule">Jadwal</Nav.Link>
                  <div className="d-flex">
                    <Nav.Link href="/save">
                      <FiBookmark size="20px" />
                    </Nav.Link>
                    <Nav.Link href="/notification">
                      <FiBell size="20px" />
                    </Nav.Link>
                  </div>
                  <Nav.Link href="/profile">
                    <img className="profile"
                      src={profile}
                      alt="profile picture"
                      width="40px"
                      height="40px"
                    />
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
