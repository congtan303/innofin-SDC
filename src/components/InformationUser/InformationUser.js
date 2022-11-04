import { Link } from 'react-router-dom'
import './InformationUser.css'
import Union from '../Union/Union'
export default function InfomationUser() {
    return (
        <div className='info-user-container'>
            <div className="btn-setting">
                <Link to="/account-user">
                    <button className="previous-button">
                        <i class="fal fa-chevron-left icon-back"></i>
                    </button>
                </Link>

            </div>
            <div className="title">
                Thông tin cá nhân
            </div>
            <div className="information-card">

            </div>

            <div className="information-card-avatar">

            </div>
            <div className="information-card-description">
                <div className="information-name">Lê Minh Sơn</div>
                <div className="information-id">Mã số ID:225556</div>
            </div>
            <hr class="information-hr"></hr>
            <div className="information-account-balance">Số dư tài khoản <span className="purple">200,000,000 </span> điểm</div>
            <div className="information-user">

            </div>
            <div className="information-user-date">
                Ngày sinh:
            </div>
            <div className="information-user-number-date">
                28/09/1989
            </div>
            <div className="information-edit-date-background"></div>
            <div className="information-edit-date-img"></div>
            <div className="information-user-CCCD">
                Số CCCD:
            </div>
            <div className="information-user-number-CCCD">
                2736 28 272
            </div>
            <div className="information-edit-CCCD-background"></div>
            <div className="information-edit-CCCD-img"></div>
            <div className="information-user-phone">
                Số điện thoại:
            </div>
            <div className="information-user-phone-numb">
                0962 228 445
            </div>
            <div className="information-edit-phone-number-background"></div>
            <div className="information-edit-phone-number-img"></div>
            <Union />
        </div>
    )
}