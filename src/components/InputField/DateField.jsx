import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";

const DateField = (props) => {
    const { label, placeholder, lg, value, onChange } = props;

    // Ubah format tanggal ke ISO jika nilai ada
    const formattedDate = value ? new Date(value).toISOString().split('T')[0] : '';

    const handleInputChange = (event) => {
        const newValue = event.target.value;

        // Pastikan kita memberikan format tanggal yang benar (ISO format)
        const isoFormattedDate = newValue ? new Date(newValue).toISOString().split('T')[0] : '';

        onChange(isoFormattedDate);
    };

    return (
        <Form.Group as={Col} lg={lg} controlId={label} className='mb-3'>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                required
                type="date"
                placeholder={placeholder}
                value={formattedDate}
                onChange={handleInputChange}
            />
        </Form.Group>
    )
};

DateField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default DateField;
