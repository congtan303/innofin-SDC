import './FooterApp.css'
import { Link } from 'react-router-dom'
export default function FooterApp() {
    return (
        <div>
            <div className="footer-history">
                <div className="footer-history-icon-active">
                    <div className="footer-history-icon-img-active">

                    </div>
                    <Link to="/home-page">
                        <div className="footer-history-icon-text">
                            Thu hộ
                        </div>
                    </Link>

                </div>
                <Link to="/history">
                <div className="footer-history-normal">
                    <div className="footer-history-img">

                    </div>
                    <div className="footer-history-text-normal">
                        Lịch sử
                    </div>
                </div>
                </Link>
                
                <Link to="/account-user">
                <div className="footer-history-account">
                    <div className="footer-history-account-img">

                    </div>
                    <div className="footer-history-account-text">
                        Tài khoản
                    </div>
                </div>
                </Link>
                

            </div>
        </div>
    )
}