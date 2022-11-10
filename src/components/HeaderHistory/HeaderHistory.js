import './HeaderHistory.css'
import { Link } from 'react-router-dom'
import UnionTop from '../Union-top/UnionTop'
export default function HeaderHistory() {
    return (
        <div>
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
                
                <div className='header-history-navbar-app-active'>Thu hộ</div>
                <div className='header-history-navbar-seperate'></div>
                <div className='header-history-navbar-app-border-active'></div>
                <Link to="/history-recharge">
                <div className='header-history-navbar-recharge'>Nạp điểm</div>
                </Link>
                
            </div>

        </div>
    )
}