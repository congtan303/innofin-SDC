import { Link, useParams } from 'react-router-dom'
import './CashComplete.css';
import logoComplete from '../../asset/image\ 12.png'
import axios from 'axios'
import { useState, useEffect  } from 'react';
import unionHeaderHistory from '../../asset/Union-top.png'

export default function CashComplete() {

    let { id } = useParams();
    const [dataComplete, setDataComplete] = useState([])
    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }


    useEffect(() => {
        axios.get(`https://home-dev.innofin.vn/api/app/mobile/get-cash-collection/${id}`, config)
            .then((response) => {
                setDataComplete(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className="cash-complete-container">
            {/* header */}
            <div className="header-history">
                <Link to="/home-page">
                    <div className='header-history-previous-btn'>

                    </div>
                </Link>

                <div className="header-history-title">Thu hộ hoàn tất</div>
                <div className="header-history-notification">
                    <div className="header-history-notification-number">1</div>
                </div>
                <img src={unionHeaderHistory} className='union-header-history' />
            </div>
            <div className='cash-complete-content'>
                <div className='cash-complete-content-status'>
                    <div className='cash-complete-content-status-icon'>
                        <img src={logoComplete} alt='' />
                    </div>
                    <div className='cash-complete-content-status-text '>
                        Bạn đã thu hộ thành công tại cửa hàng
                    </div>
                </div>

                <div className='cash-complete-card-body'>
                    <div >
                        <img src={dataComplete.storeLogo} className='cash-complete-card-img' alt='' />
                    </div>
                    <div className='cash-complete-wrap'>
                        <div className='cash-complete-card-brand'>
                            {dataComplete.storeName}
                        </div>
                        <div className='cash-complete-card-address'>
                            {dataComplete.storeAddress}
                        </div>
                        <div className='cash-complete-card-hr'>

                        </div>
                        <div className='cash-complete-card-money'>
                            <div className='cash-complete-text-money'>Số tiền phải thu: </div>
                            <span className="cash-complete-money">{dataComplete.total && dataComplete.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </div>
                        <div className='cash-complete-card-payer'>
                            <div className='cash-complete-text-payer'> Người nộp tiền: </div>

                            <span className='cash-complete-payer'>{dataComplete.staff}</span>
                        </div>
                        <div className='cash-complete-card-phone-number'>
                            <div className='cash-complete-text-phone-number'>Số điện thoại: </div>
                            <span className='cash-complete-phone-number'>{dataComplete.storePhone}</span>
                        </div>
                    </div>

                </div>
                <Link to="/home-page">
                    <div className='cash-complete-btn-home'>
                        Về trang chủ
                    </div>
                </Link>

            </div>


            {/* footer */}
            <div className="footer-history">
                <Link to="/home-page">
                    <div className="footer-history-icon">
                        <div className="footer-history-icon-img">

                        </div>

                        <div className="footer-history-icon-text-normal">
                            Thu hộ
                        </div>


                    </div>
                </Link>
                <div className="footer-history-active">
                    <div className="footer-history-active-img">

                    </div>
                    <div className="footer-history-active-text">
                        Lịch sử
                    </div>
                </div>
                <Link to="/account-user">
                    <div className="footer-history-account">
                        <div className="footer-history-account-img">

                        </div>
                        <div className="footer-history-account-text">
                            Tài khoản
                        </div>
                    </div>
                </Link>


            </div>

        </div>
    )
}