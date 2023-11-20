import "./sidebarProfile.css";
import { FiUser } from "react-icons/fi";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import { Col, Row } from "react-bootstrap";

const SidebarProfile = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className="nav-porfile d-flex flex-column gap-3 p-2">
            <div className="heading-navProfile">Navigasi Profil</div>
            <div className="data-diri d-flex gap-3 align-items-center">
              <FiUser size="24px" />
              <span>Data Diri</span>
            </div>
            <div className="riwayat-forum d-flex gap-3 align-items-center">
              <PiClockCounterClockwiseBold size="24px" />
              <span>Riwayat Forum</span>
            </div>
            <div className="riwayat-transaksi d-flex gap-3 align-items-center">
              <LuCalendarClock size="24px" />
              <span>Riwayat Transaksi</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SidebarProfile;
