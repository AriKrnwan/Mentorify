import PropTypes from "prop-types";

const CardPesanan = (props) => {
  const {
    nama,
    tanggal,
    topic,
    harga,
    status_pesanan,
    detail_materi,
    durasi,
    tombol_1,
    tombol_2,
    foto,
  } = props;
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
          <div className="cardPesananBtn d-flex gap-2">
            <div
              className={` d-flex justify-content-center align-items-center mb-0 ${tombol_1}`}
            >
              {tombol_1}
            </div>
            <div
              className={` d-flex justify-content-center align-items-center mb-0 ${tombol_2}`}
            >
              {tombol_2}
            </div>
          </div>
        </div>
      </div>
      <div className="cardPesananStatus d-flex flex-column gap-3 text-end">
        <p className={`mb-0 ${status_pesanan}`}>{status_pesanan}</p>
        <h5 className="mb-0">{harga}</h5>
        <h6 className="mb-0">{durasi}</h6>
      </div>
    </div>
  );
};

CardPesanan.propTypes = {
  nama: PropTypes.string.isRequired,
  durasi: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  harga: PropTypes.string.isRequired,
  status_pesanan: PropTypes.string.isRequired,
  detail_materi: PropTypes.string.isRequired,
  tombol_1: PropTypes.string.isRequired,
  tombol_2: PropTypes.string.isRequired,
};

export default CardPesanan;
