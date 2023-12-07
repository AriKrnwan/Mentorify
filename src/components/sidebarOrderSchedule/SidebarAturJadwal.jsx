import "./sidebarAturJadwal.css";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SidebarAturJadwal = () => {
    const navigate = useNavigate();
    const toMentoring = () => {
        navigate('/orderschedule/atur-jadwal');
    };
  return (
    <div className="position-fixed " style={{ width: "306px", top: "300px" }}>
      <Row>
        <Col>
          <div className="nav-atur_jadwal d-flex flex-column gap-2 p-3 border rounded">
            <div className="heading-atur_jadwal">Atur Jadwal</div>
            <p className="mb-0">
              Kamu memiliki 7 hari dengan 28 sesi untuk jadwal mentoring
            </p>
            <button
              onClick={toMentoring}
              className={`atur_jadwal d-flex gap-3 align-items-center 
              }`}
            >
              Atur Jadwal
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

SidebarAturJadwal.propTypes = {
  setPesananJadwal: PropTypes.func.isRequired,
  pesananJadwal: PropTypes.string.isRequired,
};

export default SidebarAturJadwal;
