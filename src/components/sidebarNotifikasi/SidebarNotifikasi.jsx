import "./sidebarNotifikasi.css";
import { FaRegUser } from "react-icons/fa6";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { Col, Row } from "react-bootstrap";

const SidebarNotifikasi = () => {
  return (
    <Row >
      <div className="position-fixed col-2" >
        <Row>
          <Col >
            <div className="nav-notif d-flex flex-column gap-3 p-2 ">
              <div className="heading-notif">Notifikasi</div>
              <div className="mentoring-notif d-flex gap-3 align-items-center">
                <FaRegUser size="24px" />
                <span>Mentoring</span>
              </div>
              <div className="tanya-jawab-notif d-flex gap-3 align-items-center">
                <PiClockCounterClockwiseBold size="24px" />
                <span>Tanya & Jawab</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default SidebarNotifikasi;
