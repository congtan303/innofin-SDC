import { Link } from 'react-router-dom'
import './CashComplete.css';
import logoComplete from '../../asset/image\ 12.png'
import UnionTop from '../Union-top/UnionTop';
export default function CashComplete() {
    return (
        <div className="container">
            <header>
                <div className="history-header-background">

                </div>
                <button className="history-previous-btn">

                </button>
                <div className="history-title">
                    Thu hộ hoàn tất
                </div>
                <div className="history-notification">

                </div>
                <UnionTop />
                <div className="history-number-notification">
                    1
                </div>
                <div className="history-background-notification">

                </div>
            </header>

            <div className="Cash-complete-content">
                <img src={logoComplete} className="img-success-complete"></img>
                <div className="description-success-complete">
                    Bạn đã hoàn thành thu hộ tại cửa hàng
                </div>

                <div className="card-brand">
                    <div className="card-brand-img">

                    </div>
                    <div className="card-brand-name">
                        Pizza Hut
                    </div>
                    <div className="card-brand-address">
                        125 Nguyễn Thị Minh Khai, Phường 1, Q.1, tp. HCM
                    </div>
                </div>

                <hr className="hr-cash-complete"></hr>
            </div>

            <div className="information-cash-user">
                <div className="information-cash">
                    Số tiền phải thu: <span className="information-cash-blue">10,000,000</span>
                </div>
                <div className="information-user-payed">
                    Người nộp tiền:  <strong className="user-payed-text">Nguyễn Thị Huệ</strong>
                </div>
                <div className="information-user-phone-number">
                    Số điện thoại: <strong className="user-payed-text">0998 222 888</strong>
                </div>
            </div>
            <Link to="/account-user">
                <button className="back-to-home-page">Về trang chủ</button>
            </Link>


            {/* footer */}
            <div className="footer"></div>
            <div className="footer-tool-app">
                <Link to="/home-page">
                    <div className="footer-tool-app-icon-1">
                        <div className="footer-tool-description-app">Thu hộ</div>
                    </div>
                </Link>
                <div className="footer-tool-app-icon-2">
                    <div className="footer-tool-description-history">Lịch sử</div>
                </div>
                <Link to="/account-user">
                    <div className="footer-tool-app-icon-3">
                        <div className="footer-tool-description-account">Tài khoản</div>
                    </div>
                </Link>
            </div>

        </div>
    )
}