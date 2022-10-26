import './ForgotPassword.css'
import Union from '../Union/Union'
const ForgotPassword = () => {
    return (
        <div>
            <div className="Forgot-icon">

            </div>
            <div className="status-forgot-password">Lấy lại mật khẩu</div>
            <div className="comment-forgot-password">Vui lòng điền chính xác các thông tin cung cấp trước đây. Chúng tôi sẽ gửi lại
                mật khẩu tới email đã đăng ký</div>

            <div className="form-input-forgot-password">
                <form class="w3-container">
                    <p>
                        <label>ID Đăng nhập:</label>
                        <input class="w3-input" type="password" /></p>
                </form>
                <button class="btn-forgot-password">Lấy lại mật khẩu</button>
                <i class="fas fa-eye-slash input-eye input-icon"></i>


            </div>

            <Union className="Union-forgot-password" />
        </div>
    )
}

export default ForgotPassword