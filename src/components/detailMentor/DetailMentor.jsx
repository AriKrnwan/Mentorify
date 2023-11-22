import Navbar from "../../components/navbar/Navbar";
import './detailMentor.css'
import Profile from "../../assets/image/mentor2.png";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaUserGraduate, FaUserTie, FaStar } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import OverviewMentor from "../overviewMentor/OverviewMentor";
import RieviewMentor from "../ReviewMentor/RieviewMentor";

export const DetailMentor = () => {

    const [ubahMenu, setUbahMenu] = useState('overview')

  return (
    <div>
      <Navbar />
      <div className="container-xxl">
        <Row>
          <Col lg='8'>
            <div className="d-flex gap-3 mb-5">
              <div>
                <img src={Profile} alt="foto" className="foto-user" />
              </div>
              <div className=" w-100 d-flex flex-column gap-2">
                <div className="d-flex justify-content-between w-100">
                  <div className="d-flex flex-column gap-1">
                    <span>Akbar Budiana</span>
                    <span>Mobile Developer Enthusiast</span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <FaStar />
                    <span>4.5/5</span>
                  </div>
                </div>

                <div className="d-flex gap-5">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <MdLocationOn />
                      <span>Surabaya, Indonesia</span>
                    </div>

                    <div>
                      <FaUserGraduate />
                      <span>Politeknik Negeri Jakarta</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <FaUserTie />
                      <span>Laki-Laki</span>
                    </div>

                    <div>
                      <MdEmail />
                      <span>akbarbudiana@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-4">
      <div className="d-flex">
        <div
          onClick={() => setUbahMenu("overview")}
          className={ubahMenu === "overview" ? "overview active" : "overview"}
        >
          Overview
        </div>
        <div
          onClick={() => setUbahMenu("review")}
          className={ubahMenu === "review" ? "review active" : "review"}
        >
          Review
        </div>
      </div>

      {ubahMenu === "overview" && <OverviewMentor />}
      {ubahMenu === "review" && <RieviewMentor />}
    </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
