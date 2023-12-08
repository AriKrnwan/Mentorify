import Navbar from'../../components/navbar/Navbar'
import "../home/Home.css"
import profile from "../../assets/image/img-intro.svg";
import ButtonWithIcon from '../../components/button/button';
import { FiArrowRight } from 'react-icons/fi';
import CardMentor from '../../components/card/Card';
import mentor1 from '../../assets/image/mentor1.png'
import mentor2 from '../../assets/image/mentor2.png'
import mentor3 from '../../assets/image/mentor3.png'
import mentor4 from '../../assets/image/mentor4.png'
import Benefits from '../../components/benefits/Benefits';
import AdvertismentV1 from '../../components/advertisment/AdvertismentV1';
import AdvertismentV2 from '../../components/advertisment/AdvertismentV2';
import imgAdvQna from '../../assets/image/img-advQna.png'
import imgAdvInst from '../../assets/image/img-advInst.png'
import imgAdvJoin from '../../assets/image/img-advJoin.png'
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const mentorsData = [
        {
            nama: "Salsabila Fourgatri",
            jenisMentor: "Mentor UX Design",
            ketTambah: "Mentor Baru",
            harga: "50.000",
            rating: "4/5",
            foto: mentor1
        },
        {
            nama: "Akbar Budiana",
            jenisMentor: "Mentor Teknik Industri",
            ketTambah: "Mentor Baru",
            harga: "50.000",
            rating: "4/5",
            foto: mentor2
        },
        {
            nama: "Siti Nurabaya",
            jenisMentor: "Mentor Informatika",
            ketTambah: "Mentor Baru",
            harga: "50.000",
            rating: "4/5",
            foto: mentor3
        },
        {
            nama: "Budi Ashari",
            jenisMentor: "Mentor Design Thingking",
            ketTambah: "Mentor Baru",
            harga: "50.000",
            rating: "4/5",
            foto: mentor4
        },
    ];

    const navigate = useNavigate();
    const toMentoring = () => {
        navigate('/mentoring');
    };

    const toQna = () => {
        navigate('/qna');
    };

    const handleClick = ()=> {
       alert('Haii ini masih dalam prosess')
    }

    return ( 
        <>
            <Navbar/>
            <div className="wrapper-intro">
                <div className="container-xxl mx-auto intro">
                    <div id='intro' className='row mx-auto'>
                        <div className="col-sm-6 text-start mt-5">
                            <h1>Dapatkan Bimbingan dari Para Profesional.</h1>
                            <p className='fs-6'>Aplikasi mentoring kami membantu anda mencapai potensi penuh anda dengan dukungan pribadi dari mentor berpengalaman, kurikulum yang disesuaikan, dan komunitas yang mendukung pertumbuhan Anda secara holistik.</p>
                            <ButtonWithIcon text="Cari Mentor" icon={FiArrowRight} onClick={toMentoring} />
                        </div>
                        <div className="col-sm-6 text-end">
                            <img className='img-intro' src={profile} alt="Mentors" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl mx-auto">
                <div id="recomend-mentor" className='mx-auto'>
                    <p className='text-center fs-2'>Rekomendasi Mentor</p>
                    <div className='d-flex justify-content-start row mx-auto mb-5'>
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
                </div>
                <div id="benefits" className='mx-auto'>
                    <p className='text-center fs-2'>Benefits Mentoring dengan Kami</p>
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" className='row mx-auto mb-5'>
                        <Benefits />
                    </div>
                </div>
                <div id="iklan" className='row mx-auto'>
                    <div data-aos="fade-right">
                        <AdvertismentV1
                            ilustrasi = {imgAdvQna}
                            judul = "Forum Tanya & Jawab"
                            descPanjang = "Temukan ide, jawaban, dan pertanyaan terkini seputar berbagai topik di forum tanya jawab kami, memberikan platform interaktif bagi pengguna untuk berbagi pengetahuan, mendapatkan informasi, dan memperluas wawasan."
                            textButton='Masuk Forum'
                            onClick={toQna}
                        />
                    </div>
                    <div data-aos="fade-left">
                        <AdvertismentV2
                            ilustrasi = {imgAdvInst}
                            judul = "Download Aplikasi untuk Memulai Mentoring"
                            descPanjang = "Jelajahi potensi penuhmu! Unduh aplikasi kami sekarang untuk memulai perjalanan pengembangan diri dan kesuksesan. Bergabunglah dengan akses bimbingan langsung, materi eksklusif, serta peluang pertumbuhan karir yang tak terbatas!"
                            textButton='Download'
                            
                        />
                    </div>
                    <div data-aos="fade-right">
                        <AdvertismentV1
                            ilustrasi = {imgAdvJoin}
                            judul = "Gabung Bersama Kami"
                            descPanjang = "Jadi mentor di aplikasi kami dan bagikan pengetahuan serta pengalamanmu untuk menginspirasi dan membimbing generasi berikutnya. Bergabunglah sekarang dan jadilah bagian dari komunitas yang saling mendukung dan tumbuh bersama"
                            textButton='Gabung Yuk!'
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;