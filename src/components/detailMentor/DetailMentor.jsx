import Navbar from "../../components/navbar/Navbar";
import "./detailMentor.css";
import Profile from "../../assets/image/mentor2.png";
import { MdEmail } from "react-icons/md";
import { FaUserGraduate, FaUserTie, FaStar } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import OverviewMentor from "../overviewMentor/OverviewMentor";
import RieviewMentor from "../ReviewMentor/RieviewMentor";
import { FaLocationDot } from "react-icons/fa6";

export const DetailMentor = () => {
  const [ubahMenu, setUbahMenu] = useState("overview");

  return (
    <div>
      <Navbar />
      <div className="container-xxl">
        <Row>
          <Col lg="7">
            <div className="d-flex gap-3 mb-5">
              <div>
                <img src={Profile} alt="foto" className="foto-user" />
              </div>
              <div className=" w-100 d-flex flex-column gap-2">
                <div className="d-flex justify-content-between w-100">
                  <div className="d-flex flex-column gap-1 wrapper-nama">
                    <span>Akbar Budiana</span>
                    <span>Mobile Developer Enthusiast</span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <FaStar fill="#E2B93B" size={24} />
                    <p className="mb-0">4.5/5</p>
                  </div>
                </div>

                <div className="d-flex gap-5">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex gap-2">
                      <FaLocationDot fill="#27AE60" size={20} />
                      <span className="loc-mentor">Surabaya, Indonesia</span>
                    </div>

                    <div className="d-flex gap-2">
                      <FaUserGraduate fill="#00A9B8" size={20} />
                      <span className="univ-mentor">Politeknik Negeri Jakarta</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex gap-2">
                      <FaUserTie fill="#27AE60" size={20} />
                      <span className="jk-mentor">Laki-Laki</span>
                    </div>

                    <div className="d-flex gap-2">
                      <MdEmail fill="#00A9B8" size={20} />
                      <span className="email-mentor">akbarbudiana@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex">
                <div onClick={() => setUbahMenu("overview")} className={ubahMenu === "overview" ? "overview active" : "overview"}>
                  Overview
                </div>
                <div onClick={() => setUbahMenu("review")} className={ubahMenu === "review" ? "review active" : "review"}>
                  Review
                </div>
              </div>

              {ubahMenu === "overview" && <OverviewMentor />}
              {ubahMenu === "review" && <RieviewMentor />}
            </div>
          </Col>

          <Col>
            <div className="border p-3 rounded">
              <div>
                <h5 className="jdl-tersedia">Jadwal tersedia</h5>
                <h6 className="mb-1 heading-tgl mt-3">Tanggal</h6>
                <Row>
                  <div className="d-flex justify-content-between">
                    {/* <Col> */}
                    <div className="d-flex flex-column justify-content-center align-items-center border text-center rounded  p-2 card-tgl-mentoring">
                      <p className="tgl-mentoring mb-0">Sabtu</p>
                      <h5 className="tgl-mentoring mb-0">18 Nov</h5>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center border text-center rounded  p-2 card-tgl-mentoring-1">
                      <p className="mb-0">Minggu</p>
                      <h5 className="tgl-metor-2 mb-0">19 Nov</h5>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center border text-center rounded  p-2 card-tgl-mentoring-2">
                      <p className="mb-0">Rabu</p>
                      <h5 className="tgl-metor-2 mb-0">22 Nov</h5>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center border text-center rounded  p-2 card-tgl-mentoring-1">
                      <p className="mb-0">Sabtu</p>
                      <h5 className="tgl-metor-2 mb-0">25 Nov</h5>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center border text-center rounded  p-2 card-tgl-mentoring-1">
                      <p className="mb-0">Minggu</p>
                      <h5 className="tgl-metor-2 mb-0">26 Nov</h5>
                    </div>
                  </div>
                </Row>

                <div className="mt-4 ">
                  <h6 className="mb-0 heading-jam">Jam</h6>
                </div>

                <Row className="py-2">
                  <div className="d-flex justify-content-between">
                    <div className="border text-center rounded p-2 card-jam-mentoring-1">
                      <h6 className="mb-0">09:00</h6>
                    </div>
                    <div className="border text-center rounded p-2 card-jam-mentoring">
                      <h6 className="mb-0">09:00</h6>
                    </div>
                    <div className="border text-center rounded p-2 card-jam-mentoring">
                      <h6 className="mb-0">09:00</h6>
                    </div>
                  </div>
                </Row>
                <Row className="py-2">
                  <div className="d-flex justify-content-between">
                    <div className="border text-center rounded p-2 card-jam-mentoring">
                      <h6 className="mb-0">09:00</h6>
                    </div>
                    <div className="border text-center rounded p-2 card-jam-mentoring">
                      <h6 className="mb-0">09:00</h6>
                    </div>
                    <div className="border text-center rounded p-2 card-jam-mentoring">
                      <h6 className="mb-0">09:00</h6>
                    </div>
                  </div>
                </Row>

                <div className="wrapper-harga-mentoring mt-3">
                  <h2>
                    Rp.50000 <span>/Session (1 jam)</span>
                  </h2>
                  <h6>Untuk memulai pemesanan mentor unduh aplikasi</h6>
                </div>

                <div className="d-flex mb-2 justify-content-center">
                  <button className="btn-unduh-app w-100">Unduh di Sini</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
