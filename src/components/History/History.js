import './History.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'
import { Link } from 'react-router-dom'
import unionHeaderHistory from '../../asset/Union-top.png'

export default function History() {

    const [historyData, setHistoryData] = useState([]);
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);

    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token

        }
    }

    useEffect(() => {
        if (page <= 3) {
            setLoader(true)
        } else {
            setLoader(false)
        }
        axios.get(`https://home-dev.innofin.vn/api/app/mobile/list-cash-collection/${page}`, config)
            .then((response) => {
                setHistoryData([...historyData, ...response.data.cashCollection])
                setLoader(false)
            })
    }, [page])


    const onscroll = (e) => {
        let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 50
        if (bottom) {
            setPage(page + 1)
            setLoader(false)
        }
    }

    return (

        <div className='history-container'>
            <div className="header-history">
                <Link to="/home-page">
                    <div className='header-history-previous-btn'>

                    </div>
                </Link>

                <div className="header-history-title">Lịch sử</div>
                <div className="header-history-notification">
                    <div className="header-history-notification-number">1</div>
                </div>
                <img src={unionHeaderHistory} className='union-header-history' />
            </div>


            <div className='header-history-navbar'>

                <div className='header-history-navbar-app'>Thu hộ</div>
                <Link to="/history-recharge">
                    <div className='header-history-navbar-add-coin'>Nạp điểm</div>
                </Link>

            </div>

            <ul className='history-list' onScroll={onscroll} >
                {historyData.map((item) => (
                    <li className='history-list-description' key={item.id}>
                        <div className='history-list-title'>{item.storeName}</div>
                        <div className='history-list-address'>{item.storeAddress}</div>
                        <div className='history-list-money'>Số tiền đã thu: {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                        <div className='history-list-trading-code'>Mã giao dịch: {item.tripId.substring(0, 6)}</div>
                    </li>
                ))}
                {loader && <LoaderAnimation />}
            </ul>

            
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