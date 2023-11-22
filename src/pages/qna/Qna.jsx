import ButtonIconLeft from '../../components/button/button2';
import Navbar from '../../components/navbar/Navbar';
import SearchBar from '../../components/searchBar/SearchBar';
import { Row } from "react-bootstrap";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import "../qna/qna.css"
import Postingan from '../../components/postingan/Postingan';
import profile from "../../assets/image/profile picture.jpg"

// import FilterDropdown from '../../components/dropdown/Dropdown';

const Qna = () => {
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
                    <div className="col-3"></div>
                    <div className="col-9 content-qna">
                        {/* <h2 className='fs-4 text-center'>Selamat Datang di Forum Tanya Jawab</h2>
                        <p className='fs-6 text-center mb-4'>Eksplorasi Ide, Temukan Jawaban, dan Ajukan Pertanyaan - Platform Interaktif untuk Berbagi Pengetahuan dan Memperluas Wawasan.</p> */}
                        <div className="wrapper-search d-flex gap-3 mb-3">
                            <SearchBar />
                            <ButtonIconLeft text="Buat Pertanyaan" icon={HiChatBubbleLeftRight} />
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
                {/* <FilterDropdown 
                    judul="Topik" 
                    items={"Teknik Industri, Psikologi, Manajemen, Teknik Informatika, Sistem Informasi"} 
                /> */}
            </div>
        </div>
    );
}

export default Qna;
