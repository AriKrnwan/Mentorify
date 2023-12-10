import { useState } from "react";
import Logo from "../../assets/image/Logo.svg";
import Google from "../../assets/image/google.png";
import "../register/Register.css";
import UncontrolledExample from "../../components/carousels/Carousels";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfPasswordVisibility = () => {
    setShowConfPassword((prevShowConfPassword) => !prevShowConfPassword);
  };

  // Fungsi untuk menangani perubahan nilai input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMismatch(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMismatch(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        setPasswordMismatch(true);
        return;
    }

    try {
        // Kirim data ke backend
        const response = await axios.post('http://localhost:4121/register', {
            name: name,
            password: password,
            email: email,
        })
        .then(response => {
          console.log(response.data);
          if (response.status === 200) {
              window.alert('Data berhasil masuk');
          } else if (response.status === 409) {
              window.alert('Email sudah terdaftar. Gunakan email lain.');
          } else {
              console.error('Registration failed:', response.data.message);
              window.alert('Registrasi gagal. Silakan coba lagi.');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          if (error.response) {
              console.log('Error response from server:', error.response.data);
              window.alert('Terjadi kesalahan pada server. Silakan coba lagi.');
          } else {
              console.log('Error connecting to the server:', error.message);
              window.alert('Terjadi kesalahan koneksi. Silakan coba lagi.');
          }
      });

        console.log(response.data);

        // Tambahkan logika untuk menangani respons dari server
        if (response.status === 200) {
            // Sukses, tampilkan alert data berhasil masuk
            window.alert('Data berhasil masuk');
        } else if (response.status === 409) {
            // Gagal karena email sudah terdaftar, tampilkan alert email sudah ada
            window.alert('Email sudah terdaftar. Gunakan email lain.');
        } else {
            // Gagal dengan status lain, tampilkan pesan error dari server
            console.error('Registration failed:', response.data.message);
            window.alert('Registrasi gagal. Silakan coba lagi.');
        }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
          console.log('Error response from server:', error.response.data);
          window.alert('Terjadi kesalahan pada server. Silakan coba lagi.');
      } else {
          console.log('Error connecting to the server:', error.message);
          window.alert('Terjadi kesalahan koneksi. Silakan coba lagi.');
      }
    }

    // Setel state menjadi kosong setelah pengiriman berhasil atau gagal
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordMismatch(false);
};

  // const createUser = () => {
  //   axios.post('http://localhost:4121/register', {
  //     Name: name,
  //     Email: email,
  //     Password: password,
  //   }).then(() => {
  //     console.log('User has been created')
  //   })
  // }





  // const [showPassword, setShowPassword] = useState(false);
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [passwordMismatch, setPasswordMismatch] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   setPasswordMismatch(false);
  // };

  // const handleConfirmPasswordChange = (e) => {
  //   setConfirmPassword(e.target.value);
  //   setPasswordMismatch(false);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    


  //   // Check if password and confirm password match
  //   // if (password !== confirmPassword) {
  //   //   setPasswordMismatch(true);
  //   //   return;
  //   // }

  //   // // Continue with your registration logic
  //   // // ...

  //   // // Reset password and confirm password fields
  //   // setPassword("");
  //   // setConfirmPassword("");
  // };

  

  return (
    <div>
      <section className="login d-flex">
        <div className="login-left w-50 h-100 d-flex flex-column gap-5 justify-content-center">
          <div className="logo-regist w-100 d-flex justify-content-center">
            <img className="logo2" src={Logo} alt="Logo" />
          </div>
          <div className="box-left d-flex justify-content-center align-items-center w-100 ">
            <UncontrolledExample />
          </div>
        </div>

        <div className="z-1 col-6 box-right rounded-start-5 d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-10 mx-auto">
              <div className="header">
                <h1>Daftar</h1>
              </div>

              <div className="login-form d-flex flex-column gap-3">
                <div>
                  <label className="form-label mb-0">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Masukan Nama Lengkap"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div>
                  <label className="form-label mb-0">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Masukan Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  <label className="form-label mb-0">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Masukan Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <div className="eye-icon" onClick={togglePasswordVisibility}>
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="form-label mb-0">Konfirmasi Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showConfPassword ? "text" : "password"}
                      className={`form-control ${
                        passwordMismatch ? "is-invalid" : ""
                      }`}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Konfirmasi Password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    <div className="eye-icon" onClick={toggleConfPasswordVisibility}>
                      {showConfPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                  {passwordMismatch && (
                    <div className="invalid-feedback">
                      Password tidak sesuai.
                    </div>
                  )}
                </div>
                <button className="btn-login" onClick={handleSubmit}>
                  Daftar
                </button>
                <p className="text-center mb-0">Atau</p>
                <button className="btn-google bg-image hover-zoom d-flex align-items-center justify-content-center gap-2">
                  <img className="google" src={Google} alt="Google" />
                  Masuk dengan Google
                </button>
                <span className="text-center d-block mt-2">
                  Sudah punya akun? <a href="/login">Masuk Sekarang</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
