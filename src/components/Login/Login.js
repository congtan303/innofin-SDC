import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import qs from 'qs'
import phone from '../../asset/Group\ 54.png'
import './Login.css'
import Union from '../Union/Union'


export default function Login() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        username: "",
        password: "",
        isShowPassword: false,
    });

    // authentication login
    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams()
        params.append('username', values.username)
        params.append('password', values.password)
        params.append('grant_type', 'password')
        params.append('scope', 'offline_access FinCCP')
        params.append('client_id', 'FinCCP_App')
        params.append('client_secret', '1q2w3e*')

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
            .catch((err) => {
                // Do somthing
                console.error(err);
            })
    }

    // ẩn hiện password
    const handleShowHidePassword = () => {
        setValues({
            ...values,
            isShowPassword: !values.isShowPassword,

        });
        setTimeout(() => {
            setValues({
                isShowPassword: false,
            });
        }, 3000);
    };

    return (
        <div className="Login__container">
            <div className="header">
                <div className="Login__Brand">
                </div>
                <div className="Login__description">
                    Dịch vụ thu hộ
                </div>
            </div>

            <div className="form-group-login">
                <form className="w3-container input-form" onSubmit={handleSubmit}>
                    <p>
                        <label className="input-title">ID</label>
                        <input
                            className="w3-input input-user-id"
                            type="text" onChange={({target}) => setValues({ ...values, username: target.value })} /></p>
                    {/* <hr className='input-login-hr'></hr> */}

                    <p className='div-input-password'>
                        <label className="input-title">Mật khẩu</label>
                        <input
                            className="w3-input input-user-password"
                            type={values.isShowPassword ? "text" : "password"}
                            onChange={(e) => setValues({ ...values, password: e.target.value })} /></p>
                    {/* <hr className='input-password-hr'></hr> */}
                    <p className='div-btn-login'>
                        {/* <Link to="/account-user">
                         
                        </Link> */}

                        <button type='submit' className="btn-login">Đăng nhập</button>
                    </p>

                </form>


                <i className="fas fa-user input-icon-id"></i>
                <span onClick={() => { handleShowHidePassword() }}>
                    <i className={values.isShowPassword ? 'fas fa-eye input-eye-login' : 'fas fa-eye-slash input-eye-login'}></i>
                </span>


            </div>



            <Link to="/change-password" className="link-forgot-password">
                <div className="forgot-password">Quên mật khẩu?
                </div>
            </Link>


            <div className="contact">
                <a href='tel: 19001009'>
                    <div className="phone">
                        <img src={phone}></img>
                    </div>
                </a>


                <span className="phone-number">Hotline: 19001009</span>
            </div>

            <div className="background-logo">
                <div className="background-logo-1">

                </div>
                <div className="background-logo-2">

                </div>
            </div>
            <Union />
        </div>
    )
}

