import "./dataDiri.css";
import FotoProfile from "../../assets/image/profile picture.jpg";
import DropdownField from "../InputField/DropdownField";
import TextField from "../InputField/TextField";
import DateField from "../InputField/DateField";
import NumberField from "../InputField/NumberField";
import EmailField from "../InputField/EmailField";

const DataDiri = () => {
  return (
    <div className="data-diri-user d-flex flex-column gap-4">
      <div className="heading-profile-user d-flex flex-column aling-items-center justify-content-center">
        <h3 className="text-center">Selamat Datang, Rizky Akbar Maulana!</h3>
        <p className="text-center">Lengkapi data dirimu dan mulai mentoring!</p>
      </div>
      <div className="d-flex gap-3">
        <div>
          <img src={FotoProfile} alt="" className="foto-user" />
        </div>

        <div className=" w-100 row form-user">
          <TextField label="Nama" placeholder="Masukkan Nama" lg="12" />
          <DateField
            label="Tanggal Lahir"
            placeholder="Masukkan Tanggal Lahir"
            lg="6"
          />
          <DropdownField
            label="Jenis Kelamin"
            placeholder="Pilih..."
            lg="6"
            options={[
              { value: "l", label: "Laki-Laki" },
              { value: "p", label: "Perempuan" },
            ]}
          />
          <NumberField label="No.HP" placeholder="085678987689" lg="6" />
          <TextField label="Alamat" placeholder="Masukkan Alamat" lg="6" />
          <EmailField label="Email" placeholder="Masukkan Email" lg="12" />
          <TextField label="Universitas" placeholder="Masukkan Universitas" lg="12" />
          <div className="d-flex justify-content-end">
            <button className="btn-data-diri border-0">Simpan Perubahan</button>
          </div>
          
        </div>
        

        {/* <div className="w-100 d-flex flex-column gap-4">
          <div className="nama-lengkap d-flex flex-column gap-2">
          <TextField label="Nama" placeholder="Masukkan Nama"/>
          </div>
          <div className="d-flex gap-3">
            <div className="tanggal-lahir d-flex flex-column w-100 gap-2">
              <label id="">Tanggal Lahir</label>
              <input type="date" name="" id="" />
            </div>
            <div className="jenis-kelamin d-flex flex-column w-100 gap-2">
            <DropdownField label="Jenis Kelamin" placeholder="Pilih..." options={[
                        { value: 'l', label: 'Laki-Laki' },
                        { value: 'p', label: 'Perempuan' },
                    ]} />
            </div>
          </div>
          <div className="d-flex gap-3 ">
            <div className="nomor-hp d-flex flex-column w-100 gap-2">
              <label>No.HP</label>
              <input type="number" name="" id="" defaultValue="" placeholder="0857989787654"/>
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
        </div> */}
      </div>
    </div>
  );
};

export default DataDiri;
