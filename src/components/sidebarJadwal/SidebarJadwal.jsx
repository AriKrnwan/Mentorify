import './sidebarJadwal.css'
import { Col, Row } from "react-bootstrap";
// import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuHistory } from "react-icons/lu";
import PropTypes from 'prop-types';


const SidebarJadwal = ({ setMentoring }) => {

    // const [mentoring, setMentoring] = useState(false);

    const handleMentoringAktif = () => {
      
      return (setMentoring(false))
    };
  
    const handleMentoringSelesai = () => {
      return (setMentoring(true))
      
    };

  return (
    <div>
      <Row>
        <Col>
        <div className="navigasiJadwal w-100">
            <div className="jadwal"> Jadwal</div>
            <div
              className={handleMentoringAktif ? "mAktif aktif" : "mAktif-f"}
              onClick={handleMentoringAktif}
            >
              <span className=" d-flex gap-2 align-items-center">
                <FiUser size="24px" /> Mentoring Aktif
              </span>
            </div>
            <div
              className={handleMentoringSelesai ? "mSelesai-f" : "mSelesai aktif"}
              onClick={handleMentoringSelesai}
            >
              <span className=" d-flex gap-2 align-items-center">
                <LuHistory size={24} />
                Mentoring Selesai
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

SidebarJadwal.propTypes = {
  setMentoring: PropTypes.func.isRequired,
};

export default SidebarJadwal;
