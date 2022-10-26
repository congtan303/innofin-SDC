import './ChangePassword.css';
import Union from '../Union/Union';
function ChangePassword() {
    return (
        <div className="container">
            <div className="img-success">
            </div>
            <div class="status">Thay đổi mật khẩu thành công</div>
            <div class="comment">Vui lòng đăng nhập lại</div>
            <button class="login-again">Đăng nhập lại</button>
            <Union /> 
        </div>
    );
}

export default ChangePassword