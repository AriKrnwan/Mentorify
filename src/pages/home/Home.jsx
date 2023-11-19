import Navbar from'../../components/navbar/Navbar'
import "../home/Home.css"
import profile from "../../assets/image/img-intro.svg";
import ButtonWithIcon from '../../components/button/button';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
    return ( 
        <>
            <Navbar/>
            <div className="container-xxl row mx-auto">
                <div className="col-6 text-start mt-5">
                    <h1>Dapatkan Bimbingan dari Para Profesional.</h1>
                    <p className='fs-6'>Aplikasi mentoring kami membantu anda mencapai potensi penuh anda dengan dukungan pribadi dari mentor berpengalaman, kurikulum yang disesuaikan, dan komunitas yang mendukung pertumbuhan Anda secara holistik.</p>
                    <ButtonWithIcon text="Cari Mentor" icon={FiArrowRight} />
                </div>
                <div className="col-6 text-end">
                    <img className='img-intro' src={profile} alt="Mentors" />
                </div>
            </div>
        </>
    );
}

export default Home;