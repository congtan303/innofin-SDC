
import { useParams, useNavigate, Link } from "react-router-dom"
import './ImageVerification.css'
import { useState, useEffect } from "react"
import axios from 'axios'
import { useForm } from 'react-hook-form'
import unionHeaderHistory from '../../asset/Union-top.png'

export default function ImageVerification() {
    const { id, lat, lng } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [image, setImage] = useState()


    // xóa hình ảnh khỏi bộ nhớ, khi chọn hình khác
    useEffect(() => {
        return () => {
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
        navigate(`/cash-complete/${id}/${lat}/${lng}`)
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
                <Link to={`/list-money/${id}/${lat}/${lng}`}>
                    <div className='header-img-previous-btn'>
                        <i className="fal fa-chevron-left"></i>
                    </div>
                </Link>

                <div className="header-image-verification-title">
                    Xác minh thu hộ
                </div>

                <img src={unionHeaderHistory} className='union-header-history' />
            </div>
            
            <div className="body-image-verification">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="description-verification">
                        Minh chứng:
                    </div>
                    <div className="div-image-verification">
                        <div className="image-verification">
                            {image && (
                                <img src={image.preview} alt="" width="100%" height="100%" className="img-verify" />
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
                                {...register("inputImage", { required: 'vui lòng chọn hình ảnh xác minh thu hộ', onChange: handleImage })}
                            />
                        </div>
                    </div>
                    {errors.inputImage && <span className='text-warning-msg text-center'>{errors.inputImage.message}</span>}


                    
                            <button className="button-verifycation-text" type="submit">Hoàn thành</button>
                       
                </form>


            </div>
            <div className="footer-history">
                <div className="footer-history-icon-active">
                    <div className="footer-history-icon-img-active">

                    </div>
                    <Link to="/home-page">
                        <div className="footer-history-icon-text">
                            Thu hộ
                        </div>
                    </Link>

                </div>
                <Link to="/history">
                    <div className="footer-history-normal">
                        <div className="footer-history-img">

                        </div>
                        <div className="footer-history-text-normal">
                            Lịch sử
                        </div>
                    </div>
                </Link>

                <Link to="/account-user">
                    <div className="footer-history-account">
                        <div className="footer-history-account-img">

                        </div>
                        <div className="footer-history-account-text">
                            Tài khoản
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    )
}