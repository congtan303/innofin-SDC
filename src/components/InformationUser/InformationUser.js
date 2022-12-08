import { Link } from 'react-router-dom'
import imgBackground from '../../asset/Ellipse\ 14.png'
import imgEdit from '../../asset/Vector-edit.png'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useState, useContext } from 'react'
import './InformationUser.css'
import Union from '../Union/Union'
import ChangeAvatar from '../ChangeAvatar/ChangeAvatar';
import { UserContext } from '../../context/UserContext/UserContext';
import moment from 'moment'
import { from } from 'form-data';


export default function InfomationUser() {
    const { dataUser } = useContext(UserContext);
    // tạo biến datePicker
   
    const [ dataIdentity, setDataIdentity ] = useState(dataUser.identityNumber)
    // const [isInEditId, setIsInEditId] = useState(false)
// console.log(isInEditId);
    const changeIdentity = () => {
       
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
                <div className="information-name">{dataUser.surname} {dataUser.name}</div>
                <div className="information-id">Mã số ID: {dataUser.identityNumber}</div>
            </div>
            <hr className="information-hr"></hr>
            <div className="information-account-balance">Số dư tài khoản điểm <span className="information-coin">{dataUser.point && dataUser.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span> điểm</div>

            <div className="information-user-card">

                <div className='information-date-of-birth'>
                    <div className='information-date-of-birth-text'>Ngày sinh:</div>
                    <div className='information-date-of-birth-content'>{moment(dataUser.dateOfBirth).format("DD/MM/YYYY")}</div>
                    <div className='btn-edit-information'>
                        {/* <img src={imgBackground}></img> */}
                        <img src={imgEdit}></img>
                    </div>


                </div>
                <div className='hr-information-user'></div>
                <div className='information-identity-number'>
                    <div className='information-identity-number-text'>Số CMND:</div>
                    <div className='information-identity-number-content'>{dataUser.identityNumber}</div>
                    <div className='btn-edit-information' onClick={changeIdentity}>
                        <img src={imgEdit}></img>
                    </div>

                </div>
                <div className='hr-information-user'></div>

                <div className='information-phone-number'>
                    <div className='information-phone-number-text'>Số điện thoại:</div>
                    <div className='information-phone-number-content'>{dataUser.phoneNumber}</div>
                    <div className='btn-edit-information-phone-number'>
                        <img src={imgEdit}></img>

                    </div>
                   


                </div>




            </div>




            <Union />
        </div>
    )
}