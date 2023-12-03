import { useState } from 'react';
import TextField from "../InputField/TextField";
import DateField from "../InputField/DateField";
import Button from 'react-bootstrap/Button';

const FormPengalaman = () => {
    const [pengalamanForms, setPengalamanForms] = useState([1]);

    const handleTambahForm = () => {
        setPengalamanForms([...pengalamanForms, pengalamanForms.length + 1]);
    };

    return (
        <>
            {pengalamanForms.map((formIndex) => (
                <div key={formIndex} className='row pengalaman'>
                    <p className="mt-2 mb-1">Pengalaman {formIndex}</p>
                    <TextField label="Posisi" placeholder="Masukkan Posisi" lg="6" />
                    <TextField label="Status" placeholder="Masukkan Status" lg="6" />
                    <TextField label="Domisili" placeholder="Masukkan Domisili" lg="12" />
                    <DateField label="Dari Tanggal" placeholder="Masukkan Tanggal" lg="6" />
                    <DateField label="Sampai Tanggal" placeholder="Masukkan Tanggal" lg="6" />
                </div>
            ))}
            <div className="col-lg-12 form-pengalaman">
                <Button variant="primary" onClick={handleTambahForm}>
                    Tambah Pengalaman
                </Button>
            </div>
        </>
    );
};

export default FormPengalaman;
