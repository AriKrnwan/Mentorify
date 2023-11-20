import Navbar from'../../components/navbar/Navbar'
import "../home/Home.css"
import profile from "../../assets/image/img-intro.svg";
import ButtonWithIcon from '../../components/button/button';
import { FiArrowRight } from 'react-icons/fi';
import CardMentor from '../../components/card/card';
import mentor1 from '../../assets/image/mentor1.png'

const Home = () => {
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
                <div id="recomend-mentors" className='d-flex justify-content-between row mx-auto'>
                    <CardMentor 
                        nama = "Aulia Safitri"
                        jenisMentor = "Mentor Informatika"
                        ketTambah = "Mentor Baru"
                        harga = "5.000"
                        rating = "4/5"
                        foto = {mentor1}
                    />
                    <CardMentor />
                    <CardMentor />
                    <CardMentor />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}

export default Home;