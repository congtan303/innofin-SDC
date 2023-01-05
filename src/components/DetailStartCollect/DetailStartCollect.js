import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import phone from '../../asset/Vector-contact-user.png'
import './DetailStartCollect.css'
import SwipeableButton from '../SwipeButton/SwipeButton'
import FooterApp from '../FooterApp/FooterApp'

export default function DetailStartCollect() {
    let { id, lat, lng } = useParams();
    const navigate = useNavigate()
    const onSuccess = () => {
        // navigate(`/list-money/${id}/${lat}/${lng}`);
        console.log(123);
    }

    const [dataPayment, setDataPayment] = useState([])

    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }

    // get API theo id 
    useEffect(() => {
        axios.get(`https://home-dev.innofin.vn/api/app/mobile/get-cash-collection/${id}`, config)
            .then((response) => {
                setDataPayment(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className="background-detail">
            {/* header */}
            {/* <div className="Detail-1-background">

            </div> */}
            <div className='header-detail'>
                <Link to={`/detail-take-collect/${id}/${lat}/${lng}`}>
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
                    <div >
                        <img src={dataPayment.storeLogo} className="detail-1-avatar" alt='store-logo'></img>
                    </div>
                    <div className="detail-1-name">{dataPayment.storeName}</div>
                    <div className="detail-1-address">{dataPayment.storeAddress}</div>
                    <hr className="detail-1-hr" />
                    <div className="detail-1-money">Số tiền phải thu: <strong className="blue text-detail-css">{dataPayment.total && dataPayment.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></div>
                    <div className="detail-1-name-money">Người nộp tiền: <strong className='text-detail-css'>{dataPayment.staff}</strong></div>
                    <div className="detail-1-phone-number">Số điện thoại: <strong className='text-detail-css'>{dataPayment.storePhone}</strong></div>
                    <div className="detail-1-contact">
                        <a href='tel: 0923 221 554'>
                            <div className="detail-1-contact-background">
                                <img src={phone} alt='' />
                            </div>
                        </a>
                    </div>
                </div>
                <ol className="detail-2-list-note">
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