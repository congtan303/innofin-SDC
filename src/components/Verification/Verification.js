import './Verification.css'
import Union from '../Union/Union'
export default function Verification() {
    return (
        <div className='container'>
            <button className="previous-button">
                <i class="fal fa-chevron-left icon-back"></i>
            </button>
            <div className='verification-title'>
                Xác thực giấy tờ
            </div>
            <div className='verification-description'>
                Chọn giấy tờ mà bạn muốn xác thực
            </div>
            <div className='identification-card'>
                <div className='identification-card-img'></div>
                <div className='identification-card-background'></div>
                <div className='identification-card-content'>Chứng minh thư, Thẻ căn cước</div>

            </div>
            <div className='identification-card-chip'>
                <div className='identification-card-chip-img'></div>
                <div className='identification-card-chip-background'></div>
                <div className='identification-card-chip-content'>Thẻ căn cước gắn chip</div>
                
            </div>
            <div className='passpord'>
                <div className='passport-img'></div>
                <div className='passport-background'></div>
                <div className='passport-content'> Hộ chiếu</div>
               
            </div>
            <div className='license'>
                <div className='license-img'></div>
                <div className='license-background'></div>
                <div className='license-content'>Bằng lái xe</div>
               
            </div>
            <div className='other-papers'>
                <div className='other-papers-img'></div>
                <div className='other-papers-background'></div>
                <div className='other-papers-content'>Giấy tờ khác</div>
                
            </div>
            <Union />

        </div>
    )
}