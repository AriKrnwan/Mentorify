import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";
import './inputField.css'

const NumberField = (props) => {
    const {label, placeholder, lg} = props;

    return (
        <Form.Group as={Col} lg={lg} controlId={label} className='mb-3'>
            <Form.Label>{label}</Form.Label>
                <Form.Control
                    required
                    type="number"
                    placeholder={placeholder}
                    className='inputan-number'
                />
        </Form.Group>
    )
};

NumberField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
};

export default NumberField