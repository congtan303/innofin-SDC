import { Link } from 'react-router-dom'
import "./Account.css";
import union from '../../asset/Union-top-account.png'
import ChangeAvatar from '../ChangeAvatar/ChangeAvatar';
import NotiBell from '../../asset/Vector-bell.png'
import FooterAccount from '../FooterAccount/FooterAccount';
import iconWallet from '../../asset/wallet.png'
import walletBackground from '../../asset/Ellipse\ 14.png'
import iconHelp from '../../asset/icon-help.png'
import helpBackground from '../../asset/Ellipse\ 15.png'
import iconSetting from '../../asset/icon-setting.png'
import settingBackground from '../../asset/Ellipse\ 15.png'
import iconContact from '../../asset/Vector-contact.png'
import contactBackground from '../../asset/Ellipse\ 16.png'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserContext';

const Account = () => {
    
    const { dataUser } = useContext(UserContext);
    
    return (
        
        <div className="account-container">
            {/* header */}
                
                    <div className="Account-header">
                    <div className="Account-background">
                    </div>
                    <div className='account-icon-notification'>
                        <img src={NotiBell} alt='img-notification'/>
                        <span className="account-number-noti">1</span>
                    </div>
    
                    <div className="Account-header-avatar">
                        <ChangeAvatar />
                    </div>
                    <Link to="/information-user">
                        <div className="Account-header-name">{dataUser.surname} {dataUser.name}</div>
                    </Link>
    
                    <div className="Account-header-number-id">Mã số ID: {dataUser.id}</div>
                    <div className='account-union'>
                        <img src={union} alt="img-union"/>
                    </div>
                </div>
    
                {/* body */}
    
                <div className="account-balance">
                    <div className="account-balance-infomation">
                        Số dư tài khoản điểm
                    </div>
                    <div>
                        <span className="number-money">{dataUser.point && dataUser.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> <span className="diem">điểm</span>
                    </div>
                </div>

            <div className='account-content-wrap'>
                <div className="account-content">
                    <div className="account-icon">
                        <div className="account-wallet-img">

                            <div className='elipse-wallet'>
                                <img src={walletBackground} />
                                <img src={iconWallet} className="wallet-icon" />
                            </div>

                        </div>

                        <Link to='/recharge-money'>
                            <div className="account-wallet-img--info">Nạp điểm vào tài khoản</div>
                        </Link>

                    </div>

                    <div className="account-icon">
                        <div className="account-help-img">

                            <div className='elipse-help'>
                                <img src={helpBackground} />
                                <img src={iconHelp} className="help-icon" />
                            </div>
                        </div>

                        <Link to="/helps">
                            <div className="account-help-img-info">Trợ giúp</div>
                        </Link>

                    </div>

                    <div className="account-icon">
                        <div className="account-setting-img">

                            <div className='elipse-setting'>
                                <img src={settingBackground} />
                                <img src={iconSetting} className="setting-icon" />
                            </div>
                        </div>

                        <Link to='/setting'>
                            <div className="account-setting-img-info">Cài đặt</div>
                        </Link>

                    </div>

                    {/* hr */}
                    <div className='account-hr'></div>
                    <div className="account-icon">
                        <a href='tel:0909 99 99 99'>
                            <div className="account-contact-img">
                                <div className='elipse-contact'>
                                    <img src={contactBackground} className="contact-background" />
                                    <img src={iconContact} className="contact-icon" />
                                </div>
                            </div>
                        </a>

                        <div>
                            <div className="account-contact-info">Thông báo khẩn</div>
                            <div className='account-contact-phone-number'>0909 99 99 99</div>
                        </div>
                    </div>
                    <div className='account-contact-description'>Số đường dây nóng hỗ trợ nhân viên thu hộ
                        trong mọi trường hợp khẩn cấp</div>
                </div>
            </div>

            <FooterAccount />

        </div>
    )
}

export default Account