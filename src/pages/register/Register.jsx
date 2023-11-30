import Logo from "../../assets/image/Logo.svg";
// import Amico from "../login/amico.svg";
import Google from "../login/google.png";
import "../register/Register.css";
import { FiEye } from "react-icons/fi";
import UncontrolledExample from "../../components/carousels/Carousels";

const Register = () => {
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

        <div className=" z-1 col-6 box-right rounded-start-5 d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-10 mx-auto">
              <div className="header">
                <h1>Daftar</h1>
              </div>

              <div className="login-form">
                <label className="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Masukan Nama Lengkap"
                />
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Masukan Email"
                />
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Masukan Password"
                  icon={FiEye}
                />{" "}
                <a icon={FiEye}></a>
                <a href="#" className="text-end d-block">
                  Lupa Password?
                </a>
                <button className="btn-login">
                  <a href="/">Masuk</a>
                </button>
                <p className="text-center my-4">Atau</p>
                <button className="btn-google bg-image hover-zoom">
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

export default Register;
