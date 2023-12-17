import { useState } from "react";
import Logo from "../../assets/image/Logo.svg";
import UncontrolledExample from "../../components/carousels/Carousels";
import "./Login.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

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
      const response = await axios.post("http://localhost:4121/login", {
        email: email,
        password: password,
      }, {
        withCredentials: true,  // Mengizinkan pengiriman cookie
      });

      // Tambahkan logika untuk menangani respons dari server
      if (response.status === 200) {
        // Sukses, lakukan tindakan setelah login berhasil
        console.log("Login berhasil");
        navigate("/");
        localStorage.setItem('userData', JSON.stringify(response.data.user));
      } else if (response.status === 401) {
        // Gagal karena kredensial tidak valid
        console.log("Login gagal: Invalid credentials");
      } else {
        // Gagal dengan status lain, tampilkan pesan error dari server
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.log("Error response from server:", error.response.data);
      } else {
        console.log("Error connecting to the server:", error.message);
      }
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="login row">
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
                <h1>Masuk</h1>
              </div>

              <div className="login-form d-flex flex-column gap-3">
                {/* Input Email */}
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="Masukan Email"
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
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className={`form-control ${
                        passwordError ? "is-invalid" : ""
                      }`}
                      id="password"
                      placeholder="Masukan Password"
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
                      {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                  
                </div>

                {/* Tautan Lupa Password */}
                <a href="#" className="text-end d-block">
                  Lupa Password?
                </a>

                {/* Tombol Masuk */}
                <button className="btn-login" onClick={handleSubmit}>
                  Masuk
                </button>

                {/* Tautan Daftar Sekarang */}
                <span className="text-center d-block mt-2">
                  Belum punya akun? <a href="/register">Daftar Sekarang</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
