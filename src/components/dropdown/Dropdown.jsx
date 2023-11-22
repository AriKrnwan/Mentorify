import Dropdown from 'react-bootstrap/Dropdown';
import '../dropdown/dropdown.css'; 
import PropTypes from 'prop-types';

function FilterDropdown(props) {
    const { judul, items } = props;

    const handleCheckboxClick = (e) => {
        e.stopPropagation();
    };

    const filteringTopik = items.split(',').map((item) => item.trim());

    return (
        <Dropdown className="filter-dropdown">
            <Dropdown.Toggle variant="success" className='border'>
                {judul}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {filteringTopik.map((value, index) => (
                <Dropdown.Item key={index} href={`#/action-${index}`} onClick={handleCheckboxClick}>
                    <input type="checkbox" name={value} id={value} onClick={handleCheckboxClick} /> {value}
                </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

FilterDropdown.propTypes = {
  judul: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
};

export default FilterDropdown;
