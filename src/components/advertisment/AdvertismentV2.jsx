import { FiArrowRight } from 'react-icons/fi';
import "../advertisment/advertisment.css"
import imgAdvQna from '../../assets/image/img-advQna.png'
import ButtonWithIcon from '../button/button';

function AdvertismentV2() {
    return (
        <>
            <div className="d-flex align-items-center row mx-auto">
                <div className="col-1"></div>
                <div className="col-7">
                    <h2>Forum Tanya & Jawab</h2>
                    <p>Temukan ide, jawaban, dan pertanyaan terkini seputar berbagai topik di forum tanya jawab kami, memberikan platform interaktif bagi pengguna untuk berbagi pengetahuan, mendapatkan informasi, dan memperluas wawasan.</p>
                    <ButtonWithIcon text="Cari Mentor" icon={FiArrowRight} />
                </div>
                <div className="col-3">
                    <div className='img-advQna'>
                        <img src={imgAdvQna} alt="" />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
}

export default AdvertismentV2