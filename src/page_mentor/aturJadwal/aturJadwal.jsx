import { useState } from 'react';
import { Button } from 'react-bootstrap';
import NumberField from '../../components/InputField/NumberField';
import NavbarMentor from '../../components/navbar/NavbarMentor';
import { FiTrash, FiEdit2 } from 'react-icons/fi';
import Table from 'react-bootstrap/Table';
import '../aturJadwal/aturJadwal.css';
import { useNavigate } from 'react-router-dom';

const AturJadwal = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (rowIndex) => {
    setSelectedRow(selectedRow === rowIndex ? null : rowIndex);
  };

  const navigate = useNavigate();
    const toAddJadwal = () => {
      navigate('/tambah-jadwal');
    };

  return (
    <>
      <NavbarMentor />
      <div className="container-xxl mx-auto wrapper-profile-mentor">
        <div className="row">
          <div className="col-lg-4 form-harga ps-0">
            <div className="border p-3">
              <h6 className="h6">Tentukan Harga</h6>
              <NumberField label="Harga" placeholder="Masukan Harga" />
              <Button variant="primary">Update Harga</Button>
            </div>
          </div>
          <div className="col-lg-8 pe-0">
            <div className="border p-3">
              <div className="action-jadwal d-flex justify-content-end gap-2">
                <Button className="p-0 icon-delete border-0" disabled={!selectedRow}>
                  <FiTrash />
                </Button>
                <Button className="p-0 icon-update border-0" disabled={!selectedRow}>
                  <FiEdit2 />
                </Button>
                <Button className="py-0 tambah-jadwal border-0" onClick={toAddJadwal}>
                  Tambah Jadwal
                </Button>
              </div>
              <Table bordered hover size="sm" className="text-center table-jadwal mt-3">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Tanggal</th>
                    <th>Jadwal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={() => handleRowClick(1)} className={selectedRow === 1 ? 'selected-row' : ''}>
                    <td>1</td>
                    <td>04/12/2023</td>
                    <td>09:00, 10:00, 11:00</td>
                  </tr>
                  <tr onClick={() => handleRowClick(1)} className={selectedRow === 1 ? 'selected-row' : ''}>
                    <td>1</td>
                    <td>04/12/2023</td>
                    <td>09:00, 10:00, 11:00</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AturJadwal;