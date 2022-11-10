import { Link } from 'react-router-dom'
import './CashComplete.css';
import logoComplete from '../../asset/image\ 12.png'
import logoBrand from '../../asset/image\ 19-pizza-hut.png'
import UnionTop from '../Union-top/UnionTop';

import FooterHistory from '../FooterHistory/FooterHistory';
export default function CashComplete() {
    return (
        <div className="container">
            {/* header */}
            <div className="header-history">
                <div className='header-history-previous-btn'>

                </div>
                <div className="header-history-title">Thu hộ hoàn tất</div>
                <div className="header-history-notification">
                    <div className="header-history-notification-number">1</div>
                </div>


                <UnionTop />
            </div>
            <div className='cash-complete-content'>
                <div className='cash-complete-content-status'>
                    <div className='cash-complete-content-status-icon'>
                        <img src={logoComplete} />
                    </div>
                    <div className='cash-complete-content-status-text '>
                        Bạn đã thu hộ thành công tại cửa hàng
                    </div>
                </div>

                <div className='cash-complete-card-body'>
                    <div className='cash-complete-card-img'>
                        <img src={logoBrand} />
                    </div>
                    <div className='cash-complete-card-brand'>
                        Pizza Hut
                    </div>
                    <div className='cash-complete-card-address'>
                        125 Nguyễn Thị Minh Khai, Phường 1, Q.1, Tp. HCM
                    </div>
                    <div className='cash-complete-card-hr'>

                    </div>
                    <div className='cash-complete-card-money'>
                        Số tiền phải thu: <span className="money-blue">10,000,000</span>
                    </div>
                    <div className='cash-complete-card-payer'>
                        Người nộp tiền: <span className='text-payer'>Nguyễn Thị Huệ</span>
                    </div>
                    <div className='cash-complete-card-phone-number'>
                        Số điện thoại: <span className='text-phone-number'> 0276 665 568</span>
                    </div>
                </div>

                <div className='cash-complete-btn-home'>
                    Về trang chủ
                </div>

            </div>



            {/* footer */}
            <FooterHistory />

        </div>
    )
}