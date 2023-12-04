import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/Logo.svg"

const Footer = () => {
    return ( 
        <footer className='wrapper-footer d-flex flex-column align-items-center p-2 gap-4 mt-5 bg-body-secondary ' style={{fontFamily: "Poppins", fontWeight:"600", fontSize:"16px"}}>
            <div className="wrapper-footer-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="navigation-footer d-flex gap-5">
                <NavLink className="text-dark" to="/" >Home</NavLink >
                <NavLink className="text-dark" to="/mentoring" >Mentoring</NavLink >
                <NavLink className="text-dark" to="/qna" >Tanya & Jawab</NavLink >
                <NavLink className="text-dark" to="/schedule" >Jadwal</NavLink >
            </div>
            <div className="wrapper-footer-text">
                <p className="text-secondary ">Akatsuki 2023. All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;