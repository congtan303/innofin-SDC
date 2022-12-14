import { Link } from 'react-router-dom'
import './Setting.css'
export default function Setting() {
    return (
        <div className='setting-container'>

            <div className="btn-setting">
                <Link to="/account-user">
                    <button className="previous-button">
                        <i className="fal fa-chevron-left icon-back"></i>
                    </button>
                </Link>

            </div>
            <div className="setting-title">
                Cài đặt
            </div>
            <div className="setting-information-user">
                <div className="setting-infomation-user-body">
                    <div className="setting-user-icon-background">
                        <div className="setting-user-icon">
                        </div>
                    </div>
                    <Link to="/information-user">
                        <div className="setting-description">Thông tin cá nhân</div>
                    </Link>

                </div>

            </div><div className="setting-change-password">
                <div className="setting-change-password-body">
                    <div className="setting-password-icon-background">
                        <div className="setting-password-icon">
                        </div>
                    </div>
                    <Link to='/change-password'>
                        <div className="setting-description-change-password">Đổi mật khẩu</div>
                    </Link>

                </div>

            </div>
            <div className="setting-log-out">
                <div className="setting-log-out-body">
                    <div className="setting-log-out-background">
                        <div className="setting-log-out-icon">
                        </div>
                    </div>
                    <div className="setting-description-log-out">Đăng xuất</div>
                </div>

            </div>
            <div className='union-bottom'></div>
        </div>
    )
}