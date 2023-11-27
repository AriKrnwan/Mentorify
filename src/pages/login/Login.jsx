// import Logo from '../../assets/image/Logo.svg';
import UncontrolledExample from '../../components/carousels/Carousels';
// import Amico from '../login/amico.svg';
import Google from '../login/google.png';
import '../login/Login.css';
import { FiEye } from "react-icons/fi";

const Login = () => {
    return ( 
        <div className='overflow-hidden' >
            <section className="login row">
                <div className="box-left col-6 d-flex justify-content-center align-items-center">
                    <UncontrolledExample />
                </div>
                
                <div className="col-6 box-right rounded-start-5 d-flex align-items-center justify-content-center">
                    <div className="row w-100">
                        <div className="col-10 mx-auto">
                                <div className="header">
                                    <h1>Masuk</h1>
                                </div>

                            <div className="login-form">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Masukan Email"/>

                            <label className="form-label">Password</label>
                            <input
                                type="password" 
                                className="form-control"
                                id="password" 
                                placeholder="Masukan Password" icon={FiEye}
                                
                            /> <a icon={FiEye}></a>
                            <a href="#" className="text-end d-block">Lupa Password?</a>

                            <button className="btn-login"><a href="/">Masuk</a></button>
                            <p className="text-center my-4">Atau</p>
                            <button className="btn-google bg-image hover-zoom">
                                <img className="google" src={Google} alt="Google" />
                                Masuk dengan Google
                            </button>

                            <span className="text-center d-block mt-2"
                                >Belum punya akun? <a href="/register">Daftar Sekarang</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;