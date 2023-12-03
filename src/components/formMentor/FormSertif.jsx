import { useState } from 'react';
import TextField from "../InputField/TextField";
import DateField from "../InputField/DateField";
import Button from 'react-bootstrap/Button';

const FormSertif = () => {
    const [sertifForms, setSertifForms] = useState([1]);

    const handleTambahForm = () => {
        setSertifForms([...sertifForms, sertifForms.length + 1]);
    };

    return (
        <>
            {sertifForms.map((formIndex) => (
                <div key={formIndex} className='row pengalaman'>
                    <p className="mt-2 mb-1">Lisensi & Sertifikat {formIndex}</p>
                    <TextField label="Nama" placeholder="Masukkan Nama Sertifikat" lg="6" />
                    <TextField label="Instansi" placeholder="Masukkan Instansi" lg="6" />
                    <DateField label="Tanggal" placeholder="Masukkan Tanggal" lg="6" />
                </div>
            ))}
            <div className="col-lg-12 form-pengalaman">
                <Button variant="primary" onClick={handleTambahForm}>
                    Tambah Form
                </Button>
            </div>
        </>
    );
};

export default FormSertif;
