import './BackSideCamera2.css'
import Union from '../Union/Union'
export default function BackSideCamera2() {
    return (
        <div className='container'>
            <header>
                <button className="previous-button">
                    <i class="fal fa-chevron-left icon-back"></i>
                </button>
                <div className='front-camera-title-2'>Chụp mặt sau</div>
            </header>

            {/* card backside */}

            <div className='backside-card-detail'>
                <div className='backside-card-img'>
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