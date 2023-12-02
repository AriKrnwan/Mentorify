
import { FiUser } from "react-icons/fi";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const SidebarOrderSchedule = ({ setPesananJadwal, pesananJadwal }) => {

  return (
    <div className="position-fixed" style={{width: '306px'}}>
      <Row>
        <Col>
          <div className="nav-porfile d-flex flex-column gap-3 p-2">
            <div className="heading-navProfile">Navigasi</div>
            <div
              onClick={() => setPesananJadwal('pesanan')}
              className={`data-dirif d-flex gap-3 align-items-center ${
                pesananJadwal === "pesanan" ? "active" : ""
              }`}
            >
              <FiUser size="24px" />
              <span>Pesanan</span>
            </div>
            <div
              className={`riwayat-forum d-flex gap-3 align-items-center ${
                pesananJadwal === "jadwal" ? " active" : ""
              }`}
              onClick={() => setPesananJadwal("jadwal")}
            >
              <PiClockCounterClockwiseBold size="24px" />
              <span>Jadwal</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

SidebarOrderSchedule.propTypes = {
  setPesananJadwal: PropTypes.func.isRequired,
  pesananJadwal: PropTypes.string.isRequired,
};

export default SidebarOrderSchedule;
