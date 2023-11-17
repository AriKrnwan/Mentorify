import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Mentoring from './Pages/mentoring';
import Notification from './Pages/Notification';
import Profile from './Pages/profile';
import Qna from './Pages/Qna';
import Register from './Pages/Register';
import Save from './Pages/Save';
import Schedule from './Pages/Schedule';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
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