import { Link } from 'react-router-dom'
import './RechargeConfirm.css'

export default function RechargeConfirm() {
    return (
        <div className='container'>
            <Link to="/recharge-money">
                <button className="previous-button">
                    <i className="fal fa-chevron-left icon-back"></i>
                </button>
            </Link>

            <div className="Recharge-title title">
                Nạp điểm vào tài khoản
            </div>

            <div className="recharge-confirm-card">


                <div className="recharge-confirm-description">
                    Yêu cầu nạp thêm điểm của bạn đã được ghi nhận. Điểm sẽ được nạp vào tài khoản
                    trong vòng <strong>15 phút</strong>
                </div>
                <Link to="/account-user" className='div-btn-recharge-confirm'>
                    <button className="btn-back-to-home-page">Về trang chủ</button>
                </Link>
            </div>
        </div>
    )
}