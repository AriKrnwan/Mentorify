import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import '../dropdown/dropdown.css';
import { FiStar } from "react-icons/fi";

function FilterDropdown() {
    const [selectedTopics, setSelectedTopics] = useState({});

    const dropdowns = [
        {
            id: 'topic',
            label: 'Topics',
            items: ["Sistem Informasi", "Teknik Informatika", "Teknik Industri"],
        },
        {
            id: 'gender',
            label: 'Genders',
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
            items: ['Rp 50.000', 'Rp 30.000.000'],
        },
        {
            id: 'jam',
            label: 'Jam',
            items: ['09:00', '10:00', '11:00', '12:00'],
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
