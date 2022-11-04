import { Link } from 'react-router-dom'
import phone from '../../asset/Group\ 54.png'
import './Login.css'
import Union from '../Union/Union'
const Login = () => {
    return (
        <div className="Login__container">
            <div className="header">
                <div className="Login__Brand">
                </div>
                <div className="Login__description">
                    Dịch vụ thu hộ
                </div>
            </div>

            <div className="form-group-login">
                <form class="w3-container input-form">
                    <p>
                        <label className="input-title">ID</label>
                        <input class="w3-input input-user" type="text" /></p>

                    <p>
                        <label className="input-title">Mật khẩu</label>
                        <input class="w3-input input-user" type="password" /></p>
                    <p className='div-btn-login'>
                        <Link to="/account-user">
                            <button className="btn-login">Đăng nhập</button>
                        </Link>

                    </p>

                </form>
                <i class="fas fa-user input-icon"></i>
                <i class="fas fa-eye-slash input-eye-login"></i>

            </div>

            <div className="forgot-password">
                    
                <Link to="/forgot-password" className="link-forgot-password">Quên mật khẩu?</Link>
            </div>

            <div className="contact">
                <div className="phone">
                    <img src={phone}></img>
                </div>

                <span className="phone-number">Hotline: 19001009</span>
            </div>

            <div className="background-logo">
                <div className="background-logo-1">

                </div>
                <div className="background-logo-2">

                </div>
            </div>
            <Union />
        </div>
    )
}
export default Login