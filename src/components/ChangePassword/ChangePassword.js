import { Link, useNavigate } from 'react-router-dom'
import "./ChangePassword.css"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ImEyeBlocked, ImEye } from 'react-icons/im'
import iconLock from '../../asset/Group\ 4.svg'

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
            <div className="change-password-container">
                <Link to="/setting">
                    <button className="previous-button">
                        <i className="fal fa-chevron-left icon-back"></i>
                    </button>
                </Link>

                <div className='div-icon-lock'>
                    <img src={iconLock} className="icon-lock" />
                </div>
                <div className="Login-status">
                    <div className="login-info">Đăng nhập lần đầu thành công</div>
                    <div className="login-retpye-password">Vui lòng nhập lại mật khẩu mới</div>
                </div>

                <div className="form-group-change-password">
                    <form className="w3-container input-form" onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className='div-input-change-password'>
                            <label className="input-title">Mật khẩu mới</label>
                            <div className='div-input-wrap'>
                                <input
                                    className="w3-input input-change-password"
                                    type={isShowPassword ? "text" : "password"}
                                    name='newPassword'
                                    {...register("newPassword", { required: true, minLength: 6 })}
                                />

                                <span onClick={() => setIsShowPassword(!isShowPassword)}>
                                    {isShowPassword ? <ImEye className='input-icon-change-password ' /> : <ImEyeBlocked className='input-icon-change-password ' />}
                                </span>
                            </div>
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
                        </div>

                        <div className='div-input-change-password'>
                            <label className="input-title">Nhập lại mật khẩu mới</label>
                            <div className='div-input-wrap'>

                                <input
                                    className="w3-input input-change-password"
                                    type={isShowPasswordReType ? "text" : "password"}
                                    name='retypePassword'
                                    {...register("retypePassword", { required: true, minLength: 6 })}
                                />

                                <span onClick={() => setIsShowPasswordRetype(!isShowPasswordReType)}>
                                    {isShowPasswordReType ? <ImEye className='input-icon-change-password-retype' /> : <ImEyeBlocked className='input-icon-change-password-retype' />}
                                </span>
                            </div>
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
                        </div>

                        <p className='div-btn-login'>
                            <button type='submit' className="btn-login">Đổi mật khẩu</button>
                        </p>
                    </form>
                </div>
                <div>
                    <div className='union-bottom'></div>
                </div>

            </div>

        </div>
    )
}

export default ChangePassword 