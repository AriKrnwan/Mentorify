import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import '../dropdown/dropdown.css';
import { FiStar } from "react-icons/fi";

function FilterDropdown() {
    const [selectedTopics, setSelectedTopics] = useState({});

    const dropdowns = [
        {
            id: 'topik',
            label: 'Topik',
            items: ["Sistem Informasi", "Teknik Informatika", "Teknik Industri"],
        },
        {
            id: 'gender',
            label: 'Jenis Kelamin',
            items: ["Laki-laki", "Perempuan"],
        },
        {
            id: 'rating',
            label: 'Rating',
            items: [1, 2, 3, 4, 5].map(stars => (
                <span key={stars}>
                    {Array.from({ length: stars }).map((_, i) => (
                        <FiStar key={i} fill="#E2B93B" stroke="none" />
                    ))}
                </span>
            )),
        },
        {
            id: 'harga',
            label: 'Harga',
            items: ['Rp 50.000', 'Rp 40.000', 'Rp 30.000'],
        },
        {
            id: 'jam',
            label: 'Jam',
            items: ['09:00 pm', '10:00 pm', '11:00 pm', '12:00 pm'],
        },
    ];

    const handleTopicChange = (dropdownId, topic) => {
        setSelectedTopics((prevSelectedTopics) => ({
            ...prevSelectedTopics,
            [dropdownId]: topic,
        }));
    };

    return (
        <div className="d-flex gap-3">
            {dropdowns.map((dropdown) => (
                <Dropdown key={dropdown.id} className="filter-dropdown">
                    <Dropdown.Toggle variant="success" className='border'>
                        {selectedTopics[dropdown.id] || dropdown.label}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dropdown.items.map((topic, index) => (
                            <Dropdown.Item
                                key={index}
                                onClick={() => handleTopicChange(dropdown.id, topic)}
                            >
                                {topic}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            ))}
        </div>
    );
}

export default FilterDropdown;
