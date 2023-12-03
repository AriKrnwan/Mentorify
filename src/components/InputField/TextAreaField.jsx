import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";

const TextAreaField = (props) => {
    const { label, placeholder, lg } = props;

    return (
        <Form.Group as={Col} lg={lg} controlId={label} className='mb-3'>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                required
                as="textarea" // Ganti dengan textarea
                placeholder={placeholder}
                style={{height:"140px"}}
            />
        </Form.Group>
    )
};

TextAreaField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
};

export default TextAreaField;
