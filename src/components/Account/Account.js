import "./Account.css";
import Union from "../Union/Union";

const Account = () => {
    return (
        <div>
            <div className="Account-header">
                <div className="Account-background">

                </div>
                <i className="fal fa-chevron-left icon-account-back"></i>
                <i class="fal fa-bell icon-account-bell"></i>
                <span className="number-noti-account">1</span>

                <div className="Account-header-avatar">

                </div>
                <div className="Account-header-name">Lê Minh Sơn</div>
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
                    <div className="account-wallet-img--info">Nạp tiền vào tài khoản</div>
                </div>

                <div className="account-help">
                    <div className="account-help-img">

                    </div>
                    <div className="account-help-img-background">

                    </div>
                    <div className="account-help-img-info">Trợ giúp</div>
                </div>

                <div className="account-setting">
                    <div className="account-setting-img">

                    </div>
                    <div className="account-setting-img-background">

                    </div>
                    <div className="account-setting-img-info">Cài đặt</div>
                </div>
                <hr></hr>
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
                <div className="account-footer-cost">
                    <div className="account-footer-cost-text">Thu hộ</div>
                </div>
                <div className="account-footer-history">
                <div className="account-footer-history-text">Lịch sử</div>
                </div>
                <div className="account-footer-user">
                <div className="account-footer-user-text">Tài khoản</div>
                </div>
                </div>
                
            </div>

        </div>
    )
}

export default Account