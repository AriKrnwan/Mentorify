import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/Logo.svg";

const Footer = () => {
  return (
    <div className="mt-5">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1437"
            height="150"
            viewBox="0 0 1437 150"
            fill="none"
            style={{marginBottom: '-60px'}}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-3 90.2778H57C117 90.2778 237 90.2778 357 70.1389C477 50 597 9.72222 717 9.72222C837 9.72222 957 50 1077 54.8611C1197 59.7222 1317 29.8611 1377 15.2778L1437 0V150H1377C1317 150 1197 150 1077 150C957 150 837 150 717 150C597 150 477 150 357 150C237 150 117 150 57 150H-3V90.2778Z"
              fill="#F5F5F5"
            />
          </svg>
      <footer
        className="wrapper-footer d-flex flex-column align-items-center p-2 gap-4"
        style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", backgroundColor: "#F5F5F5" }}
      >
        <div className="d-flex flex-column align-items-center p-2 gap-4">
          <div className="wrapper-footer-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navigation-footer d-flex gap-5">
            <NavLink className="text-dark" to="/">
              Home
            </NavLink>
            <NavLink className="text-dark" to="/mentoring">
              Mentoring
            </NavLink>
            <NavLink className="text-dark" to="/qna">
              Tanya & Jawab
            </NavLink>
            <NavLink className="text-dark" to="/schedule">
              Jadwal
            </NavLink>
          </div>
          <div className="wrapper-footer-text">
            <p className="text-secondary ">Akatsuki 2023. All right reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
