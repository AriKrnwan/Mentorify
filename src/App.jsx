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
import Error from './pages/error/Error';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mentoring" element={<Mentoring/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/qna" element={<Qna/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/save" element={<Save/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App