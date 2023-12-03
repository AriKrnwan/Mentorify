import foto from "../..//assets/image/profile picture.jpg";
import { FiStar } from "react-icons/fi";
import PropTypes from "prop-types";

const CardMentoringSelesai = (props) => {
  const { nama, tanggal, harga, detail_materi, durasi, ulasan } = props;
  return (
    <div className="border rounded p-4 d-flex flex-column gap-3">
      <div className="d-flex justify-content-between ">
        <div className="d-flex gap-3">
          <div>
            <img src={foto} alt="" className="fotoProfileMentor" />
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="cardPesananName">
              <h3>{nama}</h3>
            </div>
            <div className="cardPesananTime d-flex flex-column gap-1">
              <p className="mb-0">Waktu</p>
              <h5 className="mb-0">{tanggal}</h5>
            </div>
            <div className="cardPesananDetail d-flex flex-column gap-1">
              <p className="mb-0">Detail materi</p>
              <h5 className="mb-0">{detail_materi}</h5>
            </div>
          </div>
        </div>
        <div className="cardPesananStatus d-flex flex-column gap-3 text-end">
          <h5 className="mb-0">{harga}</h5>
          <h6 className="mb-0">{durasi}</h6>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column gap-3">
        <div className="penilaiMenteeSelesai">
          <h3 className="mb-0">Penilaian Mentee</h3>
        </div>
        <div className="kualiatsMentorSelesai d-flex flex-column gap-1">
          <h5 className="mb-0">Kualitas Mentor</h5>
          <div className="d-flex gap-2">
            <FiStar size={20} fill="#E2B93B" stroke="none"/><FiStar size={20} fill="#E2B93B" stroke="none"/><FiStar size={20} fill="#E2B93B" stroke="none"/><FiStar size={20} fill="#E2B93B" stroke="none"/><FiStar size={20} fill="#BDBDBD" stroke="none"/>
          </div>
        </div>
        <div className="ulasanMentorSelesai">
          <h5 className="mb-0">Ulasan</h5>
          <p className="mb-0">{ulasan}</p>
        </div>
        <button className="btnMentoringSelesai border-0">Sembunyikan Penilaian</button>
      </div>
    </div>
  );
};

CardMentoringSelesai.propTypes = {
  nama: PropTypes.string.isRequired,
  durasi: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  harga: PropTypes.string.isRequired,
  detail_materi: PropTypes.string.isRequired,
  ulasan: PropTypes.string.isRequired,
};

export default CardMentoringSelesai;
