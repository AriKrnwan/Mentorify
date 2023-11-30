import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Mentoring from './pages/mentoring/Mentoring';
import Notification from './pages/notification/Notification';
import Profile from './pages/profile/Profile';
import Qna from './pages/qna/Qna';
import Register from './pages/register/Register';
import Save from './pages/save/Save';
import Schedule from './pages/schedule/Schedule';
import Changepassword from './pages/changepassword/Changepassword';
import DetailPostingan from './pages/qna/DetailPostingan'
import Error from './pages/error/Error';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { DetailMentor } from './components/detailMentor/DetailMentor';


function App() {
  useEffect (() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mentoring" element={<Mentoring/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/qna" element={<Qna/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/save" element={<Save/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/detail-mentor" element={<DetailMentor/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/detail-postingan" element={<DetailPostingan />} />
        <Route path="/changepassword" element={<Changepassword/>}/>
      </Routes>
    </div>
  );
}

export default App