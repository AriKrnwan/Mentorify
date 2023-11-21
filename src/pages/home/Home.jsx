import Navbar from'../../components/navbar/Navbar'
import "../home/Home.css"
import profile from "../../assets/image/img-intro.svg";
import ButtonWithIcon from '../../components/button/button';
import { FiArrowRight } from 'react-icons/fi';
import CardMentor from '../../components/card/card';
import mentor1 from '../../assets/image/mentor1.png'
import Benefits from '../../components/benefits/Benefits';
import AdvertismentV1 from '../../components/advertisment/AdvertismentV1';
import AdvertismentV2 from '../../components/advertisment/AdvertismentV2';
import imgAdvQna from '../../assets/image/img-advQna.png'

const Home = () => {
    const mentorsData = [
        {
            nama: "Aulia Safitri",
            jenisMentor: "Mentor Informatika",
            ketTambah: "Mentor Baru",
            harga: "5.000",
            rating: "4/5",
            foto: mentor1
        },
        {
            nama: "Aulia Safitri",
            jenisMentor: "Mentor Informatika",
            ketTambah: "Mentor Baru",
            harga: "5.000",
            rating: "4/5",
            foto: mentor1
        },
    ];

    return ( 
        <>
            <Navbar/>
            <div className="container-xxl mx-auto">
                <div id='intro' className='row mx-auto mb-5'>
                    <div className="col-6 text-start mt-5">
                        <h1>Dapatkan Bimbingan dari Para Profesional.</h1>
                        <p className='fs-6'>Aplikasi mentoring kami membantu anda mencapai potensi penuh anda dengan dukungan pribadi dari mentor berpengalaman, kurikulum yang disesuaikan, dan komunitas yang mendukung pertumbuhan Anda secara holistik.</p>
                        <ButtonWithIcon text="Cari Mentor" icon={FiArrowRight} />
                    </div>
                    <div className="col-6 text-end">
                        <img className='img-intro' src={profile} alt="Mentors" />
                    </div>
                </div>
                <div id="recomend-mentors" className='d-flex justify-content-between row mx-auto mb-5'>
                    {/* Map over the mentorsData array to dynamically render CardMentor components */}
                    {mentorsData.map((mentor, index) => (
                        <CardMentor
                            key={index}
                            nama={mentor.nama}
                            jenisMentor={mentor.jenisMentor}
                            ketTambah={mentor.ketTambah}
                            harga={mentor.harga}
                            rating={mentor.rating}
                            foto={mentor.foto}
                        />
                    ))}
                </div>
                <div id="recomend-mentors" className='row mx-auto mb-5'>
                    <Benefits />
                </div>
                <div id="iklan" className='row mx-auto'>
                    <AdvertismentV1
                        ilustrasi = {imgAdvQna}
                        judul = "Forum Tanya & Jawab"
                        descPanjang = "Temukan ide, jawaban, dan pertanyaan terkini seputar berbagai topik di forum tanya jawab kami, memberikan platform interaktif bagi pengguna untuk berbagi pengetahuan, mendapatkan informasi, dan memperluas wawasan."
                    />
                    <AdvertismentV2 />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}

export default Home;