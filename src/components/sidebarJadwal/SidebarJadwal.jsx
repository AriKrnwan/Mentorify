import './sidebarJadwal.css'
import { Col, Row } from "react-bootstrap";
// import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuHistory } from "react-icons/lu";
import PropTypes from 'prop-types';


const SidebarJadwal = ({ setMentoring, mentoring }) => {
  
    // const [mentoring, setMentoring] = useState(false);

    // const handleMentoringAktif = () => {
      
    //   return (setMentoring(false))
    // };
  
    // const handleMentoringSelesai = () => {
    //   return (setMentoring(true))
      
    // };

  return (
    <div className="position-fixed" style={{width: '306px'}}>
      <Row>
        <Col>
        <div className="navigasiJadwal w-100">
            <div className="jadwal"> Jadwal</div>
            <div
              className={mentoring === 'mentoring_aktif' ? "mAktif aktif" : "mAktif"}
              onClick={()=> setMentoring('mentoring_aktif')}
            >
              <span className=" d-flex gap-2 align-items-center">
                <FiUser size="24px" /> Mentoring Aktif
              </span>
            </div>
            <div
              className={mentoring === 'mentoring_selesai' ? "mSelesai aktif" : "mSelesai"}
              onClick={()=> setMentoring('mentoring_selesai')}
            >
              <span className=" d-flex gap-2 align-items-center">
                <LuHistory size={24} />
                Mentoring Selesai
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

SidebarJadwal.propTypes = {
  setMentoring: PropTypes.func.isRequired,
  mentoring: PropTypes.string.isRequired,
};

export default SidebarJadwal;

// const Buttons = (props) => {
//   const [active, setActive] = useState();

//   const handleClick = (event) => {
//     event.preventDefault();
//     setActive(event.target.id);
//   }

//   const buttons = props.buttons.map((btn, index) => {
//     return (
//       <button
//         key={btn.id}
//         className={active === btn.id ? "active" : undefined}
//         id={btn.id}
//         onClick={handleClick}
//       >
//         {btn.name}
//       </button>
//     );
//   });
//   return <div>{buttons}</div>;
// };

// export default Buttons;
// syntax 2


// const {useState,Fragment} = React;

// const App = () => {
//   const [active, setActive] = useState("");
 
//   const handleClick = (event) => {
//     setActive(event.target.id);

//   }

//     return (
//       <Fragment>
//       <button
//         key={1}
//         className={active === "1" ? "active" : undefined}
//         id={"1"}
//         onClick={handleClick}
//       >
//         Solution
//       </button>

//        <button
//        key={2}
//        className={active === "2" ? "active" : undefined}
//        id={"2"}
//        onClick={handleClick}
//      >
//       By
//      </button>

//       <button
//       key={3}
//       className={active === "3" ? "active" : undefined}
//       id={"3"}
//       onClick={handleClick}
//     >
//         Jamal
//     </button>
// </Fragment>

//     );
// }


//  ReactDOM.render(
//   <App/>,
//   document.getElementById("react")
// );
