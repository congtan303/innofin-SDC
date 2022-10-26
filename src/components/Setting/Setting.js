import './Setting.css'
import Union from '../Union/Union'
export default function Setting() {
    return (
        <div>
            <div className="btn-setting">
                <button className="previous-button">
                    <i class="fal fa-chevron-left icon-back"></i>
                </button>
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
                    <div className="setting-description">Thông tin cá nhân</div>
                </div>

            </div><div className="setting-change-password">
                <div className="setting-change-password-body">
                    <div className="setting-password-icon-background">
                        <div className="setting-password-icon">
                        </div>
                    </div>
                    <div className="setting-description-change-password">Đổi mật khẩu</div>
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
            <Union />
        </div>
    )
}