import './HeaderHistoryRecharge.css'
import { Link } from 'react-router-dom'
import UnionTop from '../Union-top/UnionTop'
import FooterHistory from '../FooterHistory/FooterHistory'
export default function HeaderHistoryRecharge() {
    return (
        <div className='container'>
            <div className="header-history">
                <div className='header-history-previous-btn'>

                </div>
                <div className="header-history-title">Lịch sử</div>
                <div className="header-history-notification">
                    <div className="header-history-notification-number">1</div>
                </div>


                <UnionTop />
            </div>
            <div className='header-history-navbar'>
                <Link to="/history">
                    <div className='header-history-navbar-app'>Thu hộ</div>
                </Link>

                <div className='header-history-navbar-seperate'></div>

                <div className='header-history-navbar-recharge-active'>Nạp điểm</div>
                <div className='header-history-navbar-seperate-border-active'></div>
            </div>
            <FooterHistory />

        </div>
    )
}