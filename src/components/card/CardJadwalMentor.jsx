import foto from "../..//assets/image/profile picture.jpg";
import PropTypes from "prop-types";

const CardJadwalMentor = (props) => {
  const {
    nama,
    tanggal,
    topic,
    harga,
    status_mentoring,
    detail_materi,
    durasi,
    link_zoom,
  } = props;

  const handleClick = () => {
    window.open(link_zoom, '_blank');
  };
  return (
    <div className="d-flex border rounded justify-content-between p-4">
      <div className="d-flex gap-3">
        <div>
          <img src={foto} alt="" className="fotoProfileMentor" />
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="cardPesananName">
            <h3>{nama}</h3>
          </div>
          <div className="cardPesananTime">
            <p className="mb-0">Waktu</p>
            <h5 className="mb-0">{tanggal}</h5>
          </div>
          <div className="cardPesananDetail">
            <p className="mb-0">Topik</p>
            <h5 className="mb-0">{topic}</h5>
          </div>
          <div className="cardPesananDetail">
            <p className="mb-0">Detail materi</p>
            <h5 className="mb-0">{detail_materi}</h5>
          </div>
        </div>
      </div>
      <div className="cardPesananStatus d-flex flex-column gap-3 text-end">
        <h5 className="mb-0">{harga}</h5>
        <h6 className="mb-0">{durasi}</h6>
        {status_mentoring === "Mentoring Sekarang" ? (
          <p onClick={handleClick} className={`mb-0 ${status_mentoring}`}>Mentoring Sekarang</p>
        ) : (
          <p className={`mb-0 ${status_mentoring}`}>{status_mentoring}</p>
        )}
      </div>
    </div>
  );
};

CardJadwalMentor.propTypes = {
  nama: PropTypes.string.isRequired,
  durasi: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  harga: PropTypes.string.isRequired,
  status_mentoring: PropTypes.string.isRequired,
  detail_materi: PropTypes.string.isRequired,
  link_zoom: PropTypes.string.isRequired,
};

export default CardJadwalMentor;
