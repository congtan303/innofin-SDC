import { Link,useNavigate} from 'react-router-dom'
import phone from '../../asset/Vector-contact-user.png'
import './Detail2.css'
import SwipeableButton from '../SwipeButton/SwipeButton'
import FooterApp from '../FooterApp/FooterApp'

export default function Detail() {

    const navigate = useNavigate()
    const onSuccess = () => {
        navigate('/list-money-1')
    }
    return (
        <div className="background-detail">
            {/* header */}
            <div className="Detail-1-background">

            </div>
            <div className='header-detail'>
                    <Link to="/detail1">
                        <div className='header-detail-previous-btn'></div>
                    </Link>
                    <div className="detail-title">
                        Thu hộ
                    </div>
                    

                    <div className="detail-notification purple">
                        <div className='detail-number-notification'>
                            1
                        </div>

                    </div>
                    <div className="history-background-notification">

                    </div>
                </div>

            {/* body */}

            <div className="Detail-1-content">
                <div className="Detail-1-card-body">
                    <div className="detail-1-avatar"></div>
                    <div className="detail-1-name">HD Bank</div>
                    <div className="detail-1-address">25 Bis Nguyễn Thị Minh Khai, Quận 1, tp. HCM</div>
                    <hr className="detail-1-hr" />
                    <div className="detail-1-money">Số tiền phải thu: <strong className="blue text-detail-css">10,000,000</strong></div>
                    <div className="detail-1-name-money">Người nộp tiền: <strong className='text-detail-css'>Nguyễn Thị Huệ</strong></div>
                    <div className="detail-1-phone-number">Số điện thoại: <strong className='text-detail-css'>0923 221 554</strong></div>
                    <div className="detail-1-contact">
                        <a href='tel: 0923 221 554'>
                        <div className="detail-1-contact-background">
                                <img src={phone}></img>
                            </div>
                        </a>
                            

                        </div>
                </div>
                <ol className="detail-1-list-note">
                    <li>Đến gặp người nộp tiền và bấm "Bắt đầu thu hộ"
                    </li>
                    <li>Đưa màn hình này cho người nộp tiền để xác nhận
                    </li>
                </ol>
               
                    <div className='block'>
                        <SwipeableButton onSuccess={onSuccess} color='#2CD1F8' />
                    </div>
                

            </div>

            {/* footer */}
            <FooterApp />
        </div>
    )
}