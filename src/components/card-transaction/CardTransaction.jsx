import "./cardTransaction.css";
import PropTypes from "prop-types";

const CardTransaction = (props) => {
  const { nama, noTransaction, tanggal, harga, statusTransaction } = props;

  return (
    <div className="card-transaction p-3">
      <div className="d-flex justify-content-between">
        <div className="number-transaction d-flex flex-column gap-4">
          <span> {noTransaction} </span>
          <span>{nama}</span>
        </div>
        <div className="information-transaction d-flex flex-column text-end gap-4">
          <span className={`d-flex justify-content-center align-items-center ${statusTransaction}` }> {statusTransaction} </span>
          <span> {harga} </span>
        </div>
      </div>

      <hr />

      <div className="d-flex flex-column gap-4">
        <div className="mentoring-time d-flex flex-column">
          <span>Lama Mentoring</span>
          <span>60 Menit</span>
        </div>
        <div className="mentoring-date d-flex flex-column">
          <span>Jadwal Mentoring</span>
          <span>{tanggal}</span>
        </div>
      </div>
    </div>
  );
};

CardTransaction.propTypes = {
  nama: PropTypes.string.isRequired,
  noTransaction: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  harga: PropTypes.string.isRequired,
  statusTransaction: PropTypes.string.isRequired,
};

export default CardTransaction;
