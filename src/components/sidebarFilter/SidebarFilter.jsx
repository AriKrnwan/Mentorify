import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "../sidebarFilter/sidebarFilter.css";

const SidebarFilter = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="sidebar-filter border p-4 rounded">
            <h6>Urutakan Berdasarkan</h6>
            <hr />
            <Form>
                {['Belum Terjawab', 'Terbaru', 'Terlama'].map((option, index) => (
                    <div key={index} className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id={`default-checkbox-${index}`}
                            name="filterOption"
                            label={`Pertanyaan ${option}`}
                            checked={selectedOption === option}
                            onChange={() => handleCheckboxChange(option)}
                        />
                    </div>
                ))}
            </Form>
        </div>
    );
};

export default SidebarFilter;