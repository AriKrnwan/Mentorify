import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import "../button/button.css";

function ButtonIconLeft(props) {
    const { text, icon: Icon } = props;

    return (
        <Button 
            variant="primary" 
            className='border-0 outline-0 btn2' 
        >
            {Icon && <Icon size="20px" />} {text}
        </Button>
    );
}

ButtonIconLeft.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
};

export default ButtonIconLeft;