import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import './HomePage.css'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation'
import moment from 'moment'
import { UserContext } from '../../context/UserContext/UserContext'
import { IoIosBicycle } from 'react-icons/io'
import unionHomePage from '../../asset/Union-top.png'
import avatarUser from '../../asset/image-avatar.png'
import iconHistory from '../../asset/Union-history-home-page.png'
function HomePage() {

    const { dataUser } = useContext(UserContext);
    const navigate = useNavigate()
    const [dataCustomer, setDataCustomer] = useState([])
    const [loader, setLoader] = useState(true);
    const [isPayment, setIsPayment] = useState(false)


    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }
    // get API check data nào đang ở trạng thái "đã nhận"
    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/app/mobile/my-progress', config)
            .then(response => {
                setIsPayment(response.data)
                setLoader(false)
            })
    }, [])

    // nếu có đơn đã vào trạng thái "đã nhận" thì chuyển hướng đến trang "bắt đầu thu hộ"
    const handlePayment = () => {
        navigate(`/detail-start-collect/${isPayment.id}/${isPayment.lat}/${isPayment.lng}`)
    }

    // get API list đơn 
    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/app/mobile/my-request-collection?cityId&districtId&wardId&merchantId&page=1', config)
            .then(response => {
                setDataCustomer(response.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div className='home-page-container'>
            <div className="Home-page-header">


                <img src={avatarUser} className='avtar-user' />

                <div className='information-user-and-coin'>
                    <div className="home-page-header-welcome">Xin chào {dataUser.surname} {dataUser.name}!</div>
                    <div className="account-coin">Tài khoản điểm: <strong>{dataUser.point && dataUser.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> điểm</div>
                </div>

                <div className='homepage-bell-notification'>
                    <div className="homepage-number-notification">
                        1
                    </div>
                </div>


                <img src={unionHomePage} className='union-home-page' />
            </div>
            <div className="home-page-navbar">
                Khách hàng cần thu
            </div>
            <ul className='list-customer'>
                {loader && <LoaderAnimation />}
                {dataCustomer.length !== 0 ? dataCustomer.map((data) => (
                    <Link to={`/detail-take-collect/${data.id}/${data.lat}/${data.lng}`} key={data.id} >

                        <li className='list-customer-information' >
                            <div>
                                <img src={data.storeLogo} className='list-customer-avatar' alt='' />
                            </div>
                            <div className='list-customer-description'>
                                <div className='list-customer-description-name'>
                                    {data.storeName}
                                </div>
                                <div className='list-customer-description-address'>
                                    {data.storeAddress}
                                </div>
                                <div className='list-customer-description-money'>
                                    Số tiền phải thu: <span className='blue'>{data.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                </div>
                                <div className='list-customer-description-time'>
                                    Giờ đi thu:  <span className='time-cash'>{data.requestDateTime.substring(11, 16)} - {data.requestEndTime.substring(11, 16)}</span>
                                </div>
                                <div className='list-customer-description-date'>
                                    Ngày: <span className='date-cash'>{moment(data.requestDateTime).format("DD/MM/YYYY")}</span>
                                </div>
                            </div>
                        </li>
                    </Link>
                )) : <div className='blue text-center'>Hiện tại chưa có đơn thu hộ nào</div>}

                {!isPayment ? '' : <div className='check-data-payment' onClick={handlePayment}>
                    <IoIosBicycle className='icon-payment' />
                </div>}
            </ul>

            {/* footer */}
            <div className="footer-history">
                <div className="footer-history-icon-active">
                    <div className="footer-history-icon-img-active">

                    </div>
                    <Link to="/home-page">
                        <div className="footer-history-icon-text">
                            Thu hộ
                        </div>
                    </Link>

                </div>
                <Link to="/history">
                <div className="footer-history-normal">
                    <div className="footer-history-img">

                    </div>
                    <div className="footer-history-text-normal">
                        Lịch sử
                    </div>
                </div>
                </Link>
                
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
        </div >
    )
}

export default HomePage