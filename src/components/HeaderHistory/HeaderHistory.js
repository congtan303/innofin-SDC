import './HeaderHistory.css'
import { Link } from 'react-router-dom'
import unionHeaderHistory from '../../asset/Union-top.png'
export default function HeaderHistory() {
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
                <img src={unionHeaderHistory} className='union-header-history'/>
            </div>
               
               
            <div className='header-history-navbar'>

                <div className='header-history-navbar-app'>Thu hộ</div>
                <Link to="/history-recharge">
                    <div className='header-history-navbar-add-coin'>Nạp điểm</div>
                </Link>

            </div>

        </div>
    )
}