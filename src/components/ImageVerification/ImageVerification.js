
import { Link, useParams,useNavigate } from "react-router-dom"
import UnionTop from "../Union-top/UnionTop"
import FooterApp from "../FooterApp/FooterApp"
import './ImageVerification.css'
import { useState, useEffect } from "react"
import axios from 'axios'
export default function ImageVerification() {

    const navigate = useNavigate()
    const [image, setImage] = useState('')
    
    const {id,  lat, lng} = useParams()
//   console.log(lat);
//   console.log(id);
//   console.log(lng);
    const handleImage = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImage(file)
    }

    const handleApi = () => {
        navigate(`/cash-complete/${id}-${lat}-${lng}`)
        const formData = new FormData()
        formData.append('Images', image)
        console.log(image);
        formData.append('Lng', lng)
        formData.append('Lat', lat)
        formData.append('Id', id)

        const access_token = localStorage.getItem('access_token')

        // post form data đơn thu hộ lên server
        axios({
            url:'https://home-dev.innofin.vn/api/app/mobile/complete-collection',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            data: formData
        })


    }
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
                <div className="div-image-verification">
                    <div className="image-verification">
                        {image && (
                            <img src={image.preview} alt="" width="100%" height="100%" />
                        )}

                    </div>
                </div>
                <div className="div-button-camera">
                    <div className="button-camera">
                        <label htmlFor="file-upload" className="button-camera-text">
                            <i className="fas fa-camera icon-camera-verify"></i>
                            <div className="">Chụp ảnh</div>

                        </label>
                        <input id="file-upload" type="file" onChange={handleImage} />
                    </div>
                </div>




                <div className="div-button-verifycation">
                    <div className="button-verifycation">
                        <button className="button-verifycation-text" onClick={handleApi}>Hoàn thành</button>
                    </div>
                </div>


            </div>
            <FooterApp />
        </div>
    )
}