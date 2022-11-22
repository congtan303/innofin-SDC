import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './HomePage.css'
import UnionTop from '../Union-top/UnionTop'
import FooterApp from '../FooterApp/FooterApp'
import avatarHD from '../../asset/Group-thu-ho-hd-bank.png'
import avatarPharma from '../../asset/Group-pharma.png'
import avatarPhanoPharma from '../../asset/Group-phano-pharma.png'
import avatarSHB from '../../asset/Group-SHB.png'
import avatarVPBank from '../../asset/Group-VP-Bank.png'
import avatarVPBank2 from '../../asset/image-vp-bank.png'
export default function HomePage() {

    // hàm tự động thêm dấu phẩy vào số tiền
    



    // lấy data từ api
    const [dataCustomer, setDataCustomer] = useState([])
   if(isNaN(dataCustomer)) {
    console.log( dataCustomer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
   
   }

    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }

    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/app/mobile/my-request-collection?cityId&districtId&wardId&merchantId&page=1', config)
            .then(response => {
                console.log(response.data[0]);
                setDataCustomer(response.data[0])
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div className='container'>
            <div className="Home-page-header">
                <div className="home-page-header-background">

                </div>
                <div className="home-page-header-avatar">

                </div>
                <div className="home-page-header-welcome">Xin chào Lê Minh Sơn</div>


                <UnionTop />
                <div className='homepage-bell-notification'>
                    <div className="homepage-number-notification">
                        1
                    </div>

                </div>


                <div className="account-coin">Tài khoản điểm: <strong>200,000,000</strong> điểm</div>
                <div className="home-page-navbar">
                    <span className="customer-need-take-money">Khách hàng cần thu</span>
                </div>
            </div>

            {/* list */}
            <ul className='list-customer'>
                <Link to="/detail1">

                    <li className='list-customer-information'>
                        <div >
                            <img src={dataCustomer.storeLogo} className='list-customer-avatar'></img>
                        </div>
                        <div className='list-customer-description'>
                            <div className='list-customer-description-name'>
                                {dataCustomer.storeName}
                            </div>
                            <div className='list-customer-description-address'>
                                {dataCustomer.storeAddress}
                            </div>
                            <div className='list-customer-description-money'>
                                Số tiền phải thu: <span className='blue'> {dataCustomer.total}</span>
                            </div>
                            <div className='list-customer-description-time'>
                                Giờ đi thu: 8:00
                            </div>
                        </div>
                    </li>


                </Link>


            </ul>
            <FooterApp />



        </div>
    )
}