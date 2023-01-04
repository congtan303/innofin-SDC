import { Link, useNavigate } from 'react-router-dom'
import "./ChangePassword.css"
import Union from "../Union/Union"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {ImEyeBlocked, ImEye} from 'react-icons/im'


const ChangePassword = () => {
    const navigate = useNavigate()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowPasswordReType, setIsShowPasswordRetype] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    // show/hide password "mật khẩu mới"
    const handleShowHidePassword = () => {

        setIsShowPassword(!isShowPassword);

    };
    // show/hide password "nhập lại mật khẩu mới"
    const handleShowHidePasswordReType = () => {

        setIsShowPasswordRetype(!isShowPasswordReType);

    };

    const onHandleSubmit = (e) => {
        navigate("/change-password-success")
    }

    return (
        <div>
            <div className="Reset-container">
            <Link to="/setting">
                <button className="previous-button">
                    <i className="fal fa-chevron-left icon-back"></i>
                </button>
            </Link>
                
                <div className="icon-login-success">

                </div>
                <div className="Login-status">
                    <div className="login-info">Đăng nhập lần đầu thành công</div>
                    <div className="login-retpye-password">Vui lòng nhập lại mật khẩu mới</div>
                </div>

                <div className="form-input">
                    <form className="w3-container input-form" onSubmit={handleSubmit(onHandleSubmit)}>
                        <p>
                            <label className="input-title">Mật khẩu mới</label>
                            <input
                                className="w3-input input-user-password"
                                type={isShowPassword ? "text" : "password"}
                                name='newPassword'
                                {...register("newPassword", { required: true, minLength: 6 })}
                            />
                            {Object.keys(errors).length !== 0 && (
                                <>
                                    <span>
                                        {errors.newPassword?.type === "required" && <span className='text-warning-msg'>Vui lòng nhập "mật khẩu"</span>}
                                    </span>
                                    <span>
                                        {errors.newPassword?.type === "minLength" && <span className='text-warning-msg'> "mật khẩu" tối thiểu 6 ký tự</span>}
                                    </span>
                                </>
                            )}
                            <span onClick={() => setIsShowPassword(!isShowPassword)}>
                                {isShowPassword ? <ImEyeBlocked className='input-icon-change-password '/> : <ImEye className='input-icon-change-password '  /> }
                            </span>

                            {/* <i className="fas fa-eye-slash  input-icon" onClick={handleShowHidePassword}></i> */}
                        </p>

                        <p className='div-input-password'>
                            <label className="input-title">Nhập lại mật khẩu mới</label>
                            <input
                                className="w3-input input-user-password"
                                type={isShowPasswordReType ? "text" : "password"}
                                name='retypePassword'
                                {...register("retypePassword", { required: true, minLength: 6 })}
                            />
                            {Object.keys(errors).length !== 0 && (
                                <>
                                    <span>
                                        {errors.retypePassword?.type === "required" && <span className='text-warning-msg'>Vui lòng nhập "mật khẩu"</span>}
                                    </span>
                                    <span>
                                        {errors.retypePassword?.type === "minLength" && <span className='text-warning-msg'> "mật khẩu" tối thiểu 6 ký tự</span>}
                                    </span>
                                </>

                            )}
                            <span onClick={() => handleShowHidePasswordReType(!isShowPassword)}>
                                {isShowPassword ? <ImEyeBlocked className='input-icon-change-password-retype'/> : <ImEye className='input-icon-change-password-retype'  /> }
                            </span>
                        </p>

                        <p className='div-btn-login'>
                            <button type='submit' className="btn-login">Đổi mật khẩu</button>
                        </p>

                    </form>



                </div>
                <Union />
            </div>

        </div>
    )
}

export default ChangePassword 