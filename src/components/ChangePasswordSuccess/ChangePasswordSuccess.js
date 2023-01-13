import { Link } from 'react-router-dom'
import './ChangePasswordSuccess.css';
import { useNavigate } from 'react-router-dom';

function ChangePasswordSuccess() {
    const navigate = useNavigate()
    const clickToLogin = () => {
        navigate('/login')
    }
    return (
        <div className="container">
            <div className="img-success">
            </div>
            <div className="information-change-password">
                <div className='status'>
                    Thay đổi mật khẩu thành công
                </div>

                <div className="re-login">Vui lòng đăng nhập lại</div>
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
    );
}

export default ChangePasswordSuccess