import './FooterHistory.css'
import { Link } from 'react-router-dom'
export default function FooterHistory() {
    return (
        <div>
            <div className="footer-history">
                <Link to="/home-page">
                    <div className="footer-history-icon">
                        <div className="footer-history-icon-img">

                        </div>

                        <div className="footer-history-icon-text">
                            Thu hộ
                        </div>


                    </div>
                </Link>
                <div className="footer-history-active">
                    <div className="footer-history-active-img">

                    </div>
                    <div className="footer-history-active-text">
                        Lịch sử
                    </div>
                </div>
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