import { Link } from 'react-router-dom'
import './HistoryRecharge.css'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import unionHeaderHistory from '../../asset/Union-top.png'


export default function HistoryRecharge() {
    const [rechargeData, setRechargeData] = useState([])
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);

    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }

    useEffect(() => {
        if (page <= 2) {
            setLoader(true)
        } else {
            setLoader(false)
        }
        axios.get(`https://home-dev.innofin.vn/api/app/mobile/list-provider-point/${page}`, config)
            .then((response) => {
                setRechargeData([...rechargeData, ...response.data.data]);
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
                <Link to="/history">
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
                <Link to="/history">
                    <div className='navbar-no-active'>Thu hộ</div>
                </Link>
                <div className='navbar-active'>Nạp điểm</div>


            </div>

     
                <ul className='history-list' onScroll={onscroll} >
                    {rechargeData.map((item) => (
                        <li className='history-list-description' key={item.id}>
                            <div>
                                <div className='history-list-status'>Nạp điểm thành công</div>
                                <div className='history-list-money'>Số tiền đã thu: {item.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                <div className='history-list-time'>Giờ thu: {moment(item.processTime).format("LT")}, ngày {moment(item.processTime).format("DD/MM/YYYY")}</div>
                                <div className='history-list-trading-code'>Mã giao dịch: 123666</div>
                            </div>
                            <div className='history-list-status-icon-success'>
                                <div className='history-list-status-icon-success-img'></div>
                            </div>
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