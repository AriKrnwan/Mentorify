
import { Col, Row } from 'react-bootstrap'
import OffcanvasExample from '../../components/navbar/Navbar'
import SidebarOrderSchedule from '../../components/sidebarOrderSchedule/SidebarOrderSchedule'
import { useState } from 'react';
import Order from '../../components/order/Order';
import ScheduleMentoring from '../../components/scheduleMentoring/ScheduleMentoring';

const OrderSchedule = () => {
  const [pesananJadwal, setPesananJadwal] = useState("pesanan");
  return (
    <div>
      <OffcanvasExample />
      <div className="container-xxl  mx-auto">
        <Row>
          <Col lg="3">
            <SidebarOrderSchedule setPesananJadwal={setPesananJadwal} pesananJadwal={pesananJadwal} />
          </Col>
          <Col lg="9">
            {pesananJadwal === "pesanan" && <Order />}
            {pesananJadwal === "jadwal" && <ScheduleMentoring />}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default OrderSchedule