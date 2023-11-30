import ButtonIconLeft from '../../components/button/button2';
import Navbar from '../../components/navbar/Navbar';
import SearchBar from '../../components/searchBar/SearchBar';
import { Row } from "react-bootstrap";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import "../qna/qna.css"
import Postingan from '../../components/postingan/Postingan';
import profile from "../../assets/image/profile picture.jpg"
import SidebarFilter from '../../components/sidebarFilter/SidebarFilter';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import FilterDropdown from '../../components/dropdown/Dropdown';

const Qna = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupOpen = () => {
        setShowPopup(true);
    }

    const handlePopupClose = () => {
        setShowPopup(false);
    }

    const isiPostingan = [
        {
            foto: profile,
            nama: "Salsabila Fourgatri",
            waktu: "5 menit",
            isi: "Saya akan melamar di perusahaan sebagai UI/UX Designer, tapi gak tau job desc nya. Mungkin teman - teman ada yang tau dan sudah pernah bekerja bisa sharing di sini.",
        },
        {
            foto: profile,
            nama: "Ucup",
            waktu: "1 jam",
            isi: "Bahasa apa ya yang gampang dipelajari dalam waktu 1 jam?",
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="container-xxl mx-auto">
                <Row className="mt-4 mb-3 wrapper-all">
                    <div className="col-3">
                        <SidebarFilter />
                    </div>
                    <div className="col-9 content-qna">
                        {/* <h2 className='fs-4 text-center'>Selamat Datang di Forum Tanya Jawab</h2>
                        <p className='fs-6 text-center mb-4'>Eksplorasi Ide, Temukan Jawaban, dan Ajukan Pertanyaan - Platform Interaktif untuk Berbagi Pengetahuan dan Memperluas Wawasan.</p> */}
                        <div className="wrapper-search d-flex gap-3 mb-3">
                            <SearchBar />
                            <ButtonIconLeft text="Buat Pertanyaan" icon={HiChatBubbleLeftRight} onClick={handlePopupOpen} />
                        </div>
                        {isiPostingan.map((isiPost, index) => (
                            <Postingan
                                key={index}
                                foto={isiPost.foto}
                                nama={isiPost.nama}
                                waktu={isiPost.waktu}
                                isi={isiPost.isi}
                            />
                        ))}
                    </div>
                </Row>
                
                <Modal show={showPopup} onHide={handlePopupClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Buat Pertanyaan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Apa yang anda pikirkan?</p>
                        <textarea type="text" className='form-control' style={{height:"100px", resize:'none'}} />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonIconLeft text="Kirim" onClick={handlePopupClose} />
                    </Modal.Footer>
                </Modal>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Qna;
