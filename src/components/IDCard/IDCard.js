import './IDCard.css';
import logo1 from '../../asset/image\ 32.png'
import logo2 from '../../asset/img-back-side-card.png'
import avatar from '../../asset/image\ 13.png'
import Union from '../Union/Union';
export default function IDCard() {
    return (
        <div className='container'>
            <button className="previous-button">
                <i className="fal fa-chevron-left icon-back"></i>
            </button>
            <div className='front-camera-title-2'>Thẻ căn cước gắn chíp</div>
            <div className='ID-card-description'>
                Để đảm bảo tính chính chủ, bạn vui lòng chụp
                Chứng minh nhân dân 2 mặt:</div>
            {/* card content */}
            <div className='card-content-body'>
                <div className='card-content-front'>
                    <img src={logo1} className='card-content-front-img'></img>
                    <img src={avatar} className="card-content-front-avatar"></img>
                    <div className="card-content-front-text">Mặt trước</div>
                </div>

                <div className='card-content-backside'>
                    <img src={logo2} className="card-content-backside-img"></img>
                    <div className="card-content-backside-text">Mặt sau</div>
                </div>

                <div className='card-content-face-id'>
                    <img src={avatar} className="card-content-face-id-avatar"></img>
                    <div className="card-content-face-id-text">Nhận diện khuôn mặt</div>
                </div>
            </div>

            {/* guide */}
            <div className='guide-license'>
                <div className='guide-license-title'>Hướng dẫn chụp ảnh chứng từ</div>
                <ul className='guide-license-list'>
                    <li>
                        <i class="fal fa-check-circle"></i>
                        Hình chụp không bị mờ, tối hay sáng chói
                    </li>
                    <li>
                        <i class="fal fa-check-circle"></i>
                        Chứng từ không bị mất góc, bấm lỗ
                    </li>
                    <li>
                        <i class="fal fa-check-circle"></i>
                        Chứng từ là bản gốc, còn hạn sử dụng
                    </li>
                </ul>
            </div>

              <button className='confirm-license'>Xác nhận</button>
            <Union />
        </div>


    )
}