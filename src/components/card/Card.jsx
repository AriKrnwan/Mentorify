import { Card } from "react-bootstrap"
import { FiBookmark, FiBriefcase, FiStar } from 'react-icons/fi';
import "../card/card.css"
import PropTypes from 'prop-types';

function CardMentor(props) {
    const { nama, jenisMentor, ketTambah, harga, rating, foto } = props;

    return(
        <div className="col-6 col-lg-3">
            <Card className="gap-3">
                <Card.Img variant="top" src={foto} />
                <Card.Body className="p-0 gap-1">
                    <Card.Title className="d-flex justify-content-between align-items-start">
                    <h6 className="mb-0">{nama}</h6>
                    <FiBookmark size={20} />
                    </Card.Title>
                    <Card.Text className="d-flex flex-column gap-4">
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
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    );
}

CardMentor.propTypes = {
    nama: PropTypes.string.isRequired,
    jenisMentor: PropTypes.string.isRequired,
    ketTambah: PropTypes.string.isRequired,
    harga: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
};

export default CardMentor

