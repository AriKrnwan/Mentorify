import { useState } from "react";
import Logo from "../../assets/image/Logo.svg";
import "../register/Register.css";
import UncontrolledExample from "../../components/carousels/Carousels";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Perubahan terbaru

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const navigate = useNavigate();

  const toggleConfPasswordVisibility = () => {
    setShowConfPassword((prevShowConfPassword) => !prevShowConfPassword);
  };

  const validateForm = () => {
    let isValid = true;

    // Validasi Nama
    if (!name.trim()) {
      setNameError("Nama Lengkap harus diisi");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validasi Email
    if (!email.trim()) {
      setEmailError("Email harus diisi");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validasi Password
    if (!password.trim()) {
      setPasswordError("Password harus diisi");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Validasi Konfirmasi Password
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Konfirmasi Password harus diisi");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Password tidak sesuai");
      setPasswordMismatch(true);
      isValid = false;
    } else {
      setConfirmPasswordError("");
      setPasswordMismatch(false);
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Jika formulir tidak valid, jangan melanjutkan pengiriman
      return;
    }

    try {
      // Kirim data ke backend
      const response = await axios.post("http://localhost:4000/register", {
        full_name: name,
        password: password,
        email: email,
      });

      // Tambahkan logika untuk menangani respons dari server
      if (response.status === 200) {
        // Sukses, tampilkan alert data berhasil masuk
        window.alert("Data berhasil masuk");
        navigate("/login");
      } else if (response.status === 409) {
        // Gagal karena email sudah terdaftar, tampilkan alert email sudah ada
        window.alert("Email sudah terdaftar. Gunakan email lain.");
      } else {
        // Gagal dengan status lain, tampilkan pesan error dari server
        console.error("Registration failed:", response.data.message);
        window.alert("Registrasi gagal. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.log("Error response from server:", error.response.data);
        window.alert("Terjadi kesalahan pada server. Silakan coba lagi.");
      } else {
        console.log("Error connecting to the server:", error.message);
        window.alert("Terjadi kesalahan koneksi. Silakan coba lagi.");
      }
    }

    // Setel state menjadi kosong setelah pengiriman berhasil atau gagal
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordMismatch(false);
  };

   if (passwordMismatch) {
      window.alert("Password dan Konfirmasi Password tidak cocok.");
    }
  

  return (
    <div>
      <section className="login d-flex">
        {/* Bagian Kiri (Logo dan Carousel) */}
        <div className="login-left w-50 h-100 d-flex flex-column gap-5 justify-content-center">
          <div className="logo-regist w-100 d-flex justify-content-center">
            <img className="logo2" src={Logo} alt="Logo" />
          </div>
          <div className="box-left d-flex justify-content-center align-items-center w-100 ">
            <UncontrolledExample />
          </div>
        </div>

        {/* Bagian Kanan (Form Pendaftaran) */}
        <div className="z-1 col-6 box-right rounded-start-5 d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-10 mx-auto">
              <div className="header">
                <h1>Daftar</h1>
              </div>

              <div className="login-form d-flex flex-column gap-3">
                {/* Input Nama */}
                <div>
                  <label className="form-label mb-0">Nama Lengkap</label>
                  <input
                    type="text"
                    className={`form-control ${nameError ? "is-invalid" : ""}`}
                    id="name"
                    name="name"
                    placeholder="Masukkan Nama Lengkap"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError("");
                    }}
                  />
                  {nameError && (
                    <div className="invalid-feedback">{nameError}</div>
                  )}
                </div>

                {/* Input Email */}
                <div>
                  <label className="form-label mb-0">Email</label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    id="email"
                    name="email"
                    placeholder="Masukkan Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>

                {/* Input Password */}
                <div>
                  <label className="form-label mb-0">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${passwordError ? "is-invalid" : ""}`}
                      id="password"
                      name="password"
                      placeholder="Masukkan Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError("");
                      }}
                    />
                    {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                    <div
                      className={`eye-icon ${passwordError ? "icon-error" : ""}`}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                  
                </div>

                {/* Input Konfirmasi Password */}
                <div>
                  <label className="form-label mb-0">Konfirmasi Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showConfPassword ? "text" : "password"}
                      className={`form-control ${
                        confirmPasswordError ? "is-invalid" : ""
                      }`}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Konfirmasi Password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setConfirmPasswordError("");
                      }}
                    />
                    {confirmPasswordError && (
                    <div className="invalid-feedback">{confirmPasswordError}</div>
                  )}
                    <div
                      className={`eye-icon ${passwordError ? "icon-error" : ""}`}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                  
                </div>

                {/* Tombol Daftar */}
                <div>
                  <button className="btn-login" onClick={handleSubmit}>
                    Daftar
                  </button>
                </div>  

                {/* Tautan Masuk Sekarang */}
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
