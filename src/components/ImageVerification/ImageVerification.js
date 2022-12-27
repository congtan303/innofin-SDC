
import { useParams, useNavigate } from "react-router-dom"
import UnionTop from "../Union-top/UnionTop"
import FooterApp from "../FooterApp/FooterApp"
import './ImageVerification.css'
import { useState, useEffect } from "react"
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function ImageVerification() {
    const { id, lat, lng } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [image, setImage] = useState()


    // xóa hình ảnh khỏi bộ nhớ, khi chọn hình khác
    useEffect(() => {
        return() => {
        image && URL.revokeObjectURL(image.preview)
        }
    }, [image])

    // hàm thay đổi hình ảnh
    const handleImage = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImage(file)
    }


    const onSubmit = (e) => {
        console.log(e);
        navigate(`/cash-complete/${id}-${lat}-${lng}`)
        const formData = new FormData()
        formData.append('Images', image)
        formData.append('Lng', lng)
        formData.append('Lat', lat)
        formData.append('Id', id)

        const access_token = localStorage.getItem('access_token')

        // post form data đơn thu hộ lên server
        axios({
            url: 'https://home-dev.innofin.vn/api/app/mobile/complete-collection',
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
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                <div className="">Chọn ảnh</div>
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                {...register("inputImage", { required: 'vui lòng chọn hình ảnh xác minh thu hộ', onChange: handleImage})}
                            />
                        </div>
                    </div>
                    {errors.inputImage && <span className='text-warning-msg text-center'>{errors.inputImage.message}</span>}


                    <div className="div-button-verifycation">
                        <div className="button-verifycation">
                            <button className="button-verifycation-text" type="submit">Hoàn thành</button>
                        </div>
                    </div>
                </form>


            </div>
            <FooterApp />
        </div>
    )
}