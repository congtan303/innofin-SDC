import './FooterAccount.css'
import { Link } from 'react-router-dom'
export default function FooterAccount() {
    return (
        <div >
            <div className="footer-history">
                <Link to="/home-page">
                    <div className="footer-history-icon">
                        <div className="footer-history-icon-img">

                        </div>
                        <div className="footer-history-icon-normal">
                            Thu hộ
                        </div>
                    </div>
                </Link>
                <Link to="/history">
                <div className="footer-history-normal">
                    <div className="footer-history-img">

                    </div>
                    <div className="footer-history-text-normal">
                        Lịch sử
                    </div>
                </div>
                </Link>
                
                <div className="footer-history-account-active">
                    <div className="footer-history-account-active-img">

                    </div>
                    <div className="footer-history-account-text">
                        Tài khoản
                    </div>
                </div>

            </div>
        </div>
    )
}