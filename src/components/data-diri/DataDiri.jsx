import "./dataDiri.css";
import FotoProfile from "../../assets/image/profile picture.jpg";
import { useState } from "react";

const DataDiri = () => {
  const [selectedOption, setSelectedOption] = useState();

  const options = ["Laki-Laki", "Perempuan"];

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="data-diri-user d-flex flex-column gap-4">
      <div className="heading-profile-user d-flex flex-column aling-items-center justify-content-center">
        <span className="text-center">
          Selamat Datang, Rizky Akbar Maulana!
        </span>
        <span className="text-center">
          Lengkapi data dirimu dan mulai mentoring!
        </span>
      </div>
      <div className="d-flex gap-3">
        <div>
          <img src={FotoProfile} alt="" className="foto-user" />
        </div>
        <div className="w-100 d-flex flex-column gap-4">
          <div className="nama-lengkap d-flex flex-column gap-2">
            <span>Nama Lengkap</span>
            <input type="text" defaultValue="Rizky Akbar Maulana" />
          </div>
          <div className="d-flex gap-3">
            <div className="tanggal-lahir d-flex flex-column w-100 gap-2">
              <label id="">Tanggal Lahir</label>
              <input type="date" name="" id="" />
            </div>
            <div className="jenis-kelamin d-flex flex-column w-100 gap-2">
              <label>Jenis Kelamin</label>
              <select className="custom-dropdown" value={selectedOption} onChange={handleDropdownChange}>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex gap-3 ">
            <div className="nomor-hp d-flex flex-column w-100 gap-2">
              <label>No.HP</label>
              <input type="number" name="" id="" defaultValue="0987628736292" />
            </div>
            <div className="alamat d-flex flex-column w-100 gap-2">
              <label>Alamat</label>
              <input type="text" defaultValue="Surabaya" />
            </div>
          </div>

          <div className="email d-flex flex-column gap-2">
            <label>Email</label>
            <input type="email" name="" id="" defaultValue="rizky@gmail.com" />
          </div>

          <div className="universitas d-flex flex-column gap-2">
            <label>Universitas</label>
            <input type="text" defaultValue="Universitas Indonesia" />
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn-data-diri border-0">Simpan Perubahan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDiri;
