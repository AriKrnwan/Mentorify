// import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../changepassword/Changepassword.css'
import axios from 'axios';
import Footer from '../../components/footer/Footer';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// import { Row } from 'react-bootstrap';
const Changepassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:4121/Changepassword', {
        password,
        newPassword,
        confirmNewPassword,
      });
  
      console.log('Respon:', response.data);
      window.alert('Kata sandi telah di ubah');
      window.location.href='/'
      // Handle keberhasilan atau logika lain di sini
    } catch (error) {
      console.error('Error:', error.response.data);
      window.alert('Error: ${error.response.data.error}');
      // Handle kesalahan atau logika lain di sini
    }
  };



  return (
    <div>
      <Navbar/> 
      {/* <Row> */}
        <Form className='form mx-auto d-flex flex-column justify-content-center '>
          <h4>Ganti Kata Sandi</h4>
          {/* <p className='wrapper-desc-form'>Anda akan keluar dari semua sesi kecuali sesi ini untuk melindungi akun Anda jika ada orang yang mencoba mendapatkan akses.
            <br></br><br></br>Kata sandi Anda minimal harus 6 karakter dan harus menyertakan kombinasi angka, huruf, dan karakter khusus (!$@%)</p> */}
          <div className='haha'>
            <Form.Group className="input mb-3" controlId="formBasicPassword1">
              <Form.Control className="rounded-3 border-3" value={password}
              onChange={handlePasswordChange} type="password" placeholder="Kata Sandi Lama" />
            </Form.Group>
            <Form.Group className="input mb-3" controlId="formBasicPassword2">
              <Form.Control className='rounded-3 border-3'value={newPassword}
              onChange={handleNewPasswordChange} type="password" placeholder="Kata Sandi Baru" />
            </Form.Group>
            <Form.Group className="input mb-3" controlId="formBasicPassword3">
              <Form.Control className='rounded-3 border-3'  value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange} type="password" placeholder="Konfirmasi Kata Sandi Baru" />
            </Form.Group>
            <Button className="btn-ganti" onClick={handleSubmit}>
              Ganti
            </Button>
          </div>
        </Form>
      {/* </Row> */}
    <Footer/>
    </div>
  )
}

export default Changepassword; 