import { Link } from 'react-router-dom'
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



            <ul className='list-customer'>
                <Link to="/detail1">
                <li className='list-customer-information'>
                    <div className='list-customer-avatar'>
                        <img src={avatarHD} ></img>
                    </div>
                    <div className='list-customer-description'>
                        <div className='list-customer-description-name'>
                            HD Bank
                        </div>
                        <div className='list-customer-description-address'>
                        25 Bis Nguyễn Thị Minh Khai, Quận 1, Tp. Hồ Chí Minh
                        </div>
                        <div className='list-customer-description-money'>
                        Số tiền phải thu: 10,000,000
                        </div>
                        <div className='list-customer-description-time'>
                        Giờ đi thu: 8:00 
                        </div>
                    </div>
                </li>
                </Link>
                
                <li className='list-customer-information'>
                    <div className='list-customer-avatar'>
                        <img src={avatarPharma} ></img>
                    </div>
                    <div className='list-customer-description'>
                        <div className='list-customer-description-name'>
                        Pharmacity
                        </div>
                        <div className='list-customer-description-address'>
                        248A Nơ Trang Long, P.12, Q.Bình Thạnh, TP.Hồ Chí Minh.
                        </div>
                        <div className='list-customer-description-money'>
                        Số tiền phải thu: 30,000,000
                        </div>
                        <div className='list-customer-description-time'>
                        Giờ đi thu: 8:00 
                        </div>
                    </div>
                </li>
                <li className='list-customer-information'>
                    <div className='list-customer-avatar'>
                        <img src={avatarPhanoPharma} className='list-customer-avatar'></img>
                    </div>
                    <div className='list-customer-description'>
                        <div className='list-customer-description-name'>
                        Phano Pharmacy
                        </div>
                        <div className='list-customer-description-address'>
                        09 Hồ Biểu Chánh, Phường 11, Quận Phú Nhuận, TP.HCM
                        </div>
                        <div className='list-customer-description-money'>
                        Số tiền phải thu: 10,000,000
                        </div>
                        <div className='list-customer-description-time'>
                        Giờ đi thu: 8:00 
                        </div>
                    </div>
                </li>
                <li className='list-customer-information'>
                    <div className='list-customer-avatar'>
                        <img src={avatarSHB} className='list-customer-avatar'></img>
                    </div>
                    <div className='list-customer-description'>
                        <div className='list-customer-description-name'>
                        Ngân hàng SHB
                        </div>
                        <div className='list-customer-description-address'>
                        122 Trần Quốc Thảo, Phường 2, Quận 3, Thành phố Hồ Chí Minh
                        </div>
                        <div className='list-customer-description-money'>
                        Số tiền phải thu: 10,000,000
                        </div>
                        <div className='list-customer-description-time'>
                        Giờ đi thu: 8:00 
                        </div>
                    </div>
                </li>
                <li className='list-customer-information'>
                    <div className='list-customer-avatar'>
                        <img src={avatarVPBank} className='list-customer-avatar'>
                            
                        </img>
                        <img src={avatarVPBank2} className="img-vp-bank-2"></img>
                    </div>
                    <div className='list-customer-description'>
                        <div className='list-customer-description-name'>
                        VP Bank
                        </div>
                        <div className='list-customer-description-address'>
                        166 Nguyễn Công Trứ, Phường Nguyễn Thái Bình, Quận 1, Tp. Hồ Chí Minh
                        </div>
                        <div className='list-customer-description-money'>
                        Số tiền phải thu: 10,000,000
                        </div>
                        <div className='list-customer-description-time'>
                        Giờ đi thu: 8:00 
                        </div>
                    </div>
                </li>
                <li className='list-customer-information'>
                    <div className='list-customer-avatar'>
                        <img src={avatarHD} className='list-customer-avatar'></img>
                    </div>
                    <div className='list-customer-description'>
                        <div className='list-customer-description-name'>
                            HD Bank
                        </div>
                        <div className='list-customer-description-address'>
                        25 Bis Nguyễn Thị Minh Khai, Quận 1, Tp. Hồ Chí Minh
                        </div>
                        <div className='list-customer-description-money'>
                        Số tiền phải thu: 10,000,000
                        </div>
                        <div className='list-customer-description-time'>
                        Giờ đi thu: 8:00 
                        </div>
                    </div>
                </li>
                <li className='list-customer-information'>
                    <div className='list-customer-avatar'>
                        <img src={avatarHD} className='list-customer-avatar'></img>
                    </div>
                    <div className='list-customer-description'>
                        <div className='list-customer-description-name'>
                            HD Bank
                        </div>
                        <div className='list-customer-description-address'>
                        25 Bis Nguyễn Thị Minh Khai, Quận 1, Tp. Hồ Chí Minh
                        </div>
                        <div className='list-customer-description-money'>
                        Số tiền phải thu: 10,000,000
                        </div>
                        <div className='list-customer-description-time'>
                        Giờ đi thu: 8:00 
                        </div>
                    </div>
                </li>
            </ul>
            <FooterApp />
            


        </div>
    )
}