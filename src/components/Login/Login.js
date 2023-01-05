import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import phone from '../../asset/Group\ 54.png'
import './Login.css'
import Union from '../Union/Union'
import {ImEyeBlocked, ImEye} from 'react-icons/im'

export default function Login() {
    const navigate = useNavigate()
    const [isShowPassword, setIsShowPassword] = useState(false);

    // validate form

    const { register, handleSubmit, formState: { errors } } = useForm()


    // authentication login
    const onHandleSubmit = (e) => {

        const params = {
            username:  e.username,
            password: e.password,
            grant_type: 'password',
            scope: 'offline_access FinCCP',
            client_id: 'FinCCP_App',
            client_secret:  '1q2w3e*'
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
                if( error.response ){
                    alert("Sai mật khẩu hoặc ID, vui lòng Đăng nhập lại!")
                }
            })
    }

    return (
        <div className="Login__container">
           
                <div className="Login__Brand">
                </div>
                <div className="Login__description">
                    Dịch vụ thu hộ
                </div>
            

            <div className="form-group-login">
                <form className="w3-container input-form" onSubmit={handleSubmit(onHandleSubmit)}>
                    <p>
                        <label className="input-title">ID</label>
                        <input
                            className="w3-input input-user-id"
                            type="text"
                            name='username'
                            {...register("username", { required: 'Vui lòng nhập "id"' })}
                        />
                        {errors.username && <span className='text-warning-msg '>{errors.username.message}</span>}
                        <i className="fas fa-user input-icon-id"></i>

                    </p>


                    <p className='div-input-password'>
                        <label className="input-title">Mật khẩu</label>
                        <input
                            className="w3-input input-user-password"
                            type={isShowPassword ? "text" : "password"}
                            name='password'
                            {...register("password", { required: true, minLength: 6 })}
                        />
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
                        <span onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <ImEyeBlocked className='input-eye-login'/> : <ImEye className='input-eye-login'  /> }
                        </span>
                        
                    </p>

                    <p className='div-btn-login'>
                        <button type='submit' className="btn-login">Đăng nhập</button>
                    </p>
                        
                </form>

            </div>
            <Link to="/forgot-password" className="link-forgot-password">
                <div className="forgot-password">Quên mật khẩu?
                </div>
            </Link>
            <div className="contact">
                <a href='tel: 19001009'>
                    <div className="phone">
                        <img src={phone} alt=''/>
                    </div>
                </a>
                <span className="phone-number">Hotline: 19001009</span>
            </div>

  
            
           
           <div className='union-bottom'></div>
        </div>
    )
}

