import { useState } from "react";
import Logo from "../../assets/image/Logo.svg";
import Google from "../../assets/image/google.png";
import "../register/Register.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import UncontrolledExample from "../../components/carousels/Carousels";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMismatch(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMismatch(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    // Continue with your registration logic
    // ...

    // Reset password and confirm password fields
    setPassword("");
    setConfirmPassword("");
  };

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
                    placeholder="Masukan Nama Lengkap"
                  />
                </div>
                <div>
                  <label className="form-label mb-0">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div>
                  <label className="form-label mb-0">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="Masukan Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <div
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="form-label mb-0">Konfirmasi Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      passwordMismatch ? "is-invalid" : ""
                    }`}
                    id="confirmPassword"
                    placeholder="Konfirmasi Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
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
