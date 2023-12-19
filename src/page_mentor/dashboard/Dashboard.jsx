import "./dashboard.css";
import NavbarMentor from "../../components/navbar/NavbarMentor";
import heroImg from "../../assets/image/heroDashboard.svg";
import { Col, Row } from "react-bootstrap";
import { FaFile } from "react-icons/fa6";
import CardPesanan from "../../components/card/CardPesanan";
import CardJadwalMentor2 from "../../components/card/CardJadwalMentor2";



const Dashboard = () => {


  // Data untuk card jadwal mentoring
  const jadwalData = [
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_mentoring: "Mentoring Sekarang",
      link_zoom:
        "https://us05web.zoom.us/j/82951006716?pwd=uf0jtJToWATdlA76JKs7uvbFY7qbV8.1",
    },
  ];

  // Data untuk card pesanan masuk
  const orderData = [
    {
      nama: "Rizky Akbar Maulana",
      tanggal: "14 November 2023 pukul 09:00 - 10:00",
      topic: "UX Design",
      harga: "Rp50.000",
      durasi: "60 Menit",
      detail_materi:
        "Saya ingin lebih mendalami Design UI/UX, terutama cara pembuatan design yang responsive.",
      status_pesanan: "",
      tombol_1: "Diterima",
      tombol_2: "Ditolak",
    },
  ];

  return (
    <div>
      <NavbarMentor />
      <div className="container-xxl d-flex flex-column gap-3">
        <Row className="dashboard atas">
          <Col lg={9}>
            <div className="d-flex align-items-center dashboard-hero">
              <div className="dashboard-img">
                <img src={heroImg} alt="Gambar" className="position-absolute" />
              </div>
              <div className="dashboard-heading px-4">
                <h3 className="mb-0">Selamat Datang, Putri Alifia Rizky!</h3>
                <p className="mb-0">
                  Ayo ciptakan pengalaman mentoring terbaik bersama! Dengan
                  mendengarkan, berkolaborasi, dan komitmen penuh, kita bisa
                  mencapai pertumbuhan dan sukses bersama-sama.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="d-flex flex-column border rounded dashboard-saldo justify-content-center gap-3 px-3" >
              <div className="d-flex saldo-saya justify-content-between">
                <h5 className="mb-0">Saldo Saya</h5>
                <p className="mb-0">15 November 2023</p>
              </div>
              <h3 className="mb-0 text-center">Rp280.000</h3>
              
            </div>
          </Col>
        </Row>

        <Row className="dashboard">
          <Col lg={3}>
            <div className="pesanan-masuk border rounded d-flex justify-content-center align-items-center gap-3">
              <div className="icon d-flex justify-content-center align-items-center">
                <FaFile fill="#2F80ED" size={24} />
              </div>
              <div className="keterangan">
                <h3 className="mb-0">40 Pesanan</h3>
                <p className="mb-0">Total Pesanan Masuk</p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="sesi-selesai border rounded d-flex justify-content-center align-items-center gap-3">
              <div className="icon d-flex justify-content-center align-items-center">
                <FaFile fill="#27AE60" size={24} />
              </div>
              <div className="keterangan">
                <h3 className="mb-0">40 Sesi</h3>
                <p className="mb-0">Total Sesi Selesai</p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="sesi-masuk border rounded d-flex justify-content-center align-items-center gap-3">
              <div className="icon d-flex justify-content-center align-items-center">
                <FaFile fill="#27AE60" size={24} />
              </div>
              <div className="keterangan">
                <h3 className="mb-0">2 Sesi</h3>
                <p className="mb-0">Total Yang Terjadwal</p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="ulasan border rounded d-flex justify-content-center align-items-center gap-3">
              <div className="icon d-flex justify-content-center align-items-center">
                <FaFile fill="#E2B93B" size={24} />
              </div>
              <div className="keterangan">
                <h3 className="mb-0">4,7/5 (25 ulasan) </h3>
                <p className="mb-0">Total Pesanan Masuk</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="dashboard mt-4">
          <Col lg={9}>
            <div className="order-masuk d-flex flex-column gap-3">
              <h1 className="mb-0">Pesanan Masuk</h1>
              {orderData.map((order, index) => (
                <CardPesanan
                  key={index}
                  nama={order.nama}
                  durasi={order.durasi}
                  tanggal={order.tanggal}
                  topic={order.topic}
                  harga={order.harga}
                  detail_materi={order.detail_materi}
                  status_pesanan={order.status_pesanan}
                  tombol_1={order.tombol_1}
                  tombol_2={order.tombol_2}
                />
              ))}
            </div>
          </Col>
          <Col lg={3}>
            <div className="jadwal-mentoring d-flex flex-column gap-3">
              <h1 className="mb-0">Jadwal Mentoring</h1>
              {jadwalData.map((jadwal, index) => (
                <CardJadwalMentor2
                  key={index}
                  nama={jadwal.nama}
                  durasi={jadwal.durasi}
                  tanggal={jadwal.tanggal}
                  topic={jadwal.topic}
                  harga={jadwal.harga}
                  detail_materi={jadwal.detail_materi}
                  status_mentoring={jadwal.status_mentoring}
                  link_zoom={jadwal.link_zoom}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
