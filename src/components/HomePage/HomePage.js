import { Link } from 'react-router-dom'
import './HomePage.css'
import UnionTop from '../Union-top/UnionTop'
export default function HomePage() {
    return (
        <div className='container'>
            <div className="Home-page-header">
                <div className="home-page-header-background">

                </div>
                <div className="home-page-header-avatar">

                </div>
                <div className="home-page-header-welcome">Xin chào Lê Minh Sơn</div>

                <div className="history-notification">

                </div>
                <UnionTop />
                <div className="history-number-notification">
                    1
                </div>
                <div className="history-background-notification">

                </div>

                <div className="account-coin">Tài khoản điểm: <strong>200,000,000</strong> điểm</div>
                <div className="home-page-navbar">
                    <span className="customer-need-take-money">Khách hàng cần thu</span>
                </div>
            </div>



            <div className="home-page-body">
                <Link to="/detail1">
                    <div className="home-page-description-1">
                        <div className="home-page-body-brand">
                            <div className="home-page-brand-img"></div>
                        </div>
                        <div className="home-page-information-1">
                            <div className="home-page-information-title-1">HD Bank</div>
                            <div className="home-page-information-address-1">25 Nguyễn Thị Minh Khai, Quận 1, tp. Hồ Chí Minh</div>
                            <div className="home-page-information-money-1">Số tiền phải thu: <span className="blue-text">10,000,000</span></div>
                            <div className="home-page-information-hour-1">Giờ đi thu: <strong>8:00</strong></div>
                        </div>


                    </div>
                </Link>


                <div className="home-page-description-2">
                    <div className="home-page-body-brand">
                        <div className="home-page-brand-img"></div>
                    </div>
                    <div className="home-page-information-1">
                        <div className="home-page-information-title-1">HD Bank</div>
                        <div className="home-page-information-address-1">25 Nguyễn Thị Minh Khai, Quận 1, tp. Hồ Chí Minh</div>
                        <div className="home-page-information-money-1">Số tiền phải thu: <span className="blue-text">10,000,000</span></div>
                        <div className="home-page-information-hour-1">Giờ đi thu: <strong>8:00</strong></div>
                    </div>


                </div>

                <div className="home-page-description-3">
                    <div className="home-page-body-brand">
                        <div className="home-page-brand-img"></div>
                    </div>
                    <div className="home-page-information-1">
                        <div className="home-page-information-title-1">HD Bank</div>
                        <div className="home-page-information-address-1">25 Nguyễn Thị Minh Khai, Quận 1, tp. Hồ Chí Minh</div>
                        <div className="home-page-information-money-1">Số tiền phải thu: <span className="blue-text">10,000,000</span></div>
                        <div className="home-page-information-hour-1">Giờ đi thu: <strong>8:00</strong></div>
                    </div>


                </div>

                <div className="home-page-description-4">
                    <div className="home-page-body-brand">
                        <div className="home-page-brand-img"></div>
                    </div>
                    <div className="home-page-information-1">
                        <div className="home-page-information-title-1">HD Bank</div>
                        <div className="home-page-information-address-1">25 Nguyễn Thị Minh Khai, Quận 1, tp. Hồ Chí Minh</div>
                        <div className="home-page-information-money-1">Số tiền phải thu: <span className="blue-text">10,000,000</span></div>
                        <div className="home-page-information-hour-1">Giờ đi thu: <strong>8:00</strong></div>
                    </div>


                </div>

                <div className="home-page-description-5">
                    <div className="home-page-body-brand">
                        <div className="home-page-brand-img"></div>
                    </div>
                    <div className="home-page-information-1">
                        <div className="home-page-information-title-1">HD Bank</div>
                        <div className="home-page-information-address-1">25 Nguyễn Thị Minh Khai, Quận 1, tp. Hồ Chí Minh</div>
                        <div className="home-page-information-money-1">Số tiền phải thu: <span className="blue-text">10,000,000</span></div>
                        <div className="home-page-information-hour-1">Giờ đi thu: <strong>8:00</strong></div>
                    </div>


                </div>


            </div>
            <div className="footer"></div>
            <div className="footer-tool-app">
                <div className="footer-icon-app">
                    <div className="footer-app-text">Thu hộ</div>
                </div>
                <Link to="/history">
                    <div className="footer-icon-history">
                        <div className="footer-history-text">Lịch sử</div>
                    </div>
                </Link>
                <Link to='/account-user'>
                    <div className="footer-icon-account">
                        <div className="footer-account-text">Tài khoản</div>
                    </div>
                </Link>

            </div>


        </div>
    )
}