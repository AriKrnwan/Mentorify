import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiBell } from "react-icons/fi";
import Logo from '../../assets/image/Logo.svg';
import profile from "../../assets/image/profile picture.jpg";
import "../navbar/Navbar.css";
import { useNavigate } from 'react-router-dom';

function NavbarMentor() {
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

    const navigate = useNavigate();
    const toMenteeMode = () => {
        navigate('/');
    };

    return (
        <>
        {["lg"].map((expand) => (
            <Navbar
            key={expand}
            expand={expand}
            className={`mb-3 fixed-top px-4 ${navbarTransparent ? 'navbar-transparent' : ''}`}
            >
            <Navbar.Brand>
                <img src={Logo} alt="logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
                className="toggle"
                aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
            >
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 align-items-center gap-5">
                    <NavLink to="/dashboard" exact activeClassName='active'>Dashboard</NavLink>
                    <NavLink to="/orderschedule" activeClassName='active'>Pesanan & Jadwal</NavLink>
                    <div className="d-flex gap-3">
                        <NavLink to="/notification" activeClassName='active'>
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
                    <NavDropdown.Item href="/profile-mentor">Men</NavDropdown.Item>
                    <NavDropdown.Item href="/changepassword">Ganti Kata Sandi</NavDropdown.Item>
                    <NavDropdown.Item onClick={toMenteeMode}>Switch</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login">Keluar</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Navbar>
        ))}
        </>
    );
}

export default NavbarMentor;
