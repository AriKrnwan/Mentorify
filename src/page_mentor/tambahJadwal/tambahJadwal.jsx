import DynamicNumberFields from "../../components/InputField/dynamicNumberField";
import DateField from "../../components/InputField/TextField";
import NavbarMentor from "../../components/navbar/NavbarMentor";
import "../tambahJadwal/tambahJadwal.css"
import { Button } from "react-bootstrap";

const TambahJadwal = () => {
    return (
        <>
            <NavbarMentor />
            <div className="container-xxl mx-auto">
                <div className="row">
                    <div className="col-lg-10 border mx-auto rounded p-4">
                        <div className="row add-jadwal">
                            <h6 className="h6">Tambah Jadwal</h6>
                            <DateField label="Tanggal" placeholder="Masukkan Tanggal" lg="6" />
                            <DynamicNumberFields label="Jam" placeholder="Masukkan Keahlian" />
                            <div className="d-flex justify-content-end mt-5">
                                <Button className="border-0 w-25">
                                    Simpan
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TambahJadwal