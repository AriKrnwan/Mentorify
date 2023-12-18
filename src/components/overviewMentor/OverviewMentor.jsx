import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import "./overviewMentor.css";
import PropTypes from 'prop-types';

const OverviewMentor = ({ mentorData }) => {
  if (!mentorData) {
    // Render something or return null if mentorData is not available yet
    return null;
  }

  const {
    bio,
    skill,
    institution,
    experience,
    certification,
    experience_location,
  } = mentorData;

  console.log(mentorData)

  return (
    <div className="d-flex flex-column gap-3">
      <div>
        <h2>Tentang</h2>
        <p>
        {bio}
        </p>
      </div>

      <div>
        <h2>Latar Belakang</h2>
        <div>
          <div className="d-flex gap-5 align-items-center py-2">
            <div style={{ width: "15%" }}>
              <h6 className="mb-0 keahlian-mentor">Keahlian</h6>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0 border py-1 px-2 p-3 rounded"> {skill} </p>
              <p className="mb-0 border py-1 px-2 p-3 rounded">PHP</p>
              <p className="mb-0 border py-1 px-2 p-3 rounded">Javascript</p>
            </div>
          </div>
          <div>
            <div className="d-flex gap-5 align-items-center">
              <div style={{ width: "15%" }}>
                <h6 className="mb-0 disciplines-mentor">Disciplines</h6>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <p className="mb-0 border py-1 px-2 p-3 rounded">Pemrograman</p>
                <p className="mb-0 border py-1 px-2 p-3 rounded">UI/UX DESIGN</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Pengalaman</h2>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="pengalaman-mentor">{experience}</h6>
            <h6 className="p-2 rounded wraperr-pengalaman-mentor">Magang</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <FaLocationDot fill="#BDBDBD" />
              <h6 className="mb-0 wrapper-lokasi-mentor">{experience_location}, Indonesia</h6>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <FaClock fill="#BDBDBD" />
              <h6 className="mb-0 tgl-pengalaman-mentor">14 April 2022 - 23 Desember 2022</h6>
            </div>
          </div>
        </div>
        <hr />
        {/* <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="pengalaman-mentor">Front End Developer</h6>
            <h6 className="p-2 rounded wraperr-pengalaman-mentor">Magang</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <FaLocationDot fill="#BDBDBD" />
              <h6 className="mb-0 wrapper-lokasi-mentor">Surabaya, Indonesia</h6>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <FaClock fill="#BDBDBD" />
              <h6 className="mb-0 tgl-pengalaman-mentor">14 April 2022 - 23 Desember 2022</h6>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="pengalaman-mentor">Front End Developer</h6>
            <h6 className="p-2 rounded wraperr-pengalaman-mentor">Magang</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <FaLocationDot fill="#BDBDBD" />
              <h6 className="mb-0 wrapper-lokasi-mentor">Surabaya, Indonesia</h6>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <FaClock fill="#BDBDBD" />
              <h6 className="mb-0 tgl-pengalaman-mentor">14 April 2022 - 23 Desember 2022</h6>
            </div>
          </div>
        </div>
        <hr /> */}
      </div>

      <div>
        <h2>Pendidikan</h2>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="univ-pendidikan-mentor">{institution}</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <FaLocationDot fill="#BDBDBD" />
              <h6 className="mb-0 wrapper-pendidikan-mentor">Surabaya, Indonesia</h6>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <FaClock fill="#BDBDBD" />
              <h6 className="mb-0 tgl-pendidikan-mentor">2018 - 2021</h6>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <h2>Lisensi & Sertifikat</h2>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="b-pemrograman">{certification}</h6>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <FaFileLines fill="#BDBDBD" />
              <h6 className="mb-0 wrapper-sertif-mentor">Infinite Learning</h6>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <FaClock fill="#BDBDBD" />
              <h6 className="mb-0 tgl-sertif-mentor">Mei-2022</h6>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};


// Menambahkan PropTypes untuk validasi properti
OverviewMentor.propTypes = {
  mentorData: PropTypes.shape({
    full_name: PropTypes.string,
    bio: PropTypes.string,
    skill: PropTypes.arrayOf(PropTypes.string),
    institution: PropTypes.string,
    city: PropTypes.string,
    rating: PropTypes.number,
    experience_location: PropTypes.string,
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        // Tentukan struktur objek pengalaman
      })
    ),
    certification: PropTypes.string,

  }),
};


export default OverviewMentor;
