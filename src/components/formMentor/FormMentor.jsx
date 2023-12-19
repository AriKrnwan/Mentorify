import profile from "../../assets/image/mentor 6.png";
import { FiEdit2 } from "react-icons/fi";
import TextField from "../InputField/TextField";
import DropdownField from "../InputField/DropdownField";
import DateField from "../InputField/DateField";
import TextAreaField from "../InputField/TextAreaField";
import DynamicTextFields from "./FormLatarBelakang";
import FormPengalaman from "./FormPengalaman";
import FormSertif from "./FormSertif";
import EmailField from "../InputField/EmailField";

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
                    <TextField label="Nama" placeholder="Putri Alifia Rizky" lg="6" />
                    <DropdownField label="Jenis Kelamin" placeholder="Pilih..." lg="6" options={[
                        { value: 'p', label: 'Perempuan' },
                        { value: 'l', label: 'Laki-Laki' }
                    ]} />
                    <DateField label="Tanggal Lahir" placeholder="Masukkan Tanggal Lahir" lg="6" />
                    <TextField label="No. Hp" placeholder="081997214952" lg="6" />
                    <EmailField label="Email" placeholder="alifiarizky08@gmail.com" lg="6" />
                    <TextField label="Domisili" placeholder="Palembang" lg="6" />
                    <TextField label="Alamat Domisili" placeholder="Jalan Letnan Hadin" lg="6" />
                    <TextField label="Institusi" placeholder="Politeknik Negeri Sriwijaya" lg="6" />
                    <TextAreaField label="Tentang" placeholder="Saya seorang desainer UI/UX dengan pengalaman lebih dari 2 tahun di industri desain. Sejak awal karir saya, saya telah memimpin dan berkontribusi pada berbagai proyek desain yang mencakup berbagai industri, mulai dari teknologi hingga e-commerce." lg="12"  />
                    <h6 className="h6 mt-5">Latar Belakang</h6>
                    <DynamicTextFields label="Keahlian" placeholder="Java Script" />
                    <DynamicTextFields label="Disciplines" placeholder="UI/UX" />
                    <h6 className="h6 mt-5">Pengalaman</h6>
                    <FormPengalaman />
                    <h6 className="h6 mt-5">Pendidikan</h6>
                    <TextField label="Universitas" placeholder="Politeknik Negeri Sriwijaya" lg="6" />
                    <TextField label="Domisili" placeholder="Palembang" lg="6" />
                    <DateField label="Dari Tanggal" placeholder="Masukkan Dari Tanggal" lg="6" />
                    <DateField label="Sampai Tanggal" placeholder="Masukkan Sampai Tanggal" lg="6" />
                    <h6 className="h6 mt-5">Sertifikat & Lisensi</h6>
                    <FormSertif />
                </div>
                <br />
                <br />
                <br />
            </div>
            
        </>
    )
};

export default FormMentor