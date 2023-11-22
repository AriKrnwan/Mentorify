import "./sidebarProfile.css";
import { FiUser } from "react-icons/fi";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const SidebarProfile = ({ setActive }) => {

  const changeTab = (tab) => {
    setActive(tab);
  };
  return (
    <div>
      <Row>
        <Col>
          <div className="nav-porfile d-flex flex-column gap-3 p-2">
            <div className="heading-navProfile">Navigasi Profil</div>
            <div
              // className="data-diri d-flex gap-3 align-items-center"
              onClick={() => {
                changeTab("data_diri");
                console.log("Clicked on Data Diri");
              }}
              className={`data-dirif d-flex gap-3 align-items-center ${
                setActive === "data_diri" ? "active" : ""
              }`}
            >
              <FiUser size="24px" />
              <span>Data Diri</span>
            </div>
            <div
              // className="riwayat-forum d-flex gap-3 align-items-center"
              className={`riwayat-forum d-flex gap-3 align-items-center ${
                setActive === "riwayat_forum" ? "riwayat-forum active" : ""
              }`}
              onClick={() => setActive("riwayat_forum")}
            >
              <PiClockCounterClockwiseBold size="24px" />
              <span>Riwayat Forum</span>
            </div>
            <div
              // className="riwayat-transaksi d-flex gap-3 align-items-center"
              className={`riwayat-transaksi d-flex gap-3 align-items-center ${
                setActive === "riwayat_transaksi"
                  ? "riwayat-transaksi active"
                  : ""
              }`}
              onClick={() => setActive("riwayat_transaksi")}
            >
              <LuCalendarClock size="24px" />
              <span>Riwayat Transaksi</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

SidebarProfile.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default SidebarProfile;
