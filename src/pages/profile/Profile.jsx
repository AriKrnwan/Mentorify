import './profile.css'
import { Col, Row } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import DataDiri from "../../components/data-diri/DataDiri";

const Profile = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="container-xxl  mx-auto">
        <Row>
          <Col lg="3">
            <SidebarProfile />
          </Col>
          <Col lg="9">
            <DataDiri />
          </Col>
        </Row>
      </div>
      <h1>profile Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magni odio facere quibusdam doloribus? Aspernatur illum cupiditate quis fuga, necessitatibus temporibus ex autem assumenda? Reiciendis veniam illum repellendus sint culpa.</h1>
    </div>
  );
};

export default Profile;
