import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";

const TextField = (props) => {
    const {label, placeholder, lg} = props;

    return (
        <Form.Group as={Col} lg={lg} controlId={label} className='mb-3'>
            <Form.Label>{label}</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder={placeholder}
                />
        </Form.Group>
    )
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
};

export default TextField