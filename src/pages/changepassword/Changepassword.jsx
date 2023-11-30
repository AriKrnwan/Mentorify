import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../changepassword/Changepassword.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Changepassword = () => {
  return (
    <div>
      <Navbar/> 
      <br></br><br></br><br></br><br></br>
      <Form className='form'>
        <h4>Ganti Kata Sandi</h4>
        <p>Anda akan keluar dari semua sesi kecuali sesi ini untuk melindungi akun Anda jika ada orang yang mencoba mendapatkan akses.
           <br></br><br></br>Kata sandi Anda minimal harus 6 karakter dan harus menyertakan kombinasi angka, huruf, dan karakter khusus (!$@%)</p>
        <div className='haha'>
          <Form.Group className="input mb-3" controlId="formBasicEmail">
            <Form.Control className="rounded-3 border-3" type="email" placeholder="Kata Sandi Lama" />
          </Form.Group>
          <Form.Group className="input mb-3" controlId="formBasicPassword">
            <Form.Control className='rounded-3 border-3' type="password" placeholder="Kata Sandi Baru" />
          </Form.Group>
          <Form.Group className="input mb-3" controlId="formBasicPassword">
            <Form.Control className='rounded-3 border-3' type="password" placeholder="Konfirmasi Kata Sandi Baru" />
          </Form.Group>
          <Button className="btn-ganti" variant="primary" type="submit">
            Ganti
          </Button>
          </div>
    </Form>
    </div>
      
  )
}

export default Changepassword;
