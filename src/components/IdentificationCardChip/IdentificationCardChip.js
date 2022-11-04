import './IdentificationCardChip.css'
import Union from '../Union/Union'
export default function IdentificationCardChip() {
    return (
        <div className='container'>
            <button className="previous-button">
                <i class="fal fa-chevron-left"></i>
            </button>
            <div className='identification-card-chip-title'>Thẻ căn cước gắn chíp</div>
            <div className='identification-card-chip-description'>
                Để đảm bảo tính chính chủ, bạn vui lòng chụp Thẻ căn cước 2 mặt
            </div>

            <div className='identification-card-chip-front'>
                <div className='identification-card-chip-front-img'>

                </div>
                <div className='identification-card-chip-front-text'>
                    Mặt trước
                </div>
            </div>
            <div className='identification-card-chip-backside'>
                <div className='identification-card-chip-backside-img'>

                </div>
                <div className='identification-card-chip-backside-text'>
                    Mặt sau
                </div>
            </div>
            <div className='identification-card-chip-face-id'>
                <div className='identification-card-chip-face-id-img'>

                </div>
                <div className='identification-card-chip-face-id-text'>
                    Nhận diện khuôn mặt
                </div>
            </div>

            {/* guide license */}

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