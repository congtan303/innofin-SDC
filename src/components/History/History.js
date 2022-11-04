import { Link } from 'react-router-dom'
import './History.css'
import UnionTop from '../Union-top/UnionTop'
export default function History() {
    return (
        <div className='container'>
            <div className="history-header-background">

            </div>
            <Link to="/account-user">
                <button className="history-previous-btn">
                </button>
            </Link>

            <div className="history-title">
                Lịch sử
            </div>
            <div className="history-notification">

            </div>
            <UnionTop />
            <div className="history-number-notification">
                1
            </div>
            <div className="history-background-notification">

            </div>

            <div className="history-navbar">

            </div>
            <div className="history-navbar-seperate"></div>
            <div className="history-navbar-active-color-1"></div>
            <div className="thu-ho">Thu hộ</div>
            <Link to="/history-recharge">
                <div className="add-coin">Nạp điểm</div>
            </Link>

            <div className="history-block-description-1">
                <div className="history-info">
                    <div className="address-brand">25 Nguyễn Thị Minh Khai, Quận 1, tp. HCM</div>
                    <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                    <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                    <div className="transaction-code">Mã giao dịch: 123888</div>
                </div>

            </div>

            <div className="history-block-description-2">
                <div className="history-info">
                    <div className="address-brand">25 Nguyễn Thị Minh Khai, Quận 1, tp. HCM</div>
                    <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                    <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                    <div className="transaction-code">Mã giao dịch: 123888</div>
                </div>

            </div>
            <div className="history-block-description-3">
                <div className="history-info">
                    <div className="address-brand">25 Nguyễn Thị Minh Khai, Quận 1, tp. HCM</div>
                    <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                    <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                    <div className="transaction-code">Mã giao dịch: 123888</div>
                </div>

            </div>
            <div className="history-block-description-4">
                <div className="history-info">
                    <div className="address-brand">25 Nguyễn Thị Minh Khai, Quận 1, tp. HCM</div>
                    <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                    <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                    <div className="transaction-code">Mã giao dịch: 123888</div>
                </div>

            </div>
            <div className="history-title-brand-1">HD bank</div>
            <div className="history-title-brand-2">Pharmacity</div>
            <div className="history-title-brand-3">Phano Pharmacy</div>
            <div className="history-title-brand-4">Ngân hàng SHB</div>

            <div className="footer"></div>
            <div className="footer-tool-app">
                <Link to='/home-page'>
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