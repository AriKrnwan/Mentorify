import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import "../button/button.css";

function ButtonWithIcon(props) {
    const { text, icon: Icon } = props;

    return (
        <Button 
            variant="primary" 
            className='border-0 outline-0 atur-height' 
        >
            {text} {Icon && <Icon size="20px" />}
        </Button>
    );
}

ButtonWithIcon.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.elementType, // Memastikan properti icon merupakan tipe elemen React
};

export default ButtonWithIcon;