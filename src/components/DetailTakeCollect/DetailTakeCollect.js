import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import phone from '../../asset/Vector-contact-user.png'
import './DetailTakeCollect.css'
import SwipeableButton from '../SwipeButton2/SwipeButton2'
import FooterApp from '../FooterApp/FooterApp'


export default function DetailTakeCollect() {
    let { id, lat, lng } = useParams();
    const [dataCustomer, setDataCustomer] = useState([])
    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }

    // api nhận đơn theo id 
    useEffect(() => {
        axios.get(`https://home-dev.innofin.vn/api/app/mobile/get-cash-collection/${id}`, config)
            .then((response) => {
                setDataCustomer(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // hàm điều hướng tới trang thu hộ
    const navigate = useNavigate()
    const onSuccess = () => {
        navigate(`/detail-start-collect/${id}/${lat}/${lng}`)

        // API bắt đầu nhận đơn thu

        axios.get(`https://home-dev.innofin.vn/api/app/mobile/take-request?Id=${id}&Lat=${lat}&Lng=${lng}`, config)
            .then((response) => {
                console.log(response);
            })
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

                    <div className="Detail-1-card-body" >
                        <div >
                            <img
                                src={dataCustomer.storeLogo}
                                className="detail-1-avatar"
                                alt="img-logo"
                            />
                        </div>
                        <div className="detail-1-name">{dataCustomer.storeName}</div>
                        <div className="detail-1-address">{dataCustomer.storeAddress}</div>
                        <hr className="detail-1-hr" />
                        <div className="detail-1-money">
                            Số tiền phải thu:
                            <strong className="blue text-detail-css">{dataCustomer.total && dataCustomer.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </strong>
                        </div>
                        <div className="detail-1-name-money">Người nộp tiền: <span className='user-payment'>{dataCustomer.staff}</span></div>
                        <div className="detail-1-phone-number">Số điện thoại: <span className='user-payment-number-phone'>{dataCustomer.storePhone}</span></div>

                        <div className="detail-1-contact">
                            <a href='tel:0923 221 554 '>
                                <div className="detail-1-contact-background">
                                    <img src={phone} alt='img-phone-contact'></img>
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