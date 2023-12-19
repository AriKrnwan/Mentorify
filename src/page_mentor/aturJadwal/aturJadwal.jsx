import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import NumberField from '../../components/InputField/NumberField';
import NavbarMentor from '../../components/navbar/NavbarMentor';
import { FiTrash, FiEdit2 } from 'react-icons/fi';
import Table from 'react-bootstrap/Table';
import '../aturJadwal/aturJadwal.css';
import { useNavigate } from 'react-router-dom';
import DynamicTextFields from '../../components/formMentor/FormLatarBelakang';
import DropdownField from '../../components/InputField/DropdownField';
import apiConfig from '../../config/config.js';

const AturJadwal = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const navigate = useNavigate();

  // Fungsi untuk mengambil data jadwal dari backend
  const fetchScheduleData = async () => {
    try {
      const response = await fetch(`${apiConfig.baseURL}/schedule`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      
  
      if (!response.ok) {
        console.error('Failed to fetch schedule data. Status:', response.status);
        return;
      }
  
      const data = await response.json();
      console.log(data)
      setScheduleData(data.schedule);
    } catch (error) {
      console.error('Error fetching schedule data:', error);
    }
  };

  useEffect(() => {
    fetchScheduleData();
  }, []);

  const handleRowClick = (rowIndex) => {
    setSelectedRow(selectedRow === rowIndex ? null : rowIndex);
  };

  const toAddJadwal = () => {
    navigate('/orderschedule/tambah-jadwal');
  };

  const dateFormat = (date) => {
      let datenew = new Date(date)
      return datenew.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
  }

  return (
    <>
      <NavbarMentor />
      <div className="container-xxl mx-auto wrapper-profile-mentor">
        <div className="row ">
          <div className="col-lg-4 form-harga ps-0 d-flex flex-column gap-4">
            <div className="border p-3">
              <h6 className="h6">Tentukan Harga</h6>
              <NumberField label="Harga" placeholder="Masukan Harga" lg='12' />
              <Button variant="primary">Update Harga</Button>
            </div>
            <div>
            <DropdownField label="Pilih Zona Waktu" placeholder="Pilih..." lg="12" options={[
                        { value: 'WIB', label: 'WIB' },
                        { value: 'WIT', label: 'WIT' },
                        { value: 'WITA', label: 'WITA' },
                    ]} />
            </div>
            <div>
            <DynamicTextFields label="Tentukan Topik" placeholder="Masukkan Topik" />
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
                  {scheduleData.map((schedule, index) => (
                    <tr key={index} onClick={() => handleRowClick(index + 1)} className={selectedRow === index + 1 ? 'selected-row' : ''}>
                      <td>{index + 1}</td>
                      <td>{dateFormat(schedule.date)}</td>
                      <td>{schedule.time}</td>
                    </tr>
                  ))}
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
