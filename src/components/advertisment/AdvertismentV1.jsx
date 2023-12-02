import { FiArrowRight } from 'react-icons/fi';
import "../advertisment/advertisment.css"
import ButtonWithIcon from '../button/button';
import PropTypes from 'prop-types';

function AdvertismentV1(props) {
    const { ilustrasi, judul, descPanjang, textButton, onClick } = props;

    return (
        <>
            <div className="iklan d-flex align-items-center row column-sm mx-auto">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                    <div className='img-advQna'>
                        <img src={ilustrasi} alt="" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <h2 className='fs-2'>{judul}</h2>
                    <p className='fs-6'>{descPanjang}</p>
                    <ButtonWithIcon text={textButton} icon={FiArrowRight} onClick={onClick} />
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}

AdvertismentV1.propTypes = {
    ilustrasi: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    descPanjang: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    onClick: PropTypes.string.isRequired,
};

export default AdvertismentV1