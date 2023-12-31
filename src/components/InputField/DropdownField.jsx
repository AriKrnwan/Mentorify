import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const DropdownField = (props) => {
    const { label, placeholder, options, lg, value } = props;

    const handleSelectChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <Form.Group as={Col} lg={lg} controlId={label} className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Select
                required
                value={value}
                onChange={handleSelectChange}
                className="custom-select"
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
};

DropdownField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DropdownField;
