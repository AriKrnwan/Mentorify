import { Col, Row } from "react-bootstrap";
import NavbarMentor from "../../components/navbar/NavbarMentor";
import SidebarOrderSchedule from "../../components/sidebarOrderSchedule/SidebarOrderSchedule";
import { useState } from "react";
import Order from "../../components/order/Order";
import ScheduleMentoring from "../../components/scheduleMentoring/ScheduleMentoring";
import SidebarAturJadwal from "../../components/sidebarOrderSchedule/SidebarAturJadwal";

const OrderSchedule = () => {
  const [pesananJadwal, setPesananJadwal] = useState("pesanan");
  return (
    <div>
      <NavbarMentor />
      <div className="container-xxl  mx-auto">
        <Row>
          <Col lg="3">
            <SidebarOrderSchedule
              setPesananJadwal={setPesananJadwal}
              pesananJadwal={pesananJadwal}
            />

            {pesananJadwal === "pesanan" && <SidebarAturJadwal />}
          </Col>
          <Col lg="9">
            {pesananJadwal === "pesanan" && <Order />}
            {pesananJadwal === "jadwal" && <ScheduleMentoring />}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderSchedule;
