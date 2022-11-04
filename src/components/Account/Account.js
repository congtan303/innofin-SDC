import { Link } from 'react-router-dom'
import "./Account.css";
import UnionTop from "../Union-top/UnionTop";

const Account = () => {
    return (
        <div className="account-container">
            <div className="Account-header">
                <div className="Account-background">

                </div>
                <i className="fal fa-chevron-left icon-account-back"></i>
                <i class="fal fa-bell icon-account-bell"></i>
                <span className="number-noti-account">1</span>

                <div className="Account-header-avatar">

                </div>
                <Link to="/information-user">
                    <div className="Account-header-name">Lê Minh Sơn</div>
                </Link>

                <div className="Account-header-number-id">Mã số ID: 225556</div>
            </div>
            <div className="account-balance">
                <div className="account-balance-infomation">
                    Số dư tài khoản
                </div>
                <div>
                    <span className="number-money">200.000.000</span> <span className="diem">điểm</span>
                </div>
            </div>
            <div className="account-content">
                <div className="account-wallet">
                    <div className="account-wallet-img">

                    </div>
                    <div className="account-wallet-img-background">

                    </div>
                    <Link to='/recharge-money'>
                        <div className="account-wallet-img--info">Nạp điểm vào tài khoản</div>
                    </Link>

                </div>

                <div className="account-help">
                    <div className="account-help-img">

                    </div>
                    <div className="account-help-img-background">

                    </div>
                    <Link to="/helps">
                        <div className="account-help-img-info">Trợ giúp</div>
                    </Link>

                </div>

                <div className="account-setting">
                    <div className="account-setting-img">

                    </div>
                    <div className="account-setting-img-background">

                    </div>
                    <Link to='/setting'>
                        <div className="account-setting-img-info">Cài đặt</div>
                    </Link>

                </div>
                <hr className='account-hr'></hr>
                <div className="account-hotline">
                    <div className="account-hotline-icon">

                    </div>
                    <div className="account-hotline-background">

                    </div>
                    <div className="account-hotline-information">
                        <div className="account-hotline-information-text">
                            Thông báo khẩn
                        </div>
                        <div className="account-hotline-information-number">
                            0909 99 99 99
                        </div>
                        <div className="account-hotline-description">
                            Số đường dây nóng hỗ trợ nhân viên thu hộ trong mọi trường hợp khẩn cấp.
                        </div>

                    </div>
                </div>
            </div>
            <div className="account-footer">
                <div>
                    <Link to='/home-page'>
                        <div className="account-footer-cost">
                            <div className="account-footer-cost-text">Thu hộ</div>
                        </div>
                    </Link>

                    <Link to="/history">
                        <div className="account-footer-history">
                            <div className="account-footer-history-text">Lịch sử</div>
                        </div>
                    </Link>

                    <Link to="/account-user">
                        <div className="account-footer-user">
                            <div className="account-footer-user-text">Tài khoản</div>
                        </div>
                    </Link>

                </div>

            </div>
            <UnionTop />
        </div>
    )
}

export default Account