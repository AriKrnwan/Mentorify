import { useState } from "react";
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './postingan.css'

function Postingan(props) {
    const { nama, waktu, isi, foto } = props;

    const navigate = useNavigate();
    const handleCommentClick = () => {
        navigate('/qna/detail-postingan');
    };

    const [filled, setFilled] = useState(false);
    const [likeCount, setLikeCount] = useState(1);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleClick = () => {
        setFilled(!filled);
        setLikeCount((prevCount) => (filled ? prevCount - 1 : prevCount + 1));
    };

    const handleShareClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const openFacebook = () => {
        window.open("https://www.facebook.com/", "_blank");
    };

    const openWhatsapp = () => {
        window.open("https://web.whatsapp.com/", "_blank");
    };

    const openInstagram = () => {
        window.open("https://www.instagram.com/", "_blank");
    };

    return (
        <div className="d-flex flex-column gap-2 p-4 border rounded mb-3">
            <div className="profile-qna d-flex align-items-center gap-3">
                <div className='img-profile bg-warning overflow-hidden d-flex align-items-center'>
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
                <div className="action d-flex align-items-center gap-2 p-1" onClick={handleClick} style={{ cursor: 'pointer' }}>
                    <FiHeart fill={filled ? 'red' : 'white'} size={18} stroke={filled ? 'red' : 'black'} />
                    <p className='mb-0'>{likeCount} Suka</p>
                </div>
                <div className="comment d-flex align-items-center gap-2 p-1" onClick={handleCommentClick}>
                    <FiMessageCircle size={18} />
                    <p className='mb-0'>1 Komentar</p>
                </div>
                <div className="action d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center gap-2 p-1" onClick={handleShareClick} style={{ cursor: 'pointer' }}>
                        <FiShare2 size={18} />
                        <p className='mb-0'>Bagikan</p>
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown border p-2 rounded d-flex align-items-center gap-3">
                            <FaFacebookSquare size={25} style={{ cursor: 'pointer' }} onClick={openFacebook} />
                            <FaWhatsappSquare size={25} style={{ cursor: 'pointer' }} onClick={openWhatsapp} />
                            <FaInstagramSquare size={25} style={{ cursor: 'pointer' }} onClick={openInstagram} />
                        </div>
                    )}
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

export default Postingan;
