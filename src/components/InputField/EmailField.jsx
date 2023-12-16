import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";


const EmailField = (props) => {
    const {label, placeholder, lg, value, onChange} = props;

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <Form.Group as={Col} lg={lg} controlId={label} className='mb-3'>
            <Form.Label>{label}</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleInputChange}
                />
        </Form.Group>
    )
};

EmailField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default EmailField