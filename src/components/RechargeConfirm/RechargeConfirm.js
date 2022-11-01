import { Link } from 'react-router-dom'
import './RechargeConfirm.css'

export default function RechargeConfirm() {
    return (
        <div className='container'>
            <button className="previous-button">
                <i class="fal fa-chevron-left icon-back"></i>
            </button>
            <div className="Recharge-title title">
                Nạp điểm vào tài khoản
            </div>

            <div className="recharge-confirm-title">

            </div>
            <div className="recharge-confirm-description">
                Yêu cầu nạp thêm điểm của bạn đã được ghi nhận. Điểm sẽ được nạp vào tài khoản
                trong vòng <strong>15 phút</strong>
            </div>
            <Link to="/account-user">
                <button className="btn-back-to-home-page">Về trang chủ</button>
            </Link>

        </div>
    )
}