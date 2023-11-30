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
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

function OffcanvasExample() {
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
                  <NavLink to="/" activeclassname='active'>Home</NavLink>
                  <NavLink to="/mentoring" activeclassname='active'>Mentoring</NavLink>
                  <NavLink to="/qna" activeclassname='active'>Tanya & Jawab</NavLink>
                  <NavLink to="/schedule" activeclassname='active'>Jadwal</NavLink>
                  <div className="d-flex gap-3">
                    <NavLink to="/save">
                      <FiBookmark size="18px" />
                    </NavLink>
                    <NavLink to="/notification" activeclassname='active'>
                      <FiBell size="18px" />
                    </NavLink>
                  </div>
                  <NavDropdown title={
                      <img
                        className="profile"
                        src={profile}
                        alt="profile picture"
                        width="40px"
                        height="40px"
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
                    <NavDropdown.Item href="/changepassword">Ganti Kata Sandi</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login">Keluar</NavDropdown.Item>
                  </NavDropdown>
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
