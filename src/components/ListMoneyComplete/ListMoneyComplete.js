import './ListMoneyComplete.css'
import UnionTop from '../Union-top/UnionTop'
export default function ListMoneyComplete() {
    return (
        <div className='container'>
            <header>
                <div className="history-header-background">

                </div>
                <button className="history-previous-btn">

                </button>
                <div className="history-title">
                    Bảng kê điện tử
                </div>
                <div className="history-notification">

                </div>
                <UnionTop />
                <div className="history-number-notification">
                    1
                </div>
                <div className="history-background-notification">

                </div>
            </header>

            {/* body */}
            <div className="List-money-body">
                <div className="List-money-body-table">

                    <table className="table-1">
                        <thead>
                            <tr>
                                <th>Mệnh giá </th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>

                    </table>

                </div>
            </div >
            <div className="tbody-wrap">
                <table className="table-2">
                    <tr>
                        <td><span className="text-right">500,000đ</span></td>
                        <td><span className="text-right">4</span></td>
                        <td><span className="text-right">2,000,000đ</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">100,000đ</span></td>
                        <td><span className="text-right">2</span></td>
                        <td><span className="text-right">200,000đ</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">100,000đ</span></td>
                        <td><span className="text-right">6</span></td>
                        <td><span className="text-right">600,000đ</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">200,000đ</span></td>
                        <td><span className="text-right">6</span></td>
                        <td><span className="text-right">1,200,000đ</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">300,000đ</span></td>
                        <td><span className="text-right">7</span></td>
                        <td><span className="text-right">2,100,000đ</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">50,000đ</span></td>
                        <td><span className="text-right">10</span></td>
                        <td><span className="text-right">500,000đ</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">300,000đ</span></td>
                        <td><span className="text-right">3</span></td>
                        <td><span className="text-right">900,000đ</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">300,000đ</span></td>
                        <td><span className="text-right">5</span></td>
                        <td><span className="text-right">1,500,000đ</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">300,000đ</span></td>
                        <td><span className="text-right">7</span></td>
                        <td><span className="text-right">2,100,000</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-right">300,000đ</span></td>
                        <td><span className="text-right">7</span></td>
                        <td><span className="text-right">2,100,000</span></td>
                    </tr>
                    <tr>
                        <td><strong><span className="text-right table-total-money">Tổng cộng</span></strong></td>
                        <td className="td-hidden">2889</td>
                        <td className="blue"><span className="text-right total-money">7,000,000</span></td>
                    </tr>

                </table>
            </div>

            <div className="confirm-money">
                <input type="radio" id="enough-money" value="enough-money" className="input-radio"></input>
                <label for="enough-money">    Tôi đã nhận đủ số tiền cần thu</label>
            </div>




            <div className="edit-table">
                <button className="btn-edit-table remove-edit-table">Sửa bảng kê</button>
            </div>
            <div className="complete-edit">
                <button className="btn-complete-edit edit-complete">Hoàn tất</button>
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

        </div >
    )
}