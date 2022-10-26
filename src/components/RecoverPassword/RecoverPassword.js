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

                        <p>
                            <label className="input-title">Nhập lại Mật khẩu mới</label>
                            <input class="w3-input input-user" type="password" /></p>
                        <p>
                            <button className="btn-login">Đổi mật khẩu</button>
                        </p>

                    </form>
                    <i class="fas fa-eye-slash input-eye input-icon"></i>
                    <i class="fas fa-eye-slash input-eye"></i>
                    
                </div>
            </div>
            <Union />
        </div>
    )
}

export default RecoverPassword 