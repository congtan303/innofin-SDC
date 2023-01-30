import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import phone from '../../asset/Group\ 54.png'
import './Login.css'
import { ImEyeBlocked, ImEye } from 'react-icons/im';
import brandLogin from '../../asset/innofin\ 2.png'

export default function Login() {
    const navigate = useNavigate()
    const [isShowPassword, setIsShowPassword] = useState(false);

    // validate form

    const { register, handleSubmit, formState: { errors } } = useForm()


    // authentication login
    const onHandleSubmit = (e) => {

        const params = {
            username: e.username,
            password: e.password,
            grant_type: 'password',
            scope: 'offline_access FinCCP',
            client_id: 'FinCCP_App',
            client_secret: '1q2w3e*'
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('https://home-dev.innofin.vn/connect/token', params, config)
            .then((result) => {
                localStorage.setItem("access_token", result.data.access_token)
                navigate("/account-user");
            })
            .catch((error) => {
                if (error.response) {
                    alert("Sai mật khẩu hoặc ID, vui lòng Đăng nhập lại!")
                }
            })
    }

    return (
        <div className="container-login">

            <img src={brandLogin} alt='' className='Login__Brand' />
            <div className="Login__description">
                Dịch vụ thu hộ
            </div>


            <div className="form-group-login">
                <form className="w3-container form-login" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className='div-input-id'>
                        <label className="input-title">ID</label>
                        <div className='div-input-wrap'>
                            <input
                                className="w3-input input-user-id"
                                type="text"
                                name='username'
                                {...register("username", { required: 'Vui lòng nhập "id"' })}
                            />
                            <i className="fas fa-user input-icon-id"></i>
                            {errors.username && <span className='text-warning-msg '>{errors.username.message}</span>}
                        </div>

                    </div>


                    <div className='div-input-password'>
                        <label className="input-title">Mật khẩu</label>
                        <div className='div-input-wrap'>
                            <input
                                className="w3-input input-user-password"
                                type={isShowPassword ? "text" : "password"}
                                name='password'
                                {...register("password", { required: true, minLength: 6 })}
                            />
                            <span onClick={() => setIsShowPassword(!isShowPassword)}>
                                {isShowPassword ? <ImEye className='input-icon-passwords' /> : <ImEyeBlocked className='input-icon-passwords' />}
                            </span>
                            {Object.keys(errors).length !== 0 && (
                                <>
                                    <span>
                                        {errors.password?.type === "required" && <span className='text-warning-msg'>Vui lòng nhập "mật khẩu"</span>}
                                    </span>
                                    <span>
                                        {errors.password?.type === "minLength" && <span className='text-warning-msg'> "mật khẩu" tối thiểu 6 ký tự</span>}
                                    </span>
                                </>

                            )}
                        </div>




                    </div>
                        <button type='submit' className="btn-login">Đăng nhập</button>
                    
                </form>

            </div>


            <Link to="/forgot-password" className="link-forgot-password">
                <div className="forgot-password">Quên mật khẩu?
                </div>
            </Link>
            <div className="contact">
                <a href='tel: 19001009'>
                    <div className="phone">
                        <img src={phone} alt='' />
                    </div>
                </a>
                <span className="phone-number">Hotline: 19001009</span>
            </div>



            <div>

                <div className='union-bottom'></div>
            </div>
        </div>
    )
}

