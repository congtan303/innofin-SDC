import { Link, navigate, useNavigate, useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import './HomePage.css'
import UnionTop from '../Union-top/UnionTop'
import FooterApp from '../FooterApp/FooterApp'
import { AppContext } from '../../context/AppContext'



function HomePage() {
    const navigate = useNavigate()

    const { dataCustomer } = useContext(AppContext);
  
    
    const [isPayment, setIsPayment] = useState([])
    const handlePayment = () => {
        navigate(`/detail2/${isPayment.id}`)
    }

    
    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }

    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/app/mobile/my-progress', config)
            .then(response => {
                setIsPayment(response.data)
                console.log(response.data);
            })
    }, [])
   console.log(isPayment.id);

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


                <div className="account-coin">Tài khoản điểm: <strong>200,000</strong> điểm</div>
                <div className="home-page-navbar">
                    <span className="customer-need-take-money">Khách hàng cần thu</span>
                </div>
            </div>

            {/* list */}

            <ul className='list-customer'>

                {dataCustomer.map((data) => (
                    <Link to={`/detail1/${data.id}`} key={data.id} >
                        <li className='list-customer-information' >
                            <div>
                                <img src={data.storeLogo} className='list-customer-avatar'></img>
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
                                    Giờ đi thu:  <span className='bold-text'>8:00</span>
                                </div>
                            </div>
                        </li>
                    </Link>


                ))}

            </ul>
            {isPayment ? <div className='check-data-payment' onClick={handlePayment}>
                <i className="far fa-biking"></i>
            </div> : ''}


            {/* footer */}
            <FooterApp />
        </div >
    )
}

export default HomePage