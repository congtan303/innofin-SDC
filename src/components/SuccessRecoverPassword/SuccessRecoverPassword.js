import {  useNavigate } from 'react-router-dom'
import './SuccessRecoverPassword.css'
const SuccessRecoverPassword = () => {
    const navigate = useNavigate()
    const clickToLogin = () => {
        navigate('/login')
    }
    return (
        <div className="container">
            <div className="img-success">
            </div>
            <div className="status-success-password">Lấy lại mật khẩu thành công</div>
            <div className="comment-success-password">
                Mật khẩu đã gửi đến email đã đăng ký.
                 Vui lòng kiểm tra email để thực hiện đăng nhập lại
            </div>

            <button
                type="submit"
                className="btn-login-again"
                onClick={clickToLogin}
            >
                Đăng nhập lại
            </button>
            <div>

                <div className='union-bottom'></div>
            </div>
        </div>
    )
}

export default SuccessRecoverPassword