import { useState } from 'react'
import './ForgotPassword.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ImEyeBlocked, ImEye } from 'react-icons/im'
import logoForgot from '../../asset/Group\ 57.svg'

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const [values, setValues] = useState({
        password: "",
        isShowPassword: true,
    });
    const handleShowHidePassword = () => {
        setValues({
            ...values,
            isShowPassword: !values.isShowPassword,

        });
    }

    const onSubmit = (e) => {
        console.log(e);
        navigate('/success-recover-password')
    }
    return (
        <div className='container'>
            <Link to="/login">
                <button className="previous-button">
                    <i className="fal fa-chevron-left icon-back"></i>
                </button>
            </Link>
            <div >
                <img src={logoForgot} alt='' className='forgot-icon' />
            </div>
            <div className="status-forgot-password">Lấy lại mật khẩu</div>
            <div className="comment-forgot-password">Vui lòng điền chính xác các thông tin cung cấp trước đây. Chúng tôi sẽ gửi lại
                mật khẩu tới email đã đăng ký.</div>

            <div className="form-input-forgot-password">
                <form className="w3-container form-forgot-password" onSubmit={handleSubmit(onSubmit)}>
                    <p className=''>
                        <label className='label-text'>ID Đăng nhập:</label>
                        <input
                            className="w3-input forgot-password-input"
                            type={values.isShowPassword ? "text" : "password"}
                            name="forgotPassword"
                            {...register("forgotPassword", { required: 'Vui lòng nhập "ID Đăng nhập"' })}
                        />
                        {errors.forgotPassword && <span className='text-warning-msg '>{errors.forgotPassword.message}</span>}
                    </p>
                    <button className="btn-forgot-password" type='submit'>Lấy lại mật khẩu</button>


                    <span onClick={handleShowHidePassword} >
                        {values.isShowPassword ? <ImEyeBlocked className='input-icon-forgot' /> : <ImEye className='input-icon-forgot' />}

                        {/* <i className={values.isShowPassword ? 'fas fa-eye-slash input-eye input-icon-forgot' : 'fas fa-eye-slash input-icon-forgot'}></i> */}
                    </span>
                </form>
            </div>
            <div>

                <div className='union-bottom'></div>
            </div>


        </div>
    )
}

export default ForgotPassword