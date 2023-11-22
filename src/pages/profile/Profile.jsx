import './profile.css'
import { Col, Row } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import DataDiri from "../../components/data-diri/DataDiri";
import { useState } from 'react';
import RiwayatForum from '../../components/riwayatForum/RiwayatForum';
import RiwayatTransaksi from '../../components/riwayatTrasaksi/RiwayatTransaksi';

const Profile = () => {

const [active, setActive] = useState('data_diri')

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="container-xxl  mx-auto">
        <Row>
          <Col lg="3">
            <SidebarProfile setActive={setActive}/>
          </Col>
          <Col lg="9">
            {active === 'data_diri' && <DataDiri />}
            {active === 'riwayat_forum' && <RiwayatForum/>}
            {active === 'riwayat_transaksi' && <RiwayatTransaksi/>}
            
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
