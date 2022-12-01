
import { Link } from "react-router-dom"
import UnionTop from "../Union-top/UnionTop"
import FooterApp from "../FooterApp/FooterApp"
import './ImageVerification.css'
export default function ImageVerification() {
    return (
        <div className="container">
            <div className="header-image-verification">

                <div className='header-img-previous-btn'>
                    <i className="fal fa-chevron-left"></i>
                </div>
                <div className="header-image-verification-title">
                    Xác minh thu hộ
                </div>

                <UnionTop />
            </div>
            <div className="body-image-verification">
                <div className="description-verification">
                    Minh chứng:
                </div>

                <div className="image-verification">

                </div>
            </div>
            <FooterApp />
        </div>
    )
}