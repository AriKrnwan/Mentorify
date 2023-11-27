import "./sidebarNotifikasi.css";
import { FaRegUser } from "react-icons/fa6";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom"

const SidebarNotifikasi = () => {
  return (
        <Row >
          <Col className="position-fixed col-2">
            <div className="nav-notif d-flex flex-column gap-3 p-2 ">
              <div className="heading-notif">Notifikasi</div>
              <div className="mentoring-notif d-flex gap-3 align-items-center">
                <FaRegUser size="24px" />
                <NavLink to='/'>Mentoring</NavLink>
              </div>
              <div className="tanya-jawab-notif d-flex gap-3 align-items-center">
                <PiClockCounterClockwiseBold size="24px" />
                <NavLink to='/'>Tanya & Jawab</NavLink>
              </div>
            </div>
          </Col>
        </Row>
  );
};

export default SidebarNotifikasi;