import './FrontCamera2.css'
import Union from '../Union/Union'
export default function FrontCamera2() {
    return (
        <div className='container'>
            <button className="previous-button">
                <i class="fal fa-chevron-left icon-back"></i>
            </button>
            <div className='front-camera-title-2'>Chụp mặt trước</div>

            <div className='card-body-detail'>
                <div className='front-card-img'>
                    <div className='front-card-img-avatar'></div>
                    <div className='front-card-img-border'></div>
                </div>
            </div>
            <div className='front-camera-2-note'>
                Hãy đảm bảo rằng hình chụp không bị mờ, tối hoặc chói sáng
                và bấm nút chụp
            </div>
            <div className='btn-group-front-camera-2'>
                <div className='btn-take-photo-again'>Chụp lại</div>
                <div className='btn-use-photo'>Dùng ảnh</div>
            </div>
            <Union />
        </div>
    )
}