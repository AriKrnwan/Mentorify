import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const MyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Bulan");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="d-flex flex-column gap-4">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedOption}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Januari">Januari</Dropdown.Item>
          <Dropdown.Item eventKey="Fabruari">Fabruari</Dropdown.Item>
          <Dropdown.Item eventKey="Maret">Maret</Dropdown.Item>
          <Dropdown.Item eventKey="April">April</Dropdown.Item>
          <Dropdown.Item eventKey="Mei">Mei</Dropdown.Item>
          <Dropdown.Item eventKey="Juni">Juni</Dropdown.Item>
          <Dropdown.Item eventKey="Juli">Juli</Dropdown.Item>
          <Dropdown.Item eventKey="Agustus">Agustus</Dropdown.Item>
          <Dropdown.Item eventKey="September">September</Dropdown.Item>
          <Dropdown.Item eventKey="Oktober">Oktober</Dropdown.Item>
          <Dropdown.Item eventKey="November">November</Dropdown.Item>
          <Dropdown.Item eventKey="Desember">Desember</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <h2 className="filterListBulan">Jadwal {selectedOption} 2023</h2>
    </div>
  );
};

export default MyDropdown;
