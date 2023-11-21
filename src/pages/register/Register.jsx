import Logo from '../../assets/image/Logo.svg';
import Amico from '../login/amico.svg';
import Google from '../login/google.png';
import '../register/Register.css';
import { FiEye } from "react-icons/fi";


const Register = () => {
    return ( 
        <div>
            
            <section className="login d-flex">
                
                
                <div className="login-left w-50 h-100">
                    
                    <div className="logo-regist">
                    <img className="logo2" src={Logo} alt="Logo" />
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
                                
                            <div className="col-6">
                            <div className="square1">
                                <div className="header">
                                    
                                    <h1>Daftar </h1>
                                    
                                </div>

                            <div className="login-form">
                            <label for="nama" className="form-label">Nama lengkap</label>
                            <input
                                type="nama"
                                className="form-control"
                                id="nama"
                                placeholder="Masukkan Nama Lengkap"/>
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
                                placeholder="Masukan Password"/>


                            <a href="#" className="text-end d-block">Lupa Password?</a>

                            <button className="btn-login"><a href="/">Daftar</a></button>
                            <p className="text-center my-2">Atau</p>
                            <button className="btn-google bg-image hover-zoom">
                                <img className="google" src={Google} alt="Google" />
                                Daftar dengan Google
                            </button>

                            <span className="text-center d-block mt-2"
                                >Sudah punya akun? <a href="/login">Masuk Sekarang</a></span>
                            </div>
                        </div>
                        </div>
                 </div>
                 
                </div>
             </section>
        </div>
    );
}

export default Register;