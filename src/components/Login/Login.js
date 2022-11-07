import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import phone from '../../asset/Group\ 54.png'
import './Login.css'
import Union from '../Union/Union'
const Login = () => {

    const [values, setValues] = useState({
        password: "",
        isShowPassword: false,
    });

    const handleShowHidePassword = () => {
        setValues({ ...values, isShowPassword: !values.isShowPassword });
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
                <form class="w3-container input-form">
                    <p>
                        <label className="input-title">ID</label>
                        <input class="w3-input input-user" type="text" /></p>
                    <hr className='input-login-hr'></hr>

                    <p className='div-input-password'>
                        <label className="input-title">Mật khẩu</label>
                        <input class="w3-input input-user" type={values.isShowPassword ? "text" : "password"} /></p>
                    <hr className='input-password-hr'></hr>
                    <p className='div-btn-login'>
                        <Link to="/account-user">
                            <button className="btn-login">Đăng nhập</button>
                        </Link>

                    </p>

                </form>


                <i class="fas fa-user input-icon-id"></i>
                <span onClick={() => { handleShowHidePassword() }}>
                    <i className={values.isShowPassword ? 'fas fa-eye input-eye-login' : 'fas fa-eye-slash input-eye-login'}></i>
                </span>


            </div>



            <Link to="/forgot-password" className="link-forgot-password">
                <div className="forgot-password">Quên mật khẩu?
                </div>
            </Link>


            <div className="contact">
                <div className="phone">
                    <img src={phone}></img>
                </div>

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
export default Login