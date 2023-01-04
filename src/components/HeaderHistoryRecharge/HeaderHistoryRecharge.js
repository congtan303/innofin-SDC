import './HeaderHistoryRecharge.css'
import { Link } from 'react-router-dom'
import UnionTop from '../Union-top/UnionTop'
export default function HeaderHistoryRecharge() {
    return (
        <div>
            <div className="header-history">
                <Link to="/home-page">
                    <div className='header-history-previous-btn'>

                    </div>
                </Link>

                <div className="header-history-title">Lịch sử</div>
                <div className="header-history-notification">
                    <div className="header-history-notification-number">1</div>
                </div>


                <UnionTop />
            </div>
            <div className='header-history-navbar'>
                <Link to="/history">
                    <div className='header-history-navbar-recharge-no-active '>Thu hộ</div>
                </Link>


                <div className='header-history-navbar-add-coin-active'>Nạp điểm</div>
            </div>
          

        </div>
    )
}