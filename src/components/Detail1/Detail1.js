import { Link, useNavigate } from 'react-router-dom'
import phone from '../../asset/Vector-contact-user.png'
import './Detail1.css'
import SwipeableButton from '../SwipeButton2/SwipeButton2'
import FooterApp from '../FooterApp/FooterApp'
import { Route } from 'react-router-dom'
import Detail2 from '../Detail2/Detail2'
export default function Detail() {

    const navigate = useNavigate()
    const onSuccess = () => {
        navigate('/detail2')
    }

    return (
        <div>
            {/* header */}
            <div className="background-detail">
                <div className='header-detail'>
                    <Link to="/home-page">
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
                        <div className="detail-1-address">25 Nguyễn Thị Minh Khai, Quận 1, tp. HCM</div>
                        <hr className="detail-1-hr" />
                        <div className="detail-1-money">Số tiền phải thu: <strong className="blue text-detail-css">10,000,000</strong></div>
                        <div className="detail-1-name-money">Người nộp tiền: <strong className='text-detail-css'>Nguyễn Thị Huệ</strong></div>
                        <div className="detail-1-phone-number">Số điện thoại: <strong className='text-detail-css'>0923 221 554</strong></div>
                        <div className="detail-1-contact">
                            <a href='tel:0923 221 554 '>
                            <div className="detail-1-contact-background">
                                <img src={phone}></img>
                            </div>
                            </a>
                            

                        </div>
                    </div>
                    <ul className="detail-1-list-note">
                        <li>Khi bấm nút "bắt đầu" người nộp tiền sẽ được thông báo
                            rằng bạn sẽ đến vòng 15 phút
                        </li>
                        <li>Bạn không thể thay đổi địa điểm thu sau khi
                            bấm nút bên dưới
                        </li>
                    </ul>


                        <div className='block'>
                            <SwipeableButton onSuccess={onSuccess} color='#2CD1F8' />
                        </div>




                </div>

                {/* footer */}
                <FooterApp />

            </div>

        </div>
    )
}