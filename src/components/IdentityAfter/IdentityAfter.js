import './IdentityAfter.css'

export default function IdentityAfter() {
    return (
        <div className='container'>
            <div className='previous-button-camera'>
                <i className="fal fa-chevron-left previous-white"></i>
            </div>

            <div className='front-camera-title'>
                Chụp mặt sau
            </div>
            {/* card photo */}
            <div className='backside-card-body'>
                <div className='backside-card-border'>
                    <div className='backside-card-img'>
                        <div className='backside-card-img-border'></div>
                    </div>
                </div>

                <div className='backside-camera-note'>
                    Hãy đảm bảo rằng hình chụp không bị mờ, tối hoặc chói sáng
                    và bấm nút chụp
                    <div className='btn-take-photo'>
                        <div className='btn-take-photo-background'>
                            <div className='btn-take-photo-camera'>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}