import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './Recharge.css'

export default function Recharge() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [coins, setCoins] = useState('')
    const navigate = useNavigate()

    // hàm submit form nạp điểm
    const onHandleSubmit = (e) => {
        console.log(e);
        navigate("/recharge-confirm")
    }
    // hàm thêm dấu phẩy vào hàng nghìn khi user nhập số điểm muốn nạp
    const handleChangeCoin = (event) => {
        const {value} = event.target
        setCoins(value.replaceAll(",", ''))
    }

    return (
        <div className='recharge-container'>
            <Link to="/account-user">
                <button className="previous-button">
                    <i className="fal fa-chevron-left icon-back"></i>
                </button>
            </Link>
            <div className="Recharge-title">
                Nạp điểm vào tài khoản
            </div>

            <div className="Recharge-guide-1">
                Bước 1: <br />
                Nạp tiền vào tài khoản tại bất kỳ chi nhánh nào của ngân hàng BIDV. Ghi mã số nhân viên trong phần nội dung nạp điểm.
            </div>

            <div className="Recharge-guide-2">
                Bước 2: <br />
                Điền thông tin và nhấn nút "Nạp điểm" bên dưới.
            </div>

            <div className="recharge-information">
                <form className="w3-container input-form" onSubmit={handleSubmit(onHandleSubmit)}>
                    <p>
                        <label className="input-title">Mã giao dịch nạp tiền</label>
                        <input
                            className="w3-input input-user-password"
                            type="text"
                            name='tradingCode'
                            {...register("tradingCode", { required: true })}
                        />
                        {Object.keys(errors).length !== 0 && (
                            <>
                                <span>
                                    {errors.tradingCode?.type === "required" && <span className='text-warning-msg'>Vui lòng nhập "Mã giao dịch nạp tiền"</span>}
                                </span>
                            </>
                        )}

                    </p>

                    <p className='div-input-password'>
                        <label className="input-title">Số điểm muốn nạp</label>
                        <input
                            className="w3-input recharge-input-coin"
                            type="text"
                            value={coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            name='moneyCoin'
                            {...register("moneyCoin", { required: true, onChange: handleChangeCoin })}
                        />
                        <span className='recharge-text-coin'>Điểm</span>
                        {Object.keys(errors).length !== 0 && (
                            <>
                                <span>
                                    {errors.moneyCoin?.type === "required" && <span className='text-warning-msg'>Vui lòng nhập số điểm mà bạn muốn nạp</span>}
                                </span>
                                
                            </>

                        )}
                    </p>

                    <p className='div-btn-login'>
                        <button type='submit' className="btn-login">Nạp điểm</button>
                    </p>

                </form>
            </div>


        </div>
    )
}   