import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Postingan(props) {
    const { nama, waktu, isi, foto } = props;

    const navigate = useNavigate();
    const handleCommentClick = () => {
        navigate('/detail-postingan');
    };

    return (
        <div className="d-flex flex-column gap-2 p-4 border rounded mb-3">
            <div className="profile-qna d-flex align-items-center gap-3">
                <div className='img-profile overflow-hidden d-flex align-items-center'>
                    <img src={foto} alt="" />
                </div>
                <div className="nama-profile">
                    <h6 className='fs-6'>{nama}</h6>
                    <p className='mb-0'>{waktu}</p>
                </div>
            </div>
            <div className="isi-postingan">
                <p className='mb-0'>{isi}</p>
            </div>
            <div className="action-group d-flex gap-3">
                <div className="action d-flex align-items-center gap-2 p-1">
                    <FiHeart size={18} />
                    <p className='mb-0'>0 Like</p>
                </div>
                <div className="comment d-flex align-items-center gap-2 p-1" onClick={handleCommentClick}>
                    <FiMessageCircle size={18} />
                    <p className='mb-0'>0 Comment</p>
                </div>
                <div className="action d-flex align-items-center gap-2 p-1">
                    <FiShare2 size={18} />
                    <p className='mb-0'>Share</p>
                </div>
            </div>
        </div>
    )
}

Postingan.propTypes = {
    nama: PropTypes.string.isRequired,
    waktu: PropTypes.string.isRequired,
    isi: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
  };

export default Postingan
