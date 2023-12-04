import profile from "../../assets/image/mentor2.png";
import { FiEdit2 } from "react-icons/fi";
import TextField from "../InputField/TextField";
import DropdownField from "../InputField/DropdownField";
import DateField from "../InputField/DateField";
import TextAreaField from "../InputField/TextAreaField";
import DynamicTextFields from "./FormLatarBelakang";
import FormPengalaman from "./FormPengalaman";
import FormSertif from "./FormSertif";

const FormMentor = () => {
    return (
        <>
            <div className="col-lg-2">
                <div className="position-relative mx-auto" style={{width:"150px", height:"150px"}}>
                    <div className="profile-mentor overflow-hidden rounded-circle d-flex justify-content-center align-items-center">
                        <img src={profile} alt="Profile-Mentor" className="w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="icon-edit rounded-circle d-flex justify-content-center align-items-center position-absolute bottom-0">
                        <FiEdit2 color="#00A9B8" />
                    </div>
                </div>
            </div>
            <div className="col-lg-10">
                <div className="row form-mentor">
                    <TextField label="Nama" placeholder="Masukkan Nama" lg="6" />
                    <DropdownField label="Jenis Kelamin" placeholder="Pilih..." lg="6" options={[
                        { value: 'l', label: 'Laki-Laki' },
                        { value: 'p', label: 'Perempuan' },
                    ]} />
                    <DateField label="Tanggal Lahir" placeholder="Masukkan Tanggal Lahir" lg="6" />
                    <TextField label="No. Hp" placeholder="Masukkan No. Hp" lg="6" />
                    <TextField label="Email" placeholder="Masukkan Email" lg="6" />
                    <TextField label="Domisili" placeholder="Masukkan Domisili" lg="6" />
                    <TextField label="Alamat Domisili" placeholder="Masukkan Alamat Domisili" lg="6" />
                    <TextField label="Institusi" placeholder="Masukkan Institusi" lg="6" />
                    <TextAreaField label="Tentang" placeholder="Isi tentang diri kamu" lg="12"  />
                    <h6 className="h6 mt-5">Latar Belakang</h6>
                    <DynamicTextFields label="Keahlian" placeholder="Masukkan Keahlian" />
                    <DynamicTextFields label="Disciplines" placeholder="Masukkan Disciplines" />
                    <h6 className="h6 mt-5">Pengalaman</h6>
                    <FormPengalaman />
                    <h6 className="h6 mt-5">Pendidikan</h6>
                    <TextField label="Universitas" placeholder="Masukkan Universitas" lg="12" />
                    <DateField label="Dari Tanggal" placeholder="Masukkan Dari Tanggal" lg="6" />
                    <DateField label="Sampai Tanggal" placeholder="Masukkan Sampai Tanggal" lg="6" />
                    <h6 className="h6 mt-5">Sertifikat & Lisensi</h6>
                    <FormSertif />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
};

export default FormMentor