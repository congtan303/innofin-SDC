import { Link } from 'react-router-dom'
import './ChangePasswordSuccess.css';
import Union from '../Union/Union';

function ChangePasswordSuccess() {
    return (
        <div className="container">
            <div className="img-success">
            </div>
            <div class="status">Thay đổi mật khẩu thành công</div>
            <div class="comment">Vui lòng đăng nhập lại</div>
            <Link to="/login">
            <button class="login-again">Đăng nhập lại</button>
            </Link>
            
            <Union /> 
        </div>
    );
}

export default ChangePasswordSuccess