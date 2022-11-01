import './ForgotPassword.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className='forgot-background'>
            <div className="Forgot-icon">

            </div>
            <div className="status-forgot-password">Lấy lại mật khẩu</div>
            <div className="comment-forgot-password">Vui lòng điền chính xác các thông tin cung cấp trước đây. Chúng tôi sẽ gửi lại
                mật khẩu tới email đã đăng ký</div>

            <div className="form-input-forgot-password">
                <form class="w3-container">
                    <p>
                        <label className='label-text'>ID Đăng nhập:</label>
                        <input class="w3-input" type="password" /></p>
                </form>
                <Link to='/success-password'>
                    <button class="btn-forgot-password">Lấy lại mật khẩu</button>
                </Link>

                <i class="fas fa-eye-slash input-eye input-icon"></i>


            </div>


        </div>
    )
}

export default ForgotPassword