import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

const DynamicNumberFields = (props) => {
    const {label, placeholder} = props;
    const [textFields, setTextFields] = useState(['']);

    const handleTextChange = (index, value) => {
        const newTextFields = [...textFields];
        newTextFields[index] = value;
        setTextFields(newTextFields);
    };

    const handleAddTextField = () => {
        setTextFields([...textFields, '']);
    };

    return (
        <div className='dynamic-field col-lg-6'>
            {textFields.map((text, index) => (
                <Form.Group key={index} controlId={`Keahlian-${index}`} className='mb-3'>
                    {index === 0 ? (
                        <Form.Label>{label}</Form.Label>
                    ) : null}
                    <Form.Control
                        required
                        type="time"
                        placeholder={placeholder}
                        value={text}
                        onChange={(event) => handleTextChange(index, event.target.value)}
                    />
                </Form.Group>
            ))}
            <Button variant="primary" onClick={handleAddTextField}>
                Tambah Field
            </Button>
        </div>
    );
};

DynamicNumberFields.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default DynamicNumberFields;
