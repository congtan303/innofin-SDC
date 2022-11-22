import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Recharge.css'

export default function Recharge() {
    const [moneys, setMoneys] = useState('')

   const handleOnChangeMoney = (event) => {
    const {value} = event.target
        setMoneys(value.replaceAll(",", ''))
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

            </div>
            <div className="recharge-code">Mã giao dịch nạp tiền</div>
            <input className="recharge-input-code"></input>
            <hr className="recharge-hr-1" />

            <div className="recharge-coin">Số tiền muốn nạp</div>
            <input
             className="recharge-input-coin"
              type="text" 
              value={moneys.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              onChange={handleOnChangeMoney} />
            <span className="recharge-text">Điểm</span>
            <hr className="recharge-hr-2"></hr>
            <div className='div-button-recharge'>
                <Link to="/recharge-confirm">
                    <button className="btn-recharge-password">Nạp điểm</button>
                </Link>

            </div>

        </div>
    )
}