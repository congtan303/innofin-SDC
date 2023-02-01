import { Link, useParams } from 'react-router-dom'
import './ListMoneyComplete.css'
import UnionTop from '../Union-top/UnionTop'
export default function ListMoneyComplete() {
    let { id, lat, lng } = useParams();
    return (
        <div className='container'>
            <div className="header-history">
                <Link to="/list-money">
                    <div className='header-history-previous-btn'>

                    </div>
                </Link>

                <div className="header-history-title">Bảng kê điện tử</div>
                <div className="header-history-notification">
                    <div className="header-history-notification-number">1</div>
                </div>


                <UnionTop />
            </div>

            {/* body */}
            <div className='list-money-content'>
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
                        <tbody>
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
                        </tbody>
                       

                    </table>
                </div>

                <div className="confirm-money">
                    <input type="radio" id="enough-money" value="enough-money" className="input-radio"></input>
                    <label> Tôi đã nhận đủ số tiền cần thu</label>
                </div>

                <Link to="/list-money-1">
                    <div className="edit-table">
                        <button className="btn-edit-table remove-edit-table">Sửa bảng kê</button>
                    </div>
                </Link>
                <Link to={`/image-verify/${id}-${lat}-${lng}`}>
                    <div className="complete-edit">
                        <button className="btn-complete-edit edit-complete">Hoàn tất</button>
                    </div>
                </Link>
            </div>

            {/* footer */}
            <div className="footer-history">
                <Link to="/home-page">
                    <div className="footer-history-icon">
                        <div className="footer-history-icon-img">

                        </div>

                        <div className="footer-history-icon-text-normal">
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