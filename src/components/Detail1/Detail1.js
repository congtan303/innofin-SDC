import './Detail1.css'

export default function Detail() {
    return (
        <div>
            {/* header */}
            <div className="Detail-1-background">

            </div>
            <button className="history-previous-btn">

            </button>
            <div className="history-title">
                Thu hộ
            </div>
            <div className="history-notification">

            </div>

            <div className="history-number-notification purple">
                1
            </div>
            <div className="history-background-notification">

            </div>

            {/* body */}

            <div className="Detail-1-content">
                <div className="Detail-1-card-body">
                    <div className="detail-1-avatar"></div>
                    <div className="detail-1-name">HD Bank</div>
                    <div className="detail-1-address">25 Nguyễn Thị Minh Khai, Quận 1, tp. HCM</div>
                    <hr className="detail-1-hr" />
                    <div className="detail-1-money">Số tiền phải thu: <strong className="blue">10,000,000</strong></div>
                    <div className="detail-1-name-money">Người nộp tiền: <strong>Nguyễn Thị Huệ</strong></div>
                    <div className="detail-1-phone-number">Số điện thoại: <strong>0923 221 554</strong></div>
                    <div className="detail-1-contact">
                        <div className="detail-1-contact-background"></div>
                        <div >
                        <i class="fas fa-phone-alt detail-1-contact-icon"></i>
                        </div>
                    </div>
                </div>
                <ul className="detail-1-list-note">
                    <li>Khi bấm nút "bắt đầu" người nộp tiền sẽ được thông báo 
                        rằng bạn sẽ đến vòng 15 phút 
                    </li>
                    <li>Bạn không thể thay đổi địa điểm thu sau khi 
                        bấm nút bên dưới
                    </li>   
                </ul>

                <div className="btn-confirm-success-money">
                    <div className="btn-confirm-begin">Bắt đầu di chuyển</div>
                </div>
            </div>

            {/* footer */}
            <div className="footer"></div>
            <div className="footer-tool-app">
                <div className="footer-tool-app-icon-1">
                    <div className="footer-tool-description-app">Thu hộ</div>
                </div>
                <div className="footer-tool-app-icon-2">
                    <div className="footer-tool-description-history">Lịch sử</div>
                </div>
                <div className="footer-tool-app-icon-3">
                    <div className="footer-tool-description-account">Tài khoản</div>
                </div>
            </div>
        </div>
    )
}