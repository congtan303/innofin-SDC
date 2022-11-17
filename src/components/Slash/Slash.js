import { Link } from 'react-router-dom'

import './Slash.css'

const Slash = () => {
    return (
        <div>
            <div className="Slash__background">
                <div className="finance__brand">

                </div>
                <div className="finance__information">
                    Xin chào! Cảm ơn bạn đã tham gia dịch vụ thu hộ Innofin. Vui lòng bấm bắt đầu để truy cập
                    vào hệ thống
                </div>
                <div className="finance__img">

                </div>
                <Link to="/login">
                    <button className="login">Bắt đầu</button>
                </Link>


            </div>
        </div>
    )
}
export default Slash