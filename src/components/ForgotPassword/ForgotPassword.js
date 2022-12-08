import { useState } from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'
import Union from '../Union/Union'
const ForgotPassword = () => {
    const [values, setValues] = useState({
        password: "",
        isShowPassword: false,
    });
    const handleShowHidePassword = () => {
        setValues({
            ...values,
            isShowPassword: !values.isShowPassword,
            
        });
        setTimeout(() => {
            setValues({
                isShowPassword: false,
            });
          }, 3000)
    }
    return (
        <div className='forgot-background'>
            <Link to="/setting">
                    <button className="previous-button">
                        <i className="fal fa-chevron-left icon-back"></i>
                    </button>
                </Link>
            <div className="Forgot-icon">

            </div>
            <div className="status-forgot-password">Lấy lại mật khẩu</div>
            <div className="comment-forgot-password">Vui lòng điền chính xác các thông tin cung cấp trước đây. Chúng tôi sẽ gửi lại
                mật khẩu tới email đã đăng ký</div>

            <div className="form-input-forgot-password">
                <form className="w3-container">
                    <p className='form-forgot-password'>
                        <label className='label-text'>ID Đăng nhập:</label>
                        <input className="w3-input forgot-password-input" type={values.isShowPassword ? "text" : "password"} /></p>
                </form>
                <Link to='/success-password'>
                    <button className="btn-forgot-password">Lấy lại mật khẩu</button>
                </Link>

                <span onClick={() => { handleShowHidePassword() }}>
                    <i className={values.isShowPassword ? 'fas fa-eye-slash input-eye input-icon-forgot' : 'fas fa-eye-slash input-icon-forgot'}></i>
                </span>
                {/* <i className="fas fa-eye-slash input-eye input-icon"></i> */}


            </div>
            <Union />


        </div>
    )
}

export default ForgotPassword