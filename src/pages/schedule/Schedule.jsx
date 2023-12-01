import Navbar from "../../components/navbar/Navbar";
import "./schedule.css";
import { Col, Row } from "react-bootstrap";
import ProfileMentor from "../../assets/image/Mentor.png";
// import { FiUser } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
// import { LuHistory } from "react-icons/lu";
import { useState } from "react";
import SidebarJadwal from '../../components/sidebarJadwal/SidebarJadwal'
import Footer from "../../components/footer/Footer";

const Schedule = () => {
  const [mentoring, setMentoring] = useState('mentoring_aktif');

  // const handleMentoringAktif = () => {
  //   setMentoring(false);
  // };

  // const handleMentoringSelai = () => {
  //   setMentoring(true);
  // };

  const MentoringAktif = () => {
    if (mentoring === 'mentoring_aktif') {
      
      return (
        <div>
          <Row className="mb-4">
            <Col>
              <div>
                <div className="cardMentoringAktif d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src={ProfileMentor}
                      alt="Profile"
                      className="profileMentor me-4"
                    />
                    <div className="d-flex flex-column gap-3">
                      <div className="profileName d-flex flex-column">
                        <span>Siti Aulia</span>
                        <span>Mentor Design</span>
                      </div>
                      <div className="profileTime d-flex flex-column gap-1">
                        <span>Waktu</span>
                        <span>Waktu 14 November 2023 pukul 09:00 - 10:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column text-end gap-4">
                    <div className="profileHarga d-flex flex-column">
                      <span>Rp 50.000</span>
                      <span>Silver Meet - 60 Menit</span>
                    </div>
                    <button className="btn-Aktif border-0">
                      Mentoring Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <div className="cardMentoringAktif d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src={ProfileMentor}
                      alt="Profile"
                      className="profileMentor me-4"
                    />
                    <div className="d-flex flex-column gap-3">
                      <div className="profileName d-flex flex-column">
                        <span>Siti Aulia</span>
                        <span>Mentor Design</span>
                      </div>
                      <div className="profileTime d-flex flex-column gap-1">
                        <span>Waktu</span>
                        <span>Waktu 16 November 2023 pukul 09:00 - 10:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column text-end gap-4">
                    <div className="profileHarga d-flex flex-column">
                      <span>Rp 50.000</span>
                      <span>Silver Meet - 60 Menit</span>
                    </div>
                    <button className="btn-disable border-0">
                      Belum Waktunya
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
  };

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const MentoringSelesai = () => {
    if (mentoring === 'mentoring_selesai') {
      
      return (
        <div>
          <Row className="mb-4">
            <Col>
              <div className="cardMentoringAktif">
                <div className=" d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src={ProfileMentor}
                      alt="Profile"
                      className="profileMentor me-4"
                    />
                    <div className="d-flex flex-column gap-3">
                      <div className="profileName d-flex flex-column">
                        <span>Siti Aulia</span>
                        <span>Mentor Design</span>
                      </div>
                      <div className="profileTime d-flex flex-column gap-1">
                        <span>Waktu</span>
                        <span>Waktu 14 November 2023 pukul 09:00 - 10:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column text-end gap-4">
                    <div className="profileHarga d-flex flex-column">
                      <span>Rp 50.000</span>
                      <span>Silver Meet - 60 Menit</span>
                    </div>
                    <button className="btn-Aktif border-0">
                      Lihat Appoinment
                    </button>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column gap-3">
                  <div className="penilaian">Berikan Penilaian</div>
                  <div className="rating-mentor d-flex gap-1 align-items-start flex-column">
                    <span>Kualitas mentor</span>
                    <div className="d-flex gap-2">
                      {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                          <label key={currentRating}>
                            <input
                              type="radio"
                              name="rating"
                              value={currentRating}
                              onClick={() => setRating(currentRating)}
                            />
                            <FaStar
                              className="star"
                              size="24px"
                              color={
                                currentRating <= (hover || rating)
                                  ? "#ffc107"
                                  : "#e4e5e9"
                              }
                              onMouseEnter={() => setHover(currentRating)}
                              onMouseLeave={() => setHover(null)}
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="ulasan d-flex flex-column">
                    <span>Ulasan</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  <button className="btn-kirimUlasan border-0">
                    Kirim Penilaian
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
  };

  return (
    <div >
      <Navbar />

      <div style={{height:"100vh"}} className="container-xxl mx-auto d-flex flex-column">
        <Row>
          <Col lg="3">
            <SidebarJadwal setMentoring={setMentoring} mentoring={mentoring} />
            {/* <div className="navigasiJadwal">
              <div className="jadwal"> Jadwal</div>
              <div
                className={mentoring ? "mAktif-f" : "mAktif aktif"}
                onClick={handleMentoringAktif}
              >
                <span className=" d-flex gap-2 align-items-center">
                  <FiUser size="24px" /> Mentoring Aktif
                </span>
              </div>
              <div
                className={mentoring ? "mSelesai aktif" : "mSelesai-f"}
                onClick={handleMentoringSelai}
              >
                <span className=" d-flex gap-2 align-items-center">
                  <LuHistory size={24} />
                  Mentoring Selesai
                </span>
              </div>
            </div> */}
          </Col>
          <Col lg-9={mentoring.toString()}>
            {MentoringAktif()}
            {MentoringSelesai()}
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
};

export default Schedule;
