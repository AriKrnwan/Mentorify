import { Card } from "react-bootstrap";
import { FiBookmark, FiBriefcase, FiStar } from "react-icons/fi";
import "../card/card.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function CardMentor(props) {
  const { id, nama, jenisMentor, ketTambah, harga, rating, foto, onClick, isBookmarked } = props;
  const navigate = useNavigate();

  const handleCardMentor = () => {
    navigate(`/mentoring/detail-mentor/${id}`);
  };

  return (
    <div className="col-6 col-lg-3 mb-4">
      <Card className="gap-3">
        <Card.Img variant="top" src={foto} />
        <Card.Body className="p-0 gap-1">
          <Card.Title className="d-flex justify-content-between align-items-start">
            <h6 className="mb-0">{nama}</h6>
            <div
              className="action d-flex align-items-center gap-2 p-1"
              onClick={onClick}
              style={{ cursor: "pointer" }}
            >
              <FiBookmark
                fill={isBookmarked ? "#00a9b8" : "white"}
                size={20}
                stroke={isBookmarked ? "none" : "black"}
              />
            </div>
          </Card.Title>
          <div
            className="d-flex flex-column gap-4"
            onClick={handleCardMentor}
            style={{ cursor: "pointer" }}
          >
            <div className="info-mentor">
              <div className="info-mentor d-flex align-items-center">
                <FiBriefcase size={16} />
                <p className="mb-0 ms-2">{jenisMentor}</p>
              </div>
              <div className="info-mentor d-flex align-items-center">
                <FiStar fill="#E1C94A" stroke="none" size={16} />
                <p className="mb-0 ms-2">{ketTambah}</p>
              </div>
            </div>
            <div className="info-harga d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Rp {harga}</h4>
              <div className="rating d-flex align-items-center px-2 py-1 rounded">
                <FiStar fill="#E1C94A" stroke="none" size={14} />
                <p className="mb-0">{rating}</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

CardMentor.propTypes = {
  id: PropTypes.number.isRequired,
  nama: PropTypes.string.isRequired,
  jenisMentor: PropTypes.string.isRequired,
  ketTambah: PropTypes.string.isRequired,
  harga: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
};

export default CardMentor;