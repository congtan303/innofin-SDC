import './FaceID.css'

export default function FaceID() {
    return (
        <div className='face-id-container'>
            <div className='previous-button-camera'>
                <i className="fal fa-chevron-left previous-white"></i>
            </div>

            <div className='front-camera-title'>
                Xác thực khuôn mặt
            </div>

            {/* mask group */}
            <div className='face-id-group'>
                <div className='face-id-elipse-border'>
                </div>

            </div>
            <div className='face-id-guide'>Giữ vững khuôn mặt để xác thực</div>
        </div>
    )
}