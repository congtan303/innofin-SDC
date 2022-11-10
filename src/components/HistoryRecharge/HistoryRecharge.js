import { Link } from 'react-router-dom'
import './HistoryRecharge.css'
import UnionTop from '../Union-top/UnionTop'
import HeaderHistoryRecharge from '../HeaderHistoryRecharge/HeaderHistoryRecharge'
import FooterHistory from '../FooterHistory/FooterHistory'
export default function HistoryRecharge() {
    return (
        <div className='container'>
            <HeaderHistoryRecharge />

            <div >
                <ul className='history-list'>
                    <li className='history-list-description'>
                        <div>
                            <div className='history-list-status'>Nạp điểm thành công</div>
                            <div className='history-list-money'>Số tiền đã thu: 10,000,000</div>
                            <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                            <div className='history-list-trading-code'>Mã giao dịch: 123666</div>
                        </div>
                        <div className='history-list-status-icon-success'>
                            <div className='history-list-status-icon-success-img'></div>
                        </div>

                    </li>
                    <li className='history-list-description'>
                        <div className='history-list-status'>Nạp điểm thành công</div>
                        <div className='history-list-money'>Số tiền đã thu: 30,000,000</div>
                        <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                        <div className='history-list-trading-code'>Mã giao dịch: 123666</div>
                        <div className='history-list-status-icon-success'>
                            <div className='history-list-status-icon-success-img'></div>
                        </div>
                    </li>
                    <li className='history-list-description'>
                        <div className='history-list-status'>Nạp điểm đang chờ</div>
                        <div className='history-list-money'>Số tiền đã thu: 10,000,000</div>
                        <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                        <div className='history-list-trading-code'>Mã giao dịch: 123666</div>
                        <div className='history-list-status-icon-waitting'>
                            <div className='history-list-status-icon-waitting-img'></div>
                        </div>
                    </li>
                    <li className='history-list-description'>
                        <div className='history-list-status'>Nạp điểm bị từ chối</div>
                        <div className='history-list-money'>Số tiền đã thu: 10,000,000</div>
                        <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                        <div className='history-list-trading-code'>Mã giao dịch: 123666</div>
                        <div className='history-list-status-icon-denied'>
                            <div className='history-list-status-icon-denied-img'>
                                <div className='history-list-status-icon-denied-img-2'>

                                </div>
                            </div>

                        </div>
                    </li>
                    <li className='history-list-description'>
                        <div className='history-list-status'>Nạp điểm bị hủy</div>
                        <div className='history-list-money'>Số tiền đã thu: 10,000,000</div>
                        <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                        <div className='history-list-trading-code'>Mã giao dịch: 123666</div>
                        <div className='history-list-status-icon-canceled-img'>
                            <div className='history-list-status-icon-canceled-img-2'>
                                <i class="far fa-times-circle icon-canceled-img"></i>
                            </div>
                        </div>
                    </li>
                    <li className='history-list-description'>
                        <div className='history-list-status'>Nạp điểm bị hủy</div>
                        <div className='history-list-money'>Số tiền đã thu: 10,000,000</div>
                        <div className='history-list-time'>Giờ thu: 8:00 AM, ngày 18/09/2019</div>
                        <div className='history-list-trading-code'>Mã giao dịch: 123666</div>
                        <div className='history-list-status-icon-canceled-img'>
                            <div className='history-list-status-icon-canceled-img-2'>
                                <i class="far fa-times-circle icon-canceled-img"></i>
                            </div>
                        </div>
                    </li>


                </ul>
            </div>

            <FooterHistory />


        </div>
    )
}