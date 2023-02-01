import { Link, useParams, useNavigate } from 'react-router-dom'
import './ListMoney.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import unionHeaderHistory from '../../asset/Union-top.png'

export default function ListMoney() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { id, lat, lng } = useParams()
    const [statement, setStateMent] = useState([])
    const [collect, setCollect] = useState({})
    const [isCheckBox, setIsCheckBox] = useState(false)

    const access_token = localStorage.getItem('access_token')

    const config = {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }
    // api hiển thị thông tin thu hộ
    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/app/mobile/start-collect', config)
            .then((response) => {
                setCollect(response.data)
            })

    }, [])
    // lấy danh sách bảng kê điện tử
    useEffect(() => {
        axios.get('https://home-dev.innofin.vn/api/app/mobile/start-collect', config)
            .then((response) => {
                setStateMent(response.data.statement)
            })

    }, [])

    const onHandleSubmit = (e) => {
        navigate(`/image-verify/${id}/${lat}/${lng}`)

    }


    return (
        <div className='history-container'>

            <div className="header-history">
                <Link to={`/detail-start-collect/${id}/${lat}/${lng}`}>
                    <div className='header-history-previous-btn'>

                    </div>
                </Link>

                <div className="header-history-title">Bảng kê điện tử</div>
                <div className="header-history-notification">
                    <div className="header-history-notification-number">1</div>
                </div>
                <img src={unionHeaderHistory} className='union-header-history' />
            </div>

            {/* body */}
            <div className='list-money-content'>

                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="List-money-body">
                        <table className='list-money-table'>
                            <thead>
                                <tr>
                                    <th>Mệnh giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statement && statement.map((item, index) => (
                                    item.quantity !== 0 ?
                                        (
                                            <tr key={index}>
                                                <td className='denominations'>{item.denomination.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</td>
                                                <td className='quantity'>{item.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                                <td className='total-cash'>{(item.denomination * item.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</td>

                                            </tr>
                                        )

                                        : null

                                )





                                )}
                            </tbody>
                            <tfoot>

                                <tr>
                                    <td className='list-money-total'>Tổng cộng</td>
                                    <td></td>
                                    <td className='list-money-total-money'>{collect.total && collect.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</td>
                                </tr>
                            </tfoot>


                        </table>
                    </div >

                    <div className="confirm-money">
                        <input
                            type="checkbox"
                            value="enough-money"
                            id="money"
                            className="input-checkbox"
                            name='inputCheckbox'
                            {...register("inputCheckbox", { required: 'vui lòng bấm nút xác nhận ' })}
                            onClick={() => setIsCheckBox(!isCheckBox)}
                        />
                        <label htmlFor='money'> Tôi đã nhận đủ số tiền cần thu</label>
                        <div className='circle-checkbox'></div>
                        
                    </div>
                    {errors.inputCheckbox && <span className='text-warning-msg '>{errors.inputCheckbox.message}</span>}
                    <div className='btn-group-list-money'>
                        <button className={isCheckBox ? "btn-edit-table" : "btn-edit-table-active"}>
                            Sửa bảng kê
                        </button>

                        <button
                            type='submit'
                            className={isCheckBox ? "btn-complete-edit-active" : "btn-complete-edit"}
                        >
                            Hoàn tất
                        </button>
                    </div>


                </form>
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