import { Link } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import './InformationUser.css'
import ChangeAvatar from '../ChangeAvatar/ChangeAvatar';
import moment from 'moment'
import LoaderAnimation from '../LoaderAnimation/LoaderAnimation';
export default function InfomationUser() {
    const [dataUser, setDataUser] = useState({})
    const [loader, setLoader] = useState(true)
    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }

    // lấy data user
    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/mobile/my-profile/get-profile', config)
            .then((response) => {
                setDataUser(response.data)
                setLoader(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {loader ? <LoaderAnimation /> :
                <div className='info-user-container'>

                    <div className="btn-setting">
                        <Link to="/setting">
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
                        <div className="information-name">{dataUser.surname && dataUser.surname} {dataUser.name && dataUser.name}</div>
                        <div className="information-id">Mã số ID: {dataUser.identityNumber && dataUser.identityNumber}</div>
                    </div>
                    <hr className="information-hr"></hr>
                    <div className="information-account-balance">Số dư tài khoản điểm <span className="information-coin">{dataUser.point && dataUser.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span> điểm</div>

                    <div className="information-user-card">
                        <div className="information-user-card-wrap">
                            <div className='information-date-of-birth'>
                                <div className='information-date-of-birth-text'>Ngày sinh:</div>
                                <div className='information-date-of-birth-content'>{moment(dataUser.dateOfBirth && dataUser.dateOfBirth).format("DD/MM/YYYY")}</div>
                            </div>
                            <div className='hr-information-user'></div>
                            <div className='information-identity-number'>
                                <div className='information-identity-number-text'>Số CCCD:</div>
                                <div className='information-identity-number-content'>{dataUser.identityNumber && dataUser.identityNumber}</div>


                            </div>
                            <div className='hr-information-user'></div>

                            <div className='information-phone-number'>
                                <div className='information-phone-number-text'>Số điện thoại:</div>
                                <div className='information-phone-number-content'>{dataUser.phoneNumber && dataUser.phoneNumber}</div>

                            </div>
                        </div>

                    </div>


                    <Link to="/edit-profile">
                        <div className='btn-update-information'>
                            <button className='btn-submit-update'>
                                Cập nhật thông tin
                            </button>
                        </div>
                    </Link>

                    <div className='union-info-user'></div>
                </div>}
        </>

    )
}