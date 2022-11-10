import { Link } from 'react-router-dom'
import './ListMoney1.css'
import UnionTop from '../Union-top/UnionTop'
import FooterHistory from '../FooterHistory/FooterHistory'
export default function ListMoney() {
    return (
        <div className='container'>
            <div className="header-history">
                <div className='header-history-previous-btn'>

                </div>
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
                    <label> Tôi đã nhận đủ số tiền cần thu</label>
                </div>

                <div className="edit-table">
                    <button className="btn-edit-table">Sửa bảng kê</button>
                </div>

                <Link to="/list-money-complete">
                    <div className="complete-edit">
                        <button className="btn-complete-edit">Hoàn tất</button>
                    </div>
                </Link>
            </div>

            {/* footer */}
            <FooterHistory />

        </div>
    )
}