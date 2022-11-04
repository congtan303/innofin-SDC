import { Link } from 'react-router-dom'
import './HistoryRecharge.css'
import UnionTop from '../Union-top/UnionTop'
export default function HistoryRecharge() {
    return (
        <div className='container'>
            <div className="history-recharge-header">

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


                <div class="border-navbar">
                    <div className="history-recharge-navbar">
                        <Link to="/history">
                            <div className="thu-ho-2">Thu hộ</div>
                        </Link>

                        <div className="nap-diem-2">Nạp điểm</div>
                        <div className="history-navbar-seperate"></div>
                        <div className="history-navbar-active-color"></div>
                    </div>

                </div>
                <div className="history-recharge-body">
                    <div className="history-recharge-description-1">
                        <div className="history-info">
                            <div className="history-recharge-status">Nạp điểm thành công</div>
                            <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                            <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                            <div className="transaction-code">Mã giao dịch: 123888</div>
                        </div>

                    </div>

                    <div className="history-recharge-description-2">
                        <div className="history-info">
                            <div className="history-recharge-status">Nạp điểm thành công</div>
                            <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                            <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                            <div className="transaction-code">Mã giao dịch: 123888</div>
                        </div>

                    </div>

                    <div className="history-recharge-description-3">
                        <div className="history-info">
                            <div className="history-recharge-status">Nạp điểm thành công</div>
                            <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                            <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                            <div className="transaction-code">Mã giao dịch: 123888</div>
                        </div>

                    </div>

                    <div className="history-recharge-description-4">
                        <div className="history-info">
                            <div className="history-recharge-status">Nạp điểm thành công</div>
                            <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                            <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                            <div className="transaction-code">Mã giao dịch: 123888</div>
                        </div>

                    </div>

                    <div className="history-recharge-description-5">
                        <div className="history-info">
                            <div className="history-recharge-status">Nạp điểm thành công</div>
                            <div className="amount-money">Số tiền đã thu: 10,000,000</div>
                            <div className="transaction-time">Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                            <div className="transaction-code">Mã giao dịch: 123888</div>
                        </div>

                    </div>



                </div>

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
        </div>
    )
}