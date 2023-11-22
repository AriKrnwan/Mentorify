import { FiArrowRight } from 'react-icons/fi';
import "../advertisment/advertisment.css"
import ButtonWithIcon from '../button/button';
import PropTypes from 'prop-types';

function AdvertismentV2(props) {
    const { ilustrasi, judul, descPanjang, textButton } = props;

    return (
        <>
            <div className="iklan d-flex align-items-center row mx-auto">
                <div className="col-1"></div>
                <div className="col-7">
                    <h2 className='fs-2'>{judul}</h2>
                    <p className='fs-6'>{descPanjang}</p>
                    <ButtonWithIcon text={textButton} icon={FiArrowRight} />
                </div>
                <div className="col-3">
                    <div className='img-advQna'>
                        <img src={ilustrasi} alt="" />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
}

AdvertismentV2.propTypes = {
    ilustrasi: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    descPanjang: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired
};

export default AdvertismentV2