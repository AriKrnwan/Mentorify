import { useState } from "react";
import Logo from "../../assets/image/Logo.svg";
import UncontrolledExample from "../../components/carousels/Carousels";
import Google from "../../assets/image/google.png";
import "../login/Login.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div>
                  <label className="form-label">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="Masukan Password"
                    />
                    <div
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  </div>
                </div>
                <a href="#" className="text-end d-block">
                  Lupa Password?
                </a>
                <button className="btn-login">
                  <a href="/">Masuk</a>
                </button>
                <p className="text-center mb-0">Atau</p>
                <button className="btn-google bg-image hover-zoom d-flex align-items-center justify-content-center gap-2">
                  <img className="google" src={Google} alt="Google" />
                  Masuk dengan Google
                </button>
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
