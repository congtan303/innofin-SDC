import './FrontCamera.css';


export default function FrontCamera() {
    return (
        <div className='container-camera'>
            <div className='previous-button-camera'>
                <i className="fal fa-chevron-left previous-white"></i>
            </div>

            <div className='front-camera-title'>
                Chụp mặt trước
            </div>

            <div className='front-card-body'>
                <div className='front-card-border'>
                    <div className='front-card-img'>
                        <div className='front-card-img-avatar'></div>
                        <div className='front-card-img-border'></div>
                    </div>
                </div>

                <div className='front-camera-note'>
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