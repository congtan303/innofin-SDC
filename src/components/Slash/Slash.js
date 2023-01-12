import { Link } from 'react-router-dom'
import brandLogo from '../../asset/innofinLogo.png'
import financeImage from '../../asset/image\ 18.png'
import './Slash.css'

const Slash = () => {
    return (
        <div className='container-slash'>
            <div>

                <img src={brandLogo} alt='' className='brand-logo' />
                <div className='finance__information'>
                    Xin chào! Cám ơn bạn đã tham gia dịch vụ thu hộ innofin.
                    Vui lòng bấm bất đầu để truy cập vào hệ thống
                </div>
            </div>
            <img src={financeImage} className='finance-img' />
            <Link to='/login'>
            <button className='start-btn'>Bắt đầu</button>
            </Link>

        </div>
    )
}
export default Slash