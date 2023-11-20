import "./dataDiri.css";
import FotoProfile from "../../assets/image/profile picture.jpg";

const DataDiri = () => {
  return (
    <div className="data-diri-user d-flex flex-column gap-2">
      <div className="heading-profile-user d-flex flex-column aling-items-center justify-content-center bg-warning">
        <span className="text-center">
          Selamat Datang, Rizky Akbar Maulana!
        </span>
        <span className="text-center">
          Lengkapi data dirimu dan mulai mentoring!
        </span>
      </div>
      <div className="d-flex gap-3">
        <div>
        <img src={FotoProfile} alt="" className="foto-user"/>
        </div>
        <div className="w-100">
          <div className="nama-lengkap d-flex flex-column">
            <span>Nama Lengkap</span>
            <input type="text" />
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column">
              <label>Tanggal Lahir</label>
              <input type="date" name="" id="" />
            </div>
            <div className="d-flex flex-column">
              <label>Jenis Kelamin</label>
              <select name="" id="">
                <option value="">Laki - Laki</option>
                <option value="">Perempuan</option>
              </select>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column">
              <label>No.HP</label>
              <input type="number" name="" id="" />
            </div>
            <div className="d-flex flex-column">
              <label>Alamat</label>
              <input type="text" />
            </div>
          </div>

          <div className="d-flex flex-column">
            <span>Email</span>
            <input type="email" name="" id="" />
          </div>

          <div className="d-flex flex-column">
            <span>Universitas</span>
            <input type="text" />
          </div>

          <div>
            <button>Simpan Perubahan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDiri;
