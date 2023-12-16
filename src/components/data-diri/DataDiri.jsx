import "./dataDiri.css";
import FotoProfile from "../../assets/image/profile picture.jpg";
import DropdownField from "../InputField/DropdownField";
import TextField from "../InputField/TextField";
import DateField from "../InputField/DateField";
import NumberField from "../InputField/NumberField";
import EmailField from "../InputField/EmailField";
import { useEffect, useState } from "react";

const DataDiri = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      fetch("http://localhost:4121/profile", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            setUserData(data.user);
          } else {
            console.error("User not authenticated");
          }
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, []);

  
  return (
    <div className="data-diri-user d-flex flex-column gap-4">
      <div className="heading-profile-user d-flex flex-column aling-items-center justify-content-center">
        <h3 className="text-center">Selamat Datang, {userData?.full_name}</h3>
        <p className="text-center">Lengkapi data dirimu dan mulai mentoring!</p>
      </div>
      <div className="d-flex gap-3">
        <div>
          <img src={FotoProfile} alt="" className="foto-user" />
        </div>

        <div className=" w-100 row form-user">
          <TextField 
            label="Nama" 
            value={userData?.full_name} 
            placeholder="Masukkan Nama" lg="12" 
            onChange={(newValue) => setUserData({ ...userData, full_name: newValue })}
          />
          <DateField
            label="Tanggal Lahir"
            placeholder="Masukkan tanggal"
            lg="6"
            value={userData?.birth_date}
            onChange={(newValue) => setUserData({ ...userData, birth_date: newValue })}
          />
          <DropdownField
            label="Jenis Kelamin"
            placeholder="pilih..."
            lg="6"
            options={[
              { value: "l", label: "Laki-Laki" },
              { value: "p", label: "Perempuan" },
            ]}
            value={userData?.gender}
            onChange={(selectedValue) => setUserData({ ...userData, gender: selectedValue })}
          />
          <NumberField 
            label="No.HP" 
            value={userData?.phone} 
            placeholder="Masukkan Nomor HP" 
            lg="6"  
            onChange={(newValue) => setUserData({ ...userData, phone: newValue })}
          />
          <TextField 
            label="Alamat" 
            value={userData?.city} 
            placeholder="Masukkan Alamat" 
            lg="6"
            onChange={(newValue) => setUserData({ ...userData, city: newValue })}
          />
          <EmailField
            label="Email" 
            value={userData?.email} 
            placeholder="Masukkan Email" 
            lg="12" 
            onChange={(newValue) => setUserData({ ...userData, email: newValue })}
          />
          <TextField 
            label="Universitas" 
            value={userData?.institution} 
            placeholder="Masukkan Universitas" 
            lg="12"
            onChange={(newValue) => setUserData({ ...userData, institution: newValue })} 
          />
          <div className="d-flex justify-content-end">
            <button className="btn-data-diri border-0">Simpan Perubahan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDiri;
