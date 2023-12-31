import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiBell, FiBookmark } from "react-icons/fi";
import Logo from '../../assets/image/Logo.svg';
import profile from "../../assets/image/avatar.jpg";
import "../navbar/Navbar.css";
import { useNavigate } from 'react-router-dom';

function OffcanvasExample() {
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [userRoleId, setUserRoleId] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Ambil data pengguna dari penyimpanan lokal
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    // Atur listener scroll pada window
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;
      setNavbarTransparent(scrollPosition > threshold);
    };

    // Tambahkan listener saat komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Bersihkan listener saat komponen diunmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Ambil role_id dari data pengguna
    const role_id = userData ? userData.role_id : null;
    setUserRoleId(role_id);
  }, [userData]);

  const navigate = useNavigate();

  const toMentorMode = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    // Panggil endpoint logout di sisi server
    fetch("http://localhost:4121/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Hapus data sesi atau token di sisi klien
          localStorage.removeItem('userData');
          
          // Alihkan ke halaman login setelah logout
          navigate('/login');
        } else {
          console.error("Logout failed:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
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
                <NavLink to="/" activeclassname='active'>Home</NavLink>
                <NavLink to="/mentoring" activeclassname='active'>Mentoring</NavLink>
                <NavLink to="/qna" activeclassname='active'>Tanya & Jawab</NavLink>
                <NavLink to="/schedule" activeclassname='active'>Jadwal</NavLink>
                <div className="d-flex gap-3">
                  <NavLink to="/notification" activeclassname='active'>
                    <FiBell size="18px" />
                  </NavLink>
                  <NavLink to="/save" activeclassname='active'>
                    <FiBookmark size="18px" />
                  </NavLink>
                </div>
                <NavDropdown title={
                    <img
                      className="profile"
                      src={userData?.image ? `http://localhost:4121/images/${userData.image}` : profile }
                      alt="profile picture"
                      width="40px"
                      height="40px"
                    />
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/changepassword">Ganti Kata Sandi</NavDropdown.Item>
                  {userRoleId === 2 && (
                    <NavDropdown.Item onClick={toMentorMode}>Switch</NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Keluar</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
