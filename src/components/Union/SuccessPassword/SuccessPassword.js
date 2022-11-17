import { Link } from 'react-router-dom'
import './SuccessPassword.css'
import Union from '../Union'
const SuccessPassword = () => {
    return (
        <div className="container">
            <div className="img-success">
            </div>
            <div className="status-success-password">Lấy lại mật khẩu thành công</div>
            <div className="comment-success-password">Mật khẩu đã gửi đến email đã đăng ký. Vui lòng kiểm tra email để thực hiện đăng nhập lại</div>

            <Link to="/login">
                <button className="btn-login-success-password">Đăng nhập lại</button>
            </Link>
            <Union className="Union-success-password" />
        </div>
    )
}

export default SuccessPassword