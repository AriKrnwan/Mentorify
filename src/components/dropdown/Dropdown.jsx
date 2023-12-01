import React, { useState } from "react";
import '../dropdown/dropdown.css';
// import { FaStar } from "react-icons/fa";

const DropdownComponent = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const topics = ["Sistem Informasi", "Teknik Informatika", "Teknik Industri", "Psikologi", "Management"];
  const genders = ["Laki-laki", "Perempuan"];
  const ratings = [1, 2, 3, 4, 5];
  const prices = ["Rp. 30000", "Rp. 50000"];
  const times = Array.from({ length: 14 }, (_, index) => index + 8); // Generate an array from 8 to 21

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="d-flex gap-3">
      {/* Topic Dropdown */}
      <select onChange={(e) => handleTopicChange(e.target.value)}>
        <option value="">Topic</option>
        {topics.map((topic, index) => (
          <option  key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>

      {/* Gender Dropdown */}
      <select onChange={(e) => handleGenderChange(e.target.value)}>
        <option value="">Gender</option>
        {genders.map((gender, index) => (
          <option key={index} value={gender}>
            {gender}
          </option>
        ))}
      </select>

      {/* Rating Dropdown */}
      <select onChange={(e) => handleRatingChange(e.target.value)}>
        <option value="">Rating</option>
        {ratings.map((rating, index) => (
          <option key={index} value={rating}>
            {`${"⭐".repeat(rating)}`}
          </option>
        ))}
      </select>

      {/* Price Dropdown */}
      <select onChange={(e) => handlePriceChange(e.target.value)}>
        <option value="">Harga</option>
        {prices.map((price, index) => (
          <option  key={index} value={price}>
            {price}
          </option>
        ))}
      </select>

      {/* Time Dropdown */}
      <select onChange={(e) => handleTimeChange(e.target.value)}>
        <option value="">Jam</option>
        {times.map((time, index) => (
          <option key={index} value={time}>
            {`${time}:00 ${time < 12 ? "" : ""}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;


// code awal
// import Dropdown from 'react-bootstrap/Dropdown';
// import '../dropdown/dropdown.css';
// import PropTypes from 'prop-types';

// function FilterDropdown(props) {
//     const { judul, items } = props;

//     const handleCheckboxClick = (e) => {
//         e.stopPropagation();
//     };

//     const filteringTopik = items.split(',').map((item) => item.trim());

//     return (
//         <Dropdown className="filter-dropdown">
//             <Dropdown.Toggle variant="success" className='border'>
//                 {judul}
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//                 {filteringTopik.map((value, index) => (
//                 <Dropdown.Item key={index} href={`#/action-${index}`} onClick={handleCheckboxClick}>
//                     <input type="checkbox" name={value} id={value} onClick={handleCheckboxClick} /> {value}
//                 </Dropdown.Item>
//                 ))}
//             </Dropdown.Menu>
//         </Dropdown>
//     );
// }

// FilterDropdown.propTypes = {
//   judul: PropTypes.string.isRequired,
//   items: PropTypes.string.isRequired,
// //   icon: PropTypes.elementType,
// };

// export default FilterDropdown;
