import Logo from '../../assets/image/Logo.svg';
import Amico from '../login/amico.svg';
import Google from '../login/google.png';
import '../login/Login.css';
import { FiEye } from "react-icons/fi";

const Login = () => {
    return ( 
        <div>
            
            <section className="login d-flex">
                
                
                <div className="login-left w-50 h-100">
                    
                    <div className="logo-login">
                    <img className="logo1" src={Logo} alt="Logo" />
                    </div>
                    <div>
                    <img className="hero" src={Amico} alt="amico" />
                    </div>
                    <div className="diksi">
                        <p>Selamat datang di website kami, tempat di mana pembelajaran menjadi sebuah perjalanan yang penuh inspirasi.</p>
                    </div>
                </div>
                

                <div className="login-right">
                    
                        <div className="row justify-content-center align-items-center h-100">
                                
                            <div className="col-7">
                            <div className="square">
                                <div className="header">
                                    
                                    <h1>Masuk</h1>
                                    
                                </div>

                            <div className="login-form">
                            <label for="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Masukan Email"/>

                            <label for="password" className="form-label">Password</label>
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
                 
                </div>
             </section>
        </div>
    );
}

export default Login;