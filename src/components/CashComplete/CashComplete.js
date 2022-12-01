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
    const [dataComplete, setDataComplete] = useState([])

    const bodyFormData = new FormData();

    let { id } = useParams();

    bodyFormData.append('id', id);
    // bodyFormData.append('image', imageFile);

    const dataObject = dataComplete.find((item) => item.id === id)
    const lng = dataObject?.lng
    const lat = dataObject?.lat
    console.log(id);    
    console.log(lng, lat);

    
    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }

    useEffect(() => {
        axios.post('https://home-dev.innofin.vn/api/app/mobile/complete-collection', config, bodyFormData)
        .then((response) => {
            console.log(response.data);
        })
    })

    return (
        <div className="container">
            {/* header */}
            <div className="header-history">
                <Link to="/list-money-complete">
                    <div className='header-history-previous-btn'>

                    </div>
                </Link>

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