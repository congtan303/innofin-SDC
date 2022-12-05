import { Link, useParams } from 'react-router-dom'
import './CashComplete.css';
import logoComplete from '../../asset/image\ 12.png'
import logoBrand from '../../asset/image\ 19-pizza-hut.png'
import UnionTop from '../Union-top/UnionTop';
import axios from 'axios'
import FooterHistory from '../FooterHistory/FooterHistory';
import { useState } from 'react';
import { useEffect } from 'react';
export default function CashComplete() {

    let { id, lat, lng } = useParams();
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
                console.log(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className="container">
            {/* header */}
            <div className="header-history">


                <div className="header-history-title title-complete">Thu hộ hoàn tất</div>
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
                    <div >
                        <img src={dataComplete.storeLogo} className='cash-complete-card-img' />
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
                            <span className="cash-complete-money">{dataComplete.total}</span>
                        </div>
                        <div className='cash-complete-card-payer'>
                            <div className='cash-complete-text-payer'> Người nộp tiền: </div>

                            <span className='cash-complete-payer'>Nguyễn Thị Huệ</span>
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
            <FooterHistory />

        </div>
    )
}