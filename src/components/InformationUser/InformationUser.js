import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'
import './InformationUser.css'
import Union from '../Union/Union'
import ChangeAvatar from '../ChangeAvatar/ChangeAvatar';
export default function InfomationUser() {

    const [defaultValue, setDefaultValue] = useState("")

    const [numberID, setNumberID] = useState({
        id: "2736 56 276",
        isInEditNumberID: false
    })
    
    const changeEditNumberID = () => {
        setNumberID({
            isInEditNumberID: !numberID.isInEditNumberID,
            id: numberID.id
        })

    }

    const [phoneNumber, setPhoneNumber] = useState({
        phone: "0902 366 722",
        isInEditNumberPhone: false
    })

    const changeEditNumberPhone = () => {
        setPhoneNumber({
            isInEditNumberPhone: !phoneNumber.isInEditNumberPhone,
            phone: phoneNumber.phone
        })
    }

    
    return (
        <div className='info-user-container'>
            <div className="btn-setting">
                <Link to="/account-user">
                    <button className="previous-button">
                        <i className="fal fa-chevron-left icon-back"></i>
                    </button>
                </Link>

            </div>
            <div className="title">
                Thông tin cá nhân
            </div>
            <div className="information-card">

            </div>

            <div className="information-card-avatar">
            <ChangeAvatar />
            </div>
            <div className="information-card-description">
                <div className="information-name">Lê Minh Sơn</div>
                <div className="information-id">Mã số ID: 225556</div>
            </div>
            <hr className="information-hr"></hr>
            <div className="information-account-balance">Số dư tài khoản <span className="information-coin">200,000,000 </span> điểm</div>
            <div className="information-user">
            <TextField
                id="date"
                type="date"
                defaultValue={defaultValue}
                onChange={e => setDefaultValue(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </div>
            <div className="information-user-date">
                Ngày sinh:
            </div>
            <div className="information-user-number-date">
             
            </div>
            <div className="information-edit-date-background">
                <div className="information-edit-date-img"></div>
            </div>

            <div className="information-user-CCCD">
                Số CMND/CCCD:
            </div>

            {numberID.isInEditNumberID ? <div>
                <input type="text" defaultValue={numberID.id} className="input-cccd" ></input>
               
            </div>
            :  <div className="information-user-number-CCCD">{numberID.id}</div>
            }
            
            <div className="information-edit-CCCD-background" onClick={changeEditNumberID}>
                <div className="information-edit-CCCD-img"></div>
            </div>

            
            <div className="information-user-phone">
                Số điện thoại:
            </div>
            {phoneNumber.isInEditNumberPhone? <input type="text" defaultValue={phoneNumber.phone} className="input-phone-number" ></input>
            :<div className="information-user-phone-numb">{phoneNumber.phone}</div>}
            
            <div className="information-edit-phone-number-background" onClick={changeEditNumberPhone}>
                <div className="information-edit-phone-number-img"></div>
            </div>
            
            <Union />
        </div>
    )
}