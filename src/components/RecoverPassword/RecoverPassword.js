import { Link } from 'react-router-dom'
import "./RecoverPassword.css"
import Union from "../Union/Union"
const RecoverPassword = () => {
    return (
        <div>
            <div className="Reset-container">
                <button className="previous-button">
                    <i class="fal fa-chevron-left icon-back"></i>
                </button>
                <div className="icon-login-success">

                </div>
                <div className="Login-status">
                    <div className="login-info">Đăng nhập lần đầu thành công</div>
                    <div className="login-retpye-password">Vui lòng nhập lại mật khẩu mới</div>
                </div>

                <div className="form-input">
                    <form class="w3-container input-form">
                        <p>
                            <label className="input-title">Mật khẩu mới</label>
                            <input class="w3-input input-user" type="password" /></p>

                        <p className='form-2'>
                            <label className="input-title">Nhập lại Mật khẩu mới</label>
                            <input class="w3-input input-user" type="password" /></p>
                        <p>
                            <div className='btn-confirm-change-password'>
                                <Link to="/change-password">
                                    <button className="btn-change-password">Đổi mật khẩu</button>
                                </Link>
                            </div>


                        </p>

                    </form>
                    <i class="fas fa-eye-slash  input-icon"></i>
                    <i class="fas fa-eye-slash input-icon-2"></i>

                </div>
                <Union />
            </div>
            
        </div>
    )
}

export default RecoverPassword 